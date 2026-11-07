/**
 * Dữ liệu bài đọc hiểu cấp độ N2 (Thượng trung cấp)
 * Độ dài: 600 - 850 ký tự, bài luận phân tích kinh tế xã hội, xã luận, công nghệ, triết lý góc nhìn tác giả.
 * Chuẩn đề thi JLPT N2 chính thức.
 */

export const N2_READING_LESSONS = {
  // ================= N2 BÀI 1 =================
  'n2-l1': [
    {
      id: 'n2-l1-r1',
      title: 'Bài đọc 1: 少子高齢化の加速に伴う社会保障制度の構造的転換 (Chuyển đổi cơ cấu hệ thống an sinh xã hội cùng với sự gia tăng tốc độ già hóa)',
      summary: 'Phân tích áp lực lên hệ thống an sinh xã hội, bảo hiểm y tế khi dân số già đi và sự cần thiết phải cải cách cơ cấu chi tiêu.',
      passageJp: `現代の日本社会が直面する最も根源的な課題の一つは、未曾有のスピードで進行する少子高齢化である。総人口に占める６５歳以上の高齢者の割合が上昇するに伴って、年金、医療、介護をはじめとする社会保障給付費は年々膨張を続けており、国の財政を強く圧迫している。

かつて高度経済成長期に構築された社会保障制度は、多数の若年現役世代が少数の高齢者を支える「ピラミッド型」の人口構造を前提として設計されたものであった。しかし、出生率の低下が長期化するに従って、現役世代の負担は限界に近づきつつある。保険料率の引き上げや税金の投入によって制度の延命を図るだけでは、若者の将来不安を払拭することは到底不可能である。

一方、高齢者側の状況に目を向けると、長寿化と医療技術の進歩に伴って、定年後も健康で活動的な意欲を持つ「アクティブシニア」が増加している事実も見逃せない。年齢だけで一律に「支えられる側」と決めつけるのではなく、意欲と能力のある高齢者が社会の担い手として活躍し続けられる仕組みを再構築することが急務である。

現実を冷静に直視した結果を踏まえ、世代間の不公平感を解消しつつ持続可能な制度へと抜本的な見直しを検討せざるを得ない段階に、日本社会は既に到達しているのである。`,
      passageVi: `Một trong những thách thức căn bản nhất mà xã hội Nhật Bản hiện đại đang phải đối mặt chính là tình trạng già hóa và suy giảm tỷ lệ sinh đang diễn tiến với tốc độ chưa từng có tiền lệ. Cùng với việc tỷ lệ người cao tuổi từ 65 tuổi trở lên chiếm trong tổng dân số không ngừng gia tăng, các khoản chi trả an sinh xã hội bao gồm lương hưu, y tế, điều dưỡng chăm sóc đang tiếp tục phình to qua từng năm, gây sức ép nặng nề lên nền tài chính quốc gia.

Hệ thống an sinh xã hội được kiến tạo trong thời kỳ tăng trưởng kinh tế thần kỳ trước đây vốn được thiết kế dựa trên tiền đề cấu trúc dân số "hình kim tự tháp" - nơi thế hệ lao động trẻ tuổi đông đảo cùng gánh vác số ít người già. Thế nhưng, theo sự kéo dài triền miên của tỷ lệ sinh sụt giảm, gánh nặng của thế hệ lao động đang tiến sát tới ngưỡng giới hạn. Nếu chỉ trông chờ vào việc kéo dài tuổi thọ của chế độ bằng cách tăng tỷ lệ đóng bảo hiểm hoặc rót thêm tiền thuế, thì hoàn toàn không thể nào xua tan được nỗi bất an về tương lai của giới trẻ.

Mặt khác, khi hướng mắt về tình cảnh của phía người cao tuổi, không thể bỏ qua thực tế rằng cùng với việc tuổi thọ gia tăng và công nghệ y học tiến bộ, số lượng "người cao tuổi năng động" có sức khỏe và ý chí cống hiến sau khi nghỉ hưu đang ngày càng tăng. Thay vì chỉ căn cứ vào tuổi tác để áp đặt một cách cứng nhắc họ là "bên được nuôi dưỡng", việc tái cấu trúc cơ chế để những người cao tuổi có năng lực và nhiệt huyết tiếp tục tỏa sáng với tư cách là người gánh vác xã hội là nhiệm vụ cấp bách.

Dựa trên kết quả nhìn nhận thực tế một cách tỉnh táo, xã hội Nhật Bản đã thực sự bước tới giai đoạn buộc phải xem xét cải tổ triệt để hướng tới một hệ thống bền vững song hành với việc xóa bỏ sự bất công giữa các thế hệ.`,
      vocabFocus: ['従って (theo đó/vì vậy)', '一方 (mặt khác)', '結果 (kết quả)', '事実 (sự thật)', '検討 (xem xét/nghiên cứu)', '状況 (tình hình)'],
      grammarFocus: ['〜に従って (càng... càng / tuân theo)', '〜に伴って (cùng với / song hành cùng sự biến đổi của)'],
      questions: [
        {
          id: 'n2-l1-r1-q1',
          question: '現在の社会保障給付費が膨張している根本的な原因は何ですか。(Nguyên nhân căn bản khiến chi trả an sinh xã hội phình to là gì?)',
          options: [
            '外国からの移民が急激に流入したこと',
            '６５歳以上の高齢者の割合が上昇し少子高齢化が進行していることに伴うもの',
            '病院の治療費が全国で１０倍に値上げされたこと',
            '年金の受給開始年齢が２０歳に引き下げられたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu rõ: "高齢者の割合が上昇するに伴って、年金、医療、介護をはじめとする社会保障給付費は年々膨張を続けており..."',
        },
        {
          id: 'n2-l1-r1-q2',
          question: 'かつての社会保障制度はどのような前提で設計されていましたか。(Hệ thống an sinh xã hội xưa kia được thiết kế trên tiền đề nào?)',
          options: [
            '全国民が自給自足の生活を営むこと',
            '多数の若年現役世代が少数の高齢者を支えるピラミッド型の人口構造',
            '高齢者が全員海外へ移住すること',
            '税金を一切徴収しないこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "多数の若年現役世代が少数の高齢者を支える「ピラミッド型」の人口構造を前提として設計されたものであった。"',
        },
        {
          id: 'n2-l1-r1-q3',
          question: '「出生率の低下が長期化するに従って」の「に従って」の文法的なニュアンスは何ですか。(Sắc thái của "に従って" trong câu là gì?)',
          options: [
            'Chỉ một sự biến đổi song song tỷ lệ thuận: tỷ lệ sinh càng giảm lâu thì gánh nặng thế hệ trẻ càng tăng sát giới hạn',
            'Tuân theo mệnh lệnh của cấp trên',
            'Chỉ nguyên nhân không liên quan đến kết quả',
            'Lời khuyên nên sinh thêm con',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜に従って biểu thị sự biến đổi tương liên theo thời gian hoặc quy mô (A biến đổi kéo theo B biến đổi tương ứng).',
        },
        {
          id: 'n2-l1-r1-q4',
          question: '高齢者側の見逃せない「事実」として筆者が指摘しているのはどれですか。(Sự thật không thể bỏ qua ở người cao tuổi mà tác giả chỉ ra là gì?)',
          options: [
            '全員が認知症にかかっていること',
            '健康で活動的な意欲を持つ「アクティブシニア」が増加していること',
            '年金の受給を全員が拒否していること',
            '仕事を探している高齢者が一人もいないこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "定年後も健康で活動的な意欲を持つ「アクティブシニア」が増加している事実も見逃せない。"',
        },
        {
          id: 'n2-l1-r1-q5',
          question: '高齢者に対する社会の仕組みとして筆者が提案している方向性は何ですか。(Định hướng cơ chế xã hội đối với người cao tuổi tác giả đề xuất là gì?)',
          options: [
            '年齢で一律に支えられる側と決めつけず、社会の担い手として活躍できる仕組みを再構築すること',
            '高齢者の医療費を全額自己負担にすること',
            '定年退職の年齢を４０歳に引き下げること',
            'すべての高齢者を専用の施設に隔離すること',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 3: "年齢だけで一律に「支えられる側」と決めつけるのではなく、意欲と能力のある高齢者が社会の担い手として活躍し続けられる仕組みを再構築することが急務である。"',
        },
        {
          id: 'n2-l1-r1-q6',
          question: '文章全体の結びとして筆者が述べている日本社会の状況は何ですか。(Tình cảnh xã hội Nhật Bản được tác giả đúc kết cuối bài là gì?)',
          options: [
            '現行の制度をそのまま放置しても自然に解決する',
            '世代間の不公平感を解消し、持続可能な制度への抜本的な見直しを検討せざるを得ない段階にある',
            '社会保障制度を完全に廃止すべきである',
            '若者の負担をさらに２倍に増やすべきである',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn cuối: "世代間の不公平感を解消しつつ持続可能な制度へと抜本的な見直しを検討せざるを得ない段階に、日本社会は既に到達しているのである。"',
        },
      ],
    },
    {
      id: 'n2-l1-r2',
      title: 'Bài đọc 2: 情報通信技術の高度化に伴うデジタル格差と孤立の構造 (Chênh lệch số hóa và cơ cấu cô lập song hành cùng sự nâng cấp CNTT)',
      summary: 'Mặt trái của chuyển đổi số hóa hành chính và thương mại: nguy cơ bỏ rơi những người yếu thế công nghệ.',
      passageJp: `あらゆる社会活動のオンライン化やスマートフォンの浸透に伴って、市民生活の利便性は飛躍的な向上を遂げた。行政手続きの電子申請やキャッシュレス決済、遠隔医療の実現など、物理的な制約を超えて瞬時に情報へアクセスできる恩恵は計り知れない。

しかし、社会全体の情報化が加速するに従って、機器の操作に不慣れな高齢者や経済的理由から最新端末を所有できない貧困層が、必要な社会的支援や公共サービスから事実上排除されてしまう「デジタル格差（デジタルデバイド）」が深刻な影を落としている。銀行の窓口縮小や役所のオンライン専用手続きの拡大は、デジタル弱者を孤立させる結果を招きかねない。

一方、技術の進化そのものを否定して過去のアナログ社会に逆行することは、国際的な競争力の観点からも現実的ではない。技術の効率性を追求する一方で、誰一人として取り残さない包括的な包摂支援が強く求められている。

自治体による丁寧なスマートフォン講習会の開催や、対面での手厚い相談窓口の併設など、国民の多様な状況に配慮した柔軟なインフラ整備を官民一体となって検討することが、真に成熟した情報社会の責務である。`,
      passageVi: `Song hành cùng việc chuyển đổi trực tuyến mọi hoạt động xã hội và sự thâm nhập của điện thoại thông minh, sự tiện lợi trong sinh hoạt của người dân đã gặt hái những bước nhảy vọt phi thường. Lợi ích từ việc có thể truy cập thông tin tức thì vượt qua mọi rào cản vật lý - như nộp hồ sơ thủ tục hành chính điện tử, thanh toán không tiền mặt hay khám chữa bệnh từ xa - là vô cùng to lớn không thể đong đếm.

Thế nhưng, tỷ lệ thuận với việc quá trình thông tin hóa toàn xã hội càng tăng tốc, "hố ngăn cách kỹ thuật số (digital divide)" - nơi những người cao tuổi chưa quen thao tác thiết bị hay các hộ gia đình nghèo không thể sở hữu máy móc hiện đại vì lý do kinh tế trên thực tế bị gạt ra ngoài các dịch vụ công và hỗ trợ xã hội thiết yếu - đang phủ bóng đen nghiêm trọng. Việc các ngân hàng thu hẹp quầy giao dịch và cơ quan công quyền mở rộng thủ tục chuyên dụng online rất có thể dẫn tới kết quả cô lập những người yếu thế công nghệ.

Mặt khác, việc phủ nhận chính sự tiến hóa của công nghệ để quay ngược lại xã hội tương tự (analog) trong quá khứ là điều hoàn toàn phi thực tế xét từ góc độ năng lực cạnh tranh quốc tế. Song song với việc theo đuổi tính hiệu suất của công nghệ, sự hỗ trợ bao hàm toàn diện không để bất kỳ ai bị bỏ lại phía sau đang được đòi hỏi mãnh liệt.

Việc chính quyền các địa phương tổ chức các buổi hướng dẫn dùng smartphone chu đáo, bố trí song song các quầy tư vấn trực tiếp ân cần, cùng nhau bàn thảo giữa nhà nước và tư nhân để hoàn thiện hạ tầng linh hoạt quan tâm tới hoàn cảnh đa dạng của người dân chính là thiên chức của một xã hội thông tin thực sự trưởng thành.`,
      vocabFocus: ['従って (theo đó/vì vậy)', '一方 (mặt khác)', '結果 (kết quả)', '事実 (sự thật)', '検討 (xem xét/nghiên cứu)', '状況 (tình hình)'],
      grammarFocus: ['〜に従って (càng... càng / tuân theo)', '〜に伴って (cùng với / song hành cùng sự biến đổi của)'],
      questions: [
        {
          id: 'n2-l1-r2-q1',
          question: 'オンライン化の進展に伴って実現した利便性として書かれているのはどれですか。(Tiện ích thành hiện thực cùng với trực tuyến hóa là gì?)',
          options: [
            '全国民に無料でスマートフォンが配給されたこと',
            '電子申請、キャッシュレス決済、遠隔医療など情報への瞬時アクセス',
            '紙の本や書類が完全にこの世から消えたこと',
            '銀行の金利が１００％になったこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "行政手続きの電子申請やキャッシュレス決済、遠隔医療の実現など、物理的な制約を超えて瞬時に情報へアクセスできる恩恵は計り知れない。"',
        },
        {
          id: 'n2-l1-r2-q2',
          question: '情報化の加速に従って深刻化している問題は何ですか。(Vấn đề trầm trọng dần theo sự tăng tốc thông tin hóa là gì?)',
          options: [
            'スマートフォンの充電器が売れなくなること',
            '高齢者や困窮層が公共サービス等から排除される「デジタル格差」',
            'インターネットの回線速度が毎秒遅くなること',
            '対面での会話を禁止する法律が制定されたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "機器の操作に不慣れな高齢者や経済的理由から最新端末を所有できない貧困層が、必要な社会的支援や公共サービスから事実上排除されてしまう「デジタル格差」が深刻な影を落としている。"',
        },
        {
          id: 'n2-l1-r2-q3',
          question: '「デジタル弱者を孤立させる結果を招きかねない」の「かねない」のニュアンスは何ですか。(Sắc thái của "かねない" trong câu là gì?)',
          options: [
            'Chỉ một nguy cơ, hiểm họa xấu rất có khả năng sẽ xảy ra nếu không chú ý',
            'Khẳng định chắc chắn việc đó sẽ không bao giờ diễn ra',
            'Lời khen ngợi kết quả tốt đẹp',
            'Thể hiện sự bất lực không thể làm được gì',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 V-masu (bỏ masu) + かねない biểu thị một dự cảm, khả năng dẫn tới hậu quả tiêu cực.',
        },
        {
          id: 'n2-l1-r2-q4',
          question: '筆者は過去のアナログ社会へ逆行することについてどう述べていますか。(Tác giả nhận xét thế nào về việc quay ngược lại xã hội analog?)',
          options: [
            '今すぐ全員が過去のアナログ生活に戻るべきである',
            '国際的な競争力の観点からも現実的ではない',
            'インターネットを法律で禁止することが最も望ましい',
            'アナログ社会の方が経済成長率が高い',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "技術の進化そのものを否定して過去のアナログ社会に逆行することは、国際的な競争力の観点からも現実的ではない。"',
        },
        {
          id: 'n2-l1-r2-q5',
          question: '成熟した情報社会が果たすべき責務として筆者が求めていることは何ですか。(Trách nhiệm xã hội thông tin cần gánh vác là gì?)',
          options: [
            '高齢者へのスマートフォンの販売を停止すること',
            '講習会の開催や対面窓口の併設など、多様な状況に配慮した柔軟なインフラ整備を検討すること',
            'すべての手続きをAIだけで自動処理すること',
            '役所をすべて民営化すること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "講習会の開催や、対面での手厚い相談窓口の併設など、国民の多様な状況に配慮した柔軟なインフラ整備を官民一体となって検討することが、真に成熟した情報社会の責務である。"',
        },
        {
          id: 'n2-l1-r2-q6',
          question: 'この文章全体の主旨として最も適切なものはどれですか。(Ý chính toàn bài phù hợp nhất là gì?)',
          options: [
            'デジタル技術の発展は人間関係を破壊するだけである',
            '技術の効率性を進めつつも、デジタル弱者を孤立させない包括的な包摂支援が不可欠である',
            '行政の手続きはすべて紙の書類に戻すべきである',
            '若者は高齢者にスマートフォンの使い方を強制的に教える義務がある',
          ],
          answerIndex: 1,
          explanation: 'Bài viết phân tích lợi ích công nghệ song hành với nguy cơ đào thải số, kêu gọi phát triển công nghệ đi đôi với an sinh bao trùm.',
        },
      ],
    },
    {
      id: 'n2-l1-r3',
      title: 'Bài đọc 3: 地球環境の激変に伴う気候危機の現実と生態系の連鎖崩壊 (Thực tế khủng hoảng khí hậu và sự sụp đổ dây chuyền hệ sinh thái)',
      summary: 'Tác động sâu rộng của sự ấm lên toàn cầu tới hiện tượng tuyệt chủng loài và sự phụ thuộc sống còn của loài người vào tự nhiên.',
      passageJp: `産業革命以降の人類の経済活動に伴って、大気中の温室効果ガス濃度は観測史上例を見ない水準にまで跳ね上がった。地球全体の平均気温が上昇するに従って、極地方の氷床融解や海面上昇、世界規模での熱波や干ばつといった異常気象が日常化しつつある。

気候危機の影響は単なる気温上昇にとどまらない。海水温の上昇と海洋酸性化に伴って、海の熱帯雨林とも呼ばれるサンゴ礁の大規模な白化現象が発生し、海洋生物の４分の１が生息拠点を喪失しつつある事実が報告されている。陸上においても、植生の北上スピードが生態系の適応限界を超えた結果、多くの希少動植物が絶滅の危機に直面している。

生態系は無数の生物種が複雑に絡み合う緻密な連鎖によって成り立っている。一つの種の消失は、ドミノ倒しのように他の生物への連鎖的な打撃を招く恐れがある。人間もまた生態系の一部であり、食料供給や水資源、気候の安定を自然の恵みに完全に依存している状況を忘れてはならない。

人類が自らの行動を抜本的に見直さなければ、自然の回復力はその限界を超え、取り返しのつかない破滅的な結果をもたらすに違いない。`,
      passageVi: `Song hành cùng các hoạt động kinh tế của nhân loại kể từ sau cuộc Cách mạng Công nghiệp, nồng độ khí nhà kính trong bầu khí quyển đã nhảy vọt lên mức chưa từng thấy trong lịch sử quan trắc. Tỷ lệ thuận với việc nhiệt độ trung bình toàn cầu càng tăng cao, các hiện tượng thời tiết cực đoan như băng tan ở hai cực, nước biển dâng, các đợt nắng nóng kỷ lục và hạn hán trên quy mô toàn cầu đang dần trở thành chuyện thường nhật.

Tác động của khủng hoảng khí hậu không chỉ dừng lại ở sự gia tăng nhiệt độ đơn thuần. Cùng với sự gia tăng nhiệt độ nước biển và hiện tượng axit hóa đại dương, hiện tượng tẩy trắng san hô trên diện rộng - vốn được mệnh danh là rừng nhiệt đới của biển cả - đã xảy ra, và sự thật là 1/4 sinh vật biển đang dần mất đi nơi sinh sống đã được báo cáo. Ngay cả trên đất liền, do kết quả tốc độ dịch chuyển lên phía bắc của thảm thực vật vượt quá giới hạn thích nghi của hệ sinh thái, nhiều loài động thực vật quý hiếm đang phải đối mặt với nguy cơ tuyệt chủng.

Hệ sinh thái được tạo nên bởi một chuỗi liên kết tinh vi, đan xen phức tạp giữa vô vàn loài sinh vật. Sự biến mất của một loài có nguy cơ dẫn tới đòn giáng mang tính dây chuyền lên các sinh vật khác như hiệu ứng domino. Con người chúng ta cũng là một phần của hệ sinh thái, chúng ta không được phép lãng quên tình cảnh rằng nguồn cung lương thực, tài nguyên nước và sự ổn định khí hậu hoàn toàn phụ thuộc vào ân huệ của tự nhiên.

Nếu nhân loại không xem xét rà soát lại hành vi của chính mình một cách triệt để, sức phục hồi của tự nhiên sẽ vượt quá ngưỡng chịu đựng, chắc chắn sẽ mang lại những kết quả hủy diệt không thể cứu vãn.`,
      vocabFocus: ['従って (theo đó/vì vậy)', '一方 (mặt khác)', '結果 (kết quả)', '事実 (sự thật)', '検討 (xem xét/nghiên cứu)', '状況 (tình hình)'],
      grammarFocus: ['〜に従って (càng... càng / tuân theo)', '〜に伴って (cùng với / song hành cùng sự biến đổi của)'],
      questions: [
        {
          id: 'n2-l1-r3-q1',
          question: '大気中の温室効果ガス濃度が急上昇した背景は何ですか。(Bối cảnh nồng độ khí nhà kính tăng vọt là gì?)',
          options: [
            '火山噴火が世界中で毎日起きたこと',
            '産業革命以降の人類の経済活動に伴うもの',
            '海の生物が大量の二酸化炭素を排出したこと',
            '太陽の光が突然強くなったこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "産業革命以降の人類の経済活動に伴って、大気中の温室効果ガス濃度は観測史上例を見ない水準にまで跳ね上がった。"',
        },
        {
          id: 'n2-l1-r3-q2',
          question: 'サンゴ礁の白化現象が海洋生態系に与えている深刻な影響は何ですか。(Tác động nghiêm trọng của hiện tượng tẩy trắng san hô là gì?)',
          options: [
            '海の透明度が上がって観光客が増えたこと',
            '海洋生物の４分の１が生息拠点を喪失しつつあること',
            '魚の体がすべて白くなったこと',
            '海の塩分濃度がゼロになったこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "海の熱帯雨林とも呼ばれるサンゴ礁の大規模な白化現象が発生し、海洋生物の４分の１が生息拠点を喪失しつつある事実が報告されている。"',
        },
        {
          id: 'n2-l1-r3-q3',
          question: '「連鎖的な打撃を招く恐れがある」の「恐れがある」の意味は何ですか。(Nghĩa của "恐れがある" trong câu là gì?)',
          options: [
            'Có mối nguy hại, rủi ro tiêu cực đáng lo ngại có thể xảy ra',
            'Chắc chắn 100% không bao giờ xảy ra',
            'Cảm giác sợ hãi bóng tối của con người',
            'Lời đe dọa trực tiếp của kẻ thù',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜恐れがある diễn tả mối quan ngại về một nguy cơ, sự việc xấu có thể phát sinh trong tương lai.',
        },
        {
          id: 'n2-l1-r3-q4',
          question: '人間と生態系の関係について筆者はどのように強調していますか。(Tác giả nhấn mạnh mối quan hệ giữa con người và hệ sinh thái như thế nào?)',
          options: [
            '人間は自然を完全に支配できる神のような存在である',
            '人間も生態系の一部であり、食料や水、気候の安定を自然の恵みに完全に依存している',
            '人間は科学の力で宇宙へ移住できるので地球環境はどうでもよい',
            '人間だけが自然環境の影響を受けない特別な生物である',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "人間もまた生態系の一部であり、食料供給や水資源、気候の安定を自然の恵みに完全に依存している状況を忘れてはならない。"',
        },
        {
          id: 'n2-l1-r3-q5',
          question: '「気温が上昇するに従って、異常気象が日常化しつつある」の「に従って」の用法は何ですか。(Cách dùng "に従って" ở đây là gì?)',
          options: [
            'Chỉ sự biến đổi song song theo quy mô nhiệt độ tăng thì thời tiết cực đoan càng thường xuyên',
            'Tuân thủ mệnh lệnh khí tượng',
            'Chỉ nguyên nhân chủ quan',
            'Chỉ sự lựa chọn phương tiện',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜に従って biểu thị biến đổi tương ứng tỉ lệ thuận giữa hai vế.',
        },
        {
          id: 'n2-l1-r3-q6',
          question: 'この文章を通じて筆者が人類に強く求めていることは何ですか。(Điều tác giả kêu gọi nhân loại qua bài viết là gì?)',
          options: [
            '経済活動を２倍に拡大して工業化を加速すること',
            '自らの行動を抜本的に見直し、自然破壊に歯止めをかけること',
            'すべての海を干拓して農地に変えること',
            '絶滅しそうな生物をすべて博物館に剥製として保管すること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "人類が自らの行動を抜本的に見直さなければ、自然の回復力はその限界を超え、取り返しのつかない破滅的な結果をもたらすに違いない。"',
        },
      ],
    },
    {
      id: 'n2-l1-r4',
      title: 'Bài đọc 4: 産業構造の転換に伴う労働市場の地殻変動 (Chuyển dịch địa chấn của thị trường lao động cùng với tái cơ cấu ngành nghề)',
      summary: 'Sự trỗi dậy của tự động hóa và AI đòi hỏi người lao động phải tái đào tạo kỹ năng (reskilling) để không bị đào thải.',
      passageJp: `AIやロボティクス技術の急速な進化に伴って、世界の産業構造は過去にない大規模な転換期を迎えている。従来人間が担ってきた定型的な事務作業や製造現場の組立工程が自動化されるに従って、労働市場が求める人材像は根底から覆りつつある。

機械による代替が進む職種が存在する一方、データサイエンスやサイバーセキュリティ、あるいは高度な人間的共感力を必要とする対人ケア領域では、需要に対して供給が全く追いついていない状況にある。労働力の需要と供給のミスマッチが拡大した結果、失業率と求人倍率が同時に高止まりするという歪んだ現象が生じている。

このような激動の時代において、一度身につけたスキルだけで定年まで生き抜くことは不可能である。労働者には生涯を通じて新たな専門知識や技術を学び直す「リスキリング（学び直し）」の姿勢が強く求められている。

企業側も従業員を単なるコストとして削減するのではなく、能力開発への投資を積極化する検討が必要である。変化の荒波に即応して自己変革を続けられる人材と組織こそが、次代の成長を牽引する事実を認識すべきである。`,
      passageVi: `Song hành cùng sự tiến hóa nhanh chóng của công nghệ AI và người máy, cơ cấu ngành nghề toàn cầu đang đón nhận một giai đoạn chuyển đổi quy mô lớn chưa từng có. Tỷ lệ thuận với việc các nghiệp vụ giấy tờ văn phòng mang tính định hình lặp đi lặp lại hay các công đoạn lắp ráp tại hiện trường sản xuất vốn do con người đảm nhận trước đây bị tự động hóa, chân dung nguồn nhân lực mà thị trường lao động tìm kiếm đang bị đảo lộn từ tận gốc rễ.

Trong khi tồn tại những ngành nghề bị máy móc thay thế dần, thì ngược lại ở các lĩnh vực như khoa học dữ liệu, an ninh mạng hay các mảng chăm sóc người cần sự thấu cảm nhân văn cao độ, cung đang hoàn toàn không theo kịp cầu. Kết quả của việc gia tăng sự cọc cạch cọc lệch giữa cung và cầu lao động đã dẫn tới hiện tượng méo mó dị thường: tỷ lệ thất nghiệp và tỷ lệ tuyển dụng cùng neo ở mức cao đồng thời.

Trong một thời đại đầy biến động dữ dội như thế này, việc chỉ dựa vào kỹ năng tích lũy một lần để tồn tại đến tận lúc nghỉ hưu là điều không tưởng. Người lao động đang được đòi hỏi mãnh liệt phải có thái độ "tái đào tạo kỹ năng (reskilling)" - không ngừng học hỏi trau dồi tri thức và công nghệ chuyên môn mới trong suốt cả cuộc đời.

Về phía doanh nghiệp, thay vì xem nhân viên như một khoản chi phí đơn thuần cần cắt giảm, cũng cần xem xét chủ động đầu tư vào việc phát triển năng lực cho người lao động. Cần phải nhận thức rõ một sự thật rằng chính những nhân tài và tổ chức có thể tự biến đổi bản thân để thích ứng nhanh nhạy với những cơn sóng dữ của sự đổi thay mới là lực lượng dẫn dắt sự tăng trưởng của thời đại tiếp theo.`,
      vocabFocus: ['従って (theo đó/vì vậy)', '一方 (mặt khác)', '結果 (kết quả)', '事実 (sự thật)', '検討 (xem xét/nghiên cứu)', '状況 (tình hình)'],
      grammarFocus: ['〜に従って (càng... càng / tuân theo)', '〜に伴って (cùng với / song hành cùng sự biến đổi của)'],
      questions: [
        {
          id: 'n2-l1-r4-q1',
          question: '産業構造の大規模な転換をもたらしている直接の要因は何ですか。(Yếu tố trực tiếp mang lại sự chuyển dịch cơ cấu ngành nghề là gì?)',
          options: [
            '世界的な原材料価格の急落',
            'AIやロボティクス技術の急速な進化に伴うもの',
            '若者の働く意欲の完全な消失',
            '大企業の倒産が相次いだこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "AIやロボティクス技術の急速な進化に伴って、世界の産業構造は過去にない大規模な転換期を迎えている。"',
        },
        {
          id: 'n2-l1-r4-q2',
          question: '労働市場で人材の供給が追いついていない領域として挙げられているのはどれですか。(Lĩnh vực cung không kịp cầu được nhắc tới là gì?)',
          options: [
            '定型的な事務作業や単純な部品の組立工程',
            'データサイエンス、サイバーセキュリティ、高度な人間的共感力が必要な対人ケア領域',
            'チラシ配りや看板持ちのアルバイト',
            '紙の帳簿を整理する作業',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "データサイエンスやサイバーセキュリティ、あるいは高度な人間的共感力を必要とする対人ケア領域では、需要に対して供給が全く追いついていない..."',
        },
        {
          id: 'n2-l1-r4-q3',
          question: '需要と供給のミスマッチがもたらした歪んだ現象とは何ですか。(Hiện tượng méo mó do lệch pha cung cầu mang lại là gì?)',
          options: [
            '給料が全員同じ金額になったこと',
            '失業率と求人倍率が同時に高止まりする現象',
            '誰も大学に進学しなくなったこと',
            'すべての企業が副業を義務付けたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "需要と供給のミスマッチが拡大した結果、失業率と求人倍率が同時に高止まりするという歪んだ現象が生じている。"',
        },
        {
          id: 'n2-l1-r4-q4',
          question: '「リスキリング（学び直し）」が労働者に強く求められている理由は何ですか。(Tại sao tái đào tạo lại được yêu cầu cấp thiết ở người lao động?)',
          options: [
            '国の試験に合格しないと逮捕されるから',
            '一度身につけたスキルだけで定年まで生き抜くことが不可能になったから',
            '学歴を自慢してSNSで人気者になるため',
            '残業時間をゼロにするため',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "一度身につけたスキルだけで定年まで生き抜くことは不可能である。労働者には生涯を通じて新たな専門知識や技術を学び直す「リスキリング」の姿勢が強く求められている。"',
        },
        {
          id: 'n2-l1-r4-q5',
          question: '企業側が取るべき姿勢として筆者が述べている検討事項は何ですか。(Hạng mục cần xem xét ở phía doanh nghiệp là gì?)',
          options: [
            '従業員を単なるコストと見なして全員解雇すること',
            '従業員をコストと見なさず、能力開発への投資を積極化すること',
            '給与を一律に５０％カットすること',
            'オフィスを完全に閉鎖して連絡を断つこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 4: "企業側も従業員を単なるコストとして削減するのではなく、能力開発への投資を積極化する検討が必要である。"',
        },
        {
          id: 'n2-l1-r4-q6',
          question: '「組立工程が自動化されるに従って、人材像は根底から覆りつつある」の「に従って」の機能は何ですか。(Chức năng của "に従って" trong câu là gì?)',
          options: [
            'Chỉ sự biến đổi phụ thuộc song hành: tự động hóa càng sâu rộng thì chân dung nhân lực càng bị đảo lộn toàn diện',
            'Chỉ sự bắt chước hành vi của người khác',
            'Chỉ nguyên nhân không dẫn tới biến đổi',
            'Lời chúc mừng thành công',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜に従って biểu thị quá trình biến đổi tiến triển tương liên giữa hai vế.',
        },
      ],
    },
    {
      id: 'n2-l1-r5',
      title: 'Bài đọc 5: 多様化する家族観と単身世帯増加に伴う地域コミュニティの再編 (Quan niệm gia đình đa dạng hóa và tái thiết cộng đồng cùng gia tăng hộ độc thân)',
      summary: 'Biến đổi cấu trúc gia đình truyền thống và sự trỗi dậy của các mạng lưới tương trợ mới thay thế họ hàng huyết thống.',
      passageJp: `かつての日本社会において標準的とされた「夫婦と子供二人」という典型的な家族形態は、未婚化や晩婚化、離婚率の上昇に伴って急速に主流の座から退きつつある。国立社会保障・人口問題研究所の将来推計によると、２０４０年代には全世帯の約４割を単身世帯（一人暮らし）が占める見通しである。

血縁を中心とする家族機能が縮小するに従って、病気や介護、災害発生時の緊急支援など、かつて家庭内で処理されていた相互扶助の機能が失われ、孤立死や孤独感が深刻な社会問題として浮上している。個人の自由な生き方が尊重されるようになった一方、無縁社会化の弊害が浮き彫りになった結果である。

この状況を打開するため、血縁や地縁に過度に依存しない、新しい緩やかなつながりを模索する試みが各地で始まっている。世代を超えた住民が食堂や共有スペースを共にする「コレクティブハウス」や、趣味や特技を通じて支え合うコミュニティカフェの設置が注目を集めている。

家族のあり方が変容した事実を正面から受け止め、孤独を個人の自己責任に帰するのではなく、社会全体で支え合う包括的なセーフティネットの構築を早急に検討しなければならない。`,
      passageVi: `Hình thái gia đình điển hình "vợ chồng và hai con" - vốn từng được xem là khuôn mẫu chuẩn mực trong xã hội Nhật Bản trước đây - đang nhanh chóng rời khỏi vị trí chủ đạo cùng với sự gia tăng hiện tượng không kết hôn, kết hôn muộn và tỷ lệ ly hôn gia tăng. Theo ước tính tương lai của Viện Nghiên cứu An sinh Xã hội và Vấn đề Dân số Quốc gia, đến những năm 2040, các hộ gia đình đơn thân (sống một mình) dự kiến sẽ chiếm tới khoảng 40% tổng số hộ gia đình.

Tỷ lệ thuận với việc chức năng gia đình lấy huyết thống làm hạt nhân bị thu hẹp dần, các tính năng tương trợ giúp đỡ lẫn nhau từng được giải quyết gọn ghẽ trong nội bộ gia đình xưa kia - như lúc ốm đau, điều dưỡng chăm sóc hay cứu trợ khẩn cấp khi thiên tai - nay đã bị biến mất, khiến tình trạng chết trong cô độc và nỗi cô đơn trầm cảm nổi lên như một vấn đề xã hội nan giải. Đây là kết quả của việc trong khi lối sống tự do của từng cá nhân được tôn trọng, thì mặt trái của một "xã hội không còn sự ràng buộc (vô duyên xã hội)" lại bị lộ rõ.

Để khai thông tình cảnh này, những thử nghiệm tìm kiếm sự gắn kết lỏng lẻo mới mẻ mà không phụ thuộc quá mức vào huyết thống hay địa duyên đang bắt đầu xuất hiện ở nhiều nơi. Mô hình "Nhà ở tập thể (Collective Housing)" - nơi các cư dân thuộc nhiều thế hệ cùng chia sẻ phòng ăn và không gian sinh hoạt chung, hay việc thiết lập các quán cà phê cộng đồng tương trợ thông qua sở thích và sở trường đang thu hút sự chú ý.

Đứng trước sự thật rằng hình thái gia đình đã biến đổi, thay vì quy chụp nỗi cô đơn là trách nhiệm của riêng từng cá nhân, chúng ta phải khẩn trương xem xét xây dựng một mạng lưới an sinh toàn diện được xã hội chung tay nâng đỡ.`,
      vocabFocus: ['従って (theo đó/vì vậy)', '一方 (mặt khác)', '結果 (kết quả)', '事実 (sự thật)', '検討 (xem xét/nghiên cứu)', '状況 (tình hình)'],
      grammarFocus: ['〜に従って (càng... càng / tuân theo)', '〜に伴って (cùng với / song hành cùng sự biến đổi của)'],
      questions: [
        {
          id: 'n2-l1-r5-q1',
          question: '伝統的な標準家族が減少している直接の背景として何が書かれていますか。(Bối cảnh trực tiếp làm giảm gia đình truyền thống là gì?)',
          options: [
            '子供を３人以上産む家庭が急増したこと',
            '未婚化や晩婚化、離婚率の上昇に伴うもの',
            'すべての人が海外へ養子に出されたこと',
            '結婚することが法律で禁止されたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "未婚化や晩婚化、離婚率の上昇に伴って急速に主流の座から退きつつある。"',
        },
        {
          id: 'n2-l1-r5-q2',
          question: '２０４０年代における単身世帯の割合の予測はどれくらいですか。(Dự báo tỷ lệ hộ độc thân vào thập niên 2040 là bao nhiêu?)',
          options: ['全世帯の約１割', '全世帯の約４割', '全世帯の約９割', '測定不能'],
          answerIndex: 1,
          explanation: 'Đoạn 1: "２０４０年代には全世帯の約４割を単身世帯（一人暮らし）が占める見通しである。"',
        },
        {
          id: 'n2-l1-r5-q3',
          question: '家族機能の縮小に従って生じた深刻な弊害は何ですか。(Tác hại nghiêm trọng nảy sinh theo sự thu hẹp chức năng gia đình là gì?)',
          options: [
            '食料品が手に入らなくなったこと',
            '相互扶助機能が失われ、孤立死や孤独感が深刻化したこと',
            '電車の運賃が高騰したこと',
            '学校の入学者がゼロになったこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "相互扶助の機能が失われ、孤立死や孤独感が深刻な社会問題として浮上している。個人の自由な生き方が尊重されるようになった一方、無縁社会化の弊害が浮き彫りになった結果である。"',
        },
        {
          id: 'n2-l1-r5-q4',
          question: '新しい地域コミュニティの具体例として注目されているものはどれですか。(Ví dụ cụ thể về cộng đồng địa phương mới được chú ý là gì?)',
          options: [
            '全員が孤立して暮らす地下シェルター',
            '多世代が共有スペースを共にする「コレクティブハウス」やコミュニティカフェ',
            '警察官が毎日家を見回る警備システム',
            '高額な入居費が必要な高級老人ホームだけ',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "世代を超えた住民が食堂や共有スペースを共にする「コレクティブハウス」や、趣味や特技を通じて支え合うコミュニティカフェの設置が注目を集めている。"',
        },
        {
          id: 'n2-l1-r5-q5',
          question: '「血縁を中心とする家族機能が縮小するに従って」の「に従って」の意味は何ですか。(Nghĩa của "に従って" trong câu là gì?)',
          options: [
            'Chỉ sự biến đổi tương liên: chức năng gia đình càng thu nhỏ thì sự tương trợ tự nhiên xưa kia càng mất đi',
            'Tuân theo phong tục tập quán cổ xưa',
            'Chỉ nguyên nhân tích cực đáng tự hào',
            'Thể hiện lời cầu nguyện cho gia đình hạnh phúc',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜に従って biểu thị mối quan hệ phụ thuộc đồng thời giữa hai quá trình biến đổi.',
        },
        {
          id: 'n2-l1-r5-q6',
          question: '孤独の問題に対して社会が取るべき姿勢として筆者が述べているのはどれですか。(Thái độ xã hội cần có đối với sự cô đơn là gì?)',
          options: [
            'すべて個人の自己責任として放置すること',
            '孤独を個人の責任にせず、社会全体で支え合う包括的なセーフティネットの構築を検討すること',
            '独身者に高い罰金を科すこと',
            '一人暮らしを法律で禁止すること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "孤独を個人の自己責任に帰するのではなく、社会全体で支え合う包括的なセーフティネットの構築を早急に検討しなければならない。"',
        },
      ],
    },
  ],

  // ================= N2 BÀI 2 =================
  'n2-l2': [
    {
      id: 'n2-l2-r1',
      title: 'Bài đọc 1: パンデミックを契機としたサプライチェーンの再構築と国内投資 (Tái cơ cấu chuỗi cung ứng và đầu tư nội địa lấy đại dịch làm bước ngoặt)',
      summary: 'Sự đứt gãy của chuỗi cung ứng toàn cầu thúc đẩy các doanh nghiệp sản xuất đưa dây chuyền về nước và đa dạng hóa nguồn cung.',
      passageJp: `新型コロナウイルスの世界的な大流行を契機にして、国境を越えた国際分業体制とサプライチェーン（供給網）の脆弱性が一挙に露呈した。医療用マスクや防護服をはじめとする重要物資の供給が突如として途絶し、多くの国で深刻なパニックが引き起こされた記憶は新しい。

これまで製造業は、コスト削減と利益の最大化を至上命題として、人件費の安い新興国に生産拠点を集中させてきた。しかし、地政学的リスクの高まりや物流の停滞を契機に、過度の海外依存が国家の安全保障を脅かすという認識が急速に広がった。いくら安価であっても、危機の際に必要な物資が国内に届かなければ市場は麻痺してしまう。

この教訓を踏まえ、半導体や蓄電池をはじめとする戦略物資の国内回帰を促すため、政府は巨額の補助金を投じる政策を打ち出した。企業側も、単一の国に依存する従来の手法を改め、複数の調達先を確保する分散型の投資へと舵を切っている。

目先の景気動向や短期的な利益の追求にとらわれず、有事の際にも強靱な供給能力を維持できる持続的なサプライチェーンの構築こそが、これからの国際競争における勝敗の分かれ目となるのである。`,
      passageVi: `Lấy đại dịch virus corona chủng mới bùng phát trên toàn cầu làm bước ngoặt, tính dễ bị tổn thương của thể chế phân công lao động quốc tế xuyên biên giới và chuỗi cung ứng (supply chain) đã bị phơi bày toàn diện cùng một lúc. Ký ức về việc nguồn cung các vật tư trọng yếu - bắt đầu từ khẩu trang y tế và đồ bảo hộ - đột ngột bị gián đoạn gây ra sự hoảng loạn nghiêm trọng ở nhiều quốc gia vẫn còn mới nguyên.

Từ trước tới nay, ngành sản xuất luôn coi việc cắt giảm chi phí và tối đa hóa lợi nhuận là mệnh lệnh tối thượng, tập trung các cứ điểm sản xuất sang các quốc gia mới nổi có chi phí nhân công rẻ mạt. Thế nhưng, lấy sự gia tăng rủi ro địa chính trị và sự đình trệ vận tải logistics làm bước ngoặt, nhận thức rằng việc phụ thuộc quá mức vào nước ngoài đe dọa trực tiếp an ninh quốc gia đã lan rộng nhanh chóng. Dù có rẻ đến đâu chăng nữa, nếu lúc nguy nan mà vật tư thiết yếu không thể về tới nội địa thì thị trường sẽ lập tức tê liệt.

Rút ra bài học này, nhằm thúc đẩy việc đưa các vật tư chiến lược - mở đầu là chất bán dẫn và pin lưu trữ - quay trở lại nội địa, chính phủ đã tung ra chính sách rót các khoản trợ cấp khổng lồ. Về phía doanh nghiệp, họ cũng đang từ bỏ phương thức truyền thống phụ thuộc vào một quốc gia duy nhất để chuyển hướng sang đầu tư phân tán, đảm bảo nhiều nguồn cung ứng song song.

Không bị giam hãm trong biến động kinh tế trước mắt hay việc theo đuổi lợi nhuận ngắn hạn, việc xây dựng một chuỗi cung ứng bền bỉ có thể duy trì năng lực cung ứng vững vàng ngay cả khi xảy ra sự cố mới chính là ngã rẽ định đoạt thắng bại trong cuộc cạnh tranh quốc tế mai sau.`,
      vocabFocus: ['景気 (kinh tế/tình hình kinh doanh)', '市場 (thị trường)', '利益 (lợi nhuận)', '需要 (nhu cầu/cầu)', '供給 (cung cấp/cung)', '投資 (đầu tư)'],
      grammarFocus: ['〜をはじめ（として） (đầu tiên phải kể đến / tiêu biểu là)', '〜を契機に（して） (nhân dịp / lấy làm bước ngoặt)'],
      questions: [
        {
          id: 'n2-l2-r1-q1',
          question: '国際サプライチェーンの脆弱性が露呈したきっかけは何ですか。(Duyên cớ phơi bày tính dễ tổn thương của chuỗi cung ứng quốc tế là gì?)',
          options: [
            '原材料の価格が世界一安くなったこと',
            '新型コロナウイルスの世界的な大流行を契機にしたもの',
            '飛行機がすべて飛ばなくなったこと',
            'すべての工場が国内に戻ってきたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "新型コロナウイルスの世界的な大流行を契機にして、国境を越えた国際分業体制とサプライチェーンの脆弱性が一挙に露呈した。"',
        },
        {
          id: 'n2-l2-r1-q2',
          question: 'これまで製造業が生産拠点を新興国に集中させてきた主な理由は何ですか。(Lý do các doanh nghiệp tập trung cơ sở sản xuất ở nước mới nổi trước đây là gì?)',
          options: [
            'コスト削減と利益の最大化',
            '新興国の環境保護を支援するため',
            '社長が海外旅行を楽しみたかったから',
            '日本の土地が完全に不足したから',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 2 nêu: "これまで製造業は、コスト削減と利益の最大化を至上命題として、人件費の安い新興国に生産拠点を集中させてきた。"',
        },
        {
          id: 'n2-l2-r1-q3',
          question: '戦略物資の国内回帰を促すために政府が打ち出した政策は何ですか。(Chính sách chính phủ đưa ra để kéo vật tư chiến lược về nước là gì?)',
          options: [
            '巨額の補助金を投じる政策',
            '海外渡航を全面的に禁止すること',
            '外国製品の輸入に関税を１０００％かけること',
            'すべての企業を国営化すること',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 3: "半導体や蓄電池をはじめとする戦略物資の国内回帰を促すため、政府は巨額の補助金を投じる政策を打ち出した。"',
        },
        {
          id: 'n2-l2-r1-q4',
          question: '「半導体や蓄電池をはじめとする戦略物資」の「をはじめとする」の意味は何ですか。(Nghĩa của "をはじめとする" trong câu là gì?)',
          options: [
            'Chỉ một đối tượng đại diện tiêu biểu nhất đứng đầu, theo sau là các đối tượng cùng loại',
            'Chỉ việc bắt đầu mở cửa hàng',
            'Chỉ sự việc kết thúc hoàn toàn',
            'Chỉ một điều kiện giả định tiêu cực',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜をはじめ（として） nêu ra ví dụ tiêu biểu hàng đầu đại diện cho một tập hợp (tiêu biểu như bán dẫn và pin lưu trữ).',
        },
        {
          id: 'n2-l2-r1-q5',
          question: '「〜を契機に」という表現が使われている文脈に共通するニュアンスは何ですか。(Sắc thái chung của "〜を契機に" trong bài là gì?)',
          options: [
            'Một sự kiện quan trọng mang tính bước ngoặt làm thay đổi mạnh mẽ hành vi, nhận thức sau đó',
            'Một sự trùng hợp ngẫu nhiên không có ý nghĩa',
            'Thời điểm kết thúc hợp đồng',
            'Lời xin lỗi vì đã gây trễ hạn',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜を契機に（して） nhấn mạnh một cơ duyên, sự kiện bản lề mở ra sự thay đổi lớn trong hành động hoặc nhận thức.',
        },
        {
          id: 'n2-l2-r1-q6',
          question: '今後の国際競争で勝敗を分ける鍵として筆者が強調しているのはどれですか。(Chìa khóa định đoạt thắng bại trong cạnh tranh quốc tế được tác giả nhấn mạnh là gì?)',
          options: [
            '短期的な利益だけを追求して人件費をさらに削ること',
            '有事の際にも強靱な供給能力を維持できる持続的なサプライチェーンの構築',
            'すべての貿易を中止して完全な鎖国を行うこと',
            '他国の企業を買収して独占すること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "目先の景気動向や短期的な利益の追求にとらわれず、有事の際にも強靱な供給能力を維持できる持続的なサプライチェーンの構築こそが、これからの国際競争における勝敗の分かれ目となるのである。"',
        },
      ],
    },
    {
      id: 'n2-l2-r2',
      title: 'Bài đọc 2: 東京一極集中の是正と地方都市への分散投資 (Điều chỉnh sự tập trung thái quá về Tokyo và đầu tư phân tán vào địa phương)',
      summary: 'Thách thức kinh tế khi nguồn lực dồn vào thủ đô và cơ hội phân tán rủi ro thiên tai, thúc đẩy kinh tế địa phương.',
      passageJp: `日本の経済構造における長年の懸案事項は、政治、経済、文化の中心機能が東京圏に過度に偏る「東京一極集中」の是正である。大手企業の本社をはじめとして、主要な大学や研究機関、金融市場が首都圏に密集した結果、地方から若者が絶え間なく吸い寄せられ、地方経済の疲弊が加速してきた。

一極集中は業務の効率性を高める面がある一方、首都直下地震などの大規模災害が発生した場合、国家機能そのものが一瞬で麻痺してしまう壊滅的なリスクを内包している。また、過密に伴う地価の高騰や満員電車の通勤苦は、若者の結婚や子育てを阻害する大きな要因とも指摘されている。

テレワークの定着やサテライトオフィスの普及を契機に、本社機能の一部を地方へ移転させたり、地方拠点を拡充したりする先進的な企業が現れ始めた。地方自治体もIT企業をはじめとする新産業を誘致するため、大胆な税制優遇や住居支援の投資を打ち出している。

富と人口を適切に地方へ分散させることは、国家全体としてのリスク回避につながるだけでなく、地域独自の多様な資源を活かした新たな需要の創出にも大きく寄与するはずである。`,
      passageVi: `Mối trăn trở lâu năm trong cơ cấu kinh tế Nhật Bản chính là việc điều chỉnh "sự tập trung thái quá về Tokyo" - nơi các chức năng đầu não chính trị, kinh tế, văn hóa bị dồn quá mức về khu vực thủ đô Tokyo. Kết quả của việc các cơ quan tài chính, đại học, viện nghiên cứu lớn và tiêu biểu là trụ sở các tập đoàn quy mô lớn chen chúc tại vùng thủ đô đã khiến giới trẻ từ các địa phương không ngừng bị hút về đây, đẩy nhanh sự kiệt quệ của kinh tế các vùng quê.

Sự tập trung đơn cực một mặt nâng cao tính hiệu suất nghiệp vụ, nhưng mặt khác lại ẩn chứa rủi ro hủy diệt: nếu một trận động đất lớn ngay dưới lòng thủ đô xảy ra thì chính bộ máy chức năng quốc gia sẽ bị tê liệt trong nháy mắt. Ngoài ra, giá đất đắt đỏ do mật độ quá cao cùng nỗi khổ tàu xe chật ních người cũng được chỉ ra là tác nhân lớn cản trở việc kết hôn và sinh con của người trẻ.

Lấy sự bén rễ của làm việc từ xa và văn phòng vệ tinh làm bước ngoặt, các doanh nghiệp tiên phong di dời một phần trụ sở về địa phương hoặc mở rộng cứ điểm ở tỉnh lẻ đã bắt đầu xuất hiện. Chính quyền các địa phương cũng đang tung ra các khoản đầu tư ưu đãi thuế quan táo bạo và hỗ trợ nhà ở nhằm thu hút các ngành công nghiệp mới tiêu biểu như các công ty công nghệ thông tin.

Việc phân tán của cải và dân số về các địa phương một cách hợp lý không chỉ giúp phòng ngừa rủi ro cho toàn thể quốc gia, mà chắc chắn còn đóng góp to lớn vào việc kiến tạo những nhu cầu tiêu dùng mới dựa trên việc tận dụng các nguồn tài nguyên đa dạng đặc thù của mỗi vùng đất.`,
      vocabFocus: ['景気 (kinh tế/tình hình kinh doanh)', '市場 (thị trường)', '利益 (lợi nhuận)', '需要 (nhu cầu/cầu)', '供給 (cung cấp/cung)', '投資 (đầu tư)'],
      grammarFocus: ['〜をはじめ（として） (đầu tiên phải kể đến / tiêu biểu là)', '〜を契機に（して） (nhân dịp / lấy làm bước ngoặt)'],
      questions: [
        {
          id: 'n2-l2-r2-q1',
          question: '東京一極集中がもたらした地方経済への悪影響は何ですか。(Tác động tiêu cực của tập trung về Tokyo tới kinh tế địa phương là gì?)',
          options: [
            '地方の農産物が東京で全く売れなくなったこと',
            '若者が首都圏に吸い寄せられ、地方経済の疲弊が加速したこと',
            '地方に新幹線が通らなくなったこと',
            '地方の観光名所がすべて破壊されたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "地方から若者が絶え間なく吸い寄せられ、地方経済の疲弊が加速してきた。"',
        },
        {
          id: 'n2-l2-r2-q2',
          question: '一極集中が内包している壊滅的なリスクとして書かれているのは何ですか。(Rủi ro hủy diệt tiềm ẩn của tập trung đơn cực là gì?)',
          options: [
            '東京の気温が５０度に達すること',
            '首都直下地震などの災害時に国家機能が一瞬で麻痺するリスク',
            '東京のビルが重すぎて地盤沈下すること',
            '外国からの観光客が来なくなること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "首都直下地震などの大規模災害が発生した場合、国家機能そのものが一瞬で麻痺してしまう壊滅的なリスクを内包している。"',
        },
        {
          id: 'n2-l2-r2-q3',
          question: '企業が地方移転を検討し始めた契機は何ですか。(Bước ngoặt khiến doanh nghiệp bắt đầu tính chuyển về địa phương là gì?)',
          options: [
            '法律で東京からの立ち退きを命じられたこと',
            'テレワークの定着やサテライトオフィスの普及を契機にしたもの',
            '東京の電気代が１００倍になったこと',
            '東京のすべてのビルが老朽化したこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "テレワークの定着やサテライトオフィスの普及を契機に、本社機能の一部を地方へ移転させたり、地方拠点を拡充したりする先進的な企業が現れ始めた。"',
        },
        {
          id: 'n2-l2-r2-q4',
          question: '「大手企業の本社をはじめとして」の「をはじめとして」の文法的機能は何ですか。(Chức năng ngữ pháp của "をはじめとして" ở đây là gì?)',
          options: [
            'Đưa trụ sở các tập đoàn lớn làm ví dụ đại diện hàng đầu cho các cơ quan tập trung tại thủ đô',
            'Biểu thị hành động bắt đầu làm việc buổi sáng',
            'Chỉ lý do thất bại trong kinh doanh',
            'Chỉ một điều ước viển vông',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜をはじめとして dùng để nêu ví dụ điển hình nhất trong tập hợp các cơ quan đầu não dồn về Tokyo.',
        },
        {
          id: 'n2-l2-r2-q5',
          question: '自治体が新産業を誘致するために行っている投資は何ですか。(Khoản đầu tư chính quyền địa phương thực hiện để thu hút ngành mới là gì?)',
          options: [
            '全員に現金を無条件で毎月配ること',
            '大胆な税制優遇や住居支援の投資',
            '東京への交通手段を遮断すること',
            '学校をすべて廃止すること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "地方自治体もIT企業をはじめとする新産業を誘致するため、大胆な税制優遇や住居支援の投資を打ち出している。"',
        },
        {
          id: 'n2-l2-r2-q6',
          question: '地方への分散がもたらす国家的な利点として筆者が挙げているのはどれですか。(Lợi ích quốc gia nhờ phân tán về địa phương là gì?)',
          options: [
            '国家全体としてのリスク回避と地域資源を活かした新需要の創出',
            '東京の地価をゼロにすること',
            'すべての企業を同じ規模に揃えること',
            '税金を完全に無くすこと',
          ],
          answerIndex: 0,
          explanation: 'Câu kết đoạn 4: "富と人口を適切に地方へ分散させることは、国家全体としてのリスク回避につながるだけでなく、地域独自の多様な資源を活かした新たな需要の創出にも大きく寄与するはずである。"',
        },
      ],
    },
    {
      id: 'n2-l2-r3',
      title: 'Bài đọc 3: 半導体産業をはじめとするハイテク先端分野への戦略的投資 (Đầu tư chiến lược vào các lĩnh vực công nghệ cao mũi nhọn tiêu biểu là bán dẫn)',
      summary: 'Cuộc chạy đua bán dẫn toàn cầu và chiến lược đầu tư nhà máy quy mô lớn của Nhật Bản nhằm bảo vệ an ninh kinh tế.',
      passageJp: `デジタル社会の「産業のコメ」と称される半導体は、スマートフォンやパソコンをはじめ、自動車、家電、人工知能サーバーに至るまで、あらゆる現代機器の心臓部を担っている。近年の米中対立の激化や台湾海峡をめぐる地政学的緊張を契機に、先端半導体を自国内で安定的に調達できるかどうかが、各国の経済安全保障を左右する最重要課題として浮上した。

かつて世界の半導体市場で過半数のシェアを誇った日本企業であったが、投資判断の遅れや国際分業の波に乗り遅れた結果、先端領域での競争力を大きく低下させてしまった。自国の需要を満たす供給能力が枯渇すれば、他国の輸出規制によって自動車産業をはじめとする国内の主力産業全体が操業停止に追い込まれかねない。

この危機感を契機として、政府は国内外の先端ファウンドリ（受託製造企業）の国内誘致に数兆円規模の巨額投資を断行した。熊本や北海道における巨大工場の建設は、地域経済に莫大な雇用と関連投資の波及効果をもたらしている。

しかし、巨額の資金を投じるだけで持続的な競争力が保証されるわけではない。半導体技術を支える高度な研究開発人材の育成や、次世代の革新的な回路設計を生み出すエコシステムの構築が今こそ不可欠である。`,
      passageVi: `Được mệnh danh là "hạt gạo của ngành công nghiệp" trong xã hội số, chất bán dẫn đang đảm đương vị trí trái tim của mọi thiết bị hiện đại, tiêu biểu là điện thoại thông minh, máy vi tính, cho tới ô tô, đồ gia dụng và cả máy chủ trí tuệ nhân tạo. Lấy sự căng thẳng leo thang trong đối đầu Mỹ - Trung và biến động địa chính trị quanh eo biển Đài Loan gần đây làm bước ngoặt, việc có thể tự chủ nguồn cung bán dẫn tiên tiến một cách ổn định trong nội địa hay không đã nổi lên như nhiệm vụ tối quan trọng định đoạt an ninh kinh tế của mỗi quốc gia.

Từng tự hào chiếm giữ quá nửa thị phần trên thị trường bán dẫn thế giới trong quá khứ, thế nhưng các doanh nghiệp Nhật Bản do chậm trễ trong quyết sách đầu tư và trễ nhịp làn sóng phân công quốc tế, đã làm suy giảm nghiêm trọng năng lực cạnh tranh ở các phân khúc tiên tiến. Nếu năng lực cung ứng đáp ứng nhu cầu nội địa bị cạn kiệt, chỉ một động thái siết xuất khẩu từ nước khác cũng rất có thể đẩy toàn bộ các ngành công nghiệp mũi nhọn nội địa - tiêu biểu là công nghiệp ô tô - vào cảnh đình trệ ngừng sản xuất.

Lấy cảm giác khủng hoảng này làm bước ngoặt, chính phủ đã quyết đoán thực hiện các khoản đầu tư khổng lồ quy mô hàng nghìn tỷ Yên nhằm thu hút các nhà máy gia công bán dẫn tiên tiến trong và ngoài nước đặt cơ sở tại nội địa. Việc xây dựng các đại nhà máy tại Kumamoto hay Hokkaido đang mang lại hiệu ứng lan tỏa việc làm và đầu tư phụ trợ khổng lồ cho kinh tế vùng.

Tuy nhiên, chỉ rót nguồn vốn khổng lồ thôi thì không thể đảm bảo chắc chắn năng lực cạnh tranh bền vững. Việc đào tạo nhân lực nghiên cứu phát triển trình độ cao để nâng đỡ công nghệ bán dẫn và xây dựng hệ sinh thái tạo ra những thiết kế vi mạch đột phá của thế hệ kế tiếp lúc này đây là điều không thể thiếu.`,
      vocabFocus: ['景気 (kinh tế/tình hình kinh doanh)', '市場 (thị trường)', '利益 (lợi nhuận)', '需要 (nhu cầu/cầu)', '供給 (cung cấp/cung)', '投資 (đầu tư)'],
      grammarFocus: ['〜をはじめ（として） (đầu tiên phải kể đến / tiêu biểu là)', '〜を契機に（して） (nhân dịp / lấy làm bước ngoặt)'],
      questions: [
        {
          id: 'n2-l2-r3-q1',
          question: '半導体が「産業のコメ」と称される理由は何ですか。(Tại sao chất bán dẫn được ví là "hạt gạo công nghiệp"?)',
          options: [
            'お米と同じように食べられるから',
            'スマホや自動車などあらゆる機器の心臓部を担っているから',
            '日本でしか生産できないから',
            '価格が非常に安いから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "スマートフォンやパソコンをはじめ、自動車、家電、人工知能サーバーに至るまで、あらゆる現代機器の心臓部を担っている。"',
        },
        {
          id: 'n2-l2-r3-q2',
          question: '半導体の国内調達が最重要課題となった契機は何ですか。(Bước ngoặt khiến việc tự chủ bán dẫn thành nhiệm vụ tối quan trọng là gì?)',
          options: [
            '世界中でコンピューターゲームが流行したこと',
            '米中対立の激化や地政学的緊張を契機にしたもの',
            'すべての半導体工場が台風で壊れたこと',
            '人工知能の研究が中止されたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1: "近年の米中対立の激化や台湾海峡をめぐる地政学的緊張を契機に、先端半導体を自国内で安定的に調達できるかどうかが、各国の経済安全保障を左右する最重要課題として浮上した。"',
        },
        {
          id: 'n2-l2-r3-q3',
          question: 'かつてトップだった日本の半導体競争力が低下した原因は何ですか。(Nguyên nhân khiến năng lực bán dẫn Nhật Bản từng đứng đầu bị suy giảm là gì?)',
          options: [
            '投資判断の遅れや国際分業の波に乗り遅れた結果',
            '日本人の理科の学力が急落したこと',
            '工場で働く人が一人もいなくなったこと',
            '海外への技術輸出を法律で禁止したこと',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 2 nêu: "投資判断の遅れや国際分業の波に乗り遅れた結果、先端領域での競争力を大きく低下させてしまった。"',
        },
        {
          id: 'n2-l2-r3-q4',
          question: '「自動車産業をはじめとする国内の主力産業」の「をはじめとする」の意味は何ですか。(Nghĩa của "をはじめとする" trong câu là gì?)',
          options: [
            'Lấy ngành công nghiệp ô tô làm ví dụ tiêu biểu hàng đầu cho các ngành chủ lực',
            'Ngành công nghiệp ô tô vừa mới ra đời',
            'Ngành ô tô bị đóng cửa trước tiên',
            'Chỉ một thắc mắc không có lời giải',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜をはじめとする nêu ra ngành công nghiệp ô tô như ví dụ đại diện quan trọng nhất cho ngành công nghiệp trụ cột của đất nước.',
        },
        {
          id: 'n2-l2-r3-q5',
          question: '政府が行った巨額投資によってどのような地域的効果が現れていますか。(Hiệu quả khu vực xuất hiện từ các khoản đầu tư của chính phủ là gì?)',
          options: [
            '熊本や北海道における工場建設で莫大な雇用と関連投資の波及効果が生じている',
            '地域の住民全員が公務員になったこと',
            '地域の農地がすべて宅地に変わったこと',
            '地方空港がすべて閉鎖されたこと',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 3: "熊本や北海道における巨大工場の建設は、地域経済に莫大な雇用と関連投資の波及効果をもたらしている。"',
        },
        {
          id: 'n2-l2-r3-q6',
          question: '資金投入以外に持続的な競争力のために不可欠だと筆者が述べているのはどれですか。(Ngoài vốn, điều gì được tác giả xem là thiết yếu cho cạnh tranh bền vững?)',
          options: [
            '海外の半導体をすべて輸入禁止にすること',
            '高度な研究開発人材の育成や革新的な設計を生み出すエコシステムの構築',
            'すべての従業員をロボットに交代させること',
            '特許をすべて他国へ売却すること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "半導体技術を支える高度な研究開発人材の育成や、次世代の革新的な回路設計を生み出すエコシステムの構築が今こそ不可欠である。"',
        },
      ],
    },
    {
      id: 'n2-l2-r4',
      title: 'Bài đọc 4: 金融政策の正常化を契機とする市場経済の構造変化 (Thay đổi cơ cấu kinh tế thị trường lấy việc bình thường hóa chính sách tiền tệ làm bước ngoặt)',
      summary: 'Tác động của việc chấm dứt lãi suất âm đối với ngân hàng, tỷ giá hối đoái, chi phí vay của doanh nghiệp và hộ gia đình.',
      passageJp: `日本銀行が長年にわたって継続してきた異次元の金融緩和政策が、ついに大きな転換点を迎えた。マイナス金利の解除とイールドカーブ・コントロール（長短金利操作）の撤廃を契機にして、金利のある世界への移行が現実のものとなったのである。

金利の引き上げは、銀行をはじめとする預金取扱金融機関にとっては貸出利ざやの拡大による収益改善をもたらす一方、多額の債務を抱える一般企業や住宅ローンを返済中の個人にとっては利払い負担の増加を意味する。低金利を前提として過剰な借り入れを行ってきた「ゾンビ企業」が淘汰され、成長性の高い産業へ資本や労働力が再配分される契機になると評価する経済学者も多い。

需要の拡大と賃金の上昇が好循環を生み出し、適度なインフレが定着すれば、景気は自律的な回復基調を強めていくはずである。しかし、急激な金利上昇は国内の設備投資を冷え込ませ、個人消費の減退を招くリスクも否定できない。

中央銀行には、国内外の市場の動向を慎重に見極めつつ、国民生活への影響を最小限に抑える柔軟な金融政策の舵取りが求められている。`,
      passageVi: `Chính sách nới lỏng tiền tệ quy mô khác thường mà Ngân hàng Trung ương Nhật Bản duy trì trong suốt nhiều năm cuối cùng đã đón nhận một bước ngoặt lớn. Lấy việc dỡ bỏ lãi suất âm và xóa bỏ kiểm soát đường cong lợi suất (YCC) làm bước ngoặt, sự chuyển dịch sang "một thế giới có lãi suất thực" đã trở thành hiện thực hiển hiện.

Việc tăng lãi suất một mặt mang lại sự cải thiện doanh thu nhờ nới rộng biên độ lợi nhuận cho vay đối với các tổ chức tài chính nhận tiền gửi - tiêu biểu là các ngân hàng, nhưng mặt khác nó lại mang ý nghĩa gia tăng gánh nặng trả lãi đối với các cá nhân đang trả nợ mua nhà và các doanh nghiệp nói chung đang ôm những khoản nợ lớn. Nhiều nhà kinh tế học đánh giá đây sẽ là cơ hội bước ngoặt để đào thải các "doanh nghiệp xác sống (zombie companies)" vốn quen vay mượn quá đà dựa vào lãi suất rẻ mạt, từ đó tái phân bổ nguồn vốn và lực lượng lao động vào các ngành nghề có tiềm năng tăng trưởng cao.

Nếu sự mở rộng của nhu cầu và đà tăng của tiền lương sản sinh ra một vòng tuần hoàn lành mạnh, lạm phát ở mức vừa phải bén rễ, chắc chắn nền kinh tế sẽ củng cố xu hướng hồi phục tự chủ. Tuy nhiên, rủi ro việc lãi suất tăng quá nhanh làm đóng băng đầu tư trang thiết bị nội địa và kéo theo sự sụt giảm tiêu dùng cá nhân cũng là điều không thể phủ nhận.

Ngân hàng trung ương đang được đòi hỏi phải quan sát cẩn trọng các biến động thị trường trong và ngoài nước, chèo lái chính sách tiền tệ linh hoạt nhằm hạn chế tối đa ảnh hưởng tiêu cực lên đời sống người dân.`,
      vocabFocus: ['景気 (kinh tế/tình hình kinh doanh)', '市場 (thị trường)', '利益 (lợi nhuận)', '需要 (nhu cầu/cầu)', '供給 (cung cấp/cung)', '投資 (đầu tư)'],
      grammarFocus: ['〜をはじめ（として） (đầu tiên phải kể đến / tiêu biểu là)', '〜を契機に（して） (nhân dịp / lấy làm bước ngoặt)'],
      questions: [
        {
          id: 'n2-l2-r4-q1',
          question: '「金利のある世界」への移行をもたらした契機は何ですか。(Bước ngoặt dẫn tới sự chuyển dịch sang "thế giới có lãi suất" là gì?)',
          options: [
            '消費税がゼロに減税されたこと',
            'マイナス金利の解除と長短金利操作の撤廃を契機にしたもの',
            '紙幣のデザインが全面変更されたこと',
            'すべての銀行が合併したこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "マイナス金利の解除とイールドカーブ・コントロール（長短金利操作）の撤廃を契機にして、金利のある世界への移行が現実のものとなったのである。"',
        },
        {
          id: 'n2-l2-r4-q2',
          question: '金利上昇が銀行側にもたらすメリットは何ですか。(Lợi ích việc tăng lãi suất đem lại cho phía ngân hàng là gì?)',
          options: [
            '預金者の口座から手数料を勝手に引き落とせること',
            '貸出利ざやの拡大による収益改善',
            '店舗をすべて無人化できること',
            '税金を払わなくてよくなること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "銀行をはじめとする預金取扱金融機関にとっては貸出利ざやの拡大による収益改善をもたらす..."',
        },
        {
          id: 'n2-l2-r4-q3',
          question: '「銀行をはじめとする預金取扱金融機関」の「をはじめとする」の用法は何ですか。(Cách dùng "をはじめとする" ở đây là gì?)',
          options: [
            'Nêu ngân hàng làm đối tượng đại diện hàng đầu cho các tổ chức tài chính nhận tiền gửi',
            'Chỉ thời gian ngân hàng mở cửa buổi sáng',
            'Chỉ sự thất bại của các tổ chức tài chính',
            'Lời yêu cầu người dân gửi tiền',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜をはじめとする đưa ngân hàng ra làm ví dụ tiêu biểu số một trong nhóm các định chế tài chính huy động tiền gửi.',
        },
        {
          id: 'n2-l2-r4-q4',
          question: '経済学者が期待する「ゾンビ企業」淘汰の効果は何ですか。(Hiệu quả của việc đào thải doanh nghiệp zombie mà các nhà kinh tế kỳ vọng là gì?)',
          options: [
            '資本や労働力が成長性の高い産業へ再配分されること',
            'すべての会社が倒産して農業に戻ること',
            '国の税収がゼロになること',
            '外国の企業に日本をすべて買い取ってもらうこと',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 2: "「ゾンビ企業」が淘汰され、成長性の高い産業へ資本や労働力が再配分される契機になると評価する経済学者も多い。"',
        },
        {
          id: 'n2-l2-r4-q5',
          question: '急激な金利上昇がもたらす恐れのあるリスクは何ですか。(Rủi ro việc tăng lãi suất đột ngột có thể gây ra là gì?)',
          options: [
            '設備投資の冷え込みと個人消費の減退',
            '日本の紙幣が外国で使えなくなること',
            '金利がマイナス１００％になること',
            'すべての国民が借金を完済してしまうこと',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 3: "急激な金利上昇は国内の設備投資を冷え込ませ、個人消費の減退を招くリスクも否定できない。"',
        },
        {
          id: 'n2-l2-r4-q6',
          question: '中央銀行に対して筆者が求めている役割は何ですか。(Vai trò tác giả đòi hỏi ở Ngân hàng Trung ương là gì?)',
          options: [
            '金利を毎日１０％ずつ引き上げること',
            '市場の動向を慎重に見極め、国民生活への影響を最小限に抑える柔軟な舵取り',
            '金融政策を完全に民間のIT企業に任せること',
            'すべての銀行の業務を即座に停止すること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "中央銀行には、国内外の市場の動向を慎重に見極めつつ、国民生活への影響を最小限に抑える柔軟な金融政策の舵取りが求められている。"',
        },
      ],
    },
    {
      id: 'n2-l2-r5',
      title: 'Bài đọc 5: 歴史的な円安進行を契機とするインバウンド需要の光と影 (Ánh sáng và bóng tối của nhu cầu du lịch quốc tế lấy đà giảm giá kỷ lục của đồng Yên làm bước ngoặt)',
      summary: 'Lợi ích kinh tế to lớn từ du khách nước ngoài đối trọng với hiện tượng quá tải du lịch (overtourism) và ô nhiễm đời sống dân cư.',
      passageJp: `為替市場における記録的な円安の進行を契機として、訪日外国人観光客（インバウンド）の数が過去最高を更新し続けている。海外の旅行者にとって日本の宿泊費や外食費は極めて割安に感じられ、全国の観光地や百貨店では高額な免税品をはじめとする爆発的な消費が景気を強く牽引している。

観光需要の復活は、宿泊業や飲食業、交通事業者をはじめとする関連業界に莫大な利益をもたらし、地方経済の活性化にも大きく貢献している事実は疑いようがない。過疎化が進む地方都市であっても、伝統文化や豊かな自然がSNSを通じて世界に発信されれば、一夜にして国際的な人気スポットへと生まれ変わる可能性を秘めている。

しかしその一方で、観光客の急増は「オーバーツーリズム（観光公害）」という深刻な副作用を招いている。京都をはじめとする有名観光都市では、満員バスに住民が乗車できない交通渋滞や、ゴミの散乱、深夜の騒音被害など、地域住民の平穏な生活が脅かされる事態が日常化している。

観光産業を持続可能な成長軌道に乗せるためには、単なる観光客数の増加を誇るのではなく、混雑緩和に向けた分散誘導やマナー啓発、宿泊税の活用によるインフラ整備など、住民生活との共生を図る包括的な投資が不可欠である。`,
      passageVi: `Lấy việc đồng Yên rớt giá kỷ lục trên thị trường ngoại hối làm bước ngoặt, số lượng du khách quốc tế đến Nhật Bản (inbound) đang liên tục phá các kỷ lục cao nhất trong lịch sử. Đối với du khách nước ngoài, chi phí khách sạn hay ăn uống ở Nhật Bản có cảm giác cực kỳ rẻ mạt, khiến cho làn sóng tiêu dùng bùng nổ - tiêu biểu là các món hàng miễn thuế xa xỉ tại các trung tâm thương mại và các danh lam thắng cảnh trên toàn quốc - đang tạo lực đẩy mạnh mẽ cho nền kinh tế.

Việc hồi sinh nhu cầu du lịch một mặt mang lại nguồn lợi nhuận khổng lồ cho các ngành nghề liên quan - mở đầu là dịch vụ lưu trú, ăn uống và vận tải, đóng góp to lớn vào việc chấn hưng kinh tế địa phương là sự thật không thể nghi ngờ. Ngay cả đối với các thành phố tỉnh lẻ đang ngày càng vắng vẻ, nếu văn hóa truyền thống và thiên nhiên trù phú được lan tỏa ra thế giới qua mạng xã hội, chúng cũng tiềm ẩn cơ hội lột xác chỉ sau một đêm thành điểm đến nổi tiếng toàn cầu.

Thế nhưng mặt khác, sự gia tăng chóng mặt của du khách lại kéo theo tác dụng phụ nghiêm trọng mang tên "ô nhiễm du lịch (overtourism)". Tại các đô thị du lịch nổi tiếng tiêu biểu như Kyoto, tình trạng xe buýt chật ních khiến cư dân địa phương không thể bước lên xe đi làm, rác thải bừa bãi hay tiếng ồn ban đêm quấy nhiễu đời sống thanh bình của người dân đang dần trở thành chuyện cơm bữa.

Để đưa ngành công nghiệp không khói vào quỹ đạo tăng trưởng bền vững, thay vì chỉ khoe khoang con số lượng khách gia tăng đơn thuần, việc đầu tư toàn diện nhằm hướng tới sự cộng sinh hài hòa với đời sống cư dân - như điều tiết giãn bớt áp lực đám đông, nâng cao ý thức văn minh và tận dụng nguồn thu thuế lưu trú để hoàn thiện hạ tầng - là điều không thể thiếu.`,
      vocabFocus: ['景気 (kinh tế/tình hình kinh doanh)', '市場 (thị trường)', '利益 (lợi nhuận)', '需要 (nhu cầu/cầu)', '供給 (cung cấp/cung)', '投資 (đầu tư)'],
      grammarFocus: ['〜をはじめ（として） (đầu tiên phải kể đến / tiêu biểu là)', '〜を契機に（して） (nhân dịp / lấy làm bước ngoặt)'],
      questions: [
        {
          id: 'n2-l2-r5-q1',
          question: 'インバウンド数が過去最高を更新し続けている直接のきっかけは何ですか。(Duyên cớ trực tiếp giúp lượng khách inbound liên tục phá kỷ lục là gì?)',
          options: [
            '海外のすべてのホテルが値上げされたこと',
            '為替市場における記録的な円安の進行を契機にしたもの',
            '日本が海外からの航空券を全員に無料で配ったこと',
            '海外旅行が世界中でブームになったこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "為替市場における記録的な円安の進行を契機として、訪日外国人観光客（インバウンド）の数が過去最高を更新し続けている。"',
        },
        {
          id: 'n2-l2-r5-q2',
          question: '観光需要の復活がもたらした肯定的な経済効果は何ですか。(Hiệu quả kinh tế tích cực mà việc hồi phục du lịch mang lại là gì?)',
          options: [
            '国内の物価がすべて１０分の１に下がったこと',
            '宿泊・飲食・交通などの業界に莫大な利益をもたらし、地方経済の活性化に貢献したこと',
            'すべての日本人が外国語を話せるようになったこと',
            '日本の人口が２倍に増えたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "宿泊業や飲食業、交通事業者をはじめとする関連業界に莫大な利益をもたらし、地方経済の活性化にも大きく貢献している事実は疑いようがない。"',
        },
        {
          id: 'n2-l2-r5-q3',
          question: '「京都をはじめとする有名観光都市」の「をはじめとする」の意味は何ですか。(Nghĩa của "をはじめとする" trong câu là gì?)',
          options: [
            'Nêu Kyoto ra làm ví dụ tiêu biểu hàng đầu trong số các đô thị du lịch nổi tiếng',
            'Kyoto là thành phố du lịch mới xây dựng',
            'Chỉ một điều kiện giả định thời tiết',
            'Khuyên mọi người không nên đi du lịch Kyoto',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜をはじめとする đưa Kyoto ra làm ví dụ điển hình số một đại diện cho nhóm các thành phố du lịch nổi tiếng.',
        },
        {
          id: 'n2-l2-r5-q4',
          question: '「オーバーツーリズム（観光公害）」の具体例として書かれているものはどれですか。(Ví dụ cụ thể về ô nhiễm du lịch được nhắc tới là gì?)',
          options: [
            'ホテルの部屋が広すぎて迷子になること',
            '住民がバスに乗車できない交通混雑、ゴミの散乱、騒音被害',
            '観光客が全員お土産を買い忘れること',
            'お寺の鐘の音が小さすぎること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "満員バスに住民が乗車できない交通渋滞や、ゴミの散乱、深夜の騒音被害など、地域住民の平穏な生活が脅かされる事態が日常化している。"',
        },
        {
          id: 'n2-l2-r5-q5',
          question: '観光産業の持続的成長のために筆者が求めている包括的な投資は何ですか。(Khoản đầu tư toàn diện tác giả đòi hỏi để du lịch phát triển bền vững là gì?)',
          options: [
            '外国人観光客の入国を全面的に拒否すること',
            '混雑緩和の分散誘導、マナー啓発、宿泊税活用によるインフラ整備など住民生活との共生を図る投資',
            'すべての観光地を入場無料にすること',
            '京都の道路をすべて高速道路に変えること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "混雑緩和に向けた分散誘導やマナー啓発、宿泊税の活用によるインフラ整備など、住民生活との共生を図る包括的な投資が不可欠である。"',
        },
        {
          id: 'n2-l2-r5-q6',
          question: 'この文章全体の主旨として最も適切なものはどれですか。(Ý chính toàn bài phù hợp nhất là gì?)',
          options: [
            '円安は日本経済を破壊するだけの悪である',
            'インバウンドの経済利益を享受しつつも、住民生活と共生できる持続可能な観光モデルを構築すべきである',
            '外国人観光客にだけ高い税金を課して追い払うべきだ',
            '観光業は儲かるので他の産業はすべて廃止して観光だけに専念すべきだ',
          ],
          answerIndex: 1,
          explanation: 'Bài viết phân tích hai mặt của du lịch quốc tế, nhấn mạnh cần cân bằng lợi ích kinh tế với chất lượng sống của cư dân địa phương.',
        },
      ],
    },
  ],

  // ================= N2 BÀI 3 =================
  'n2-l3': [
    {
      id: 'n2-l3-r1',
      title: 'Bài đọc 1: 生成AIの進化と知的生産における人間の創造性の本質 (Sự tiến hóa của AI tạo sinh và bản chất tính sáng tạo con người trong sản sinh tri thức)',
      summary: 'Khi AI có thể viết văn, lập trình và sáng tác tranh ảnh trong vài giây, bản chất thực sự của sự sáng tạo con người nằm ở đâu?',
      passageJp: `文章の執筆からプログラミング、絵画の制作に至るまで、人間特有の領域と信じられてきた高度な知的作業を瞬時に代行する生成AI（人工知能）の進化は、現代社会に強烈な衝撃を与えている。情報処理の速度と効率性において、人間がもはやAIに敵わない現実は、誰もが認めざるを得ない客観的事実となった。

しかし、AIが生成する作品や分析結果は、過去に人類が蓄積してきた膨大な電子データを統計的に再構成したものにすぎない。そこには、個人的な苦悩や挫折、あるいは他者への共感から湧き出る生々しい感情の葛藤は一切存在しない。真の創造性とは、単なる情報の効率的な組み合わせではなく、自らの限界に悩み、失敗を繰り返しながらも新たな価値を希求する生身の人間の実存的な営みにほかならない。

AIの普及によって単純な情報編集の価値が暴落する時代だからこそ、人間は自らの頭で深く疑い、倫理的な責任を引き受ける覚悟を持たざるを得ない。テクノロジーを使いこなす知恵と、技術への過度の依存を戒める自律性こそが、これからの時代を生き抜くために不可欠な資質なのである。`,
      passageVi: `Từ việc viết văn, lập trình, cho tới sáng tác hội họa, sự tiến hóa của AI tạo sinh (trí tuệ nhân tạo) - thứ có thể thay thế tức thì những công việc trí tuệ bậc cao vốn được tin chắc là lãnh địa riêng của con người - đang giáng một cú sốc mãnh liệt vào xã hội hiện đại. Ở khía cạnh tốc độ xử lý thông tin và hiệu suất, hiện thực rằng con người không còn là đối thủ của AI nữa đã trở thành một sự thật khách quan mà bất kỳ ai cũng không thể không thừa nhận.

Thế nhưng, các tác phẩm hay kết quả phân tích do AI tạo ra chẳng qua chỉ là sự tái cấu trúc mang tính thống kê dựa trên lượng dữ liệu điện tử khổng lồ mà nhân loại tích lũy trong quá khứ. Ở đó, hoàn toàn không hề tồn tại nỗi trăn trở, thất bại cá nhân, hay sự giằng xé cảm xúc sống động trào dâng từ lòng trắc ẩn hướng tới người khác. Tính sáng tạo đích thực không phải là sự kết hợp thông tin hiệu quả đơn thuần, mà chính là không gì khác ngoài hoạt động hiện sinh của con người bằng xương bằng thịt - những người luôn trăn trở trước giới hạn của bản thân, lặp lại những thất bại nhưng không ngừng khát khao kiếm tìm giá trị mới.

Chính vì đang ở trong thời đại mà giá trị của việc biên tập thông tin giản đơn bị rớt giá thảm hại do sự phổ biến của AI, con người càng buộc phải có sự dũng cảm để tự mình nghiền ngẫm sâu sắc và gánh vác trách nhiệm luân lý đạo đức. Trí tuệ làm chủ công nghệ song hành với tính tự chủ cảnh giác trước sự phụ thuộc thái quá vào kỹ thuật chính là phẩm chất cốt lõi để tồn tại trong thời đại mai sau.`,
      vocabFocus: ['人工知能 (trí tuệ nhân tạo)', '情報 (thông tin)', '通信 (truyền thông/thông tin)', '効率 (hiệu suất)', '倫理 (đạo đức/luân lý)', '依存 (phụ thuộc/lệ thuộc)'],
      grammarFocus: ['〜にほかならない (chính là / không gì khác ngoài)', '〜ざるを得ない (đành phải / buộc phải / không thể không)'],
      questions: [
        {
          id: 'n2-l3-r1-q1',
          question: '筆者が「認めざるを得ない客観的事実」としているのは何ですか。(Điều tác giả cho là "sự thật khách quan buộc phải thừa nhận" là gì?)',
          options: [
            '人間がすべての仕事を失ったこと',
            '情報処理の速度と効率性において人間がAIに敵わない現実',
            'AIが人間の感情を完全に理解できること',
            'コンピューターの価格が高すぎて誰も買えないこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "情報処理の速度と効率性において、人間がもはやAIに敵わない現実は、誰もが認めざるを得ない客観的事実となった。"',
        },
        {
          id: 'n2-l3-r1-q2',
          question: 'AIが生成する作品の限界として筆者が指摘しているのはどれですか。(Giới hạn của các tác phẩm do AI tạo ra là gì?)',
          options: [
            '画質が非常に悪いこと',
            '過去のデータを統計的に再構成したものにすぎず、生々しい感情の葛藤が存在しないこと',
            'ファイルサイズが大きすぎて保存できないこと',
            '著作権がすべて無料であること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "過去に人類が蓄積してきた膨大な電子データを統計的に再構成したものにすぎない。そこには、個人的な苦悩や挫折...生々しい感情の葛藤は一切存在しない。"',
        },
        {
          id: 'n2-l3-r1-q3',
          question: '「生身の人間の実存的な営みにほかならない」の「にほかならない」の文法的なニュアンスは何ですか。(Sắc thái của "にほかならない" trong câu là gì?)',
          options: [
            'Nhấn mạnh tuyệt đối: chính là điều đó, không thể là cái gì khác',
            'Chỉ một giả thuyết mơ hồ không đáng tin',
            'Chỉ một lời xin lỗi trang trọng',
            'Chỉ sự thất bại của con người',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜にほかならない dùng để khẳng định mạnh mẽ bản chất duy nhất của sự việc (chính là... chứ không gì khác).',
        },
        {
          id: 'n2-l3-r1-q4',
          question: '「〜ざるを得ない」という表現の持つ意味として正しいものはどれですか。(Ý nghĩa đúng của biểu hiện "〜ざるを得ない" là gì?)',
          options: [
            'Dù trong lòng không muốn nhưng tình thế khách quan buộc phải làm như vậy (không thể không / đành phải)',
            'Tuyệt đối bị cấm làm điều đó',
            'Muốn làm điều đó bằng bất cứ giá nào',
            'Đã làm xong việc đó từ lâu',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 Động từ thể ない (bỏ ない) + ざるを得ない (suru -> せざるを得ない) mang nghĩa tình thế bắt buộc phải làm như vậy.',
        },
        {
          id: 'n2-l3-r1-q5',
          question: 'AI時代において人間に強く求められている姿勢は何ですか。(Thái độ con người được đòi hỏi mãnh liệt trong thời đại AI là gì?)',
          options: [
            'AIの指示にすべて無批判に従うこと',
            '自らの頭で深く疑い、倫理的な責任を引き受ける覚悟を持つこと',
            'すべてのコンピューターを破壊すること',
            '絵画や文学の創作活動を全面的に中止すること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "自らの頭で深く疑い、倫理的な責任を引き受ける覚悟を持たざるを得ない。テクノロジーを使いこなす知恵と、技術への過度の依存を戒める自律性こそが..."',
        },
        {
          id: 'n2-l3-r1-q6',
          question: 'この文章全体の主旨として最も適切なものはどれですか。(Ý chính toàn bài phù hợp nhất là gì?)',
          options: [
            '生成AIは危険すぎるので全世界で開発を禁止すべきである',
            '真の創造性は人間の葛藤にあり、AIに過度に依存せず自律的な思考と倫理観を持つべきである',
            'AIを使えば人間は勉強も仕事もする必要がなくなる',
            '情報処理能力の高さこそが人間の価値のすべてである',
          ],
          answerIndex: 1,
          explanation: 'Bài viết khẳng định bản chất sáng tạo đích thực nằm ở con người, kêu gọi làm chủ công nghệ thay vì để bản thân bị lệ thuộc đánh mất tính tự chủ.',
        },
      ],
    },
    {
      id: 'n2-l3-r2',
      title: 'Bài đọc 2: スマートフォン依存と認知機能の変容に関する警鐘 (Hồi chuông cảnh báo về sự phụ thuộc smartphone và suy giảm chức năng nhận thức)',
      summary: 'Tác động của việc liên tục dán mắt vào màn hình thông minh tới khả năng tập trung sâu và tư duy phản biện.',
      passageJp: `朝起きてから夜眠る直前まで、片時もスマートフォンを手放せない現代人の生活習慣は、もはや単なる「好みの問題」を超えて深刻な精神的・身体的依存症の領域に達している。疑問が生じれば即座に検索し、友人と途切れることなく通信を交わす生活は、一見すると知的で効率的な日々に思える。

しかし、脳科学の最新研究が明らかにした事実は、私たちの楽観的な思い込みを根本から揺るがしている。絶え間なく押し寄せる通知に注意を奪われ続ける結果、一つの物事に深く没頭して持続的な思考を深める認知機能が著しく低下している現実は、直視せざるを得ない。情報を表面上でスクロールして受動的に消費する行為は、知性の向上ではなく脳の疲弊をもたらしているにほかならない。

記憶力や読解力の衰えを自覚しながらも、画面の光から目を離せない自分に気づいたとき、私たちはテクノロジーに支配されている危うさに戦慄せざるを得ない。

デジタル機器の利便性を享受しつつも、あえて接続を断つ「デジタルデトックス」の時間を意識的に設けることは、自らの思考の主体性を取り戻すために不可欠な防衛策である。`,
      passageVi: `Từ lúc thức dậy buổi sáng cho tới trước khi nhắm mắt ngủ ban đêm, thói quen sinh hoạt không thể rời tay khỏi chiếc điện thoại thông minh dù trong chốc lát của con người hiện đại đã vượt qua giới hạn của "sở thích đơn thuần", chạm tới cảnh giới của chứng nghiện ngập tâm lý và thể xác nghiêm trọng. Hễ có thắc mắc là lập tức tra cứu tìm kiếm, liên lạc không ngớt với bạn bè, cuộc sống ấy thoạt nhìn như những chuỗi ngày đầy tri thức và hiệu suất cao.

Thế nhưng, sự thật mà các nghiên cứu khoa học não bộ mới nhất làm sáng tỏ đang làm lung lay từ tận gốc rễ sự lạc quan chủ quan của chúng ta. Kết quả của việc liên tục bị tước đoạt sự chú ý bởi dòng thông báo trút xuống không ngừng nghỉ đã khiến hiện thực suy giảm nghiêm trọng chức năng nhận thức - khả năng đắm chìm sâu vào một sự vật để đào sâu tư duy bền bỉ - trở thành điều mà chúng ta buộc phải nhìn thẳng vào sự thật. Hành vi cuộn lướt màn hình trên bề mặt để tiêu thụ thông tin thụ động không gì khác ngoài việc mang lại sự kiệt quệ cho não bộ chứ chẳng hề giúp nâng cao trí tuệ.

Dù tự ý thức được sự sa sút của trí nhớ và khả năng đọc hiểu, nhưng khi nhận ra chính bản thân mình không thể dời mắt khỏi ánh sáng màn hình, chúng ta không khỏi rùng mình sợ hãi trước sự nguy hiểm của việc đang bị công nghệ thống trị điều khiển.

Vừa tận hưởng sự tiện lợi của thiết bị số, nhưng việc chủ động bố trí thời gian "cai nghiện kỹ thuật số (digital detox)" để dám dứt bỏ kết nối chính là biện pháp phòng vệ không thể thiếu để giành lại quyền làm chủ tư duy của chính mình.`,
      vocabFocus: ['人工知能 (trí tuệ nhân tạo)', '情報 (thông tin)', '通信 (truyền thông/thông tin)', '効率 (hiệu suất)', '倫理 (đạo đức/luân lý)', '依存 (phụ thuộc/lệ thuộc)'],
      grammarFocus: ['〜にほかならない (chính là / không gì khác ngoài)', '〜ざるを得ない (đành phải / buộc phải / không thể không)'],
      questions: [
        {
          id: 'n2-l3-r2-q1',
          question: '現代人のスマホ利用が達しているレベルとして筆者はどのように表現していますか。(Tác giả miêu tả mức độ dùng smartphone của người hiện đại như thế nào?)',
          options: [
            '趣味として非常に健全な状態',
            '単なる好みの問題を超えた深刻な精神的・身体的依存症の領域',
            'すべての病気を治療できる万能薬のような状態',
            '仕事の道具として完全に使いこなせている状態',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "もはや単なる「好みの問題」を超えて深刻な精神的・身体的依存症の領域に達している。"',
        },
        {
          id: 'n2-l3-r2-q2',
          question: '脳科学の研究によって直視せざるを得ない現実として書かれているのは何ですか。(Hiện thực buộc phải nhìn thẳng theo nghiên cứu não bộ là gì?)',
          options: [
            '人間の脳の大きさが２倍になったこと',
            '通知に注意を奪われ、一つの物事に深く没頭する認知機能が著しく低下している現実',
            'スマートフォンを使えば記憶力が無限に増えること',
            '脳の細胞が全く疲労しなくなったこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "絶え間なく押し寄せる通知に注意を奪われ続ける結果、一つの物事に深く没頭して持続的な思考を深める認知機能が著しく低下している現実は、直視せざるを得ない。"',
        },
        {
          id: 'n2-l3-r2-q3',
          question: '「脳の疲弊をもたらしているにほかならない」の「にほかならない」の役割は何ですか。(Vai trò của "にほかならない" trong câu là gì?)',
          options: [
            'Khẳng định chắc nịch rằng việc lướt mạng tiêu thụ thông tin thụ động chỉ đem lại sự kiệt quệ cho não bộ',
            'Biểu thị một điều ước muốn não không mệt mỏi',
            'Chỉ sự nghi ngờ không có bằng chứng',
            'Khuyên mọi người nên mua điện thoại mới',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜にほかならない khẳng định mạnh mẽ bản chất duy nhất: chính là đem lại mệt mỏi cho não chứ không phải nâng cao trí tuệ.',
        },
        {
          id: 'n2-l3-r2-q4',
          question: '「戦慄せざるを得ない」の「ざるを得ない」の意味として最も適切なものはどれですか。(Nghĩa phù hợp nhất của "ざるを得ない" là gì?)',
          options: [
            'Trước nguy cơ bị công nghệ điều khiển, cảm giác run rẩy sợ hãi tự nhiên trào dâng không thể kìm nén được',
            'Cố tình giả vờ run sợ để trêu người khác',
            'Hoàn toàn không cảm thấy sợ hãi chút nào',
            'Yêu cầu người khác phải sợ hãi theo mình',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜ざるを得ない thể hiện trạng thái cảm xúc, tâm lý hoặc hành vi không thể không diễn ra trong tình huống đó.',
        },
        {
          id: 'n2-l3-r2-q5',
          question: '自らの思考の主体性を取り戻すために筆者が勧めている防衛策は何ですか。(Biện pháp phòng vệ tác giả khuyên để giành lại sự tự chủ tư duy là gì?)',
          options: [
            'スマートフォンをもう１台追加で購入すること',
            'あえて接続を断つ「デジタルデトックス」の時間を意識的に設けること',
            'すべての友達との連絡を永久に断ち切ること',
            '夜間だけインターネットの速度を上げること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "あえて接続を断つ「デジタルデトックス」の時間を意識的に設けることは、自らの思考の主体性を取り戻すために不可欠な防衛策である。"',
        },
        {
          id: 'n2-l3-r2-q6',
          question: 'この文章全体の主旨として最も適切なものはどれですか。(Ý chính toàn bài phù hợp nhất là gì?)',
          options: [
            'スマートフォンは有害なので法律で全面的に禁止すべきだ',
            '依存による認知機能の低下を自覚し、意図的に接続を遮断して思考の主体性を守るべきである',
            '脳科学の研究は信憑性がないので気にする必要はない',
            '効率性を追求するためには一日中画面を見続けるのが最善である',
          ],
          answerIndex: 1,
          explanation: 'Bài viết cảnh báo sự lệ thuộc làm thui chột khả năng tư duy sâu, kêu gọi thực hiện digital detox để bảo vệ quyền làm chủ trí tuệ.',
        },
      ],
    },
    {
      id: 'n2-l3-r3',
      title: 'Bài đọc 3: アルゴリズム支配下の意思決定と人間の主体性の危機 (Ra quyết định dưới sự thống trị của thuật toán và khủng hoảng chủ thể tính con người)',
      summary: 'Khi thuật toán chọn lọc nội dung, gợi ý việc làm, chấm điểm tín dụng thay cho con người, tự do ý chí bị đe dọa.',
      passageJp: `私たちが日常的に触れるニュース、SNSのタイムライン、ECサイトのおすすめ商品に至るまで、現代の情報空間はアルゴリズムによって緻密に最適化されている。過去の閲覧履歴や購買傾向を高速分析し、ユーザーが好むコンテンツだけを提示する仕組みは、情報探索の手間を省く極めて効率的な技術と言える。

しかし、この心地よい利便性の背後で、自らの嗜好に合致した情報だけに囲まれて異なる意見が見えなくなる「フィルターバブル」や「エコーチェンバー」が加速している事態は、民主主義社会にとって深刻な危機と言わざるを得ない。自分の意思で自由に選択しているつもりであっても、実際にはプラットフォームのアルゴリズムに巧妙に誘導されている現実にほかならない。

就職採用の書類選考や銀行の融資審査にまでAIが導入される中、その判断基準が不透明な「ブラックボックス」となっている問題も看過できない。アルゴリズムが学習した過去のデータ自体に偏見や差別が含まれていた場合、社会的不公正がテクノロジーの名の下で固定化されてしまう恐れがある。

システムの便利さに思考を委ねるのではなく、提示された情報の背後にある意図を批判的に問い直す態度を保持し続けることこそが、人間の尊厳を守る唯一の防壁なのである。`,
      passageVi: `Từ tin tức thời sự tiếp xúc hàng ngày, dòng thời gian mạng xã hội, cho tới các sản phẩm gợi ý trên các sàn thương mại điện tử, không gian thông tin hiện đại đang được tối ưu hóa một cách tinh vi bởi các thuật toán. Cơ chế phân tích thần tốc lịch sử duyệt web và xu hướng mua sắm trong quá khứ để chỉ hiển thị những nội dung người dùng yêu thích có thể coi là một công nghệ cực kỳ hiệu suất giúp tiết kiệm công sức tìm kiếm thông tin.

Thế nhưng, đằng sau sự tiện lợi êm ái này, tình trạng gia tăng của "bong bóng bộ lọc (filter bubble)" và "phòng vang thông tin (echo chamber)" - nơi người ta bị bao vây bởi toàn những thông tin hợp gu bản thân và không còn nhìn thấy những ý kiến trái chiều - buộc phải nói rằng đây là một cuộc khủng hoảng nghiêm trọng đối với xã hội dân chủ. Dù đinh ninh rằng bản thân đang tự do lựa chọn bằng chính ý chí của mình, nhưng trong thực tế đó không gì khác ngoài việc đang bị thuật toán của các nền tảng khéo léo dẫn dắt thao túng.

Trong bối cảnh AI được đưa vào áp dụng cho cả việc sàng lọc hồ sơ tuyển dụng việc làm hay thẩm định hồ sơ vay vốn ngân hàng, vấn đề tiêu chuẩn phán đoán trở thành "chiếc hộp đen" mù mờ cũng là điều không thể làm ngơ. Trường hợp chính nguồn dữ liệu quá khứ mà thuật toán nạp vào có chứa định kiến và sự phân biệt đối xử, sẽ có nguy cơ sự bất công bằng xã hội bị đóng đinh hợp pháp hóa dưới danh nghĩa công nghệ.

Thay vì phó thác tư duy cho sự tiện lợi của hệ thống, việc kiên trì duy trì thái độ đặt câu hỏi phản biện về ý đồ ẩn sau các thông tin được bày ra trước mắt chính là thành lũy duy nhất bảo vệ phẩm giá của con người.`,
      vocabFocus: ['人工知能 (trí tuệ nhân tạo)', '情報 (thông tin)', '通信 (truyền thông/thông tin)', '効率 (hiệu suất)', '倫理 (đạo đức/luân lý)', '依存 (phụ thuộc/lệ thuộc)'],
      grammarFocus: ['〜にほかならない (chính là / không gì khác ngoài)', '〜ざるを得ない (đành phải / buộc phải / không thể không)'],
      questions: [
        {
          id: 'n2-l3-r3-q1',
          question: 'アルゴリズムによる最適化の利点として書かれているのは何ですか。(Ưu điểm của việc tối ưu hóa bằng thuật toán là gì?)',
          options: [
            'スマートフォンのバッテリー消費をゼロにすること',
            '過去の履歴を分析し好みの情報だけを提示して情報探索の手間を省く効率性',
            'すべての商品が半額で購入できること',
            'インターネットの利用料金が無料になること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "過去の閲覧履歴や購買傾向を高速分析し、ユーザーが好むコンテンツだけを提示する仕組みは、情報探索の手間を省く極めて効率的な技術と言える。"',
        },
        {
          id: 'n2-l3-r3-q2',
          question: '「深刻な危機と言わざるを得ない」の「ざるを得ない」のニュアンスは何ですか。(Sắc thái của "ざるを得ない" trong câu là gì?)',
          options: [
            'Trước hiện thực các luồng ý kiến đa chiều bị triệt tiêu, người quan sát buộc phải kết luận đây là nguy cơ trầm trọng',
            'Lời nói đùa không có căn cứ',
            'Chỉ sự mong muốn khủng hoảng sớm kết thúc',
            'Mệnh lệnh bắt buộc mọi người phải lo lắng',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜ざるを得ない dùng khi tình hình thực tế quá rõ ràng khiến người nói không thể đưa ra kết luận nào khác.',
        },
        {
          id: 'n2-l3-r3-q3',
          question: '「プラットフォームのアルゴリズムに巧妙に誘導されている現実にほかならない」の「にほかならない」の意味は何ですか。(Nghĩa của "にほかならない" trong câu là gì?)',
          options: [
            'Khẳng định chắc chắn bản chất thực sự chính là bị thuật toán dắt mũi chứ không phải tự do lựa chọn',
            'Sự nghi ngờ có thể bị dẫn dắt hoặc không',
            'Lời khen ngợi sự thông minh của nền tảng',
            'Lời từ chối nhận thông tin',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜にほかならない khẳng định mạnh mẽ: bản chất thực tế đích thị là bị thao túng.',
        },
        {
          id: 'n2-l3-r3-q4',
          question: '採用選考や融資審査におけるAI導入の懸念点として何が指摘されていますか。(Lo ngại về việc dùng AI trong tuyển dụng, cho vay là gì?)',
          options: [
            'コンピューターが熱暴走すること',
            '判断基準がブラックボックスであり、過去データの偏見や差別が固定化される恐れ',
            '結果が出るまでに１０年もかかること',
            '面接官の給料が高くなりすぎること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "判断基準が不透明な「ブラックボックス」となっている問題も看過できない。アルゴリズムが学習した過去のデータ自体に偏見や差別が含まれていた場合、社会的不公正がテクノロジーの名の下で固定化されてしまう恐れがある。"',
        },
        {
          id: 'n2-l3-r3-q5',
          question: '人間の尊厳を守る防壁として筆者が主張している態度はどれですか。(Thái độ được tác giả xem là thành lũy bảo vệ phẩm giá con người là gì?)',
          options: [
            '提示された情報の背後にある意図を批判的に問い直す態度を保持すること',
            'アルゴリズムの指示にすべて従い、自分の頭で考えるのをやめること',
            'インターネットの利用を完全に断念すること',
            'AI開発企業をすべて訴訟すること',
          ],
          answerIndex: 0,
          explanation: 'Câu kết đoạn 4: "システムの便利さに思考を委ねるのではなく、提示された情報の背後にある意図を批判的に問い直す態度を保持し続けることこそが、人間の尊厳を守る唯一の防壁なのである。"',
        },
        {
          id: 'n2-l3-r3-q6',
          question: 'この文章全体の主旨として最も適切なものはどれですか。(Ý chính toàn bài phù hợp nhất là gì?)',
          options: [
            'アルゴリズムの最適化はすべての人類を幸福にする',
            'アルゴリズムによる誘導や偏見の固定化を警戒し、批判的思考を通じて人間の主体性を守るべきである',
            'ECサイトのレコメンド機能はすべて法律で禁止すべきだ',
            '民主主義はインターネットの登場によって完全に完成した',
          ],
          answerIndex: 1,
          explanation: 'Bài viết cảnh giác trước sự thao túng của thuật toán và nguy cơ bất công bằng, kêu gọi con người giữ vững tư duy phản biện.',
        },
      ],
    },
    {
      id: 'n2-l3-r4',
      title: 'Bài đọc 4: フェイクニュースの拡散と民主主義の倫理的基盤 (Sự lan truyền tin giả và nền tảng đạo đức của nền dân chủ)',
      summary: 'Tác động tai hại của tin tức sai lệch, giật gân trên mạng xã hội đối với sự đồng thuận xã hội và niềm tin công cộng.',
      passageJp: `ソーシャルメディアの爆発的な普及に伴い、真偽不明の情報や意図的に捏造されたフェイクニュースが瞬く間に世界中を駆け巡る現象が日常化した。センセーショナルで感情を過度に煽る虚偽情報は、冷静で客観的な事実よりもはるかに速く、広く拡散する傾向があることが学術的調査でも証明されている。

選挙の公正性を歪め、特定の人種や集団に対する憎悪を扇動するフェイクニュースの氾濫は、社会の分断を決定的なものにしつつある。人々が共有すべき「客観的事実」の基盤が崩壊すれば、建設的な議論や妥協による合意形成は不可能となり、民主主義の根幹が揺らぐ事態を招かざるを得ない。

一部の巨大ITプラットフォームは、莫大な広告収入を得るために感情を刺激する過激な投稿を優遇してきた倫理的責任を逃れることはできない。企業側の自主規制やファクトチェック機能の強化は、社会的インフラとしての義務にほかならない。

同時に、私たち受け手側も、「自分が信じたい情報」を無批判に信じ込んで拡散する軽率さを戒めなければならない。情報通信社会の成熟とは、技術の高度化そのものではなく、一人ひとりの市民が持つ情報の真偽を見極める倫理的リテラシーにかかっているのである。`,
      passageVi: `Song hành cùng sự phổ biến bùng nổ của truyền thông xã hội, hiện tượng những thông tin không rõ thật giả hay những tin tức giả mạo (fake news) bị cố tình bịa đặt lan truyền khắp thế giới trong chớp mắt đã trở thành chuyện cơm bữa. Các cuộc điều tra học thuật cũng đã chứng minh xu hướng rằng các thông tin hư cấu mang tính giật gân, kích động cảm xúc thái quá luôn lan truyền nhanh hơn và rộng hơn rất nhiều so với những sự thật khách quan điềm tĩnh.

Sự tràn ngập của tin giả bóp méo tính công bằng của các cuộc bầu cử, kích động lòng thù hận đối với các chủng tộc hay tập thể nhất định, đang biến sự chia rẽ xã hội thành điều mang tính định đoạt. Nếu nền tảng "sự thật khách quan" mà mọi người cần chia sẻ chung bị sụp đổ, việc kiến tạo đồng thuận thông qua thảo luận mang tính xây dựng hay thỏa hiệp sẽ trở nên bất khả thi, buộc phải dẫn tới tình cảnh làm lung lay tận gốc rễ nền dân chủ.

Một số tập đoàn nền tảng công nghệ thông tin khổng lồ không thể nào trốn tránh trách nhiệm luân lý đạo đức khi từng ưu ái các bài đăng cực đoan kích động cảm xúc nhằm thu về các khoản lợi nhuận quảng cáo kếch xù. Việc doanh nghiệp tự giác siết chặt quản chế và tăng cường tính năng kiểm chứng sự thật (fact check) chính là không gì khác ngoài nghĩa vụ đối với một hạ tầng xã hội.

Đồng thời, phía những người tiếp nhận như chúng ta cũng phải tự cảnh giác trước sự bốc đồng nhẹ dạ cả tin vào những "thông tin mà mình muốn tin" để rồi vô tư lan truyền. Sự trưởng thành của một xã hội truyền thông thông tin không nằm ở bản thân việc công nghệ tiên tiến đến mức nào, mà phụ thuộc vào năng lực hiểu biết đạo đức để thẩm định phân biệt thật giả của từng công dân.`,
      vocabFocus: ['人工知能 (trí tuệ nhân tạo)', '情報 (thông tin)', '通信 (truyền thông/thông tin)', '効率 (hiệu suất)', '倫理 (đạo đức/luân lý)', '依存 (phụ thuộc/lệ thuộc)'],
      grammarFocus: ['〜にほかならない (chính là / không gì khác ngoài)', '〜ざるを得ない (đành phải / buộc phải / không thể không)'],
      questions: [
        {
          id: 'n2-l3-r4-q1',
          question: '虚偽情報が客観的事実よりも拡散しやすい理由は何ですか。(Tại sao tin giả lại dễ lan truyền hơn sự thật khách quan?)',
          options: [
            '文字数が非常に少ないから',
            'センセーショナルで感情を過度に煽る性質があるから',
            '大統領が全員に転送を命じるから',
            'インターネットの料金が安くなるから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "センセーショナルで感情を過度に煽る虚偽情報は、冷静で客観的な事実よりもはるかに速く、広く拡散する傾向がある..."',
        },
        {
          id: 'n2-l3-r4-q2',
          question: '客観的事実の基盤が崩壊した結果として何が起きると書かれていますか。(Điều gì sẽ xảy ra khi nền tảng sự thật khách quan sụp đổ?)',
          options: [
            'すべての新聞社が利益を増やすこと',
            '建設的な議論や合意形成が不可能となり、民主主義の根幹が揺らぐ事態を招かざるを得ない',
            '学校のテストがすべて選択式になること',
            '国民全員が外国へ引っ越すこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "建設的な議論や妥協による合意形成は不可能となり、民主主義の根幹が揺らぐ事態を招かざるを得ない。"',
        },
        {
          id: 'n2-l3-r4-q3',
          question: 'ITプラットフォーム企業に課せられた「義務にほかならない」とされる行動は何ですか。(Hành động được coi là "không gì khác ngoài nghĩa vụ" của doanh nghiệp IT là gì?)',
          options: [
            '自主規制やファクトチェック機能の強化',
            'すべてのSNSのアカウントを有料化すること',
            '広告の料金を１０倍に値上げすること',
            '政治に関する投稿をすべて削除すること',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 3: "企業側の自主規制やファクトチェック機能の強化は、社会的インフラとしての義務にほかならない。"',
        },
        {
          id: 'n2-l3-r4-q4',
          question: '「招かざるを得ない」の「ざるを得ない」の文法的なニュアンスは何ですか。(Sắc thái của "ざるを得ない" trong câu là gì?)',
          options: [
            'Diễn tả một hệ quả xấu tất yếu phải xảy đến do hoàn cảnh không thể nào tránh khỏi',
            'Chỉ một lời mời mọc rủ rê',
            'Chỉ sự phủ định hoàn toàn hậu quả',
            'Lời khen ngợi nền dân chủ',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜ざるを得ない thể hiện việc không thể tránh khỏi một kết cục tất yếu.',
        },
        {
          id: 'n2-l3-r4-q5',
          question: '情報を受け取る側の市民に戒められている行動は何ですか。(Hành vi mà người dân tiếp nhận thông tin cần cảnh giác là gì?)',
          options: [
            '図書館で本を読むこと',
            '自分が信じたい情報を無批判に信じ込んで軽率に拡散すること',
            '友達と電話で会話すること',
            'ニュースを全く見ないこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 4: "私たち受け手側も、「自分が信じたい情報」を無批判に信じ込んで拡散する軽率さを戒めなければならない。"',
        },
        {
          id: 'n2-l3-r4-q6',
          question: '情報通信社会の成熟は何にかかっていると筆者は結論づけていますか。(Tác giả kết luận sự trưởng thành xã hội thông tin phụ thuộc vào đâu?)',
          options: [
            'コンピューターの計算速度の向上だけ',
            '市民一人ひとりが持つ情報の真偽を見極める倫理的リテラシー',
            'すべての国民にスマートフォンを２台持たせること',
            '海外のニュースをすべて遮断すること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn cuối: "一人ひとりの市民が持つ情報の真偽を見極める倫理的リテラシーにかかっているのである。"',
        },
      ],
    },
    {
      id: 'n2-l3-r5',
      title: 'Bài đọc 5: 自動運転技術の社会実装と不可避な倫理的ジレンマ (Hiện thực hóa xe tự lái vào xã hội và bài toán tiến thoái lưỡng nan đạo đức không thể né tránh)',
      summary: 'Khi tai nạn giao thông bất khả kháng xảy ra, xe tự lái nên ưu tiên bảo vệ hành khách trên xe hay người đi bộ bên đường?',
      passageJp: `AIによる画像認識やセンサー技術の長足の進歩に伴って、自動車の完全自動運転の社会実装が目前に迫っている。居眠りや脇見運転といった人間の不注意による交通事故を激減させ、過疎地における高齢者の移動手段を確保する観点から、自動運転への期待は極めて高い。

しかし、技術的な安全性がどれほど向上したとしても、緊急事態においてAIが下すべき判断をめぐる「倫理的ジレンマ」は回避できない。いわゆる「トロッコ問題」のように、ブレーキが故障した際、直進して歩行者の群れに突っ込むか、それともハンドルを切って搭乗者を危険に晒すかという究極の選択を、事前にプログラムしておかざるを得ない現実が存在する。

搭乗者の生命保護を最優先に設計すれば歩行者側の安全が脅かされ、歩行者保護を優先すれば消費者が自動運転車を購入しなくなるという矛盾に直面する。この問いに絶対的な正解は存在しないが、技術者に判断の全責任を押し付けることは許されない。

社会全体で生命の価値や事故時の責任分担について徹底的に議論を尽くし、法制度の整備を進めることこそが、自動運転技術を真に安全に受け入れるための土台にほかならない。`,
      passageVi: `Cùng với những bước tiến dài của công nghệ cảm biến và nhận diện hình ảnh bằng AI, việc đưa tính năng tự lái hoàn toàn của ô tô vào hiện thực đời sống xã hội đang cận kề trước mắt. Xét từ góc độ giảm thiểu chóng mặt các vụ tai nạn giao thông do sự bất cẩn của con người như ngủ gật hay lơ đễnh khi lái, cũng như đảm bảo phương tiện đi lại cho người cao tuổi ở những vùng thưa dân, kỳ vọng đặt vào xe tự lái là cực kỳ to lớn.

Tuy nhiên, dù độ an toàn kỹ thuật có nâng cao đến đâu chăng nữa, bài toán "tiến thoái lưỡng nan về đạo đức" xoay quanh phán quyết mà AI phải đưa ra trong các tình huống khẩn cấp là điều không thể né tránh. Tương tự như "Bài toán đoàn tàu (trolley problem)" nổi tiếng, trong trường hợp hệ thống phanh bị hỏng, việc lao thẳng đâm vào đám đông người đi bộ hay bẻ lái lao vào tường đặt tính mạng hành khách trên xe vào nguy hiểm là một sự lựa chọn cùng cực mà các nhà phát triển buộc phải lập trình cài đặt sẵn từ trước.

Nếu thiết kế ưu tiên bảo vệ tính mạng hành khách lên hàng đầu thì sự an toàn của người đi bộ bị đe dọa, còn nếu ưu tiên người đi bộ thì người tiêu dùng sẽ không muốn bỏ tiền mua xe tự lái - đây là một mâu thuẫn đối nghịch sâu sắc. Đối với câu hỏi này không hề tồn tại một đáp án tuyệt đối đúng, nhưng việc đổ toàn bộ gánh nặng trách nhiệm lên vai các kỹ sư công nghệ là điều không thể chấp nhận được.

Toàn xã hội cùng nhau tranh luận thấu đáo về giá trị của sinh mạng cũng như sự phân chia trách nhiệm khi xảy ra tai nạn và đẩy mạnh hoàn thiện khung khổ pháp lý chính là không gì khác ngoài nền tảng để đón nhận công nghệ xe tự lái một cách an toàn thực sự.`,
      vocabFocus: ['人工知能 (trí tuệ nhân tạo)', '情報 (thông tin)', '通信 (truyền thông/thông tin)', '効率 (hiệu suất)', '倫理 (đạo đức/luân lý)', '依存 (phụ thuộc/lệ thuộc)'],
      grammarFocus: ['〜にほかならない (chính là / không gì khác ngoài)', '〜ざるを得ない (đành phải / buộc phải / không thể không)'],
      questions: [
        {
          id: 'n2-l3-r5-q1',
          question: '自動運転技術の実用化が期待されている主な理由は何ですか。(Lý do chính khiến xe tự lái được kỳ vọng là gì?)',
          options: [
            '車の価格が自転車より安くなるから',
            '人間の不注意による事故激減と過疎地高齢者の移動手段の確保',
            '道路を走る車が完全にゼロになるから',
            'ガソリンを使わずに空気だけで走るから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "居眠りや脇見運転といった人間の不注意による交通事故を激減させ、過疎地における高齢者の移動手段を確保する観点から、自動運転への期待は極めて高い。"',
        },
        {
          id: 'n2-l3-r5-q2',
          question: '自動運転において回避できない倫理的ジレンマとはどのような問題ですか。(Song đề đạo đức không thể né tránh trong xe tự lái là gì?)',
          options: [
            '車の車体の色を何色にするかという問題',
            '緊急時に歩行者と搭乗者のどちらの生命を優先すべきかという究極の選択',
            '音楽をどの音量で流すかという問題',
            'どのガソリンスタンドで給油するかという問題',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "緊急事態においてAIが下すべき判断をめぐる「倫理的ジレンマ」は回避できない。歩行者の群れに突っ込むか、それともハンドルを切って搭乗者を危険に晒すかという究極の選択..."',
        },
        {
          id: 'n2-l3-r5-q3',
          question: '「事前にプログラムしておかざるを得ない」の「ざるを得ない」の意味は何ですか。(Nghĩa của "ざるを得ない" trong câu là gì?)',
          options: [
            'Tình huống bắt buộc các kỹ sư không thể không cài đặt sẵn quy tắc xử lý khẩn cấp',
            'Cấm tuyệt đối việc lập trình',
            'Lập trình một cách ngẫu nhiên không cần suy nghĩ',
            'Chỉ một mong muốn không thành hiện thực',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜ざるを得ない biểu thị sự tất yếu bắt buộc tình thế phải làm.',
        },
        {
          id: 'n2-l3-r5-q4',
          question: '歩行者保護を優先した場合に生じる矛盾は何ですか。(Mâu thuẫn nảy sinh nếu ưu tiên người đi bộ là gì?)',
          options: [
            '車が走行できなくなること',
            '消費者が自分を守ってくれない自動運転車を購入しなくなること',
            '歩行者が道路を歩かなくなること',
            '保険料が無料になること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3 nêu: "歩行者保護を優先すれば消費者が自動運転車を購入しなくなるという矛盾に直面する。"',
        },
        {
          id: 'n2-l3-r5-q5',
          question: '「安全に受け入れるための土台にほかならない」の「にほかならない」の機能は何ですか。(Chức năng của "にほかならない" ở đây là gì?)',
          options: [
            'Khẳng định chắc nịch rằng việc toàn xã hội thảo luận cặn kẽ và lập khung pháp lý chính là nền tảng cốt lõi duy nhất',
            'Phủ định việc tiếp nhận công nghệ tự lái',
            'Chỉ sự thất bại của các kỹ sư',
            'Lời yêu cầu hoãn lại dự án',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜にほかならない nhấn mạnh khẳng định chân lý duy nhất.',
        },
        {
          id: 'n2-l3-r5-q6',
          question: '倫理的ジレンマに対して筆者が述べている社会の取るべき行動は何ですか。(Hành động xã hội cần làm trước song đề đạo đức là gì?)',
          options: [
            'すべての責任を現場の技術者に押し付けること',
            '生命の価値や事故時の責任分担について議論を尽くし法制度を整備すること',
            '自動運転車の開発を即座に中止すること',
            '事故が起きたらすべて運命として諦めること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "社会全体で生命の価値や事故時の責任分担について徹底的に議論を尽くし、法制度の整備を進めることこそが、自動運転技術を真に安全に受け入れるための土台にほかならない。"',
        },
      ],
    },
  ],

  // ================= N2 BÀI 4 =================
  'n2-l4': [
    {
      id: 'n2-l4-r1',
      title: 'Bài đọc 1: 歴史的景観の保存と都市再開発をめぐる住民対立と合意形成 (Bất đồng giữa cư dân và tạo dựng đồng thuận xoay quanh bảo tồn cảnh quan lịch sử hay tái phát triển đô thị)',
      summary: 'Xung đột giữa việc giữ gìn phố cổ truyền thống với nhu cầu hiện đại hóa hạ tầng thương mại tại các thành phố lịch sử.',
      passageJp: `全国の古都や歴史的街並みを残す地方都市において、老朽化した木造家屋の防災対策や地域経済の活性化を目的とする都市再開発計画をめぐって、激しい議論が巻き起こっている。高層マンションや大型商業施設の建設を推進する開発業者や一部の商業関係者に対して、歴史的な情緒や景観の喪失を懸念する住民や文化財保護団体が強く反発し、激しい対立が続く事例は後を絶たない。

防災性の向上やバリアフリー化の推進にあたっては、古い町並みをそのまま保存し続けることには現実的な困難が伴う。狭い路地は消防車や救急車の進入を妨げ、地震や火災が発生した際には壊滅的な被害を招く恐れがあるからである。安全性の確保は住民生活の基本であり、情緒論だけで開発を全面的に拒否することはできない。

しかし、一度破壊された歴史的建造物や石畳の街並みは、どれほど巨額の資金を投じても二度と復元できない。地域の独自性や歴史的価値を軽視した開発は、結果として街の魅力を奪い、観光需要を減退させることにもなりかねない。

再開発事業を実施するにあたっては、行政、住民、開発業者が同じテーブルにつき、徹底的な協議を重ねることが不可欠である。伝統的な建築様式を一部保存しながら最新の耐震設備を取り入れるなど、双方が互いの主張を尊重し、現実的な妥協点を見出す粘り強い合意形成の努力が求められている。`,
      passageVi: `Tại các cố đô hay các đô thị lưu giữ những dãy phố cổ lịch sử trên toàn quốc, xoay quanh các quy hoạch tái thiết đô thị nhằm mục tiêu phòng chống thiên tai cho các ngôi nhà gỗ xuống cấp và phục hồi kinh tế địa phương, những cuộc tranh luận gay gắt đang bùng nổ liên tiếp. Đối lập với các chủ đầu tư và một số giới thương nhân muốn đẩy mạnh xây dựng các chung cư cao tầng và trung tâm thương mại lớn, các cư dân cùng các hội bảo tồn di sản văn hóa lo ngại sự mai một của cảnh quan và nét thi vị lịch sử đã phản ứng dữ dội, tạo nên những vụ việc đối đầu căng thẳng không dứt.

Khi tiến hành nâng cao năng lực phòng chống thiên tai và thúc đẩy thiết kế không rào cản (barrier-free), việc giữ nguyên vẹn phố cổ như vốn có luôn đi kèm với những khó khăn thực tế. Những con ngõ hẹp sẽ cản trở xe cứu hỏa và xe cấp cứu tiếp cận, có nguy cơ dẫn tới thảm họa tàn khốc mỗi khi xảy ra động đất hay hỏa hoạn. Đảm bảo an toàn là điều cơ bản nhất của đời sống cư dân, nên không thể chỉ dựa vào cảm tính mà cự tuyệt hoàn toàn việc phát triển.

Tuy nhiên, những công trình lịch sử hay những con đường lát đá một khi đã bị phá hủy thì dù có rót bao nhiêu tiền bạc đi chăng nữa cũng không bao giờ có thể phục dựng lại được. Việc phát triển coi nhẹ bản sắc và giá trị lịch sử của vùng đất rốt cuộc rất có thể sẽ cướp đi sức hút của đô thị và làm suy giảm nhu cầu du lịch.

Khi thực hiện các dự án tái phát triển, việc chính quyền, cư dân và nhà đầu tư cùng ngồi lại một bàn và đối thoại đàm phán triệt để là điều thiết yếu. Vừa lưu giữ một phần các kiến trúc truyền thống nhưng vừa lồng ghép các thiết bị chống động đất tối tân, sự nỗ lực kiên trì tạo dựng đồng thuận - nơi đôi bên cùng tôn trọng quan điểm của nhau và tìm ra điểm thỏa hiệp thực tế - đang được đòi hỏi hơn bao giờ hết.`,
      vocabFocus: ['配慮 (chu đáo/quan tâm)', '尊重 (tôn trọng)', '妥協 (thỏa hiệp)', '信頼 (tin cậy)', '協議 (đàm phán/hiệp nghị)', '対立 (đối lập/xung đột)'],
      grammarFocus: ['〜にあたって (khi bắt đầu / nhân dịp chuẩn bị làm gì trọng đại)', '〜をめぐって (xoay quanh vấn đề tranh luận / xung đột về)'],
      questions: [
        {
          id: 'n2-l4-r1-q1',
          question: '都市再開発計画をめぐってどのような対立が起きていますか。(Cuộc xung đột nào đang diễn ra xoay quanh quy hoạch tái thiết đô thị?)',
          options: [
            '開発の推進派と、歴史的景観の喪失を懸念する住民や保護団体との対立',
            '消防署と警察署との管轄争い',
            '外国からの観光客同士のケンカ',
            '子供たちと学校の先生との対立',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 1 nêu: "開発業者や一部の商業関係者に対して、歴史的な情緒や景観の喪失を懸念する住民や文化財保護団体が強く反発し、激しい対立が続く..."',
        },
        {
          id: 'n2-l4-r1-q2',
          question: '古い町並みをそのまま残すことの現実的な危険性は何ですか。(Nguy hiểm thực tế của việc giữ nguyên vẹn phố cổ là gì?)',
          options: [
            '幽霊が出ること',
            '狭い路地が緊急車両の進入を妨げ、災害時に壊滅的な被害を招く恐れがあること',
            '電気代が高くなること',
            '観光客が多すぎて歩けなくなること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "狭い路地は消防車や救急車の進入を妨げ、地震や火災が発生した際には壊滅的な被害を招く恐れがあるからである。"',
        },
        {
          id: 'n2-l4-r1-q3',
          question: '「〜をめぐって」という文法表現が表す意味は何ですか。(Nghĩa của biểu hiện ngữ pháp "〜をめぐって" là gì?)',
          options: [
            'Xoay quanh một đề tài, sự việc làm trung tâm của các ý kiến đối lập, tranh luận hoặc xung đột',
            'Đi vòng quanh một cái hồ',
            'Chỉ nguyên nhân dẫn đến bệnh tật',
            'Lời mời đi du lịch vòng quanh thế giới',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜をめぐって biểu thị một chủ đề, vấn đề gây ra tranh cãi, đàm luận đối lập giữa nhiều bên.',
        },
        {
          id: 'n2-l4-r1-q4',
          question: '「再開発事業を実施するにあたって」の「にあたって」のニュアンスは何ですか。(Sắc thái của "にあたって" trong câu là gì?)',
          options: [
            'Vào thời điểm chuẩn bị bước vào thực hiện một sự việc hệ trọng, cần có tâm thế và chuẩn bị chu đáo',
            'Sau khi sự việc đã kết thúc từ lâu',
            'Chỉ sự thất bại của dự án',
            'Chỉ việc tình cờ gặp một người bạn',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜にあたって dùng trong bối cảnh chuẩn bị bắt tay vào một hành động hay sự kiện quan trọng (khi tiến hành / nhân dịp bắt đầu làm).',
        },
        {
          id: 'n2-l4-r1-q5',
          question: '歴史的景観の軽視が招きかねない経済的結果は何ですか。(Hậu quả kinh tế có thể xảy ra khi xem nhẹ cảnh quan lịch sử là gì?)',
          options: [
            '街の魅力を奪い、観光需要を減退させること',
            '全国の銀行が破綻すること',
            '税金の徴収が完全に不可能になること',
            '建物の建築費用が無料になること',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 3: "地域の独自性や歴史的価値を軽視した開発は、結果として街の魅力を奪い、観光需要を減退させることにもなりかねない。"',
        },
        {
          id: 'n2-l4-r1-q6',
          question: '筆者が求めている望ましい合意形成のあり方はどれですか。(Cách thức kiến tạo đồng thuận lý tưởng mà tác giả kêu gọi là gì?)',
          options: [
            '開発業者の計画を無条件で１００％受け入れること',
            '双方が互いの主張を尊重し、伝統様式と耐震設備を融合させるなど現実的な妥協点を見出すこと',
            '裁判所にすべての判断を任せて住民は一切発言しないこと',
            '古い町をすべて解体して巨大なショッピングモールだけにすること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn cuối: "伝統的な建築様式を一部保存しながら最新の耐震設備を取り入れるなど、双方が互いの主張を尊重し、現実的な妥協点を見出す粘り強い合意形成の努力が求められている。"',
        },
      ],
    },
    {
      id: 'n2-l4-r2',
      title: 'Bài đọc 2: 国際共同研究の推進にあたって求められる倫理的配慮と相互尊重 (Sự tôn trọng lẫn nhau và quan tâm đạo đức cần có khi xúc tiến nghiên cứu hợp tác quốc tế)',
      summary: 'Thách thức về bất đồng văn hóa, quyền sở hữu trí tuệ và chuẩn mực đạo đức khi các nhà khoa học đa quốc gia làm việc chung.',
      passageJp: `地球温暖化対策や難病治療薬の開発、宇宙探査をはじめとする現代の先端科学技術は、一国単独の資金力や研究リソースだけでは解決できない規模に達している。これに伴い、世界各国の大学や研究機関が国境を越えて手を結ぶ国際共同研究の重要性が急速に高まってきた。

しかし、異文化の研究者同士が大規模なプロジェクトを推進するにあたっては、言語の壁だけでなく、研究倫理やデータ共有をめぐる深刻な意見の対立がしばしば発生する。例えば、遺伝子情報や被験者の個人データの取り扱い基準をめぐっては、各国の法制度や宗教的背景によって許容範囲が大きく異なるため、事前に厳密な共通ルールを定めておかなければ研究全体が頓挫しかねない。

また、研究成果として得られた知的財産権の配分や特許の帰属をめぐる交渉においても、主導権を握ろうとする大国と新興国の間で激しい摩擦が生じがちである。自国の利益ばかりを優先し、他国の研究者への敬意を欠いた態度は、長年築き上げた学術的信頼を一瞬で失墜させる結果を招く。

国際プロジェクトを真の成功へ導くためには、研究開始にあたって参加国全員が対等なパートナーとして互いの文化的・倫理的価値観を尊重し、利害の対立を乗り越える粘り強い協議と妥協の精神を持つことが何よりも不可欠である。`,
      passageVi: `Các công nghệ khoa học tiên tiến thời nay - mở đầu từ đối phó nóng lên toàn cầu, sáng chế thuốc điều trị các bệnh nan y, cho tới thám hiểm không gian vũ trụ - đã chạm tới quy mô mà nguồn lực nghiên cứu hay năng lực tài chính của riêng một quốc gia đơn độc không thể nào giải quyết nổi. Kéo theo điều này, tầm quan trọng của các nghiên cứu hợp tác quốc tế - nơi các trường đại học và viện nghiên cứu trên khắp thế giới bắt tay vượt qua biên giới - đang gia tăng nhanh chóng.

Thế nhưng, khi các nhà nghiên cứu thuộc các nền văn hóa khác nhau bắt tay vào xúc tiến một dự án quy mô lớn, không chỉ rào cản ngôn ngữ mà những bất đồng ý kiến gay gắt xoay quanh việc chia sẻ dữ liệu và đạo đức nghiên cứu thường xuyên nổ ra. Ví dụ, xoay quanh tiêu chuẩn xử lý thông tin di truyền hay dữ liệu cá nhân của người tham gia thử nghiệm, do phạm vi dung nạp rất khác biệt tùy theo bối cảnh tôn giáo và thể chế pháp lý của mỗi nước, nếu không định ra các quy tắc chung chặt chẽ ngay từ trước thì toàn bộ công trình nghiên cứu rất có thể sẽ bị đổ vỡ giữa chừng.

Ngoài ra, ngay cả trong đàm phán phân chia quyền sở hữu trí tuệ hay quyền sở hữu bằng sáng chế thu được từ thành quả nghiên cứu, những ma sát căng thẳng giữa các nước lớn muốn nắm quyền chủ đạo với các nước mới nổi cũng rất dễ nảy sinh. Thái độ chỉ ưu tiên lợi ích của riêng nước mình mà thiếu đi sự tôn trọng đối với các nhà nghiên cứu nước bạn sẽ dẫn tới kết quả làm sụp đổ lòng tin học thuật đã dày công gây dựng trong nhiều năm chỉ trong chớp mắt.

Để dẫn dắt dự án quốc tế tới thành công thực sự, vào thời điểm chuẩn bị bắt đầu nghiên cứu, việc tất cả các quốc gia tham gia với tư cách đối tác bình đẳng cùng tôn trọng các giá trị quan văn hóa đạo đức của nhau, có tinh thần thỏa hiệp và kiên trì hiệp thương đối thoại để vượt qua sự đối lập về lợi ích chính là điều tối quan trọng hơn bất cứ thứ gì.`,
      vocabFocus: ['配慮 (chu đáo/quan tâm)', '尊重 (tôn trọng)', '妥協 (thỏa hiệp)', '信頼 (tin cậy)', '協議 (đàm phán/hiệp nghị)', '対立 (đối lập/xung đột)'],
      grammarFocus: ['〜にあたって (khi bắt đầu / nhân dịp chuẩn bị làm gì trọng đại)', '〜をめぐって (xoay quanh vấn đề tranh luận / xung đột về)'],
      questions: [
        {
          id: 'n2-l4-r2-q1',
          question: '国際共同研究の必要性が高まっている理由は何ですか。(Tại sao tính cần thiết của nghiên cứu hợp tác quốc tế lại gia tăng?)',
          options: [
            '各国の科学者が旅行を楽しみたいから',
            '気候変動や難病治療などが一国の資金やリソースだけでは解決できない規模に達しているから',
            '研究室の電気が止まってしまったから',
            'すべての研究論文を英語で書かなければならない法律ができたから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "地球温暖化対策や難病治療薬の開発...先端科学技術は、一国単独の資金力や研究リソースだけでは解決できない規模に達している。"',
        },
        {
          id: 'n2-l4-r2-q2',
          question: '研究推進にあたって対立が生じやすい事項として何が挙げられていますか。(Hạng mục dễ nảy sinh xung đột khi xúc tiến nghiên cứu là gì?)',
          options: [
            '昼休みに何を食べるかという問題',
            '研究倫理、遺伝子や被験者データの共有基準、知的財産権の配分をめぐる対立',
            'オフィスの冷房の温度設定',
            '研究員の白衣の色',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 & 3: "研究倫理やデータ共有をめぐる深刻な意見の対立...遺伝子情報や被験者の個人データの取り扱い基準をめぐっては...知的財産権の配分や特許の帰属をめぐる交渉..."',
        },
        {
          id: 'n2-l4-r2-q3',
          question: '「知的財産権の配分をめぐる交渉」の「をめぐる」の機能は何ですか。(Chức năng của "をめぐる" trong cụm từ là gì?)',
          options: [
            'Chỉ đề tài, nội dung tranh chấp tranh luận trong đàm phán (xoay quanh việc phân bổ quyền SHTT)',
            'Đi dạo quanh tòa nhà văn phòng',
            'Chỉ sự thất bại của một cuộc đàm phán',
            'Chỉ thời gian bắt đầu họp',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜をめぐる biểu thị chủ đề là đối tượng nảy sinh đàm phán, tranh chấp giữa các bên.',
        },
        {
          id: 'n2-l4-r2-q4',
          question: '自国の利益ばかりを優先する態度が招く恐れのある結果は何ですか。(Kết quả mà thái độ chỉ vụ lợi cho nước mình có thể chuốc lấy là gì?)',
          options: [
            '巨額の利益を独占できること',
            '長年築き上げた学術的信頼を一瞬で失墜させる結果',
            '世界大統領に選ばれること',
            '特許が世界中で無効になること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "自国の利益ばかりを優先し、他国の研究者への敬意を欠いた態度は、長年築き上げた学術的信頼を一瞬で失墜させる結果を招く。"',
        },
        {
          id: 'n2-l4-r2-q5',
          question: '「研究開始にあたって」の「にあたって」の意味は何ですか。(Nghĩa của "にあたって" trong câu là gì?)',
          options: [
            'Vào thời điểm chuẩn bị bắt tay vào khởi động nghiên cứu',
            'Sau khi nghiên cứu đã công bố được 10 năm',
            'Chỉ lý do nghiên cứu bị hủy bỏ',
            'Chỉ sự bất lực của các nhà khoa học',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜にあたって dùng chỉ thời điểm chuẩn bị bước vào một sự kiện quan trọng.',
        },
        {
          id: 'n2-l4-r2-q6',
          question: '国際プロジェクトの真の成功のために不可欠な精神は何ですか。(Tinh thần thiết yếu cho thành công thực sự của dự án quốc tế là gì?)',
          options: [
            '最もお金を出した国がすべての決定権を独占すること',
            '対等なパートナーとして価値観を尊重し、対立を乗り越える粘り強い協議と妥協の精神',
            '他国の研究者をすべて排除して自国民だけで進めること',
            'データを一切公開せずに秘密裏に実験を続けること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "参加国全員が対等なパートナーとして互いの文化的・倫理的価値観を尊重し、利害の対立を乗り越える粘り強い協議と妥協の精神を持つことが何よりも不可欠である。"',
        },
      ],
    },
    {
      id: 'n2-l4-r3',
      title: 'Bài đọc 3: ゲノム編集技術の応用をめぐる生命倫理と国際規範 (Đạo đức sinh học và quy phạm quốc tế xoay quanh ứng dụng công nghệ chỉnh sửa gen)',
      summary: 'Lằn ranh đỏ giữa việc chữa trị bệnh hiểm nghèo bằng CRISPR và nguy cơ tạo ra trẻ em thiết kế theo yêu cầu.',
      passageJp: `生命の設計図であるDNA配列を極めて高い精度で書き換える「ゲノム編集技術（CRISPR-Cas9など）」の登場は、生物学や医学の分野に革命的な進歩をもたらした。遺伝性の難病に対する根本的な治療法の開発や、気候変動に耐えうる農作物の品種改良など、人類に与える恩恵の大きさは計り知れない。

しかし、この強力な技術を人間の受精卵や生殖細胞に応用することをめぐっては、世界中で深刻な倫理的対立が続いている。病気の予防という名目を越えて、親の望む容姿や高い知能を持った子供を意図的に作り出す「デザイナーベビー」への道を開きかねないという強い懸念が表明されているからである。一度人の生殖系列に施された改変は、世代を超えて未来の子孫へと永久に受け継がれる不可逆的なリスクを孕んでいる。

科学技術の暴走を防ぐにあたっては、研究者の個人的な好奇心や一企業の商業的野心に判断を委ねることは極めて危険である。科学の進歩がもたらすリスクを正しく評価し、人間の生命の尊厳を最優先とする厳格なガイドラインを国際社会が共同で策定しなければならない。

新たな生命科学の時代を迎えるにあたって、私たちは技術の可能性に目を奪われるだけでなく、倫理的な限界をめぐる継続的な協議を通じて、人類共通の規範を確立していく重い責任を負っている。`,
      passageVi: `Sự ra đời của "Công nghệ chỉnh sửa bộ gen (như CRISPR-Cas9)" - thứ có thể viết lại các chuỗi ADN vốn là bản thiết kế của sự sống với độ chính xác cực kỳ cao - đã mang lại những bước tiến mang tính cách mạng cho các lĩnh vực sinh học và y học. Từ việc nghiên cứu phát triển các liệu pháp điều trị tận gốc các chứng bệnh nan y do di truyền cho tới cải tạo giống cây trồng có thể chịu đựng được biến đổi khí hậu, độ lớn của những ân huệ đem lại cho nhân loại là khôn xiết.

Thế nhưng, xoay quanh việc ứng dụng công nghệ đầy uy lực này vào các tế bào sinh sản và phôi thụ tinh của con người, những đối lập đạo đức sâu sắc đang tiếp diễn trên toàn thế giới. Lý do là bởi người ta bày tỏ nỗi quan ngại sâu sắc rằng nó rất có thể sẽ mở đường cho hiện tượng "em bé thiết kế (designer babies)" - việc cố tình tạo ra những đứa trẻ mang trí thông minh cao hay ngoại hình theo ý muốn của cha mẹ, vượt xa danh nghĩa phòng ngừa bệnh tật đơn thuần. Những chỉnh sửa một khi đã áp vào dòng tế bào sinh sản của con người sẽ ẩn chứa rủi ro không thể đảo ngược: được lưu truyền vĩnh viễn qua nhiều thế hệ cho các thế hệ con cháu tương lai.

Khi muốn ngăn chặn sự bành trướng mất kiểm soát của khoa học kỹ thuật, việc phó mặc quyết định cho sự tò mò cá nhân của các nhà nghiên cứu hay tham vọng thương mại của một doanh nghiệp là điều vô cùng nguy hiểm. Cần phải đánh giá đúng đắn những rủi ro do sự tiến bộ khoa học đem lại, và cộng đồng quốc tế phải cùng nhau xây dựng những bản hướng dẫn chuẩn mực nghiêm ngặt đặt phẩm giá tính mạng con người lên hàng đầu.

Vào thời điểm chuẩn bị đón nhận một kỷ nguyên khoa học sự sống mới, chúng ta không chỉ bị lóa mắt bởi những tiềm năng của công nghệ, mà thông qua các cuộc đàm phán hiệp thương liên tục xoay quanh những giới hạn luân lý đạo đức, chúng ta đang gánh vác trách nhiệm nặng nề nhằm xác lập các chuẩn mực quy phạm chung cho toàn thể nhân loại.`,
      vocabFocus: ['配慮 (chu đáo/quan tâm)', '尊重 (tôn trọng)', '妥協 (thỏa hiệp)', '信頼 (tin cậy)', '協議 (đàm phán/hiệp nghị)', '対立 (đối lập/xung đột)'],
      grammarFocus: ['〜にあたって (khi bắt đầu / nhân dịp chuẩn bị làm gì trọng đại)', '〜をめぐって (xoay quanh vấn đề tranh luận / xung đột về)'],
      questions: [
        {
          id: 'n2-l4-r3-q1',
          question: 'ゲノム編集技術がもたらした肯定的な恩恵は何ですか。(Lợi ích tích cực mà công nghệ chỉnh sửa gen mang lại là gì?)',
          options: [
            '人間の寿命が一瞬で１０００歳になったこと',
            '遺伝性難病の根本治療法の開発や気候変動に耐える農作物の品種改良',
            'すべての薬が無料になったこと',
            '病院に行く必要が完全に無くなったこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "遺伝性の難病に対する根本的な治療法の開発や、気候変動に耐えうる農作物の品種改良など、人類に与える恩恵の大きさは計り知れない。"',
        },
        {
          id: 'n2-l4-r3-q2',
          question: '受精卵への応用をめぐって強い懸念が表明されている理由は何ですか。(Tại sao có quan ngại sâu sắc xoay quanh ứng dụng lên phôi người?)',
          options: [
            '顕微鏡が高額すぎるから',
            'デザイナーベビーへの道を開き、未来の子孫へ改変が永久に受け継がれる不可逆的リスクがあるから',
            '実験室の電気が消えてしまうから',
            'すべての子供が同じ顔になってしまうから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "「デザイナーベビー」への道を開きかねないという強い懸念...一度人の生殖系列に施された改変は、世代を超えて未来の子孫へと永久に受け継がれる不可逆的なリスクを孕んでいる。"',
        },
        {
          id: 'n2-l4-r3-q3',
          question: '「受精卵や生殖細胞に応用することをめぐっては」の「をめぐって」の意味は何ですか。(Nghĩa của "をめぐって" trong câu là gì?)',
          options: [
            'Xoay quanh chủ đề ứng dụng lên tế bào sinh sản - tâm điểm gây ra tranh luận đạo đức gay gắt',
            'Đi vòng quanh phòng thí nghiệm',
            'Phủ định khả năng của công nghệ',
            'Lời chúc mừng các nhà khoa học',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜をめぐって biểu thị vấn đề là trung tâm của các luồng tranh luận, ý kiến đối kháng.',
        },
        {
          id: 'n2-l4-r3-q4',
          question: '「科学技術の暴走を防ぐにあたって」の「にあたって」の役割は何ですか。(Vai trò của "にあたって" trong câu là gì?)',
          options: [
            'Nêu thời điểm, bối cảnh chuẩn bị đối phó hành động quan trọng nhằm ngăn chặn sự mất kiểm soát',
            'Sau khi khoa học đã phá hủy thế giới',
            'Chỉ lý do thất bại trong thí nghiệm',
            'Chỉ một điều kiện giả định không bao giờ xảy ra',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜にあたって dùng trong hoàn cảnh chuẩn bị thực hiện hành vi có tính quyết định (khi muốn ngăn chặn sự lộng hành).',
        },
        {
          id: 'n2-l4-r3-q5',
          question: '国際社会が共同で策定すべきだと筆者が主張しているものは何ですか。(Điều tác giả cho rằng cộng đồng quốc tế cần cùng nhau xây dựng là gì?)',
          options: [
            'すべての科学者の給料を一律にする法律',
            '生命の尊厳を最優先とする厳格なガイドライン',
            'ゲノム編集をすべての家庭で自由に行える許可証',
            '大学の生物学部をすべて閉鎖する条約',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "科学の進歩がもたらすリスクを正しく評価し、人間の生命の尊厳を最優先とする厳格なガイドラインを国際社会が共同で策定しなければならない。"',
        },
        {
          id: 'n2-l4-r3-q6',
          question: 'この文章全体の主旨として最も適切なものはどれですか。(Ý chính toàn bài phù hợp nhất là gì?)',
          options: [
            'ゲノム編集技術の研究は直ちに全面的に禁止すべきである',
            '技術の可能性に溺れず、生命倫理をめぐる協議を重ねて人類共通の規範を確立すべきである',
            'デザイナーベビーは優秀な人間を増やすので積極的に推進すべきだ',
            '倫理的な問題はすべて個人の自由な判断に任せるのが最善である',
          ],
          answerIndex: 1,
          explanation: 'Bài viết khẳng định công nghệ gen mang lại tiềm năng to lớn nhưng cần được kiểm soát chặt chẽ bằng chuẩn mực đạo đức quốc tế.',
        },
      ],
    },
    {
      id: 'n2-l4-r4',
      title: 'Bài đọc 4: 海外新規事業の立ち上げにあたっての現地社会との信頼構築 (Xây dựng lòng tin với xã hội bản địa khi bắt đầu khởi sự kinh doanh ở nước ngoài)',
      summary: 'Kinh nghiệm đầu tư kinh doanh tại các thị trường mới nổi: tôn trọng phong tục, tạo việc làm và đối thoại chân thành.',
      passageJp: `グローバル市場での持続的な成長を目指し、多くの企業がアジアをはじめとする新興国への新規事業展開に挑んでいる。新興国の急速な人口増加と経済発展は、企業にとって未開拓の巨大なフロンティアとして極めて魅力的に映る。

しかし、海外進出にあたっては、単に自社の優れた製品や技術を持ち込むだけでは決して成功はおぼつかない。現地での工場建設や用地買収をめぐって、住民の立ち退き問題や環境破壊への懸念から激しい抗議運動が発生し、操業開始直前に計画が凍結に追い込まれた事例は枚挙にいとまがない。進出先国の歴史や宗教、労働慣行に対する配慮を欠いた独善的な経営姿勢は、現地社会からの強烈な反発を招く結果となる。

事業の立ち上げにあたっては、何よりもまず現地コミュニティとの緊密な対話と信頼関係の構築を最優先しなければならない。現地の雇用を積極的に創出し、利益の一部を学校建設や公衆衛生の改善などのインフラ整備に還元する姿勢を示すことが不可欠である。

現地の文化や価値観を深く尊重し、地域社会と「共に栄える（共生）」という理念を行動で示す企業こそが、真の信頼を勝ち得て長期的な成功を収めることができるのである。`,
      passageVi: `Hướng tới mục tiêu tăng trưởng bền vững trên thị trường toàn cầu, nhiều doanh nghiệp đang dấn thân triển khai các dự án kinh doanh mới sang các quốc gia mới nổi tiêu biểu như khu vực châu Á. Sự gia tăng dân số nhanh chóng cùng sự phát triển kinh tế của các nước mới nổi hiện ra như một mảnh đất màu mỡ rộng lớn chưa được khai phá đầy mê hoặc đối với các công ty.

Thế nhưng, khi bắt đầu tiến ra thị trường nước ngoài, nếu chỉ đơn thuần mang vào những công nghệ và sản phẩm ưu việt của công ty mình thì sự thành công hoàn toàn không có gì đảm bảo. Xoay quanh việc mua đất đai hay xây dựng nhà máy tại địa phương, những cuộc biểu tình phản đối dữ dội nổ ra bắt nguồn từ nỗi lo ngại phá hủy môi trường hay vấn đề di dời giải tỏa cư dân, đẩy kế hoạch vào cảnh bị đóng băng ngay trước giờ đi vào vận hành là những ví dụ nhiều không đếm xuể. Cung cách quản trị độc đoán thiếu đi sự quan tâm thấu đáo tới tập quán lao động, tôn giáo và lịch sử của quốc gia tiếp nhận sẽ dẫn tới kết quả chuốc lấy sự phản kháng quyết liệt từ xã hội bản xứ.

Khi chuẩn bị khởi sự dự án kinh doanh, điều tối quan trọng trước hết phải đặt lên hàng đầu chính là xây dựng mối quan hệ tin cậy và đối thoại chặt chẽ với cộng đồng địa phương. Cần phải thể hiện thái độ chủ động tạo việc làm cho người bản địa, trích một phần lợi nhuận để đóng góp vào việc hoàn thiện cơ sở hạ tầng như xây dựng trường học hay cải thiện vệ sinh công cộng.

Chính những doanh nghiệp biết tôn trọng sâu sắc văn hóa và giá trị quan bản địa, thể hiện bằng hành động triết lý "cùng nhau thịnh vượng (cộng sinh)" với xã hội địa phương, mới có thể giành được lòng tin thực sự và gặt hái thành công lâu dài.`,
      vocabFocus: ['配慮 (chu đáo/quan tâm)', '尊重 (tôn trọng)', '妥協 (thỏa hiệp)', '信頼 (tin cậy)', '協議 (đàm phán/hiệp nghị)', '対立 (đối lập/xung đột)'],
      grammarFocus: ['〜にあたって (khi bắt đầu / nhân dịp chuẩn bị làm gì trọng đại)', '〜をめぐって (xoay quanh vấn đề tranh luận / xung đột về)'],
      questions: [
        {
          id: 'n2-l4-r4-q1',
          question: '新興国への事業展開が魅力的に映る主な理由は何ですか。(Lý do chính khiến việc mở rộng sang các nước mới nổi đầy sức hút là gì?)',
          options: [
            '税金を一切払わなくてよいから',
            '急速な人口増加と経済発展による巨大な未開拓市場があるから',
            'ライバル会社が世界に一社もいないから',
            'すべての土地が無料で手に入るから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "新興国の急速な人口増加と経済発展は、企業にとって未開拓の巨大なフロンティアとして極めて魅力的に映る。"',
        },
        {
          id: 'n2-l4-r4-q2',
          question: '計画が凍結に追い込まれた原因として書かれているのは何ですか。(Nguyên nhân khiến dự án bị đóng băng được nhắc tới là gì?)',
          options: [
            '工場の機械がすべて盗まれたこと',
            '工場建設や用地買収をめぐり、環境破壊や立ち退きへの懸念から抗議運動が発生したこと',
            '飛行機の便が欠航になったこと',
            '新興国の通貨が廃止されたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "工場建設や用地買収をめぐって、住民の立ち退き問題や環境破壊への懸念から激しい抗議運動が発生し、操業開始直前に計画が凍結に追い込まれた..."',
        },
        {
          id: 'n2-l4-r4-q3',
          question: '「海外進出にあたっては」の「にあたって」の文法的な意味は何ですか。(Ý nghĩa ngữ pháp của "にあたって" trong câu là gì?)',
          options: [
            'Vào thời điểm chuẩn bị bước vào một sự kiện kinh doanh trọng đại ở nước ngoài',
            'Sau khi đã phá sản ở nước ngoài',
            'Chỉ lời cảnh báo không được đi ra nước ngoài',
            'Chỉ một điều kiện giả định vô nghĩa',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜にあたって dùng trong văn cảnh trang trọng khi bắt tay vào một sự kiện mang tính bước ngoặt (khi tiến ra nước ngoài).',
        },
        {
          id: 'n2-l4-r4-q4',
          question: '「用地買収をめぐって」の「をめぐって」の機能は何ですか。(Chức năng của "をめぐって" trong câu là gì?)',
          options: [
            'Biểu thị tâm điểm tranh chấp, mâu thuẫn giữa cư dân và doanh nghiệp (xoay quanh việc thu hồi đất đai)',
            'Đi một vòng quanh khu đất',
            'Khen ngợi khu đất đẹp',
            'Bán đấu giá khu đất',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜をめぐって dùng để chỉ đối tượng nảy sinh tranh cãi, phản kháng.',
        },
        {
          id: 'n2-l4-r4-q5',
          question: '現地社会との信頼構築のために企業が取るべき行動は何ですか。(Hành động doanh nghiệp cần làm để xây dựng lòng tin với xã hội bản địa là gì?)',
          options: [
            '警察に頼んで住民の抗議運動を力で鎮圧すること',
            '密な対話を重ね、雇用の創出や学校建設・衛生改善などのインフラ整備に還元すること',
            '自国の法律をそのまま押し付けること',
            '日本人社員だけで工場を運営し現地住民と一切交流しないこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "現地の雇用を積極的に創出し、利益の一部を学校建設や公衆衛生の改善などのインフラ整備に還元する姿勢を示すことが不可欠である。"',
        },
        {
          id: 'n2-l4-r4-q6',
          question: '長期的な成功を収める企業の特徴として筆者が結論づけているのはどれですか。(Đặc trưng doanh nghiệp gặt hái thành công lâu dài là gì?)',
          options: [
            '現地の文化や価値観を尊重し、地域社会と「共に栄える」理念を行動で示す企業',
            'とにかく短期間で利益を回収して撤退する企業',
            '現地の宗教行事を全面的に無視する企業',
            'テレビCMを大量に流す企業',
          ],
          answerIndex: 0,
          explanation: 'Câu kết đoạn 4: "現地の文化や価値観を深く尊重し、地域社会と「共に栄える（共生）」という理念を行動で示す企業こそが、真の信頼を勝ち得て長期的な成功を収めることができるのである。"',
        },
      ],
    },
    {
      id: 'n2-l4-r5',
      title: 'Bài đọc 5: 国際河川の水資源利用権をめぐる国際対立と外交的妥協 (Tranh chấp quốc tế xoay quanh quyền sử dụng tài nguyên nước các dòng sông xuyên biên giới và thỏa hiệp ngoại giao)',
      summary: 'Xung đột lợi ích giữa các quốc gia thượng nguồn xây đập thủy điện và các quốc gia hạ nguồn chịu ảnh hưởng nông nghiệp, phù sa.',
      passageJp: `世界的な人口増加や気候変動に伴う干ばつの深刻化によって、「水」は石油に匹敵する戦略資源としての重要性を帯びるようになった。特に複数の国をまたがって流れる国際河川においては、水資源の利用やダム建設をめぐって、上流国と下流国の間で激しい外交的対立が頻発している。

上流に位置する国が自国の電力需要や農業灌漑を満たすために巨大ダムを建設するにあたっては、下流国への水流の激減や農業用肥料となる肥沃な土砂の途絶が極めて重大な脅威となる。下流国の農民にとっては死活問題であり、「上流国による一方的な水資源の囲い込みは国際法違反である」と強く非難し、一時は軍事衝突の危機にまで発展した地域も存在する。

しかし、武力による威嚇や制裁で水問題を根本的に解決することは不可能である。河川全体の流域管理計画を策定するにあたっては、関係国がすべて参加する国際委員会を常設し、水量データの透明な共有や、電力供給と水流確保を交換条件とする相互利益の協定を結ぶなど、粘り強い対話を通じた妥協点の模索が不可欠である。

水を争いの火種にするのではなく、地域の平和と繁栄を共有するための架け橋へと変えていく外交的英知こそが、今まさに試されている。`,
      passageVi: `Song hành cùng sự gia tăng dân số toàn cầu và tình trạng hạn hán ngày càng trầm trọng do biến đổi khí hậu, "nước" đã mang tầm quan trọng như một nguồn tài nguyên chiến lược sánh ngang với dầu mỏ. Đặc biệt tại các dòng sông quốc tế chảy xuyên qua nhiều quốc gia, xoay quanh việc xây dựng đập thủy điện và sử dụng tài nguyên nước, các cuộc xung đột ngoại giao căng thẳng giữa các nước thượng nguồn và hạ nguồn đang phát sinh liên miên.

Khi các quốc gia nằm ở thượng nguồn bắt tay vào xây dựng các đại đập thủy điện nhằm đáp ứng nhu cầu tưới tiêu nông nghiệp và nhu cầu điện lực của nước mình, việc lưu lượng dòng chảy về các nước hạ nguồn giảm sút nghiêm trọng cùng sự cắt đứt lượng phù sa màu mỡ là mối đe dọa sinh tử khôn cùng. Đối với nông dân các nước hạ nguồn, đây là vấn đề sống còn, khiến họ kịch liệt lên án rằng "hành vi độc chiếm tài nguyên nước đơn phương của các nước thượng nguồn là vi phạm luật pháp quốc tế", và thậm chí có những khu vực từng leo thang tới nguy cơ bùng nổ xung đột quân sự.

Tuy nhiên, việc đe dọa bằng vũ lực hay áp đặt trừng phạt hoàn toàn không thể giải quyết tận gốc rễ vấn đề nguồn nước. Khi xây dựng các quy hoạch quản lý toàn bộ lưu vực dòng sông, việc thiết lập một ủy ban quốc tế thường trực có sự tham gia của tất cả các nước liên quan, chia sẻ minh bạch dữ liệu lưu lượng nước, ký kết các hiệp định cùng có lợi hoán đổi việc đảm bảo dòng chảy lấy nguồn cung cấp điện, kiên trì đối thoại tìm kiếm điểm thỏa hiệp là điều thiết yếu.

Biến nước không thành mồi lửa của chiến tranh xung đột mà trở thành cây cầu nối sẻ chia hòa bình và sự phồn vinh cho toàn khu vực - sự thông thái ngoại giao ấy chính là thứ đang được thử thách lúc này đây.`,
      vocabFocus: ['配慮 (chu đáo/quan tâm)', '尊重 (tôn trọng)', '妥協 (thỏa hiệp)', '信頼 (tin cậy)', '協議 (đàm phán/hiệp nghị)', '対立 (đối lập/xung đột)'],
      grammarFocus: ['〜にあたって (khi bắt đầu / nhân dịp chuẩn bị làm gì trọng đại)', '〜をめぐって (xoay quanh vấn đề tranh luận / xung đột về)'],
      questions: [
        {
          id: 'n2-l4-r5-q1',
          question: '水が戦略資源として重要視されるようになった背景は何ですか。(Bối cảnh nước được coi trọng như tài nguyên chiến lược là gì?)',
          options: [
            'すべての海が蒸発したから',
            '世界的な人口増加や気候変動に伴う干ばつの深刻化',
            '石油の採掘が世界中で完全に停止したから',
            '人間が水を飲まなくても生きられるようになったから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "世界的な人口増加や気候変動に伴う干ばつの深刻化によって、「水」は石油に匹敵する戦略資源としての重要性を帯びるようになった。"',
        },
        {
          id: 'n2-l4-r5-q2',
          question: '上流国の巨大ダム建設が下流国に与える重大な脅威は何ですか。(Mối đe dọa nghiêm trọng đập thủy điện thượng nguồn gây cho hạ nguồn là gì?)',
          options: [
            '電気が送られてこなくなること',
            '水流の激減や肥沃な土砂の途絶による農業への壊滅的打撃',
            '魚の養殖が盛んになりすぎること',
            '川の幅が２倍に広がること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "下流国への水流の激減や農業用肥料となる肥沃な土砂の途絶が極めて重大な脅威となる。下流国の農民にとっては死活問題であり..."',
        },
        {
          id: 'n2-l4-r5-q3',
          question: '「水資源の利用やダム建設をめぐって」の「をめぐって」の意味は何ですか。(Nghĩa của "をめぐって" trong câu là gì?)',
          options: [
            'Chỉ tâm điểm tranh chấp ngoại giao gay gắt giữa thượng nguồn và hạ nguồn xoay quanh việc dùng nước và xây đập',
            'Đi vòng quanh con đập',
            'Chỉ sự thất bại của kỹ thuật xây dựng',
            'Lời chúc mừng khánh thành đập',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜をめぐって biểu thị vấn đề là nguồn cơn nảy sinh bất đồng, xung đột quyền lợi giữa các bên.',
        },
        {
          id: 'n2-l4-r5-q4',
          question: '「流域管理計画を策定するにあたっては」の「にあたっては」の用法は何ですか。(Cách dùng "にあたっては" ở đây là gì?)',
          options: [
            'Chỉ bối cảnh, thời điểm hệ trọng khi bắt tay xây dựng quy hoạch quản lý lưu vực',
            'Sau khi chiến tranh đã kết thúc',
            'Chỉ một điều kiện giả định tiêu cực',
            'Chỉ sự thất bại của các nhà ngoại giao',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜にあたって dùng chỉ thời điểm bắt tay tiến hành một công việc lớn mang tính định đoạt.',
        },
        {
          id: 'n2-l4-r5-q5',
          question: '水問題を平和的に解決するために筆者が提案している妥協の具体策は何ですか。(Biện pháp cụ thể tác giả đề xuất để giải quyết hòa bình vấn đề nước là gì?)',
          options: [
            '上流国に軍隊を派遣してダムを爆破すること',
            '国際委員会の常設、データ共有、電力供給と水流確保を交換条件とする相互協定の締結',
            'すべての川に壁を作って水をせき止めること',
            '下流国の住民をすべて別の地域へ移住させること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "国際委員会を常設し、水量データの透明な共有や、電力供給と水流確保を交換条件とする相互利益の協定を結ぶなど、粘り強い対話を通じた妥協点の模索が不可欠である。"',
        },
        {
          id: 'n2-l4-r5-q6',
          question: 'この文章を通じて筆者が最も訴えたいメッセージは何ですか。(Thông điệp tác giả muốn kêu gọi nhất qua bài viết là gì?)',
          options: [
            '水資源をめぐる戦争は不可避である',
            '水を争いの火種にするのではなく、外交的英知を通じて平和と繁栄を共有する架け橋とすべきである',
            'ダムの建設は世界中ですべて禁止すべきである',
            '下流国は上流国の要求に無条件で服従すべきである',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "水を争いの火種にするのではなく、地域の平和と繁栄を共有するための架け橋へと変えていく外交的英知こそが、今まさに試されている。"',
        },
      ],
    },
  ],

  // ================= N2 BÀI 5 =================
  'n2-l5': [
    {
      id: 'n2-l5-r1',
      title: 'Bài đọc 1: 気候危機の臨界点（ティッピング・ポイント）超過の恐れと科学予測の限界 (Nguy cơ vượt qua điểm bùng phát khủng hoảng khí hậu và giới hạn của dự báo khoa học)',
      summary: 'Các nhà khoa học cảnh báo về hiện tượng biến đổi khí hậu không thể đảo ngược khi vượt qua ngưỡng tới hạn.',
      passageJp: `地球温暖化に関する最新の気候シミュレーションは、私たちが破滅的な「臨界点（ティッピング・ポイント）」の境界線上に立たされている現実を突きつけている。グリーンランドや西南極の氷床融解、アマゾンの熱帯雨林の乾燥化といった地球規模の変動は、ある一定の閾値（しきいち）を超えたが最後、人間のいかなる努力をもってしても逆転できない暴走状態へと突入する恐れがある。

これまで多くの人々は、「気温上昇は毎年少しずつ緩やかに進み、技術が進歩すればいつでも食い止められる」と楽観視してきた。しかし、そのような認識は科学の複雑性を過小評価した浅はかな思い込みにすぎない。自然界のフィードバック現象は非線形であり、凍土の融解に伴って大量のメタンガスが大気中へ放出されれば、温暖化が自己加速的な連鎖反応を引き起こす危険性が極めて高い。

気象庁や国際機関によるスーパーコンピューターを用いた予測であっても、地球という複雑系全体の挙動を１００パーセント正確に見通すことには限界がある。異常気象の猛威が予測の想定外のスピードで現実化している事実は、科学が警告する最悪のシナリオが決して絵空事ではないことを証明している。

「まだ猶予がある」という甘い過信を捨て、最悪の事態を警戒しながら、今直ちに排出削減へ行動を起こすことのみが、人類に残された唯一の生存戦略なのである。`,
      passageVi: `Những mô phỏng khí hậu mới nhất liên quan đến sự ấm lên toàn cầu đang dồn chúng ta vào sự thật hiện hữu: chúng ta đang đứng trên lằn ranh giới hạn của "điểm bùng phát (tipping point)" đầy hủy diệt. Những biến động trên quy mô toàn cầu như sự tan chảy của các tảng băng khổng lồ ở đảo Greenland và Tây Nam Cực hay hiện tượng sa mạc hóa rừng nhiệt đới Amazon, một khi đã vượt qua ngưỡng tới hạn nhất định, có nguy cơ lao thẳng vào trạng thái mất kiểm soát bùng phát dữ dội mà không một nỗ lực nào của con người có thể đảo ngược lại được.

Từ trước tới nay, nhiều người vẫn nhìn nhận một cách lạc quan rằng: "Nhiệt độ tăng mỗi năm chỉ từng chút một từ từ, nếu công nghệ tiến bộ thì bất cứ lúc nào cũng có thể ngăn chặn được". Thế nhưng, nhận thức ấy chẳng qua chỉ là một sự ngộ nhận thiển cận đánh giá quá thấp sự phức tạp của khoa học. Các hiện tượng phản hồi của tự nhiên mang tính phi tuyến tính, và nếu lượng khí metan khổng lồ thoát vào bầu khí quyển cùng với sự tan chảy của tầng đất đóng băng vĩnh cửu, nguy cơ việc nóng lên toàn cầu kích hoạt phản ứng dây chuyền tự tăng tốc là cực kỳ cao.

Dù là các dự báo sử dụng siêu máy tính của các cơ quan quốc tế hay Cục Khí tượng đi chăng nữa, thì việc nhìn thấu chính xác 100% mọi hành vi của toàn bộ hệ thống phức tạp mang tên Trái Đất luôn có giới hạn. Thực tế sự hung hãn của thời tiết cực đoan đang hiện thực hóa với tốc độ nằm ngoài mọi kịch bản dự tính đã chứng minh rằng kịch bản tồi tệ nhất mà khoa học cảnh báo tuyệt đối không phải là chuyện viễn tưởng vẽ vời.

Vứt bỏ sự tự tin ngây thơ mù quáng rằng "vẫn còn thời gian thư thả", vừa cảnh giác trước tình huống xấu nhất, vừa lập tức hành động cắt giảm phát thải ngay lúc này chính là chiến lược sinh tồn duy nhất còn sót lại cho loài người.`,
      vocabFocus: ['異常 (bất thường/dị thường)', '気象 (khí tượng)', '災害 (thiên tai/thảm họa)', '警戒 (cảnh giác/đề phòng)', '予測 (dự báo/dự đoán)', '限界 (giới hạn)'],
      grammarFocus: ['〜恐れがある (có nguy cơ / e rằng sẽ có chuyện xấu xảy ra)', '〜にすぎない (chẳng qua chỉ là / không hơn không kém)'],
      questions: [
        {
          id: 'n2-l5-r1-q1',
          question: '臨界点（ティッピング・ポイント）を超えた場合に恐れられている事態は何ですか。(Tình trạng đáng sợ khi vượt qua điểm bùng phát là gì?)',
          options: [
            '人間のいかなる努力をもってしても逆転できない温暖化の暴走状態に突入する恐れ',
            '世界中のスーパーコンピューターがすべて故障すること',
            'すべての海が凍りついて氷河期に入ること',
            '雨が二度と降らなくなること',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 1 nêu: "ある一定の閾値を超えたが最後、人間のいかなる努力をもってしても逆転できない暴走状態へと突入する恐れがある。"',
        },
        {
          id: 'n2-l5-r1-q2',
          question: '「技術が進歩すればいつでも食い止められる」という考えを筆者はどう批判していますか。(Tác giả phê phán tư tưởng "công nghệ phát triển sẽ ngăn chặn được bất cứ lúc nào" ra sao?)',
          options: [
            '世界で最も優れた未来予測である',
            '科学の複雑性を過小評価した浅はかな思い込みにすぎない',
            '科学者全員が賛同している事実である',
            'すでにノーベル賞を受賞した学説である',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "そのような認識は科学の複雑性を過小評価した浅はかな思い込みにすぎない。"',
        },
        {
          id: 'n2-l5-r1-q3',
          question: '「〜にすぎない」という文法表現の表す意味は何ですか。(Ý nghĩa ngữ pháp của biểu hiện "〜にすぎない" là gì?)',
          options: [
            'Đánh giá sự việc chỉ ở mức độ thấp, chẳng qua chỉ là... không hơn không kém',
            'Chỉ một điều kiện bắt buộc phải tuân theo',
            'Chỉ sự vượt quá mức bình thường một cách kinh ngạc',
            'Lời khen ngợi sự xuất sắc',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜にすぎない mang nghĩa "chẳng qua chỉ là...", hạ thấp mức độ hoặc khẳng định sự việc chỉ dừng lại ở phạm vi hạn hẹp.',
        },
        {
          id: 'n2-l5-r1-q4',
          question: '「〜恐れがある」の文法的な使い分けとして正しいものはどれですか。(Cách dùng đúng của "〜恐れがある" là gì?)',
          options: [
            'Dùng khi cảnh báo hoặc dự cảm về một mối nguy cơ, tai họa, biến cố tiêu cực có thể xảy ra trong tương lai',
            'Dùng khi diễn tả hy vọng có tin vui bất ngờ',
            'Chỉ dùng để ra lệnh cho người khác chạy trốn',
            'Chỉ sự việc đã hoàn thành tốt đẹp trong quá khứ',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜恐れがある dùng để diễn đạt khả năng phát sinh một kết quả xấu, nguy hiểm (e rằng / có nguy cơ sẽ...).',
        },
        {
          id: 'n2-l5-r1-q5',
          question: 'スーパーコンピューターを用いた科学的予測の限界として何が指摘されていますか。(Giới hạn của dự báo khoa học bằng siêu máy tính là gì?)',
          options: [
            '電気代が高くて計算ができないこと',
            '地球という複雑系全体の挙動を１００パーセント正確に見通すことには限界があること',
            'コンピューターの画面が小さすぎること',
            '科学者が計算式を忘れてしまうこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "地球という複雑系全体の挙動を１００パーセント正確に見通すことには限界がある。"',
        },
        {
          id: 'n2-l5-r1-q6',
          question: '人類に残された唯一の生存戦略として筆者が求めている行動は何ですか。(Chiến lược sinh tồn duy nhất tác giả kêu gọi là gì?)',
          options: [
            '「まだ猶予がある」と信じて何もせず待つこと',
            '最悪の事態を警戒しながら、今直ちに排出削減へ行動を起こすこと',
            'すべての都市を地下に埋めること',
            '宇宙へ逃げるロケットを開発することだけ',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "「まだ猶予がある」という甘い過信を捨て、最悪の事態を警戒しながら、今直ちに排出削減へ行動を起こすことのみが、人類に残された唯一の生存戦略なのである。"',
        },
      ],
    },
    {
      id: 'n2-l5-r2',
      title: 'Bài đọc 2: ビッグデータ信仰の陥穽と統計的数値の限界 (Cạm bẫy của đức tin mù quáng vào Big Data và giới hạn của các con số thống kê)',
      summary: 'Tại sao việc chỉ nhìn vào các con số thống kê bề mặt có thể dẫn dắt các nhà quản trị đưa ra quyết sách sai lầm.',
      passageJp: `AIの進化と計算資源の飛躍的な向上に伴い、ビジネスや政策決定のあらゆる現場において「データ至上主義」が急速に定着しつつある。勘や経験に頼る曖昧な判断を排し、ビッグデータを解析して客観的なエビデンス（根拠）に基づいて意思決定を行う手法は、一見すると極めて合理的で誤りのないアプローチに思える。

しかし、どれほど膨大なデータであっても、それは過去の行動結果の断片的な記録を数値化したものにすぎない。数値化しやすい指標ばかりに目を奪われる結果、人々の内面にある複雑な感情の機微や、言葉に表れない潜在的な不満といった本質的な要素が見落とされてしまう危険性は常に警戒しなければならない。相関関係があるからといって、因果関係までもが証明されたわけではないのである。

表面的な数値の改善だけに満足し、背後にある文脈を深く掘り下げない短絡的な姿勢は、企業戦略の根本的な誤謬を招く恐れがある。数字は現状の一断面を切り取った補助的な情報にすぎず、そこに血を通わせ、未来への意味を見出すのは生身の人間の洞察力にほかならない。

データの持つ予測限界を謙虚に認識し、数値の奴隷になるのではなく、定性的な観察や倫理的な直感を組み合わせて多角的に判断する知性こそが、データ全盛の時代に真に求められている。`,
      passageVi: `Song hành cùng sự tiến hóa của AI và bước nhảy vọt của tài nguyên tính toán, "chủ nghĩa tôn sùng dữ liệu" đang nhanh chóng bén rễ tại mọi hiện trường kinh doanh và hoạch định chính sách. Phương thức loại bỏ những phán đoán mơ hồ dựa vào linh cảm hay kinh nghiệm để phân tích dữ liệu lớn (Big Data) và đưa ra quyết định dựa trên bằng chứng (evidence) khách quan, thoạt nhìn như một phương pháp cực kỳ duy lý và không tỳ vết sai lầm.

Thế nhưng, dù dữ liệu có khổng lồ đến đâu chăng nữa, nó cũng chẳng qua chỉ là sự số hóa các ghi chép chắp vá về kết quả hành vi trong quá khứ. Kết quả của việc chỉ mải mê dán mắt vào các chỉ số dễ lượng hóa bằng con số, chúng ta luôn phải cảnh giác trước nguy cơ những yếu tố mang tính bản chất - như sự tinh tế vi tế trong cảm xúc nội tâm hay nỗi bất an tiềm ẩn không nói thành lời của con người - bị bỏ sót. Việc có mối quan hệ tương quan không đồng nghĩa với việc mối quan hệ nhân quả đã được chứng minh.

Thái độ nông nổi chỉ thỏa mãn với sự cải thiện bề nổi của các con số thống kê mà không đào sâu vào bối cảnh bên dưới có nguy cơ dẫn tới những sai lầm căn bản trong chiến lược doanh nghiệp. Những con số chẳng qua chỉ là thông tin phụ trợ cắt lát một mặt cắt của hiện trạng, việc truyền hơi thở sự sống và tìm ra ý nghĩa hướng tới tương lai cho chúng chính là không gì khác ngoài năng lực sâu sắc của con người bằng xương bằng thịt.

Nhận thức một cách khiêm nhường về giới hạn dự báo của dữ liệu, không biến bản thân thành nô lệ của các con số, mà kết hợp giữa quan sát định tính với trực giác đạo đức để phán đoán đa chiều - thứ trí tuệ ấy mới là điều thực sự được đòi hỏi trong kỷ nguyên bùng nổ dữ liệu này.`,
      vocabFocus: ['異常 (bất thường/dị thường)', '気象 (khí tượng)', '災害 (thiên tai/thảm họa)', '警戒 (cảnh giác/đề phòng)', '予測 (dự báo/dự đoán)', '限界 (giới hạn)'],
      grammarFocus: ['〜恐れがある (có nguy cơ / e rằng sẽ có chuyện xấu xảy ra)', '〜にすぎない (chẳng qua chỉ là / không hơn không kém)'],
      questions: [
        {
          id: 'n2-l5-r2-q1',
          question: 'ビッグデータに基づく意思決定が合理的とされる理由は何ですか。(Tại sao ra quyết định dựa vào Big Data được xem là duy lý?)',
          options: [
            '勘や経験を排し客観的なエビデンスに基づいて判断できるから',
            '誰でも無料で使えるから',
            '政府から表彰されるから',
            '仕事をすべてサボることができるから',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 1 nêu: "勘や経験に頼る曖昧な判断を排し、ビッグデータを解析して客観的なエビデンスに基づいて意思決定を行う手法は、一見すると極めて合理的で誤りのないアプローチに思える。"',
        },
        {
          id: 'n2-l5-r2-q2',
          question: '数値化しやすい指標ばかりに目を奪われる結果として何が見落とされる危険がありますか。(Nguy cơ bị bỏ sót khi chỉ nhìn vào con số là gì?)',
          options: [
            'オフィスの清掃費用',
            '複雑な感情の機微や言葉に表れない潜在的な不満といった本質的要素',
            'パソコンのキーボードの汚れ',
            '通信速度の低下',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "人々の内面にある複雑な感情の機微や、言葉に表れない潜在的な不満といった本質的な要素が見落とされてしまう危険性は常に警戒しなければならない。"',
        },
        {
          id: 'n2-l5-r2-q3',
          question: '相関関係と因果関係について文章ではどのように触れられていますか。(Mối quan hệ tương quan và nhân quả được nhắc đến thế nào?)',
          options: [
            '相関関係があれば因果関係は絶対に１００％正しい',
            '相関関係があるからといって、因果関係までもが証明されたわけではない',
            '相関関係と因果関係は全く同じ言葉である',
            'どちらもビジネスでは不要である',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "相関関係があるからといって、因果関係までもが証明されたわけではないのである。"',
        },
        {
          id: 'n2-l5-r2-q4',
          question: '「根本的な誤謬を招く恐れがある」の「恐れがある」のニュアンスは何ですか。(Sắc thái của "恐れがある" trong câu là gì?)',
          options: [
            'Cảnh báo về một nguy cơ, hậu quả sai lầm nghiêm trọng rất có thể sẽ phát sinh',
            'Thể hiện sự tự tin không có sai sót',
            'Một lời chúc mừng chiến lược thành công',
            'Một cảm giác sợ ma của nhân viên',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜恐れがある dùng để cảnh báo mối hiểm họa, nguy cơ tiêu cực có thể xảy đến.',
        },
        {
          id: 'n2-l5-r2-q5',
          question: '「補助的な情報にすぎず」の「にすぎない」の意味は何ですか。(Nghĩa của "にすぎない" trong câu là gì?)',
          options: [
            'Số liệu chẳng qua chỉ là thông tin mang tính hỗ trợ tham khảo, không thể thay thế cho tư duy toàn diện',
            'Số liệu là quan trọng nhất thế giới',
            'Số liệu không bao giờ bị sai',
            'Cấm sử dụng số liệu',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜にすぎない nhấn mạnh mức độ giới hạn (chẳng qua chỉ là thông tin phụ trợ mà thôi).',
        },
        {
          id: 'n2-l5-r2-q6',
          question: 'データ全盛の時代に真に求められている知性として筆者が挙げているのはどれですか。(Trí tuệ thực sự được đòi hỏi trong thời đại bùng nổ dữ liệu là gì?)',
          options: [
            'データの予測限界を認識し、定性的観察や倫理的直感を組み合わせて多角的に判断する知性',
            'コンピューターの言う通りにすべて無条件で従う知性',
            'すべてのデータを消去して勘だけで勝負する知性',
            '数学のテストで満点を取ることだけ',
          ],
          answerIndex: 0,
          explanation: 'Câu kết đoạn 4: "データの持つ予測限界を謙虚に認識し、数値の奴隷になるのではなく、定性的な観察や倫理的な直感を組み合わせて多角的に判断する知性こそが、データ全盛の時代に真に求められている。"',
        },
      ],
    },
    {
      id: 'n2-l5-r3',
      title: 'Bài đọc 3: 巨大地震の発生リスクと大都市機能麻痺の恐れ (Rủi ro xảy ra siêu động đất và nguy cơ tê liệt chức năng đại đô thị)',
      summary: 'Phân tích nguy cơ sụp đổ chuỗi logistics, mất điện diện rộng khi xảy ra động đất ngay dưới lòng thủ đô Tokyo.',
      passageJp: `プレートの境界に位置する日本列島において、今後３０年以内に高い確率で発生が予測されている「南海トラフ巨大地震」や「首都直下地震」は、国家の存亡を揺るがしかねない未曾有の危機である。政府の被害想定によれば、最大で死者数十万人、経済被害額は数百兆円という天文学的な規模に達する恐れがある。

大都市圏における最大の脆弱性は、高度に過密化したインフラとサプライチェーンの複雑な相互依存関係にある。高層ビルが密集する都心部では、電力供給や通信網の途絶に伴ってエレベーターが停止し、数十万人が「高層難民」として孤立する事態が警戒されている。また、帰宅困難者が道路を埋め尽くせば、緊急救命車両の通行が完全に阻害され、火災の延焼を食い止められなくなる恐れがある。

日頃の防災訓練や備蓄は重要であるが、「訓練を行っているから安全だ」と過信することは危険な錯覚にすぎない。想定される被害規模は個人の備えの限界をはるかに超えており、行政と企業、地域社会が連携した広域的な支援体制の構築を急がなければならない。

自然の脅威に対して人間は無力であり、地震の発生そのものを止める技術は存在しない。だからこそ、最悪のシナリオを常に想定し、被害を最小限に抑える「減災」の知恵を社会全体で共有し続けることが不可欠である。`,
      passageVi: `Nằm trên ranh giới các mảng kiến tạo địa chất, "Siêu động đất rãnh Nankai" và "Động đất ngay dưới lòng thủ đô Tokyo" - vốn được dự báo xảy ra với xác suất rất cao trong vòng 30 năm tới tại quần đảo Nhật Bản - là những cuộc khủng hoảng chưa từng có tiền lệ rất có thể làm rung chuyển sự tồn vong của quốc gia. Theo ước tính thiệt hại của chính phủ, con số có nguy cơ chạm tới quy mô thiên văn: số người tử vong tối đa lên tới hàng trăm nghìn người và thiệt hại kinh tế lên tới hàng trăm nghìn tỷ Yên.

Tính dễ bị tổn thương lớn nhất tại các vùng đô thị lớn nằm ở sự phụ thuộc lẫn nhau phức tạp của chuỗi cung ứng và hạ tầng đã bị nén mật độ quá mức. Tại khu vực trung tâm ken đặc các tòa nhà chọc trời, việc thang máy bị tê liệt cùng sự gián đoạn của mạng lưới thông tin và nguồn cung cấp điện khiến tình cảnh hàng trăm nghìn người bị cô lập như những "người tị nạn trên các tầng cao" đang được cảnh báo cao độ. Ngoài ra, nếu dòng người không thể về nhà tràn ngập lòng đường thì sự di chuyển của các xe cứu hộ khẩn cấp sẽ bị phong tỏa hoàn toàn, kéo theo nguy cơ không thể ngăn chặn đám cháy lan rộng.

Việc diễn tập phòng chống thiên tai và tích trữ lương thực hàng ngày là quan trọng, nhưng việc tự mãn quá đà rằng "có diễn tập rồi thì sẽ an toàn" chẳng qua chỉ là một ảo tưởng nguy hiểm. Quy mô thiệt hại ước tính vượt xa giới hạn chuẩn bị của một cá nhân, do đó việc khẩn trương xây dựng cơ chế cứu trợ liên vùng có sự liên kết chặt chẽ giữa chính quyền, doanh nghiệp và cộng đồng xã hội là việc không thể chậm trễ.

Trước sự đe dọa của tự nhiên, con người vô cùng nhỏ bé và bất lực, hoàn toàn không hề tồn tại công nghệ nào có thể chặn đứng được một trận động đất phát sinh. Chính vì vậy, việc luôn dự trù kịch bản tồi tệ nhất và toàn xã hội cùng chia sẻ tri thức "giảm nhẹ thiệt hại (giảm tai)" để hạn chế thấp nhất hậu quả là điều không thể thiếu.`,
      vocabFocus: ['異常 (bất thường/dị thường)', '気象 (khí tượng)', '災害 (thiên tai/thảm họa)', '警戒 (cảnh giác/đề phòng)', '予測 (dự báo/dự đoán)', '限界 (giới hạn)'],
      grammarFocus: ['〜恐れがある (có nguy cơ / e rằng sẽ có chuyện xấu xảy ra)', '〜にすぎない (chẳng qua chỉ là / không hơn không kém)'],
      questions: [
        {
          id: 'n2-l5-r3-q1',
          question: '南海トラフ地震や首都直下地震の被害想定として書かれているのは何ですか。(Ước tính thiệt hại của siêu động đất được nêu là gì?)',
          options: [
            '死者ゼロで被害は軽微であること',
            '最大で死者数十万人、経済被害額は数百兆円に達する恐れがあること',
            '建物がすべて空を飛ぶこと',
            '海外へ避難できるので問題ないこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "最大で死者数十万人、経済被害額は数百兆円という天文学的な規模に達する恐れがある。"',
        },
        {
          id: 'n2-l5-r3-q2',
          question: '都心部の「高層難民」とはどのような事態を指していますか。(Tình cảnh "người tị nạn tầng cao" chỉ điều gì?)',
          options: [
            'ビルの屋上でキャンプを楽しむ人々',
            '電力や通信の途絶によりエレベーターが停止し高層ビル内に孤立する人々',
            '外国からの観光客がホテルに泊まること',
            'ヘリコプターで救助された人々',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "電力供給や通信網の途絶に伴ってエレベーターが停止し、数十万人が「高層難民」として孤立する事態が警戒されている。"',
        },
        {
          id: 'n2-l5-r3-q3',
          question: '帰宅困難者が道路を埋め尽くすことで恐れられている事態は何ですか。(Mối nguy khi người không thể về nhà tràn kín đường phố là gì?)',
          options: [
            '靴が脱げてしまうこと',
            '緊急救命車両の通行が阻害され、火災の延焼を食い止められなくなる恐れ',
            '道路が沈下すること',
            '雨が突然降り始めること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "緊急救命車両の通行が完全に阻害され、火災の延焼を食い止められなくなる恐れがある。"',
        },
        {
          id: 'n2-l5-r3-q4',
          question: '「危険な錯覚にすぎない」の「にすぎない」の意味は何ですか。(Nghĩa của "にすぎない" trong câu là gì?)',
          options: [
            'Ý nghĩ tập dượt rồi là an toàn chẳng qua chỉ là sự ảo tưởng, không phản ánh thực tế nguy hiểm',
            'Ảo tưởng đó là sự thật đúng đắn',
            'Mọi người đều phải có ảo tưởng đó',
            'Chỉ một mong muốn tương lai',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜にすぎない nhấn mạnh rằng ý nghĩ đó chỉ là một sự ngộ nhận nông cạn (chẳng qua chỉ là ảo tưởng nguy hại).',
        },
        {
          id: 'n2-l5-r3-q5',
          question: '個人の備えの限界を超えた被害に対して何が必要だと書かれていますか。(Cần gì trước quy mô thiệt hại vượt giới hạn chuẩn bị cá nhân?)',
          options: [
            '全員が海外へ逃げること',
            '行政、企業、地域社会が連携した広域的な支援体制の構築',
            '何もしないで運命に身を任せること',
            'すべての建物を解体すること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "行政と企業、地域社会が連携した広域的な支援体制の構築を急がなければならない。"',
        },
        {
          id: 'n2-l5-r3-q6',
          question: '地震に対する人間の姿勢として筆者が最後に強調している知恵は何ですか。(Tri thức về thái độ của con người đối với động đất được tác giả đúc kết là gì?)',
          options: [
            '地震を科学技術の力で完全に消滅させること',
            '最悪のシナリオを想定し、被害を最小限に抑える「減災」の知恵を社会全体で共有し続けること',
            '地震の予知ができるまで家から出ないこと',
            '高層ビルの建設をすべて中止することだけ',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn cuối: "最悪のシナリオを常に想定し、被害を最小限に抑える「減災」の知恵を社会全体で共有し続けることが不可欠である。"',
        },
      ],
    },
    {
      id: 'n2-l5-r4',
      title: 'Bài đọc 4: 医療現場におけるAI画像診断支援の進歩と医師の臨床責任 (Tiến bộ của AI hỗ trợ chẩn đoán hình ảnh y khoa và trách nhiệm lâm sàng của bác sĩ)',
      summary: 'AI đọc phim CT/MRI phát hiện khối u siêu nhỏ rất chính xác, nhưng quyền quyết định và trách nhiệm cứu người vẫn thuộc về bác sĩ.',
      passageJp: `深層学習（ディープラーニング）を駆使したAI医療機器の進歩は、X線写真やCT、MRIといった医用画像の診断現場に劇的な変化をもたらしている。人間の肉眼では判別が極めて困難な微小な早期がん病変を数秒で検出し、医師の見落としを防ぐ技術は、医療の質の向上に大きく貢献している。

しかし、AIの診断精度がどれほど驚異的な水準に達しようとも、AIは統計的な確率に基づいて病変の候補を提示する補助ツールにすぎない。患者が訴える痛みのニュアンス、表情の変化、病歴や生活背景といった数値化できない複合的な要素を総合して最終的な病名を確定し、最適な治療方針を決断できるのは生身の医師だけである。

AIの判断を鵜呑みにして自らの五感による臨床推論を怠るようになれば、未知の疾患や稀な症例に直面した際、誤診を見逃してしまう恐れがある。機械に依存しすぎることは、医師としての専門的判断力の退行を招きかねない。

医療における究極の責任は、冷徹な機械ではなく、患者の命と心に真摯に向き合う医師自身が引き受けざるを得ない。AIを賢く活用しつつも、人間味あふれる対話と倫理的な責任感を手放さない姿勢こそが、最先端医療の現場で最も強く求められている。`,
      passageVi: `Sự tiến bộ của các thiết bị y tế ứng dụng AI vận dụng học sâu (deep learning) đang mang lại những biến đổi ngoạn mục tại các hiện trường chẩn đoán hình ảnh y khoa như chụp X-quang, cắt lớp vi tính CT hay cộng hưởng từ MRI. Công nghệ phát hiện trong vài giây các tổn thương ung thư giai đoạn sớm siêu nhỏ - thứ mà mắt thường con người cực kỳ khó phân biệt - giúp phòng ngừa sai sót bỏ sót bệnh của bác sĩ, đang đóng góp to lớn vào việc nâng cao chất lượng y tế.

Thế nhưng, dù độ chính xác chẩn đoán của AI có đạt tới trình độ kinh ngạc đến đâu chăng nữa, AI chẳng qua cũng chỉ là một công cụ hỗ trợ gợi ý các ứng viên tổn thương dựa trên xác suất thống kê mà thôi. Chỉ có các bác sĩ bằng xương bằng thịt mới có thể tổng hợp các yếu tố phức hợp không thể lượng hóa thành con số - như sắc thái cơn đau mà bệnh nhân bày tỏ, sự thay đổi của sắc mặt, tiền sử bệnh và bối cảnh sinh hoạt - để xác định chẩn đoán bệnh danh cuối cùng và quyết đoán phác đồ điều trị tối ưu.

Nếu quá tin tưởng mù quáng vào phán đoán của AI mà lơ là việc suy luận lâm sàng bằng chính ngũ quan của bản thân, khi đối diện với các chứng bệnh hiếm gặp hay ca bệnh chưa từng biết, sẽ có nguy cơ bỏ sót các chẩn đoán sai lầm. Việc quá ỷ lại vào máy móc rất có thể dẫn tới sự thoái lui năng lực phán đoán chuyên môn của người bác sĩ.

Trách nhiệm cứu chữa tối thượng trong y tế không phải là cỗ máy lạnh lùng mà chính người bác sĩ đang đối diện hết lòng thành ý với sinh mạng và tâm can của bệnh nhân buộc phải gánh vác. Vừa tận dụng AI một cách thông minh, nhưng vừa không buông bỏ tinh thần trách nhiệm đạo đức và cuộc trò chuyện ấm áp tình người chính là điều đang được đòi hỏi mãnh liệt nhất nơi tuyến đầu y tế tối tân.`,
      vocabFocus: ['異常 (bất thường/dị thường)', '気象 (khí tượng)', '災害 (thiên tai/thảm họa)', '警戒 (cảnh giác/đề phòng)', '予測 (dự báo/dự đoán)', '限界 (giới hạn)'],
      grammarFocus: ['〜恐れがある (có nguy cơ / e rằng sẽ có chuyện xấu xảy ra)', '〜にすぎない (chẳng qua chỉ là / không hơn không kém)'],
      questions: [
        {
          id: 'n2-l5-r4-q1',
          question: 'AIによる画像診断支援がもたらした利点は何ですか。(Lợi ích hỗ trợ chẩn đoán hình ảnh bằng AI mang lại là gì?)',
          options: [
            '医師が全員休職できること',
            '微小な早期がん病変を数秒で検出し、医師の見落としを防ぐこと',
            '病院の建設費用がゼロになること',
            'すべての薬を患者が自分で作れること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "人間の肉眼では判別が極めて困難な微小な早期がん病変を数秒で検出し、医師の見落としを防ぐ技術は、医療の質の向上に大きく貢献している。"',
        },
        {
          id: 'n2-l5-r4-q2',
          question: '「補助ツールにすぎない」の「にすぎない」のニュアンスは何ですか。(Sắc thái của "にすぎない" trong câu là gì?)',
          options: [
            'AIはあくまで確率を提示する助手に留まり、最終判断の代行者ではないという限界の強調',
            'AIが世界で最も偉大な医者であるという賛美',
            'AIの価格が非常に安いこと',
            'AIの使用を全面的に禁止する命令',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜にすぎない dùng để hạ thấp hoặc giới hạn vị trí (chẳng qua chỉ dừng lại ở vai trò công cụ trợ giúp mà thôi).',
        },
        {
          id: 'n2-l5-r4-q3',
          question: '医師だけが判断できる複合的要素として挙げられているのはどれですか。(Yếu tố phức hợp chỉ bác sĩ mới phán đoán được là gì?)',
          options: [
            '痛みのニュアンス、表情の変化、病歴や生活背景といった数値化できない要素',
            '病院の建物の築年数',
            '薬のパッケージのデザイン',
            'コンピューターの処理速度',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 2 nêu: "患者が訴える痛みのニュアンス、表情の変化、病歴や生活背景といった数値化できない複合的な要素を総合して最終的な病名を確定し..."',
        },
        {
          id: 'n2-l5-r4-q4',
          question: 'AIの判断を鵜呑みにすることで生じる恐れのある問題は何ですか。(Vấn đề có nguy cơ nảy sinh khi tin AI mù quáng là gì?)',
          options: [
            '病院の電気がショートすること',
            '稀な症例で誤診を見逃し、医師の専門的判断力が退行する恐れ',
            '患者が全員退院してしまうこと',
            'カルテがすべて消去されること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "未知の疾患や稀な症例に直面した際、誤診を見逃してしまう恐れがある。機械に依存しすぎることは、医師としての専門的判断力の退行を招きかねない。"',
        },
        {
          id: 'n2-l5-r4-q5',
          question: '「医師自身が引き受けざるを得ない」の「ざるを得ない」の意味は何ですか。(Nghĩa của "ざるを得ない" trong câu là gì?)',
          options: [
            'Trách nhiệm sinh mạng bệnh nhân là điều bác sĩ không thể chối bỏ, bắt buộc phải đích thân gánh vác',
            'Bác sĩ từ chối nhận trách nhiệm',
            'Khuyên bệnh nhân tự chịu trách nhiệm',
            'Chỉ một điều ước không bao giờ có thật',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜ざるを得ない thể hiện trách nhiệm đạo đức tất yếu không thể thoái thác (buộc phải gánh vác).',
        },
        {
          id: 'n2-l5-r4-q6',
          question: '最先端医療の現場で最も求められている姿勢として筆者が述べているのはどれですか。(Thái độ được đòi hỏi nhất ở nơi tuyến đầu y tế là gì?)',
          options: [
            'AIを完全に排除して昔の手術法に戻すこと',
            'AIを賢く活用しつつ、人間味あふれる対話と倫理的な責任感を手放さない姿勢',
            'すべての診断をAIに任せて医師はサインだけすること',
            '患者と一切会話をしないこと',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "AIを賢く活用しつつも、人間味あふれる対話と倫理的な責任感を手放さない姿勢こそが、最先端医療の現場で最も強く求められている。"',
        },
      ],
    },
    {
      id: 'n2-l5-r5',
      title: 'Bài đọc 5: 生物多様性の破壊と未知の動物由来感染症拡大の脅威 (Hủy hoại đa dạng sinh học và hiểm họa bùng phát dịch bệnh truyền nhiễm từ động vật chưa biết)',
      summary: 'Mối quan hệ nhân quả giữa nạn phá rừng nhiệt đới, buôn bán động vật hoang dã với sự trỗi dậy của các đại dịch toàn cầu mới.',
      passageJp: `熱帯雨林の大規模な伐採や急速な農地開拓に伴って、地球上の生物多様性が過去類を見ない速度で失われつつある。人間活動が野生生物の生息地の奥深くにまで侵入した結果、自然界のバリアが失われ、野生動物が保有する未知のウイルスが人間に感染する「人獣共通感染症（ズーノーシス）」の発生リスクが急速に高まっている。

これまで新興感染症の流行は、「衛生環境の悪い地域で起きた偶発的な不運」と見なされがちであった。しかし、そうした見方は危機の構造的な本質を見誤った表面的な捉え方にすぎない。生態系の多様性が豊かに保たれている環境下では、ウイルスは特定の宿主の間で分散され、特定の種に爆発的な被害をもたらすことは少ない。しかし、開発によって特定の種だけが激減したり異常増殖したりすると、ウイルスの変異と人間へのスピルオーバー（異種間伝播）が加速する恐れがある。

野生生物の違法取引や無秩序な森林伐採を放置し続ければ、将来的に新型コロナウイルスをはるかに凌駕する致死率と感染力を持った未知の病原体が人類社会を襲う恐れは極めて高い。

感染症対策とは単にワクチンや治療薬を開発することに留まらない。自然環境の保全を生態系の安全保障として位置づけ、地球環境全体を一つの健康体として守る「ワンヘルス」の理念を国際社会が共有し、直ちに自然破壊の暴走に歯止めをかけなければならない。`,
      passageVi: `Song hành cùng nạn chặt phá rừng nhiệt đới trên quy mô lớn và khai hoang đất nông nghiệp ồ ạt, sự đa dạng sinh học trên Trái Đất đang dần mất đi với tốc độ chưa từng thấy trong quá khứ. Kết quả của việc các hoạt động của con người xâm lấn sâu vào tận sào huyệt sinh sống của các loài sinh vật hoang dã đã làm biến mất các hàng rào chắn của tự nhiên, khiến nguy cơ bùng phát các "bệnh truyền nhiễm lây từ động vật sang người (zoonosis)" - nơi các virus chưa từng biết ẩn chứa trong động vật hoang dã lây nhiễm sang người - đang gia tăng chóng mặt.

Từ trước tới nay, các đợt bùng phát dịch bệnh truyền nhiễm mới nổi thường hay bị coi là "vận xui ngẫu nhiên xảy ra tại các khu vực có điều kiện vệ sinh kém". Thế nhưng, cách nhìn nhận đó chẳng qua chỉ là cách nắm bắt bề nổi làm hiểu sai bản chất mang tính cơ cấu của cuộc khủng hoảng. Dưới môi trường nơi sự đa dạng của hệ sinh thái được giữ gìn trù phú, virus được phân tán giữa các vật chủ đặc thù và hiếm khi gây thiệt hại bùng nổ lên một loài riêng biệt. Thế nhưng, khi một loài nhất định bị sụt giảm nghiêm trọng hoặc tăng sinh bất thường do bị con người tàn phá, nguy cơ biến dị của virus và sự lây truyền xuyên loài (spillover) sang con người sẽ bị đẩy nhanh.

Nếu tiếp tục làm ngơ trước nạn buôn bán động vật hoang dã trái phép và chặt phá rừng bừa bãi, nguy cơ trong tương lai một mầm bệnh chưa từng biết có độc lực tử vong và khả năng lây lan vượt xa virus corona chủng mới tấn công xã hội loài người là cực kỳ cao.

Đối phó với dịch bệnh không chỉ đơn thuần dừng lại ở việc phát minh vắc-xin hay thuốc điều trị. Phải định vị việc bảo tồn môi trường tự nhiên như một an ninh sinh thái, toàn thể cộng đồng quốc tế cùng chia sẻ triết lý "Một Sức khỏe (One Health)" - gìn giữ toàn bộ môi trường địa cầu như một thể trạng sức khỏe thống nhất, và lập tức phanh gấp sự bành trướng hủy hoại tự nhiên.`,
      vocabFocus: ['異常 (bất thường/dị thường)', '気象 (khí tượng)', '災害 (thiên tai/thảm họa)', '警戒 (cảnh giác/đề phòng)', '予測 (dự báo/dự đoán)', '限界 (giới hạn)'],
      grammarFocus: ['〜恐れがある (có nguy cơ / e rằng sẽ có chuyện xấu xảy ra)', '〜にすぎない (chẳng qua chỉ là / không hơn không kém)'],
      questions: [
        {
          id: 'n2-l5-r5-q1',
          question: '人獣共通感染症のリスクが高まっている根本的な原因は何ですか。(Nguyên nhân căn bản làm tăng nguy cơ bệnh lây từ động vật sang người là gì?)',
          options: [
            '動物園の動物がすべて脱走したこと',
            '人間活動が野生生物の生息地へ侵入し、自然界のバリアが失われたこと',
            'ペットを飼う人が世界中でいなくなったこと',
            'ウイルスが宇宙から降ってきたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "人間活動が野生生物の生息地の奥深くにまで侵入した結果、自然界のバリアが失われ、野生動物が保有する未知のウイルスが人間に感染する..."',
        },
        {
          id: 'n2-l5-r5-q2',
          question: '「偶発的な不運」と見なす考え方を筆者はどう批判していますか。(Tác giả phê phán quan điểm xem dịch bệnh là "vận xui ngẫu nhiên" như thế nào?)',
          options: [
            '非常に科学的で的確な見解である',
            '危機の構造的な本質を見誤った表面的な捉え方にすぎない',
            'すべての医者が信じるべき真理である',
            '古代から伝わる正しい知恵である',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "そうした見方は危機の構造的な本質を見誤った表面的な捉え方にすぎない。"',
        },
        {
          id: 'n2-l5-r5-q3',
          question: '健全な生態系がウイルス感染拡大を防ぐ仕組みとして書かれているのは何ですか。(Cơ chế hệ sinh thái lành mạnh ngăn chặn virus lây lan là gì?)',
          options: [
            '木々がウイルスをすべて吸収して消滅させること',
            'ウイルスの宿主が多様な種の間で分散され、特定の種への爆発的被害が抑えられること',
            '野生動物が自分でマスクを着けること',
            '気温が下がってウイルスが凍結すること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "生態系の多様性が豊かに保たれている環境下では、ウイルスは特定の宿主の間で分散され、特定の種に爆発的な被害をもたらすことは少ない。"',
        },
        {
          id: 'n2-l5-r5-q4',
          question: '森林伐採等を放置し続けた場合に「極めて高い」と恐れられている事態は何ですか。(Nguy cơ "cực kỳ cao" nếu bỏ mặc nạn phá rừng là gì?)',
          options: [
            '家がすべて木造で作れなくなること',
            '新型コロナをはるかに凌駕する致死率と感染力を持つ未知の病原体が人類を襲う恐れ',
            'すべての動物が草食動物に変わること',
            '外国への旅行が無料になること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "新型コロナウイルスをはるかに凌駕する致死率と感染力を持った未知の病原体が人類社会を襲う恐れは極めて高い。"',
        },
        {
          id: 'n2-l5-r5-q5',
          question: '「〜恐れがある」の文法的なニュアンスは何ですか。(Sắc thái của "〜恐れがある" trong bài là gì?)',
          options: [
            'Cảnh báo mạnh mẽ về mối hiểm họa bệnh dịch nguy hiểm có khả năng tấn công nhân loại',
            'Một lời chúc mừng nhân loại đã chiến thắng bệnh dịch',
            'Lời từ chối uống thuốc của bệnh nhân',
            'Một giả thuyết không cần quan tâm',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N2 〜恐れがある dùng cảnh báo về một rủi ro, tai họa tồi tệ có thể xảy ra.',
        },
        {
          id: 'n2-l5-r5-q6',
          question: '感染症対策として国際社会が共有すべき「ワンヘルス」の理念とは何ですか。(Triết lý "One Health" cộng đồng quốc tế cần chia sẻ là gì?)',
          options: [
            '一人ひとりが１日１回だけ病院に行くこと',
            '自然環境の保全を生態系の安全保障と位置づけ、地球環境全体を一つの健康体として守ること',
            '世界中の薬の価格を統一すること',
            'すべての野生動物を隔離して飼育すること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "自然環境の保全を生態系の安全保障として位置づけ、地球環境全体を一つの健康体として守る「ワンヘルス」の理念を国際社会が共有し、直ちに自然破壊の暴走に歯止めをかけなければならない。"',
        },
      ],
    },
  ],
}



