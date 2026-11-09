/**
 * Dữ liệu bài đọc hiểu (Reading Comprehension) cho từng bài học.
 * Tích hợp đầy đủ dữ liệu đọc hiểu chuyên sâu từ N5 đến N1:
 * - N5: 80 - 150 từ (Sơ cấp, sinh hoạt cơ bản, hiragana chiếm ưu thế).
 * - N4: 200 - 350 từ (Sơ trung cấp, thông báo, quy định, so sánh, thể Te).
 * - N3: 400 - 600 từ (Trung cấp, nghị luận xã hội, công sở, công nghệ, quan điểm).
 * - N2: 600 - 850 ký tự (Thượng trung cấp, xã luận kinh tế xã hội, tư duy biện chứng).
 * - N1: 800 - 1200 ký tự (Cao cấp, triết học, mỹ học, phê bình học thuật sâu sắc).
 *
 * Mỗi bài học có 5 bài đọc phong phú bám sát ngữ pháp và từ vựng của bài,
 * kèm 6 câu hỏi trắc nghiệm kiểm tra độ hiểu sâu sắc có giải thích tiếng Việt chi tiết.
 */

const readingLoaders = {
  n5: () => import('./readings/n5-readings.js').then((module) => module.N5_READING_LESSONS),
  n4: () => import('./readings/n4-readings.js').then((module) => module.N4_READING_LESSONS),
  n3: () => import('./readings/n3-readings.js').then((module) => module.N3_READING_LESSONS),
  n2: () => import('./readings/n2-readings.js').then((module) => module.N2_READING_LESSONS),
  n1: () => import('./readings/n1-readings.js').then((module) => module.N1_READING_LESSONS),
}

