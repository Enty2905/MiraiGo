function normalizeVocabularyEntry(entry, index) {
  if (typeof entry === 'string') {
    return {
      id: null,
      japanese: `単語${index}`,
      kana: '',
      romaji: entry,
      english: `Tu ${index}`,
      meaningVi: '',
    }
  }

  if (typeof entry === 'object' && entry !== null) {
    const normalized = {
      id: entry.id || null,
      japanese: entry.japanese || entry.word || `単語${index}`,
      kana: entry.kana || '',
      romaji: entry.romaji || entry.reading || `tango${index}`,
      english: entry.meaningVi || entry.english || entry.meaning || `Tu ${index}`,
      meaningVi: entry.meaningVi || '',
    }

    if (entry.wordType) {
      normalized.wordType = entry.wordType
    }

    if (entry.jlptLevel) {
      normalized.jlptLevel = entry.jlptLevel
    }

    if (Array.isArray(entry.examples)) {
      normalized.examples = entry.examples
    }

    return normalized
  }

  return {
    id: null,
    japanese: `単語${index}`,
    kana: '',
    romaji: `tango${index}`,
    english: `Tu ${index}`,
    meaningVi: '',
  }
}

export function getVocabularyExamples(word, grammar = []) {
  if (!word) {
    return []
  }

  const jp = word.japanese || word.word || ''
  const kana = word.kana || word.romaji || jp
  const meaning = (word.meaningVi || word.english || 'từ này').split(',')[0].trim()
  const fullMeaning = word.meaningVi || word.english || meaning
  const wordType = String(word.wordType || '').toLowerCase()

  const collected = []
  const seenJp = new Set()

  const addExample = (ex) => {
    if (!ex || !ex.exampleJp || seenJp.has(ex.exampleJp)) {
      return
    }
    seenJp.add(ex.exampleJp)
    collected.push({
      id: ex.id || `vocab-ex-${collected.length + 1}`,
      exampleJp: ex.exampleJp,
      exampleKana: ex.exampleKana || '',
      exampleVi: ex.exampleVi || '',
      audioUrl: ex.audioUrl || '',
    })
  }

  if (Array.isArray(word.examples)) {
    word.examples.forEach(addExample)
  }

  if (Array.isArray(grammar) && jp) {
    for (const gItem of grammar) {
      for (const gEx of gItem?.examples || []) {
        if (gEx?.exampleJp && gEx.exampleJp.includes(jp)) {
          addExample(gEx)
        }
      }
    }
  }

  if (collected.length >= 3) {
    return collected.slice(0, 4)
  }

  if (wordType.includes('verb') || (/[うくぐすつぬぶむる]$/u.test(jp) && /^(làm|đi|đến|về|ăn|uống|xem|nghe|đọc|viết|mua|bán|học|dạy|gặp|chờ|tìm|giúp|dùng|sử dụng|bắt đầu|kết thúc|thay đổi|tham gia|liên lạc|giải thích|nhớ|quên|mở|đóng|chạy|bơi|nói|hỏi|trả lời|chọn|quyết định|cố gắng|tiếp tục|có thể)/i.test(meaning))) {
    addExample({
      exampleJp: `毎日少しずつでも${jp}ようにしています。`,
      exampleKana: `まいにち すこしずつ でも ${kana} よう に して います。`,
      exampleVi: `Mỗi ngày tôi đều cố gắng ${meaning} dù chỉ từng chút một.`,
    })
    addExample({
      exampleJp: `${jp}前に、もう一度大切なポイントを確認しましょう。`,
      exampleKana: `${kana} まえ に、もう いちど たいせつな ポイント を かくにん しましょう。`,
      exampleVi: `Trước khi ${meaning}, chúng ta hãy xác nhận lại những điểm quan trọng một lần nữa.`,
    })
    addExample({
      exampleJp: `実際に自分で${jp}ことで、多くの経験が身につきます。`,
      exampleKana: `じっさい に じぶん で ${kana} こと で、おおく の けいけん が み に つきます。`,
      exampleVi: `Bằng việc tự mình trực tiếp ${meaning}, bạn sẽ tích lũy được nhiều kinh nghiệm.`,
    })
  } else if (wordType.includes('i-adj') || (jp.endsWith('い') && jp.length >= 2 && !['きらい', 'きれい', 'ゆうめい', 'ていねい', 'あいまい'].includes(kana))) {
    addExample({
      exampleJp: `この問題は思ったより${jp}ので、よく考えてから答えました。`,
      exampleKana: `この もんだい は おもった より ${kana} ので、よく かんがえて から こたえました。`,
      exampleVi: `Vì vấn đề này ${meaning} hơn tôi nghĩ nên tôi đã suy nghĩ kỹ rồi mới trả lời.`,
    })
    addExample({
      exampleJp: `とても${jp}ですね。私も同じように感じます。`,
      exampleKana: `とても ${kana} です ね。わたし も おなじ よう に かんじます。`,
      exampleVi: `Thật là ${meaning} nhỉ. Tôi cũng cảm thấy giống như vậy.`,
    })
    addExample({
      exampleJp: `${jp}かどうか、実際に試して確かめてみましょう。`,
      exampleKana: `${kana} か どうか、じっさい に ためして たしかめて みましょう。`,
      exampleVi: `Hãy cùng thử nghiệm thực tế để kiểm chứng xem có ${meaning} hay không.`,
    })
  } else if (wordType.includes('na-adj') || /^(cần thiết|quan trọng|tiện lợi|bất tiện|yên tĩnh|nổi tiếng|khỏe mạnh|thích|ghét|giỏi|kém|an toàn|nguy hiểm|phức tạp|đơn giản|lịch sự|mơ hồ|rõ ràng|đặc biệt|tự do|công bằng)/i.test(meaning)) {
    addExample({
      exampleJp: `この計画を進めるためには、${jp}な条件がいくつかあります。`,
      exampleKana: `この けいかく を すすめる ため には、${kana} な じょうけん が いくつか あります。`,
      exampleVi: `Để tiến hành kế hoạch này, có một số điều kiện ${meaning}.`,
    })
    addExample({
      exampleJp: `日常生活の中で、とても${jp}だと感じることがよくあります。`,
      exampleKana: `にちじょう せいかつ の なか で、とても ${kana} だ と かんじる こと が よく あります。`,
      exampleVi: `Trong cuộc sống hằng ngày, tôi thường xuyên cảm thấy điều này rất ${meaning}.`,
    })
    addExample({
      exampleJp: `本当に${jp}かどうか、みんなで詳しく話し合いましょう。`,
      exampleKana: `ほんとう に ${kana} か どうか、みんな で くわしく はなしあいましょう。`,
      exampleVi: `Chúng ta hãy cùng thảo luận chi tiết xem liệu có thực sự ${meaning} hay không.`,
    })
  } else if (wordType.includes('adv') || wordType.includes('expression') || /^(nếu|giả sử|rất|khá|hơi|hoàn toàn|chắc chắn|có lẽ|nhất định|cuối cùng|đặc biệt|thực ra|ví dụ|tức là|tuy nhiên|vì vậy)/i.test(meaning)) {
    addExample({
      exampleJp: `会話の中で「${jp}」という表現を使うと、気持ちが伝わりやすくなります。`,
      exampleKana: `かいわ の なか で「${kana}」という ひょうげん を つかう と、きもち が つたわりやすく なります。`,
      exampleVi: `Khi sử dụng cách diễn đạt "${jp}" (${meaning}) trong hội thoại, cảm xúc sẽ dễ truyền đạt hơn.`,
    })
    addExample({
      exampleJp: `先生の話を聞いて、${jp}その通りだと思いました。`,
      exampleKana: `せんせい の はなし を きいて、${kana} その とおり だ と おもいました。`,
      exampleVi: `Nghe câu chuyện của thầy giáo, tôi nghĩ (${meaning}) đúng là như vậy.`,
    })
    addExample({
      exampleJp: `試験の読解問題でも、「${jp}」の後ろの文に注意して読みましょう。`,
      exampleKana: `しけん の どっかい もんだい でも、「${kana}」の うしろ の ぶん に ちゅうい して よみましょう。`,
      exampleVi: `Trong bài đọc hiểu của kỳ thi, hãy chú ý đọc kỹ câu phía sau "${jp}" (${fullMeaning}).`,
    })
  } else {
    addExample({
      exampleJp: `今日の授業では、${jp}について詳しく学びました。`,
      exampleKana: `きょう の じゅぎょう では、${kana} について くわしく まなびました。`,
      exampleVi: `Trong buổi học hôm nay, chúng tôi đã tìm hiểu chi tiết về ${meaning}.`,
    })
    addExample({
      exampleJp: `日常生活や仕事の中で、${jp}はとても大切な役割を果たしています。`,
      exampleKana: `にちじょう せいかつ や しごと の なか で、${kana} は とても たいせつな やくわり を はたして います。`,
      exampleVi: `Trong đời sống hằng ngày cũng như công việc, ${meaning} đóng vai trò rất quan trọng.`,
    })
    addExample({
      exampleJp: `${jp}に関する新しい情報を調べて、ノートにまとめました。`,
      exampleKana: `${kana} に かんする あたらしい じょうほう を しらべて、ノート に まとめました。`,
      exampleVi: `Tôi đã tra cứu thông tin mới liên quan đến ${meaning} và tổng hợp vào sổ tay.`,
    })
  }

  return collected.slice(0, 3)
}

export function normalizeLessonVocabulary(vocabulary) {
  if (!Array.isArray(vocabulary)) {
    return []
  }

  return vocabulary.map((entry, index) => normalizeVocabularyEntry(entry, index))
}
