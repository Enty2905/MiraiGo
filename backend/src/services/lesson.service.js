const {
  findGrammarByLesson,
  findLessonMetadata,
  findLessonsByLevel,
  findVocabularyByLesson,
} = require('../models/vocabulary.model');
const {
  findKanjiByCharacters,
  findVocabularyContainingKanji,
} = require('../models/dictionary.model');
const { createHttpError } = require('../utils/http-error');

const SUPPORTED_LEVELS = new Set(['n1', 'n2', 'n3', 'n4', 'n5']);

function normalizeLevel(level) {
  if (typeof level !== 'string') {
    throw createHttpError(400, 'Vui lòng chọn cấp độ bài học.');
  }

  const normalizedLevel = level.trim().toLowerCase();
  if (!SUPPORTED_LEVELS.has(normalizedLevel)) {
    throw createHttpError(400, 'Cấp độ bài học không được hỗ trợ.');
  }

  return normalizedLevel;
}

function normalizeLessonNumber(lessonNumberInput) {
  const parsedLessonNumber = Number(lessonNumberInput);

  if (!Number.isInteger(parsedLessonNumber) || parsedLessonNumber <= 0) {
    throw createHttpError(400, 'Số bài học phải là số nguyên dương.');
  }

  return parsedLessonNumber;
}

function createLessonId(level, lessonNumber) {
  return `${level}-l${lessonNumber}`;
}

function createLessonDescription(level, lessonNumber, vocabularyCount, grammarCount) {
  const grammarPart = grammarCount > 0 ? ` và ${grammarCount} mẫu ngữ pháp` : '';
  return `Bài ${lessonNumber} cấp độ ${level.toUpperCase()} với ${vocabularyCount} từ vựng${grammarPart}.`;
}

