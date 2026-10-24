const { Groq } = require('groq-sdk');
const { createHttpError } = require('../utils/http-error');

const DEFAULT_GROQ_MODEL = 'llama-3.3-70b-versatile';
const MAX_COMPLETION_TOKENS = 900;

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

function buildFallbackTutorResponse(messages, ragContext = {}) {
  const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user')?.content || '';
  const level = ragContext.level || 'N5';
  const contextText = ragContext.contextText || '';

  let response = `Xin chào! Tôi là Trợ lý học tiếng Nhật MiraiGo (trình độ ${level}).\n\n`;

  if (contextText) {
    response += `Dữ liệu bài học và từ điển liên quan:\n${contextText}\n\n`;
  }

  const queryLower = lastUserMsg.toLowerCase();
  if (lastUserMsg.includes('お父さん') || queryLower.includes('otoosan') || queryLower.includes('bố') || queryLower.includes('ba')) {
    response += `「お父さん」(Otoosan / おとうさん) nghĩa là "bố", "ba", hoặc "cha" trong tiếng Nhật.\n\n` +
      `- Dùng khi gọi trực tiếp bố của mình: "お父さん、いってきます！" (Bố ơi, con đi đây ạ!)\n` +
      `- Dùng khi nói về bố của người khác một cách lịch sự.\n` +
      `- Lưu ý: Khi xưng hô về bố của mình với người ngoài trong giao tiếp khiêm nhường, người Nhật thường dùng từ 「父」(Chichi).\n\n` +
      `Từ tương ứng cho mẹ là 「お母さん」(Okaasan / mẹ) và 「母」(Haha).`;
  } else if (lastUserMsg.includes('お母さん') || queryLower.includes('okaasan') || queryLower.includes('mẹ')) {
    response += `「お母さん」(Okaasan / おかあさん) nghĩa là "mẹ" trong tiếng Nhật.\n\n` +
      `- Dùng khi gọi trực tiếp mẹ mình hoặc nói về mẹ của người khác.\n` +
      `- Khi nói về mẹ của mình với người ngoài trong giao tiếp khiêm nhường, dùng 「母」(Haha).`;
  } else if (queryLower.includes('chào') || queryLower.includes('konnichiwa') || queryLower.includes('こんにちは')) {
    response += `Trong tiếng Nhật, lời chào thông dụng vào ban ngày là こんにちは (Konnichiwa). Bạn có thể dùng khi chào hỏi đồng nghiệp, bạn bè hoặc người quen.\n\n` +
      `Vào buổi sáng, hãy dùng おはようございます (Ohayou gozaimasu), và buổi tối dùng こんばんは (Konbanwa).`;
  } else if (queryLower.includes('cảm ơn') || queryLower.includes('arigatou') || queryLower.includes('ありがとう')) {
    response += `Để cảm ơn lịch sự, bạn nên nói: ありがとうございます (Arigatou gozaimasu). Với bạn bè thân thiết, có thể nói ngắn gọn là ありがとう (Arigatou).`;
  } else if (!contextText) {
    response += `Về câu hỏi: "${lastUserMsg}"\n\nBạn có thể hỏi cụ thể về từ vựng, kanji, mẫu câu ngữ pháp N5–N1, hoặc các bài học trong hệ thống để được giải thích chi tiết.`;
  }

  if (!process.env.GROQ_API_KEY) {
    response += `\n\n💡 Mẹo: Bạn có thể điền GROQ_API_KEY vào file backend/.env để kích hoạt AI trực tiếp từ Groq Cloud LLM (giải đáp chuyên sâu 100% mọi câu hỏi tiếng Nhật).`;
  }

  return response;
}

async function createJapaneseTutorCompletion(messages, ragContext = {}) {
  const apiKey = process.env.GROQ_API_KEY?.trim();

  if (apiKey) {
    try {
      const completion = await getGroqClient().chat.completions.create({
        model: getGroqModel(),
        messages,
        temperature: 0.35,
        max_completion_tokens: MAX_COMPLETION_TOKENS,
      });

      return {
        model: completion.model || getGroqModel(),
        content: sanitizeAssistantOutput(completion.choices?.[0]?.message?.content),
        usage: completion.usage || null,
      };
    } catch (error) {
      console.error('Groq completion error:', error.message);
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
    try {
      const stream = await getGroqClient().chat.completions.create({
        model: getGroqModel(),
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
      console.error('Groq streaming error:', error.message);
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
