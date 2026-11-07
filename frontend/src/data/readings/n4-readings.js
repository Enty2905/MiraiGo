/**
 * Dữ liệu bài đọc hiểu cấp độ N4 (Sơ trung cấp)
 * Độ dài: 200 - 350 từ, câu ghép, thể Te, thông báo đời sống, quy định, so sánh.
 */

export const N4_READING_LESSONS = {
  // ================= N4 BÀI 1 =================
  'n4-l1': [
    {
      id: 'n4-l1-r1',
      title: 'Bài đọc 1: Hướng dẫn sử dụng thư viện thành phố (市立図書館の利用案内)',
      summary: 'Các quy định mượn trả tài liệu, giữ trật tự và nhờ nhân viên hỗ trợ.',
      passageJp: `みなさん、市立図書館へようこそ。
図書館を利用するときは、次のルールを守ってください。
まず、館内では静かに本を読んでください。大きな声で話してはいけません。
また、携帯電話はマナーモードにして、通話はロビーでしてください。
今、２階の学習室では多くの学生が熱心に勉強しています。
本を借りたいときは、カウンターの職員に利用カードを見せてください。
１人１０冊まで、２週間借りることができます。
質問があるときは、遠慮しないでスタッフに聞いてください。`,
      passageVi: `Chào mừng các bạn đến với Thư viện thành phố.
Khi sử dụng thư viện, xin hãy tuân thủ các quy tắc sau đây.
Trước hết, xin hãy đọc sách một cách yên lặng trong khuôn viên thư viện. Không được nói chuyện lớn tiếng.
Ngoài ra, hãy để điện thoại ở chế độ rung và xin hãy nghe gọi ở ngoài sảnh chờ.
Hiện tại, ở phòng tự học tầng 2 có rất nhiều học sinh đang chăm chỉ học tập.
Khi muốn mượn sách, xin hãy xuất trình thẻ thư viện cho nhân viên tại quầy.
Mỗi người có thể mượn tối đa 10 cuốn sách trong thời hạn 2 tuần.
Khi có câu hỏi thắc mắc, xin đừng ngần ngại hãy hỏi nhân viên hỗ trợ.`,
      vocabFocus: ['読んで (hãy đọc)', '見せて (hãy cho xem)', '聞いて (hãy hỏi)', '勉強しています (đang học)', '利用 (sử dụng)'],
      grammarFocus: ['〜てください (Xin hãy làm gì)', '〜ています (Hành động đang diễn ra)'],
      questions: [
        {
          id: 'n4-l1-r1-q1',
          question: '館内で本を読むとき、どうしなければなりませんか。(Khi đọc sách trong thư viện phải làm sao?)',
          options: ['大きな声で話す', '静かに本を読む', '友達とおしゃべりする', '音楽を聞く'],
          answerIndex: 1,
          explanation: 'Đoạn văn viết: "まず、館内では静かに本を読んでください。"',
        },
        {
          id: 'n4-l1-r1-q2',
          question: '電話で話したいとき、どこで話さなければなりませんか。(Khi muốn gọi điện thoại thì nói ở đâu?)',
          options: ['２階の学習室', '本の前の席', 'ロビー', 'カウンターの中'],
          answerIndex: 2,
          explanation: 'Đoạn văn viết: "通話はロビーでしてください。" (Xin hãy nghe gọi ở sảnh chờ).',
        },
        {
          id: 'n4-l1-r1-q3',
          question: '今、２階の学習室で学生たちは何をしていますか。(Hiện các học sinh đang làm gì ở phòng học tầng 2?)',
          options: ['電話で話しています', '熱心に勉強しています', '本を借りています', '寝ています'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "今、２階の学習室では多くの学生が熱心に勉強しています。"',
        },
        {
          id: 'n4-l1-r1-q4',
          question: '本を借りるとき、何を見せますか。(Khi mượn sách phải đưa cái gì cho nhân viên?)',
          options: ['身分証明書', '利用カード', '携帯電話', '学生証'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "カウンターの職員に利用カードを見せてください。"',
        },
        {
          id: 'n4-l1-r1-q5',
          question: '１回に本を何冊、何週間借りることができますか。(Một lần được mượn mấy cuốn và mấy tuần?)',
          options: ['５冊、１週間', '１０冊、２週間', '１０冊、１か月', '２０冊、２週間'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "１人１０冊まで、２週間借りることができます。"',
        },
        {
          id: 'n4-l1-r1-q6',
          question: 'Câu nào sau đây ĐÚNG với nội dung bài thông báo?',
          options: [
            'Học sinh được nói chuyện tự do ở tầng 2.',
            'Nếu có thắc mắc, hãy chủ động hỏi nhân viên thư viện.',
            'Được mượn sách mà không cần thẻ.',
            'Điện thoại được mở chuông to trong thư viện.',
          ],
          answerIndex: 1,
          explanation: 'Câu cuối: "質問があるときは、遠慮しないでスタッフに聞いてください。"',
        },
      ],
    },
    {
      id: 'n4-l1-r2',
      title: 'Bài đọc 2: Ca làm thêm đầu tiên ở quán cà phê (カフェのアルバイト初日)',
      summary: 'Trưởng ca hướng dẫn nhân viên mới về quy trình chào khách và pha chế đồ uống.',
      passageJp: `今日から駅前のカフェでアルバイトを始めています。
店長の木村さんはとても優しくて、丁寧に仕事を教えてくれます。
「お客様が店に入ってきたら、『いらっしゃいませ』と明るい声で言ってください。
そして、メニューを渡して、お冷を出してください。」と木村さんは言いました。
今、キッチンの奥で先輩スタッフが美味しいコーヒーを淹れています。
とてもいい香りが漂っています。
木村さんは「困ったことがあったら、すぐに私を呼んでくださいね」と言ってくれました。
わたしは緊張していますが、一生懸命がんばって働いています。`,
      passageVi: `Hôm nay tôi bắt đầu làm thêm tại quán cà phê trước nhà ga.
Quản lý cửa hàng, anh Kimura, rất hiền từ và hướng dẫn công việc vô cùng chu đáo.
Anh Kimura nói: "Khi khách bước vào quán, hãy chào 'Kính chào quý khách' bằng giọng tươi vui nhé.
Sau đó, hãy đưa thực đơn và mời nước mát cho khách."
Hiện tại, ở sâu trong bếp, một nhân viên tiền bối đang pha cà phê thơm ngon.
Mùi hương ngào ngạt lan tỏa khắp không gian.
Anh Kimura dặn: "Khi gặp bất kỳ khó khăn nào, hãy gọi tôi ngay nhé."
Dù có chút hồi hộp nhưng tôi đang nỗ lực hết mình để làm việc.`,
      vocabFocus: ['言って (hãy nói)', '渡して (hãy trao/đưa)', '呼んで (hãy gọi)', '働いています (đang làm việc)', '淹れています (đang pha)'],
      grammarFocus: ['〜てください', '〜ています'],
      questions: [
        {
          id: 'n4-l1-r2-q1',
          question: 'わたしは 今日から どこで 働いていますか。(Người kể từ hôm nay làm việc ở đâu?)',
          options: ['大学の食堂', '駅前のカフェ', 'ホテルのフロント', '本屋'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "今日から駅前のカフェでアルバイトを始めています。"',
        },
        {
          id: 'n4-l1-r2-q2',
          question: 'お客様が店に入ってきたら、最初に何をしますか。(Khi khách bước vào thì làm gì đầu tiên?)',
          options: ['コーヒーを淹れる', '「いらっしゃいませ」と明るい声で言う', 'お勘定をする', '席を片付ける'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "『いらっしゃいませ』と明るい声で言ってください。"',
        },
        {
          id: 'n4-l1-r2-q3',
          question: '今、キッチンの奥で先輩は何をしていますか。(Hiện tại tiền bối ở trong bếp đang làm gì?)',
          options: ['皿を洗っています', '美味しいコーヒーを淹れています', '休憩しています', '電話をかけています'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "今、キッチンの奥で先輩スタッフが美味しいコーヒーを淹れています。"',
        },
        {
          id: 'n4-l1-r2-q4',
          question: '困ったことがあったとき、どうしますか。(Khi gặp khó khăn thì phải làm sao?)',
          options: ['すぐに店長を呼ぶ', '一人で悩む', 'お客様に聞く', '帰る'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "困ったことがあったら、すぐに私を呼んでくださいね"',
        },
        {
          id: 'n4-l1-r2-q5',
          question: '店長の木村さんはどんな人ですか。(Quản lý Kimura là người như thế nào?)',
          options: ['とても厳しくて怖い人', '優しくて丁寧に教えてくれる人', '無口で冷たい人', 'いつも怒っている人'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "店長の木村さんはとても優しくて、丁寧に仕事を教えてくれます。"',
        },
        {
          id: 'n4-l1-r2-q6',
          question: 'Người viết cảm thấy thế nào trong ngày đầu đi làm?',
          options: [
            'Rất buồn chán và muốn nghỉ việc ngay.',
            'Có phần hồi hộp (緊張) nhưng đang nỗ lực hết mình.',
            'Rất tự tin và không cần ai hướng dẫn.',
            'Mệt mỏi và buồn ngủ.',
          ],
          answerIndex: 1,
          explanation: 'Câu kết bài: "わたしは緊張していますが、一生懸命がんばって働いています。"',
        },
      ],
    },
    {
      id: 'n4-l1-r3',
      title: 'Bài đọc 3: Bức thư gửi thầy giáo chủ nhiệm cũ (恩師への手紙)',
      summary: 'Học sinh viết thư thăm hỏi sức khỏe thầy và báo cáo tình hình học tiếng Nhật.',
      passageJp: `拝啓、田中先生。お元気ですか。
日本に来てから、もう半年が過ぎました。
先生、この手紙を読んで、安心してください。
わたしは今、東京の日本語学校で毎日熱心に学んでいます。
クラスメイトと一緒にスピーチコンテストの準備をしています。
日本の生活にもすっかり慣れて、友達もたくさんできました。
先生、お体に気をつけて、お元気でお過ごしください。
また国へ帰ったときに、ぜひ先生に会いに行きます。敬具。`,
      passageVi: `Kính gửi thầy Tanaka. Thầy có khỏe không ạ?
Kể từ khi em sang Nhật Bản, vậy là nửa năm đã trôi qua rồi.
Thưa thầy, xin thầy đọc bức thư này và hãy yên tâm về em nhé.
Hiện tại, em đang học tập chăm chỉ mỗi ngày tại một trường Nhật ngữ ở Tokyo.
Em đang cùng các bạn trong lớp chuẩn bị cho cuộc thi hùng biện tiếng Nhật.
Em cũng đã quen hoàn toàn với cuộc sống tại Nhật và có thêm rất nhiều bạn bè.
Thầy hãy chú ý giữ gìn sức khỏe và luôn bình an nhé thầy.
Khi có dịp về nước, nhất định em sẽ đến thăm thầy. Kính thư.`,
      vocabFocus: ['読んで (hãy đọc)', '気をつけて (hãy cẩn thận/giữ gìn)', '準備をしています (đang chuẩn bị)', '学んでいます (đang học)'],
      grammarFocus: ['〜てください', '〜ています'],
      questions: [
        {
          id: 'n4-l1-r3-q1',
          question: '手紙を書いた人は、日本に来てからどのくらい経ちましたか。(Người viết sang Nhật được bao lâu rồi?)',
          options: ['１か月', '３か月', '半年', '１年'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "日本に来てから、もう半年が過ぎました。"',
        },
        {
          id: 'n4-l1-r3-q2',
          question: '手紙を書いた人は今、何をしていますか。(Hiện tại người viết thư đang làm gì?)',
          options: ['会社で働いています', '日本語学校で熱心に学んでいます', '旅行をしています', '休んでいます'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "東京の日本語学校で毎日熱心に学んでいます。"',
        },
        {
          id: 'n4-l1-r3-q3',
          question: 'クラスメイトと何の準備をしていますか。(Đang cùng bạn trong lớp chuẩn bị sự kiện gì?)',
          options: ['卒業式', 'スピーチコンテスト', '誕生日パーティー', '試験'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "クラスメイトと一緒にスピーチコンテストの準備をしています。"',
        },
        {
          id: 'n4-l1-r3-q4',
          question: '手紙を書いた人の日本の生活はどうですか。(Cuộc sống ở Nhật của người viết như thế nào?)',
          options: ['まだ全然慣れていない', 'すっかり慣れて友達も多い', '友達がいなくて寂しい', '大変で困っている'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "日本の生活にもすっかり慣れて、友達もたくさんできました。"',
        },
        {
          id: 'n4-l1-r3-q5',
          question: '国へ帰ったとき、何をするつもりですか。(Khi về nước dự định làm gì?)',
          options: ['先生に会いに行く', '新しい仕事を探す', '旅行する', '何もしない'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "また国へ帰ったときに、ぜひ先生に会いに行きます。"',
        },
        {
          id: 'n4-l1-r3-q6',
          question: 'Mục đích chính của bức thư này là gì?',
          options: [
            'Hỏi vay tiền học phí.',
            'Thăm hỏi sức khỏe thầy giáo cũ và báo cáo tình hình học tập tốt đẹp.',
            'Xin nghỉ học tại trường Nhật ngữ.',
            'Phàn nàn về cuộc sống đắt đỏ ở Tokyo.',
          ],
          answerIndex: 1,
          explanation: 'Bức thư gửi lời thăm hỏi và trấn an thầy giáo về tình hình học tập và sinh hoạt của mình.',
        },
      ],
    },
    {
      id: 'n4-l1-r4',
      title: 'Bài đọc 4: Hướng dẫn sơ tán khi có động đất (地震発生時の避難指示)',
      summary: 'Cẩm nang hướng dẫn các bước an toàn khi xảy ra rung chấn tại tòa nhà.',
      passageJp: `緊急地震速報です。大きな揺れに警戒してください。
まず、頭を守って、机の下に隠れてください。
あわてて外へ飛び出してはいけません。
今、建物の安全装置が作動しています。
揺れが収まったら、火の元を確認して、ドアを開けて避難経路を確保してください。
エレベーターは絶対に使わないで、階段を使って落ち着いて避難してください。
係員の指示をよく聞いて、近くの広場へ集まってください。`,
      passageVi: `Bản tin cảnh báo động đất khẩn cấp. Xin hãy đề phòng rung chấn mạnh.
Trước hết, hãy bảo vệ vùng đầu và ẩn nấp dưới gầm bàn.
Tuyệt đối không được hoảng loạn lao ra ngoài.
Hiện tại, các thiết bị an toàn của tòa nhà đang được kích hoạt.
Sau khi rung chấn lắng xuống, hãy kiểm tra nguồn lửa, mở cửa để thông thoáng đường thoát hiểm.
Tuyệt đối không sử dụng thang máy, xin hãy sử dụng cầu thang bộ và bình tĩnh sơ tán.
Xin hãy lắng nghe kỹ chỉ dẫn của nhân viên phụ trách và tập trung tại bãi đất trống gần nhất.`,
      vocabFocus: ['守って (hãy bảo vệ)', '隠れて (hãy ẩn nấp)', '開けて (hãy mở)', '作動しています (đang vận hành)', '聞いて (hãy nghe)'],
      grammarFocus: ['〜てください', '〜ています', '〜てはいけません'],
      questions: [
        {
          id: 'n4-l1-r4-q1',
          question: '地震が起きたとき、最初に何をしますか。(Khi có động đất, việc đầu tiên cần làm là gì?)',
          options: ['すぐに外へ走る', '頭を守って机の下に隠れる', 'エレベーターに乗る', '荷物をまとめる'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "まず、頭を守って、机の下に隠れてください。"',
        },
        {
          id: 'n4-l1-r4-q2',
          question: '揺れが収まったあと、何を確認しますか。(Sau khi hết rung lắc, kiểm tra điều gì?)',
          options: ['財布', '携帯電話', '火の元', 'テレビ'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "揺れが収まったら、火の元を確認して..." (Kiểm tra nguồn lửa/bếp ga).',
        },
        {
          id: 'n4-l1-r4-q3',
          question: '避難するとき、エレベーターを使ってもいいですか。(Khi sơ tán có được dùng thang máy không?)',
          options: ['はい、使ってもいい', '絶対に避けて階段を使う', '急いでいるときだけ使う', '１階からなら使える'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "エレベーターは絶対に使わないで、階段を使って落ち着いて避難してください。"',
        },
        {
          id: 'n4-l1-r4-q4',
          question: '今、建物の中で何が起きていますか。(Hiện tại trong tòa nhà điều gì đang diễn ra?)',
          options: ['火事が広がっている', '安全装置が作動している', '工事をしている', '掃除をしている'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "今、建物の安全装置が作動しています。"',
        },
        {
          id: 'n4-l1-r4-q5',
          question: '避難するとき、どこに集まりますか。(Khi sơ tán thì tập trung ở đâu?)',
          options: ['部屋の中', '近くの広場', '屋上', '駅の中'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "近くの広場へ集まってください。"',
        },
        {
          id: 'n4-l1-r4-q6',
          question: 'Thái độ quan trọng nhất khi sơ tán động đất là gì?',
          options: ['Hoảng hốt la hét.', 'Bình tĩnh và lắng nghe chỉ dẫn của nhân viên (落ち着いて避難する).', 'Tranh giành chạy trước.', 'Bỏ mặc mọi người.'],
          answerIndex: 1,
          explanation: 'Đoạn văn nhấn mạnh: "落ち着いて避難してください。係員の指示をよく聞いて..."',
        },
      ],
    },
    {
      id: 'n4-l1-r5',
      title: 'Bài đọc 5: Trải nghiệm lớp học cắm hoa nghệ thuật Ikebana (生け花教室)',
      summary: 'Quan sát các nghệ nhân cắm hoa truyền thống và làm theo lời hướng dẫn.',
      passageJp: `わたしは今、京都の伝統的な町家で生け花を体験しています。
先生は着物を着て、静かに花を生けています。
「花の命を感じて、一本一本丁寧に切ってください。
枝の長さを考えて、バランスよく器に挿してください。」と先生が言いました。
わたしは季節の菊の花と紅葉の枝を使って、作品を作っています。
先生はわたしの作品を見て、「とても素晴らしいですよ」と褒めてくれました。
日本の伝統文化の深さに感動しています。`,
      passageVi: `Hiện tại, tôi đang trải nghiệm nghệ thuật cắm hoa Ikebana tại một ngôi nhà cổ ở Kyoto.
Cô giáo mặc trang phục kimono và đang điềm tĩnh cắm từng nhành hoa.
Cô hướng dẫn: "Hãy cảm nhận sinh mệnh của loài hoa và xin hãy cắt cẩn thận từng cành một.
Xin hãy tính toán chiều dài của cành cây và cắm vào bình sao cho thật cân đối."
Tôi đang sử dụng hoa cúc theo mùa và cành lá phong đỏ để tạo nên tác phẩm của mình.
Sau khi ngắm nhìn tác phẩm của tôi, cô khen: "Em làm tuyệt vời lắm đấy!"
Tôi vô cùng xúc động trước chiều sâu của văn hóa truyền thống Nhật Bản.`,
      vocabFocus: ['切って (hãy cắt)', '挿して (hãy cắm vào)', '生けています (đang cắm hoa)', '感動しています (đang xúc động)'],
      grammarFocus: ['〜てください', '〜ています'],
      questions: [
        {
          id: 'n4-l1-r5-q1',
          question: 'わたしは今、どこで何をしていますか。(Người kể hiện đang ở đâu làm gì?)',
          options: ['東京で料理を作っている', '京都の町家で生け花を体験している', '大阪で買い物をしている', '奈良で鹿を見ている'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "わたしは今、京都の伝統的な町家で生け花を体験しています。"',
        },
        {
          id: 'n4-l1-r5-q2',
          question: '先生はどんな服を着ていますか。(Cô giáo đang mặc trang phục gì?)',
          options: ['ドレス', '着物', 'スーツ', '洋服'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "先生は着物を着て、静かに花を生けています。"',
        },
        {
          id: 'n4-l1-r5-q3',
          question: '花を切るとき、先生は何と言いましたか。(Khi cắt hoa, cô giáo dặn dò điều gì?)',
          options: ['早く切りなさい', '花の命を感じて丁寧に切ってください', '短く切りなさい', '手で折りなさい'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "「花の命を感じて、一本一本丁寧に切ってください。」"',
        },
        {
          id: 'n4-l1-r5-q4',
          question: 'わたしは何の花や枝を使っていますか。(Người cắm hoa dùng hoa và cành cây gì?)',
          options: ['桜と梅', '菊の花と紅葉の枝', 'バラとチューリップ', 'ひまわり'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "わたしは季節の菊の花と紅葉の枝を使って、作品を作っています。"',
        },
        {
          id: 'n4-l1-r5-q5',
          question: '先生はわたしの作品を見て、どう評価しましたか。(Cô giáo nhận xét tác phẩm thế nào?)',
          options: ['やり直しなさいと言った', '「とても素晴らしいですよ」と褒めた', '何も言わなかった', '笑った'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "先生はわたしの作品を見て、「とても素晴らしいですよ」と褒めてくれました。"',
        },
        {
          id: 'n4-l1-r5-q6',
          question: 'Người viết cảm nhận điều gì qua buổi trải nghiệm cắm hoa?',
          options: [
            'Cảm thấy mỏi tay và buồn ngủ.',
            'Xúc động sâu sắc trước chiều sâu của văn hóa truyền thống Nhật Bản.',
            'Cảm thấy hoa cúc không đẹp.',
            'Muốn về sớm.',
          ],
          answerIndex: 1,
          explanation: 'Câu cuối: "日本の伝統文化の深さに感動しています。"',
        },
      ],
    },
  ],

  // ================= N4 BÀI 2 =================
  'n4-l2': [
    {
      id: 'n4-l2-r1',
      title: 'Bài đọc 1: Quy định phòng sinh hoạt chung tại ký túc xá (寮の共有スペースの規則)',
      summary: 'Những điều được phép và bị cấm khi sử dụng khu vực bếp và phòng khách.',
      passageJp: `国際交流寮に住んでいるみなさんへ。
共有ラウンジとキッチンを使うときのルールをよく確認してください。
ラウンジでは、夜１０時までテレビを見てもいいです。
友達と一緒に勉強したり、おしゃべりしたりしてもいいです。
しかし、夜１１時以降に騒いではいけません。他の部屋の人に迷惑がかかります。
キッチンでは、料理を作ってもいいですが、使い終わったら必ず片付けてください。
自分の名前を書かないで冷蔵庫に食べ物を置いてはいけません。
また、寮内は全館禁煙です。ここでタバコを吸ってはいけません。ルールを守って気持ちよく過ごしましょう。`,
      passageVi: `Gửi các bạn sinh viên đang sinh sống tại ký túc xá quốc tế.
Xin các bạn kiểm tra kỹ các quy định khi sử dụng phòng sinh hoạt chung và khu bếp.
Tại phòng sinh hoạt chung, các bạn được phép xem TV đến 10 giờ tối.
Các bạn có thể cùng nhau học bài, trò chuyện cùng bạn bè.
Tuy nhiên, sau 11 giờ đêm tuyệt đối không được làm ồn. Điều đó sẽ gây phiền hà đến các phòng xung quanh.
Tại khu bếp, các bạn có thể tự do nấu ăn nhưng khi nấu xong bắt buộc phải dọn dẹp sạch sẽ.
Không được để đồ ăn vào tủ lạnh mà không ghi tên của mình.
Ngoài ra, toàn bộ ký túc xá cấm hút thuốc. Tuyệt đối không được hút thuốc ở đây. Hãy tuân thủ nội quy để cùng sống thoải mái nhé.`,
      vocabFocus: ['見てもいい (được xem)', '作ってもいい (được làm/nấu)', '騒いではいけません (không được làm ồn)', '置いてはいけません (không được để)', '吸ってはいけません (không được hút)'],
      grammarFocus: ['〜てもいいです (Được phép làm gì)', '〜てはいけません (Không được phép làm gì)'],
      questions: [
        {
          id: 'n4-l2-r1-q1',
          question: 'ラウンジで夜何時までテレビを見てもいいですか。(Được xem TV ở phòng sinh hoạt chung đến mấy giờ tối?)',
          options: ['夜９時まで', '夜１０時まで', '夜１１時まで', 'いつでもいい'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "ラウンジでは、夜１０時までテレビを見てもいいです。"',
        },
        {
          id: 'n4-l2-r1-q2',
          question: '夜１１時以降に何をしてはいけませんか。(Sau 11 giờ đêm không được làm điều gì?)',
          options: ['寝てはいけない', '騒いではいけない', '水銀を飲んではいけない', '勉強してはいけない'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "夜１１時以降に騒いではいけません。" (Không được làm ồn).',
        },
        {
          id: 'n4-l2-r1-q3',
          question: 'キッチンで料理をしたあと、どうしなければなりませんか。(Nấu ăn xong trong bếp phải làm sao?)',
          options: ['そのままにする', '必ず片付ける', 'ゴミを床に置く', '電気をつけたままにする'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "料理を作ってもいいですが、使い終わったら必ず片付けてください。"',
        },
        {
          id: 'n4-l2-r1-q4',
          question: '冷蔵庫に食べ物を置くとき、どうしなければなりませんか。(Để đồ ăn vào tủ lạnh thì phải làm sao?)',
          options: ['自分の名前を書く', '鍵をかける', '先生に許可をもらう', '写真を撮る'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "自分の名前を書かないで冷蔵庫に食べ物を置いてはいけません。" (Phải ghi tên mình).',
        },
        {
          id: 'n4-l2-r1-q5',
          question: '寮内でタバコを吸ってもいいですか。(Trong ký túc xá có được hút thuốc không?)',
          options: ['部屋の中なら吸ってもいい', 'ベランダならいい', '全館禁煙なので吸ってはいけない', '夜ならいい'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "寮内は全館禁煙です。ここでタバコを吸ってはいけません。"',
        },
        {
          id: 'n4-l2-r1-q6',
          question: 'Mục đích chính của bản nội quy ký túc xá là gì?',
          options: [
            'Cấm học sinh nấu ăn.',
            'Đảm bảo trật tự, vệ sinh và môi trường sống chung văn minh, thoải mái cho mọi người.',
            'Yêu cầu đóng thêm tiền phạt.',
            'Cấm bạn bè đến thăm.',
          ],
          answerIndex: 1,
          explanation: 'Câu kết: "ルールを守って気持ちよく過ごしましょう。" (Giữ quy tắc để cùng sống thoải mái).',
        },
      ],
    },
    {
      id: 'n4-l2-r2',
      title: 'Bài đọc 2: Tham quan bảo tàng mỹ thuật (美術館での見学)',
      summary: 'Quy định chụp ảnh và bảo tồn các tác phẩm hội họa quý giá.',
      passageJp: `今日、クラスのみんなで上野の国立美術館へ行きました。
入口で係員からパンフレットを受け取って、説明を聞きました。
「常設展示室では、フラッシュを使わなければ写真を撮ってもいいです。
しかし、特別展示室の絵画は大変貴重ですから、絶対に写真を撮ってはいけません。
また、作品に手で触れてはいけません。
館内では飲食は禁止です。ジュースを飲んだり、お菓子を食べたりしてはいけません。
水が飲みたいときは、休憩室のベンチで飲んでください。」
私たちはマナーを守って、美しい芸術作品をゆっくり鑑賞しました。`,
      passageVi: `Hôm nay, cả lớp chúng tôi đã đến Bảo tàng Mỹ thuật Quốc gia ở Ueno.
Tại lối vào, chúng tôi nhận tờ rơi và lắng nghe giải thích từ nhân viên bảo tàng.
"Tại phòng trưng bày thường trực, nếu không dùng đèn flash thì các bạn có thể chụp ảnh.
Tuy nhiên, các bức tranh ở phòng trưng bày đặc biệt vô cùng quý giá nên tuyệt đối không được chụp ảnh.
Ngoài ra, không được chạm tay vào các tác phẩm.
Trong khuôn viên bảo tàng cấm ăn uống. Không được uống nước ngọt hay ăn bánh kẹo.
Khi muốn uống nước lọc, xin hãy ngồi uống tại ghế dài ở phòng nghỉ giải lao."
Chúng tôi đã giữ đúng phép lịch sự và thong thả thưởng thức các tác phẩm nghệ thuật tuyệt đẹp.`,
      vocabFocus: ['撮ってもいい (được chụp)', '撮ってはいけません (không được chụp)', '触れてはいけません (không được sờ)', '飲んではいけません (không được uống)'],
      grammarFocus: ['〜てもいいです', '〜てはいけません'],
      questions: [
        {
          id: 'n4-l2-r2-q1',
          question: '常設展示室で写真を撮ってもいいですか。(Ở phòng trưng bày thường trực được chụp ảnh không?)',
          options: ['絶対に撮ってはいけない', 'フラッシュを使わなければ撮ってもいい', '動画ならいい', '有料ならいい'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "常設展示室では、フラッシュを使わなければ写真を撮ってもいいです。"',
        },
        {
          id: 'n4-l2-r2-q2',
          question: '特別展示室で写真を撮ってはいけない理由は何ですか。(Vì sao không được chụp ảnh ở phòng trưng bày đặc biệt?)',
          options: ['部屋が狭いから', '絵画が大変貴重だから', '暗いから', '人が多いから'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "特別展示室の絵画は大変貴重ですから、絶対に写真を撮ってはいけません。"',
        },
        {
          id: 'n4-l2-r2-q3',
          question: '展示されている作品に触ってもいいですか。(Có được chạm vào các tác phẩm trưng bày không?)',
          options: ['触れてはいけない', '少しなら触ってもいい', '先生と一緒ならいい', '手袋をすればいい'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "また、作品に手で触れてはいけません。"',
        },
        {
          id: 'n4-l2-r2-q4',
          question: '館内でジュースを飲んでもいいですか。(Trong bảo tàng có được uống nước ngọt không?)',
          options: ['飲んでもいい', '飲食は禁止なので飲んではいけない', '展示室の前ならいい', '歩きながらならいい'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "館内では飲食は禁止です。ジュースを飲んだり...してはいけません。"',
        },
        {
          id: 'n4-l2-r2-q5',
          question: '水を飲みたいときは、どこで飲みますか。(Khi muốn uống nước thì uống ở đâu?)',
          options: ['特別展示室', '常設展示室', '休憩室のベンチ', 'トイレ'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "水が飲みたいときは、休憩室のベンチで飲んでください。"',
        },
        {
          id: 'n4-l2-r2-q6',
          question: 'Sau khi tuân thủ các quy tắc bảo tàng, cả lớp đã có trải nghiệm như thế nào?',
          options: [
            'Bị nhân viên nhắc nhở và phạt tiền.',
            'Thong thả chiêm ngưỡng và thưởng thức các tác phẩm nghệ thuật tuyệt đẹp.',
            'Cảm thấy buồn ngủ và muốn đi về.',
            'Làm rách một bức tranh quý.',
          ],
          answerIndex: 1,
          explanation: 'Câu kết bài: "私たちはマナーを守って、美しい芸術作品をゆっくり鑑賞しました。"',
        },
      ],
    },
    {
      id: 'n4-l2-r3',
      title: 'Bài đọc 3: Lễ hội gốm sứ truyền thống (伝統の陶器まつり)',
      summary: 'Khám phá làng nghề làm gốm và nghệ thuật bán hàng thủ công.',
      passageJp: `先週の日曜日、わたしは栃木県の益子陶器市へ行きました。
町中にたくさんのテントが並んでいて、多くの陶芸家が作品を売っています。
ここでは、手作りの湯呑みやお皿を手に取って見てもいいです。
店の人に許可をもらったら、気に入った器の写真を撮ってもいいです。
しかし、割れやすい物ですから、乱暴に扱ってはいけません。
小さな子どもを走らせてはいけません。
わたしは職人の作った青いコーヒーカップを買いました。
毎朝これでお茶を飲むのが楽しみです。`,
      passageVi: `Chủ Nhật tuần trước, tôi đã đến Hội chợ gốm sứ Mashiko tại tỉnh Tochigi.
Khắp thị trấn giăng đầy các gian lều bạt, nơi nhiều nghệ nhân gốm đang trưng bày và bán tác phẩm.
Ở đây, bạn có thể tự do cầm trên tay để ngắm nhìn những chiếc cốc uống trà và đĩa thủ công.
Nếu được người bán đồng ý, bạn cũng có thể chụp ảnh những món đồ ưng ý.
Tuy nhiên, vì đây là những món đồ rất dễ vỡ nên tuyệt đối không được cầm nắm thô bạo.
Các bậc phụ huynh cũng không được để trẻ nhỏ chạy nhảy tung tăng quanh gian hàng.
Tôi đã mua được một chiếc tách cà phê màu xanh tuyệt đẹp do chính tay nghệ nhân chế tác.
Mỗi buổi sáng được dùng chiếc tách này thưởng trà là một niềm vui lớn của tôi.`,
      vocabFocus: ['見てもいい (được xem)', '撮ってもいい (được chụp)', '扱ってはいけません (không được thao tác thô bạo)', '走らせてはいけません (không được để chạy)'],
      grammarFocus: ['〜てもいいです', '〜てはいけません'],
      questions: [
        {
          id: 'n4-l2-r3-q1',
          question: '益子陶器市では何が売られていますか。(Ở hội chợ gốm sứ Mashiko bán gì?)',
          options: ['洋服と靴', '手作りの湯呑みやお皿などの陶器', '電気製品', '野菜と果物'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "手作りの湯呑みやお皿を手に取って見てもいいです。"',
        },
        {
          id: 'n4-l2-r3-q2',
          question: '器の写真を撮りたいとき、どうしますか。(Muốn chụp ảnh đồ gốm thì phải làm sao?)',
          options: ['黙って勝手に撮る', '店の人に許可をもらう', 'お金を払う', '撮ってはいけない'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "店の人に許可をもらったら、気に入った器の写真を撮ってもいいです。"',
        },
        {
          id: 'n4-l2-r3-q3',
          question: '陶器を触るとき、何をしてはいけませんか。(Khi chạm vào đồ gốm thì không được làm gì?)',
          options: ['乱暴に扱ってはいけない', '両手で持ってはいけない', '見てはいけない', '値段を聞いてはいけない'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "割れやすい物ですから、乱暴に扱ってはいけません。"',
        },
        {
          id: 'n4-l2-r3-q4',
          question: '小さな子どもについて、どんな注意がありますか。(Có lưu ý gì đối với trẻ nhỏ?)',
          options: ['連れてきてはいけない', '走らせてはいけない', '笑わせてはいけない', '歌わせてはいけない'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "小さな子どもを走らせてはいけません。" (Không để trẻ con chạy nhảy va đổ vỡ).',
        },
        {
          id: 'n4-l2-r3-q5',
          question: 'わたしは何を買いましたか。(Người kể đã mua được món đồ gì?)',
          options: ['赤いお皿', '青いコーヒーカップ', '大きな花瓶', '湯呑み３つ'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "わたしは職人の作った青いコーヒーカップを買いました。"',
        },
        {
          id: 'n4-l2-r3-q6',
          question: 'Niềm vui mỗi sáng của người viết sau chuyến đi là gì?',
          options: [
            'Dùng chiếc tách cà phê mới mua để uống trà.',
            'Đi bán đồ gốm.',
            'Làm vỡ tách cà phê.',
            'Ngủ nướng đến trưa.',
          ],
          answerIndex: 0,
          explanation: 'Câu kết: "毎朝これでお茶を飲むのが楽しみです。"',
        },
      ],
    },
    {
      id: 'n4-l2-r4',
      title: 'Bài đọc 4: Đăng ký thẻ thư viện điện tử (電子図書館カードの登録)',
      summary: 'Các điều khoản sử dụng và những điều không được làm khi dùng tài khoản số.',
      passageJp: `市民のみなさまへ、電子図書館サービスのご案内です。
カードをお持ちの方は、パソコンやスマートフォンで電子書籍を借りてもいいです。
１回に３冊まで、２週間読むことができます。
借りた本は期限が来たら自動的に返却されるので、図書館へ返しに来なくてもいいです。
しかし、電子書籍の画面をコピーしてインターネット上に公開してはいけません。
また、自分のカード番号を他人に教えてはいけません。
不正な利用を発見した場合は、サービスの利用を停止することがあります。
ルールを守って、読書をお楽しみください。`,
      passageVi: `Kính gửi toàn thể quý công dân, thông báo về dịch vụ Thư viện điện tử.
Những người đã có thẻ thư viện có thể sử dụng máy tính hoặc điện thoại thông minh để mượn sách điện tử.
Mỗi lần được mượn tối đa 3 cuốn sách và đọc trong thời hạn 2 tuần.
Sách mượn khi đến hạn sẽ tự động được trả về hệ thống, vì vậy quý khách không cần phải đến thư viện để trả.
Tuy nhiên, tuyệt đối không được chụp sao chép màn hình sách và công khai lên mạng Internet.
Ngoài ra, không được tiết lộ mã số thẻ của mình cho người khác.
Nếu phát hiện hành vi sử dụng trái phép, chúng tôi có thể tạm ngừng cung cấp dịch vụ.
Xin hãy tuân thủ quy tắc và tận hưởng niềm vui đọc sách.`,
      vocabFocus: ['借りてもいい (được mượn)', '来なくてもいい (không cần phải đến)', '公開してはいけません (không được công khai)', '教えてはいけません (không được chỉ/cho biết)'],
      grammarFocus: ['〜てもいいです', '〜てはいけません', '〜なくてもいいです'],
      questions: [
        {
          id: 'n4-l2-r4-q1',
          question: '電子書籍は何を使って読んでもいいですか。(Có thể dùng thiết bị gì để đọc sách điện tử?)',
          options: ['テレビだけ', 'パソコンやスマートフォン', 'ラジオ', '紙のノート'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "パソコンやスマートフォンで電子書籍を借りてもいいです。"',
        },
        {
          id: 'n4-l2-r4-q2',
          question: '１回に何冊まで借りることができますか。(Một lần được mượn tối đa mấy cuốn sách điện tử?)',
          options: ['１冊', '３冊', '５冊', '１０冊'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "１回に３冊まで、２週間読むことができます。"',
        },
        {
          id: 'n4-l2-r4-q3',
          question: '本を返すとき、図書館へ行かなければなりませんか。(Khi trả sách có bắt buộc phải tới thư viện không?)',
          options: ['行かなければならない', '自動的に返却されるので返しに来なくてもいい', '郵送する', '電話する'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "自動的に返却されるので、図書館へ返しに来なくてもいいです。"',
        },
        {
          id: 'n4-l2-r4-q4',
          question: '電子書籍について、何をしてはいけませんか。(Về sách điện tử, không được làm hành vi gì?)',
          options: ['画面をコピーしてネットに公開してはいけない', '夜読んで退屈してはいけない', 'メモを取ってはいけない', '何度も読んで退屈してはいけない'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "電子書籍の画面をコピーしてインターネット上に公開してはいけません。"',
        },
        {
          id: 'n4-l2-r4-q5',
          question: '自分のカード番号をどうしてはいけませんか。(Mã số thẻ của mình thì không được làm gì?)',
          options: ['忘れてはいけない', '他人に教えてはいけない', '手帳に書いてはいけない', '隠してはいけない'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "また、自分のカード番号を他人に教えてはいけません。"',
        },
        {
          id: 'n4-l2-r4-q6',
          question: 'Nếu phát hiện sử dụng sai quy định, thư viện sẽ xử lý thế nào?',
          options: [
            'Tạm ngừng dịch vụ của người dùng đó (サービスの利用を停止する).',
            'Đến tận nhà phạt tiền.',
            'Tịch thu điện thoại thông minh.',
            'Không xử lý gì.',
          ],
          answerIndex: 0,
          explanation: 'Đoạn văn: "不正な利用を発見した場合は、サービスの利用を停止することがあります。"',
        },
      ],
    },
    {
      id: 'n4-l2-r5',
      title: 'Bài đọc 5: Quy tắc phân loại rác ở khu phố (町のゴミ出しルール)',
      summary: 'Cách phân biệt rác đốt được, rác tái chế và những điều nghiêm cấm.',
      passageJp: `わたしたちの町では、ゴミを出す曜日と時間が厳しく決まっています。
燃えるゴミは、火曜日と金曜日の朝８時までに出してもいいです。
ビンや缶などの資源ゴミは、水曜日に専用のネットの中に入れてもいいです。
しかし、前の日の夜からゴミを出してはいけません。カラスや野良猫が散らかしてしまいます。
粗大ゴミは、電話で予約しないで集積所に捨ててはいけません。
また、他の地域の人がここにゴミを捨ててはいけません。
町を清潔に保つために、みんなでルールを正しく守りましょう。`,
      passageVi: `Tại khu phố của chúng tôi, ngày và giờ vứt rác được quy định rất nghiêm ngặt.
Rác cháy được các bạn có thể vứt vào sáng thứ Ba và thứ Sáu trước 8 giờ sáng.
Rác tài nguyên như chai thủy tinh, lon nhôm có thể cho vào lưới chuyên dụng vào thứ Tư.
Tuy nhiên, tuyệt đối không được đem rác ra để từ tối hôm trước. Quạ và mèo hoang sẽ bới rác tung tóe.
Rác thải cồng kềnh thì không được vứt ra điểm tập kết khi chưa gọi điện đặt lịch hẹn trước.
Ngoài ra, người ở các khu vực khác không được mang rác tới vứt trộm tại đây.
Để giữ gìn khu phố luôn sạch đẹp, tất cả chúng ta hãy cùng nhau nghiêm túc tuân thủ nội quy.`,
      vocabFocus: ['出してもいい (được vứt/đưa ra)', '入れてもいい (được cho vào)', '出してはいけません (không được vứt)', '捨ててはいけません (không được xả rác)'],
      grammarFocus: ['〜てもいいです', '〜てはいけません'],
      questions: [
        {
          id: 'n4-l2-r5-q1',
          question: '燃えるゴミはいつ出してもいいですか。(Rác cháy được vứt khi nào?)',
          options: ['月曜日と木曜日', '火曜日と金曜日の朝８時まで', '水曜日の夜', 'いつでもいい'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "燃えるゴミは、火曜日と金曜日の朝８時までに出してもいいです。"',
        },
        {
          id: 'n4-l2-r5-q2',
          question: 'ビンや缶は何曜日に出しますか。(Chai lọ và lon nhôm vứt vào thứ mấy?)',
          options: ['火曜日', '水曜日', '木曜日', '金曜日'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "ビンや缶などの資源ゴミは、水曜日に専用のネットの中に入れてもいいです。"',
        },
        {
          id: 'n4-l2-r5-q3',
          question: '前の日の夜からゴミを出してはいけない理由は何ですか。(Vì sao không được vứt từ tối hôm trước?)',
          options: ['雨が降るから', 'カラスや猫が散らかすから', '暗くて見えないから', '泥棒が来るから'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "前の日の夜からゴミを出してはいけません。カラスや野良猫が散らかしてしまいます。"',
        },
        {
          id: 'n4-l2-r5-q4',
          question: '粗大ゴミを捨てるとき、まず何をしなければなりませんか。(Khi vứt rác cồng kềnh phải làm gì trước?)',
          options: ['小さく切る', '電話で予約する', '夜中に捨てる', '近所の人にあげる'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "粗大ゴミは、電話で予約しないで集積所に捨ててはいけません。" (Phải gọi điện đặt trước).',
        },
        {
          id: 'n4-l2-r5-q5',
          question: '他の地域の人について、何が禁止されていますか。(Người ở vùng khác bị cấm điều gì?)',
          options: ['町を歩いてはいけない', 'ここにゴミを捨ててはいけない', '車を運転してはいけない', '挨拶してはいけない'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "他の地域の人がここにゴミを捨ててはいけません。"',
        },
        {
          id: 'n4-l2-r5-q6',
          question: 'Thông điệp cuối cùng của bài viết là gì?',
          options: [
            'Mỗi người chỉ nên tự lo việc của mình.',
            'Cùng nhau tuân thủ đúng nội quy để giữ khu phố luôn sạch đẹp (町を清潔に保つ).',
            'Không cần phân loại rác nữa.',
            'Thuê người dọn rác trả phí cao.',
          ],
          answerIndex: 1,
          explanation: 'Câu kết: "町を清潔に保つために、みんなでルールを正しく守りましょう。"',
        },
      ],
    },
  ],

  // ================= N4 BÀI 3 =================
  'n4-l3': [
    {
      id: 'n4-l3-r1',
      title: 'Bài đọc 1: Lời dặn của bác sĩ nha khoa (歯医者さんでの注意)',
      summary: 'Uống thuốc đúng liều, kiêng đồ ngọt và không được quên tái khám.',
      passageJp: `親知らずを抜いたあとの注意点をお話しします。
麻酔が切れるまで、熱いお茶を飲んだり、硬い食べ物を噛んだりしないでください。
今夜はお風呂に長く入らないでください。血が止まりにくくなりますから、シャワーだけで済ませてください。
痛むときは、我慢しないでこの痛み止めを飲んでください。
ただし、お薬は必ず食後に飲まなければなりません。空腹時に飲んではいけません。
また、明日の午前中にもう一度病院へ来なければなりません。
傷口を消毒しますから、予約の時間を絶対に忘れないでください。`,
      passageVi: `Tôi xin lưu ý các điều quan trọng sau khi nhổ răng khôn.
Cho đến khi hết thuốc tê, xin đừng uống trà nóng hay nhai thức ăn cứng.
Tối nay xin đừng ngâm bồn tắm quá lâu. Việc đó làm máu khó đông, vì thế chỉ nên tắm vòi sen nhanh.
Khi thấy đau, đừng chịu đựng một mình mà hãy uống viên thuốc giảm đau này.
Tuy nhiên, thuốc bắt buộc phải uống sau bữa ăn. Tuyệt đối không được uống lúc bụng đói.
Ngoài ra, sáng mai bạn bắt buộc phải quay lại bệnh viện thêm một lần nữa.
Chúng tôi cần sát trùng miệng vết thương, vì thế tuyệt đối không được quên giờ hẹn nhé.`,
      vocabFocus: ['飲まないで (đừng uống)', '入らないで (đừng vào)', '忘れないで (đừng quên)', '飲まなければなりません (phải uống)', '来なければなりません (phải đến)'],
      grammarFocus: ['〜ないでください (Xin đừng...)', '〜なければなりません (Bắt buộc phải...)'],
      questions: [
        {
          id: 'n4-l3-r1-q1',
          question: '麻酔が切れるまで何をしてはいけませんか。(Cho đến khi hết thuốc tê không được làm gì?)',
          options: ['寝てはいけない', '熱いお茶を飲んだり硬い物を噛んだりしてはいけない', '話してはいけない', '手を洗ってはいけない'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "麻酔が切れるまで、熱いお茶を飲んだり、硬い食べ物を噛んだりしないでください。"',
        },
        {
          id: 'n4-l3-r1-q2',
          question: '今夜お風呂についてどんな指示がありますか。(Tối nay có chỉ dẫn gì về việc tắm?)',
          options: ['湯船に長く浸かる', 'シャワーだけで済ませる', 'お風呂に入らない', 'サウナに行く'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "今夜はお風呂に長く入らないでください。...シャワーだけで済ませてください。"',
        },
        {
          id: 'n4-l3-r1-q3',
          question: '痛み止めのお薬はいつ飲まなければなりませんか。(Thuốc giảm đau bắt buộc uống khi nào?)',
          options: ['食前に飲む', '必ず食後に飲まなければならない', '寝る直前', 'お腹が空いたとき'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "ただし、お薬は必ず食後に飲まなければなりません。"',
        },
        {
          id: 'n4-l3-r1-q4',
          question: '明日の午前中にどこへ行かなければなりませんか。(Sáng mai bắt buộc phải đi đâu?)',
          options: ['市役所', 'もう一度病院へ行かなければならない', '学校', '薬局'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "また、明日の午前中にもう一度病院へ来なければなりません。"',
        },
        {
          id: 'n4-l3-r1-q5',
          question: '絶対に忘れてはいけないことは何ですか。(Điều tuyệt đối không được quên là gì?)',
          options: ['予約の時間', '薬の箱', '先生の電話番号', 'お金'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "傷口を消毒しますから、予約の時間を絶対に忘れないでください。"',
        },
        {
          id: 'n4-l3-r1-q6',
          question: 'Vì sao tối nay không được ngâm bồn tắm lâu?',
          options: [
            'Vì nước tắm quá lạnh.',
            'Vì máu sẽ khó đông nếu tuần hoàn máu tăng nhanh khi ngâm bồn (血が止まりにくくなりますから).',
            'Vì bồn tắm bị bẩn.',
            'Vì tốn tiền nước.',
          ],
          answerIndex: 1,
          explanation: 'Bác sĩ giải thích rõ: "血が止まりにくくなりますから、シャワーだけで済ませてください。"',
        },
      ],
    },
    {
      id: 'n4-l3-r2',
      title: 'Bài đọc 2: Hạn chót nộp đơn xin học bổng (奨学金申請の締め切り)',
      summary: 'Các giấy tờ bắt buộc phải hoàn thành và lời nhắc nhở không được nộp muộn.',
      passageJp: `留学生のみなさん、来学期の奨学金申請についてお知らせします。
申請したい人は、申請書に必要事項を黒のボールペンで記入しなければなりません。
鉛筆や消えるペンで書いてはいけません。
また、銀行の通帳のコピーと、成績証明書を一緒に提出しなければなりません。
書類に不備がある場合は受付できませんから、出す前によく確認してください。
申請の締め切りは来週の金曜日午後５時までです。
締め切りに絶対に遅れないでください。１分でも遅れたら、書類を受け取りません。
時間に余裕を持って事務室へ出してください。`,
      passageVi: `Thông báo đến các bạn lưu học sinh về việc nộp đơn xin học bổng cho kỳ học tới.
Những ai muốn đăng ký bắt buộc phải điền đầy đủ các mục thông tin bằng bút bi đen.
Không được viết bằng bút chì hay bút có mực tẩy xóa được.
Ngoài ra, các bạn bắt buộc phải nộp kèm bản sao sổ ngân hàng và bảng điểm học tập.
Hồ sơ bị thiếu sót sẽ không được tiếp nhận, vì vậy xin hãy kiểm tra cẩn thận trước khi nộp.
Hạn chót nhận hồ sơ là 5 giờ chiều thứ Sáu tuần tới.
Tuyệt đối xin đừng nộp trễ hạn. Chỉ cần muộn 1 phút, chúng tôi cũng sẽ không nhận hồ sơ.
Xin hãy nộp tới văn phòng khoa sớm hơn thời hạn để chủ động thời gian.`,
      vocabFocus: ['記入しなければなりません (phải điền)', '提出しなければなりません (phải nộp)', '遅れないで (đừng muộn)', '確認してください (hãy kiểm tra)'],
      grammarFocus: ['〜なければなりません', '〜ないでください'],
      questions: [
        {
          id: 'n4-l3-r2-q1',
          question: '申請書は何で書かなければなりませんか。(Đơn xin học bổng bắt buộc viết bằng gì?)',
          options: ['鉛筆', '赤ペン', '黒のボールペン', '消えるペン'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "申請書に必要事項を黒のボールペンで記入しなければなりません。"',
        },
        {
          id: 'n4-l3-r2-q2',
          question: '申請書と一緒に何を提出しなければなりませんか。(Phải nộp kèm những gì cùng với đơn?)',
          options: ['写真だけ', '通帳のコピーと成績証明書', 'パスポートの原本', '推薦状３通'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "銀行の通帳のコピーと、成績証明書を一緒に提出しなければなりません。"',
        },
        {
          id: 'n4-l3-r2-q3',
          question: '申請の締め切りはいつですか。(Hạn chót nộp đơn là khi nào?)',
          options: ['今週の金曜日', '来週の金曜日午後５時まで', '来週の日曜日', '月末まで'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "申請の締め切りは来週の金曜日午後５時までです。"',
        },
        {
          id: 'n4-l3-r2-q4',
          question: '締め切りに１分遅れた場合、どうなりますか。(Nếu nộp muộn 1 phút thì sao?)',
          options: ['受け取ってもらえる', '罰金を払えばいい', '書類を受け取らない', '翌週出せばいい'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "１分でも遅れたら、書類を受け取りません。"',
        },
        {
          id: 'n4-l3-r2-q5',
          question: '書類を出す前、何をしておかなければなりませんか。(Trước khi nộp hồ sơ phải làm gì?)',
          options: ['先生に見せる', '不備がないかよく確認する', '写真を撮る', 'コピーを友達にあげる'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "書類に不備がある場合は受付できませんから、出す前によく確認してください。"',
        },
        {
          id: 'n4-l3-r2-q6',
          question: 'Thông điệp chính mà văn phòng muốn nhắc nhở học sinh là gì?',
          options: [
            'Học sinh không nên xin học bổng.',
            'Chuẩn bị đủ giấy tờ đúng quy định và tuyệt đối không được nộp trễ hạn.',
            'Chỉ cần nộp bản điểm là đủ.',
            'Có thể nộp qua thư điện tử không cần ký tên.',
          ],
          answerIndex: 1,
          explanation: 'Đoạn văn nhấn mạnh việc chuẩn bị đầy đủ tài liệu và không được muộn thời hạn quy định.',
        },
      ],
    },
    {
      id: 'n4-l3-r3',
      title: 'Bài đọc 3: Để quên ví tiền trên tàu điện (電車の中の落とし物)',
      summary: 'Thủ tục trình báo và tìm lại tài sản bị đánh rơi tại ga tàu.',
      passageJp: `昨日、大学から帰る途中の電車の中に財布を忘れてしまいました。
家に帰ってから気がついて、とても慌てました。
すぐに駅の窓口へ行って、駅員さんに相談しました。
駅員さんは「心配しないでください。見つかる可能性は高いですよ」と言ってくれました。
まず、遺失物届に財布の色や形、中身の金額を詳しく書かなければなりませんでした。
そして、身分証明書を見せなければなりませんでした。
１時間後、終点の駅で財布が無事に見つかったと連絡がありました。
お金もカードも全部無事でした。日本の治安の良さに本当に感謝しなければなりません。`,
      passageVi: `Hôm qua, trên đường từ trường đại học về nhà, tôi đã để quên chiếc ví trên tàu điện.
Về đến nhà tôi mới phát hiện ra và vô cùng hoảng sợ.
Tôi liền tức tốc chạy ra quầy quản lý ga để xin ý kiến của nhân viên ga.
Nhân viên ga ân cần bảo: "Bạn xin đừng quá lo lắng. Khả năng tìm lại được rất cao đấy."
Đầu tiên, tôi bắt buộc phải viết chi tiết vào tờ khai thất lạc về màu sắc, hình dáng chiếc ví và số tiền bên trong.
Sau đó, tôi bắt buộc phải xuất trình giấy tờ tùy thân.
Một tiếng sau, tôi nhận được liên lạc báo rằng chiếc ví đã được tìm thấy an toàn tại ga cuối.
Tiền bạc và thẻ ngân hàng đều còn nguyên vẹn. Thật lòng tôi phải cảm ơn sự an toàn và tốt đẹp của xã hội Nhật Bản.`,
      vocabFocus: ['心配しないで (đừng lo)', '書かなければなりませんでした (đã phải viết)', '見せなければなりませんでした (đã phải cho xem)', '感謝しなければなりません (phải cảm ơn)'],
      grammarFocus: ['〜ないでください', '〜なければなりません'],
      questions: [
        {
          id: 'n4-l3-r3-q1',
          question: 'わたしはどこに財布を忘れましたか。(Tôi đã để quên ví ở đâu?)',
          options: ['大学の教室', '電車の中', '駅のトイレ', 'コンビニ'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "昨日、大学から帰る途中の電車の中に財布を忘れてしまいました。"',
        },
        {
          id: 'n4-l3-r3-q2',
          question: '駅員さんはわたしに何と言いましたか。(Nhân viên ga đã nói gì để an ủi tôi?)',
          options: ['もう見つからないと言った', '「心配しないでください。見つかる可能性は高いですよ」', '怒った', '警察へ行けと言った'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "駅員さんは「心配しないでください。見つかる可能性は高いですよ」と言ってくれました。"',
        },
        {
          id: 'n4-l3-r3-q3',
          question: '遺失物届に何を書かなければなりませんでしたか。(Phải ghi những gì vào tờ khai đồ thất lạc?)',
          options: ['友達の名前', '財布の色や形、中身の金額', '明日の予定', '電車の番号だけ'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "遺失物届に財布の色や形、中身の金額を詳しく書かなければなりませんでした。"',
        },
        {
          id: 'n4-l3-r3-q4',
          question: '財布はどこで見つかりましたか。(Chiếc ví được tìm thấy ở đâu?)',
          options: ['大学の門の前', '終点の駅', 'ゴミ箱の中', '見つからなかった'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "１時間後、終点の駅で財布が無事に見つかったと連絡がありました。"',
        },
        {
          id: 'n4-l3-r3-q5',
          question: '財布の中身はどうでしたか。(Đồ đạc bên trong chiếc ví thế nào?)',
          options: ['お金だけなくなっていた', 'お金もカードも全部無事だった', 'カードが壊れていた', '空っぽだった'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "お金もカードも全部無事でした。"',
        },
        {
          id: 'n4-l3-r3-q6',
          question: 'Cảm nghĩ sâu sắc của người viết sau sự cố này là gì?',
          options: [
            'Sẽ không bao giờ đi tàu điện nữa.',
            'Cảm kích trước an ninh trật tự tuyệt vời của nước Nhật (治安の良さに感謝).',
            'Không cần mang theo ví khi ra ngoài.',
            'Nhân viên nhà ga làm việc quá chậm chạp.',
          ],
          answerIndex: 1,
          explanation: 'Câu kết bài: "日本の治安の良さに本当に感謝しなければなりません。"',
        },
      ],
    },
    {
      id: 'n4-l3-r4',
      title: 'Bài đọc 4: Biện pháp phòng chống dịch cúm mùa đông (インフルエンザ予防)',
      summary: 'Các biện pháp vệ sinh cần thiết để bảo vệ sức khỏe cho bản thân và tập thể.',
      passageJp: `冬になると、インフルエンザが流行します。
健康を守るために、日頃から予防対策を徹底しなければなりません。
外から帰ったら、すぐにうがいをして手を石鹸で丁寧に洗わなければなりません。
人混みに行くときは、マスクを忘れないで着用してください。
もし熱が出て体がだるいときは、無理をして学校や会社へ行ってはいけません。
周りの人に感染させないために、自宅で安静に休まなければなりません。
また、部屋が乾燥しないように、加湿器を置いたり窓を開けて換気したりしてください。
バランスのいい食事をしっかり取って、十分な睡眠を取りましょう。`,
      passageVi: `Khi mùa đông đến, dịch cúm rất dễ bùng phát.
Để bảo vệ sức khỏe, chúng ta bắt buộc phải triệt để thực hiện các biện pháp phòng ngừa hàng ngày.
Khi từ bên ngoài về nhà, bắt buộc phải súc họng ngay và rửa tay sạch sẽ bằng xà phòng.
Khi đến những nơi đông người, xin đừng quên đeo khẩu trang.
Nếu bị sốt và cơ thể mệt mỏi rã rời, tuyệt đối không được gượng ép đi học hoặc đi làm.
Để không lây lan mầm bệnh cho những người xung quanh, bạn bắt buộc phải nghỉ ngơi yên tĩnh tại nhà.
Ngoài ra, để phòng không bị khô hanh, xin hãy đặt máy tạo ẩm hoặc mở cửa sổ thông gió.
Hãy ăn uống đủ chất cân đối và ngủ đủ giấc nhé.`,
      vocabFocus: ['忘れないで (đừng quên)', '乾燥しないように (để không bị khô)', '洗わなければなりません (phải rửa)', '休まなければなりません (phải nghỉ)'],
      grammarFocus: ['〜ないでください', '〜なければなりません'],
      questions: [
        {
          id: 'n4-l3-r4-q1',
          question: '外から帰ったら、すぐに何をしなければなりませんか。(Từ ngoài về nhà phải làm gì ngay?)',
          options: ['テレビを見る', 'うがいをして手を丁寧に洗う', 'すぐにご飯を食べる', '寝る'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "外から帰ったら、すぐにうがいをして手を石鹸で丁寧に洗わなければなりません。"',
        },
        {
          id: 'n4-l3-r4-q2',
          question: '人混みに行くとき、何を忘れてはいけませんか。(Đến nơi đông người không được quên thứ gì?)',
          options: ['帽子', 'マスク', 'カメラ', '傘'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "人混みに行くときは、マスクを忘れないで着用してください。"',
        },
        {
          id: 'n4-l3-r4-q3',
          question: '熱が出て体がだるいとき、何をしてはいけませんか。(Khi bị sốt người mệt mỏi thì không được làm gì?)',
          options: ['薬を飲んではいけない', '無理をして学校や会社へ行ってはいけない', '水を飲んではいけない', '寝てはいけない'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "もし熱が出て体がだるいときは、無理をして学校や会社へ行ってはいけません。"',
        },
        {
          id: 'n4-l3-r4-q4',
          question: '部屋の乾燥を防ぐために、何をしますか。(Để phòng không bị khô hanh thì làm gì?)',
          options: ['ストーブを強くする', '加湿器を置いたり窓を開けて換気する', '電気を消す', 'ドアを閉め切る'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "加湿器を置いたり窓を開けて換気したりしてください。"',
        },
        {
          id: 'n4-l3-r4-q5',
          question: '病気にかからないために、生活面で何が大切ですか。(Để không mắc bệnh, phương diện sinh hoạt cần chú ý gì?)',
          options: ['甘い物だけ食べる', 'バランスのいい食事と十分な睡眠', '夜更かしする', '運動を全くしない'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "バランスのいい食事をしっかり取って、十分な睡眠を取りましょう。"',
        },
        {
          id: 'n4-l3-r4-q6',
          question: 'Vì sao khi bị sốt cúm bắt buộc phải nghỉ ngơi tại nhà?',
          options: [
            'Vì trường học không có chỗ ngồi.',
            'Để hồi phục sức khỏe và tránh lây nhiễm cho người xung quanh (周りの人に感染させないため).',
            'Vì không có phương tiện đi lại.',
            'Vì được nghỉ làm có lương.',
          ],
          answerIndex: 1,
          explanation: 'Đoạn văn nêu rõ: "周りの人に感染させないために、自宅で安静に休まなければなりません。"',
        },
      ],
    },
    {
      id: 'n4-l3-r5',
      title: 'Bài đọc 5: Quy định đóng gói hành lý trước chuyến bay (飛行機の荷物準備)',
      summary: 'Những vật phẩm bắt buộc ký gửi và những đồ vật không được mang lên máy bay.',
      passageJp: `国際線を利用するお客様へ、手荷物の準備についてご案内します。
保安検査をスムーズに進めるために、ルールを守らなければなりません。
ハサミやカッターナイフなどの刃物は、絶対に機内に持ち込んではいけません。必ずスーツケースに入れて預けなければなりません。
一方、ライターやモバイルバッテリーは預け入れ荷物の中に入れないでください。
バッテリーは発火の危険がありますから、必ず手荷物として機内へ持って入らなければなりません。
また、１００ミリリットルを超える液体物は機内へ持ち込めません。
空港で慌てないように、荷物を詰める前に航空会社の規定をよく確認してください。`,
      passageVi: `Kính gửi quý hành khách sử dụng các chuyến bay quốc tế, thông báo về việc chuẩn bị hành lý.
Để quá trình kiểm tra an ninh diễn ra thuận lợi, quý khách bắt buộc phải tuân thủ các quy định.
Các vật dụng sắc nhọn như kéo hoặc dao rọc giấy tuyệt đối không được mang theo lên khoang máy bay. Quý khách bắt buộc phải để vào vali ký gửi.
Ngược lại, bật lửa hoặc pin sạc dự phòng xin quý khách đừng cho vào trong hành lý ký gửi.
Pin sạc có nguy cơ cháy nổ, do đó quý khách bắt buộc phải mang theo bên mình dưới dạng hành lý xách tay lên máy bay.
Ngoài ra, các chất lỏng có dung tích vượt quá 100ml không thể mang lên khoang máy bay.
Để không bị lúng túng tại sân bay, xin hãy kiểm tra kỹ quy định của hãng hàng không trước khi đóng gói hành lý.`,
      vocabFocus: ['入れないで (đừng cho vào)', '慌てないように (để không lúng túng)', '守らなければなりません (phải tuân thủ)', '預けなければなりません (phải ký gửi)'],
      grammarFocus: ['〜ないでください', '〜なければなりません'],
      questions: [
        {
          id: 'n4-l3-r5-q1',
          question: 'ハサミやナイフはどのように運ばなければなりませんか。(Kéo và dao phải mang theo cách nào?)',
          options: ['ポケットに入れる', 'スーツケースに入れて預ける', '手に持つ', '機内の棚に置く'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "ハサミやカッターナイフなどの刃物は...必ずスーツケースに入れて預けなければなりません。"',
        },
        {
          id: 'n4-l3-r5-q2',
          question: 'モバイルバッテリーを預け入れ荷物に入れてはいけない理由は何ですか。(Vì sao pin dự phòng không được để vào hành lý ký gửi?)',
          options: ['重いから', '壊れやすいから', '発火の危険があるから', '高価だから'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "バッテリーは発火の危険がありますから、必ず手荷物として機内へ持って入らなければなりません。"',
        },
        {
          id: 'n4-l3-r5-q3',
          question: 'モバイルバッテリーはどのように持っていきますか。(Vậy pin sạc dự phòng phải mang theo cách nào?)',
          options: ['スーツケースに入れる', '必ず手荷物として機内へ持って入る', '空港で捨てる', '郵便で送る'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "必ず手荷物として機内へ持って入らなければなりません。"',
        },
        {
          id: 'n4-l3-r5-q4',
          question: '機内に持ち込めない液体物の量はどれですか。(Dung tích chất lỏng nào không được mang lên khoang máy bay?)',
          options: ['５０ミリリットル', '１００ミリリットル以下', '１００ミリリットルを超える液体物', '未開封の水'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "また、１００ミリリットルを超える液体物は機内へ持ち込めません。"',
        },
        {
          id: 'n4-l3-r5-q5',
          question: '空港で慌てないために、荷物を詰める前に何をしますか。(Để không bị lúng túng, trước khi xếp đồ phải làm gì?)',
          options: ['航空会社の規定をよく確認する', '友達に電話する', '何もしない', '空港へ早く行く'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "空港で慌てないように、荷物を詰める前に航空会社の規定をよく確認してください。"',
        },
        {
          id: 'n4-l3-r5-q6',
          question: 'Mục đích tối cao của việc kiểm tra hành lý an ninh hàng không là gì?',
          options: [
            'Thu thêm phí quá cước của hành khách.',
            'Đảm bảo an toàn tuyệt đối cho chuyến bay và tính mạng của hành khách.',
            'Kéo dài thời gian chờ đợi.',
            'Tịch thu đồ đạc của hành khách.',
          ],
          answerIndex: 1,
          explanation: 'Quy định an ninh hàng không nhằm phòng tránh cháy nổ và vũ khí đe dọa an toàn bay.',
        },
      ],
    },
  ],

  // ================= N4 BÀI 4 =================
  'n4-l4': [
    {
      id: 'n4-l4-r1',
      title: 'Bài đọc 1: Buổi hòa nhạc từ thiện tại trường (チャリティコンサート)',
      summary: 'Các sinh viên trổ tài biểu diễn piano, ca hát trước giờ diễn ra hội chợ.',
      passageJp: `来月の文化祭で、留学生支援のためのチャリティコンサートが開かれます。
ステージでは、学生たちが得意な特技を披露します。
ベトナム人のアンさんはピアノを上手に弾くことができます。
ショパンの難しい曲を演奏する予定です。
また、韓国のキムさんは日本の歌謡曲を美しく歌うことができます。
本番の前に、みんなで毎日放課後に音楽室で練習しています。
チケットの収益は困っている学生に寄付されます。
誰でも自由に入場することができますから、ぜひ聴きに来てください。`,
      passageVi: `Tại lễ hội văn hóa tháng tới, một buổi hòa nhạc từ thiện hỗ trợ lưu học sinh sẽ được tổ chức.
Trên sân khấu, các bạn học sinh sẽ trổ tài các năng khiếu sở trường của mình.
Bạn An người Việt Nam có thể chơi đàn piano rất điêu luyện.
Bạn ấy dự định sẽ biểu diễn một bản nhạc cổ điển phức tạp của Chopin.
Ngoài ra, bạn Kim người Hàn Quốc có thể hát các bài ca khúc Nhật Bản rất truyền cảm.
Trước khi buổi biểu diễn chính thức diễn ra, mọi người đều cùng nhau tập luyện mỗi ngày sau giờ học ở phòng âm nhạc.
Toàn bộ tiền bán vé sẽ được quyên góp cho các học sinh gặp khó khăn.
Bất kỳ ai cũng có thể tự do vào cửa, vì thế xin các bạn hãy đến thưởng thức nhé.`,
      vocabFocus: ['弾くことができます (có thể chơi đàn)', '歌うことができます (có thể hát)', '本番の前に (trước buổi biểu diễn chính)', '入場することができます (có thể vào cửa)'],
      grammarFocus: ['〜ことができます (Có thể làm gì)', '〜まえに (Trước khi...)'],
      questions: [
        {
          id: 'n4-l4-r1-q1',
          question: 'コンサートは何のために開かれますか。(Buổi hòa nhạc được tổ chức nhằm mục đích gì?)',
          options: ['先生の送別のため', '留学生支援のため', '利益を稼ぐため', '試験のため'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "来月の文化祭で、留学生支援のためのチャリティコンサートが開かれます。"',
        },
        {
          id: 'n4-l4-r1-q2',
          question: 'アンさんは何をすることができますか。(Bạn An có thể làm được việc gì?)',
          options: ['ギターを弾くこと', 'ピアノを上手に弾くこと', 'ダンスをすること', 'ドラムを叩くこと'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "ベトナム人のアンさんはピアノを上手に弾くことができます。"',
        },
        {
          id: 'n4-l4-r1-q3',
          question: 'キムさんは何をすることができますか。(Bạn Kim có thể làm được gì?)',
          options: ['日本の歌謡曲を美しく歌うこと', '料理を作ること', '絵を描くこと', 'フルートを吹くこと'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "韓国のキムさんは日本の歌謡曲を美しく歌うことができます。"',
        },
        {
          id: 'n4-l4-r1-q4',
          question: '本番の前に、学生たちはどこで練習していますか。(Trước buổi diễn, các bạn tập luyện ở đâu?)',
          options: ['体育館', '教室', '音楽室', '自宅'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "本番の前に、みんなで毎日放課後に音楽室で練習しています。"',
        },
        {
          id: 'n4-l4-r1-q5',
          question: 'チケットのお金はどう使われますか。(Tiền vé sẽ được dùng vào việc gì?)',
          options: ['新しいピアノを買う', '困っている学生に寄付される', '先生の給料になる', '食事代にする'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "チケットの収益は困っている学生に寄付されます。"',
        },
        {
          id: 'n4-l4-r1-q6',
          question: 'Ai là người có thể đến xem buổi hòa nhạc này?',
          options: [
            'Chỉ riêng các học sinh trong trường.',
            'Bất kỳ ai cũng có thể tự do vào cửa (誰でも自由に入場できる).',
            'Chỉ những người biết chơi đàn piano.',
            'Chỉ các thầy cô giáo.',
          ],
          answerIndex: 1,
          explanation: 'Đoạn văn viết: "誰でも自由に入場することができますから、ぜひ聴きに来てください。"',
        },
      ],
    },
    {
      id: 'n4-l4-r2',
      title: 'Bài đọc 2: Kỹ năng bơi lội và an toàn dưới nước (水泳のスキルと安全)',
      summary: 'Luyện tập bơi lội cẩn thận trước khi ra tắm biển mùa hè.',
      passageJp: `子どもの頃、わたしは水が怖くて全然泳ぐことができませんでした。
しかし、スイミングスクールに通って、今ではクロールで５０メートル泳ぐことができます。
海やプールで泳ぐ前に、必ず準備運動をしなければなりません。
準備運動をしないで急に冷たい水に入ると、足がつったり心臓に負担がかかったりします。
また、食事の直後や体調が悪いときは泳いではいけません。
安全ルールを守れば、水泳は体を鍛える素晴らしいスポーツです。
今年の夏は、友達と一緒に沖縄の海でダイビングを体験するつもりです。`,
      passageVi: `Hồi còn nhỏ, tôi rất sợ nước và hoàn toàn không biết bơi.
Nhưng sau khi đi học tại câu lạc bộ bơi lội, giờ đây tôi đã có thể bơi trườn sấp được 50 mét.
Trước khi bơi ở biển hay bể bơi, bắt buộc phải khởi động cơ thể thật kỹ.
Nếu không khởi động mà đột ngột nhảy xuống làn nước lạnh, bạn có thể bị chuột rút hoặc gây áp lực cho tim.
Ngoài ra, ngay sau khi vừa ăn no hoặc khi người không khỏe thì tuyệt đối không được bơi.
Nếu tuân thủ các quy tắc an toàn, bơi lội là một môn thể thao tuyệt vời để rèn luyện cơ thể.
Mùa hè năm nay, tôi dự định sẽ cùng bạn bè trải nghiệm môn lặn biển ngắm san hô tại Okinawa.`,
      vocabFocus: ['泳ぐことができませんでした (đã không thể bơi)', '泳ぐことができます (có thể bơi)', '泳ぐ前に (trước khi bơi)', '準備運動 (bài khởi động)'],
      grammarFocus: ['〜ことができます', '〜まえに'],
      questions: [
        {
          id: 'n4-l4-r2-q1',
          question: '子どもの頃、わたしはどうでしたか。(Hồi nhỏ tôi như thế nào đối với môn bơi?)',
          options: ['水泳の選手だった', '水が怖くて全然泳げなかった', '毎日海で泳いでいた', '水が好きだった'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "子どもの頃、わたしは水が怖くて全然泳ぐことができませんでした。"',
        },
        {
          id: 'n4-l4-r2-q2',
          question: '今、わたしはどのくらい泳ぐことができますか。(Hiện tại tôi có thể bơi được bao xa?)',
          options: ['２５メートル', '５０メートル', '１００メートル', '泳げない'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "今ではクロールで５０メートル泳ぐことができます。"',
        },
        {
          id: 'n4-l4-r2-q3',
          question: '泳ぐ前に必ず何をしなければなりませんか。(Trước khi bơi bắt buộc phải làm gì?)',
          options: ['ご飯を食べる', '準備運動をする', '薬を飲む', '寝る'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "海やプールで泳ぐ前に、必ず準備運動をしなければなりません。"',
        },
        {
          id: 'n4-l4-r2-q4',
          question: '準備運動をしないで水に入ると、どうなる危険がありますか。(Không khởi động mà xuống nước có nguy cơ gì?)',
          options: ['足がつったり心臓に負担がかかる', '風邪をひく', 'お腹が空く', '眠くなる'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "準備運動をしないで急に冷たい水に入ると、足がつったり心臓に負担がかかったりします。"',
        },
        {
          id: 'n4-l4-r2-q5',
          question: '今年の夏、友達と何をするつもりですか。(Mùa hè năm nay dự định làm gì cùng bạn bè?)',
          options: ['山に登る', '沖縄の海でダイビングを体験する', 'スキーに行く', '家にいる'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "今年の夏は、友達と一緒に沖縄の海でダイビングを体験するつもりです。"',
        },
        {
          id: 'n4-l4-r2-q6',
          question: 'Quan điểm của tác giả về môn bơi lội là gì?',
          options: [
            'Là môn thể thao quá nguy hiểm không nên tập.',
            'Nếu tuân thủ các quy tắc an toàn, đây là môn thể thao rèn luyện cơ thể rất tuyệt vời.',
            'Chỉ có người lớn mới bơi được.',
            'Chỉ nên bơi ở sông hồ tự nhiên.',
          ],
          answerIndex: 1,
          explanation: 'Đoạn văn: "安全ルールを守れば、水泳は体を鍛える素晴らしいスポーツです。"',
        },
      ],
    },
    {
      id: 'n4-l4-r3',
      title: 'Bài đọc 3: Tự sửa chữa đồ gia dụng trong nhà (家具や家電の修理)',
      summary: 'Học cách tự sửa chữa vật dụng hỏng trước khi quyết định vứt bỏ mua mới.',
      passageJp: `わたしの父は器用な人で、壊れた家具や電化製品を自分で直すことができます。
昨日、使っていた扇風機が急に動かなくなりました。
わたしはすぐに捨てて新しい物を買おうとしましたが、父は「直せるかもしれないよ」と言いました。
父は修理する前に、まず電源プラグを抜いて、取扱説明書をよく読みました。
そしてドライバーを使って裏蓋を開けて、ホコリを綺麗に掃除しました。
すると、扇風機はまた静かに回り始めました。
物を大切に使うことの素晴らしさを父から学びました。`,
      passageVi: `Bố tôi là một người rất khéo tay, ông có thể tự mình sửa chữa những món đồ gỗ và thiết bị điện gia dụng bị hỏng.
Hôm qua, chiếc quạt máy tôi đang dùng bỗng nhiên ngừng quay.
Tôi định bụng sẽ vứt đi và mua chiếc mới, nhưng bố bảo: "Biết đâu vẫn sửa được đấy con."
Trước khi tiến hành sửa chữa, bố liền rút phích cắm điện ra trước tiên, rồi đọc kỹ sách hướng dẫn sử dụng.
Sau đó, ông dùng tuốc nơ vít mở nắp lưng ra và lau chùi sạch sẽ lớp bụi bẩn bám bên trong.
Thế là chiếc quạt máy lại bắt đầu quay êm ru như mới.
Tôi đã học được từ bố một bài học tuyệt vời về việc quý trọng và gìn giữ đồ đạc.`,
      vocabFocus: ['直すことができます (có thể sửa chữa)', '修理する前に (trước khi sửa chữa)', '動かなくなりました (đã ngừng hoạt động)', '大切に使う (dùng cẩn thận/quý trọng)'],
      grammarFocus: ['〜ことができます', '〜まえに'],
      questions: [
        {
          id: 'n4-l4-r3-q1',
          question: '父はどんな人ですか。(Bố tôi là người như thế nào?)',
          options: ['不器用な人', '壊れた物を自分で直すことができる器用な人', '怒りっぽい人', '無口な人'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "わたしの父は器用な人で、壊れた家具や電化製品を自分で直すことができます。"',
        },
        {
          id: 'n4-l4-r3-q2',
          question: '昨日、何が壊れましたか。(Hôm qua đồ vật gì bị hỏng?)',
          options: ['テレビ', '洗濯機', '扇風機', '冷蔵庫'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "昨日、使っていた扇風機が急に動かなくなりました。"',
        },
        {
          id: 'n4-l4-r3-q3',
          question: '修理する前に、父はまず何をしましたか。(Trước khi sửa, bố đã làm việc gì trước tiên?)',
          options: ['電源プラグを抜いて取扱説明書を読んだ', '新しい部品を買いに行った', '水をかけた', '友達に電話した'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "父は修理する前に、まず電源プラグを抜いて、取扱説明書をよく読みました。"',
        },
        {
          id: 'n4-l4-r3-q4',
          question: '扇風機はどうしてまた動くようになりましたか。(Vì sao chiếc quạt lại chạy lại được?)',
          options: ['新しいモーターに変えたから', '裏蓋を開けてホコリを綺麗に掃除したから', '叩いたから', '油を差したから'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "ドライバーを使って裏蓋を開けて、ホコリを綺麗に掃除しました。すると、扇風機はまた静かに回り始めました。"',
        },
        {
          id: 'n4-l4-r3-q5',
          question: 'わたしは父から何を学びましたか。(Tôi đã học được điều gì từ bố?)',
          options: ['物を大切に使うことの素晴らしさ', '新しい物をすぐ買うこと', '電器屋の場所', 'お金の稼ぎ方'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "物を大切に使うことの素晴らしさを父から学びました。"',
        },
        {
          id: 'n4-l4-r3-q6',
          question: 'Hành động rút phích cắm trước khi sửa chữa quạt điện có ý nghĩa gì?',
          options: [
            'Tiết kiệm điện sinh hoạt.',
            'Đảm bảo an toàn tuyệt đối tránh điện giật khi tháo mở thiết bị điện.',
            'Làm cho quạt nhanh nguội.',
            'Để dễ nhìn vào bên trong.',
          ],
          answerIndex: 1,
          explanation: 'Rút phích cắm trước khi tháo vỏ đồ điện là nguyên tắc an toàn cơ bản để tránh bị giật điện.',
        },
      ],
    },
    {
      id: 'n4-l4-r4',
      title: 'Bài đọc 4: Thi lấy bằng lái xe ở Nhật Bản (日本の運転免許試験)',
      summary: 'Các điều kiện và kỹ năng cần rèn luyện trước khi đăng ký sát hạch lái xe.',
      passageJp: `日本で自動車を運転するためには、運転免許を取得しなければなりません。
満１８歳以上の人は、自動車教習所に通って免許試験を受けることができます。
試験を受ける前に、学科試験と技能試験の勉強を一生懸命しなければなりません。
特に技能試験では、一時停止の標識や歩行者の安全確認がとても重視されます。
車を発進させる前に、必ずミラーを調節してシートベルトを締めなければなりません。
学科試験では９０点以上取らなければ合格することができません。
厳しい試験ですが、免許があれば休日に友達と遠くへドライブに行くことができます。`,
      passageVi: `Để có thể lái xe ô tô tại Nhật Bản, bạn bắt buộc phải thi đỗ giấy phép lái xe.
Những người từ đủ 18 tuổi trở lên có thể đăng ký học tại các trung tâm đào tạo lái xe để dự thi.
Trước khi bước vào kỳ thi, bạn bắt buộc phải ôn luyện chăm chỉ cả phần lý thuyết lẫn thực hành tay lái.
Đặc biệt trong phần thi thực hành, việc dừng xe đúng biển báo tạm dừng và kiểm tra an toàn cho người đi bộ được chấm điểm rất gắt gao.
Trước khi cho xe khởi hành, bắt buộc phải chỉnh gương chiếu hậu và thắt dây an toàn.
Ở bài thi lý thuyết, bạn bắt buộc phải đạt từ 90 điểm trở lên mới có thể đỗ.
Tuy là kỳ thi rất khắt khe, nhưng một khi đã có bằng lái, bạn có thể cùng bạn bè lái xe đi phượt tới những vùng đất xa xôi vào dịp cuối tuần.`,
      vocabFocus: ['受けることができます (có thể dự thi)', '合格することができません (không thể thi đỗ)', '試験を受ける前に (trước khi dự thi)', '車を発進させる前に (trước khi khởi hành xe)'],
      grammarFocus: ['〜ことができます', '〜まえに', '〜なければなりません'],
      questions: [
        {
          id: 'n4-l4-r4-q1',
          question: '日本で自動車免許試験を受けることができるのは何歳以上ですか。(Bao nhiêu tuổi trở lên có thể thi bằng lái xe ở Nhật?)',
          options: ['１６歳以上', '１８歳以上', '２０歳以上', '２２歳以上'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "満１８歳以上の人は、自動車教習所に通って免許試験を受けることができます。"',
        },
        {
          id: 'n4-l4-r4-q2',
          question: '試験を受ける前に何を勉強しなければなりませんか。(Trước khi thi phải học những gì?)',
          options: ['英語と数学', '学科試験と技能試験', '歴史と地理', '法律だけ'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "試験を受ける前に、学科試験と技能試験の勉強を一生懸命しなければなりません。"',
        },
        {
          id: 'n4-l4-r4-q3',
          question: '車を発進させる前に必ず何をしなければなりませんか。(Trước khi khởi hành xe bắt buộc phải làm gì?)',
          options: ['音楽をかける', 'ミラーを調節してシートベルトを締める', '窓を開ける', 'クラクションを鳴らす'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "車を発進させる前に、必ずミラーを調節してシートベルトを締めなければなりません。"',
        },
        {
          id: 'n4-l4-r4-q4',
          question: '学科試験で何点取らなければ合格できませんか。(Phần thi lý thuyết phải được mấy điểm mới đỗ?)',
          options: ['７０点以上', '８０点以上', '９０点以上', '１００点満点'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "学科試験では９０点以上取らなければ合格することができません。"',
        },
        {
          id: 'n4-l4-r4-q5',
          question: '免許を取得すると、どんなことができますか。(Có được bằng lái rồi thì có thể làm việc gì?)',
          options: ['休日に友達と遠くへドライブに行ける', '飛行機を操縦できる', '電車を運転できる', '仕事を休める'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "免許があれば休日に友達と遠くへドライブに行くことができます。"',
        },
        {
          id: 'n4-l4-r4-q6',
          question: 'Bài đọc nhận xét thế nào về kỳ thi bằng lái xe ở Nhật?',
          options: [
            'Rất dễ dàng, ai thi cũng đỗ ngay.',
            'Là kỳ thi nghiêm ngặt, đòi hỏi kiểm tra kỹ an toàn và đạt điểm lý thuyết cao.',
            'Không cần học thực hành.',
            'Chỉ người Nhật mới được phép thi.',
          ],
          answerIndex: 1,
          explanation: 'Đoạn văn nhấn mạnh: "厳しい試験ですが... 技能試験では安全確認が重視され、学科は９０点以上必要".',
        },
      ],
    },
    {
      id: 'n4-l4-r5',
      title: 'Bài đọc 5: Câu lạc bộ giao lưu đa ngôn ngữ (多言語交流クラブ)',
      summary: 'Các bạn trẻ rèn luyện khả năng nói ngoại ngữ trước khi đi du học.',
      passageJp: `毎週土曜日の午後、市民センターで多言語交流クラブの集まりがあります。
ここでは、日本語をはじめ、英語、中国語、ベトナム語を話すことができます。
参加者は外国へ留学する前に、現地の文化や言葉を予習するために来ています。
「留学する前に、日常会話をしっかり練習しておきたい」と参加者のマイさんは話していました。
互いの母語を教え合うことで、教科書に載っていない自然な表現を学ぶことができます。
言葉を通して世界中の人々と心を通わせることができるのは、本当に素晴らしい体験です。`,
      passageVi: `Chiều thứ Bảy hàng tuần, tại trung tâm văn hóa cộng đồng thành phố có buổi sinh hoạt của câu lạc bộ giao lưu đa ngôn ngữ.
Tại đây, các thành viên có thể giao tiếp bằng tiếng Nhật, tiếng Anh, tiếng Trung và tiếng Việt.
Nhiều người tham gia đến đây để chuẩn bị trước về văn hóa và ngôn ngữ trước khi lên đường đi du học nước ngoài.
Bạn Mai, một thành viên tham gia, chia sẻ: "Trước khi đi du học, mình muốn luyện tập thật vững vàng các mẫu câu giao tiếp hàng ngày."
Bằng việc cùng nhau dạy tiếng mẹ đẻ cho nhau, mọi người có thể học hỏi được những cách diễn đạt tự nhiên không có trong sách giáo khoa.
Có thể kết nối tâm hồn với bạn bè khắp năm châu thông qua ngôn ngữ thực sự là một trải nghiệm vô cùng tuyệt vời.`,
      vocabFocus: ['話すことができます (có thể nói)', '学ぶことができます (có thể học)', '心を通わせることができる (có thể thấu hiểu lòng nhau)', '留学する前に (trước khi đi du học)'],
      grammarFocus: ['〜ことができます', '〜まえに'],
      questions: [
        {
          id: 'n4-l4-r5-q1',
          question: '多言語交流クラブはいつどこで集まっていますか。(Câu lạc bộ đa ngôn ngữ sinh hoạt khi nào và ở đâu?)',
          options: ['毎週日曜日の朝、大学で', '毎週土曜日の午後、市民センターで', '金曜日の夜、カフェで', '毎月１回、公園で'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "毎週土曜日の午後、市民センターで多言語交流クラブの集まりがあります。"',
        },
        {
          id: 'n4-l4-r5-q2',
          question: 'クラブではどんな言葉を話すことができますか。(Ở câu lạc bộ có thể nói những ngôn ngữ nào?)',
          options: ['日本語だけ', '英語だけ', '日本語、英語、中国語、ベトナム語', 'フランス語だけ'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "日本語をはじめ、英語、中国語、ベトナム語を話すことができます。"',
        },
        {
          id: 'n4-l4-r5-q3',
          question: '参加者は何のためにここへ来ていますか。(Các thành viên đến đây nhằm mục đích gì?)',
          options: ['お菓子を食べるため', '留学する前に現地の文化や言葉を予習するため', '仕事を探すため', '寝るため'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "参加者は外国へ留学する前に、現地の文化や言葉を予習するために来ています。"',
        },
        {
          id: 'n4-l4-r5-q4',
          question: 'マイさんは留学する前に何をしておきたいと言いましたか。(Mai muốn chuẩn bị điều gì trước khi du học?)',
          options: ['旅行の計画を立てる', '日常会話をしっかり練習しておきたい', 'たくさん買い物をしたい', '仕事を辞めたい'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "「留学する前に、日常会話をしっかり練習しておきたい」と参加者のマイさんは話していました。"',
        },
        {
          id: 'n4-l4-r5-q5',
          question: '互いに母語を教え合うことで、何を学ぶことができますか。(Dạy tiếng mẹ đẻ cho nhau thì học được điều gì?)',
          options: ['教科書に載っていない自然な表現', '難しい文法用語', '古い歌', '試験の解き方だけ'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "互いの母語を教え合うことで、教科書に載っていない自然な表現を学ぶことができます。"',
        },
        {
          id: 'n4-l4-r5-q6',
          question: 'Điều tuyệt vời nhất mà câu lạc bộ mang lại cho các bạn trẻ là gì?',
          options: [
            'Được ăn uống miễn phí.',
            'Dùng ngôn ngữ để thấu hiểu và kết nối tâm hồn với mọi người khắp thế giới.',
            'Được cấp bằng tốt nghiệp.',
            'Không cần phải làm bài tập.',
          ],
          answerIndex: 1,
          explanation: 'Câu kết bài: "言葉を通して世界中の人々と心を通わせることができるのは、本当に素晴らしい体験です。"',
        },
      ],
    },
  ],

  // ================= N4 BÀI 5 =================
  'n4-l5': [
    {
      id: 'n4-l5-r1',
      title: 'Bài đọc 1: So sánh cuộc sống ở Tokyo và Osaka (東京と大阪の生活比較)',
      summary: 'So sánh mức sống, ẩm thực, văn hóa và mức độ tiện lợi giữa hai đô thị lớn.',
      passageJp: `東京と大阪は、どちらも日本を代表する大都市です。
家賃や物価は、大阪より東京のほうが高いです。
しかし、電車の路線網は東京のほうが大阪より複雑で発達しています。
人々の性格について、大阪の人のほうが東京の人より気さくで親しみやすいとよく言われます。
食べ物では、大阪のたこ焼きやお好み焼きは日本で一番有名です。
生活の便利さで比べると、どちらの街も非常に住みやすいですが、
静かな環境を好む人には、大都会より少し離れた郊外のほうが人気があります。`,
      passageVi: `Tokyo và Osaka đều là những đại đô thị tiêu biểu của Nhật Bản.
Giá thuê nhà và chi phí sinh hoạt ở Tokyo đắt đỏ hơn so với Osaka.
Tuy nhiên, mạng lưới các tuyến tàu điện ở Tokyo lại phức tạp và phát triển hơn so với Osaka.
Về tính cách con người, người ta thường nói người Osaka cởi mở, thân thiện và dễ gần hơn người Tokyo.
Về ẩm thực, món bánh bạch tuộc Takoyaki và bánh xèo Okonomiyaki của Osaka nổi tiếng số một ở Nhật Bản.
Khi so sánh về độ tiện lợi trong sinh hoạt, cả hai thành phố đều rất đáng sống,
nhưng với những người yêu thích môi trường yên tĩnh thì vùng ngoại ô hơi cách xa trung tâm lại được ưa chuộng hơn các đô thị sầm uất.`,
      vocabFocus: ['東京のほうが高い (Tokyo đắt hơn)', '大阪のほうが親しみやすい (Osaka thân thiện hơn)', '日本で一番有名 (nổi tiếng nhất nước Nhật)', '郊外のほうが人気がある (ngoại ô được chuộng hơn)'],
      grammarFocus: ['Aのほうが Bより 〜です', '〜で 一番 〜です'],
      questions: [
        {
          id: 'n4-l5-r1-q1',
          question: '家賃や物価はどちらのほうが高いですか。(Tiền thuê nhà và giá cả ở đâu đắt hơn?)',
          options: ['大阪のほうが高い', '東京のほうが高い', 'どちらも同じくらい', '京都のほうが高い'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "家賃や物価は、大阪より東京のほうが高いです。"',
        },
        {
          id: 'n4-l5-r2-q2',
          question: '電車の路線網はどちらのほうが発達していますか。(Mạng lưới tàu điện ở đâu phát triển hơn?)',
          options: ['大阪', '東京', '名古屋', '福岡'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "電車の路線網は東京のほうが大阪より複雑で発達しています。"',
        },
        {
          id: 'n4-l5-r1-q3',
          question: '大阪の人の性格について、何と言われていますか。(Về tính cách người Osaka, thường được nhận xét thế nào?)',
          options: ['冷たい', '静かで内気', '気さくで親しみやすい', '怒りっぽい'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "大阪の人のほうが東京の人より気さくで親しみやすいとよく言われます。"',
        },
        {
          id: 'n4-l5-r1-q4',
          question: '日本で一番有名な大阪の食べ物は何ですか。(Món ăn nào của Osaka nổi tiếng nhất Nhật Bản?)',
          options: ['寿司と天ぷら', 'たこ焼きやお好み焼き', 'ラーメンと餃子', 'うどん'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "食べ物では、大阪のたこ焼きやお好み焼きは日本で一番有名です。"',
        },
        {
          id: 'n4-l5-r1-q5',
          question: '静かな環境を好む人には、どちらのほうが人気がありますか。(Người thích yên tĩnh chuộng nơi nào hơn?)',
          options: ['大都会の真ん中', '大都会より少し離れた郊外', '駅のホーム', '空港'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "静かな環境を好む人には、大都会より少し離れた郊外のほうが人気があります。"',
        },
        {
          id: 'n4-l5-r1-q6',
          question: 'Kết luận chung của đoạn văn khi so sánh Tokyo và Osaka là gì?',
          options: [
            'Osaka dở hơn Tokyo về mọi mặt.',
            'Tokyo không thích hợp để sinh sống.',
            'Cả hai thành phố đều có nét đặc sắc riêng và đều rất tiện lợi, đáng sống.',
            'Người nước ngoài không nên đến hai nơi này.',
          ],
          answerIndex: 2,
          explanation: 'Đoạn văn phân tích thế mạnh của cả hai nơi: "生活の便利さで比べると、どちらの街も非常に住みやすい".',
        },
      ],
    },
    {
      id: 'n4-l5-r2',
      title: 'Bài đọc 2: Bốn mùa tươi đẹp của Nhật Bản (日本の四季の美しさ)',
      summary: 'Khám phá đặc trưng của xuân, hạ, thu, đông và mùa được du khách yêu thích nhất.',
      passageJp: `日本には春、夏、秋、冬の美しい四季があります。
夏はとても暑くて湿度が高いですが、冬は寒くて北国では雪がたくさん降ります。
暑い夏より、涼しい秋のほうが過ごしやすいです。
四季の中で、春が一番華やかで人気があります。
４月になると桜が一斉に咲いて、公園でお花見を楽しむ人々で賑わいます。
一方、紅葉が美しい秋も、春と同じくらい多くの観光客が訪れます。
自然の移り変わりを感じられることが、日本の生活で一番素晴らしい魅力です。`,
      passageVi: `Nhật Bản có bốn mùa xuân, hạ, thu, đông tươi đẹp rực rỡ.
Mùa hè rất nóng bức và độ ẩm cao, trong khi mùa đông lạnh giá và miền bắc tuyết rơi rất dày.
So với mùa hè oi ả, mùa thu mát mẻ dễ chịu hơn nhiều.
Trong bốn mùa, mùa xuân là mùa rực rỡ và được yêu thích nhất.
Cứ vào tháng Tư, hoa anh đào nở rộ đồng loạt, công viên tấp nập người dân đến ngắm hoa thưởng xuân.
Mặt khác, mùa thu với sắc lá phong đỏ tuyệt mỹ cũng thu hút lượng du khách đông đảo không kém gì mùa xuân.
Có thể cảm nhận được sự luân chuyển kỳ diệu của thiên nhiên chính là nét quyến rũ tuyệt vời nhất của cuộc sống tại Nhật Bản.`,
      vocabFocus: ['秋のほうが過ごしやすい (mùa thu dễ chịu hơn)', '春が一番華やか (mùa xuân rực rỡ nhất)', '一番素晴らしい魅力 (sức hút tuyệt vời nhất)'],
      grammarFocus: ['Aのほうが Bより 〜です', '〜で 一番 〜です'],
      questions: [
        {
          id: 'n4-l5-r2-q1',
          question: '夏と秋では、どちらのほうが過ごしやすいですか。(Mùa hè và mùa thu, mùa nào dễ chịu hơn?)',
          options: ['夏のほうが過ごしやすい', '涼しい秋のほうが過ごしやすい', '冬のほうがいい', 'どちらも同じ'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "暑い夏より、涼しい秋のほうが過ごしやすいです。"',
        },
        {
          id: 'n4-l5-r2-q2',
          question: '四季の中で、どの季節が一番華やかで人気がありますか。(Trong bốn mùa, mùa nào rực rỡ và được yêu thích nhất?)',
          options: ['春', '夏', '秋', '冬'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "四季の中で、春が一番華やかで人気があります。"',
        },
        {
          id: 'n4-l5-r2-q3',
          question: '４月に公園が賑わう理由は何ですか。(Vì sao công viên lại đông đúc nhộn nhịp vào tháng Tư?)',
          options: ['雪が降るから', '桜が一斉に咲いてお花見を楽しむから', '花火大会があるから', '海で泳げるから'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "４月になると桜が一斉に咲いて、公園でお花見を楽しむ人々で賑わいます。"',
        },
        {
          id: 'n4-l5-r2-q4',
          question: '秋の観光の魅力は何ですか。(Sức hút du lịch của mùa thu là gì?)',
          options: ['美しい紅葉', 'プールの開放', 'スキー', '台風'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "一方、紅葉が美しい秋も、春と同じくらい多くの観光客が訪れます。"',
        },
        {
          id: 'n4-l5-r2-q5',
          question: '日本の生活で一番素晴らしい魅力は何ですか。(Nét quyến rũ tuyệt vời nhất của cuộc sống ở Nhật là gì?)',
          options: ['物価が安いこと', '自然の移り変わりを感じられること', '電車が混んでいること', '毎日仕事ができること'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "自然の移り変わりを感じられることが、日本の生活で一番素晴らしい魅力です。"',
        },
        {
          id: 'n4-l5-r2-q6',
          question: 'Thời tiết mùa đông ở miền bắc Nhật Bản có đặc điểm gì?',
          options: [
            'Nóng và khô hanh.',
            'Rất lạnh và tuyết rơi rất nhiều (寒くて雪がたくさん降る).',
            'Hoa anh đào nở rộ.',
            'Mưa rào liên tục.',
          ],
          answerIndex: 1,
          explanation: 'Đoạn văn nêu rõ: "冬は寒くて北国では雪がたくさん降ります。"',
        },
      ],
    },
    {
      id: 'n4-l5-r3',
      title: 'Bài đọc 3: Lựa chọn phương tiện đi du lịch Kyoto (京都旅行の乗り物選び)',
      summary: 'So sánh chi phí, thời gian và sự thoải mái giữa Shinkansen, máy bay và xe buýt đêm.',
      passageJp: `東京から京都へ行くとき、どの乗り物が一番いいでしょうか。
新幹線は飛行機より空港までの移動時間が短くて、とても便利です。
東京駅から京都駅まで約２時間２０分で行くことができます。
しかし、新幹線は夜行バスより料金がずっと高いです。
夜行バスのほうが新幹線より時間はかかりますが、費用は一番安いです。
ですから、時間を節約したい人には新幹線のほうが向いています。
お金を節約したい学生には、夜行バスのほうが人気があります。
自分のスケジュールと予算に合わせて、最適な交通手段を選ぶことが大切です。`,
      passageVi: `Khi đi từ Tokyo đến Kyoto, phương tiện nào là tốt nhất?
Tàu siêu tốc Shinkansen so với máy bay thì tiết kiệm được thời gian di chuyển ra sân bay nên rất tiện lợi.
Từ ga Tokyo đến ga Kyoto chỉ mất khoảng 2 tiếng 20 phút.
Tuy nhiên, Shinkansen lại có giá vé đắt hơn nhiều so với xe buýt đêm.
Xe buýt đêm tuy mất nhiều thời gian hơn Shinkansen nhưng chi phí lại là rẻ nhất.
Vì thế, với những ai muốn tiết kiệm thời gian thì Shinkansen phù hợp hơn.
Còn với các bạn học sinh sinh viên muốn tiết kiệm tiền bạc thì xe buýt đêm lại được ưa chuộng hơn.
Điều quan trọng là phải biết căn cứ vào lịch trình và ngân sách của bản thân để chọn phương tiện giao thông tối ưu nhất.`,
      vocabFocus: ['新幹線のほうが向いている (Shinkansen phù hợp hơn)', '夜行バスのほうが人気がある (xe buýt đêm được chuộng hơn)', '費用は一番安い (chi phí rẻ nhất)', '新幹線より高い (đắt hơn Shinkansen)'],
      grammarFocus: ['Aのほうが Bより 〜です', '〜で 一番 〜です'],
      questions: [
        {
          id: 'n4-l5-r3-q1',
          question: '新幹線は飛行機より何が良いですか。(Shinkansen tốt hơn máy bay ở điểm nào?)',
          options: ['料金が安い', '空港までの移動時間が短くて便利', '景色が見えない', '食事が無料'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "新幹線は飛行機より空港までの移動時間が短くて、とても便利です。"',
        },
        {
          id: 'n4-l5-r3-q2',
          question: '新幹線で東京駅から京都駅までどのくらいかかりますか。(Đi Shinkansen từ ga Tokyo đến ga Kyoto mất bao lâu?)',
          options: ['約１時間', '約２時間２０分', '約４時間', '一晩'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "東京駅から京都駅まで約２時間２０分で行くことができます。"',
        },
        {
          id: 'n4-l5-r3-q3',
          question: '費用が一番安い乗り物はどれですか。(Phương tiện nào có chi phí rẻ nhất?)',
          options: ['新幹線', '飛行機', '夜行バス', 'タクシー'],
          answerIndex: 2,
          explanation: 'Đoạn văn: "夜行バスのほうが新幹線より時間はかかりますが、費用は一番安いです。"',
        },
        {
          id: 'n4-l5-r3-q4',
          question: '時間を節約したい人には、どちらのほうが向いていますか。(Người muốn tiết kiệm thời gian hợp với xe nào hơn?)',
          options: ['新幹線のほうが向いている', '夜行バスのほうが向いている', '歩くほうがいい', '自転車がいい'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "ですから、時間を節約したい人には新幹線のほうが向いています。"',
        },
        {
          id: 'n4-l5-r3-q5',
          question: '学生に夜行バスが人気な理由は何ですか。(Vì sao xe buýt đêm lại được học sinh sinh viên chuộng hơn?)',
          options: ['速いから', 'お金を節約できるから', '広いから', '昼間寝られるから'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "お金を節約したい学生には、夜行バスのほうが人気があります。"',
        },
        {
          id: 'n4-l5-r3-q6',
          question: 'Lời khuyên của tác giả khi chọn phương tiện di chuyển là gì?',
          options: [
            'Luôn luôn phải đi phương tiện đắt tiền nhất.',
            'Chọn phương tiện phù hợp dựa theo lịch trình và ngân sách của bản thân (スケジュールと予算に合わせて選ぶ).',
            'Không nên đi du lịch Kyoto.',
            'Chỉ nên đi bộ.',
          ],
          answerIndex: 1,
          explanation: 'Câu kết bài: "自分のスケジュールと予算に合わせて、最適な交通手段を選ぶことが大切です。"',
        },
      ],
    },
    {
      id: 'n4-l5-r4',
      title: 'Bài đọc 4: Bí quyết tiết kiệm chi tiêu khi sống một mình (一人暮らしの節約術)',
      summary: 'So sánh việc tự nấu ăn ở nhà và mua đồ ăn chế biến sẵn ngoài tiệm.',
      passageJp: `日本で一人暮らしを始めてから、お金の管理を真剣に考えるようになりました。
毎日の食費は、外食するより自炊するほうがずっと安いです。
スーパーで食材を買って自分で料理を作れば、外食の半分以下の費用で済みます。
また、近所のスーパーでは、夜８時以降になるとお弁当や総菜に割引シールが貼られます。
定価で買うより、２割引きや半額のときに買うほうがとてもお得です。
一か月の中で、食費が一番大きな出費になりますから、
無駄遣いを減らして計画的にお金を使うことが大切です。`,
      passageVi: `Kể từ khi bắt đầu sống tự lập một mình ở Nhật, tôi đã suy nghĩ rất nghiêm túc về việc quản lý tài chính cá nhân.
Tiền ăn uống mỗi ngày, nếu tự nấu nướng ở nhà thì rẻ hơn rất nhiều so với đi ăn ngoài hàng quán.
Nếu đi siêu thị mua nguyên liệu về tự nấu, chi phí chỉ tốn chưa tới một nửa so với ăn tiệm.
Hơn nữa, ở siêu thị gần nhà tôi, sau 8 giờ tối là các hộp cơm bento và thức ăn chế biến sẵn bắt đầu được dán tem giảm giá.
So với mua giá gốc, mua vào thời điểm giảm 20% hay giảm nửa giá thì tiết kiệm và có lợi hơn nhiều.
Trong một tháng, tiền ăn là khoản chi tiêu lớn nhất,
vì vậy việc cắt giảm chi tiêu hoang phí và sử dụng tiền bạc có kế hoạch là vô cùng quan trọng.`,
      vocabFocus: ['自炊するほうがずっと安い (tự nấu rẻ hơn nhiều)', '半額のときに買うほうがお得 (mua lúc giảm nửa giá hời hơn)', '食費が一番大きな出費 (tiền ăn là khoản chi lớn nhất)'],
      grammarFocus: ['Aのほうが Bより 〜です', '〜で 一番 〜です'],
      questions: [
        {
          id: 'n4-l5-r4-q1',
          question: '毎日の食費は、どちらのほうが安いですか。(Tiền ăn mỗi ngày, cách nào rẻ hơn?)',
          options: ['外食するほう', '自炊するほう', 'どちらも同じ', 'レストランで食べるほう'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "毎日の食費は、外食するより自炊するほうがずっと安いです。"',
        },
        {
          id: 'n4-l5-r4-q2',
          question: '自分で料理を作ると、費用はどのくらいで済みますか。(Tự nấu ăn thì chi phí tốn khoảng bao nhiêu?)',
          options: ['外食と同じくらい', '外食の半分以下の費用', '外食の２倍', '無料'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "自分で料理を作れば、外食の半分以下の費用で済みます。"',
        },
        {
          id: 'n4-l5-r4-q3',
          question: '夜８時以降にスーパーで何が起きますか。(Sau 8h tối ở siêu thị có điều gì diễn ra?)',
          options: ['店が閉まる', 'お弁当や総菜に割引シールが貼られる', '新しい野菜が入荷する', '値段が２倍になる'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "夜８時以降になるとお弁当や総菜に割引シールが貼られます。"',
        },
        {
          id: 'n4-l5-r4-q4',
          question: '一か月の中で、一番大きな出費は何ですか。(Trong một tháng, khoản chi lớn nhất là gì?)',
          options: ['本代', '食費', '交通費', '映画代'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "一か月の中で、食費が一番大きな出費になりますから..."',
        },
        {
          id: 'n4-l5-r4-q5',
          question: 'お金を節約するために、何が大切ですか。(Để tiết kiệm tiền, điều gì là quan trọng?)',
          options: ['何でも我慢してご飯を食べないこと', '無駄遣いを減らして計画的にお金を使うこと', '友達とお金を分けること', '高い服を買うこと'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "無駄遣いを減らして計画的にお金を使うことが大切です。"',
        },
        {
          id: 'n4-l5-r4-q6',
          question: 'Từ "自炊" (jisui) trong tiếng Nhật có nghĩa là gì?',
          options: [
            'Đi ăn nhà hàng sang trọng.',
            'Tự mua nguyên liệu về nấu ăn tại nhà.',
            'Đặt đồ ăn giao tận nơi.',
            'Ăn cơm miễn phí tại trường.',
          ],
          answerIndex: 1,
          explanation: '"自炊" (tự xuy) nghĩa là tự đi chợ nấu cơm ăn tại nhà.',
        },
      ],
    },
    {
      id: 'n4-l5-r5',
      title: 'Bài đọc 5: Mua hàng qua mạng và mua trực tiếp tại cửa hàng (ネット通販と実店舗)',
      summary: 'So sánh tính tiện lợi, giá cả và độ tin cậy giữa mua sắm online và mua tại shop.',
      passageJp: `最近、インターネットで買い物をする人が増えています。
ネット通販は、実店舗より商品の種類が豊富で、２４時間いつでも注文できます。
重い荷物も自宅まで届けてくれるので、店へ買いに行くより便利です。
しかし、洋服や靴は、ネットより実際の店で試着して買うほうが安心です。
写真と実物で色やサイズが違うことがあるからです。
価格の安さで比べると、ネット通販のほうが実店舗より安い場合が多いですが、
実際に手に取って品質を確かめられる点では、実店舗のほうが優れています。
商品によって賢く使い分けることが一番良い方法です。`,
      passageVi: `Dạo gần đây, số người mua sắm qua mạng Internet ngày càng gia tăng.
Mua hàng online so với mua tại cửa hàng thực tế thì chủng loại hàng hóa phong phú hơn và có thể đặt hàng 24/24 vào bất kỳ lúc nào.
Những món hàng cồng kềnh nặng nề cũng được giao tận nhà, nên tiện lợi hơn nhiều so với việc phải tự đến cửa hàng vác về.
Tuy nhiên, đối với quần áo hay giày dép, thử trực tiếp tại cửa hàng rồi mới mua sẽ an tâm hơn nhiều so với mua qua mạng.
Bởi vì đôi khi màu sắc hay kích cỡ thực tế có thể khác biệt so với trên ảnh quảng cáo.
Khi so sánh về độ rẻ của giá cả, mua sắm qua mạng thường rẻ hơn tại cửa hàng,
nhưng ở khía cạnh có thể tận tay cầm nắm và kiểm tra chất lượng thì cửa hàng thực tế lại vượt trội hơn.
Biết phân biệt và lựa chọn thông minh tùy theo từng loại sản phẩm chính là phương pháp mua sắm tốt nhất.`,
      vocabFocus: ['実店舗より便利 (tiện hơn cửa hàng thực tế)', '店で買うほうが安心 (mua ở tiệm an tâm hơn)', '実店舗のほうが優れている (cửa hàng vượt trội hơn)', '一番良い方法 (phương pháp tốt nhất)'],
      grammarFocus: ['Aのほうが Bより 〜です', '〜で 一番 〜です'],
      questions: [
        {
          id: 'n4-l5-r5-q1',
          question: 'ネット通販のメリットは何ですか。(Ưu điểm của mua sắm online là gì?)',
          options: ['種類が豊富で自宅まで届けてくれる', '店員とおしゃべりできる', '現金しか使えない', '値切ることができる'],
          answerIndex: 0,
          explanation: 'Đoạn văn: "ネット通販は、実店舗より商品の種類が豊富で...重い荷物も自宅まで届けてくれるので、店へ買いに行くより便利です。"',
        },
        {
          id: 'n4-l5-r5-q2',
          question: '洋服や靴はどちらで買うほうが安心ですか。(Quần áo và giày dép mua ở đâu thì an tâm hơn?)',
          options: ['ネット通販', '実際の店で試着して買うほう', '海外から取り寄せるほう', 'どちらでも同じ'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "しかし、洋服や靴は、ネットより実際の店で試着して買うほうが安心です。"',
        },
        {
          id: 'n4-l5-r5-q3',
          question: 'ネットで洋服を買うときのデメリットは何ですか。(Nhược điểm khi mua quần áo qua mạng là gì?)',
          options: ['届くのが遅すぎる', '写真と実物で色やサイズが違うことがある', '返品できない', '高すぎる'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "写真と実物で色やサイズが違うことがあるからです。"',
        },
        {
          id: 'n4-l5-r5-q4',
          question: '価格の安さはどちらのほうが安い場合が多いですか。(Về giá rẻ, nơi nào thường rẻ hơn?)',
          options: ['実店舗', 'ネット通販のほうが安い場合が多い', 'デパート', 'コンビニ'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "価格の安さで比べると、ネット通販のほうが実店舗より安い場合が多いですが..."',
        },
        {
          id: 'n4-l5-r5-q5',
          question: '実店舗の優れている点は何ですか。(Điểm vượt trội của cửa hàng thực tế là gì?)',
          options: ['２４時間営業なこと', '実際に手に取って品質を確かめられること', '誰にも会わないこと', '送料が高いこと'],
          answerIndex: 1,
          explanation: 'Đoạn văn: "実際に手に取って品質を確かめられる点では、実店舗のほうが優れています。"',
        },
        {
          id: 'n4-l5-r5-q6',
          question: 'Phương thức mua sắm tốt nhất theo tác giả là gì?',
          options: [
            'Chỉ mua đồ qua mạng, bỏ hẳn cửa hàng truyền thống.',
            'Tùy từng loại hàng hóa mà linh hoạt lựa chọn hình thức mua thông minh (商品によって賢く使い分ける).',
            'Không nên mua sắm gì cả.',
            'Chỉ mua đồ cũ.',
          ],
          answerIndex: 1,
          explanation: 'Câu kết bài: "商品によって賢く使い分けることが一番良い方法です。"',
        },
      ],
    },
  ],
}

