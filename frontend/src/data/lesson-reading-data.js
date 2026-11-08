/**
 * Dữ liệu bài đọc hiểu (Reading Comprehension) cho từng bài học.
 * Tích hợp đầy đủ dữ liệu đọc hiểu chuyên sâu từ N5 đến N1:
 * - N5: 80 - 150 từ (Sơ cấp, sinh hoạt cơ bản, hiragana chiếm ưu thế).
 * - N4: 200 - 350 từ (Sơ trung cấp, thông báo, quy định, so sánh, thể Te).
 * - N3: 400 - 600 từ (Trung cấp, nghị luận xã hội, công sở, công nghệ, quan điểm).
 * - N2: 600 - 850 ký tự (Thượng trung cấp, xã luận kinh tế xã hội, tư duy biện chứng).
 * - N1: 800 - 1200 ký tự (Cao cấp, triết học, mỹ học, phê bình học thuật sâu sắc).
 *
 * Mỗi bài học có 4-5 bài đọc phong phú bám sát ngữ pháp và từ vựng của bài,
 * kèm 5-6 câu hỏi trắc nghiệm kiểm tra độ hiểu sâu sắc có giải thích tiếng Việt chi tiết.
 */

const readingLoaders = {
  n5: () => import('./readings/n5-readings.js').then(module => module.N5_READING_LESSONS),
  n4: () => import('./readings/n4-readings.js').then(module => module.N4_READING_LESSONS),
  n3: () => import('./readings/n3-readings.js').then(module => module.N3_READING_LESSONS),
  n2: () => import('./readings/n2-readings.js').then(module => module.N2_READING_LESSONS),
  n1: () => import('./readings/n1-readings.js').then(module => module.N1_READING_LESSONS),
}

/**
 * Trình tạo bài đọc tự động thông minh phân cấp độ dài và độ khó cho các bài chưa có dữ liệu tĩnh.
 * Tạo ra 5 bài đọc có độ dài và phong cách bám sát chuẩn JLPT của từng level (N5 -> N1).
 */