const CURATED_WORD_EXAMPLES = {
  雨: [
    {
      exampleJp: '朝から強い雨が降っているので、傘を持って出かけました。',
      exampleKana: 'あさ から つよい あめ が ふって いる ので、かさ を もって でかけました。',
      exampleVi: 'Vì trời mưa to từ sáng nên tôi đã mang theo ô khi ra ngoài.',
    },
    {
      exampleJp: '午後は雨がやんで、だんだん天気が良くなるそうです。',
      exampleKana: 'ごご は あめ が やんで、だんだん てんき が よく なる そうです。',
      exampleVi: 'Nghe nói buổi chiều mưa sẽ tạnh và thời tiết sẽ dần tốt lên.',
    },
    {
      exampleJp: '明日は雨が降るかもしれませんから、気をつけてください。',
      exampleKana: 'あした は あめ が ふる かも しれません から、き を つけて ください。',
      exampleVi: 'Ngày mai có lẽ trời sẽ mưa nên bạn hãy cẩn thận nhé.',
    },
  ],
  場合: [
    {
      exampleJp: '雨の場合は、明日のイベントは体育館で行われます。',
      exampleKana: 'あめ の ばあい は、あした の イベント は たいいくかん で おこなわれます。',
      exampleVi: 'Trong trường hợp trời mưa, sự kiện ngày mai sẽ được tổ chức tại nhà thi đấu.',
    },
    {
      exampleJp: '緊急の場合は、すぐにこちらの電話番号に連絡してください。',
      exampleKana: 'きんきゅう の ばあい は、すぐ に こちら の でんわばんごう に れんらく して ください。',
      exampleVi: 'Trong tình huống khẩn cấp, xin hãy liên lạc ngay vào số điện thoại này.',
    },
    {
      exampleJp: '遅れる場合は、前もって先生に伝えておく必要があります。',
      exampleKana: 'おくれる ばあい は、まえもって せんせい に つたえて おく ひつよう が あります。',
      exampleVi: 'Trong trường hợp đến muộn, bạn cần báo trước cho giáo viên.',
    },
  ],
  もし: [
    {
      exampleJp: 'もし雨が降ったら、家で本を読みます。',
      exampleKana: 'もし あめ が ふったら、いえ で ほん を よみます。',
      exampleVi: 'Nếu như trời mưa thì tôi sẽ đọc sách ở nhà.',
    },
    {
      exampleJp: 'もし時間があれば、一緒に映画を見に行きませんか。',
      exampleKana: 'もし じかん が あれば、いっしょ に えいが を み に いきませんか。',
      exampleVi: 'Nếu có thời gian, bạn có muốn cùng đi xem phim không?',
    },
    {
      exampleJp: 'もし分からないことがあったら、いつでも聞いてください。',
      exampleKana: 'もし わからない こと が あったら、いつでも きいて ください。',
      exampleVi: 'Giả sử có điều gì không hiểu, xin hãy hỏi bất cứ lúc nào.',
    },
  ],
  できる: [
    {
      exampleJp: '毎日少しずつ練習すれば、日本語で会話ができるようになります。',
      exampleKana: 'まいにち すこしずつ れんしゅう すれば、にほんご で かいわ が できる よう に なります。',
      exampleVi: 'Nếu luyện tập từng chút mỗi ngày, bạn sẽ có thể trò chuyện bằng tiếng Nhật.',
    },
    {
      exampleJp: '駅の近くに新しい図書館ができるそうです。',
      exampleKana: 'えき の ちかく に あたらしい としょかん が できる そうです。',
      exampleVi: 'Nghe nói một thư viện mới sẽ được xây dựng gần nhà ga.',
    },
    {
      exampleJp: '準備ができたら、すぐに出発しましょう。',
      exampleKana: 'じゅんび が できたら、すぐ に しゅっぱつ しましょう。',
      exampleVi: 'Khi đã chuẩn bị xong, chúng ta hãy khởi hành ngay nhé.',
    },
  ],
  必要: [
    {
      exampleJp: '海外旅行に行くときは、パスポートが必要です。',
      exampleKana: 'かいがい りょこう に いく とき は、パスポート が ひつよう です。',
      exampleVi: 'Khi đi du lịch nước ngoài thì hộ chiếu là rất cần thiết.',
    },
    {
      exampleJp: 'この書類は来週の会議で必要になります。',
      exampleKana: 'この しょるい は らいしゅう の かいぎ で ひつよう に なります。',
      exampleVi: 'Tài liệu này sẽ cần thiết cho cuộc họp vào tuần tới.',
    },
    {
      exampleJp: '健康のために、毎日十分な睡眠をとる必要があります。',
      exampleKana: 'けんこう の ため に、まいにち じゅうぶんな すいみん を とる ひつよう が あります。',
      exampleVi: 'Vì sức khỏe, việc ngủ đủ giấc mỗi ngày là điều cần thiết.',
    },
  ],
  準備: [
    {
      exampleJp: '明日の発表のために、資料の準備をしています。',
      exampleKana: 'あした の はっぴょう の ため に、しりょう の じゅんび を して います。',
      exampleVi: 'Tôi đang chuẩn bị tài liệu cho buổi thuyết trình ngày mai.',
    },
    {
      exampleJp: '旅行の準備はもう全部終わりましたか。',
      exampleKana: 'りょこう の じゅんび は もう ぜんぶ おわりました か。',
      exampleVi: 'Bạn đã hoàn tất toàn bộ việc chuẩn bị cho chuyến du lịch chưa?',
    },
    {
      exampleJp: '試験の前に、心の準備をしておくことが大切です。',
      exampleKana: 'しけん の まえ に、こころ の じゅんび を して おく こと が たいせつ です。',
      exampleVi: 'Trước kỳ thi, việc chuẩn bị sẵn tâm lý là rất quan trọng.',
    },
  ],
};

