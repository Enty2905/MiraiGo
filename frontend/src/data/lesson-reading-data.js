/**
 * Dữ liệu bài đọc hiểu (Reading Comprehension) cho từng bài học.
 * Mỗi bài học có 4-5 bài đọc ngắn bám sát từ vựng và ngữ pháp của bài.
 * Mỗi bài đọc gồm 5-6 câu hỏi trắc nghiệm kiểm tra khả năng đọc hiểu.
 */

export const LESSON_READING_DATABASE = {
  // ================= N5 BÀI 1 =================
  'n5-l1': [
    {
      id: 'n5-l1-r1',
      title: 'Bài đọc 1: Buổi học đầu tiên (初めての授業)',
      summary: 'An tự giới thiệu bản thân và làm quen với thầy giáo Tanaka tại trường đại học Sakura.',
      passageJp: `はじめまして。わたしは アンです。ベトナムの がくせいです。
ここは さくらだいがくです。
あのひとは たなかせんせいです。たなかさんは にほんじんです。とても やさしい せんせいです。
あのみなさんも がくせいです。
どうぞ よろしく おねがいします。`,
      passageVi: `Rất vui được gặp bạn. Tôi là An. Tôi là sinh viên Việt Nam.
Đây là trường đại học Sakura.
Người kia là thầy giáo Tanaka. Thầy Tanaka là người Nhật. Thầy là một giáo viên rất hiền từ.
Những người kia cũng là sinh viên.
Rất mong nhận được sự giúp đỡ.`,
      vocabFocus: ['わたし (tôi)', 'がくせい (học sinh, sinh viên)', 'せんせい (giáo viên)', 'だいがく (đại học)', 'ひと (người)'],
      grammarFocus: ['〜は〜です (A là B)', '〜も〜です (A cũng là B)'],
      questions: [
        {
          id: 'n5-l1-r1-q1',
          question: 'アンさんは どこの がくせいですか。(An là sinh viên nước nào?)',
          options: ['ベトナムの がくせい', 'にほんの がくせい', 'アメリカの がくせい', 'ちゅうごくの がくせい'],
          answerIndex: 0,
          explanation: 'Trong bài viết: "わたしは アンです。ベトナムの がくせいです。" -> An là sinh viên Việt Nam.',
        },
        {
          id: 'n5-l1-r1-q2',
          question: 'たなかさんは だれですか。(Thầy Tanaka là ai?)',
          options: ['いしゃ', 'せんせい', 'かいしゃいん', 'けんきゅうしゃ'],
          answerIndex: 1,
          explanation: 'Trong bài viết: "あのひとは たなかせんせいです。" -> Thầy Tanaka là giáo viên.',
        },
        {
          id: 'n5-l1-r1-q3',
          question: 'たなかさんは にほんじんですか。(Thầy Tanaka có phải là người Nhật không?)',
          options: ['いいえ、にほんじんじゃありません', 'はい、にほんじんです', 'いいえ、ベトナムじんです', 'はい、アメリカじんです'],
          answerIndex: 1,
          explanation: 'Trong bài viết: "たなかさんは にほんじんです。" -> Vâng, thầy là người Nhật.',
        },
        {
          id: 'n5-l1-r1-q4',
          question: 'アンさんは いま どこに いますか。(Hiện tại An đang ở đâu?)',
          options: ['さくらびょういん', 'さくらだいがく', 'かいしゃ', 'ぎんこう'],
          answerIndex: 1,
          explanation: 'Trong bài viết: "ここは さくらだいがくです。" -> Đây là trường đại học Sakura.',
        },
        {
          id: 'n5-l1-r1-q5',
          question: '「あのみなさん」の しごとは なんですか。(Những người kia làm nghề gì?)',
          options: ['せんせい', 'いしゃ', 'がくせい', 'けんきゅうしゃ'],
          answerIndex: 2,
          explanation: 'Trong bài viết: "あのみなさんも がくせいです。" -> Những người kia cũng là sinh viên.',
        },
        {
          id: 'n5-l1-r1-q6',
          question: 'Câu nào sau đây ĐÚNG với nội dung bài đọc?',
          options: [
            'An là giáo viên của trường đại học Sakura.',
            'Thầy Tanaka là một giáo viên rất hiền từ (やさしい せんせい).',
            'Thầy Tanaka là người Việt Nam.',
            'An không phải là sinh viên.',
          ],
          answerIndex: 1,
          explanation: 'Đoạn văn nói rõ: "たなかさんは にほんじんです。とても やさしい せんせいです."',
        },
      ],
    },
    {
      id: 'n5-l1-r2',
      title: 'Bài đọc 2: Tại bệnh viện Sakura (さくら病院で)',
      summary: 'Bác sĩ Yamada giới thiệu bản thân và phân biệt nghề nghiệp của chị Mai.',
      passageJp: `こんにちは。わたしは やまだです。さくらびょういんの いしゃです。
あのひとは マイさんです。
マイさんは いしゃじゃありません。かいしゃいんです。
マイさんは だいがくの がくせいじゃありません。IMCの しゃいんです。
どうぞ よろしく。`,
      passageVi: `Xin chào. Tôi là Yamada. Tôi là bác sĩ tại bệnh viện Sakura.
Người kia là chị Mai.
Chị Mai không phải là bác sĩ. Chị ấy là nhân viên công ty.
Chị Mai không phải là sinh viên đại học. Chị ấy là nhân viên công ty IMC.
Rất hân hạnh được làm quen.`,
      vocabFocus: ['いしゃ (bác sĩ)', 'びょういん (bệnh viện)', 'かいしゃいん (nhân viên công ty)'],
      grammarFocus: ['〜は〜じゃありません (A không phải là B)'],
      questions: [
        {
          id: 'n5-l1-r2-q1',
          question: 'やまださんの しごとは なんですか。(Nghề nghiệp của bác sĩ Yamada là gì?)',
          options: ['いしゃ', 'かいしゃいん', 'がくせい', 'せんせい'],
          answerIndex: 0,
          explanation: 'Trong bài viết: "わたしは やまだです。さくらびょういんの いしゃです."',
        },
        {
          id: 'n5-l1-r2-q2',
          question: 'やまださんは どこで はたらいていますか。(Yamada làm việc ở đâu?)',
          options: ['さくらだいがく', 'さくらびょういん', 'IMCのかいしゃ', 'ぎんこう'],
          answerIndex: 1,
          explanation: 'Yamada là bác sĩ ở bệnh viện Sakura (さくらびょういん).',
        },
        {
          id: 'n5-l1-r2-q3',
          question: 'マイさんは いしゃですか。(Chị Mai có phải là bác sĩ không?)',
          options: ['はい、いしゃです', 'いいえ、いしゃじゃありません', 'はい、さくらびょういんの いしゃです', 'いいえ、せんせいです'],
          answerIndex: 1,
          explanation: 'Đoạn văn viết: "マイさんは いしゃじゃありません。"',
        },
        {
          id: 'n5-l1-r2-q4',
          question: 'マイさんの しごとは なんですか。(Nghề nghiệp của chị Mai là gì?)',
          options: ['だいがくの がくせい', 'びょういんの いしゃ', 'IMCの かいしゃいん', 'けんきゅうしゃ'],
          answerIndex: 2,
          explanation: 'Đoạn văn viết: "マイさんは いしゃじゃありません。かいしゃいんです。IMCの しゃいんです."',
        },
        {
          id: 'n5-l1-r2-q5',
          question: 'マイさんは だいがくの がくせいですか。(Mai có phải sinh viên không?)',
          options: ['はい、がくせいです', 'いいえ、がくせいじゃありません', 'はい、さくらだいがくの がくせいです', 'いいえ、いしゃです'],
          answerIndex: 1,
          explanation: 'Bài đọc nêu rõ: "マイさんは だいがくの がくせいじゃありません。"',
        },
        {
          id: 'n5-l1-r2-q6',
          question: 'Câu nào sau đây KHÔNG đúng với bài đọc?',
          options: [
            'Yamada là bác sĩ.',
            'Mai là nhân viên công ty IMC.',
            'Mai là bác sĩ của bệnh viện Sakura.',
            'Yamada làm việc ở bệnh viện Sakura.',
          ],
          answerIndex: 2,
          explanation: 'Chị Mai là nhân viên công ty, không phải là bác sĩ.',
        },
      ],
    },
    {
      id: 'n5-l1-r3',
      title: 'Bài đọc 3: Bạn cùng phòng ở ký túc xá (寮のルームメイト)',
      summary: 'Nam giới thiệu về bạn cùng phòng Miller, một nhà nghiên cứu người Mỹ.',
      passageJp: `わたしは ナムです。ベトナムじんです。だいがくの がくせいです。
こちらは ミラーさんです。ミラーさんは アメリカじんです。
ミラーさんは がくせいじゃありません。けんきゅうしゃです。
AKCの けんきゅうしゃです。
わたしたちは ともだちです。`,
      passageVi: `Tôi là Nam. Tôi là người Việt Nam. Tôi là sinh viên đại học.
Đây là anh Miller. Anh Miller là người Mỹ.
Anh Miller không phải là sinh viên. Anh ấy là nhà nghiên cứu.
Anh ấy là nhà nghiên cứu của viện AKC.
Chúng tôi là bạn bè.`,
      vocabFocus: ['けんきゅうしゃ (nhà nghiên cứu)', 'ともだち (bạn bè)', 'ひと (người)'],
      grammarFocus: ['こちらは〜さんです (Đây là anh/chị...)', '〜じゃありません'],
      questions: [
        {
          id: 'n5-l1-r3-q1',
          question: 'ナムさんは どこの くにの ひとですか。(Nam là người nước nào?)',
          options: ['アメリカじん', 'ベトナムじん', 'にほんじん', 'ちゅうごくじん'],
          answerIndex: 1,
          explanation: 'Đoạn văn viết: "わたしは ナムです。ベトナムじんです。"',
        },
        {
          id: 'n5-l1-r3-q2',
          question: 'ミラーさんは どこの くにの ひとですか。(Miller là người nước nào?)',
          options: ['ベトナムじん', 'アメリカじん', 'にほんじん', 'イギリスじん'],
          answerIndex: 1,
          explanation: 'Đoạn văn viết: "ミラーさんは アメリカじんです。"',
        },
        {
          id: 'n5-l1-r3-q3',
          question: 'ミラーさんは がくせいですか。(Miller có phải là sinh viên không?)',
          options: ['はい、がくせいです', 'いいえ、がくせいじゃありません', 'はい、AKCの がくせいです', 'いいえ、せんせいです'],
          answerIndex: 1,
          explanation: 'Đoạn văn viết: "ミラーさんは がくせいじゃありません。けんきゅうしゃです。"',
        },
        {
          id: 'n5-l1-r3-q4',
          question: 'ミラーさんの しごとは なんですか。(Nghề của Miller là gì?)',
          options: ['いしゃ', 'かいしゃいん', 'けんきゅうしゃ', 'せんせい'],
          answerIndex: 2,
          explanation: 'Đoạn văn viết rõ Miller là "けんきゅうしゃ" (nhà nghiên cứu).',
        },
        {
          id: 'n5-l1-r3-q5',
          question: 'ミラーさんは どこの けんきゅうしゃですか。(Miller là nhà nghiên cứu ở đâu?)',
          options: ['IMC', 'さくらだいがく', 'さくらびょういん', 'AKC'],
          answerIndex: 3,
          explanation: 'Đoạn văn viết: "AKCの けんきゅうしゃです。"',
        },
        {
          id: 'n5-l1-r3-q6',
          question: 'ナムさんと ミラーさんの かんけいは なんですか。(Mối quan hệ giữa Nam và Miller là gì?)',
          options: ['せんせいと がくせい', 'いしゃと かんじゃ', 'ともだち', 'かいしゃの じょうしと ぶか'],
          answerIndex: 2,
          explanation: 'Đoạn văn viết: "わたしたちは ともだちです。" -> Chúng tôi là bạn bè.',
        },
      ],
    },
    {
      id: 'n5-l1-r4',
      title: 'Bài đọc 4: Ngày đầu tiên tại công ty mới (会社の初日)',
      summary: 'Wang giới thiệu bản thân là nhân viên mới và làm quen với tiền bối Sato.',
      passageJp: `おはようございます。わたしは ワンです。ちゅうごくじんです。
きょうから この かいしゃの しゃいんです。エンジニアです。
あのひとは さとうさんです。さとうさんは にほんじんです。
さとうさんは わたしの せんぱいです。
さとうさんは せんせいじゃありません。とても しんせつな かいしゃいんです。`,
      passageVi: `Chào buổi sáng. Tôi là Wang. Tôi là người Trung Quốc.
Từ hôm nay tôi là nhân viên của công ty này. Tôi là kỹ sư.
Người kia là anh Sato. Anh Sato là người Nhật.
Anh Sato là tiền bối của tôi.
Anh Sato không phải là giáo viên. Anh ấy là một nhân viên công ty rất tốt bụng.`,
      vocabFocus: ['かいしゃいん (nhân viên)', 'せんぱい (tiền bối)', 'おはようございます (chào buổi sáng)'],
      grammarFocus: ['〜は〜です', '〜じゃありません', '〜の〜 (của)'],
      questions: [
        {
          id: 'n5-l1-r4-q1',
          question: 'ワンさんは どこの くにの ひとですか。(Wang là người nước nào?)',
          options: ['にほんじん', 'ちゅうごくじん', 'ベトナムじん', 'アメリカじん'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "わたしは ワンです。ちゅうごくじんです。"',
        },
        {
          id: 'n5-l1-r4-q2',
          question: 'ワンさんの しごとは なんですか。(Nghề của Wang là gì?)',
          options: ['せんせい', 'いしゃ', 'エンジニア（かいしゃいん）', 'けんきゅうしゃ'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "この かいしゃの しゃいんです。エンジニアです。"',
        },
        {
          id: 'n5-l1-r4-q3',
          question: 'さとうさんは だれですか。(Sato là ai?)',
          options: ['ワンさんの せんぱい', 'ワンさんの がくせい', 'だいがくの せんせい', 'びょういんの いしゃ'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "さとうさんは わたしの せんぱいです。"',
        },
        {
          id: 'n5-l1-r4-q4',
          question: 'さとうさんは せんせいですか。(Sato có phải giáo viên không?)',
          options: ['はい、せんせいです', 'いいえ、せんせいじゃありません', 'はい、だいがくの せんせいです', 'いいえ、がくせいです'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "さとうさんは せんせいじゃありません。とても しんせつな かいしゃいんです。"',
        },
        {
          id: 'n5-l1-r4-q5',
          question: 'さとうさんは どんな ひとですか。(Sato là người thế nào?)',
          options: ['こわい ひと', 'しんせつな かいしゃいん', 'わるい ひと', 'いそがしい せんせい'],
          answerIndex: 1,
          explanation: 'Đoạn văn khen Sato: "とても しんせつな かいしゃいんです。" (Nhân viên rất tốt bụng).',
        },
        {
          id: 'n5-l1-r4-q6',
          question: 'Câu chào nào được dùng trong buổi sáng của bài đọc?',
          options: ['こんばんは', 'こんにちは', 'おはようございます', 'さようなら'],
          answerIndex: 2,
          explanation: 'Mở đầu bài đọc dùng "おはようございます" (Chào buổi sáng).',
        },
      ],
    },
    {
      id: 'n5-l1-r5',
      title: 'Bài đọc 5: Thành viên câu lạc bộ tiếng Nhật (日本語クラブ)',
      summary: 'Linh giới thiệu các thành viên đa quốc tịch trong câu lạc bộ tiếng Nhật.',
      passageJp: `わたしたちは にほんごクラブの メンバーです。
わたしは リンです。ベトナムの だいがくせいです。
カルロスさんは ブラジルじんです。カルロスさんも だいがくせいです。
キムさんは かんこくじんです。キムさんは がくせいじゃありません。けんきゅうしゃです。
みんな とても なかよしです。どうぞ よろしく。`,
      passageVi: `Chúng tôi là thành viên của câu lạc bộ tiếng Nhật.
Tôi là Linh. Tôi là sinh viên đại học người Việt Nam.
Anh Carlos là người Brazil. Anh Carlos cũng là sinh viên đại học.
Chị Kim là người Hàn Quốc. Chị Kim không phải là sinh viên. Chị ấy là nhà nghiên cứu.
Mọi người rất thân thiết với nhau. Rất vui được làm quen.`,
      vocabFocus: ['だいがくせい (sinh viên đại học)', 'けんきゅうしゃ (nhà nghiên cứu)', 'クラブ (câu lạc bộ)'],
      grammarFocus: ['〜も〜です (cũng là)', '〜じゃありません (không phải)'],
      questions: [
        {
          id: 'n5-l1-r5-q1',
          question: 'リンさんは なにを していますか。(Linh làm nghề gì?)',
          options: ['かいしゃいん', 'だいがくせい', 'けんきゅうしゃ', 'いしゃ'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "わたしは リンです。ベトナムの だいがくせいです。"',
        },
        {
          id: 'n5-l1-r5-q2',
          question: 'カルロスさんは どこの くにの ひとですか。(Carlos là người nước nào?)',
          options: ['にほんじん', 'アメリカじん', 'ブラジルじん', 'かんこくじん'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "カルロスさんは ブラジルじんです。"',
        },
        {
          id: 'n5-l1-r5-q3',
          question: 'カルロスさんは がくせいですか。(Carlos có phải là sinh viên không?)',
          options: ['はい、だいがくせいです', 'いいえ、がくせいじゃありません', 'いいえ、けんきゅうしゃです', 'いいえ、いしゃです'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "カルロスさんも だいがくせいです。"',
        },
        {
          id: 'n5-l1-r5-q4',
          question: 'キムさんは がくせいですか。(Kim có phải là sinh viên không?)',
          options: ['はい、がくせいです', 'いいえ、がくせいじゃありません', 'はい、ベトナムの がくせいです', 'はい、にほんの がくせいです'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "キムさんは がくせいじゃありません。けんきゅうしゃです。"',
        },
        {
          id: 'n5-l1-r5-q5',
          question: 'キムさんの しごとは なんですか。(Nghề của Kim là gì?)',
          options: ['せんせい', 'いしゃ', 'けんきゅうしゃ', 'かいしゃいん'],
          answerIndex: 2,
          explanation: 'Đoạn văn nói rõ Kim là "けんきゅうしゃ" (nhà nghiên cứu).',
        },
        {
          id: 'n5-l1-r5-q6',
          question: 'Câu nào sau đây ĐÚNG về các thành viên câu lạc bộ?',
          options: [
            'Linh và Kim đều là người Brazil.',
            'Cả Linh, Carlos và Kim đều là sinh viên đại học.',
            'Linh là sinh viên, Carlos là sinh viên, còn Kim là nhà nghiên cứu.',
            'Mọi người không thân thiết với nhau.',
          ],
          answerIndex: 2,
          explanation: 'Linh và Carlos là sinh viên, còn Kim là nhà nghiên cứu ("けんきゅうしゃ").',
        },
      ],
    },
  ],

  // ================= N5 BÀI 2 =================
  'n5-l2': [
    {
      id: 'n5-l2-r1',
      title: 'Bài đọc 1: Đồ đạc trên bàn học (机の上のもの)',
      summary: 'Khám phá các đồ vật quen thuộc trên bàn học như sách, từ điển, bút chì và sổ tay.',
      passageJp: `これは わたしの つくえです。つくえの うえに いろいろな ものが あります。
これは にほんごの ほんです。あれは えいごの じしょです。
この えんぴつは わたしのです。
その ボールペンは たなかさんのですか。
いいえ、これは たなかさんのじゃありません。やまださんのです。`,
      passageVi: `Đây là bàn học của tôi. Trên bàn có rất nhiều đồ vật.
Đây là sách tiếng Nhật. Kia là từ điển tiếng Anh.
Cây bút chì này là của tôi.
Cây bút bi đó có phải của thầy Tanaka không?
Không, cái này không phải của thầy Tanaka. Nó là của anh Yamada.`,
      vocabFocus: ['これ/それ/あれ (cái này/đó/kia)', 'ほん (sách)', 'じしょ (từ điển)', 'えんぴつ (bút chì)', 'ボールペン (bút bi)'],
      grammarFocus: ['〜は〜のです (sở hữu)', '〜じゃありません'],
      questions: [
        {
          id: 'n5-l2-r1-q1',
          question: '「これ」は なんの ほんですか。(Cái này là sách gì?)',
          options: ['えいごの ほん', 'にほんごの ほん', 'フランスごの ほん', 'ちゅうごくごの ほん'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "これは にほんごの ほんです。"',
        },
        {
          id: 'n5-l2-r1-q2',
          question: '「あれ」は なんですか。(Kia là cái gì?)',
          options: ['にほんごの ほん', 'えいごの じしょ', 'ボールペン', 'ノート'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "あれは えいごの じしょです。"',
        },
        {
          id: 'n5-l2-r1-q3',
          question: 'この えんぴつは だれのですか。(Cây bút chì này của ai?)',
          options: ['たなかさんの', 'わたしの', 'やまださんの', 'せんせいの'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "この えんぴつは わたしのです。"',
        },
        {
          id: 'n5-l2-r1-q4',
          question: 'その ボールペンは たなかさんのですか。(Cây bút bi đó có phải của Tanaka không?)',
          options: ['はい、たなかさんのです', 'いいえ、たなかさんのじゃありません', 'はい、わたしのです', 'いいえ、せんせいのです'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "いいえ、これは たなかさんのじゃありません。やまださんのです。"',
        },
        {
          id: 'n5-l2-r1-q5',
          question: 'その ボールペンは だれのですか。(Vậy cây bút bi đó của ai?)',
          options: ['たなかさんの', 'やまださんの', 'アンさんの', 'ミラーさんの'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "やまださんのです。"',
        },
        {
          id: 'n5-l2-r1-q6',
          question: 'Từ "あれ" dùng để chỉ vật ở vị trí nào?',
          options: [
            'Gần người nói',
            'Gần người nghe',
            'Xa cả người nói và người nghe',
            'Ở trong túi',
          ],
          answerIndex: 2,
          explanation: '"あれ" là đại từ chỉ định đồ vật ở xa cả người nói và người nghe.',
        },
      ],
    },
    {
      id: 'n5-l2-r2',
      title: 'Bài đọc 2: Chiếc cặp sách ở thư viện (図書館のかばん)',
      summary: 'Một chiếc cặp bị để quên ở thư viện và mọi người đang tìm chủ nhân của nó.',
      passageJp: `すみません。この かばんは だれのですか。
それは わたしのかばんじゃありません。
その かばんの なかに てちょうと めいしが あります。
めいしは 「IMCの マイク・ミラー」です。
あ、あれは ミラーさんの かばんです！`,
      passageVi: `Xin lỗi. Chiếc cặp này là của ai vậy?
Đó không phải là cặp của tôi.
Bên trong chiếc cặp đó có một cuốn sổ tay và danh thiếp.
Danh thiếp ghi: "Mike Miller của công ty IMC".
A, kia chính là cặp sách của anh Miller!`,
      vocabFocus: ['かばん (cặp, túi xách)', 'てちょう (sổ tay)', 'めいし (danh thiếp)', 'だれ (ai)'],
      grammarFocus: ['だれの〜ですか (của ai)', 'この/その/あの + Danh từ'],
      questions: [
        {
          id: 'n5-l2-r2-q1',
          question: 'かばんの なかに なにが ありますか。(Trong cặp có những gì?)',
          options: ['ほんと えんぴつ', 'てちょうと めいし', 'じしょと かさ', 'くるまと かぎ'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "その かばんの なかに てちょうと めいしが あります。"',
        },
        {
          id: 'n5-l2-r2-q2',
          question: 'めいしは だれのですか。(Danh thiếp là của ai?)',
          options: ['たなかさん', 'やまださん', 'マイク・ミラーさん', 'ワンさん'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "めいしは 「IMCの マイク・ミラー」です。"',
        },
        {
          id: 'n5-l2-r2-q3',
          question: 'この かばんは だれのですか。(Cuối cùng, chiếc cặp là của ai?)',
          options: ['わたしのです', 'ミラーさんのです', 'たなかさんのです', 'だれのでもありません'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "あ、あれは ミラーさんの かばんです！"',
        },
        {
          id: 'n5-l2-r2-q4',
          question: 'ミラーさんは どこの かいしゃいんですか。(Miller là nhân viên công ty nào?)',
          options: ['AKC', 'さくらだいがく', 'IMC', 'ABC'],
          answerIndex: 2,
          explanation: 'Danh thiếp ghi "IMCの マイク・ミラー".',
        },
        {
          id: 'n5-l2-r2-q5',
          question: 'Từ "てちょう" có nghĩa là gì?',
          options: ['Sách giáo khoa', 'Quyển sổ tay', 'Tờ báo', 'Tạp chí'],
          answerIndex: 1,
          explanation: '"てちょう" (手帳) nghĩa là quyển sổ tay cá nhân.',
        },
        {
          id: 'n5-l2-r2-q6',
          question: 'Người được hỏi ban đầu có phải là chủ nhân của chiếc cặp không?',
          options: [
            'Có, đó là cặp của người đó.',
            'Không, người đó nói "それは わたしのかばんじゃありません".',
            'Đó là cặp của giáo viên thư viện.',
            'Bài đọc không nhắc đến.',
          ],
          answerIndex: 1,
          explanation: 'Người được hỏi đã trả lời: "それは わたしのかばんじゃありません。" (Đó không phải cặp của tôi).',
        },
      ],
    },
    {
      id: 'n5-l2-r3',
      title: 'Bài đọc 3: Chiếc ô màu xanh trong ngày mưa (雨の日の傘)',
      summary: 'Nhận nhầm ô tại lớp học tiếng Nhật vào một ngày trời mưa.',
      passageJp: `きょうは あめです。
ここに あおい かさが あります。この かさは アンさんのですか。
いいえ、アンさんの かさは あかい かさです。
あの くろい かさは たなかせんせいの かさです。
この あおい かさは マリアさんの かさです。`,
      passageVi: `Hôm nay trời mưa.
Ở đây có một chiếc ô màu xanh da trời. Chiếc ô này có phải của An không?
Không, ô của An là chiếc ô màu đỏ.
Chiếc ô màu đen đằng kia là của thầy Tanaka.
Chiếc ô màu xanh này là của Maria.`,
      vocabFocus: ['かさ (cái ô/dù)', 'あめ (mưa)', 'あおい (màu xanh)', 'あかい (màu đỏ)', 'くろい (màu đen)'],
      grammarFocus: ['〜の〜 (sở hữu)', '〜は〜ですか (câu hỏi)'],
      questions: [
        {
          id: 'n5-l2-r3-q1',
          question: 'きょうの てんきは なんですか。(Thời tiết hôm nay thế nào?)',
          options: ['はれ', 'ゆき', 'あめ', 'くもり'],
          answerIndex: 2,
          explanation: 'Đoạn văn mở đầu: "きょうは あめです。" (Hôm nay trời mưa).',
        },
        {
          id: 'n5-l2-r3-q2',
          question: 'アンさんの かさは どれですか。(Ô của An là cái nào?)',
          options: ['あおい かさ', 'あかい かさ', 'くろい かさ', 'しろい かさ'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "アンさんの かさは あかい かさです。"',
        },
        {
          id: 'n5-l2-r3-q3',
          question: 'たなかせんせいの かさは どれですか。(Ô của thầy Tanaka là chiếc nào?)',
          options: ['あかい かさ', 'くろい かさ', 'あおい かさ', 'きいろい かさ'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "あの くろい かさは たなかせんせいの かさです。"',
        },
        {
          id: 'n5-l2-r3-q4',
          question: 'この あおい かさは だれのですか。(Chiếc ô màu xanh này là của ai?)',
          options: ['アンさんの', 'たなかせんせいの', 'マリアさんの', 'やまださんの'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "この あおい かさは マリアさんの かさです。"',
        },
        {
          id: 'n5-l2-r3-q5',
          question: 'Có bao nhiêu chiếc ô được nhắc đến màu sắc trong bài?',
          options: ['1 chiếc', '2 chiếc', '3 chiếc (xanh, đỏ, đen)', '4 chiếc'],
          answerIndex: 2,
          explanation: 'Có 3 chiếc ô: ô màu xanh của Maria, ô màu đỏ của An, và ô màu đen của thầy Tanaka.',
        },
        {
          id: 'n5-l2-r3-q6',
          question: 'Chiếc ô màu xanh có phải của An không?',
          options: [
            'Phải, chính là ô của An.',
            'Không, ô của An màu đỏ, còn ô này là của Maria.',
            'Là ô của thầy Tanaka.',
            'Không ai nhận là chủ của chiếc ô.',
          ],
          answerIndex: 1,
          explanation: 'Đoạn văn nêu rõ: "いいえ、アンさんの かさは あかい かさです。この あおい かさは マリアさんの かさです。"',
        },
      ],
    },
    {
      id: 'n5-l2-r4',
      title: 'Bài đọc 4: Cuốn tạp chí mới và tờ báo (雑誌と新聞)',
      summary: 'Tìm hiểu về các ấn phẩm sách báo trong phòng đọc của công ty.',
      passageJp: `これは じどうしゃの ざっしです。とても おもしろいです。
その ざっしは にほんごの ざっしですか。
はい、にほんごの ざっしです。
あれは きょうの しんぶんです。ちちの しんぶんです。
わたしは まいにち しんぶんを よみます。`,
      passageVi: `Đây là tạp chí về xe ô tô. Nó rất thú vị.
Cuốn tạp chí đó có phải là tạp chí tiếng Nhật không?
Vâng, là tạp chí tiếng Nhật.
Kia là tờ báo hôm nay. Đó là tờ báo của bố tôi.
Tôi đọc báo mỗi ngày.`,
      vocabFocus: ['ざっし (tạp chí)', 'しんぶん (báo)', 'じどうしゃ (xe ô tô)', 'ちち (bố mình)'],
      grammarFocus: ['〜の〜 (bổ nghĩa danh từ)', 'これ/その/あれ'],
      questions: [
        {
          id: 'n5-l2-r4-q1',
          question: '「これ」は なんの ざっしですか。(Đây là tạp chí gì?)',
          options: ['りょうりの ざっし', 'じどうしゃの ざっし', 'カメラの ざっし', 'スポーツの ざっし'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "これは じどうしゃの ざっしです。"',
        },
        {
          id: 'n5-l2-r4-q2',
          question: 'その ざっしは なんの げんごですか。(Tạp chí đó bằng ngôn ngữ gì?)',
          options: ['えいご', 'ベトナムご', 'にほんご', 'フランスご'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "はい、にほんごの ざっしです。"',
        },
        {
          id: 'n5-l2-r4-q3',
          question: '「あれ」は なんですか。(Kia là cái gì?)',
          options: ['きのうの しんぶん', 'きょうの しんぶん', 'にほんごの ノート', 'じしょ'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "あれは きょうの しんぶんです。"',
        },
        {
          id: 'n5-l2-r4-q4',
          question: 'その しんぶんは だれのですか。(Tờ báo đó là của ai?)',
          options: ['ははの', 'ちちの', 'わたしの', 'ともだちの'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "ちちの しんぶんです。" (Báo của bố tôi).',
        },
        {
          id: 'n5-l2-r4-q5',
          question: 'Người nói có thói quen gì mỗi ngày?',
          options: ['Đọc báo mỗi ngày (まいにち しんぶんを よみます)', 'Mua xe hơi mới', 'Đọc truyện tranh', 'Ngủ nhiều'],
          answerIndex: 0,
          explanation: 'Câu cuối bài viết: "わたしは まいにち しんぶんを よみます。"',
        },
        {
          id: 'n5-l2-r4-q6',
          question: 'Từ "じどうしゃ" đồng nghĩa với từ nào sau đây?',
          options: ['でんしゃ', 'くるま', 'じてんしゃ', 'ひこうき'],
          answerIndex: 1,
          explanation: '"じどうしゃ" (自動車) và "くるま" (車) đều có nghĩa là xe ô tô.',
        },
      ],
    },
    {
      id: 'n5-l2-r5',
      title: 'Bài đọc 5: Chiếc xe hơi của công ty (会社の車)',
      summary: 'Giới thiệu về xe công ty và xe riêng của giám đốc và nhân viên.',
      passageJp: `あれは わたしたちの かいしゃの くるまです。しろい くるまです。
あの くろい くるまは しゃちょうの くるまです。
この かぎは かいしゃの くるまの かぎです。
ミラーさんの くるまは どれですか。
ミラーさんの くるまは あかい くるまです。あそこに あります。`,
      passageVi: `Kia là chiếc xe hơi của công ty chúng tôi. Đó là chiếc xe màu trắng.
Chiếc xe màu đen đằng kia là xe của giám đốc.
Chìa khóa này là chìa khóa xe của công ty.
Chiếc xe của anh Miller là chiếc nào?
Xe của anh Miller là chiếc xe màu đỏ. Nó ở đằng kia.`,
      vocabFocus: ['くるま (xe hơi)', 'かぎ (chìa khóa)', 'しゃちょう (giám đốc)', 'しろい (màu trắng)'],
      grammarFocus: ['〜の〜の〜 (nhiều tầng sở hữu: かいしゃの くるまの かぎ)', 'どれ (cái nào)'],
      questions: [
        {
          id: 'n5-l2-r5-q1',
          question: 'かいしゃの くるまは どんな いろですか。(Xe của công ty màu gì?)',
          options: ['くろい くるま', 'あかい くるま', 'しろい くるま', 'あおい くるま'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "あれは わたしたちの かいしゃの くるまです。しろい くるまです。"',
        },
        {
          id: 'n5-l2-r5-q2',
          question: 'くろい くるまは だれのですか。(Chiếc xe màu đen là của ai?)',
          options: ['しゃちょうの くるま', 'ミラーさんの くるま', 'わたしの くるま', 'やまださんの くるま'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "あの くろい くるまは しゃちょうの くるまです。"',
        },
        {
          id: 'n5-l2-r5-q3',
          question: 'この かぎは なんの かぎですか。(Chiếc chìa khóa này là chìa khóa gì?)',
          options: [
            'へやの かぎ',
            'かいしゃの くるまの かぎ',
            'しゃちょうの いえの かぎ',
            'ミラーさんの くるまの かぎ',
          ],
          answerIndex: 1,
          explanation: 'Đoạn văn: "この かぎは かいしゃの くるまの かぎです。"',
        },
        {
          id: 'n5-l2-r5-q4',
          question: 'ミラーさんの くるまは どんな いろですか。(Xe của Miller màu gì?)',
          options: ['しろい くるま', 'くろい くるま', 'あかい くるま', 'きいろい くるま'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "ミラーさんの くるまは あかい くるまです。"',
        },
        {
          id: 'n5-l2-r5-q5',
          question: 'Từ để hỏi "どれ" trong bài dùng khi nào?',
          options: [
            'Khi hỏi người nào',
            'Khi hỏi vị trí ở đâu',
            'Khi hỏi cái nào trong số nhiều vật',
            'Khi hỏi giá tiền bao nhiêu',
          ],
          answerIndex: 2,
          explanation: '"どれ" có nghĩa là "cái nào" khi lựa chọn giữa 3 vật thể trở lên.',
        },
        {
          id: 'n5-l2-r5-q6',
          question: 'Xe của giám đốc và xe của công ty có cùng màu không?',
          options: [
            'Có, đều là xe màu trắng.',
            'Không, xe công ty màu trắng còn xe giám đốc màu đen.',
            'Có, đều là xe màu đỏ.',
            'Bài đọc không nhắc màu xe giám đốc.',
          ],
          answerIndex: 1,
          explanation: 'Xe công ty màu trắng (しろい), còn xe giám đốc màu đen (くろい).',
        },
      ],
    },
  ],

  // ================= N5 BÀI 3 =================
  'n5-l3': [
    {
      id: 'n5-l3-r1',
      title: 'Bài đọc 1: Sơ đồ khuôn viên trường đại học (大学の案内)',
      summary: 'Hướng dẫn vị trí các phòng học, căng tin, thư viện và nhà vệ sinh trong trường.',
      passageJp: `ここは さくらだいがくです。
１かいに うけつけと じむしょが あります。
２かいは きょうしつです。にほんごの じゅぎょうは ２かいです。
しょくどうは ３かいに あります。とても ひろいです。
おてあらいは ２かいと ３かいに あります。`,
      passageVi: `Đây là trường đại học Sakura.
Ở tầng 1 có quầy lễ tân và văn phòng khoa.
Tầng 2 là các phòng học. Giờ học tiếng Nhật diễn ra ở tầng 2.
Nhà ăn căng tin ở tầng 3. Nó rất rộng rãi.
Nhà vệ sinh có ở cả tầng 2 và tầng 3.`,
      vocabFocus: ['ここ/そこ/あそこ (ở đây/đó/kia)', 'きょうしつ (phòng học)', 'しょくどう (nhà ăn)', 'じむしょ (văn phòng)', 'おてあらい (nhà vệ sinh)'],
      grammarFocus: ['〜は〜にあります (ở tại vị trí)', '〜かい (tầng)'],
      questions: [
        {
          id: 'n5-l3-r1-q1',
          question: '１かいに なにが ありますか。(Ở tầng 1 có những gì?)',
          options: ['きょうしつと しょくどう', 'うけつけと じむしょ', 'おてあらいだけ', 'としょかん'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "１かいに うけつけと じむしょが あります。"',
        },
        {
          id: 'n5-l3-r1-q2',
          question: 'にほんごの じゅぎょうは なんかいですか。(Giờ học tiếng Nhật ở tầng mấy?)',
          options: ['１かい', '２かい', '３かい', '４かい'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "２かいは きょうしつです。にほんごの じゅぎょうは ２かいです。"',
        },
        {
          id: 'n5-l3-r1-q3',
          question: 'しょくどうは なんかいに ありますか。(Nhà ăn ở tầng mấy?)',
          options: ['１かい', '２かい', '３かい', 'ちか１かい'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "しょくどうは ３かいに あります。とても ひろいです。"',
        },
        {
          id: 'n5-l3-r1-q4',
          question: 'おてあらいは なんかいに ありますか。(Nhà vệ sinh ở tầng mấy?)',
          options: ['１かいだけ', '２かいと ３かい', '３かいだけ', '４かい'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "おてあらいは ２かいと ３かいに あります。"',
        },
        {
          id: 'n5-l3-r1-q5',
          question: 'Từ "おてあらい" có từ đồng nghĩa nào thông dụng?',
          options: ['へや', 'トイレ', 'かいだん', 'エレベーター'],
          answerIndex: 1,
          explanation: '"おてあらい" (お手洗い) và "トイレ" đều có nghĩa là nhà vệ sinh.',
        },
        {
          id: 'n5-l3-r1-q6',
          question: 'Nhà ăn của trường đại học Sakura có đặc điểm gì?',
          options: ['Rất nhỏ', 'Rất tối', 'Rất rộng rãi (とても ひろい)', 'Ở tầng 1'],
          answerIndex: 2,
          explanation: 'Đoạn văn miêu tả: "しょくどうは ３かいに あります。とても ひろいです。"',
        },
      ],
    },
    {
      id: 'n5-l3-r2',
      title: 'Bài đọc 2: Mua sắm ở bách hóa tổng hợp (デパートでの買い物)',
      summary: 'Khách hàng hỏi tìm tầng bán giày và cà vạt tại trung tâm thương mại.',
      passageJp: `いらっしゃいませ。
すみません、くつうりばは どこですか。
くつの うりばは ちか１かいで ございます。
ネクタイの うりばは なんかいですか。
ネクタイは ４かいに ございます。
この ネクタイは いくらですか。
それは ３０００えんです。`,
      passageVi: `Kính chào quý khách!
Xin lỗi, quầy bán giày ở đâu ạ?
Dạ quầy giày ở tầng hầm 1 thưa quý khách.
Thế còn quầy cà vạt ở tầng mấy ạ?
Cà vạt ở tầng 4 ạ.
Chiếc cà vạt này giá bao nhiêu tiền vậy?
Dạ chiếc đó giá 3.000 yên ạ.`,
      vocabFocus: ['どこ (ở đâu)', 'いくら (bao nhiêu tiền)', 'くつ (giày)', 'ネクタイ (cà vạt)', 'ちか (tầng hầm)'],
      grammarFocus: ['〜はどこですか', '〜はいくらですか'],
      questions: [
        {
          id: 'n5-l3-r2-q1',
          question: 'くつうりばは どこですか。(Quầy bán giày ở đâu?)',
          options: ['１かい', '２かい', 'ちか１かい', '４かい'],
          answerIndex: 2,
          explanation: 'Nhân viên trả lời: "くつの うりばは ちか１かいで ございます。"',
        },
        {
          id: 'n5-l3-r2-q2',
          question: 'ネクタイの うりばは なんかいですか。(Quầy cà vạt ở tầng mấy?)',
          options: ['ちか１かい', '２かい', '３かい', '４かい'],
          answerIndex: 3,
          explanation: 'Nhân viên trả lời: "ネクタイは ４かいに ございます。"',
        },
        {
          id: 'n5-l3-r2-q3',
          question: 'ネクタイは いくらですか。(Chiếc cà vạt giá bao nhiêu?)',
          options: ['２０００えん', '３０００えん', '４０００えん', '５０００えん'],
          answerIndex: 1,
          explanation: 'Nhân viên trả lời: "それは ３０００えんです。"',
        },
        {
          id: 'n5-l3-r2-q4',
          question: 'Từ "ちか" nghĩa là gì?',
          options: ['Tầng thượng', 'Tầng lửng', 'Tầng hầm (dưới mặt đất)', 'Hành lang'],
          answerIndex: 2,
          explanation: '"ちか" (地下) có nghĩa là dưới lòng đất / tầng hầm.',
        },
        {
          id: 'n5-l3-r2-q5',
          question: 'Từ dùng để hỏi giá tiền trong tiếng Nhật là gì?',
          options: ['どこ', 'だれ', 'なんさい', 'いくら'],
          answerIndex: 3,
          explanation: '"いくら" dùng để hỏi giá tiền (Bao nhiêu tiền?).',
        },
        {
          id: 'n5-l3-r2-q6',
          question: 'Lời chào của nhân viên bán hàng khi khách bước vào cửa hàng là gì?',
          options: ['さようなら', 'いらっしゃいませ', 'おやすみなさい', 'いただきます'],
          answerIndex: 1,
          explanation: '"いらっしゃいませ" là câu kính cẩn chào đón khách hàng bước vào tiệm.',
        },
      ],
    },
    {
      id: 'n5-l3-r3',
      title: 'Bài đọc 3: Đến thăm trụ sở công ty IMC (IMCの会社訪問)',
      summary: 'Khách hàng đến liên hệ công việc tại quầy tiếp tân và phòng họp của công ty.',
      passageJp: `すみません、IMCの じむしょは ここですか。
はい、そうです。こちらは うけつけです。
たなかさんの へやは どこですか。
たなかさんの へやは ５かいの だいいち かいぎしつです。
エレベーターは あちらに ございます。
どうも ありがとうございます。`,
      passageVi: `Xin lỗi, văn phòng công ty IMC có phải ở đây không ạ?
Vâng, đúng rồi ạ. Đây là quầy lễ tân tiếp đón.
Phòng của anh Tanaka ở đâu vậy ạ?
Phòng của anh Tanaka là phòng họp số 1 ở tầng 5.
Thang máy ở phía đằng kia ạ.
Xin cảm ơn rất nhiều.`,
      vocabFocus: ['じむしょ (văn phòng)', 'かいぎしつ (phòng họp)', 'エレベーター (thang máy)', 'あちら (phía đằng kia)'],
      grammarFocus: ['あちら/こちら/そちら (hướng lịch sự)', '〜かい (tầng)'],
      questions: [
        {
          id: 'n5-l3-r3-q1',
          question: 'Người khách đang đứng ở khu vực nào của công ty?',
          options: ['Phòng họp', 'Quầy lễ tân (うけつけ)', 'Căng tin', 'Bãi đỗ xe'],
          answerIndex: 1,
          explanation: 'Nhân viên nói: "こちらは うけつけです。" (Đây là quầy tiếp tân).',
        },
        {
          id: 'n5-l3-r3-q2',
          question: 'たなかさんの へやは なんかいですか。(Phòng của Tanaka ở tầng mấy?)',
          options: ['３かい', '４かい', '５かい', '６かい'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "たなかさんの へやは ５かいの だいいち かいぎしつです。"',
        },
        {
          id: 'n5-l3-r3-q3',
          question: 'たなかさんは どこに いますか。(Cụ thể anh Tanaka đang ở phòng nào?)',
          options: ['だいいち かいぎしつ (Phòng họp 1)', 'だいに かいぎしつ', 'しょくどう', 'うけつけ'],
          answerIndex: 0,
          explanation: 'Nhân viên chỉ rõ: "５かいの だいいち かいぎしつです。"',
        },
        {
          id: 'n5-l3-r3-q4',
          question: 'Phương tiện để lên tầng 5 được chỉ dẫn trong bài là gì?',
          options: ['かいだん (Cầu thang bộ)', 'エレベーター (Thang máy)', 'エスカレーター (Thang cuốn)', 'タクシー'],
          answerIndex: 1,
          explanation: 'Nhân viên chỉ: "エレベーターは あちらに ございます。"',
        },
        {
          id: 'n5-l3-r3-q5',
          question: 'Từ "あちら" là cách nói lịch sự của từ nào?',
          options: ['ここ', 'そこ', 'あそこ', 'どこ'],
          answerIndex: 2,
          explanation: '"あちら" là dạng lịch sự, trang trọng của "あそこ" (đằng kia).',
        },
        {
          id: 'n5-l3-r3-q6',
          question: 'Câu đáp lễ cảm ơn lịch sự kết thúc đoạn văn là gì?',
          options: ['ごめんなさい', 'どうも ありがとうございます', 'はじめまして', 'おねがいします'],
          answerIndex: 1,
          explanation: 'Người khách nói: "どうも ありがとうございます。" (Xin cảm ơn rất nhiều).',
        },
      ],
    },
    {
      id: 'n5-l3-r4',
      title: 'Bài đọc 4: Hỏi đường tới bưu điện và ngân hàng (郵便局はどこですか)',
      summary: 'Hỏi thăm vị trí bưu điện và ngân hàng gần ga xe lửa.',
      passageJp: `すみません。ゆうびんきょくは どこですか。
ゆうびんきょくは えきの まえです。あそこに あります。
ぎんこうも えきの まえですか。
いいえ、ぎんこうは えきの まえじゃありません。デパートの となりです。
でんわは えきの なかに ありますよ。
わかりました。ありがとうございます。`,
      passageVi: `Xin lỗi. Bưu điện ở đâu vậy ạ?
Bưu điện ở phía trước nhà ga. Nó ở đằng kia kìa.
Ngân hàng cũng ở trước nhà ga phải không ạ?
Không, ngân hàng không ở trước nhà ga. Nó ở bên cạnh trung tâm thương mại.
Điện thoại công cộng thì có ở bên trong nhà ga đấy nhé.
Tôi hiểu rồi. Xin cảm ơn bạn.`,
      vocabFocus: ['ゆうびんきょく (bưu điện)', 'ぎんこう (ngân hàng)', 'えき (nhà ga)', 'まえ (phía trước)', 'となり (bên cạnh)'],
      grammarFocus: ['〜は〜です', '〜じゃありません', '〜の〜 (vị trí tương đối)'],
      questions: [
        {
          id: 'n5-l3-r4-q1',
          question: 'ゆうびんきょくは どこに ありますか。(Bưu điện ở đâu?)',
          options: ['デパートの なか', 'えきの まえ', 'ぎんこうの となり', 'だいがくの なか'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "ゆうびんきょくは えきの まえです。あそこに あります。"',
        },
        {
          id: 'n5-l3-r4-q2',
          question: 'ぎんこうは えきの まえですか。(Ngân hàng có ở trước nhà ga không?)',
          options: ['はい、えきの まえです', 'いいえ、えきの まえじゃありません', 'はい、えきの なかです', 'いいえ、ゆうびんきょくの なかです'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "いいえ、ぎんこうは えきの まえじゃありません。デパートの となりです。"',
        },
        {
          id: 'n5-l3-r4-q3',
          question: 'ぎんこうは どこに ありますか。(Vậy ngân hàng nằm ở đâu?)',
          options: ['えきの まえ', 'デパートの となり (Bên cạnh bách hóa)', 'ゆうびんきょくの なか', 'がっこうの まえ'],
          answerIndex: 1,
          explanation: 'Người chỉ đường nói: "デパートの となりです。"',
        },
        {
          id: 'n5-l3-r4-q4',
          question: 'でんわは どこに ありますか。(Điện thoại ở đâu?)',
          options: ['えきの なか', 'ぎんこうの なか', 'デパートの うえ', 'ゆうびんきょくの まえ'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "でんわは えきの なかに ありますよ。"',
        },
        {
          id: 'n5-l3-r4-q5',
          question: 'Từ "えき" có nghĩa là gì?',
          options: ['Sân bay', 'Nhà ga xe điện / xe lửa', 'Bến xe buýt', 'Cảng biển'],
          answerIndex: 1,
          explanation: '"えき" (駅) có nghĩa là nhà ga xe lửa / ga tàu điện ngầm.',
        },
        {
          id: 'n5-l3-r4-q6',
          question: 'Khi hiểu được thông tin sau khi hỏi đường, người nói đáp lại bằng câu nào?',
          options: ['しりません', 'わかりました', 'おねがいします', 'ただいま'],
          answerIndex: 1,
          explanation: '"わかりました" có nghĩa là "Tôi đã hiểu rồi / Tôi rõ rồi".',
        },
      ],
    },
    {
      id: 'n5-l3-r5',
      title: 'Bài đọc 5: Căn phòng trọ mới thuê (新しい部屋)',
      summary: 'Khám phá căn phòng trọ nhỏ xinh tiện nghi gần trường học.',
      passageJp: `ここは わたしの あたらしい へやです。
アパートの ３かいです。
かいだんは あちらです。エレベーターは ありません。
へやの なかに つくえと ベッドと でんわが あります。
トイレと おふろも へやの なかに あります。とても べんりです。`,
      passageVi: `Đây là căn phòng mới của tôi.
Nó ở tầng 3 của tòa chung cư.
Cầu thang bộ ở đằng kia. Tòa nhà không có thang máy.
Trong phòng có bàn học, giường ngủ và điện thoại.
Nhà vệ sinh và bồn tắm cũng ở ngay bên trong phòng. Rất là tiện lợi.`,
      vocabFocus: ['へや (căn phòng)', 'アパート (chung cư, phòng trọ)', 'かいだん (cầu thang bộ)', 'べんり (tiện lợi)'],
      grammarFocus: ['〜は〜にあります', '〜と〜 (liệt kê danh từ)', '〜はありません (không có)'],
      questions: [
        {
          id: 'n5-l3-r5-q1',
          question: 'へやは なんかいに ありますか。(Căn phòng ở tầng mấy?)',
          options: ['１かい', '２かい', '３かい', '４かい'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "アパートの ３かいです。"',
        },
        {
          id: 'n5-l3-r5-q2',
          question: 'アパートに エレベーターが ありますか。(Tòa nhà có thang máy không?)',
          options: ['はい、あります', 'いいえ、ありません', 'はい、２つあります', 'いいえ、かいだんも ありません'],
          answerIndex: 1,
          explanation: 'Đoạn văn viết rõ: "エレベーターは ありません。" (Không có thang máy).',
        },
        {
          id: 'n5-l3-r5-q3',
          question: 'へやの なかに なにが ありますか。(Trong phòng có những đồ vật gì?)',
          options: ['つくえ、ベッド、でんわ', 'テレビ、くるま、じしょ', 'ほん、えんぴつ、かさ', 'しょくどう、じむしょ'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "へやの なかに つくえと ベッドと でんわが あります。"',
        },
        {
          id: 'n5-l3-r5-q4',
          question: 'トイレと おふろは どこに ありますか。(Nhà vệ sinh và bồn tắm ở đâu?)',
          options: ['１かいの そと', 'へやの なか', 'アパートの となり', '３かいの かいだんの まえ'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "トイレと おふろも へやの なかに あります。"',
        },
        {
          id: 'n5-l3-r5-q5',
          question: 'Căn phòng trọ này được người thuê nhận xét thế nào?',
          options: ['Rất đắt đỏ', 'Rất tiện lợi (とても べんり)', 'Rất bừa bộn', 'Rất xa'],
          answerIndex: 1,
          explanation: 'Câu cuối bài: "とても べんりです。" (Rất tiện lợi).',
        },
        {
          id: 'n5-l3-r5-q6',
          question: 'Từ "かいだん" nghĩa là gì?',
          options: ['Thang máy', 'Cầu thang bộ', 'Hành lang', 'Cửa sổ'],
          answerIndex: 1,
          explanation: '"かいだん" (階段) nghĩa là cầu thang bộ.',
        },
      ],
    },
  ],

  // ================= N5 BÀI 4 =================
  'n5-l4': [
    {
      id: 'n5-l4-r1',
      title: 'Bài đọc 1: Một ngày bận rộn của sinh viên (学生の一日)',
      summary: 'Lịch trình sinh hoạt hàng ngày từ sáng đến tối của một du học sinh.',
      passageJp: `わたしは まいにち あさ ６じはんに おきます。
あさごはんを たべて、８じに だいがくへ いきます。
じゅぎょうは ９じから ごご ４じまでです。
ばん ７じから １０じまで としょかんで べんきょうします。
よる １１じに ねます。`,
      passageVi: `Mỗi ngày tôi thức dậy vào lúc 6 giờ rưỡi sáng.
Tôi ăn sáng xong và đến trường đại học lúc 8 giờ.
Tiết học bắt đầu từ 9 giờ sáng đến 4 giờ chiều.
Từ 7 giờ tối đến 10 giờ tối tôi học bài ở thư viện.
Tôi đi ngủ lúc 11 giờ đêm.`,
      vocabFocus: ['おきます (thức dậy)', 'ねます (đi ngủ)', 'べんきょうします (học)', 'あさ (buổi sáng)', 'ばん (buổi tối)'],
      grammarFocus: ['〜じ〜ふん (giờ phút)', '〜から〜まで (từ... đến...)', '〜におきます (trợ từ に chỉ thời điểm)'],
      questions: [
        {
          id: 'n5-l4-r1-q1',
          question: 'なんじに おきますか。(Người nói thức dậy lúc mấy giờ?)',
          options: ['６じ', '６じはん', '７じ', '８じ'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "わたしは まいにち あさ ６じはんに おきます。"',
        },
        {
          id: 'n5-l4-r1-q2',
          question: 'じゅぎょうは なんじから なんじまでですか。(Giờ học từ mấy giờ đến mấy giờ?)',
          options: ['８じから ４じまで', '９じから ４じまで', '９じから ５じまで', '８じはんから ３じまで'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "じゅぎょうは ９じから ごご ４じまでです。"',
        },
        {
          id: 'n5-l4-r1-q3',
          question: 'どこで べんきょうしますか。(Người nói học bài ở đâu vào buổi tối?)',
          options: ['へや', 'しょくどう', 'としょかん', 'きょうしつ'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "ばん ７じから １０じまで としょかんで べんきょうします。"',
        },
        {
          id: 'n5-l4-r1-q4',
          question: 'なんじに ねますか。(Người nói đi ngủ lúc mấy giờ?)',
          options: ['１０じ', '１０じはん', '１１じ', '１２じ'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "よる １１じに ねます。"',
        },
        {
          id: 'n5-l4-r1-q5',
          question: 'Người nói học ở thư viện trong thời gian bao lâu?',
          options: ['1 tiếng', '2 tiếng', '3 tiếng (từ 7h đến 10h)', '4 tiếng'],
          answerIndex: 2,
          explanation: 'Từ 7h tối (19h) đến 10h tối (22h) là đúng 3 tiếng đồng hồ.',
        },
        {
          id: 'n5-l4-r1-q6',
          question: 'Từ "はん" khi nói về thời gian biểu thị bao nhiêu phút?',
          options: ['15 phút', '30 phút (nửa tiếng)', '45 phút', '60 phút'],
          answerIndex: 1,
          explanation: '"はん" (半) biểu thị 30 phút (ví dụ: 6じはん = 6 giờ 30 phút).',
        },
      ],
    },
    {
      id: 'n5-l4-r2',
      title: 'Bài đọc 2: Giờ làm việc của ngân hàng và bưu điện (銀行と郵便局)',
      summary: 'Tìm hiểu khung giờ mở cửa và ngày nghỉ của các cơ quan công cộng.',
      passageJp: `ぎんこうの やすみは どようびと にちようびです。
ぎんこうは ごぜん ９じから ごご ３じまで はたらきます。
ゆうびんきょくは ごぜん ９じから ごご ５じまでです。
どようびも あさ ９じから １２じまで あいています。
いまは なんじですか。いまは ２じはんです。`,
      passageVi: `Ngày nghỉ của ngân hàng là thứ Bảy và Chủ Nhật.
Ngân hàng làm việc từ 9 giờ sáng đến 3 giờ chiều.
Bưu điện mở cửa từ 9 giờ sáng đến 5 giờ chiều.
Thứ Bảy bưu điện cũng mở cửa từ 9 giờ sáng đến 12 giờ trưa.
Bây giờ là mấy giờ rồi? Bây giờ là 2 giờ rưỡi chiều.`,
      vocabFocus: ['はたらきます (làm việc)', 'やすみ (ngày nghỉ)', 'ごぜん (buổi sáng AM)', 'ごご (buổi chiều PM)'],
      grammarFocus: ['〜から〜まで (từ mấy giờ đến mấy giờ)', 'いま なんじですか (bây giờ mấy giờ)'],
      questions: [
        {
          id: 'n5-l4-r2-q1',
          question: 'ぎんこうの やすみは なんようびですか。(Ngân hàng nghỉ vào thứ mấy?)',
          options: ['げつようびと かようび', 'きんようび', 'どようびと にちようび', 'すいようび'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "ぎんこうの やすみは どようびと にちようびです。"',
        },
        {
          id: 'n5-l4-r2-q2',
          question: 'ぎんこうは なんじまでですか。(Ngân hàng làm việc đến mấy giờ chiều?)',
          options: ['ごご ３じまで', 'ごご ４じまで', 'ごご ５じまで', 'ごご ６じまで'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "ぎんこうは ごぜん ９じから ごご ３じまで はたらきます。"',
        },
        {
          id: 'n5-l4-r2-q3',
          question: 'ゆうびんきょくは なんじまでですか。(Bưu điện mở đến mấy giờ chiều ngày thường?)',
          options: ['ごご ３じまで', 'ごご ４じまで', 'ごご ５じまで', 'ごご ７じまで'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "ゆうびんきょくは ごぜん ９じから ごご ５じまでです。"',
        },
        {
          id: 'n5-l4-r2-q4',
          question: 'どようびに ゆうびんきょくは あいていますか。(Thứ Bảy bưu điện có mở cửa không?)',
          options: [
            'いいえ、やすみです',
            'はい、あさ ９じから １２じまで あいています',
            'はい、５じまで あいています',
            'いいえ、にちようびだけです',
          ],
          answerIndex: 1,
          explanation: 'Đoạn văn: "どようびも あさ ９じから １２じまで あいています。"',
        },
        {
          id: 'n5-l4-r2-q5',
          question: 'いま なんじですか。(Hiện tại trong bài là mấy giờ?)',
          options: ['１じ', '２じ', '２じはん', '３じはん'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "いまは ２じはんです。"',
        },
        {
          id: 'n5-l4-r2-q6',
          question: 'Vào thời điểm 2 giờ rưỡi chiều ngày thường, ngân hàng có còn mở cửa không?',
          options: [
            'Còn mở cửa, vì ngân hàng đóng cửa lúc 3 giờ chiều.',
            'Đã đóng cửa từ sáng.',
            'Ngân hàng không mở cửa ngày thường.',
            'Bưu điện đóng trước ngân hàng.',
          ],
          answerIndex: 0,
          explanation: 'Ngân hàng đóng cửa lúc 3h chiều (ごご ３じ), nên lúc 2h30 chiều vẫn còn mở cửa.',
        },
      ],
    },
    {
      id: 'n5-l4-r3',
      title: 'Bài đọc 3: Lịch trình tuần làm việc của anh Tanaka (田中さんの週間)',
      summary: 'Theo dõi ca làm việc, thời gian trực và ngày nghỉ của anh Tanaka.',
      passageJp: `たなかさんは さくらびょういんの いしゃです。
げつようびから きんようびまで あさ ８じから ごご ６じまで はたらきます。
すいようびの よるは とうちょくです。よるも はたらきます。
もくようびの ごぜんは やすみです。
にちようびは いちにちじゅう うちで やすみます。`,
      passageVi: `Anh Tanaka là bác sĩ của bệnh viện Sakura.
Từ thứ Hai đến thứ Sáu anh làm việc từ 8 giờ sáng đến 6 giờ chiều.
Tối thứ Tư anh phải trực đêm. Buổi tối cũng phải làm việc.
Sáng thứ Năm anh được nghỉ bù.
Chủ Nhật anh nghỉ ngơi ở nhà cả ngày.`,
      vocabFocus: ['とうちょく (trực đêm)', 'いちにちじゅう (suốt cả ngày)', 'うち (nhà mình)'],
      grammarFocus: ['〜ようび (các thứ trong tuần)', '〜から〜まで', '〜に (thời điểm)'],
      questions: [
        {
          id: 'n5-l4-r3-q1',
          question: 'たなかさんは なんの しごとを していますか。(Tanaka làm nghề gì?)',
          options: ['かいしゃいん', 'いしゃ', 'がくせい', 'ぎんこういん'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "たなかさんは さくらびょういんの いしゃです。"',
        },
        {
          id: 'n5-l4-r3-q2',
          question: 'へいじつは なんじから なんじまで はたらきますか。(Ngày thường làm từ mấy giờ đến mấy giờ?)',
          options: ['８じから ５じまで', '８じから ６じまで', '９じから ５じまで', '９じから ６じまで'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "げつようびから きんようびまで あさ ８じから ごご ６じまで はたらきます。"',
        },
        {
          id: 'n5-l4-r3-q3',
          question: 'なんようびの よるに はたらきますか。(Đêm thứ mấy anh phải trực làm việc?)',
          options: ['かようび', 'すいようび', 'もくようび', 'きんようび'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "すいようびの よるは とうちょくです。よるも はたらきます。"',
        },
        {
          id: 'n5-l4-r3-q4',
          question: 'もくようびの ごぜんは なにを しますか。(Sáng thứ Năm anh làm gì?)',
          options: ['はたらきます', 'やすみます', 'べんきょうします', 'りょこうします'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "もくようびの ごぜんは やすみです。"',
        },
        {
          id: 'n5-l4-r3-q5',
          question: 'にちようびは どこで やすみますか。(Chủ Nhật anh nghỉ ở đâu?)',
          options: ['びょういん', 'うち (Ở nhà)', 'だいがく', 'ホテル'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "にちようびは いちにちじゅう うちで やすみます。"',
        },
        {
          id: 'n5-l4-r3-q6',
          question: 'Thứ Bảy có được nhắc đến như một ngày nghỉ hoàn toàn của anh Tanaka không?',
          options: [
            'Chỉ có Chủ Nhật được nêu rõ là nghỉ cả ngày ở nhà (いちにちじゅう うちで やすみます).',
            'Thứ Bảy anh trực cả ngày.',
            'Thứ Bảy anh dạy học.',
            'Thứ Bảy anh đi bệnh viện khác.',
          ],
          answerIndex: 0,
          explanation: 'Bài viết nêu rõ: "にちようびは いちにちじゅう うちで やすみます."',
        },
      ],
    },
    {
      id: 'n5-l4-r4',
      title: 'Bài đọc 4: Buổi ôn thi tiếng Nhật (日本語の試験勉強)',
      summary: 'Kế hoạch học tập chăm chỉ trước ngày thi kiểm tra năng lực tiếng Nhật.',
      passageJp: `あしたは にほんごの テストです。
きょうは あさから ばんまで たくさん べんきょうします。
ごぜんは かんじと ことばを おぼえます。
ごごは ぶんぽうと ちょうかいを れんしゅうします。
テストは あしたの あさ ９じはんに はじまります。
こんばんは はやく ねます。`,
      passageVi: `Ngày mai có bài kiểm tra tiếng Nhật.
Hôm nay từ sáng đến tối tôi học rất nhiều.
Buổi sáng tôi ghi nhớ chữ Hán và từ vựng.
Buổi chiều tôi luyện tập ngữ pháp và phần nghe hiểu.
Bài thi ngày mai sẽ bắt đầu vào lúc 9 giờ rưỡi sáng.
Tối nay tôi sẽ đi ngủ sớm.`,
      vocabFocus: ['きょう (hôm nay)', 'あした (ngày mai)', 'おぼえます (ghi nhớ)', 'はじまります (bắt đầu)', 'はやく (sớm)'],
      grammarFocus: ['〜から〜まで', '〜じ〜ふんに (thời gian bắt đầu)'],
      questions: [
        {
          id: 'n5-l4-r4-q1',
          question: 'あした なにが ありますか。(Ngày mai có sự kiện gì?)',
          options: ['にほんごの テスト (Kỳ thi tiếng Nhật)', 'スポーツの たいかい', 'かいしゃの めんせつ', 'りょこう'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "あしたは にほんごの テストです。"',
        },
        {
          id: 'n5-l4-r4-q2',
          question: 'ごぜんは なにを べんきょうしますか。(Buổi sáng người học ôn phần gì?)',
          options: ['ぶんぽう', 'かんじと ことば (Hán tự và từ vựng)', 'ちょうかい', 'どっかい'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "ごぜんは かんじと ことばを おぼえます。"',
        },
        {
          id: 'n5-l4-r4-q3',
          question: 'ごごは なにを れんしゅうしますか。(Buổi chiều luyện tập nội dung gì?)',
          options: ['かんじ', 'ぶんぽうと ちょうかい (Ngữ pháp và nghe hiểu)', 'かいわ', 'さくぶん'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "ごごは ぶんぽうと ちょうかいを れんしゅうします。"',
        },
        {
          id: 'n5-l4-r4-q4',
          question: 'テストは あしたの なんじに はじまりますか。(Bài thi ngày mai bắt đầu lúc mấy giờ?)',
          options: ['８じ', '９じ', '９じはん', '１０じ'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "テストは あしたの あさ ９じはんに はじまります。"',
        },
        {
          id: 'n5-l4-r4-q5',
          question: 'こんばん どうしますか。(Tối nay người đó định làm gì?)',
          options: ['おそくまで おきています', 'はやく ねます (Đi ngủ sớm)', 'えいがを みます', 'ともだちと あそびます'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "こんばんは はやく ねます。"',
        },
        {
          id: 'n5-l4-r4-q6',
          question: 'Từ "あした" nghĩa là ngày nào?',
          options: ['Hôm qua', 'Hôm nay', 'Ngày mai', 'Ngày kia'],
          answerIndex: 2,
          explanation: '"あした" (明日) nghĩa là ngày mai.',
        },
      ],
    },
    {
      id: 'n5-l4-r5',
      title: 'Bài đọc 5: Ngày nghỉ cuối tuần của gia đình (家族の週末)',
      summary: 'Kỳ nghỉ cuối tuần thư giãn của gia đình bạn bè vào ngày thứ Bảy.',
      passageJp: `きょうは どようびです。しごとは やすみです。
あさ ８じに おきます。いつもより おそいです。
あさごはんの あとで、こうえんを さんぽします。
ひる １２じに かぞくと レストランで ひるごはんを たべます。
ごごは えいがを みます。とても たのしい いちにちです。`,
      passageVi: `Hôm nay là thứ Bảy. Tôi được nghỉ làm việc.
Tôi thức dậy lúc 8 giờ sáng, muộn hơn thường lệ một chút.
Sau khi ăn sáng, tôi đi dạo ở công viên.
Lúc 12 giờ trưa, tôi ăn cơm trưa cùng gia đình tại nhà hàng.
Buổi chiều tôi xem phim. Thật là một ngày rất vui vẻ.`,
      vocabFocus: ['どようび (thứ Bảy)', 'こうえん (công viên)', 'かぞく (gia đình)', 'たのしい (vui vẻ)'],
      grammarFocus: ['〜じに (vào lúc mấy giờ)', '〜のあとで (sau khi)'],
      questions: [
        {
          id: 'n5-l4-r5-q1',
          question: 'きょうは なんようびですか。(Hôm nay là thứ mấy?)',
          options: ['きんようび', 'どようび', 'にちようび', 'げつようび'],
          answerIndex: 1,
          explanation: 'Đoạn văn mở đầu: "きょうは どようびです。"',
        },
        {
          id: 'n5-l4-r5-q2',
          question: 'あさ なんじに おきますか。(Buổi sáng thức dậy lúc mấy giờ?)',
          options: ['６じ', '７じ', '８じ', '９じ'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "あさ ８じに おきます。"',
        },
        {
          id: 'n5-l4-r5-q3',
          question: 'あさごはんの あとで、なにを しますか。(Sau khi ăn sáng người đó làm gì?)',
          options: ['べんきょうします', 'こうえんを さんぽします (Đi dạo công viên)', 'しごとを します', 'へやを そうじします'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "あさごはんの あとで、こうえんを さんぽします。"',
        },
        {
          id: 'n5-l4-r5-q4',
          question: 'なんじに ひるごはんを たべますか。(Mấy giờ ăn cơm trưa?)',
          options: ['１１じ', '１１じはん', '１２じ', '１じ'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "ひる １２じに かぞくと レストランで ひるごはんを たべます。"',
        },
        {
          id: 'n5-l4-r5-q5',
          question: 'だれと ひるごはんを たべますか。(Ăn cơm trưa cùng với ai?)',
          options: ['ひとり', 'ともだち', 'かぞく (Gia đình)', 'せんせい'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "かぞくと レストランで ひるごはんを たべます。"',
        },
        {
          id: 'n5-l4-r5-q6',
          question: 'ごご なにを しますか。(Buổi chiều người này làm gì?)',
          options: ['えいがを みます (Xem phim)', 'ほんを よみます', 'しゅくだいを します', 'かいものを します'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "ごごは えいがを みます。とても たのしい いちにちです。"',
        },
      ],
    },
  ],

  // ================= N5 BÀI 5 =================
  'n5-l5': [
    {
      id: 'n5-l5-r1',
      title: 'Bài đọc 1: Chuyến đi Kyoto bằng tàu Shinkansen (新幹線で京都へ)',
      summary: 'Chuyến đi tham quan cố đô Kyoto xinh đẹp vào dịp cuối tuần bằng tàu siêu tốc.',
      passageJp: `わたしは せんしゅうの どようびに きょうとへ いきました。
かぞくと いっしょに いきました。
とうきょうえきから きょうとまで しんかんせんで いきました。
しんかんせんは とても はやいです。２じかんはん かかりました。
きょうとで きれいな おてらを みました。`,
      passageVi: `Thứ Bảy tuần trước tôi đã đi Kyoto.
Tôi đi cùng với gia đình.
Từ ga Tokyo đến Kyoto tôi đi bằng tàu siêu tốc Shinkansen.
Tàu Shinkansen chạy rất nhanh. Mất khoảng 2 tiếng rưỡi.
Ở Kyoto tôi đã ngắm nhìn những ngôi chùa rất đẹp.`,
      vocabFocus: ['いきました (đã đi)', 'しんかんせん (tàu shinkansen)', 'かぞく (gia đình)', 'おてら (chùa chiền)'],
      grammarFocus: ['〜へ行きます (đi đến đâu)', '〜で行きます (đi bằng phương tiện gì)', '〜と (cùng với ai)'],
      questions: [
        {
          id: 'n5-l5-r1-q1',
          question: 'いつ きょうとへ いきましたか。(Người kể đã đi Kyoto khi nào?)',
          options: ['こんしゅうの にちようび', 'せんしゅうの どようび', 'きのう', 'きょねん'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "わたしは せんしゅうの どようびに きょうとへ いきました。"',
        },
        {
          id: 'n5-l5-r1-q2',
          question: 'だれと いきましたか。(Đi cùng với ai?)',
          options: ['ひとりで', 'ともだちと', 'かぞくと いっしょに', 'せんせいと'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "かぞくと いっしょに いきました。"',
        },
        {
          id: 'n5-l5-r1-q3',
          question: 'なんで きょうとまで いきましたか。(Đi đến Kyoto bằng phương tiện gì?)',
          options: ['バス', 'ひこうき', 'しんかんせん', 'ふね'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "とうきょうえきから きょうとまで しんかんせんで いきました。"',
        },
        {
          id: 'n5-l5-r1-q4',
          question: 'とうきょうから きょうとまで どのくらい かかりましたか。(Mất bao lâu thời gian?)',
          options: ['１じかん', '２じかん', '２じかんはん (2 tiếng rưỡi)', '３じかん'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "２じかんはん かかりました。"',
        },
        {
          id: 'n5-l5-r1-q5',
          question: 'きょうとで なにを みましたか。(Ở Kyoto đã ngắm nhìn cái gì?)',
          options: ['うみ', 'きれいな おてら (Chùa đẹp)', 'やま', 'ビル'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "きょうとで きれいな おてらを みました。"',
        },
        {
          id: 'n5-l5-r1-q6',
          question: 'Trợ từ "で" trong câu "しんかんせんで いきました" mang ý nghĩa gì?',
          options: [
            'Chỉ địa điểm diễn ra hành động',
            'Chỉ phương tiện di chuyển',
            'Chỉ thời gian',
            'Chỉ đối tượng cùng thực hiện',
          ],
          answerIndex: 1,
          explanation: 'Trợ từ "で" đi sau danh từ phương tiện giao thông chỉ cách thức/phương tiện đi lại.',
        },
      ],
    },
    {
      id: 'n5-l5-r2',
      title: 'Bài đọc 2: Phương tiện đến trường đại học mỗi ngày (毎日の通学)',
      summary: 'So sánh các phương tiện di chuyển đến trường của các sinh viên.',
      passageJp: `わたしは まいにち じてんしゃで だいがくへ いきます。
うちから だいがくまで １５ふんです。
ともだちの アンさんは ちかてつで きます。えきから あるいて ５ふんです。
カルロスさんは うちが ちかいですから、あるいて きます。
みんな じかんどおりに きょうしつへ きます。`,
      passageVi: `Mỗi ngày tôi đạp xe đạp đến trường đại học.
Từ nhà tôi đến trường mất 15 phút.
Bạn An của tôi thì đến bằng tàu điện ngầm. Từ ga đi bộ mất 5 phút.
Carlos vì nhà ở gần nên đi bộ đến trường.
Tất cả mọi người đều đến lớp học đúng giờ.`,
      vocabFocus: ['じてんしゃ (xe đạp)', 'ちかてつ (tàu điện ngầm)', 'あるいて (đi bộ)', 'ちかい (gần)'],
      grammarFocus: ['〜でいきます', '〜から〜まで', 'あるいて (không dùng trợ từ で)'],
      questions: [
        {
          id: 'n5-l5-r2-q1',
          question: 'わたしは なんで だいがくへ いきますか。(Người nói đến trường bằng gì?)',
          options: ['バス', 'じてんしゃ (Xe đạp)', 'ちかてつ', 'あるいて'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "わたしは まいにち じてんしゃで だいがくへ いきます。"',
        },
        {
          id: 'n5-l5-r2-q2',
          question: 'うちから だいがくまで なんぷん かかりますか。(Từ nhà đến trường mất mấy phút?)',
          options: ['１０ぷん', '１５ふん', '２０ぷん', '３０ぷん'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "うちから だいがくまで １５ふんです。"',
        },
        {
          id: 'n5-l5-r2-q3',
          question: 'アンさんは なんで きますか。(An đến trường bằng gì?)',
          options: ['じてんしゃ', 'タクシー', 'ちかてつ (Tàu điện ngầm)', 'ひこうき'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "ともだちの アンさんは ちかてつで きます。"',
        },
        {
          id: 'n5-l5-r2-q4',
          question: 'カルロスさんは なんで きますか。(Carlos đến trường bằng gì?)',
          options: ['あるいて (Đi bộ)', 'じてんしゃで', 'バスで', 'でんしゃで'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "カルロスさんは うちが ちかいですから、あるいて きます。"',
        },
        {
          id: 'n5-l5-r2-q5',
          question: 'Tại sao Carlos lại đi bộ đến trường?',
          options: [
            'Vì không có tiền',
            'Vì nhà bạn ấy ở gần (うちが ちかいですから)',
            'Vì bạn ấy thích thể dục',
            'Vì xe đạp bị hỏng',
          ],
          answerIndex: 1,
          explanation: 'Lý do nêu rõ: "うちが ちかいですから" (Vì nhà ở gần).',
        },
        {
          id: 'n5-l5-r2-q6',
          question: 'Đi bộ "あるいて" có cần đi kèm trợ từ "で" phía sau không?',
          options: [
            'Có, phải nói là あるいてで',
            'Không, あるいて là dạng phó từ thể cách đi bộ nên không thêm trợ từ で',
            'Phải dùng trợ từ に',
            'Phải dùng trợ từ を',
          ],
          answerIndex: 1,
          explanation: 'Trong tiếng Nhật, "あるいて" (đi bộ) là dạng liên từ/phó từ nên dùng độc lập, không thêm "で".',
        },
      ],
    },
    {
      id: 'n5-l5-r3',
      title: 'Bài đọc 3: Đi siêu thị mua sắm cùng bạn cùng phòng (スーパーへの買い物)',
      summary: 'Hai bạn rủ nhau đi xe buýt đến siêu thị lớn để mua đồ ăn cho tuần mới.',
      passageJp: `きのうの ごご、わたしは ルームメイトと スーパーへ いきました。
えきまえの バスていから １０ばんの バスで いきました。
バスは ２２０えんでした。
スーパーで やさいと くだものと おにくを かいました。
かえりは タクシーで うちへ かえりました。`,
      passageVi: `Chiều hôm qua, tôi đã đi siêu thị cùng với người bạn cùng phòng.
Chúng tôi đi bằng xe buýt số 10 từ trạm xe buýt trước nhà ga.
Tiền xe buýt là 220 yên.
Ở siêu thị chúng tôi đã mua rau, hoa quả và thịt.
Lúc về, chúng tôi đi taxi về nhà.`,
      vocabFocus: ['スーパー (siêu thị)', 'バス (xe buýt)', 'タクシー (taxi)', 'かえります (trở về)'],
      grammarFocus: ['〜と (cùng với)', '〜で (bằng phương tiện)', '〜へかえりました (về nhà)'],
      questions: [
        {
          id: 'n5-l5-r3-q1',
          question: 'いつ スーパーへ いきましたか。(Đã đi siêu thị khi nào?)',
          options: ['きょうの あさ', 'きのうの ごご', 'おととい', 'あした'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "きのうの ごご、わたしは ルームメイトと スーパーへ いきました。"',
        },
        {
          id: 'n5-l5-r3-q2',
          question: 'だれと いきましたか。(Đi cùng với ai?)',
          options: ['ひとりで', 'ルームメイトと (Với bạn cùng phòng)', 'かぞくと', 'せんせいと'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "ルームメイトと スーパーへ いきました。"',
        },
        {
          id: 'n5-l5-r3-q3',
          question: 'スーパーへ なんで いきましたか。(Đến siêu thị bằng phương tiện gì?)',
          options: ['１０ばんの バス', 'ちかてつ', 'あるいて', 'じてんしゃ'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "１０ばんの バスで いきました。"',
        },
        {
          id: 'n5-l5-r3-q4',
          question: 'バスは いくらでしたか。(Giá vé xe buýt là bao nhiêu tiền?)',
          options: ['１５０えん', '２００えん', '２２０えん', '３００えん'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "バスは ２２０えんでした。"',
        },
        {
          id: 'n5-l5-r3-q5',
          question: 'かえりは なんで かえりましたか。(Lúc về về nhà bằng phương tiện gì?)',
          options: ['バスで', 'タクシーで', 'じてんしゃで', 'でんしゃで'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "かえりは タクシーで うちへ かえりました。"',
        },
        {
          id: 'n5-l5-r3-q6',
          question: 'Họ đã mua những gì ở siêu thị?',
          options: ['Quần áo và giày', 'Rau, hoa quả và thịt (やさい、くだもの、おにく)', 'Sách vở và bút', 'Thuốc men'],
          answerIndex: 1,
          explanation: 'Đoạn văn nêu rõ: "スーパーで やさいと くだものと おにくを かいました。"',
        },
      ],
    },
    {
      id: 'n5-l5-r4',
      title: 'Bài đọc 4: Chuyến đi công tác Tokyo (東京出張)',
      summary: 'Lịch trình di chuyển bằng máy bay và tàu điện trong chuyến công tác.',
      passageJp: `ミラーさんは らいしゅう とうきょうへ いきます。
おおさかから とうきょうまで ひこうきで いきます。
くうこうまで でんしゃで いきます。
とうきょうで かいしゃの ひとの あいます。
きんようびに おおさかへ かえります。`,
      passageVi: `Tuần sau anh Miller sẽ đi Tokyo.
Từ Osaka đến Tokyo anh ấy sẽ đi bằng máy bay.
Đến sân bay anh ấy đi bằng tàu điện.
Ở Tokyo anh ấy sẽ gặp người của công ty đối tác.
Vào thứ Sáu anh ấy sẽ trở về lại Osaka.`,
      vocabFocus: ['ひこうき (máy bay)', 'くうこう (sân bay)', 'でんしゃ (tàu điện)', 'らいしゅう (tuần sau)'],
      grammarFocus: ['〜へ行きます/来ます/帰ります', '〜から〜まで', '〜に (thời điểm)'],
      questions: [
        {
          id: 'n5-l5-r4-q1',
          question: 'ミラーさんは いつ とうきょうへ いきますか。(Miller đi Tokyo khi nào?)',
          options: ['せんしゅう', 'こんしゅう', 'らいしゅう (Tuần sau)', 'らいねん'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "ミラーさんは らいしゅう とうきょうへ いきます。"',
        },
        {
          id: 'n5-l5-r4-q2',
          question: 'おおさかから とうきょうまで なんで いきますか。(Đi từ Osaka đến Tokyo bằng gì?)',
          options: ['しんかんせん', 'ひこうき (Máy bay)', 'ふね', 'バス'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "おおさかから とうきょうまで ひこうきで いきます。"',
        },
        {
          id: 'n5-l5-r4-q3',
          question: 'くうこうまで なんで いきますか。(Đến sân bay bằng phương tiện gì?)',
          options: ['タクシー', 'バス', 'でんしゃ (Tàu điện)', 'じてんしゃ'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "くうこうまで でんしゃで いきます。"',
        },
        {
          id: 'n5-l5-r4-q4',
          question: 'とうきょうで だれに あいますか。(Ở Tokyo anh ấy gặp ai?)',
          options: ['ともだち', 'かぞく', 'かいしゃの ひと (Người của công ty)', 'せんせい'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "とうきょうで かいしゃの ひとの あいます。"',
        },
        {
          id: 'n5-l5-r4-q5',
          question: 'なんようびに おおさかへ かえりますか。(Anh ấy về Osaka vào thứ mấy?)',
          options: ['すいようび', 'もくようび', 'きんようび (Thứ Sáu)', 'どようび'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "きんようびに おおさかへ かえります。"',
        },
        {
          id: 'n5-l5-r4-q6',
          question: 'Từ "くうこう" nghĩa là gì trong tiếng Việt?',
          options: ['Ga xe lửa', 'Bến cảng', 'Sân bay / Phi trường', 'Bến xe buýt'],
          answerIndex: 2,
          explanation: '"くうこう" (空港) nghĩa là sân bay / phi trường.',
        },
      ],
    },
    {
      id: 'n5-l5-r5',
      title: 'Bài đọc 5: Ngày về nước thăm gia đình (国へ帰る日)',
      summary: 'Tâm trạng háo hức trong ngày về thăm quê hương sau một năm du học xa nhà.',
      passageJp: `わたしは らいげつ ベトナムへ かえります。
ひとりで ひこうきで かえります。
なりたくうこうまで なんだいかい バスと でんしゃを のりかえます。
ハノイで りょうしんが わたしを まっています。
とても たのしみです。`,
      passageVi: `Tháng sau tôi sẽ về nước Việt Nam.
Tôi về một mình bằng máy bay.
Đến sân bay Narita tôi đổi chuyển nhiều chặng xe buýt và tàu điện.
Ở Hà Nội, bố mẹ đang đợi tôi trở về.
Tôi cảm thấy vô cùng mong chờ và hào hứng.`,
      vocabFocus: ['くに (đất nước, quê hương)', 'かえります (về nước)', 'ひとりで (một mình)', 'りょうしん (bố mẹ)'],
      grammarFocus: ['〜へかえります', 'ひとりで (làm một mình không dùng trợ từ で)'],
      questions: [
        {
          id: 'n5-l5-r5-q1',
          question: 'いつ ベトナムへ かえりますか。(Khi nào người này về Việt Nam?)',
          options: ['こんげつ', 'らいげつ (Tháng sau)', 'らいねん', 'あした'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "わたしは らいげつ ベトナムへ かえります。"',
        },
        {
          id: 'n5-l5-r5-q2',
          question: 'だれと かえりますか。(Về nước cùng với ai?)',
          options: ['ともだちと', 'ひとりで (Một mình)', 'かぞくと', 'せんせいと'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "ひとりで ひこうきで かえります。"',
        },
        {
          id: 'n5-l5-r5-q3',
          question: 'なんで かえりますか。(Về bằng phương tiện gì?)',
          options: ['ふね', 'ひこうき (Máy bay)', 'でんしゃ', 'くるま'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "ひこうきで かえります。"',
        },
        {
          id: 'n5-l5-r5-q4',
          question: 'どの くうこうから ひこうきに のりますか。(Lên máy bay từ sân bay nào?)',
          options: ['はねだくうこう', 'なりたくうこう (Sân bay Narita)', 'かんさいくうこう', 'ノイバイくうこう'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "なりたくうこうまで なんだいかい バスと でんしゃを のりかえます。"',
        },
        {
          id: 'n5-l5-r5-q5',
          question: 'ハノイで だれが まっていますか。(Ở Hà Nội ai đang chờ?)',
          options: ['ともだち', 'りょうしん (Bố mẹ)', 'せんせい', 'しゃちょう'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "ハノイで りょうしんが わたしを まっています。"',
        },
        {
          id: 'n5-l5-r5-q6',
          question: 'Cụm từ "ひとりで" có cần thêm trợ từ "で" phía sau nữa không?',
          options: [
            'Có, nói là ひとりでで',
            'Không, ひとりで đã là trạng từ chỉ trạng thái một mình',
            'Phải dùng trợ từ と',
            'Phải dùng trợ từ に',
          ],
          answerIndex: 1,
          explanation: '"ひとりで" (một mình) là phó từ thể cách độc lập, không thêm trợ từ nữa.',
        },
      ],
    },
  ],
}

/**
 * Trình tạo bài đọc tự động thông minh cho các bài chưa có dữ liệu tĩnh.
 * Tạo ra đúng 4-5 bài đọc ngắn, mỗi bài có 5-6 câu hỏi bám sát từ vựng và ngữ pháp của bài học.
 */
export function generateReadingPassages(level, lessonNumber, vocabulary = [], grammar = []) {
  const lessonKey = `${String(level).toLowerCase()}-l${lessonNumber}`
  if (LESSON_READING_DATABASE[lessonKey]) {
    return LESSON_READING_DATABASE[lessonKey]
  }

  const safeVocab = Array.isArray(vocabulary) && vocabulary.length > 0
    ? vocabulary
    : [
        { japanese: '勉強', romaji: 'benkyou', meaningVi: 'học tập' },
        { japanese: '本', romaji: 'hon', meaningVi: 'sách' },
        { japanese: '友達', romaji: 'tomodachi', meaningVi: 'bạn bè' },
        { japanese: '先生', romaji: 'sensei', meaningVi: 'thầy cô' },
        { japanese: '学校', romaji: 'gakkou', meaningVi: 'trường học' },
        { japanese: '毎日', romaji: 'mainichi', meaningVi: 'mỗi ngày' },
        { japanese: '日本語', romaji: 'nihongo', meaningVi: 'tiếng Nhật' },
        { japanese: '時間', romaji: 'jikan', meaningVi: 'thời gian' },
      ]

  const safeGrammar = Array.isArray(grammar) && grammar.length > 0
    ? grammar
    : [{ pattern: '〜は〜です', meaningVi: 'A là B' }]

  const passageThemes = [
    {
      titleSuffix: 'Cuộc sống hàng ngày và học tập (日々の生活と学習)',
      context: 'kể về việc học tập và thói quen hàng ngày',
    },
    {
      titleSuffix: 'Giao tiếp và hoạt động cùng bạn bè (友人との交流)',
      context: 'nói về các hoạt động giao lưu bổ ích cùng bạn bè',
    },
    {
      titleSuffix: 'Trải nghiệm thực tế và công việc (実践と仕事の体験)',
      context: 'mô tả công việc và các trải nghiệm thực tế',
    },
    {
      titleSuffix: 'Kế hoạch và mục tiêu tương lai (未来への計画と目標)',
      context: 'chia sẻ kế hoạch phấn đấu và ôn luyện',
    },
    {
      titleSuffix: 'Tổng kết kiến thức và cảm nhận (総括と感想)',
      context: 'đúc kết bài học và cảm nghĩ sau quá trình học tập',
    },
  ]

  return passageThemes.map((theme, pIndex) => {
    const vocabSub = safeVocab.slice(pIndex * 2, pIndex * 2 + 3)
    const activeWords = vocabSub.length > 0 ? vocabSub : safeVocab.slice(0, 3)
    const grammarPoint = safeGrammar[pIndex % safeGrammar.length] || safeGrammar[0]

    const word1 = activeWords[0] || { japanese: '日本語', romaji: 'nihongo', meaningVi: 'tiếng Nhật' }
    const word2 = activeWords[1] || { japanese: '勉強', romaji: 'benkyou', meaningVi: 'học tập' }
    const word3 = activeWords[2] || { japanese: '友達', romaji: 'tomodachi', meaningVi: 'bạn bè' }

    const passageJp = `わたしは ${level.toUpperCase()}の がくせいです。まいにち がんばって べんきょうしています。
とくに「${word1.japanese}」と「${word2.japanese}」は とても たいせつです。
せんせいは「${grammarPoint.pattern}」の つかいかたを ていねいに おしえてくれました。
ともだちと いっしょに「${word3.japanese}」について はなします。
これからも にほんごを たのしく つづけます。`

    const passageVi = `Tôi là một học sinh trình độ ${level.toUpperCase()}. Mỗi ngày tôi đều nỗ lực học tập chăm chỉ.
Đặc biệt, các nội dung "${word1.meaningVi || word1.japanese}" và "${word2.meaningVi || word2.japanese}" rất quan trọng.
Thầy cô đã giảng dạy cẩn thận cách sử dụng mẫu ngữ pháp "${grammarPoint.pattern}".
Tôi cùng các bạn trao đổi về "${word3.meaningVi || word3.japanese}".
Từ nay về sau tôi sẽ tiếp tục học tiếng Nhật thật vui vẻ.`

    const questions = [
      {
        id: `${lessonKey}-p${pIndex + 1}-q1`,
        question: `Nội dung chính của đoạn văn trên là gì?`,
        options: [
          `Chia sẻ về quá trình học tập và áp dụng kiến thức ${level.toUpperCase()}`,
          `Kể về chuyến đi du lịch xa`,
          `Tìm kiếm đồ đạc bị thất lạc`,
          `Phàn nàn về bài tập về nhà`,
        ],
        answerIndex: 0,
        explanation: `Đoạn văn kể về việc nỗ lực học tập và luyện các nội dung trọng tâm của bài.`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q2`,
        question: `Từ "${word1.japanese}" trong bài mang ý nghĩa gì?`,
        options: [
          word1.meaningVi || 'Thuật ngữ trọng tâm',
          'Tên một địa danh nổi tiếng',
          'Món ăn truyền thống Nhật Bản',
          'Một loại phương tiện giao thông',
        ],
        answerIndex: 0,
        explanation: `Từ "${word1.japanese}" có nghĩa là: ${word1.meaningVi || word1.romaji}.`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q3`,
        question: `Mẫu ngữ pháp "${grammarPoint.pattern}" được thầy cô giảng dạy thế nào?`,
        options: [
          'Giảng dạy một cách cẩn thận, chu đáo (ていねいに)',
          'Không giảng dạy',
          'Chỉ cho học sinh tự đọc sách',
          'Bỏ qua không học',
        ],
        answerIndex: 0,
        explanation: `Trong bài: "せんせいは「${grammarPoint.pattern}」の つかいかたを ていねいに おしえてくれました。"`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q4`,
        question: `Người học trao đổi về nội dung "${word3.japanese}" cùng với ai?`,
        options: [
          'ともだちと いっしょに (Cùng với bạn bè)',
          'ひとりで (Một mình)',
          'ごりょうしんと (Với bố mẹ)',
          'しらないひとと (Với người lạ)',
        ],
        answerIndex: 0,
        explanation: `Đoạn văn viết: "ともだちと いっしょに「${word3.japanese}」について はなします。"`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q5`,
        question: `Thái độ học tập của người viết đối với tiếng Nhật như thế nào?`,
        options: [
          'Vui vẻ và kiên trì tiếp tục (たのしく つづけます)',
          'Cảm thấy chán nản và muốn từ bỏ',
          'Chỉ học khi bị bắt buộc',
          'Không quan tâm đến kết quả',
        ],
        answerIndex: 0,
        explanation: `Câu cuối bài: "これからも にほんごを たのしく つづけます。"`,
      },
      {
        id: `${lessonKey}-p${pIndex + 1}-q6`,
        question: `Ý nghĩa của mẫu ngữ pháp "${grammarPoint.pattern}" là gì?`,
        options: [
          grammarPoint.meaningVi || 'Mẫu ngữ pháp trọng tâm bài học',
          'Diễn tả sự cấm đoán nghiêm ngặt',
          'Diễn tả việc hối tiếc trong quá khứ',
          'Dùng để xin lỗi trang trọng',
        ],
        answerIndex: 0,
        explanation: `Mẫu "${grammarPoint.pattern}" có ý nghĩa: ${grammarPoint.meaningVi}.`,
      },
    ]

    return {
      id: `${lessonKey}-r${pIndex + 1}`,
      title: `Bài đọc ${pIndex + 1}: ${theme.titleSuffix}`,
      summary: `Đoạn văn luyện đọc hiểu bám sát từ vựng và ngữ pháp của Bài ${lessonNumber}.`,
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
export function getLessonReadingPassages(level, lessonNumber, vocabulary = [], grammar = []) {
  const lessonKey = `${String(level).toLowerCase()}-l${lessonNumber}`
  if (LESSON_READING_DATABASE[lessonKey]) {
    return LESSON_READING_DATABASE[lessonKey]
  }

  return generateReadingPassages(level, lessonNumber, vocabulary, grammar)
}