export function generateReadingPassages(level, lessonNumber, vocabulary = [], grammar = []) {
  const normLevel = String(level).toUpperCase()
  const lessonKey = `${String(level).toLowerCase()}-l${lessonNumber}`

  const safeVocab = Array.isArray(vocabulary) && vocabulary.length > 0
    ? vocabulary
    : [
        { japanese: '社会', romaji: 'shakai', meaningVi: 'xã hội' },
        { japanese: '技術', romaji: 'gijutsu', meaningVi: 'công nghệ' },
        { japanese: '発展', romaji: 'hatten', meaningVi: 'phát triển' },
        { japanese: '人間', romaji: 'ningen', meaningVi: 'con người' },
        { japanese: '環境', romaji: 'kankyou', meaningVi: 'môi trường' },
        { japanese: '問題', romaji: 'mondai', meaningVi: 'vấn đề' },
        { japanese: '解決', romaji: 'kaiketsu', meaningVi: 'giải quyết' },
        { japanese: '未来', romaji: 'mirai', meaningVi: 'tương lai' },
      ]

  const safeGrammar = Array.isArray(grammar) && grammar.length > 0
    ? grammar
    : [{ pattern: '〜について', meaningVi: 'về vấn đề gì đó' }]

  const passageThemes = [
    {
      titleSuffix: 'Phát triển bền vững và chuyển dịch xã hội (持続可能な発展と社会変容)',
      topic: 'phát triển bền vững và công nghệ',
    },
    {
      titleSuffix: 'Giao tiếp liên văn hóa và gắn kết cộng đồng (異文化間対話と地域社会の連帯)',
      topic: 'giao lưu liên văn hóa và gắn kết',
    },
    {
      titleSuffix: 'Đổi mới công nghiệp và tái cơ cấu lao động (産業構造の刷新と労働の未来)',
      topic: 'công nghiệp và việc làm tương lai',
    },
    {
      titleSuffix: 'Môi trường sinh thái và trách nhiệm thế hệ (地球環境の保全と次世代への責任)',
      topic: 'bảo vệ môi trường và trách nhiệm tương lai',
    },
    {
      titleSuffix: 'Triết lý giáo dục và phẩm giá con người (教育の使命と人間の尊厳)',
      topic: 'giáo dục và phẩm giá con người',
    },
  ]

  return passageThemes.map((theme, pIndex) => {
    const vocabSub = safeVocab.slice(pIndex * 2, pIndex * 2 + 3)
    const activeWords = vocabSub.length > 0 ? vocabSub : safeVocab.slice(0, 3)
    const grammarPoint = safeGrammar[pIndex % safeGrammar.length] || safeGrammar[0]

    const word1 = activeWords[0] || safeVocab[0]
    const word2 = activeWords[1] || safeVocab[1] || safeVocab[0]
    const word3 = activeWords[2] || safeVocab[2] || safeVocab[0]

    let passageJp
    let passageVi

    if (normLevel === 'N1') {
      passageJp = `近代以降の社会システムにおいて、「${word1.japanese}」をめぐる議論は単なる技術的・経済的側面の検証にとどまらず、人間存在の根源的なあり方を問い直す思想的課題へと昇華を遂げてきた。情報技術やグローバル資本主義が未曾有の加速を遂げる中、私たちは「${grammarPoint.pattern}」という論理的枠組みを通じて、既存の制度的規範を再検証せざるを得ない段階に到達している。

かつて信奉された直線的な進歩史観は、「${word2.japanese}」に伴う複合的な危機に直面し、その脆弱性を露呈するに至った。客観的な論理と実証的な根拠に基づく政策決定が求められる一方で、目先の功利主義的な計算ばかりが優先され、生命や倫理の尊厳が軽視される風潮に対しては、深い憂慮を禁じ得ない。多様な視点を取り入れつつ、地域社会や国際秩序の調和を模索する知性こそが不可欠である。

「${word3.japanese}」の未来像を構想するにあたっては、形式的な前例踏襲を厳しく戒め、歴史の教訓を踏まえた抜本的な文明的提言を打ち出さなければならない。人間の主体性と倫理的自律性を死守し、持続可能な共同体の礎を築くことこそが、知性人に託された至上の責務なのである。`
      passageVi = `Trong hệ thống xã hội kể từ thời kỳ cận đại, các cuộc tranh luận xoay quanh "${word1.meaningVi || word1.japanese}" không chỉ dừng lại ở việc kiểm chứng khía cạnh kinh tế kỹ thuật đơn thuần, mà đã thăng hoa thành nhiệm vụ tư tưởng chất vấn lại sự tồn tại nguồn cội của con người. Giữa lúc công nghệ thông tin và chủ nghĩa tư bản toàn cầu gia tốc chưa từng thấy, thông qua khuôn khổ luận lý "${grammarPoint.pattern}", chúng ta đã bước tới giai đoạn buộc phải xem xét lại các quy phạm thể chế sẵn có.

Quan niệm tiến bộ thẳng tắp từng được tôn sùng trước đây đã đối mặt với những cuộc khủng hoảng phức hợp song hành cùng "${word2.meaningVi || word2.japanese}", và đi đến tình cảnh phơi bày tính dễ bị tổn thương. Trong khi các quyết sách dựa trên luận cứ thực chứng và tư duy logic khách quan được đòi hỏi, thì trước trào lưu chỉ ưu tiên tính toán công lợi trước mắt mà coi nhẹ phẩm giá sự sống và đạo đức, chúng ta không thể nào kìm nén nổi mối âu lo sâu sắc. Thứ trí tuệ tiếp thu đa góc nhìn để tìm kiếm sự hài hòa trật tự quốc tế và cộng đồng địa phương là vô cùng thiết yếu.

Khi bắt tay vào kiến tạo hình dung tương lai của "${word3.meaningVi || word3.japanese}", chúng ta phải nghiêm khắc cảnh giác trước sự bám víu tiền lệ mang tính hình thức, đưa ra những kiến nghị mang tầm văn minh mới dựa trên những bài học lịch sử. Bảo vệ đến cùng tính tự chủ đạo đức và chủ thể tính con người, đặt nền móng cho một cộng đồng bền vững chính là thiên chức tối thượng được ủy thác cho tầng lớp trí thức.`
    } else if (normLevel === 'N2') {
      passageJp = `現代社会における「${word1.japanese}」の急速な変化に伴って、私たちの生活環境や価値観は大きな転換点を迎えている。技術革新による利便性の向上を享受する一方で、システムへの過度の依存がもたらす副作用に対しては警戒を怠ってはならない。

これまでの政策において「${grammarPoint.pattern}」という視点が重視されてきた結果、一定の経済的成果が得られた事実は否定できない。しかし、その過程で生じた「${word2.japanese}」に関する課題を放置することは、将来的に取り返しのつかない深刻な結果を招く恐れがある。短期的な利益の追求にとらわれず、長期的な視点から制度の妥当性を検討せざるを得ない。

関係者間の協議を重ねるにあたっては、互いの立場を尊重し、現実的な「${word3.japanese}」の解決策を見出す努力が求められる。社会全体が協力して持続可能な未来を築くことこそが、次代に対する真の責任なのである。`
      passageVi = `Song hành cùng sự biến đổi nhanh chóng của "${word1.meaningVi || word1.japanese}" trong xã hội hiện đại, môi trường sinh hoạt và giá trị quan của chúng ta đang đón nhận một bước ngoặt lớn. Một mặt tận hưởng sự nâng cao tiện ích nhờ đổi mới công nghệ, nhưng mặt khác chúng ta không được phép lơ là cảnh giác trước những tác dụng phụ do sự phụ thuộc thái quá vào hệ thống mang lại.

Kết quả của việc coi trọng góc nhìn "${grammarPoint.pattern}" trong các chính sách từ trước tới nay đã mang lại những thành quả kinh tế nhất định là sự thật không thể phủ nhận. Thế nhưng, việc bỏ mặc những thách thức liên quan đến "${word2.meaningVi || word2.japanese}" nảy sinh trong quá trình đó có nguy cơ dẫn tới những kết quả nghiêm trọng không thể cứu vãn trong tương lai. Không bị giam hãm trong việc theo đuổi lợi nhuận ngắn hạn, chúng ta buộc phải xem xét tính thỏa đáng của cơ chế từ góc nhìn dài hạn.

Khi tiến hành đàm phán hiệp thương giữa các bên liên quan, sự nỗ lực tìm kiếm giải pháp thực tế cho "${word3.meaningVi || word3.japanese}" song hành cùng sự tôn trọng lập trường của nhau đang được đòi hỏi. Toàn xã hội cùng hợp tác kiến tạo tương lai bền vững chính là trách nhiệm đích thực đối với thế hệ kế tiếp.`
    } else if (normLevel === 'N3') {
      passageJp = `最近、「${word1.japanese}」について多くの人々の関心が高まっています。日常生活の中でテクノロジーが普及したおかげで、以前よりも仕事や学習の効率が大幅に向上しました。

しかし、「${grammarPoint.pattern}」を使う機会が増える一方で、「${word2.japanese}」に関する不安や問題も指摘されています。周囲の人々とよく話し合い、お互いの意見を尊重しながら改善を進めていく必要があります。

正しい方法を準備して継続していれば、どんな困難な課題であっても克服できるはずです。これからも「${word3.japanese}」を大切にしながら、より良い生活を目指していきましょう。`
      passageVi = `Gần đây, sự quan tâm của nhiều người đối với "${word1.meaningVi || word1.japanese}" đang ngày càng tăng cao. Nhờ vào việc công nghệ được phổ biến rộng rãi trong đời sống hàng ngày, hiệu suất công việc và học tập đã nâng cao đáng kể so với trước đây.

Thế nhưng, trong khi cơ hội sử dụng mẫu "${grammarPoint.pattern}" ngày một tăng, thì những bất an và vấn đề liên quan đến "${word2.meaningVi || word2.japanese}" cũng đang được chỉ ra. Chúng ta cần trao đổi kỹ lưỡng với những người xung quanh, vừa tôn trọng ý kiến của nhau vừa kiên trì tiến hành cải thiện.

Nếu chuẩn bị đúng phương pháp và kiên trì, chắc chắn bất kể vấn đề khó khăn nào cũng có thể vượt qua. Từ nay về sau, hãy vừa trân trọng "${word3.meaningVi || word3.japanese}" vừa hướng tới một cuộc sống tốt đẹp hơn.`
    } else if (normLevel === 'N4') {
      passageJp = `みなさん、こんにちは。今日は「${word1.japanese}」について案内します。
毎日の生活の中で、ルールを守って行動してください。
もし困ったことがあるときは、「${grammarPoint.pattern}」を使って先生や友達に質問してください。
次に、「${word2.japanese}」を大切にしながら勉強を続けましょう。
図書館や教室を利用するときは、他の人の迷惑にならないように静かにしてください。
みんなで協力して「${word3.japanese}」の目標を達成しましょう。`
      passageVi = `Xin chào các bạn. Hôm nay tôi xin hướng dẫn về "${word1.meaningVi || word1.japanese}".
Trong cuộc sống hàng ngày, xin hãy tuân thủ các quy tắc trong hành động.
Nếu gặp điều gì khó khăn, xin hãy sử dụng mẫu "${grammarPoint.pattern}" để đặt câu hỏi cho thầy cô hoặc bạn bè.
Tiếp theo, hãy tiếp tục học tập trong khi trân trọng "${word2.meaningVi || word2.japanese}".
Khi sử dụng phòng học hay thư viện, xin hãy giữ trật tự để không làm phiền người khác.
Mọi người hãy cùng hợp tác để hoàn thành mục tiêu "${word3.meaningVi || word3.japanese}".`
    } else {
      // N5
      passageJp = `はじめまして。わたしは がくせいです。
まいにち にほんごを べんきょうします。
ここは がっこうです。せんせいと ともだちが います。
きょうは「${word1.japanese}」と「${word2.japanese}」を ならいました。
「${grammarPoint.pattern}」は とても たいせつです。
「${word3.japanese}」も いっしょに れんしゅうします。
どうぞ よろしく おねがいします。`
      passageVi = `Rất vui được gặp bạn. Tôi là học sinh.
Mỗi ngày tôi đều học tiếng Nhật.
Đây là trường học. Có thầy cô và bạn bè.
Hôm nay tôi đã học về "${word1.meaningVi || word1.japanese}" và "${word2.meaningVi || word2.japanese}".
Mẫu "${grammarPoint.pattern}" rất quan trọng.
Tôi cũng cùng luyện tập "${word3.meaningVi || word3.japanese}".
Rất mong nhận được sự giúp đỡ.`
    }

    const questions = [
      {
        id: `${lessonKey}-p${pIndex + 1}-q1`,
        question: `Nội dung trọng tâm của đoạn văn trên thảo luận về vấn đề gì?`,
        options: [
          `Phân tích và định hướng về chủ đề "${theme.topic}" cấp độ ${normLevel}`,
          `Kể lại một giấc mơ kỳ lạ trong đêm`,
          `Tìm kiếm ví tiền bị đánh rơi trên xe buýt`,
          `Công thức nấu một món ăn gia đình`,
        ],
        answerIndex: 0,
        explanation: `Đoạn văn tập trung phân tích luận điểm về ${theme.topic} bám sát cấp độ JLPT ${normLevel}.`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q2`,
        question: `Thuật ngữ "${word1.japanese}" xuất hiện trong bài mang ý nghĩa gì?`,
        options: [
          word1.meaningVi || 'Khái niệm trọng tâm của bài đọc',
          'Tên một món đồ chơi trẻ em',
          'Một câu chào hỏi thông thường',
          'Một màu sắc tự nhiên',
        ],
        answerIndex: 0,
        explanation: `Từ "${word1.japanese}" mang ý nghĩa: ${word1.meaningVi || word1.romaji}.`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q3`,
        question: `Mẫu ngữ pháp "${grammarPoint.pattern}" được vận dụng như thế nào trong bài đọc?`,
        options: [
          grammarPoint.meaningVi || 'Mẫu ngữ pháp trọng tâm làm khung lập luận',
          'Dùng để cấm đoán người đọc hành động',
          'Dùng để xin lỗi trang trọng cuối thư',
          'Dùng để đếm số lượng đồ vật',
        ],
        answerIndex: 0,
        explanation: `Mẫu "${grammarPoint.pattern}" có ý nghĩa ngữ pháp: ${grammarPoint.meaningVi}.`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q4`,
        question: `Tác giả nhấn mạnh yếu tố nào liên quan đến "${word2.japanese}"?`,
        options: [
          `Cần nhìn nhận khách quan và giải quyết các thách thức gắn liền với nó`,
          'Hoàn toàn không cần quan tâm đến yếu tố này',
          'Chỉ cần chi thật nhiều tiền là xong',
          'Nên loại bỏ hoàn toàn khỏi xã hội',
        ],
        answerIndex: 0,
        explanation: `Bài viết chỉ ra tầm quan trọng của việc đối diện và xử lý thấu đáo các vấn đề liên quan đến "${word2.japanese}".`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q5`,
        question: `Thái độ hay trách nhiệm được tác giả đề cao đối với "${word3.japanese}" là gì?`,
        options: [
          'Kiên trì, tôn trọng lẫn nhau và hướng tới tương lai bền vững',
          'Thờ ơ, phó mặc cho người khác tự quyết định',
          'Từ bỏ ngay khi gặp khó khăn đầu tiên',
          'Tránh né thảo luận công khai',
        ],
        answerIndex: 0,
        explanation: `Tác giả nhấn mạnh tinh thần trách nhiệm, sự kiên trì và hợp tác bền vững đối với "${word3.japanese}".`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q6`,
        question: `Ý nghĩa kết luận bao quát của toàn bộ đoạn văn là gì?`,
        options: [
          `Nhận thức sâu sắc vấn đề, làm chủ tri thức và hành động có trách nhiệm chuẩn JLPT ${normLevel}`,
          'Ủng hộ việc dừng học tập và nghiên cứu',
          'Khuyên mọi người không nên thay đổi thói quen cũ',
          'Khẳng định công nghệ luôn giải quyết được mọi việc mà không cần con người',
        ],
        answerIndex: 0,
        explanation: `Kết luận của bài kêu gọi tư duy phản biện, làm chủ tri thức và hành động có trách nhiệm ở trình độ ${normLevel}.`,
      },
    ]

    return {
      id: `${lessonKey}-r${pIndex + 1}`,
      title: `Bài đọc ${pIndex + 1}: ${theme.titleSuffix}`,
      summary: `Bài đọc hiểu chuyên sâu cấp độ ${normLevel} bám sát từ vựng và ngữ pháp của Bài ${lessonNumber}.`,
      passageJp,
      passageVi,
      vocabFocus: activeWords.map((w) => `${w.japanese} (${w.meaningVi || w.romaji})`),
      grammarFocus: [grammarPoint.pattern],
      questions,
    }
  })
}

/**
 * Lấy danh sách 4-5 bài đọc hiểu cho một bài học cụ thể
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