function buildContextualExamples(row, grammarExamples = []) {
  const word = row.word || row.japanese || '';
  const kana = row.kana || row.romaji || word;
  const meaning = (row.meaningVi || row.meaningEn || 'từ này').split(',')[0].trim();
  const fullMeaning = row.meaningVi || row.meaningEn || meaning;
  const wordType = String(row.wordType || '').toLowerCase();

  const collected = [];
  const seenJp = new Set();

  const addExample = (ex) => {
    if (!ex || !ex.exampleJp || seenJp.has(ex.exampleJp)) {
      return;
    }
    seenJp.add(ex.exampleJp);
    collected.push({
      id: ex.id || `ex-${collected.length + 1}`,
      exampleJp: ex.exampleJp,
      exampleKana: ex.exampleKana || '',
      exampleVi: ex.exampleVi || '',
      audioUrl: ex.audioUrl || '',
    });
  };

  if (Array.isArray(row.examples)) {
    row.examples.forEach(addExample);
  }

  if (CURATED_WORD_EXAMPLES[word]) {
    CURATED_WORD_EXAMPLES[word].forEach(addExample);
  }

  if (Array.isArray(grammarExamples) && word) {
    for (const gEx of grammarExamples) {
      if (gEx?.exampleJp && gEx.exampleJp.includes(word)) {
        addExample(gEx);
      }
      if (collected.length >= 3) break;
    }
  }

  let templates = [];
  if (wordType.includes('verb') || (/[うくぐすつぬぶむる]$/u.test(word) && /^(làm|đi|đến|về|ăn|uống|xem|nghe|đọc|viết|mua|bán|học|dạy|gặp|chờ|tìm|giúp|dùng|sử dụng|bắt đầu|kết thúc|thay đổi|tham gia|liên lạc|giải thích|nhớ|quên|mở|đóng|chạy|bơi|nói|hỏi|trả lời|chọn|quyết định|cố gắng|tiếp tục)/i.test(meaning))) {
    templates = [
      {
        exampleJp: `毎日少しずつでも${word}ようにしています。`,
        exampleKana: `まいにち すこしずつ でも ${kana} よう に して います。`,
        exampleVi: `Mỗi ngày tôi đều cố gắng ${meaning} dù chỉ từng chút một.`,
      },
      {
        exampleJp: `${word}前に、もう一度大切なポイントを確認しましょう。`,
        exampleKana: `${kana} まえ に、もう いちど たいせつな ポイント を かくにん しましょう。`,
        exampleVi: `Trước khi ${meaning}, chúng ta hãy xác nhận lại những điểm quan trọng một lần nữa.`,
      },
      {
        exampleJp: `実際に自分で${word}ことで、多くの経験が身につきます。`,
        exampleKana: `じっさい に じぶん で ${kana} こと で、おおく の けいけん が み に つきます。`,
        exampleVi: `Bằng việc tự mình trực tiếp ${meaning}, bạn sẽ tích lũy được nhiều kinh nghiệm.`,
      },
    ];
  } else if (wordType.includes('i-adj') || (word.endsWith('い') && word.length >= 2 && !['きらい', 'きれい', 'ゆうめい', 'ていねい', 'あいまい'].includes(kana))) {
    templates = [
      {
        exampleJp: `この問題は思ったより${word}ので、よく考えてから答えました。`,
        exampleKana: `この もんだい は おもった より ${kana} ので、よく かんがえて から こたえました。`,
        exampleVi: `Vì vấn đề này ${meaning} hơn tôi nghĩ nên tôi đã suy nghĩ kỹ rồi mới trả lời.`,
      },
      {
        exampleJp: `とても${word}ですね。私も同じように感じます。`,
        exampleKana: `とても ${kana} です ね。わたし も おなじ よう に かんじます。`,
        exampleVi: `Thật là ${meaning} nhỉ. Tôi cũng cảm thấy giống như vậy.`,
      },
      {
        exampleJp: `${word}かどうか、実際に試して確かめてみましょう。`,
        exampleKana: `${kana} か どうか、じっさい に ためして たしかめて みましょう。`,
        exampleVi: `Hãy cùng thử nghiệm thực tế để kiểm chứng xem có ${meaning} hay không.`,
      },
    ];
  } else if (wordType.includes('na-adj') || /^(cần thiết|quan trọng|tiện lợi|bất tiện|yên tĩnh|nổi tiếng|khỏe mạnh|thích|ghét|giỏi|kém|an toàn|nguy hiểm|phức tạp|đơn giản|lịch sự|mơ hồ|rõ ràng|đặc biệt|tự do|công bằng)/i.test(meaning)) {
    templates = [
      {
        exampleJp: `この計画を進めるためには、${word}な条件がいくつかあります。`,
        exampleKana: `この けいかく を すすめる ため には、${kana} な じょうけん が いくつか あります。`,
        exampleVi: `Để tiến hành kế hoạch này, có một số điều kiện ${meaning}.`,
      },
      {
        exampleJp: `日常生活の中で、とても${word}だと感じることがよくあります。`,
        exampleKana: `にちじょう せいかつ の なか で、とても ${kana} だ と かんじる こと が よく あります。`,
        exampleVi: `Trong cuộc sống hằng ngày, tôi thường xuyên cảm thấy điều này rất ${meaning}.`,
      },
      {
        exampleJp: `本当に${word}かどうか、みんなで詳しく話し合いましょう。`,
        exampleKana: `ほんとう に ${kana} か どうか、みんな で くわしく はなしあいましょう。`,
        exampleVi: `Chúng ta hãy cùng thảo luận chi tiết xem liệu có thực sự ${meaning} hay không.`,
      },
    ];
  } else if (wordType.includes('adv') || wordType.includes('expression') || /^(nếu|giả sử|rất|khá|hơi|hoàn toàn|chắc chắn|có lẽ|nhất định|cuối cùng|đặc biệt|thực ra|ví dụ|tức là|tuy nhiên|vì vậy)/i.test(meaning)) {
    templates = [
      {
        exampleJp: `会話の中で「${word}」という表現を使うと、気持ちが伝わりやすくなります。`,
        exampleKana: `かいわ の なか で「${kana}」という ひょうげん を つかう と、きもち が つたわりやすく なります。`,
        exampleVi: `Khi sử dụng cách diễn đạt "${word}" (${meaning}) trong hội thoại, cảm xúc sẽ dễ truyền đạt hơn.`,
      },
      {
        exampleJp: `先生の話を聞いて、${word}その通りだと思いました。`,
        exampleKana: `せんせい の はなし を きいて、${kana} その とおり だ と おもいました。`,
        exampleVi: `Nghe câu chuyện của thầy giáo, tôi nghĩ (${meaning}) đúng là như vậy.`,
      },
      {
        exampleJp: `試験の読解問題でも、「${word}」の後ろの文に注意して読みましょう。`,
        exampleKana: `しけん の どっかい もんだい でも、「${kana}」の うしろ の ぶん に ちゅうい して よみましょう。`,
        exampleVi: `Trong bài đọc hiểu của kỳ thi, hãy chú ý đọc kỹ câu phía sau "${word}" (${fullMeaning}).`,
      },
    ];
  } else {
    templates = [
      {
        exampleJp: `今日の授業では、${word}について詳しく学びました。`,
        exampleKana: `きょう の じゅぎょう では、${kana} について くわしく まなびました。`,
        exampleVi: `Trong buổi học hôm nay, chúng tôi đã tìm hiểu chi tiết về ${meaning}.`,
      },
      {
        exampleJp: `日常生活や仕事の中で、${word}はとても大切な役割を果たしています。`,
        exampleKana: `にちじょう せいかつ や しごと の なか で、${kana} は とても たいせつな やくわり を はたして います。`,
        exampleVi: `Trong đời sống hằng ngày cũng như công việc, ${meaning} đóng vai trò rất quan trọng.`,
      },
      {
        exampleJp: `${word}に関する新しい情報を調べて、ノートにまとめました。`,
        exampleKana: `${kana} に かんする あたらしい じょうほう を しらべて、ノート に まとめました。`,
        exampleVi: `Tôi đã tra cứu thông tin mới liên quan đến ${meaning} và tổng hợp vào sổ tay.`,
      },
    ];
  }

  templates.forEach(addExample);
  return collected.slice(0, 3);
}