const LEVEL_PASSAGE_THEMES = {
  N5: [
    {
      titleSuffix: 'Sinh hoạt hằng ngày & Giao tiếp cơ bản (毎日の生活と会話)',
      topic: 'sinh hoạt hằng ngày và giao tiếp',
    },
    {
      titleSuffix: 'Trường học, Bạn bè & Việc học tiếng Nhật (学校と友達)',
      topic: 'trường học và việc học tiếng Nhật',
    },
    {
      titleSuffix: 'Mua sắm, Ẩm thực & Cuối tuần (買い物と週末の予定)',
      topic: 'mua sắm, ẩm thực và kế hoạch cuối tuần',
    },
    {
      titleSuffix: 'Du lịch, Tàu điện & Khám phá thành phố (旅行と町の案内)',
      topic: 'di chuyển và khám phá thành phố',
    },
    {
      titleSuffix: 'Gia đình, Sở thích & Sức khỏe (家族と趣味)',
      topic: 'gia đình, sở thích và sức khỏe',
    },
  ],
  N4: [
    {
      titleSuffix: 'Thông báo nội quy & Hướng dẫn đời sống (生活の案内とルール)',
      topic: 'hướng dẫn sinh hoạt và quy tắc cộng đồng',
    },
    {
      titleSuffix: 'Kinh nghiệm học tập & Trao đổi văn hóa (学習の工夫と文化交流)',
      topic: 'phương pháp học tập và giao lưu văn hóa',
    },
    {
      titleSuffix: 'Email liên lạc & Lịch trình công việc (仕事の連絡とスケジュール)',
      topic: 'liên lạc công việc và sắp xếp lịch trình',
    },
    {
      titleSuffix: 'Sức khỏe, Thói quen tốt & Môi trường sống (健康な習慣と暮らし)',
      topic: 'rèn luyện thói quen tốt và chăm sóc sức khỏe',
    },
    {
      titleSuffix: 'Trải nghiệm du lịch & Dịch vụ tại Nhật Bản (日本の旅とサービス)',
      topic: 'trải nghiệm du lịch và dịch vụ tại Nhật Bản',
    },
  ],
  N3: [
    {
      titleSuffix: 'Đời sống xã hội & Xu hướng tiêu dùng hiện đại (現代社会の暮らしと変化)',
      topic: 'đời sống xã hội và xu hướng hiện đại',
    },
    {
      titleSuffix: 'Giao tiếp nơi công sở & Kỹ năng làm việc nhóm (職場のコミュニケーション)',
      topic: 'giao tiếp công sở và hợp tác nhóm',
    },
    {
      titleSuffix: 'Công nghệ thông tin & Tiện ích đời sống (情報技術と便利な生活)',
      topic: 'ứng dụng công nghệ trong đời sống',
    },
    {
      titleSuffix: 'Bảo vệ môi trường & Trách nhiệm cộng đồng (環境保護と地域の取り組み)',
      topic: 'bảo vệ môi trường và hoạt động cộng đồng',
    },
    {
      titleSuffix: 'Văn hóa truyền thống & Giá trị tinh thần (伝統文化と心の豊かさ)',
      topic: 'gìn giữ văn hóa truyền thống và đời sống tinh thần',
    },
  ],
  N2: [
    {
      titleSuffix: 'Chuyển dịch kinh tế & Chiến lược phát triển bền vững (経済構造の変化と持続可能性)',
      topic: 'chuyển dịch kinh tế và phát triển bền vững',
    },
    {
      titleSuffix: 'Đổi mới giáo dục & Bồi dưỡng năng lực tư duy (教育改革と主体的な思考)',
      topic: 'đổi mới giáo dục và tư duy độc lập',
    },
    {
      titleSuffix: 'Truyền thông hiện đại & Tiếp nhận thông tin đa chiều (メディア社会と情報リテラシー)',
      topic: 'truyền thông hiện đại và năng lực thẩm định thông tin',
    },
    {
      titleSuffix: 'Cải cách phương thức lao động & Phúc lợi xã hội (働き方改革と社会福祉)',
      topic: 'cải cách lao động và an sinh xã hội',
    },
    {
      titleSuffix: 'Khoa học ứng dụng & Đạo đức môi trường sinh thái (科学技術と地球環境の保全)',
      topic: 'khoa học kỹ thuật và bảo tồn hệ sinh thái',
    },
  ],
  N1: [
    {
      titleSuffix: 'Bản thể luận xã hội & Sự chuyển hóa văn minh (社会システムの変容と人間存在)',
      topic: 'bản chất hệ thống xã hội và sự tồn tại của con người',
    },
    {
      titleSuffix: 'Triết lý ngôn ngữ & Đối thoại liên văn hóa (言語の象徴性と異文化理解)',
      topic: 'triết lý ngôn ngữ và đối thoại liên văn hóa',
    },
    {
      titleSuffix: 'Đạo đức khoa học & Trách nhiệm đối với thế hệ tương lai (科学技術の進歩と生命倫理)',
      topic: 'đạo đức sinh học và trách nhiệm thời đại',
    },
    {
      titleSuffix: 'Mỹ học truyền thống & Phê bình nghệ thuật đương đại (日本美学の真髄と芸術批評)',
      topic: 'mỹ học truyền thống và phê bình nghệ thuật',
    },
    {
      titleSuffix: 'Trật tự kinh tế toàn cầu & Quản trị khủng hoảng vĩ mô (国際秩序の均衡と危機管理)',
      topic: 'trật tự toàn cầu và quản trị khủng hoảng',
    },
  ],
}

function buildRotatedOptions(correctOption, distractors, seed) {
  const uniqueDistractors = []
  for (const item of distractors) {
    if (item && item !== correctOption && !uniqueDistractors.includes(item)) {
      uniqueDistractors.push(item)
    }
    if (uniqueDistractors.length === 3) break
  }

  const fallbacks = [
    'Phủ nhận hoàn toàn vai trò của việc học tập và giao tiếp',
    'Khuyên người đọc bỏ qua các quy tắc cơ bản trong sinh hoạt',
    'Chỉ đề cập đến cách chế biến món ăn truyền thống trong gia đình',
  ]
  for (const fb of fallbacks) {
    if (uniqueDistractors.length >= 3) break
    if (fb !== correctOption && !uniqueDistractors.includes(fb)) {
      uniqueDistractors.push(fb)
    }
  }

  const answerIndex = Math.abs(seed) % 4
  const options = [...uniqueDistractors]
  options.splice(answerIndex, 0, correctOption)
  return { options, answerIndex }
}

