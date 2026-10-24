const { Groq } = require('groq-sdk');
const { createHttpError } = require('../utils/http-error');

const DEFAULT_GROQ_MODEL = 'qwen/qwen3.8-27b';
const CANDIDATE_MODELS = [
  'qwen/qwen3.8-27b',
  'openai/gpt-oss-120b',
  'openai/gpt-oss-20b',
];
const MAX_COMPLETION_TOKENS = 800;

let groqClient = null;

function getGroqClient() {
  if (!process.env.GROQ_API_KEY) {
    throw createHttpError(503, 'Chua cau hinh GROQ_API_KEY cho AI Assistant.');
  }

  if (!groqClient) {
    groqClient = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
  }

  return groqClient;
}

function getGroqModel() {
  return process.env.GROQ_MODEL || DEFAULT_GROQ_MODEL;
}

function sanitizeAssistantOutput(content) {
  return String(content || '')
    .replace(/<think>[\s\S]*?<\/think>/gi, '')
    .replace(/<\/?think>/gi, '')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/^\s*---+\s*$/gm, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function buildFallbackTutorResponse(messages) {
  const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user')?.content || '';
  const queryLower = lastUserMsg.toLowerCase();

  let response = '';

  if (lastUserMsg.includes('お父さん') || queryLower.includes('otoosan') || queryLower.includes('bố') || queryLower.includes('ba')) {
    response = `「お父さん」(Otoosan / おとうさん) nghĩa là "bố", "ba", hoặc "cha" trong tiếng Nhật.\n\n` +
      `- Dùng khi gọi trực tiếp bố mình: "お父さん、いってきます！" (Bố ơi, con đi đây ạ!)\n` +
      `- Dùng khi nói về bố của người khác một cách lịch sự.\n` +
      `- Khi xưng hô về bố của mình với người ngoài, người Nhật dùng từ khiêm nhường là 「父」(Chichi).\n\n` +
      `Từ tương ứng cho mẹ là 「お母さん」(Okaasan) và 「母」(Haha).`;
  } else if (lastUserMsg.includes('お母さん') || queryLower.includes('okaasan') || queryLower.includes('mẹ')) {
    response = `「お母さん」(Okaasan / おかあさん) nghĩa là "mẹ" trong tiếng Nhật.\n\n` +
      `- Dùng khi gọi trực tiếp mẹ mình hoặc nói về mẹ của người khác.\n` +
      `- Khi nói về mẹ của mình với người ngoài, dùng từ khiêm nhường là 「母」(Haha).`;
  } else if (lastUserMsg.includes('父') && lastUserMsg.includes('会社員')) {
    response = `Nghĩa của câu:\n"Bố tôi là nhân viên công ty."\n\n` +
      `Phân tích các thành phần:\n` +
      `- 父 (ちち, chichi): Bố/cha (dùng khi nói về bố của mình với người khác).\n` +
      `- は (wa): Trợ từ chủ ngữ.\n` +
      `- 会社員 (かいしゃいん, kaishain): Nhân viên công ty.\n` +
      `- です (desu): Là (thì lịch sự khẳng định).`;
  } else if (queryLower.includes('chào') || queryLower.includes('konnichiwa') || queryLower.includes('こんにちは')) {
    response = `Lời chào thông dụng trong tiếng Nhật:\n` +
      `- おはようございます (Ohayou gozaimasu): Chào buổi sáng.\n` +
      `- こんにちは (Konnichiwa): Chào buổi trưa / ban ngày.\n` +
      `- こんばんは (Konbanwa): Chào buổi tối.`;
  } else if (queryLower.includes('cảm ơn') || queryLower.includes('arigatou') || queryLower.includes('ありがとう')) {
    response = `Cách nói cảm ơn trong tiếng Nhật:\n` +
      `- ありがとうございます (Arigatou gozaimasu): Cảm ơn lịch sự.\n` +
      `- ありがとう (Arigatou): Cảm ơn thân mật (với bạn bè).`;
  } else {
    response = `Về câu hỏi: "${lastUserMsg}"\n\nBạn có thể hỏi cụ thể về từ vựng, ngữ pháp hoặc câu cần dịch để tôi giải thích súc tích kèm ví dụ nhé.`;
  }

  return response;
}

async function createJapaneseTutorCompletion(messages, ragContext = {}) {
  const apiKey = process.env.GROQ_API_KEY?.trim();

  if (apiKey) {
    const configuredModel = getGroqModel();
    const modelsToTry = [configuredModel, ...CANDIDATE_MODELS.filter((m) => m !== configuredModel)];

    for (const model of modelsToTry) {
      try {
        const completion = await getGroqClient().chat.completions.create({
          model,
          messages,
          temperature: 0.35,
          max_completion_tokens: MAX_COMPLETION_TOKENS,
        });

        return {
          model: completion.model || model,
          content: sanitizeAssistantOutput(completion.choices?.[0]?.message?.content),
          usage: completion.usage || null,
        };
      } catch (error) {
        console.error(`Groq completion error with ${model}:`, error.message);
      }
    }
  }

  const fallbackText = buildFallbackTutorResponse(messages, ragContext);
  return {
    model: getGroqModel(),
    content: sanitizeAssistantOutput(fallbackText),
    usage: null,
  };
}

async function* createJapaneseTutorStream(messages, ragContext = {}) {
  const apiKey = process.env.GROQ_API_KEY?.trim();

  if (apiKey) {
    const configuredModel = getGroqModel();
    const modelsToTry = [configuredModel, ...CANDIDATE_MODELS.filter((m) => m !== configuredModel)];

    for (const model of modelsToTry) {
      try {
        const stream = await getGroqClient().chat.completions.create({
          model,
          messages,
          temperature: 0.35,
          max_completion_tokens: MAX_COMPLETION_TOKENS,
          stream: true,
        });

        for await (const chunk of stream) {
          const delta = chunk.choices?.[0]?.delta?.content || '';
          if (delta) {
            yield delta;
          }
        }
        return;
      } catch (error) {
        console.error(`Groq streaming error with ${model}:`, error.message);
      }
    }
  }

  const fallbackText = buildFallbackTutorResponse(messages, ragContext);
  const words = fallbackText.split(/(?<=\s|。|、|\n)/);

  for (const word of words) {
    yield word;
    await new Promise((resolve) => setTimeout(resolve, 20));
  }
}

module.exports = {
  createJapaneseTutorCompletion,
  createJapaneseTutorStream,
  getGroqModel,
  sanitizeAssistantOutput,
};