function mapVocabularyRowToItem(row, grammarExamples = []) {
  return {
    id: row.id,
    japanese: row.word,
    kana: row.kana,
    romaji: row.romaji || row.kana || row.word,
    english: row.meaningEn || row.meaningVi || '',
    meaningVi: row.meaningVi || '',
    meaningEn: row.meaningEn || '',
    wordType: row.wordType || '',
    jlptLevel: row.jlptLevel || '',
    examples: buildContextualExamples(row, grammarExamples),
  };
}

function mapGrammarRowsToItems(rows) {
  const grammarById = new Map();

  for (const row of rows) {
    if (!grammarById.has(row.id)) {
      grammarById.set(row.id, {
        id: row.id,
        title: row.title || '',
        pattern: row.pattern,
        meaningVi: row.meaningVi || '',
        explanation: row.explanation || '',
        usageNote: row.usageNote || '',
        restriction: row.restriction || '',
        nuance: row.nuance || '',
        formation: row.formation || '',
        jlptLevel: row.jlptLevel || '',
        examples: [],
      });
    }

    if (row.exampleId) {
      grammarById.get(row.id).examples.push({
        id: row.exampleId,
        exampleJp: row.exampleJp,
        exampleKana: row.exampleKana || '',
        exampleVi: row.exampleVi || '',
        audioUrl: row.exampleAudioUrl || '',
      });
    }
  }

  return [...grammarById.values()];
}

function buildLessonSummary(level, row) {
  const estimatedTime = Math.max(
    12,
    Math.min(45, Math.round(row.vocabularyCount * 1.2 + row.grammarCount * 3)),
  );

  return {
    id: createLessonId(level, row.lessonNumber),
    lessonNumber: row.lessonNumber,
    title: row.title || `Bài ${row.lessonNumber}`,
    description:
      row.description ||
      createLessonDescription(
        level,
        row.lessonNumber,
        row.vocabularyCount,
        row.grammarCount,
      ),
    estimatedTime,
    vocabularyCount: row.vocabularyCount,
    grammarCount: row.grammarCount || 0,
    grammar: Array.isArray(row.grammarPatterns) ? row.grammarPatterns : [],
    kanji: row.sampleWord ? [row.sampleWord] : [],
  };
}