/**
 * Trình tạo bài đọc tự động thông minh phân cấp độ dài và độ khó cho các bài học.
 * Tạo ra 5 bài đọc có độ dài và phong cách bám sát chuẩn JLPT của từng level (N5 -> N1).
 */
export function generateReadingPassages(level, lessonNumber, vocabulary = [], grammar = []) {
  const normLevel = String(level || 'N5').toUpperCase()
  const lessonKey = `${String(level || 'n5').toLowerCase()}-l${lessonNumber}`

  const safeVocab =
    Array.isArray(vocabulary) && vocabulary.length > 0
      ? vocabulary
      : [
          { japanese: '言葉', romaji: 'kotoba', meaningVi: 'từ ngữ, ngôn từ' },
          { japanese: '生活', romaji: 'seikatsu', meaningVi: 'cuộc sống, sinh hoạt' },
          { japanese: '経験', romaji: 'keiken', meaningVi: 'kinh nghiệm, trải nghiệm' },
          { japanese: '社会', romaji: 'shakai', meaningVi: 'xã hội' },
          { japanese: '文化', romaji: 'bunka', meaningVi: 'văn hóa' },
          { japanese: '目標', romaji: 'mokuhyou', meaningVi: 'mục tiêu' },
          { japanese: '協力', romaji: 'kyouryoku', meaningVi: 'hợp tác' },
          { japanese: '未来', romaji: 'mirai', meaningVi: 'tương lai' },
        ]

  const safeGrammar =
    Array.isArray(grammar) && grammar.length > 0
      ? grammar
      : [
          {
            pattern: '〜について',
            meaningVi: 'về vấn đề / xoay quanh chủ đề gì đó',
            explanation: 'Dùng để giới thiệu chủ đề đang được nói, viết hoặc suy nghĩ tới.',
          },
        ]

  const passageThemes = LEVEL_PASSAGE_THEMES[normLevel] || LEVEL_PASSAGE_THEMES.N5

  return passageThemes.map((theme, pIndex) => {
    const startIdx = (pIndex * 3) % safeVocab.length
    const word1 = safeVocab[startIdx] || safeVocab[0]
    const word2 = safeVocab[(startIdx + 1) % safeVocab.length] || word1
    const word3 = safeVocab[(startIdx + 2) % safeVocab.length] || word1
    const otherWord1 = safeVocab[(startIdx + 4) % safeVocab.length] || word2
    const otherWord2 = safeVocab[(startIdx + 5) % safeVocab.length] || word3

    const grammarPoint = safeGrammar[pIndex % safeGrammar.length] || safeGrammar[0]
    const otherGrammar = safeGrammar[(pIndex + 1) % safeGrammar.length] || grammarPoint
    const exampleSentence = grammarPoint.examples?.[pIndex % (grammarPoint.examples?.length || 1)]

    let passageJp
    let passageVi

    if (normLevel === 'N1') {
      passageJp = `現代の高度に複雑化した社会構造において、「${word1.japanese}」をめぐる議論は単なる表層的な事象の分析にとどまらず、人間の知性と倫理の根幹を問い直す重要な課題となっている。特に「${grammarPoint.pattern}」という文脈を踏まえるとき、私たちは従来の固定観念から脱却し、多角的な視野から物事の本質を見極めなければならない。${exampleSentence?.exampleJp ? `\n\n例えば、「${exampleSentence.exampleJp}」と言われるように、現実の課題は常に複合的な要因と結びついている。` : ''}

また、急速な時代変化の中で「${word2.japanese}」のあり方も根本的な転換を迫られている。短期的な効率や功利的な成果ばかりを優先する風潮は、長期的には社会の基盤を危うくしかねない。客観的な検証と歴史的な洞察に基づき、多様な価値観の共生を模索する姿勢こそが求められているのである。

さらに、「${word3.japanese}」の真の価値を再発見し、次世代へと継承していくためには、形式的な議論を超えた実践的な取り組みが不可欠である。目先の利害にとらわれることなく、長期的展望に立った誠実な対話を積み重ねることこそが、持続可能な未来を切り開く礎となるに違いない。`

      passageVi = `Trong cấu trúc xã hội phức tạp cao độ của thời hiện đại, những cuộc thảo luận xoay quanh "${word1.meaningVi || word1.japanese}" không chỉ dừng lại ở việc phân tích các hiện tượng bề nổi, mà đã trở thành bài toán trọng tâm chất vấn lại nền tảng trí tuệ và đạo đức con người. Đặc biệt khi đặt trong mạch ngữ cảnh của cấu trúc "${grammarPoint.pattern}", chúng ta cần thoát khỏi những định kiến cố hữu để nhìn thấu bản chất sự việc từ góc nhìn đa chiều.${exampleSentence?.exampleVi ? `\n\nChẳng hạn, đúng như nhận định "${exampleSentence.exampleVi}", các vấn đề thực tiễn luôn gắn liền với nhiều nhân tố phức hợp.` : ''}

Hơn nữa, giữa dòng chảy biến đổi nhanh chóng của thời đại, bản chất của "${word2.meaningVi || word2.japanese}" cũng đang đứng trước yêu cầu phải chuyển mình tận gốc rễ. Trào lưu chỉ ưu tiên hiệu suất ngắn hạn hay thành quả thực dụng có nguy cơ làm lung lay nền tảng xã hội về lâu dài. Thái độ tìm kiếm sự cộng sinh giữa các giá trị đa dạng dựa trên sự kiểm chứng khách quan và cái nhìn lịch sử thấu suốt chính là điều đang được đòi hỏi.

Xa hơn nữa, để tái khám phá giá trị đích thực của "${word3.meaningVi || word3.japanese}" và truyền thừa cho thế hệ mai sau, những nỗ lực thực tiễn vượt lên trên các cuộc tranh luận hình thức là tối cần thiết. Không bị trói buộc bởi lợi ích trước mắt mà kiên trì bồi đắp đối thoại chân thành trên tầm nhìn dài hạn chắc chắn sẽ trở thành viên đá tảng mở ra tương lai bền vững.`
    } else if (normLevel === 'N2') {
      passageJp = `近年、社会環境の変化に伴って、「${word1.japanese}」に対する人々の意識が大きく変わりつつある。かつては当然とされていた仕組みも見直されるようになり、「${grammarPoint.pattern}」という視点から新しい対策を検討する動きが広がっている。${exampleSentence?.exampleJp ? `実際に、「${exampleSentence.exampleJp}」といった事例も少なくない。` : ''}

一方で、「${word2.japanese}」をめぐる課題を解決するためには、個人の努力だけでなく、社会全体での継続的な支援が欠かせない。便利さや効率の良さばかりを追い求めるあまり、人と人とのつながりや安全への配慮がおろそかになっては本末転倒である。

今後は「${word3.japanese}」の重要性を十分に踏まえた上で、長期的な視野に立った計画を進めていく必要がある。互いの立場を尊重し合いながら、現実的でバランスの取れた解決策を見出すことが求められている。`

      passageVi = `Những năm gần đây, song hành cùng sự biến đổi của môi trường xã hội, nhận thức của mọi người đối với "${word1.meaningVi || word1.japanese}" đang thay đổi rõ rệt. Những cơ chế từng được xem là hiển nhiên trước đây nay cũng được nhìn nhận lại, và xu hướng xem xét các đối sách mới từ góc nhìn "${grammarPoint.pattern}" đang ngày càng lan rộng.${exampleSentence?.exampleVi ? ` Trên thực tế, không ít trường hợp giống như "${exampleSentence.exampleVi}".` : ''}

Mặt khác, để giải quyết những thách thức xoay quanh "${word2.meaningVi || word2.japanese}", không chỉ cần nỗ lực của từng cá nhân mà sự hỗ trợ bền bỉ của toàn xã hội là không thể thiếu. Nếu vì quá chạy theo sự tiện lợi hay hiệu suất mà xem nhẹ sự gắn kết giữa con người và sự quan tâm đến an toàn thì thật là đảo lộn gốc ngọn.

Từ nay về sau, trên cơ sở nắm vững tầm quan trọng của "${word3.meaningVi || word3.japanese}", chúng ta cần triển khai các kế hoạch có tầm nhìn dài hạn. Việc vừa tôn trọng lập trường của nhau vừa tìm ra giải pháp thực tế, cân bằng đang được đặt ra cấp thiết.`
    } else if (normLevel === 'N3') {
      passageJp = `最近、私たちの生活の中で「${word1.japanese}」について考える機会が増えています。以前と比べて便利なサービスが増えたおかげで、仕事や勉強のやり方もずいぶん変わってきました。${exampleSentence?.exampleJp ? `例えば、「${exampleSentence.exampleJp}」という経験をした人も多いでしょう。` : ''}

しかし、その一方で「${word2.japanese}」に関する新しい悩みや問題も生まれています。こうした場面では、「${grammarPoint.pattern}」という表現や考え方を正しく理解しておくことがとても役に立ちます。周りの人とよく相談しながら、無理のない方法を選ぶことが大切です。

これから先も「${word3.japanese}」を大切にしながら、毎日少しずつ工夫を続けていけば、より良い結果につながるはずです。自分の目標に向かって、一歩ずつ進んでいきましょう。`

      passageVi = `Gần đây, trong cuộc sống hằng ngày, cơ hội để chúng ta suy nghĩ về "${word1.meaningVi || word1.japanese}" đang ngày một nhiều hơn. Nhờ có thêm nhiều dịch vụ tiện ích so với trước đây, phương thức làm việc và học tập cũng đã thay đổi đáng kể.${exampleSentence?.exampleVi ? ` Chẳng hạn, chắc hẳn có nhiều người từng trải qua tình huống "${exampleSentence.exampleVi}".` : ''}

Thế nhưng, mặt khác những nỗi niềm trăn trở và vấn đề mới liên quan đến "${word2.meaningVi || word2.japanese}" cũng đang nảy sinh. Trong những tình huống như vậy, việc hiểu đúng cách diễn đạt và tư duy "${grammarPoint.pattern}" sẽ giúp ích rất nhiều. Điều quan trọng là vừa trao đổi kỹ với mọi người xung quanh vừa chọn phương pháp phù hợp, không quá sức.

Từ nay về sau, nếu vừa trân trọng "${word3.meaningVi || word3.japanese}" vừa kiên trì cải thiện từng chút một mỗi ngày, chắc chắn sẽ dẫn đến kết quả tốt đẹp hơn. Hãy cùng tiến từng bước về phía mục tiêu của mình.`
    } else if (normLevel === 'N4') {
      passageJp = `みなさん、こんにちは。今日は第${lessonNumber}課の「${word1.japanese}」と「${word2.japanese}」についてお話しします。
毎日の生活や勉強の中で、新しい言葉を実際に使ってみることはとても大切です。${exampleSentence?.exampleJp ? `\n例えば、「${exampleSentence.exampleJp}」のように言うことができます。` : ''}
また、友達や先生と話すときは、「${grammarPoint.pattern}」という文の形をよく使います。
最初は少し難しく感じるかもしれませんが、ノートに書いて練習すれば、だんだん上手に使えるようになります。
今週末は「${word3.japanese}」の準備をして、みんなで楽しく日本語の会話を練習しましょう。`

      passageVi = `Xin chào các bạn. Hôm nay tôi xin nói về "${word1.meaningVi || word1.japanese}" và "${word2.meaningVi || word2.japanese}" của Bài ${lessonNumber}.
Trong sinh hoạt và học tập hằng ngày, việc thử sử dụng thực tế các từ vựng mới là rất quan trọng.${exampleSentence?.exampleVi ? `\nVí dụ, chúng ta có thể nói như câu: "${exampleSentence.exampleVi}".` : ''}
Ngoài ra, khi trò chuyện cùng bạn bè và thầy cô, chúng ta rất hay sử dụng mẫu câu "${grammarPoint.pattern}".
Lúc đầu có lẽ sẽ cảm thấy hơi khó một chút, nhưng nếu viết ra vở và luyện tập thì sẽ dần dần sử dụng thành thạo.
Cuối tuần này, hãy cùng chuẩn bị "${word3.meaningVi || word3.japanese}" và vui vẻ luyện hội thoại tiếng Nhật nhé.`
    } else {
      passageJp = `わたしは まいにち にほんごを べんきょうします。
きょうの じゅぎょうで「${word1.japanese}」と「${word2.japanese}」という ことばを ならいました。${exampleSentence?.exampleJp ? `\nせんせいは「${exampleSentence.exampleJp}」と いいました。` : ''}
「${grammarPoint.pattern}」の ぶんも とても たいせつです。
わたしは ともだちと いっしょに「${word3.japanese}」の れんしゅうを しました。
あしたも がっこうで たのしく にほんごを はなしたいです。`

      passageVi = `Mỗi ngày tôi đều học tiếng Nhật.
Trong giờ học hôm nay, tôi đã học được từ "${word1.meaningVi || word1.japanese}" và "${word2.meaningVi || word2.japanese}".${exampleSentence?.exampleVi ? `\nThầy giáo đã lấy ví dụ: "${exampleSentence.exampleVi}".` : ''}
Mẫu câu "${grammarPoint.pattern}" cũng rất quan trọng.
Tôi đã cùng với người bạn luyện tập về "${word3.meaningVi || word3.japanese}".
Ngày mai ở trường tôi cũng muốn trò chuyện bằng tiếng Nhật thật vui vẻ.`
    }

    const q1 = buildRotatedOptions(
      `Làm rõ chủ đề "${theme.topic}" gắn liền với từ vựng "${word1.japanese}" và mẫu "${grammarPoint.pattern}"`,
      [
        `Chỉ liệt kê danh sách các món ăn mà không nhắc gì đến "${word1.japanese}"`,
        `Thông báo hủy toàn bộ lịch học và đóng cửa thư viện`,
        `Kể lại một chuyến leo núi gặp mưa bão từ mười năm trước`,
      ],
      lessonNumber + pIndex * 3 + 1,
    )

    const q2 = buildRotatedOptions(
      word1.meaningVi || 'Khái niệm trọng tâm của bài học',
      [
        otherWord1.meaningVi !== word1.meaningVi ? otherWord1.meaningVi : 'Dụng cụ sửa chữa xe đạp',
        otherWord2.meaningVi !== word1.meaningVi ? otherWord2.meaningVi : 'Thời gian nghỉ giải lao buổi trưa',
        'Tên một lễ hội pháo hoa mùa hè ở vùng biển',
      ],
      lessonNumber + pIndex * 3 + 2,
    )

    const q3 = buildRotatedOptions(
      grammarPoint.meaningVi || 'Mẫu ngữ pháp trọng tâm của bài đọc',
      [
        otherGrammar.meaningVi !== grammarPoint.meaningVi
          ? otherGrammar.meaningVi
          : 'Dùng để ra lệnh gay gắt cho cấp dưới',
        'Dùng để đếm số lượng các vật mỏng như giấy, tem, đĩa',
        'Dùng để từ chối hoàn toàn mọi lời đề nghị của người nghe',
      ],
      lessonNumber + pIndex * 3 + 3,
    )

    const q4 = buildRotatedOptions(
      `${word2.japanese} (${word2.meaningVi || word2.romaji})`,
      [
        `${otherWord1.japanese} (${otherWord1.meaningVi || otherWord1.romaji})`,
        `${otherWord2.japanese} (${otherWord2.meaningVi || otherWord2.romaji})`,
        'Không có từ vựng nào khác được nhắc tới trong đoạn giữa',
      ],
      lessonNumber + pIndex * 3 + 4,
    )

    const q5 = buildRotatedOptions(
      `Trân trọng và vận dụng hiệu quả "${word3.japanese}" (${word3.meaningVi || word3.romaji}) với thái độ tích cực, kiên trì`,
      [
        `Loại bỏ hoàn toàn "${word3.japanese}" vì không còn phù hợp`,
        'Phó mặc cho người khác tự giải quyết mà không cần hợp tác',
        'Chỉ quan tâm đến lợi ích tức thời mà bỏ qua tương lai lâu dài',
      ],
      lessonNumber + pIndex * 3 + 5,
    )

    const q6 = buildRotatedOptions(
      grammarPoint.formation || `Vận dụng chuẩn xác cấu trúc "${grammarPoint.pattern}" trong ngữ cảnh thực tế của Bài ${lessonNumber}`,
      [
        'Chỉ được phép đặt ở đầu câu cảm thán và không đi kèm động từ',
        'Bắt buộc phải lược bỏ toàn bộ chủ ngữ và vị ngữ trong câu',
        'Chỉ dùng khi viết thư xin lỗi khách hàng trong ngành ngân hàng',
      ],
      lessonNumber + pIndex * 3 + 6,
    )

    const questions = [
      {
        id: `${lessonKey}-p${pIndex + 1}-q1`,
        question: 'Nội dung trọng tâm của đoạn văn trên bàn về vấn đề gì?',
        options: q1.options,
        answerIndex: q1.answerIndex,
        explanation: `Đoạn văn tập trung phân tích chủ đề ${theme.topic}, kết hợp từ vựng "${word1.japanese}" và cấu trúc "${grammarPoint.pattern}".`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q2`,
        question: `Từ vựng "${word1.japanese}" (${word1.kana || word1.romaji}) trong bài đọc có nghĩa tiếng Việt là gì?`,
        options: q2.options,
        answerIndex: q2.answerIndex,
        explanation: `Trong từ vựng Bài ${lessonNumber}, "${word1.japanese}" (${word1.kana || word1.romaji}) có nghĩa là: ${word1.meaningVi}.`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q3`,
        question: `Mẫu ngữ pháp "${grammarPoint.pattern}" xuất hiện trong bài biểu thị ý nghĩa nào sau đây?`,
        options: q3.options,
        answerIndex: q3.answerIndex,
        explanation: `Mẫu ngữ pháp "${grammarPoint.pattern}" mang ý nghĩa: ${grammarPoint.meaningVi}.${grammarPoint.explanation ? ` ${grammarPoint.explanation}` : ''}`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q4`,
        question: `Bên cạnh "${word1.japanese}", khái niệm nào được tác giả nhấn mạnh ở phần giữa đoạn văn?`,
        options: q4.options,
        answerIndex: q4.answerIndex,
        explanation: `Ở đoạn thứ hai, bài đọc trực tiếp phân tích vai trò của "${word2.japanese}" (${word2.meaningVi}).`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q5`,
        question: `Theo đoạn kết của bài đọc, thái độ đúng đắn đối với "${word3.japanese}" là gì?`,
        options: q5.options,
        answerIndex: q5.answerIndex,
        explanation: `Đoạn kết nhấn mạnh việc trân trọng, chuẩn bị và kiên trì thực hành "${word3.japanese}" (${word3.meaningVi}) để đạt kết quả bền vững.`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q6`,
        question: `Quy tắc kết hợp hoặc lưu ý khi sử dụng mẫu "${grammarPoint.pattern}" trong bài là gì?`,
        options: q6.options,
        answerIndex: q6.answerIndex,
        explanation: `${grammarPoint.formation ? `Cấu trúc: ${grammarPoint.formation}. ` : ''}${grammarPoint.usageNote || `Cần nắm vững ngữ cảnh của mẫu "${grammarPoint.pattern}" trong đề thi JLPT ${normLevel}.`}`,
      },
    ]

    return {
      id: `${lessonKey}-r${pIndex + 1}`,
      title: `Bài đọc ${pIndex + 1}: ${theme.titleSuffix}`,
      summary: `Bài đọc hiểu cấp độ ${normLevel} (Bài ${lessonNumber}) tích hợp từ vựng ${word1.japanese}・${word2.japanese}・${word3.japanese} và ngữ pháp ${grammarPoint.pattern}.`,
      passageJp,
      passageVi,
      vocabFocus: [word1, word2, word3].map((w) => `${w.japanese} (${w.meaningVi || w.romaji})`),
      grammarFocus: [grammarPoint.pattern],
      questions,
    }
  })
}

/**
 * Lấy danh sách 5 bài đọc hiểu cho một bài học cụ thể
 */
export async function getLessonReadingPassages(level, lessonNumber, vocabulary = [], grammar = []) {
  const normalizedLevel = String(level).toLowerCase()
  const lessonKey = `${normalizedLevel}-l${lessonNumber}`
  const loadReadings = readingLoaders[normalizedLevel]
  if (loadReadings) {
    const lessons = await loadReadings()
    if (lessons[lessonKey]) return lessons[lessonKey]
  }

  return generateReadingPassages(level, lessonNumber, vocabulary, grammar)
}