function buildLessonContent(lessonNumber, vocabularyItems, grammarItems, lessonMeta) {
  const heading = lessonMeta?.title || `Bài ${lessonNumber}`;
  const intro =
    lessonMeta?.description || 'Luyện từ vựng và ngữ pháp trọng tâm của bài.';
  const sampleWords = vocabularyItems
    .slice(0, 6)
    .map((item) => `- ${item.japanese} (${item.romaji}): ${item.meaningVi || item.english}`)
    .join('\n');
  const sampleGrammar = grammarItems
    .slice(0, 3)
    .map((item) => `- ${item.pattern}: ${item.meaningVi}`)
    .join('\n');

  return `# ${heading}\n${intro}\n\n## Từ vựng tiêu biểu\n${sampleWords}\n\n## Ngữ pháp trọng tâm\n${sampleGrammar || 'Chưa có mẫu ngữ pháp được liên kết.'}`;
}

async function getLessonsByLevel(levelInput) {
  const level = normalizeLevel(levelInput);
  const levelRows = await findLessonsByLevel(level.toUpperCase());

  return levelRows.map((row) => buildLessonSummary(level, row));
}

function extractKanjiCharacters(text) {
  return Array.from(text || '').filter((character, index, characters) => {
    return /[\u3400-\u9fff]/u.test(character) && characters.indexOf(character) === index;
  });
}

async function getLessonByLevelAndNumber(levelInput, lessonNumberInput) {
  const level = normalizeLevel(levelInput);
  const lessonNumber = normalizeLessonNumber(lessonNumberInput);
  const [vocabularyRows, grammarRows, lessonMeta] = await Promise.all([
    findVocabularyByLesson(level.toUpperCase(), lessonNumber),
    findGrammarByLesson(level.toUpperCase(), lessonNumber),
    findLessonMetadata(level.toUpperCase(), lessonNumber),
  ]);

  if (vocabularyRows.length === 0 && grammarRows.length === 0) {
    throw createHttpError(404, 'Không tìm thấy bài học.');
  }

  const grammar = mapGrammarRowsToItems(grammarRows);
  const allGrammarExamples = grammar.flatMap((item) => item.examples || []);
  const vocabulary = vocabularyRows.map((row) => mapVocabularyRowToItem(row, allGrammarExamples));

  const kanjiChars = extractKanjiCharacters(
    vocabulary.map((item) => item.japanese).join(''),
  ).slice(0, 28);
  let kanjiList = [];
  if (kanjiChars.length > 0) {
    try {
      const kanjiRows = await findKanjiByCharacters(kanjiChars);
      kanjiList = await Promise.all(
        kanjiRows.map(async (row) => {
          let relatedVocab = [];
          try {
            const rawVocab = await findVocabularyContainingKanji(row.kanji, 4);
            relatedVocab = rawVocab.map((v) => ({
              id: v.id,
              japanese: v.word,
              kana: v.kana || '',
              romaji: v.romaji || '',
              meaningVi: v.meaningVi || v.meaningEn || '',
              jlptLevel: v.jlptLevel || '',
            }));
          } catch {
            relatedVocab = [];
          }

          return {
            id: row.id,
            kanji: row.kanji,
            character: row.kanji,
            hanViet: row.hanViet || '',
            onyomi: row.onyomi || '',
            kunyomi: row.kunyomi || '',
            meaningVi: row.meaningVi || row.meaningEn || '',
            meaningEn: row.meaningEn || '',
            strokeCount: row.strokeCount || null,
            radical: row.radical || '',
            jlptLevel: row.jlptLevel || '',
            mnemonic: row.mnemonic || '',
            relatedVocabulary: relatedVocab,
          };
        }),
      );
    } catch {
      kanjiList = [];
    }
  }

  return {
    id: createLessonId(level, lessonNumber),
    lessonNumber,
    title: lessonMeta?.title || `Bài ${lessonNumber}`,
    description:
      lessonMeta?.description ||
      createLessonDescription(level, lessonNumber, vocabulary.length, grammar.length),
    estimatedTime: Math.max(
      12,
      Math.min(45, Math.round(vocabulary.length * 1.2 + grammar.length * 3)),
    ),
    vocabulary,
    grammar,
    grammarCount: grammar.length,
    grammarSummary: grammar.slice(0, 8).map((item) => `${item.pattern} - ${item.meaningVi}`),
    kanji: kanjiList.length > 0 ? kanjiList.map((k) => k.kanji) : vocabulary.slice(0, 8).map((item) => item.japanese),
    kanjiList,
    content: buildLessonContent(lessonNumber, vocabulary, grammar, lessonMeta),
  };
}

module.exports = {
  getLessonsByLevel,
  getLessonByLevelAndNumber,
};
