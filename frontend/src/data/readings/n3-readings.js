/**
 * Dữ liệu bài đọc hiểu cấp độ N3 (Trung cấp)
 * Độ dài: 400 - 600 từ/ký tự, bài nghị luận xã hội, công sở, công nghệ, quan điểm và đối chiếu.
 * Bám sát ngữ pháp và từ vựng chuẩn JLPT N3.
 */

export const N3_READING_LESSONS = {
  // ================= N3 BÀI 1 =================
  'n3-l1': [
    {
      id: 'n3-l1-r1',
      title: 'Bài đọc 1: ゲリラ豪雨と都市の防災準備 (Mưa dông cục bộ và công tác chuẩn bị phòng chống thiên tai đô thị)',
      summary: 'Ảnh hưởng của hiện tượng thời tiết cực đoan đối với đời sống đô thị và các biện pháp ứng phó tùy theo từng tình huống.',
      passageJp: `近年、日本の都市部では「ゲリラ豪雨」と呼ばれる局地的な大雨が急増しています。過去の記録と比較すると、１時間の降水量が５０ミリを超える非常に激しい雨の発生頻度は、ここ数十年で約１．５倍に達しました。

このような突発的な大雨に対して、地下鉄の駅や商業施設では、止水板の設置や排水ポンプの増強といった物理的な対策が急速に進められています。しかし、ハード面だけの整備では限界があります。大雨の被害を最小限に抑えるためには、市民一人ひとりの適切な準備と迅速な避難行動が必要不可欠です。

雨の降り方や河川の状況によって、取るべき安全確保の行動は大きく異なります。もし浸水が始まってしまっている場合は、無理に屋外の避難所へ移動しようとするのではなく、頑丈な建物の２階以上に移動する「垂直避難」を選択することが命を守る最善策となることもあります。日頃からハザードマップを確認し、万が一の場合に備えて非常持ち出し袋の点検を怠らない姿勢が求められています。`,
      passageVi: `Những năm gần đây, tại các đô thị Nhật Bản, những cơn mưa lớn cục bộ được gọi là "mưa dông du kích" đang gia tăng nhanh chóng. So sánh với các ghi chép trong quá khứ, tần suất xuất hiện những cơn mưa dữ dội với lượng mưa vượt quá 50mm trong một giờ đã tăng khoảng 1,5 lần trong vài thập kỷ qua.

Đối với những trận mưa đột ngột như vậy, tại các ga tàu điện ngầm và trung tâm thương mại, các biện pháp vật lý như lắp đặt tấm chắn nước và tăng cường máy bơm thoát nước đang được đẩy mạnh khẩn trương. Tuy nhiên, chỉ hoàn thiện về mặt cơ sở vật chất thôi thì luôn có giới hạn. Để hạn chế tối đa thiệt hại do mưa lớn, sự chuẩn bị phù hợp và hành động sơ tán nhanh chóng của từng người dân là vô cùng thiết yếu.

Tùy theo tình hình nước sông và lượng mưa trút xuống, hành động đảm bảo an toàn cần thực hiện sẽ rất khác nhau. Trong trường hợp nước ngập đã bắt đầu tràn vào, thay vì cố gắng di chuyển ra nơi sơ tán ngoài trời, việc lựa chọn "sơ tán theo phương thẳng đứng" bằng cách di chuyển lên tầng hai trở lên của một tòa nhà kiên cố đôi khi lại là phương án tốt nhất để bảo vệ tính mạng. Chúng ta cần thường xuyên kiểm tra bản đồ nguy cơ thiên tai và không được lơ là việc kiểm tra túi đồ khẩn cấp để chuẩn bị sẵn sàng cho những tình huống bất trắc.`,
      vocabFocus: ['雨 (mưa)', '場合 (trường hợp)', 'もし (nếu)', 'できる (có thể làm)', '必要 (cần thiết)', '準備 (chuẩn bị)'],
      grammarFocus: ['〜に対して (đối với / đối nghịch với)', '〜によって (tùy thuộc vào / bởi)'],
      questions: [
        {
          id: 'n3-l1-r1-q1',
          question: '近年、日本の都市部でどのような天候の変化が起きていますか。(Những năm gần đây, hiện tượng thời tiết nào đang thay đổi ở các đô thị Nhật Bản?)',
          options: [
            '降水量が減少し、水不足が続いている',
            '１時間５０ミリを超える局地的大雨の頻度が約１．５倍に増加した',
            '大雨が全く降らなくなり、台風の規模も小さくなった',
            '冬の積雪量が過去最高を記録している',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu rõ: "１時間の降水量が５０ミリを超える非常に激しい雨の発生頻度は、ここ数十年で約１．５倍に達しました。"',
        },
        {
          id: 'n3-l1-r1-q2',
          question: '都市部のハード面での対策として何が行われていますか。(Biện pháp cơ sở vật chất ở đô thị gồm những gì?)',
          options: [
            'すべての地下街を閉鎖すること',
            '止水板の設置や排水ポンプの増強',
            '全市民に雨具を無料で配布すること',
            '大雨の日は公共交通機関を全面運休にすること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 chỉ rõ: "地下鉄の駅や商業施設では、止水板の設置や排水ポンプの増強といった物理的な対策が急速に進められています。"',
        },
        {
          id: 'n3-l1-r1-q3',
          question: '筆者は被害を減らすためにハード面以外に何が必要だと述べていますか。(Tác giả cho rằng ngoài cơ sở vật chất thì cần điều gì?)',
          options: [
            '市民一人ひとりの適切な準備と迅速な避難行動',
            '天気が回復するまで屋内で待機し続けること',
            '雨が降ったらすぐに仕事を休むこと',
            '新しい地下街の建設を中止すること',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 2: "大雨の被害を最小限に抑えるためには、市民一人ひとりの適切な準備と迅速な避難行動が必要不可欠です。"',
        },
        {
          id: 'n3-l1-r1-q4',
          question: '「垂直避難」とはどのような行動を指していますか。(Sơ tán theo phương thẳng đứng chỉ hành động nào?)',
          options: [
            '地下街の奥深くに避難すること',
            '屋外の遠い指定避難所まで走って逃げること',
            'すでに浸水している場合、頑丈な建物の２階以上へ移動すること',
            'ビルの屋上からヘリコプターを呼ぶこと',
          ],
          answerIndex: 2,
          explanation: 'Đoạn 3: "頑丈な建物の２階以上に移動する「垂直避難」を選択することが命を守る最善策となることもあります。"',
        },
        {
          id: 'n3-l1-r1-q5',
          question: '文章中の「雨の降り方や河川の状況によって」の「によって」の使い方はどれですか。(Cách dùng "によって" ở đây biểu thị điều gì?)',
          options: [
            'Nguyên nhân (Do mưa lớn gây ra sạt lở)',
            'Chủ thể hành động bị động (Được viết bởi ai đó)',
            'Phương thức / Cách thức (Liên lạc bằng điện thoại)',
            'Sự tương ứng, thay đổi tùy theo trường hợp (Tùy thuộc vào lượng mưa và tình hình)',
          ],
          answerIndex: 3,
          explanation: 'Mẫu ngữ pháp N3 〜によって trong ngữ cảnh này mang nghĩa "tùy theo / ứng với mỗi trường hợp mà khác nhau".',
        },
        {
          id: 'n3-l1-r1-q6',
          question: '筆者が日頃から市民に求めている姿勢は何ですか。(Thái độ tác giả mong muốn ở người dân hàng ngày là gì?)',
          options: [
            '雨が降るたびに気象庁へ苦情の電話をすること',
            'ハザードマップの確認と非常持ち出し袋の点検を怠らないこと',
            '常に長靴を履いて生活すること',
            '都市部から山間部へ引っ越しを検討すること',
          ],
          answerIndex: 1,
          explanation: 'Câu cuối: "日頃からハザードマップを確認し、万が一の場合に備えて非常持ち出し袋の点検を怠らない姿勢が求められています。"',
        },
      ],
    },
    {
      id: 'n3-l1-r2',
      title: 'Bài đọc 2: 世代によるコミュニケーション観の違い (Sự khác biệt trong quan niệm giao tiếp theo thế hệ)',
      summary: 'So sánh cách nhìn nhận giữa thế hệ trẻ chuộng tin nhắn văn bản và người lớn tuổi thích gọi điện thoại trực tiếp.',
      passageJp: `現代社会において、人々のコミュニケーション様式は情報技術の普及によって大きく変化しました。特に若年層と中高年層の間では、連絡手段や会話に対する価値観の違いが顕著に現れています。

電話によるリアルタイムの通話を好む中高年世代に対して、若者の多くはチャットアプリやSNSのメッセージ機能による非同期のやり取りを好む傾向があります。ベテラン社員にとっては、「電話をかけて直接声で伝えることこそが誠意の表れであり、要件を素早く確認できる最良の方法」と信じられています。それに対して、若い世代は「突然電話をかけることは相手の時間を奪う失礼な行為であり、文字で送れば相手が都合の良い時に確認できる」と考えます。

どちらの考え方にも合理的な理由が存在します。緊急性が高く、ニュアンスまで正確に共有したい場合には電話が有効ですが、記録を残しつつ相手に負担をかけない準備ができる点ではメッセージが優れています。重要なのは、相手の立場や状況によって最適な手段を柔軟に使い分ける配慮です。`,
      passageVi: `Trong xã hội hiện đại, phương thức giao tiếp của con người đã thay đổi to lớn nhờ sự phổ cập của công nghệ thông tin. Đặc biệt giữa tầng lớp trẻ và tầng lớp trung niên cao tuổi, sự khác biệt về phương thức liên lạc cũng như giá trị quan đối với cuộc trò chuyện đang thể hiện một cách rõ rệt.

Trái ngược với thế hệ trung niên ưa thích việc gọi điện đàm thoại thời gian thực, phần lớn người trẻ lại có xu hướng chuộng việc trao đổi không đồng bộ thông qua các ứng dụng chat và tin nhắn mạng xã hội. Đối với các nhân viên kỳ cựu, người ta tin rằng "gọi điện và truyền đạt trực tiếp bằng giọng nói mới là biểu hiện của sự thành ý, là cách tốt nhất để xác nhận công việc nhanh chóng". Trái lại, thế hệ trẻ lại nghĩ rằng "việc đột ngột gọi điện thoại là hành vi thất lễ cướp đi thời gian của đối phương, nếu gửi tin nhắn văn bản thì đối phương có thể xem vào lúc thuận tiện".

Cách suy nghĩ của cả hai bên đều tồn tại những lý do hợp lý. Trong trường hợp tính cấp bách cao và muốn chia sẻ chính xác từng sắc thái thì gọi điện thoại rất hiệu quả, nhưng ở khía cạnh chuẩn bị lưu giữ bằng chứng mà không gây gánh nặng cho đối phương thì tin nhắn lại ưu việt hơn. Điều quan trọng là sự tinh tế, linh hoạt lựa chọn phương tiện tối ưu tùy theo hoàn cảnh và lập trường của đối phương.`,
      vocabFocus: ['場合 (trường hợp)', 'もし (nếu)', 'できる (có thể làm)', '必要 (cần thiết)', '準備 (chuẩn bị)'],
      grammarFocus: ['〜に対して (đối với / đối nghịch với)', '〜によって (tùy thuộc vào / bởi)'],
      questions: [
        {
          id: 'n3-l1-r2-q1',
          question: '中高年層が電話での連絡を好む主な理由は何ですか。(Lý do chính người trung niên thích gọi điện thoại là gì?)',
          options: [
            'スマートフォンの文字入力が全くできないから',
            '声で直接伝えることが誠意であり、迅速に確認できると考えているから',
            '電話料金が無料だから',
            'SNSを使うことが法律で禁止されているから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu rõ: "電話をかけて直接声で伝えることこそが誠意の表れであり、要件を素早く確認できる最良の方法と信じられています。"',
        },
        {
          id: 'n3-l1-r2-q2',
          question: '若い世代が突然の電話を避ける理由は何ですか。(Tại sao người trẻ lại tránh gọi điện đột ngột?)',
          options: [
            '相手の時間を奪う失礼な行為だと捉えているから',
            '話すのが面倒で友達がいないから',
            '会社の上司と話すことを恐れているから',
            '通話機能が付いていない端末を使っているから',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 2 viết: "突然電話をかけることは相手の時間を奪う失礼な行為であり、文字で送れば相手が都合の良い時に確認できると考えます。"',
        },
        {
          id: 'n3-l1-r2-q3',
          question: 'メッセージによるやり取りの利点として筆者が挙げているのはどれですか。(Ưu điểm của tin nhắn mà tác giả nêu ra là gì?)',
          options: [
            '相手に返信を強制できること',
            '記録を残し、相手に時間的負担をかけずに済むこと',
            '感情が直接伝わりやすいこと',
            'どのような緊急事態にも即座に対応できること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3 chỉ ra: "記録を残しつつ相手に負担をかけない準備ができる点ではメッセージが優れています。"',
        },
        {
          id: 'n3-l1-r2-q4',
          question: '文章の「電話を好む中高年世代に対して、若者の多くは〜」における「に対して」の意味はどれですか。(Nghĩa của "に対して" ở câu trên là gì?)',
          options: [
            'Chỉ mục tiêu hướng tới (Lịch sự đối với khách hàng)',
            'Chỉ sự tương phản, đối lập giữa hai đối tượng (Trái ngược với... thì...)',
            'Chỉ tỷ lệ (1 người ứng với 3 quả táo)',
            'Chỉ nguyên nhân kết quả (Vì trời mưa nên nghỉ)',
          ],
          answerIndex: 1,
          explanation: 'Mẫu ngữ pháp N3 〜に対して dùng để so sánh hai vế có tính chất đối lập, tương phản nhau.',
        },
        {
          id: 'n3-l1-r2-q5',
          question: '筆者がコミュニケーションにおいて最も重要だと考えていることは何ですか。(Tác giả xem điều gì quan trọng nhất trong giao tiếp?)',
          options: [
            'すべての連絡を電話だけに統一すること',
            '相手の立場や状況によって最適な手段を柔軟に使い分けること',
            '若者側のやり方に高齢者が全面的に合わせること',
            '仕事の連絡にはSNSのスタンプだけを使うこと',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 3: "重要なのは、相手の立場や状況によって最適な手段を柔軟に使い分ける配慮です。"',
        },
        {
          id: 'n3-l1-r2-q6',
          question: 'この文章全体の主旨として最も適切なものはどれですか。(Ý chính toàn bài là gì?)',
          options: [
            '若者のコミュニケーションマナーは間違っている',
            '電話という連絡手段は時代遅れなので廃止すべきだ',
            '世代による連絡手段の違いを理解し、状況に応じた使い分けが不可欠である',
            '情報技術の進化は人間関係を悪化させるだけである',
          ],
          answerIndex: 2,
          explanation: 'Bài viết phân tích ưu nhược điểm của cả hai thế hệ và kết luận cần thấu hiểu, linh hoạt lựa chọn tùy tình huống.',
        },
      ],
    },
    {
      id: 'n3-l1-r3',
      title: 'Bài đọc 3: 企業におけるテレワーク導入と業務管理 (Ứng dụng làm việc từ xa và quản lý nghiệp vụ trong doanh nghiệp)',
      summary: 'Phân tích hiệu quả và thách thức khi áp dụng làm việc từ xa, cùng sự chuẩn bị công cụ số cần thiết.',
      passageJp: `感染症の拡大をきっかけに、多くの日本企業でテレワーク（在宅勤務）が導入されました。かつては「オフィスに出社して机を並べて働くこと」が当たり前でしたが、インターネット環境とクラウドサービスの進化によって、自宅でも支障なく通常業務ができる仕組みが整いました。

テレワークの推進に対して、従業員の通勤ストレスの軽減やワークライフバランスの改善といった肯定的な意見が多く寄せられています。満員電車の負担から解放されたことで、プライベートな時間や学習の機会が増加しました。

一方で、管理職側からは「部下の勤務態度や進捗状況が見えにくくなり、公平な評価を下すのが難しくなった」という不満や不安も聞かれます。同僚同士の何気ない雑談が減少したことによって、新しいアイデアの創出やメンタルヘルスの維持に悪影響が出ている場合もあります。

もし企業がテレワークを長期的に成功させたいのであれば、単に業務ツールを導入するだけでなく、成果に基づいた明確な評価基準を準備し、定期的なオンライン面談を実施するなど、制度面でのきめ細かな対応が必要です。`,
      passageVi: `Lấy dịch bệnh làm bước ngoặt, rất nhiều doanh nghiệp Nhật Bản đã đưa hình thức làm việc từ xa (telework / làm tại nhà) vào áp dụng. Trước đây, "đến văn phòng ngồi cạnh bàn nhau làm việc" là điều hiển nhiên, nhưng nhờ sự tiến hóa của hạ tầng internet và dịch vụ đám mây, cơ chế để có thể thực hiện công việc thường nhật tại nhà mà không gặp trở ngại đã được hoàn thiện.

Đối với việc đẩy mạnh làm việc từ xa, có rất nhiều ý kiến tích cực như giảm bớt căng thẳng đi lại và cải thiện cân bằng giữa công việc với cuộc sống. Nhờ được giải phóng khỏi gánh nặng của những chuyến tàu chật cứng người, thời gian riêng tư và cơ hội học tập của nhân viên đã gia tăng.

Mặt khác, từ phía cấp quản lý, người ta cũng nghe thấy những bất an và phàn nàn rằng "khó quan sát được thái độ làm việc cũng như tiến độ của cấp dưới, khiến việc đưa ra đánh giá công bằng trở nên khó khăn". Do các cuộc trò chuyện phiếm thân mật giữa đồng nghiệp giảm sút, cũng có những trường hợp gây ảnh hưởng tiêu cực đến việc nảy sinh ý tưởng mới hoặc duy trì sức khỏe tinh thần.

Nếu các doanh nghiệp muốn áp dụng telework thành công về lâu dài, không chỉ đơn thuần là đưa công cụ vào mà cần phải chuẩn bị các tiêu chí đánh giá rõ ràng dựa trên kết quả đầu ra, thực hiện các buổi trao đổi trực tuyến định kỳ, có sự ứng phó chu đáo về mặt thể chế.`,
      vocabFocus: ['場合 (trường hợp)', 'もし (nếu)', 'できる (có thể làm)', '必要 (cần thiết)', '準備 (chuẩn bị)'],
      grammarFocus: ['〜に対して (đối với / đối nghịch với)', '〜によって (tùy thuộc vào / bởi)'],
      questions: [
        {
          id: 'n3-l1-r3-q1',
          question: 'テレワークが普及した技術的な背景は何ですか。(Bối cảnh công nghệ giúp làm việc từ xa phổ biến là gì?)',
          options: [
            '新しい高速道路が開通したこと',
            'ネット環境とクラウドサービスの進化',
            'オフィスの賃料が高騰したこと',
            '紙の書類の使用が法律で禁止されたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu rõ: "インターネット環境とクラウドサービスの進化によって、自宅でも支障なく通常業務ができる仕組みが整いました。"',
        },
        {
          id: 'n3-l1-r3-q2',
          question: '従業員側にとってのテレワークの最大の利点は何ですか。(Lợi ích lớn nhất đối với người lao động là gì?)',
          options: [
            '給料が大幅にアップすること',
            '通勤ストレスの軽減とプライベートな時間の増加',
            '仕事を全くしなくてもバレないこと',
            '会社の上司と一生会わずに済むこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu rõ: "通勤ストレスの軽減やワークライフバランスの改善...満員電車の負担から解放されたことで、プライベートな時間や学習の機会が増加しました。"',
        },
        {
          id: 'n3-l1-r3-q3',
          question: '管理職が抱えている悩みとして文章に書かれているものはどれですか。(Nỗi trăn trở của cấp quản lý được nhắc tới là gì?)',
          options: [
            '部下の進捗状況が見えにくく、公平な評価が難しいこと',
            '会社の電気代が異常に高くなったこと',
            'パソコンの操作方法が分からなくなったこと',
            '部下から毎時間電話がかかってくること',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 3 viết: "部下の勤務態度や進捗状況が見えにくくなり、公平な評価を下すのが難しくなったという不満や不安も聞かれます。"',
        },
        {
          id: 'n3-l1-r3-q4',
          question: '雑談の減少がもたらす恐れのある悪影響は何ですか。(Tác hại có thể xảy ra khi việc nói chuyện phiếm giảm đi là gì?)',
          options: [
            'タイピング速度の低下',
            '新アイデア創出の停滞やメンタルヘルスの悪化',
            '視力の急激な低下',
            '会社のオフィス家具の破損',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3 chỉ ra: "新しいアイデアの創出やメンタルヘルスの維持に悪影響が出ている場合もあります。"',
        },
        {
          id: 'n3-l1-r3-q5',
          question: 'テレワークを成功させるために企業に求められている準備は何ですか。(Chuẩn bị nào doanh nghiệp cần thực hiện để telework thành công?)',
          options: [
            '全社員に毎日オフィスへ出社するよう命じること',
            '成果に基づく明確な評価基準の整備と定期的な面談',
            'すべての業務を外部の業者に委託すること',
            '社員同士のメッセージのやり取りを禁止すること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn cuối: "成果に基づいた明確な評価基準を準備し、定期的なオンライン面談を実施するなど、制度面でのきめ細かな対応が必要です。"',
        },
        {
          id: 'n3-l1-r3-q6',
          question: '文章中の「インターネット環境とクラウドサービスの進化によって」の「によって」の働きは何ですか。(Vai trò của "によって" trong câu là gì?)',
          options: [
            'Chỉ nguyên nhân, phương tiện dẫn đến kết quả',
            'Chỉ sự lựa chọn đối lập',
            'Chỉ đối tượng bị tác động tiêu cực',
            'Chỉ thời gian diễn ra sự việc',
          ],
          answerIndex: 0,
          explanation: 'Mẫu ngữ pháp N3 〜によって biểu thị phương tiện, nguyên nhân mang lại kết quả phát triển.',
        },
      ],
    },
    {
      id: 'n3-l1-r4',
      title: 'Bài đọc 4: 日本の雨文化と季節の言葉 (Văn hóa mưa và những từ ngữ theo mùa ở Nhật Bản)',
      summary: 'Khám phá sự nhạy cảm của người Nhật đối với mưa và hệ thống từ vựng phong phú thể hiện mối quan hệ với tự nhiên.',
      passageJp: `日本は年間を通じて雨が多い国です。梅雨の長雨をはじめ、秋の長雨、春の訪れを告げる雨など、季節の移り変わりは雨の降り方によって実感されます。日本人は古くから雨に対して深い関心を寄せ、様々な名前をつけて呼び分けてきました。

例えば、春に草木を潤す雨を「雨催い（あまもよい）」や「春雨（はるさめ）」と呼び、初夏に木々の緑を鮮やかに濡らす雨を「緑雨（りょくう）」と表現します。また、秋にしとしとと降り続く雨には「秋霖（しゅうりん）」という風情ある言葉が用意されています。

雨は時に農作物に恵みをもたらす一方で、過度の豪雨は生活を脅かす災害となります。自然の力に対して恐れを抱きつつも、その恩恵に感謝し、雨の音や情景に美しさを見出してきた歴史が、日本語の豊かな表現を生み出しました。天候をただの障害と見なすのではなく、季節の風物詩として受け止める心の準備があれば、雨の日も心豊かに過ごすことができるはずです。`,
      passageVi: `Nhật Bản là quốc gia có lượng mưa lớn trong suốt cả năm. Bắt đầu từ mùa mưa dầm Tsuyu, đến mưa dầm mùa thu hay cơn mưa báo hiệu xuân sang, sự chuyển giao các mùa được cảm nhận rõ rệt tùy theo cách mưa rơi. Từ xa xưa, người Nhật đã dành sự quan tâm sâu sắc đối với mưa và đặt ra vô số tên gọi phong phú khác nhau để phân biệt.

Ví dụ, cơn mưa mùa xuân tưới mát cây cỏ được gọi là "Amamoyoi" hay "Harusame", còn cơn mưa đầu hạ làm ướt đẫm màu xanh của cây cối một cách tươi thắm được gọi là "Ryokuu (Lục vũ)". Ngoài ra, những cơn mưa rả rích kéo dài vào mùa thu được dành riêng cho từ ngữ đầy thi vị mang tên "Shūrin (Thu lâm)".

Mưa đôi khi mang lại phước lành cho mùa màng, nhưng mặt khác, mưa xối xả quá mức lại trở thành thiên tai đe dọa sinh hoạt. Lịch sử con người vừa kính sợ trước sức mạnh của thiên nhiên, vừa biết ơn những ân huệ đó và tìm thấy vẻ đẹp trong âm thanh cũng như quang cảnh của mưa, đã sản sinh ra những cách diễn đạt vô cùng phong phú trong tiếng Nhật. Nếu có sự chuẩn bị trong tâm thế để đón nhận thời tiết không phải như một trở ngại đơn thuần mà là một nét văn hóa thi vị theo mùa, chắc chắn chúng ta sẽ có thể trải qua những ngày mưa với tâm hồn phong phú.`,
      vocabFocus: ['雨 (mưa)', '場合 (trường hợp)', 'もし (nếu)', 'できる (có thể làm)', '必要 (cần thiết)', '準備 (chuẩn bị)'],
      grammarFocus: ['〜に対して (đối với / đối nghịch với)', '〜によって (tùy thuộc vào / bởi)'],
      questions: [
        {
          id: 'n3-l1-r4-q1',
          question: '日本人が雨に対して持ってきた感情として最も合っているものはどれですか。(Tình cảm người Nhật dành cho mưa phù hợp nhất là gì?)',
          options: [
            '雨を完全に排除したいという憎しみの感情',
            '自然の力を恐れつつも恩恵に感謝し、美しさを見出す感情',
            '雨について何も考えない無関心な態度',
            '雨の日は外出禁止にするという義務感',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3 viết rõ: "自然の力に対して恐れを抱きつつも、その恩恵に感謝し、雨の音や情景に美しさを見出してきた歴史が、日本語の豊かな表現を生み出しました。"',
        },
        {
          id: 'n3-l1-r4-q2',
          question: '初夏に新緑を鮮やかに濡らす雨は何と呼ばれていますか。(Mưa làm ướt đẫm màu xanh cây cối đầu hạ gọi là gì?)',
          options: ['緑雨（りょくう）', '春雨（はるさめ）', '秋霖（しゅうりん）', '暴風雨（ぼうふうう）'],
          answerIndex: 0,
          explanation: 'Đoạn 2 nêu: "初夏に木々の緑を鮮やかに濡らす雨を「緑雨（りょくう）」と表現します。"',
        },
        {
          id: 'n3-l1-r4-q3',
          question: '季節の移り変わりは何によって実感されますか。(Sự chuyển giao mùa màng được cảm nhận bởi điều gì?)',
          options: ['スーパーのセールの案内', '雨の降り方', 'スマートフォンの通知', '電車の時刻表の変更'],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "季節の移り変わりは雨の降り方によって実感されます。"',
        },
        {
          id: 'n3-l1-r4-q4',
          question: '秋にしとしとと降り続く雨を表す言葉はどれですか。(Từ miêu tả mưa rả rích kéo dài mùa thu là gì?)',
          options: ['秋霖（しゅうりん）', '雨催い（あまもよい）', '豪雨（ごうう）', '夕立（ゆうだち）'],
          answerIndex: 0,
          explanation: 'Đoạn 2: "秋にしとしとと降り続く雨には「秋霖（しゅうりん）」という風情ある言葉が用意されています。"',
        },
        {
          id: 'n3-l1-r4-q5',
          question: '筆者は雨の日を心豊かに過ごすために何が必要だと考えていますか。(Tác giả cho rằng cần gì để trải qua ngày mưa một cách phong phú?)',
          options: [
            '高価な傘を何本も購入すること',
            '雨を単なる障害ではなく、季節の風物詩として受け止める心の準備',
            '一日中カーテンを閉めて部屋を暗くすること',
            '雨が降ったら仕事を休む計画を立てること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 3: "天候をただの障害と見なすのではなく、季節の風物詩として受け止める心の準備があれば、雨の日も心豊かに過ごすことができるはずです。"',
        },
        {
          id: 'n3-l1-r4-q6',
          question: '文章中の「日本人は古くから雨に対して深い関心を寄せ」の「に対して」の意味はどれですか。(Nghĩa của "に対して" ở đây là gì?)',
          options: [
            'Chỉ đối tượng hướng đến của cảm xúc, sự quan tâm',
            'Chỉ sự đối lập gay gắt giữa hai đối tượng',
            'Chỉ chi phí phải trả cho một món hàng',
            'Chỉ hành động chống trả quân địch',
          ],
          answerIndex: 0,
          explanation: 'Mẫu ngữ pháp N3 〜に対して ở đây biểu thị đối tượng được hướng tới bởi hành vi, thái độ quan tâm.',
        },
      ],
    },
    {
      id: 'n3-l1-r5',
      title: 'Bài đọc 5: 海外旅行における危機管理と事前準備 (Quản lý khủng hoảng và chuẩn bị trước khi đi du lịch nước ngoài)',
      summary: 'Những lưu ý quan trọng đối với các tình huống rủi ro phát sinh khi đi du lịch và kỹ năng giải quyết sự cố.',
      passageJp: `海外旅行は異文化に触れ、視野を広げる絶好の機会です。しかし、言語や生活習慣が異なる環境では、思いがけないトラブルに遭遇するリスクが常に潜んでいます。楽しい旅を実現するためには、万全の事前準備と危機管理への心構えが欠かせません。

観光客を狙った盗難や詐欺に対して、日本人は「安全慣れ」していると指摘されることが少なくありません。日本ではカフェの席に荷物を置いたまま席を離れても盗まれることは稀ですが、海外では一瞬目を離した隙に所持品を盗まれる危険があります。貴重品は一つの場所にまとめず、複数の場所に分散して保管することが基本です。

また、現地の政情や天候の急変によって、フライトの欠航や旅程の変更を余儀なくされる場合もあります。もしトラブルに巻き込まれたら、慌てずに在外国公館（大使館や領事館）の連絡先や海外旅行保険のサポート窓口へ迅速に連絡できる体制を整えておく必要があります。情報収集を怠らず、適切な準備を重ねておくことによって、安心して旅を楽しむことができるのです。`,
      passageVi: `Du lịch nước ngoài là cơ hội tuyệt vời để tiếp xúc với các nền văn hóa khác nhau và mở rộng tầm nhìn. Tuy nhiên, trong môi trường bất đồng về ngôn ngữ và tập quán sinh hoạt, luôn tiềm ẩn nguy cơ gặp phải những rắc rối ngoài ý muốn. Để có được một chuyến đi vui vẻ, việc chuẩn bị kỹ lưỡng trước khi đi và tâm thế quản lý rủi ro là điều không thể thiếu.

Đối với các vụ trộm cắp hay lừa đảo nhắm vào khách du lịch, người Nhật thường hay bị chỉ trích là "quá quen với sự an toàn". Ở Nhật, việc để nguyên hành lý trên bàn quán cà phê rồi rời đi cũng hiếm khi bị lấy mất, nhưng ở nước ngoài, chỉ cần rời mắt trong chốc lát là có nguy cơ bị mất cắp đồ đạc. Nguyên tắc cơ bản là không gom đồ có giá trị vào một chỗ mà hãy phân tán cất giữ ở nhiều nơi khác nhau.

Ngoài ra, tùy theo sự thay đổi đột ngột của thời tiết hay tình hình chính trị địa phương, đôi khi du khách buộc phải hủy chuyến bay hoặc đổi lịch trình. Nếu bị cuốn vào sự cố rắc rối, cần phải chuẩn bị sẵn cơ chế có thể liên hệ nhanh chóng với cơ quan đại diện ngoại giao (đại sứ quán hoặc lãnh sự quán) hoặc tổng đài hỗ trợ của bảo hiểm du lịch quốc tế mà không bị hoảng loạn. Nhờ không lơ là việc thu thập thông tin và chuẩn bị đầy đủ chu đáo, bạn mới có thể yên tâm tận hưởng chuyến đi.`,
      vocabFocus: ['雨 (mưa)', '場合 (trường hợp)', 'もし (nếu)', 'できる (có thể làm)', '必要 (cần thiết)', '準備 (chuẩn bị)'],
      grammarFocus: ['〜に対して (đối với / đối nghịch với)', '〜によって (tùy thuộc vào / bởi)'],
      questions: [
        {
          id: 'n3-l1-r5-q1',
          question: '海外旅行で日本人が指摘されがちな弱点として何が書かれていますか。(Điểm yếu người Nhật hay bị nhắc nhở khi đi du lịch nước ngoài là gì?)',
          options: [
            '外国語の会話能力が高すぎること',
            '日本の治安の良さに慣れすぎていて防犯意識が薄いこと',
            '現地の料理を全く食べないこと',
            'お土産を大量に買いすぎること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "観光客を狙った盗難や詐欺に対して、日本人は「安全慣れ」していると指摘されることが少なくありません。"',
        },
        {
          id: 'n3-l1-r5-q2',
          question: '貴重品の管理方法として推奨されているのはどれですか。(Phương pháp quản lý đồ có giá trị được khuyến nghị là gì?)',
          options: [
            '一つの大きなリュックにすべてまとめて入れる',
            '貴重品を複数の場所に分散して保管する',
            'ホテルの部屋のテーブルの上に置いたままにする',
            '見知らぬ通行人に預かってもらう',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "貴重品は一つの場所にまとめず、複数の場所に分散して保管することが基本です。"',
        },
        {
          id: 'n3-l1-r5-q3',
          question: 'フライトの欠航などの理由として文章に挙げられているのは何ですか。(Lý do hủy chuyến bay được nêu trong bài là gì?)',
          options: [
            'パイロットの睡眠不足',
            '現地の政情や天候の急変',
            '空港の免税店の改装工事',
            'パスポートの有効期限切れ',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "現地の政情や天候の急変によって、フライトの欠航や旅程の変更を余儀なくされる場合もあります。"',
        },
        {
          id: 'n3-l1-r5-q4',
          question: 'もしトラブルに巻き込まれた場合、どうするべきだと書かれていますか。(Nếu gặp sự cố, cần phải làm gì?)',
          options: [
            '諦めてその場に座り込んで泣く',
            '在外国公館や保険サポート窓口へ迅速に連絡できる体制をとる',
            'SNSに不満を書き込んで助けを待つ',
            '警察官から逃げて隠れる',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "もしトラブルに巻き込まれたら、慌てずに在外国公館の連絡先や海外旅行保険のサポート窓口へ迅速に連絡できる体制を整えておく必要があります。"',
        },
        {
          id: 'n3-l1-r5-q5',
          question: '「適切な準備を重ねておくことによって、安心して旅を楽しむことができる」の「によって」の働きは何ですか。(Vai trò của "によって" trong câu là gì?)',
          options: [
            'Chỉ nguyên nhân / phương tiện dẫn đến kết quả',
            'Chỉ sự lựa chọn ngẫu nhiên',
            'Chỉ sự phê phán khuyết điểm',
            'Chỉ thời gian bắt đầu hành động',
          ],
          answerIndex: 0,
          explanation: 'Mẫu ngữ pháp N3 〜によって biểu thị phương tiện, hành động nhờ đó mà đạt được kết quả an tâm du lịch.',
        },
        {
          id: 'n3-l1-r5-q6',
          question: '文章全体の結論として最もふさわしいものはどれですか。(Kết luận phù hợp nhất cho cả bài là gì?)',
          options: [
            '海外旅行は危険すぎるので国内旅行だけに限定すべきである',
            '事前の情報収集と危機管理の準備を行うことで、安心して旅を楽しめる',
            '保険に入る費用は無駄なので準備する必要はない',
            'どんなトラブルも自然に解決するので心配は不要である',
          ],
          answerIndex: 1,
          explanation: 'Bài viết nhấn mạnh tầm quan trọng của việc chuẩn bị và quản lý rủi ro để có thể yên tâm tận hưởng chuyến đi.',
        },
      ],
    },
  ],

  // ================= N3 BÀI 2 =================
  'n3-l2': [
    {
      id: 'n3-l2-r1',
      title: 'Bài đọc 1: 新規プロジェクトの成果とチームリーダーの役割 (Thành quả dự án mới và vai trò của trưởng nhóm)',
      summary: 'Bài học rút ra từ thành công của dự án công nghệ nhờ sự phối hợp ăn ý và bài học từ những thất bại trước đó.',
      passageJp: `半年間にわたって進められてきた新製品開発プロジェクトが、無事に目標を達成して製品化に至りました。今回のプロジェクトが大成功を収めたのは、何よりもメンバー全員が自分の担当業務に責任を持ち、互いに助け合って行動したおかげです。

プロジェクトの立ち上げ当初は、メンバー間のコミュニケーション不足のせいで、スケジュールの遅延や仕様の認識違いといった小さな失敗が相次ぎました。一時は納期に間に合わないのではないかとチーム全体に不安が広がりました。

しかし、リーダーが全員の意見を真摯に聞き入れ、毎朝１５分間のミーティングを設けて情報共有を徹底したことで、状況は劇的に改善されました。各メンバーが果たすべき役割を明確にした結果、業務の効率は以前の２倍近くに向上しました。

過去の失敗を教訓として真剣に改善に取り組めば、どのような困難な課題であっても克服できるはずです。今回の成果は、今後の会社の事業展開において大きな自信と活力をもたらすに違いありません。`,
      passageVi: `Dự án phát triển sản phẩm mới được tiến hành trong suốt nửa năm qua đã hoàn thành mục tiêu thuận lợi và đi đến giai đoạn thương mại hóa. Dự án lần này gặt hái được thành công vang dội trước hết là nhờ vào việc tất cả các thành viên đều có tinh thần trách nhiệm với phần công việc phụ trách của mình và hỗ trợ lẫn nhau trong hành động.

Vào thời điểm mới khởi động dự án, do sự thiếu hụt giao tiếp giữa các thành viên, hàng loạt sai sót nhỏ như chậm trễ tiến độ hay nhận thức sai về thông số kỹ thuật đã liên tiếp xảy ra. Có thời điểm nỗi bất an không kịp giao hàng đã lan rộng khắp toàn đội ngũ.

Tuy nhiên, nhờ vào việc trưởng nhóm lắng nghe chân thành ý kiến của mọi người, bố trí cuộc họp 15 phút mỗi sáng để triệt để chia sẻ thông tin, tình hình đã được cải thiện ngoạn mục. Kết quả của việc làm rõ vai trò mà mỗi thành viên phải đảm nhận đã giúp hiệu suất công việc tăng lên gần gấp 2 lần so với trước đây.

Nếu lấy những thất bại trong quá khứ làm bài học để nghiêm túc nỗ lực cải thiện, chắc chắn bất kể vấn đề khó khăn nào cũng có thể vượt qua. Thành quả lần này ắt hẳn sẽ mang lại sự tự tin và sức sống to lớn trong việc triển khai các dự án kinh doanh tiếp theo của công ty.`,
      vocabFocus: ['影響 (ảnh hưởng)', '役割 (vai trò)', '業務 (nghiệp vụ)', '担当 (đảm trách)', '成果 (thành quả)', '失敗 (thất bại)'],
      grammarFocus: ['〜おかげで / 〜せいで (nhờ có / tại vì do)', '〜はずだ (chắc chắn là / đương nhiên là)'],
      questions: [
        {
          id: 'n3-l2-r1-q1',
          question: 'プロジェクトが成功した最大の要因は何ですか。(Nguyên nhân lớn nhất dẫn đến thành công của dự án là gì?)',
          options: [
            '外部のコンサルタントにすべて任せたこと',
            'メンバー全員が担当業務に責任を持ち、助け合って行動したこと',
            'ライバル会社が事業から撤退したこと',
            '製品の価格を極端に安く設定したこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "メンバー全員が自分の担当業務に責任を持ち、互いに助け合って行動したおかげです。"',
        },
        {
          id: 'n3-l2-r1-q2',
          question: 'プロジェクト初期に失敗が相次いだ原因は何でしたか。(Nguyên nhân ban đầu dẫn tới sai sót liên tiếp là gì?)',
          options: [
            '予算が全く足りなかったこと',
            'メンバー間のコミュニケーション不足のせい',
            'パソコンの性能が低すぎたこと',
            'リーダーが毎日欠勤していたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "メンバー間のコミュニケーション不足のせいで、スケジュールの遅延や仕様の認識違いといった小さな失敗が相次ぎました。"',
        },
        {
          id: 'n3-l2-r1-q3',
          question: 'リーダーが状況を改善するために行った具体的な行動は何ですか。(Hành động cụ thể của nhóm trưởng để cải thiện tình hình là gì?)',
          options: [
            '失敗したメンバーを解雇したこと',
            '毎朝１５分間のミーティングを設けて情報共有を徹底したこと',
            '残業時間を毎晩５時間増やしたこと',
            'プロジェクトの目標を大幅に引き下げたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3 nêu: "毎朝１５分間のミーティングを設けて情報共有を徹底したことで、状況は劇的に改善されました。"',
        },
        {
          id: 'n3-l2-r1-q4',
          question: '役割を明確にしたことで、業務効率はどうなりましたか。(Hiệu suất công việc ra sao sau khi làm rõ vai trò?)',
          options: ['以前の２倍近くに向上した', '半分以下に低下した', '全く変化が見られなかった', '測定不能になった'],
          answerIndex: 0,
          explanation: 'Đoạn 3: "各メンバーが果たすべき役割を明確にした結果、業務の効率は以前の２倍近くに向上しました。"',
        },
        {
          id: 'n3-l2-r1-q5',
          question: '文章中の「〜おかげで」と「〜せいで」の使い分けとして正しい説明はどれですか。(Giải thích đúng về cách dùng 〜おかげで và 〜せいで?)',
          options: [
            'おかげで dùng cho kết quả tiêu cực, せいで dùng cho kết quả tích cực',
            'おかげで dùng cho kết quả tích cực (biết ơn), せいで dùng cho kết quả tiêu cực (đổ lỗi)',
            'Cả hai đều chỉ dùng cho người lớn tuổi',
            'Hai từ này hoàn toàn có thể thay thế cho nhau trong mọi trường hợp',
          ],
          answerIndex: 1,
          explanation: 'Ngữ pháp N3: 〜おかげで biểu thị nguyên nhân dẫn đến kết quả tốt (nhờ có), còn 〜せいで biểu thị nguyên nhân dẫn đến kết quả xấu (tại vì, do).',
        },
        {
          id: 'n3-l2-r1-q6',
          question: '「克服できるはずです」という表現に込められた筆者の気持ちは何ですか。(Tâm tư của tác giả ẩn sau biểu hiện 〜はずだ là gì?)',
          options: [
            '全く根拠のない単なる願望',
            '十分な理由や根拠に基づいて「当然そうなる」と確信する気持ち',
            '不可能なことに対する皮肉',
            '他人事としてどうでもよいと感じる気持ち',
          ],
          answerIndex: 1,
          explanation: 'Ngữ pháp N3: 〜はずだ dùng để phán đoán chắc chắn dựa trên cơ sở logic hoặc bằng chứng rõ ràng (chắc chắn là như vậy).',
        },
      ],
    },
    {
      id: 'n3-l2-r2',
      title: 'Bài đọc 2: スマートフォンの過剰利用がもたらす影響 (Ảnh hưởng từ việc sử dụng điện thoại thông minh quá mức)',
      summary: 'Phân tích hai mặt tích cực và tiêu cực của smartphone đối với giấc ngủ, sự tập trung và sức khỏe học sinh.',
      passageJp: `スマートフォンは現代人の生活に欠かせない万能ツールとなりました。地図アプリのおかげで道に迷う心配がなくなり、翻訳アプリのおかげで言葉が通じない外国人とも円滑に意思疎通ができるようになりました。日々の生活の利便性が飛躍的に向上したことは疑いようのない事実です。

しかしその一方で、スマートフォンの過剰な利用が健康や学業に与える悪影響が深刻化しています。深夜遅くまでSNSや動画サイトを見続けたせいで、慢性的な睡眠不足に陥り、翌日の授業や仕事中に集中力を欠いてしまう若者が後を絶ちません。画面から発せられる強い光は体内時計を狂わせ、睡眠の質を著しく低下させると指摘されています。

テクノロジーそのものに罪があるわけではありません。利用者が自分自身で利用時間をコントロールする習慣を身につけていれば、生活習慣が崩れる事態は防げるはずです。便利さに甘えて無意識に時間を浪費するのではなく、目的を持って賢く活用する意識が今こそ求められています。`,
      passageVi: `Điện thoại thông minh đã trở thành một công cụ vạn năng không thể thiếu trong đời sống con người hiện đại. Nhờ có ứng dụng bản đồ mà không còn lo bị lạc đường, nhờ có ứng dụng dịch thuật mà có thể giao tiếp trôi chảy với cả người nước ngoài bất đồng ngôn ngữ. Tiện ích trong cuộc sống hàng ngày gia tăng vượt bậc là sự thật không thể phủ nhận.

Thế nhưng mặt khác, tác động tiêu cực mà việc lạm dụng điện thoại thông minh mang lại cho sức khỏe và học tập đang ngày càng trầm trọng. Tại vì mải xem mạng xã hội hay các trang video trực tuyến tới tận đêm khuya, không ít bạn trẻ rơi vào tình trạng thiếu ngủ mãn tính, mất tập trung trong giờ học hay công việc ngày hôm sau. Người ta chỉ ra rằng ánh sáng mạnh phát ra từ màn hình làm rối loạn đồng hồ sinh học và làm giảm sút nghiêm trọng chất lượng giấc ngủ.

Bản thân công nghệ không hề có lỗi. Nếu người sử dụng rèn luyện được thói quen tự mình kiểm soát thời gian dùng máy thì chắc chắn tình trạng đảo lộn sinh hoạt sẽ có thể phòng tránh được. Thay vì ỷ lại vào sự tiện lợi mà lãng phí thời gian một cách vô thức, lúc này đây chúng ta cần có ý thức sử dụng nó một cách thông minh và có mục đích rõ ràng.`,
      vocabFocus: ['影響 (ảnh hưởng)', '役割 (vai trò)', '業務 (nghiệp vụ)', '担当 (đảm trách)', '成果 (thành quả)', '失敗 (thất bại)'],
      grammarFocus: ['〜おかげで / 〜せいで (nhờ có / tại vì do)', '〜はずだ (chắc chắn là / đương nhiên là)'],
      questions: [
        {
          id: 'n3-l2-r2-q1',
          question: 'スマートフォンによって便利になった例として書かれているのはどれですか。(Ví dụ về tiện ích do smartphone mang lại được nhắc tới là gì?)',
          options: [
            '病気が病院に行かずに治るようになったこと',
            '地図アプリで道に迷わず、翻訳アプリで意思疎通ができること',
            '働かなくてもお金が自動的に口座に入ること',
            '夜寝なくても全く疲れを感じなくなったこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "地図アプリのおかげで道に迷う心配がなくなり、翻訳アプリのおかげで言葉が通じない外国人とも円滑に意思疎通ができるようになりました。"',
        },
        {
          id: 'n3-l2-r2-q2',
          question: '夜遅くまでスマホを見ることによる直接的な悪影響は何ですか。(Ảnh hưởng trực tiếp do xem điện thoại khuya là gì?)',
          options: [
            '携帯電話のバッテリーが爆発すること',
            '体内時計が狂い、睡眠の質が著しく低下すること',
            '翌日の朝ご飯が食べられなくなること',
            '通信料金が毎月１０倍に跳ね上がること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "画面から発せられる強い光は体内時計を狂わせ、睡眠の質を著しく低下させると指摘されています。"',
        },
        {
          id: 'n3-l2-r2-q3',
          question: '「深夜遅くまで見続けたせいで、睡眠不足に陥り」の「せいで」の意味は何ですか。(Nghĩa của "せいで" trong câu là gì?)',
          options: [
            'Chỉ nguyên nhân dẫn đến kết quả xấu, đáng tiếc',
            'Chỉ lòng biết ơn đối với người khác',
            'Chỉ mục tiêu tương lai',
            'Chỉ điều kiện giả định tích cực',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜せいで chỉ nguyên nhân gây ra hậu quả xấu (tại vì, do).',
        },
        {
          id: 'n3-l2-r2-q4',
          question: '筆者は生活習慣の乱れを防ぐために何が必要だと考えていますか。(Tác giả cho rằng cần gì để ngăn ngừa đảo lộn thói quen sinh hoạt?)',
          options: [
            '国がすべてのスマートフォンを没収すること',
            '利用者が自ら利用時間をコントロールする習慣を身につけること',
            '夜間はインターネットの回線を国全体で遮断すること',
            'スマートフォンを古いガラケーに買い替えること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "利用者が自分自身で利用時間をコントロールする習慣を身につけていれば、生活習慣が崩れる事態は防げるはずです。"',
        },
        {
          id: 'n3-l2-r2-q5',
          question: '「防げるはずです」の「はずだ」のニュアンスとして最も適切なものはどれですか。(Sắc thái của "はずだ" phù hợp nhất là gì?)',
          options: [
            '理由から論理的に考えて「当然防げる能力や見込みがある」という確信',
            '絶対に防ぐことは不可能だという諦め',
            '他人に命令して実行させる表現',
            '過去の出来事に対する後悔',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜はずだ thể hiện sự chắc chắn theo logic, lý lẽ bình thường.',
        },
        {
          id: 'n3-l2-r2-q6',
          question: '筆者の主張として最も適切なものはどれですか。(Chủ trương nào của tác giả là đúng nhất?)',
          options: [
            'スマートフォンの利用は全面禁止すべきだ',
            'テクノロジーの便利さに甘えず、目的を持って賢く活用すべきだ',
            '睡眠時間を削ってでもスマートフォンの最新情報を追うべきだ',
            '健康被害の責任はすべてスマートフォン開発企業にある',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 3: "便利さに甘えて無意識に時間を浪費するのではなく、目的を持って賢く活用する意識が今こそ求められています。"',
        },
      ],
    },
    {
      id: 'n3-l2-r3',
      title: 'Bài đọc 3: 飲食店の接客改善と顧客満足度の向上 (Cải thiện phục vụ và nâng cao độ hài lòng khách hàng quán ăn)',
      summary: 'Kinh nghiệm biến thất bại thành công của một nhà hàng nhờ cải thiện quy trình tiếp đón và đào tạo nhân viên.',
      passageJp: `駅前にオープンしたある日本料理店は、開店から数ヶ月間、赤字続きで閉店の危機に追い込まれていました。料理の味には自信があったものの、ホールスタッフの研修不足のせいで、注文の取り間違いや料理の提供遅れといったトラブルが頻発し、顧客からの苦情が殺到したためです。

店主はこの失敗の原因をスタッフ個人の責任にするのではなく、店舗全体のオペレーション体制にあると見抜きました。そこで、注文端末を最新のタブレット方式に切り替え、スタッフ全員が担当する役割と動線を徹底的に見直しました。

スタッフに丁寧な言葉遣いと笑顔の接客を指導したおかげで、接客態度に関する評判は瞬く間に好転しました。インターネットの口コミサイトでも高評価が増加し、現在では週末になると行列ができるほどの人気店へと成長しました。

しっかりとした準備と教育体制が整っていれば、サービスの質は必ず向上するはずです。一度の失敗に落胆するのではなく、原因を客観的に分析して改善を重ねる姿勢こそが、ビジネスにおける成功の鍵と言えるでしょう。`,
      passageVi: `Một quán ăn Nhật Bản mở trước nhà ga đã rơi vào cảnh thua lỗ liên tiếp trong suốt mấy tháng đầu sau khai trương và đứng trước nguy cơ phá sản. Mặc dù tự tin vào hương vị món ăn, nhưng tại vì nhân viên phục vụ bàn thiếu đào tạo, hàng loạt rắc rối như ghi nhầm món, giao đồ ăn chậm đã phát sinh liên tục khiến phàn nàn của khách hàng trút xuống tới tấp.

Chủ quán nhận ra nguyên nhân của thất bại này không phải trách nhiệm riêng lẻ của từng cá nhân nhân viên mà nằm ở thể chế vận hành của toàn bộ cửa hàng. Do đó, ông đã đổi thiết bị đặt món sang phương thức máy tính bảng hiện đại, đồng thời rà soát triệt để lộ trình di chuyển và vai trò phụ trách của từng nhân viên.

Nhờ có sự chỉ dẫn nhân viên cách dùng từ nhã nhặn và thái độ phục vụ tươi cười, danh tiếng về cung cách phục vụ đã nhanh chóng chuyển biến tích cực trong nháy mắt. Lượng đánh giá cao trên các trang mạng xã hội cũng tăng vọt, và hiện nay quán đã phát triển thành điểm đến nổi tiếng đến mức cuối tuần nào cũng có khách xếp hàng dài.

Nếu có sự chuẩn bị chu đáo và hệ thống giáo dục hoàn chỉnh, chất lượng dịch vụ chắc chắn sẽ nâng cao. Thay vì thất vọng chán nản trước một lần thất bại, thái độ phân tích nguyên nhân khách quan và kiên trì cải thiện chính là chìa khóa mở ra thành công trong kinh doanh.`,
      vocabFocus: ['影響 (ảnh hưởng)', '役割 (vai trò)', '業務 (nghiệp vụ)', '担当 (đảm trách)', '成果 (thành quả)', '失敗 (thất bại)'],
      grammarFocus: ['〜おかげで / 〜せいで (nhờ có / tại vì do)', '〜はずだ (chắc chắn là / đương nhiên là)'],
      questions: [
        {
          id: 'n3-l2-r3-q1',
          question: 'オープン当初に料理店が危機に陥った理由は何ですか。(Tại sao ban đầu quán ăn lại rơi vào khủng hoảng?)',
          options: [
            '料理の味が非常にまずかったから',
            'スタッフの研修不足のせいで注文間違いや配膳遅れが頻発したから',
            '周辺の治安が悪化して誰も外出しなくなったから',
            '家賃が突然１０倍に値上げされたから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "料理の味には自信があったものの、ホールスタッフの研修不足のせいで、注文の取り間違いや料理の提供遅れといったトラブルが頻発し..."',
        },
        {
          id: 'n3-l2-r3-q2',
          question: '店主は失敗の原因をどこにあると考えましたか。(Chủ quán cho rằng nguyên nhân thất bại nằm ở đâu?)',
          options: [
            'アルバイト店員の怠慢',
            '店舗全体のオペレーション体制',
            '料理長の高慢な態度',
            '不景気による客足の減少',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "店主はこの失敗の原因をスタッフ個人の責任にするのではなく、店舗全体のオペレーション体制にあると見抜きました。"',
        },
        {
          id: 'n3-l2-r3-q3',
          question: '店主が実施した具体的な改善策は何ですか。(Biện pháp cải thiện cụ thể mà chủ quán thực hiện là gì?)',
          options: [
            '料理の値段を半額に値下げしたこと',
            'タブレット端末の導入とスタッフの動線・役割の徹底的な見直し',
            'すべてのスタッフを解雇してロボットに置き換えたこと',
            'メニューの品数を３倍に増やしたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "注文端末を最新のタブレット方式に切り替え、スタッフ全員が担当する役割と動線を徹底的に見直しました。"',
        },
        {
          id: 'n3-l2-r3-q4',
          question: '接客態度の評判が好転したきっかけは何ですか。(Duyên cớ giúp danh tiếng phục vụ chuyển biến tích cực là gì?)',
          options: [
            'テレビで芸能人に紹介されたこと',
            'スタッフに丁寧な言葉遣いと笑顔の接客を指導したこと',
            '無料でお酒を配ったこと',
            'ライバル店が火事で焼失したこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "スタッフに丁寧な言葉遣いと笑顔の接客を指導したおかげで、接客態度に関する評判は瞬く間に好転しました。"',
        },
        {
          id: 'n3-l2-r3-q5',
          question: '「サービスの質は必ず向上するはずです」という文における「はずだ」の使われ方はどれですか。(Cách dùng "はずだ" ở câu này mang ý nghĩa gì?)',
          options: [
            'Điều kiện chuẩn bị đầy đủ thì theo lẽ đương nhiên kết quả sẽ nâng cao',
            'Hy vọng không có căn cứ',
            'Chỉ một thói quen trong quá khứ',
            'Thể hiện sự nghi ngờ không chắc chắn',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜はずだ phán đoán tất yếu dựa trên tiền đề logic (chuẩn bị tốt thì ắt chất lượng nâng cao).',
        },
        {
          id: 'n3-l2-r3-q6',
          question: 'ビジネスの成功に関して筆者が伝えている教訓は何ですか。(Bài học về thành công kinh doanh mà tác giả muốn truyền tải là gì?)',
          options: [
            '失敗したらすぐ事業を諦めるべきだ',
            '失敗の原因を客観的に分析し、改善を重ねる姿勢が成功への鍵である',
            '従業員を厳しく罰することが最大の改善法である',
            '味さえ良ければ接客態度などどうでもよい',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn cuối: "一度の失敗に落胆するのではなく、原因を客観的に分析して改善を重ねる姿勢こそが、ビジネスにおける成功の鍵と言えるでしょう。"',
        },
      ],
    },
    {
      id: 'n3-l2-r4',
      title: 'Bài đọc 4: 環境保護における市民活動の役割 (Vai trò của hoạt động công dân trong bảo vệ môi trường)',
      summary: 'Thành quả phục hồi dòng sông địa phương nhờ ý thức dọn dẹp của cư dân và sự hỗ trợ từ chính quyền thành phố.',
      passageJp: `かつて私の街を流れる川は、工場排水や生活ゴミの不法投棄のせいで魚も住めないほど激しく汚染されていました。悪臭が漂い、夏になっても住民が川辺に近づくことはほとんどありませんでした。

この危機的な状況を変えようと、地域の高齢者や子供たちが中心となって「リバークリーン作戦」が立ち上げられました。行政任せにするのではなく、住民自らが毎月第１日曜日にゴミ拾いを実施し、上流の工場に対しても浄化設備の導入を求める署名活動を行いました。

地域住民が根気強く活動を継続したおかげで、川の水質は目に見えて改善され、数年前からは天然の鮎（あゆ）が遡上する姿が見られるようになりました。美しい川を取り戻したことで、住民同士のコミュニティの絆も一層深まりました。

一人ひとりの力は小さくても、多くの人々が同じ目標に向かって役割を分担して協力し合えば、大きな環境の改善を成し遂げられるはずです。地域社会の未来は、行政の施策だけでなく住民の自主的な行動にかかっています。`,
      passageVi: `Trước đây, dòng sông chảy qua thị trấn của tôi từng bị ô nhiễm nghiêm trọng đến mức cá không thể sống nổi vì nước thải nhà máy và rác sinh hoạt vứt bừa bãi. Mùi hôi thối bốc lên nồng nặc, khiến cho ngay cả giữa mùa hè cũng hầu như chẳng có cư dân nào dám tới gần bờ sông.

Để thay đổi tình trạng nguy khốn này, một chiến dịch mang tên "Làm sạch dòng sông" đã được khởi xướng với nòng cốt là người cao tuổi và các em nhỏ trong khu vực. Thay vì phó mặc cho chính quyền, chính người dân đã tự mình tổ chức nhặt rác vào ngày chủ nhật đầu tiên của mỗi tháng, đồng thời mở đợt ký tên kiến nghị yêu cầu các nhà máy thượng nguồn lắp đặt hệ thống lọc nước thải.

Nhờ có sự kiên trì duy trì hoạt động không ngừng nghỉ của cư dân địa phương, chất lượng nước của dòng sông đã được cải thiện rõ rệt, và từ vài năm trước người ta đã lại thấy bóng dáng cá Ayu tự nhiên bơi ngược dòng trở về. Việc lấy lại được dòng sông tươi đẹp cũng làm cho sự gắn kết cộng đồng giữa các cư dân ngày càng thắt chặt hơn.

Dù sức lực của từng cá nhân là nhỏ bé, nhưng nếu nhiều người cùng hướng tới một mục tiêu, phân chia vai trò và tương trợ lẫn nhau, chắc chắn việc cải thiện môi trường to lớn sẽ có thể đạt được. Tương lai của xã hội khu vực không chỉ phụ thuộc vào chính sách của chính quyền mà dựa vào chính hành động tự giác của mỗi người dân.`,
      vocabFocus: ['影響 (ảnh hưởng)', '役割 (vai trò)', '業務 (nghiệp vụ)', '担当 (đảm trách)', '成果 (thành quả)', '失敗 (thất bại)'],
      grammarFocus: ['〜おかげで / 〜せいで (nhờ có / tại vì do)', '〜はずだ (chắc chắn là / đương nhiên là)'],
      questions: [
        {
          id: 'n3-l2-r4-q1',
          question: 'かつて川が激しく汚染されていた原因は何ですか。(Nguyên nhân trước đây sông bị ô nhiễm nặng là gì?)',
          options: [
            '雨が全く降らずに川が干上がったから',
            '工場排水や生活ゴミの不法投棄のせい',
            '外国からの観光客が急増したから',
            '大地震によって川の形が変わったから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "工場排水や生活ゴミの不法投棄のせいで魚も住めないほど激しく汚染されていました。"',
        },
        {
          id: 'n3-l2-r4-q2',
          question: '住民たちは環境改善のためにどのような行動を起こしましたか。(Cư dân đã có hành động gì để cải thiện môi trường?)',
          options: [
            '川を完全に埋め立てて道路にした',
            '毎月のゴミ拾いと工場への浄化設備導入を求める署名活動',
            '汚れた水を別の町へ流す水路を作った',
            '行政の担当者を全員交代させた',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "毎月第１日曜日にゴミ拾いを実施し、上流の工場に対しても浄化設備の導入を求める署名活動を行いました。"',
        },
        {
          id: 'n3-l2-r4-q3',
          question: '川の水質が改善したことを示す証拠は何ですか。(Bằng chứng cho thấy chất lượng nước đã được cải thiện là gì?)',
          options: [
            '川の幅が２倍に広がったこと',
            '天然の鮎が川を遡上する姿が見られるようになったこと',
            '川の周りに高層ビルが建設されたこと',
            'ゴミ箱が川辺に１００個設置されたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "川の水質は目に見えて改善され、数年前からは天然の鮎（あゆ）が遡上する姿が見られるようになりました。"',
        },
        {
          id: 'n3-l2-r4-q4',
          question: '活動を継続したことによる環境以外の好影響は何ですか。(Tác động tích cực ngoài môi trường nhờ duy trì hoạt động là gì?)',
          options: [
            '地域の電気代が無料になったこと',
            '住民同士のコミュニティの絆が一層深まったこと',
            '全員が有名人としてテレビに出演したこと',
            '新しいショッピングモールが完成したこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "美しい川を取り戻したことで、住民同士のコミュニティの絆も一層深まりました。"',
        },
        {
          id: 'n3-l2-r4-q5',
          question: '「成し遂げられるはずです」の「はずだ」のニュアンスは何ですか。(Sắc thái của "はずだ" trong câu là gì?)',
          options: [
            '協調して行動すれば当然達成できるという論理的確信',
            '到底達成できないという絶望感',
            '他人に無理矢理やらせようとする強要',
            '過去の出来事に対する後悔',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜はずだ thể hiện niềm tin chắc chắn rằng khi mọi người đồng lòng hợp tác thì tất yếu sẽ làm nên thành quả.',
        },
        {
          id: 'n3-l2-r4-q6',
          question: 'この文章が読者に伝えている最も大切なメッセージは何ですか。(Thông điệp quan trọng nhất mà bài đọc muốn truyền tải là gì?)',
          options: [
            '川の清掃はすべて行政に任せるべきである',
            '住民一人ひとりの自発的な協力と役割分担が大きな環境改善を生む',
            '工場の操業はすべて即座に停止すべきである',
            '魚が戻ってきたらすぐにすべて捕まえて食べるべきである',
          ],
          answerIndex: 1,
          explanation: 'Đoạn cuối nhấn mạnh: tương lai cộng đồng dựa vào sự tự giác, chung tay hợp tác phân công nhiệm vụ của mỗi người dân.',
        },
      ],
    },
    {
      id: 'n3-l2-r5',
      title: 'Bài đọc 5: 言語学習の継続とスランプの克服 (Sự kiên trì học ngoại ngữ và vượt qua giai đoạn chững lại)',
      summary: 'Phương pháp vượt qua giai đoạn chững lại (slump) khi học tiếng Nhật để vươn tới trình độ cao hơn.',
      passageJp: `外国語を学習していると、誰しも一度は「どれだけ勉強しても上達が実感できない」という停滞期（スランプ）に直面します。単語を覚える量が爆発的に増え、文法が複雑になる中級レベルに差し掛かった学習者の多くが、この壁にぶつかって挫折しそうになります。

自分の能力不足のせいで伸び悩んでいると思い込んで学習をやめてしまうのは、非常にもったいないことです。実は、脳が新しい言語体系を整理し、知識を無意識に使えるレベルへ定着させるためには一定の潜伏期間が必要です。進歩が見えないように思えても、脳内では着実に基盤が築かれています。

毎日コツコツとリスニングや音読を続けたおかげで、ある日突然、ニュースの日本語がはっきりと聞き取れるようになったという学習者の体験談は数多く存在します。

正しい学習法を信じて諦めずに継続していれば、スランプを脱して一段階上のレベルへ飛躍できるはずです。成果を焦らず、日々の小さな前進を喜ぶ心の余裕を持つことが、語学習得の最も確実な近道です。`,
      passageVi: `Khi học một ngoại ngữ, bất cứ ai cũng từng một lần phải đối mặt với giai đoạn đình trệ (slump), cảm giác "dù học bao nhiêu cũng không thấy mình tiến bộ". Rất nhiều người học khi bước vào trình độ trung cấp - nơi lượng từ vựng cần nhớ tăng vọt và cấu trúc ngữ pháp trở nên phức tạp - đã va phải bức tường này và suýt nản lòng bỏ cuộc.

Sẽ vô cùng đáng tiếc nếu nghĩ rằng do năng lực bản thân yếu kém nên bị chững lại mà từ bỏ việc học. Trên thực tế, để não bộ sắp xếp lại hệ thống ngôn ngữ mới và khắc sâu kiến thức đến mức có thể dùng trong vô thức, cần phải có một giai đoạn "ủ mầm" nhất định. Dù bề ngoài có vẻ không thấy tiến bộ, nhưng bên trong bộ não, các nền móng vững chắc đang được xây đắp không ngừng.

Có rất nhiều câu chuyện trải nghiệm của người học rằng nhờ có việc kiên trì nghe và đọc to mỗi ngày, bỗng một ngày nọ họ chợt nghe hiểu tiếng Nhật trên bản tin thời sự một cách rõ ràng rành mạch.

Nếu tin tưởng vào phương pháp học đúng đắn và kiên trì không từ bỏ, chắc chắn bạn sẽ thoát khỏi giai đoạn chững lại để bứt phá lên một tầm cao mới. Đừng nóng vội đòi hỏi kết quả ngay, giữ tâm thế thoải mái vui mừng trước từng bước tiến nhỏ mỗi ngày mới chính là con đường tắt chắc chắn nhất để làm chủ ngôn ngữ.`,
      vocabFocus: ['影響 (ảnh hưởng)', '役割 (vai trò)', '業務 (nghiệp vụ)', '担当 (đảm trách)', '成果 (thành quả)', '失敗 (thất bại)'],
      grammarFocus: ['〜おかげで / 〜せいで (nhờ có / tại vì do)', '〜はずだ (chắc chắn là / đương nhiên là)'],
      questions: [
        {
          id: 'n3-l2-r5-q1',
          question: '中級レベルの学習者が直面しやすい問題は何ですか。(Vấn đề người học trung cấp hay gặp phải là gì?)',
          options: [
            '勉強しても上達が実感できない停滞期（スランプ）にぶつかること',
            'ひらがなやカタカナの書き順を忘れてしまうこと',
            '教科書が高額すぎて購入できないこと',
            '先生が授業を教えてくれなくなること',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 1 nêu: "「どれだけ勉強しても上達が実感できない」という停滞期（スランプ）に直面します。中級レベルに差し掛かった学習者の多くが、この壁にぶつかって挫折しそうになります。"',
        },
        {
          id: 'n3-l2-r5-q2',
          question: '進歩が見えない時期に脳の中で何が起きていると説明されていますか。(Điều gì đang diễn ra trong não bộ vào lúc tưởng như không tiến bộ?)',
          options: [
            '記憶がすべて消去されている',
            '新しい言語体系を整理し、知識を定着させる基盤が築かれている',
            '脳の細胞が活動を停止している',
            '母国語の知識が失われている',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "脳が新しい言語体系を整理し、知識を無意識に使えるレベルへ定着させるためには一定の潜伏期間が必要です。脳内では着実に基盤が築かれています。"',
        },
        {
          id: 'n3-l2-r5-q3',
          question: 'ニュースの日本語が突然聞き取れるようになった要因として挙げられているのは何ですか。(Yếu tố giúp bỗng nhiên nghe hiểu thời sự là gì?)',
          options: [
            '高額なサプリメントを飲んだこと',
            '毎日コツコツとリスニングや音読を続けたおかげ',
            '日本へ引っ越した初日だったから',
            '日本語の辞書を丸暗記したから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "毎日コツコツとリスニングや音読を続けたおかげで、ある日突然、ニュースの日本語がはっきりと聞き取れるようになった..."',
        },
        {
          id: 'n3-l2-r5-q4',
          question: '「自分の能力不足のせいで」という表現における「せいで」の意味は何ですか。(Nghĩa của "せいで" ở đây là gì?)',
          options: [
            'Biết ơn vì bản thân kém cỏi',
            'Đổ lỗi cho việc năng lực kém dẫn đến kết quả trì trệ không mong muốn',
            'Khen ngợi nỗ lực của bản thân',
            'Diễn tả tương lai tươi sáng',
          ],
          answerIndex: 1,
          explanation: 'Ngữ pháp N3: 〜せいで chỉ nguyên nhân gây ra phiền toái hoặc kết quả xấu (tại vì năng lực không đủ).',
        },
        {
          id: 'n3-l2-r5-q5',
          question: '「飛躍できるはずです」という文の「はずだ」が表す確信の根拠は何ですか。(Căn cứ cho niềm tin trong câu "chắc chắn sẽ bứt phá" là gì?)',
          options: [
            '正しい学習法を信じて諦めずに継続すること',
            '宝くじに当たること',
            '勉強を完全にやめて休養すること',
            '他人に勉強を代行してもらうこと',
          ],
          answerIndex: 0,
          explanation: 'Đoạn cuối: "正しい学習法を信じて諦めずに継続していれば、スランプを脱して一段階上のレベルへ飛躍できるはずです。"',
        },
        {
          id: 'n3-l2-r5-q6',
          question: '語学習得の確実な近道として筆者が勧めている姿勢は何ですか。(Thái độ nào được tác giả khuyên là con đường tắt chắc chắn nhất?)',
          options: [
            '一夜漬けで徹夜して文法を詰め込むこと',
            '成果を焦らず、日々の小さな前進を喜ぶ心の余裕を持つこと',
            '少しでもスランプになったらすぐに別の言語に変えること',
            '試験の点数だけを目的にして会話練習を一切しないこと',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn cuối: "成果を焦らず、日々の小さな前進を喜ぶ心の余裕を持つことが、語学習得の最も確実な近道です。"',
        },
      ],
    },
  ],

  // ================= N3 BÀI 3 =================
  'n3-l3': [
    {
      id: 'n3-l3-r1',
      title: 'Bài đọc 1: 介護ロボットの技術開発と高齢化社会への貢献 (Phát triển công nghệ robot điều dưỡng và đóng góp cho xã hội già hóa)',
      summary: 'Ứng dụng khoa học kỹ thuật và robot hỗ trợ người cao tuổi tại Nhật Bản, lấy con người làm trung tâm.',
      passageJp: `日本は世界で最も高齢化が進んでいる国の一つであり、介護を必要とする高齢者の増加に対して、現場を支える介護職員の不足が深刻な社会問題となっています。この課題を解決するために、最新のロボット技術やAIを活用した介護支援機器の開発が急速に進んでいます。

特に、重い利用者をベッドから車椅子へ移乗させる作業は職員の腰に大きな負担をかけていましたが、装着型のアシストスーツを導入したことで身体的負担が大幅に軽減されました。腰痛で仕事を辞めざるを得なかった職員が働き続けられるようになったわけです。

政府や研究機関は、介護職員の負担軽減と利用者の自立支援を中心に据えた技術革新を推進しています。単に機械に任せるのではなく、人間による温かい心の触れ合いを大切にしながらロボットが補助するという考え方が浸透してきました。

優れた技術が社会の現場で正しく役立てられることで、高齢者も介護者も安心して笑顔で暮らせる社会が実現するわけです。日本の介護ロボット技術は、今後同様の高齢化に直面するアジアや欧米諸国に対しても大きな貢献を果たすと期待されています。`,
      passageVi: `Nhật Bản là một trong những quốc gia có tốc độ già hóa dân số nhanh nhất thế giới. Trái ngược với sự gia tăng của những người cao tuổi cần chăm sóc, tình trạng thiếu hụt nhân viên điều dưỡng hỗ trợ tại hiện trường đang trở thành vấn đề xã hội nghiêm trọng. Nhằm giải quyết thách thức này, việc phát triển các thiết bị hỗ trợ điều dưỡng ứng dụng công nghệ robot và AI tối tân đang được đẩy mạnh nhanh chóng.

Đặc biệt, công việc bế chuyển người bệnh nặng từ giường sang xe lăn từng gây gánh nặng rất lớn lên lưng của nhân viên, nhưng nhờ đưa bộ giáp hỗ trợ trợ lực vào sử dụng, gánh nặng thể chất đã giảm đi đáng kể. Điều này giải thích tại sao những nhân viên từng phải bỏ việc vì đau lưng nay đã có thể tiếp tục công việc.

Chính phủ và các cơ quan nghiên cứu đang thúc đẩy đổi mới công nghệ lấy việc giảm tải gánh nặng cho nhân viên và hỗ trợ người cao tuổi tự lập làm trọng tâm. Tư duy không chỉ phó mặc cho máy móc mà trân trọng sự kết nối ấm áp của con người, lấy robot làm công cụ phụ trợ, đã lan tỏa sâu rộng.

Nhờ việc công nghệ ưu việt được ứng dụng đúng đắn vào đời sống xã hội, một xã hội nơi cả người cao tuổi lẫn người chăm sóc đều có thể an tâm sống với nụ cười rạng rỡ sẽ trở thành hiện thực. Công nghệ robot điều dưỡng của Nhật Bản được kỳ vọng sẽ đóng góp to lớn cho cả các nước châu Á và phương Tây - những nơi cũng sẽ đối mặt với tình trạng già hóa tương tự trong tương lai.`,
      vocabFocus: ['技術 (công nghệ)', '開発 (phát triển)', '発明 (phát minh)', '機能 (tính năng)', '社会 (xã hội)', '貢献 (đóng góp)'],
      grammarFocus: ['〜わけだ (thảo nào / thành ra là / đương nhiên là vậy)', '〜を中心に (lấy làm trung tâm / chủ yếu là)'],
      questions: [
        {
          id: 'n3-l3-r1-q1',
          question: '介護の現場で現在深刻な問題となっているのは何ですか。(Vấn đề nghiêm trọng ở hiện trường điều dưỡng hiện nay là gì?)',
          options: [
            '介護施設の建設費用が高すぎること',
            '高齢者の増加に対する介護職員の深刻な人手不足',
            '車椅子の性能が低すぎること',
            '高齢者が施設に入るのを全員拒否していること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "介護を必要とする高齢者の増加に対して、現場を支える介護職員の不足が深刻な社会問題となっています。"',
        },
        {
          id: 'n3-l3-r1-q2',
          question: 'アシストスーツの導入によってどのような効果が得られましたか。(Hiệu quả thu được nhờ đưa trợ lực suit vào là gì?)',
          options: [
            '職員の給料が１０倍になった',
            '移乗作業時の身体的負担が軽減し、腰痛による離職を防ぐことができた',
            '職員が介護施設に住み込むようになった',
            '利用者が全員走れるようになった',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "装着型のアシストスーツを導入したことで身体的負担が大幅に軽減されました。腰痛で仕事を辞めざるを得なかった職員が働き続けられるようになったわけです。"',
        },
        {
          id: 'n3-l3-r3-q3',
          question: '技術革新は何を中心にして進められていますか。(Đổi mới công nghệ đang được đẩy mạnh lấy điều gì làm trọng tâm?)',
          options: [
            '機械の販売利益の最大化',
            '介護職員の負担軽減と利用者の自立支援',
            '人間の介護職員を全員解雇すること',
            '施設の電気代をゼロにすること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "介護職員の負担軽減と利用者の自立支援を中心に据えた技術革新を推進しています。"',
        },
        {
          id: 'n3-l3-r1-q4',
          question: '介護現場におけるロボットの位置づけとして正しい考え方はどれですか。(Cách nhìn đúng về vị trí của robot trong chăm sóc là gì?)',
          options: [
            '人間の感情は不要なので完全に機械が代行する',
            '人間同士の温かい心の触れ合いを大切にしながら、ロボットが作業を補助する',
            'ロボットは危険なので一切使用を認めない',
            '夜間だけ施設をロボットに警備させる',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "単に機械に任せるのではなく、人間による温かい心の触れ合いを大切にしながらロボットが補助するという考え方が浸透してきました。"',
        },
        {
          id: 'n3-l3-r1-q5',
          question: '文章中の「働き続けられるようになったわけです」の「わけだ」の意味は何ですか。(Nghĩa của "わけだ" trong câu là gì?)',
          options: [
            'Chỉ lý do, kết quả tự nhiên tất yếu rút ra từ sự việc đã giải thích trước đó',
            'Chỉ một lời xin lỗi',
            'Chỉ lời mời mọc rủ rê',
            'Chỉ một thắc mắc không có lời giải',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜わけだ dùng để diễn giải kết quả, lý lẽ tất yếu từ tiền đề đã nêu (nhờ máy móc trợ lực nên thành ra nhân viên đau lưng có thể tiếp tục làm việc).',
        },
        {
          id: 'n3-l3-r1-q6',
          question: '筆者は日本の介護ロボット技術の将来についてどう期待していますか。(Tác giả kỳ vọng gì về tương lai công nghệ robot điều dưỡng Nhật Bản?)',
          options: [
            '日本国内だけで秘密にして海外輸出を禁じるべきだ',
            '同様に高齢化が進むアジアや欧米諸国にも大きく貢献すること',
            'ロボットの研究を中止して伝統的な手作業に戻すこと',
            '高額な特許料を取って大儲けすること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn cuối: "日本の介護ロボット技術は、今後同様の高齢化に直面するアジアや欧米諸国に対しても大きな貢献を果たすと期待されています。"',
        },
      ],
    },
    {
      id: 'n3-l3-r2',
      title: 'Bài đọc 2: スマートシティ構想と人間中心の都市開発 (Quy hoạch thành phố thông minh và phát triển đô thị lấy con người làm gốc)',
      summary: 'Xu hướng xây dựng đô thị thông minh tích hợp công nghệ AI, cảm biến IoT để nâng cao chất lượng sống cho cư dân.',
      passageJp: `世界中で急速な都市化が進む中、交通渋滞やエネルギー浪費、大気汚染といった課題をテクノロジーで解決しようとする「スマートシティ構想」が注目を集めています。都市内のあらゆるインフラにセンサーを張り巡らせ、AIでデータを一元管理する先進的な街づくりです。

例えば、信号機が道路の混雑状況をリアルタイムで検知して自動で点灯時間を調整する機能により、渋滞による二酸化炭素の排出量が劇的に減少しました。無駄なアイドリングが減ったことで、都市環境が清潔に保たれているわけです。

ただし、どれほど高度な技術であっても、住民の利便性と安全を中心に考えられていなければ本末転倒です。一部の実験都市では、データ収集ばかりが優先されてプライバシー侵害への不安が高まり、住民の反発を招いた事例もあります。

真のスマートシティとは、最先端技術を自慢する街ではなく、市民一人ひとりが豊かで快適に暮らせる仕組みを支える街であるべきです。テクノロジーが社会の幸福にどのように貢献できるかを常に問い直す開発姿勢が求められています。`,
      passageVi: `Trong bối cảnh đô thị hóa diễn ra chóng mặt trên khắp thế giới, ý tưởng "Thành phố thông minh (Smart City)" nhằm giải quyết các thách thức như ùn tắc giao thông, lãng phí năng lượng và ô nhiễm không khí bằng công nghệ đang thu hút sự chú ý rộng rãi. Đây là mô hình xây dựng đô thị tiên tiến, nơi mạng lưới cảm biến được bố trí khắp hạ tầng và dữ liệu được AI quản lý tập trung.

Chẳng hạn, nhờ tính năng đèn tín hiệu giao thông phát hiện tình trạng ùn tắc thời gian thực và tự động điều chỉnh thời gian sáng đèn, lượng khí thải CO2 do tắc đường đã giảm sút ngoạn mục. Nhờ việc giảm thiểu thời gian nổ máy chờ vô ích mà môi trường đô thị thành ra được giữ gìn trong sạch.

Tuy nhiên, dù công nghệ có tiên tiến đến mức nào đi chăng nữa, nếu không lấy sự tiện lợi và an toàn của cư dân làm trung tâm thì sẽ là "đảo lộn gốc ngọn". Ở một số đô thị thử nghiệm, do chỉ ưu tiên việc thu thập dữ liệu mà nỗi bất an bị xâm phạm quyền riêng tư tăng cao, dẫn đến sự phản đối gay gắt của người dân.

Một thành phố thông minh đích thực không phải là thành phố khoe mẽ công nghệ tối tân, mà phải là thành phố hỗ trợ cơ chế để từng người dân được sống tiện nghi và hạnh phúc. Chúng ta cần một tư duy phát triển luôn trăn trở xem công nghệ có thể đóng góp như thế nào cho niềm hạnh phúc của xã hội.`,
      vocabFocus: ['技術 (công nghệ)', '開発 (phát triển)', '発明 (phát minh)', '機能 (tính năng)', '社会 (xã hội)', '貢献 (đóng góp)'],
      grammarFocus: ['〜わけだ (thảo nào / thành ra là / đương nhiên là vậy)', '〜を中心に (lấy làm trung tâm / chủ yếu là)'],
      questions: [
        {
          id: 'n3-l3-r2-q1',
          question: 'スマートシティ構想が目指している主な目的は何ですか。(Mục tiêu chính mà ý tưởng thành phố thông minh hướng tới là gì?)',
          options: [
            '高層ビルを世界一高く建設すること',
            '都市の交通渋滞やエネルギー浪費をテクノロジーで解決すること',
            'すべての市民にスマートフォンの購入を義務付けること',
            '都市の人口を半分に減らすこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "交通渋滞やエネルギー浪費、大気汚染といった課題をテクノロジーで解決しようとする「スマートシティ構想」が注目を集めています。"',
        },
        {
          id: 'n3-l3-r2-q2',
          question: '信号機の自動調整機能によってどのような効果がありましたか。(Hiệu quả của việc tự điều chỉnh đèn tín hiệu là gì?)',
          options: [
            '車が一切走れなくなった',
            '無駄なアイドリングが減り、二酸化炭素排出量が劇的に減少した',
            '信号機の故障が毎日起きるようになった',
            '歩行者が道路を渡れなくなった',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "渋滞による二酸化炭素の排出量が劇的に減少しました。無駄なアイドリングが減ったことで、都市環境が清潔に保たれているわけです。"',
        },
        {
          id: 'n3-l3-r2-q3',
          question: 'スマートシティ開発において何を中心に考えるべきだと書かれていますか。(Nên lấy điều gì làm trung tâm trong phát triển thành phố thông minh?)',
          options: [
            'IT企業の利益の拡大',
            '住民の利便性と安全',
            '海外の観光客の誘致だけ',
            '市役所の職員の給与アップ',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "住民の利便性と安全を中心に考えられていなければ本末転倒です。"',
        },
        {
          id: 'n3-l3-r2-q4',
          question: '一部の実験都市で住民の反発を招いた原因は何ですか。(Nguyên nhân gây phản đối ở một số đô thị thử nghiệm là gì?)',
          options: [
            'ゴミの分別が細かすぎたこと',
            'データ収集が優先され、プライバシー侵害への不安が高まったこと',
            '電車の運賃が値上げされたこと',
            '街に樹木が一本も植えられなかったこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "一部の実験都市では、データ収集ばかりが優先されてプライバシー侵害への不安が高まり、住民の反発を招いた事例もあります。"',
        },
        {
          id: 'n3-l3-r2-q5',
          question: '「都市環境が清潔に保たれているわけです」の「わけだ」の用法として正しいものはどれですか。(Cách dùng "わけだ" ở đây là gì?)',
          options: [
            'Nguyên nhân và kết quả tự nhiên logic từ dữ kiện trước đó',
            'Phủ định hoàn toàn sự việc',
            'Biểu thị nguyện vọng mong manh',
            'Yêu cầu người nghe thực hiện hành động',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜わけだ dùng để tổng kết hoặc giải thích kết quả đương nhiên của một chuỗi nguyên nhân.',
        },
        {
          id: 'n3-l3-r2-q6',
          question: '筆者が考える「真のスマートシティ」の定義は何ですか。(Định nghĩa về thành phố thông minh đích thực của tác giả là gì?)',
          options: [
            '最新技術を競い合うロボットだらけの街',
            '市民一人ひとりが豊かで快適に暮らせる仕組みを支える街',
            'インターネットの速度が世界最速の街',
            '車が一切走らない歩行者専用の街',
          ],
          answerIndex: 1,
          explanation: 'Đoạn cuối: "真のスマートシティとは、最先端技術を自慢する街ではなく、市民一人ひとりが豊かで快適に暮らせる仕組みを支える街であるべきです。"',
        },
      ],
    },
    {
      id: 'n3-l3-r3',
      title: 'Bài đọc 3: 日本のインスタントラーメン発明と食のグローバル貢献 (Phát minh mì ăn liền của Nhật Bản và đóng góp toàn cầu cho ẩm thực)',
      summary: 'Câu chuyện phát minh mì ăn liền của Momofuku Ando và cách sản phẩm này trở thành nguồn dinh dưỡng cứu trợ trên toàn thế giới.',
      passageJp: `お湯を注ぐだけで数分で温かいラーメンが食べられる「インスタントラーメン」は、日本の戦後が生んだ世界的な大発明です。発明者の安藤百福（あんどうももふく）氏は、戦後の食糧難で一杯のラーメンを求めて闇市で行列を作る人々を見て、「食が足りてこそ世の中が平和になる」と痛感し、開発を決意しました。

試行錯誤の末、麺を油で揚げることで水分を抜き、長期間の保存を可能にする画期的な技術が開発されました。乾燥した麺にお湯をかけると、スポンジのように水分を吸収して元の美味しい麺に戻る仕組みを発明したわけです。

現在、インスタントラーメンはアジアを中心に世界中で年間１０００億食以上が消費される国民食となりました。常温で長期保存ができ、調理器具がなくても食べられるという機能のおかげで、地震や水害といった大規模災害時の緊急支援食料としても極めて高い貢献度を誇っています。

一人の発明者の「人々に温かい食事を届けたい」という純粋な情熱が、世界中の人々の生活を支える巨大な食文化を生み出したと言えます。`,
      passageVi: `Mì ăn liền - món ăn chỉ cần đổ nước sôi vào là có thể thưởng thức bát mì ramen nóng hổi sau vài phút - là một đại phát minh mang tầm cỡ thế giới ra đời từ thời kỳ hậu chiến Nhật Bản. Nhà phát minh Momofuku Ando khi nhìn thấy dòng người xếp hàng dài tại chợ đen thời hậu chiến đói kém để mong có được một bát mì ramen, đã thấm thía sâu sắc rằng "chỉ khi cái bụng no ấm thì thế giới mới hòa bình" và quyết tâm nghiên cứu phát triển.

Sau bao lần thử nghiệm và thất bại, một công nghệ đột phá đã được sáng chế bằng cách chiên mì qua dầu để rút hết nước, cho phép bảo quản được trong thời gian dài. Thành ra ông đã phát minh ra cơ chế khiến sợi mì khô khi chan nước sôi vào sẽ hút nước như miếng bọt biển và trở lại độ dai ngon ban đầu.

Hiện nay, mì ăn liền đã trở thành món ăn toàn dân được tiêu thụ hơn 100 tỷ gói mỗi năm trên khắp thế giới, với châu Á là tâm điểm. Nhờ tính năng có thể bảo quản lâu dài ở nhiệt độ thường và ăn được ngay cả khi không có dụng cụ nấu nướng cầu kỳ, sản phẩm này tự hào có đóng góp cực kỳ to lớn như một nguồn lương thực cứu trợ khẩn cấp mỗi khi xảy ra thiên tai lớn như động đất, lũ lụt.

Có thể nói rằng, niềm đam mê thuần khiết muốn mang bữa ăn nóng hổi tới cho mọi người của một nhà phát minh đã sản sinh ra một nền văn hóa ẩm thực khổng lồ nâng đỡ đời sống nhân loại toàn cầu.`,
      vocabFocus: ['技術 (công nghệ)', '開発 (phát triển)', '発明 (phát minh)', '機能 (tính năng)', '社会 (xã hội)', '貢献 (đóng góp)'],
      grammarFocus: ['〜わけだ (thảo nào / thành ra là / đương nhiên là vậy)', '〜を中心に (lấy làm trung tâm / chủ yếu là)'],
      questions: [
        {
          id: 'n3-l3-r3-q1',
          question: '安藤百福氏がインスタントラーメンの開発を決意したきっかけは何ですか。(Duyên cớ khiến ông Momofuku Ando quyết tâm phát minh mì gói là gì?)',
          options: [
            'お金持ちになって有名になりたかったから',
            '戦後の食糧難で行列を作る人々を見て食の重要性を痛感したから',
            '海外のレストランで修行したから',
            '政府から命令を受けたから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "戦後の食糧難で一杯のラーメンを求めて闇市で行列を作る人々を見て、「食が足りてこそ世の中が平和になる」と痛感し、開発を決意しました。"',
        },
        {
          id: 'n3-l3-r3-q2',
          question: '長期保存を可能にした画期的な技術は何ですか。(Công nghệ đột phá giúp bảo quản mì lâu dài là gì?)',
          options: [
            '麺を塩漬けにすること',
            '麺を油で揚げることで水分を抜く技術',
            '防腐剤を大量に混ぜること',
            '麺をマイナス４０度で凍らせること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "麺を油で揚げることで水分を抜き、長期間の保存を可能にする画期的な技術が開発されました。"',
        },
        {
          id: 'n3-l3-r3-q3',
          question: '現在、インスタントラーメンは世界でどれくらい消費されていますか。(Hiện nay mì ăn liền được tiêu thụ bao nhiêu gói mỗi năm?)',
          options: ['年間１億食', '年間１０億食', 'アジアを中心に年間１０００億食以上', '年間１兆食'],
          answerIndex: 2,
          explanation: 'Đoạn 3 nêu: "アジアを中心に世界中で年間１０００億食以上が消費される国民食となりました。"',
        },
        {
          id: 'n3-l3-r3-q4',
          question: '災害時におけるインスタントラーメンの機能的利点は何ですか。(Lợi ích chức năng của mì ăn liền trong thiên tai là gì?)',
          options: [
            '軽くて投げやすいこと',
            '常温で長期保存ができ、調理器具がなくても食べられること',
            '薬の代わりになること',
            '燃えやすくて燃料になること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "常温で長期保存ができ、調理器具がなくても食べられるという機能のおかげで、地震や水害といった大規模災害時の緊急支援食料としても極めて高い貢献度を誇っています。"',
        },
        {
          id: 'n3-l3-r3-q5',
          question: '「元の美味しい麺に戻る仕組みを発明したわけです」の「わけだ」の用法は何ですか。(Ý nghĩa của "わけだ" trong câu là gì?)',
          options: [
            'Kết luận logic diễn giải cho cơ chế hút nước của sợi mì đã phân tích ở trước',
            'Sự hối hận vì đã làm',
            'Phủ định việc phát minh',
            'Chỉ một điều kiện không bao giờ xảy ra',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜わけだ dùng để diễn giải rõ bản chất sự việc vừa được mô tả.',
        },
        {
          id: 'n3-l3-r3-q6',
          question: 'この文章全体で筆者が最も伝えたかったことは何ですか。(Điều tác giả muốn truyền đạt nhất là gì?)',
          options: [
            'インスタントラーメンの食べ過ぎは健康に悪い',
            '一人の情熱から生まれた技術と発明が世界の人々の生活と社会に大きく貢献している',
            '日本のラーメンは他の国の料理より絶対に優れている',
            '油で揚げる料理はすべて安全である',
          ],
          answerIndex: 1,
          explanation: 'Đoạn cuối nhấn mạnh: sự đam mê của một nhà phát minh đã mang lại công nghệ cống hiến to lớn cho cuộc sống và xã hội toàn cầu.',
        },
      ],
    },
    {
      id: 'n3-l3-r4',
      title: 'Bài đọc 4: 若者を中心としたサステナブル消費の広がり (Sự lan tỏa tiêu dùng bền vững lấy giới trẻ làm hạt nhân)',
      summary: 'Sự thay đổi trong ý thức mua sắm của thế hệ Z: ưu tiên sản phẩm thân thiện với môi trường và trách nhiệm xã hội.',
      passageJp: `近年、消費者の商品選びの基準に大きな変化が起きています。かつては「価格の安さ」や「ブランドの知名度」が最優先されていましたが、現在は「環境への負荷が少ないか」「持続可能な方法で生産されているか」を重視する「サステナブル消費」が急速に広がっています。

この新しい消費スタイルは、１０代から２０代の若者世代を中心にして社会全体へと波及しています。SNSを通じて地球温暖化や労働搾取の実態に日常的に接している若い世代は、倫理的に正しい企業の商品を積極的に選ぶ傾向が強いのです。環境保護に熱心な企業を応援したいという気持ちが購買行動に直結しているわけです。

こうした需要の変化に対して、アパレル業界や飲食業界でもリサイクル素材を活用した衣類や、廃棄食材を削減するメニュー開発が盛んに行われています。使い捨てプラスチック製品の削減も、消費者の意識改革によって一気に加速しました。

単に良いモノを作る技術だけでなく、その製品が地球環境や社会にどう貢献できるかというストーリーを示すことが、今後のビジネス成功に不可欠となっています。`,
      passageVi: `Những năm gần đây, một sự thay đổi lớn đang diễn ra trong tiêu chuẩn chọn lựa hàng hóa của người tiêu dùng. Nếu như trước đây "giá rẻ" hay "độ nổi tiếng của thương hiệu" được đặt lên hàng đầu, thì hiện nay xu hướng "tiêu dùng bền vững" - coi trọng xem sản phẩm có ít tác động tới môi trường hay không, có được sản xuất theo phương thức bền vững hay không - đang lan rộng nhanh chóng.

Phong cách tiêu dùng mới này đang lan tỏa ra toàn xã hội lấy giới trẻ từ độ tuổi thanh thiếu niên đến đôi mươi làm hạt nhân trung tâm. Thế hệ trẻ thường xuyên tiếp xúc với thực trạng nóng lên toàn cầu hay bóc lột lao động thông qua mạng xã hội có xu hướng rất mạnh mẽ trong việc chủ động chọn sản phẩm của các doanh nghiệp kinh doanh chuẩn mực đạo đức. Thành ra, tâm lý muốn ủng hộ các doanh nghiệp nỗ lực bảo vệ môi trường đã liên kết trực tiếp với hành vi mua sắm của họ.

Trước sự thay đổi nhu cầu này, ngành thời trang may mặc và ẩm thực cũng đang rầm rộ phát triển các trang phục sử dụng chất liệu tái chế hay sáng chế thực đơn giảm thiểu lãng phí đồ ăn. Việc giảm đồ nhựa dùng một lần cũng được tăng tốc tức thì nhờ sự cải biến ý thức của người tiêu dùng.

Không chỉ đơn thuần là công nghệ tạo ra sản phẩm tốt, mà việc thể hiện câu chuyện sản phẩm đó có thể đóng góp như thế nào cho môi trường trái đất và xã hội đã trở thành yếu tố không thể thiếu cho sự thành công của doanh nghiệp tương lai.`,
      vocabFocus: ['技術 (công nghệ)', '開発 (phát triển)', '発明 (phát minh)', '機能 (tính năng)', '社会 (xã hội)', '貢献 (đóng góp)'],
      grammarFocus: ['〜わけだ (thảo nào / thành ra là / đương nhiên là vậy)', '〜を中心に (lấy làm trung tâm / chủ yếu là)'],
      questions: [
        {
          id: 'n3-l3-r4-q1',
          question: 'サステナブル消費において重視されている基準は何ですか。(Tiêu chuẩn được coi trọng trong tiêu dùng bền vững là gì?)',
          options: [
            '価格の極端な安さ',
            'ブランドの知名度の高さ',
            '環境への負荷の少なさや持続可能な生産方法',
            'パッケージの派手さ',
          ],
          answerIndex: 2,
          explanation: 'Đoạn 1 nêu: "現在は「環境への負荷が少ないか」「持続可能な方法で生産されているか」を重視する「サステナブル消費」が急速に広がっています。"',
        },
        {
          id: 'n3-l3-r4-q2',
          question: 'サステナブル消費の広がりを牽引しているのはどの世代ですか。(Thế hệ nào đang dẫn dắt sự lan tỏa tiêu dùng bền vững?)',
          options: [
            '１０代から２０代の若者世代を中心とした層',
            '８０代以上の高齢者層',
            '大企業の経営者層だけ',
            '政治家たち',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 2 nêu: "この新しい消費スタイルは、１０代から２０代の若者世代を中心にして社会全体へと波及しています。"',
        },
        {
          id: 'n3-l3-r4-q3',
          question: '若者がエシカルな（倫理的な）商品を選ぶ理由は何ですか。(Tại sao người trẻ lại chọn hàng hóa chuẩn mực đạo đức?)',
          options: [
            '法律で強制されているから',
            'SNSで環境問題や労働問題に触れ、環境に配慮する企業を応援したいから',
            '友達に自慢できるから',
            'お金が余っているから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "SNSを通じて地球温暖化や労働搾取の実態に日常的に接している若い世代は、倫理的に正しい企業の商品を積極的に選ぶ傾向が強いのです。"',
        },
        {
          id: 'n3-l3-r4-q4',
          question: '企業の取り組みとして文章に挙げられている具体例はどれですか。(Ví dụ cụ thể về nỗ lực của doanh nghiệp được nêu là gì?)',
          options: [
            'リサイクル素材の衣類や廃棄食材を削減するメニュー開発',
            'テレビCMの放送回数を２倍に増やすこと',
            'すべての店舗の営業時間を２４時間にすること',
            '海外の工場を閉鎖すること',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 3: "アパレル業界や飲食業界でもリサイクル素材を活用した衣類や、廃棄食材を削減するメニュー開発が盛んに行われています。"',
        },
        {
          id: 'n3-l3-r4-q5',
          question: '「購買行動に直結しているわけです」の「わけだ」の働きは何ですか。(Vai trò của "わけだ" trong câu là gì?)',
          options: [
            'Giải thích kết quả tâm lý ủng hộ dẫn tới hành vi mua sắm như lẽ hiển nhiên',
            'Biểu thị việc không thể hiểu nổi lý do',
            'Lời từ chối lịch sự',
            'Mệnh lệnh trực tiếp',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜わけだ dùng để đúc kết lý do tất yếu của hành vi vừa phân tích.',
        },
        {
          id: 'n3-l3-r4-q6',
          question: '今後のビジネスで不可欠とされる要素は何ですか。(Yếu tố được coi là không thể thiếu trong kinh doanh tương lai là gì?)',
          options: [
            'とにかく大量に生産して安く売ること',
            '製品が地球環境や社会にどう貢献できるかというストーリーを示すこと',
            'インターネット広告だけに予算を全額使うこと',
            '若者向けの派手なデザインに統一すること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "単に良いモノを作る技術だけでなく、その製品が地球環境や社会にどう貢献できるかというストーリーを示すことが、今後のビジネス成功に不可欠となっています。"',
        },
      ],
    },
    {
      id: 'n3-l3-r5',
      title: 'Bài đọc 5: 再生可能エネルギー技術の進歩と脱炭素社会の実現 (Tiến bộ công nghệ năng lượng tái tạo và thực hiện xã hội phi carbon)',
      summary: 'Những nỗ lực đổi mới công nghệ điện gió, điện mặt trời và sứ mệnh hướng tới trung hòa carbon vào năm 2050.',
      passageJp: `気候変動による異常気象が世界各地で猛威を振るう中、温室効果ガスの排出を実質ゼロにする「脱炭素社会」の実現が国際的な最優先課題となっています。化石燃料への依存から脱却するため、太陽光や風力をはじめとする再生可能エネルギー技術の開発が目覚ましい進歩を遂げています。

かつて太陽光発電は発電効率の低さと導入コストの高さが普及の壁となっていましたが、半導体技術の飛躍的な進化によってコストは過去１０年で５分の１以下に低下しました。一般家庭の屋根にも太陽光パネルが当たり前のように設置されるようになったわけです。

現在、日本各地の自治体では、地域で生み出したクリーンエネルギーを地域内で消費する「エネルギーの地産地消」を中心にしたまちづくりが進められています。蓄電池の性能向上によって、天候に左右されやすい再生可能エネルギーの弱点も徐々に克服されつつあります。

環境負荷を抑えながら安定した電力を供給する技術は、持続可能な未来社会に計り知れない貢献をもたらします。私たち一人ひとりも、家庭での節電や省エネ機器の選択を通じて、脱炭素に向けた変革に参加していく必要があります。`,
      passageVi: `Trong bối cảnh thời tiết dị thường do biến đổi khí hậu đang hoành hành dữ dội khắp toàn cầu, việc hiện thực hóa một "xã hội phi carbon" - đưa lượng phát thải khí nhà kính về mức gần như bằng 0 - đã trở thành nhiệm vụ ưu tiên hàng đầu của quốc tế. Nhằm thoát khỏi sự phụ thuộc vào nhiên liệu hóa thạch, việc nghiên cứu phát triển các công nghệ năng lượng tái tạo như điện mặt trời, điện gió đang gặt hái những bước tiến vượt bậc.

Trước đây, hiệu suất phát điện thấp và chi phí lắp đặt đắt đỏ từng là bức tường cản trở sự phổ biến của điện mặt trời, nhưng nhờ sự tiến hóa nhảy vọt của công nghệ bán dẫn, chi phí đã giảm xuống dưới 1/5 trong 10 năm qua. Thành ra, việc lắp đặt tấm pin năng lượng mặt trời trên mái nhà của các hộ dân thông thường đã trở thành điều hết sức quen thuộc.

Hiện nay, chính quyền các địa phương trên khắp Nhật Bản đang đẩy mạnh xây dựng đô thị lấy trọng tâm là "tự sản xuất tự tiêu thụ năng lượng" - tiêu thụ ngay tại địa phương nguồn năng lượng sạch được sản sinh ra tại địa phương. Nhờ sự nâng cao hiệu năng của pin lưu trữ, điểm yếu dễ bị chi phối bởi thời tiết của năng lượng tái tạo cũng đang dần dần được khắc phục.

Công nghệ cung cấp điện ổn định song hành với việc giảm thiểu tác động môi trường sẽ mang lại những đóng góp không thể đong đếm cho một xã hội tương lai bền vững. Từng người trong chúng ta cũng cần tham gia vào công cuộc chuyển đổi hướng tới phi carbon thông qua việc tiết kiệm điện tại gia đình và lựa chọn các thiết bị tiết kiệm năng lượng.`,
      vocabFocus: ['技術 (công nghệ)', '開発 (phát triển)', '発明 (phát minh)', '機能 (tính năng)', '社会 (xã hội)', '貢献 (đóng góp)'],
      grammarFocus: ['〜わけだ (thảo nào / thành ra là / đương nhiên là vậy)', '〜を中心に (lấy làm trung tâm / chủ yếu là)'],
      questions: [
        {
          id: 'n3-l3-r5-q1',
          question: '脱炭素社会の実現が国際的な課題となっている理由は何ですか。(Tại sao việc hiện thực hóa xã hội phi carbon là nhiệm vụ quốc tế?)',
          options: [
            '世界中でガソリンが完全に枯渇したから',
            '気候変動による異常気象が世界各地で猛威を振るっているから',
            '新しい法律で電気の使用が制限されたから',
            '太陽の光が強くなりすぎたから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "気候変動による異常気象が世界各地で猛威を振るう中、温室効果ガスの排出を実質ゼロにする「脱炭素社会」の実現が国際的な最優先課題となっています。"',
        },
        {
          id: 'n3-l3-r5-q2',
          question: '太陽光パネルの普及を後押しした要因は何ですか。(Yếu tố thúc đẩy sự phổ biến của tấm pin mặt trời là gì?)',
          options: [
            '半導体技術の進化によりコストが５分の１以下に低下したこと',
            '電気料金が無料になったこと',
            '政府がすべての家に無料で配ったこと',
            '風力発電がすべて故障したこと',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 2 nêu: "半導体技術の飛躍的な進化によってコストは過去１０年で５分の１以下に低下しました。"',
        },
        {
          id: 'n3-l3-r5-q3',
          question: '自治体が進めているまちづくりの中心は何ですか。(Trọng tâm xây dựng đô thị mà các địa phương đang đẩy mạnh là gì?)',
          options: [
            '大型商業施設の誘致',
            'クリーンエネルギーの「地産地消」',
            '古い発電所の建て替え',
            '住民税の増税',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "地域で生み出したクリーンエネルギーを地域内で消費する「エネルギーの地産地消」を中心にしたまちづくりが進められています。"',
        },
        {
          id: 'n3-l3-r5-q4',
          question: '再生可能エネルギーの「天候に左右される」弱点を克服するために役立っている技術は何ですか。(Công nghệ giúp khắc phục nhược điểm phụ thuộc thời tiết là gì?)',
          options: ['蓄電池の性能向上', '超伝導リニア', '人工衛星の打ち上げ', 'スマートフォンのアプリ'],
          answerIndex: 0,
          explanation: 'Đoạn 3: "蓄電池の性能向上によって、天候に左右されやすい再生可能エネルギーの弱点も徐々に克服されつつあります。"',
        },
        {
          id: 'n3-l3-r5-q5',
          question: '「屋根にも太陽光パネルが設置されるようになったわけです」の「わけだ」のニュアンスは何ですか。(Sắc thái của "わけだ" trong câu là gì?)',
          options: [
            'Chi phí hạ nhiệt giải thích cho việc pin mặt trời phổ biến trên mái nhà như một hệ quả tất yếu',
            'Một sự nghi ngờ không có lời đáp',
            'Một điều ước không thể thành sự thật',
            'Lời mời gọi người đọc cùng mua',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜わけだ dùng để giải thích kết quả logic hiển nhiên bắt nguồn từ chi phí giảm.',
        },
        {
          id: 'n3-l3-r5-q6',
          question: '個人が脱炭素社会に参加する方法として挙げられているのはどれですか。(Cách thức cá nhân tham gia vào xã hội phi carbon là gì?)',
          options: [
            '電気を一切使わずに生活すること',
            '家庭での節電や省エネ機器の選択',
            '海外へ移住すること',
            '工場の機械を止める抗議活動を行うこと',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn cuối: "私たち一人ひとりも、家庭での節電や省エネ機器の選択を通じて、脱炭素に向けた変革に参加していく必要があります。"',
        },
      ],
    },
  ],

  // ================= N3 BÀI 4 =================
  'n3-l4': [
    {
      id: 'n3-l4-r1',
      title: 'Bài đọc 1: 若者の読書傾向とデジタル書籍の台頭に関する調査 (Khảo sát xu hướng đọc sách của giới trẻ và sự trỗi dậy của sách điện tử)',
      summary: 'Khảo sát văn hóa đọc của học sinh, sinh viên trong kỷ nguyên số: số lượng sách giấy giảm nhưng tổng lượng đọc trên màn hình điện tử lại tăng.',
      passageJp: `近年、「若者の活字離れ」が叫ばれて久しいですが、最近の大規模な読書動向調査によって興味深い事実が明らかになりました。確かに紙の書籍や雑誌の購入冊数は年々減少する傾向にありますが、電子書籍やウェブ小説、ニュース記事などを合わせると、若者が読む文字の総量はむしろ増加しているのです。

スマートフォンでいつでもどこでも手軽に読める電子書籍の普及が、読書のスタイルを大きく変えたに違いありません。通学電車のわずかな隙間時間や寝る前の数分間に、画面をタップして気軽に小説や自己啓発書を読む若者が増えています。重い本を持ち運ぶ必要がなく、フォントサイズを好みに調整できる利便性が高く評価されています。

学校や図書館でも、電子書籍の貸出サービスを導入し、生徒たちがより本に親しめるように様々な工夫が凝らされています。紙かデジタルかという形式の議論にとらわれるのではなく、知的好奇心を刺激して深い思索へと導く読書体験そのものを守り育てる姿勢が大切です。`,
      passageVi: `Những năm gần đây, người ta thường kêu than về việc "người trẻ xa rời văn hóa đọc chữ", thế nhưng một cuộc khảo sát xu hướng đọc quy mô lớn gần đây đã làm sáng tỏ một sự thật đầy thú vị. Quả thật số lượng sách và tạp chí giấy được mua đang có xu hướng giảm sút qua từng năm, nhưng nếu tính gộp cả sách điện tử, tiểu thuyết mạng và các bài báo tin tức thì tổng lượng con chữ mà người trẻ tiếp nhận thực chất lại đang gia tăng.

Sự phổ biến của sách điện tử cho phép đọc thuận tiện mọi lúc mọi nơi trên điện thoại thông minh chắc chắn đã thay đổi mạnh mẽ phong cách đọc sách. Ngày càng có nhiều bạn trẻ tận dụng những khoảng thời gian rảnh rỗi ngắn ngủi trên tàu điện đến trường hay vài phút trước khi ngủ để lướt màn hình đọc tiểu thuyết hoặc sách phát triển bản thân. Tiện ích không cần mang theo sách nặng và có thể tùy chỉnh kích cỡ phông chữ theo ý thích được đánh giá rất cao.

Tại các trường học và thư viện, người ta cũng đang đưa vào dịch vụ mượn sách điện tử và dày công sáng tạo nhiều biện pháp để học sinh có thể gần gũi với sách hơn. Thay vì sa đà vào tranh luận về hình thức sách giấy hay kỹ thuật số, thái độ bảo tồn và nuôi dưỡng chính trải nghiệm đọc sách - điều kích thích trí tò mò tri thức và dẫn lối tới tư duy sâu sắc - mới là điều cốt lõi.`,
      vocabFocus: ['活躍 (hoạt động sôi nổi)', '調査 (điều tra/khảo sát)', '増加 (tăng)', '減少 (giảm)', '傾向 (xu hướng)', '期待 (kỳ vọng)'],
      grammarFocus: ['〜に違いない (chắc chắn là không thể sai)', '〜ように (để mà / sao cho)'],
      questions: [
        {
          id: 'n3-l4-r1-q1',
          question: '最近の調査で判明した若者の読書に関する事実は何ですか。(Sự thật về việc đọc sách của người trẻ được sáng tỏ qua khảo sát gần đây là gì?)',
          options: [
            '若者は文字を全く読まなくなった',
            '紙の本の購入は減ったが、電子書籍などを含めた文字の総量はむしろ増加している',
            '外国語の本しか読まなくなった',
            '図書館を利用する若者が過去最高になった',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "確かに紙の書籍や雑誌の購入冊数は年々減少する傾向にありますが、電子書籍やウェブ小説、ニュース記事などを合わせると、若者が読む文字の総量はむしろ増加しているのです。"',
        },
        {
          id: 'n3-l4-r1-q2',
          question: '電子書籍が若者に支持されている理由として挙げられているのはどれですか。(Lý do sách điện tử được giới trẻ đón nhận là gì?)',
          options: [
            '紙の本よりも価格が１００倍高いから',
            '持ち運ぶ必要がなく、フォントサイズを自由に調整できる利便性があるから',
            '表紙のデザインが光るから',
            'スマートフォン以外では読めないから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "重い本を持ち運ぶ必要がなく、フォントサイズを好みに調整できる利便性が高く評価されています。"',
        },
        {
          id: 'n3-l4-r1-q3',
          question: '学校や図書館が電子書籍貸出サービスを導入した目的は何ですか。(Mục đích trường học và thư viện triển khai mượn sách điện tử là gì?)',
          options: [
            '紙の本をすべて焼却処分するため',
            '生徒たちがより本に親しめるようにするため',
            '図書館の職員を全員減らすため',
            '電気代を節約するため',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "学校や図書館でも、電子書籍の貸出サービスを導入し、生徒たちがより本に親しめるように様々な工夫が凝らされています。"',
        },
        {
          id: 'n3-l4-r1-q4',
          question: '「スタイルを大きく変えたに違いありません」の「に違いない」のニュアンスは何ですか。(Sắc thái của "に違いない" trong câu là gì?)',
          options: [
            'Sự phán đoán với độ chắc chắn rất cao từ các bằng chứng quan sát được',
            'Sự nghi ngờ mơ hồ không có căn cứ',
            'Lời khuyên người khác nên đổi phong cách',
            'Diễn tả việc hối tiếc vì phong cách đã thay đổi',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜に違いない thể hiện sự khẳng định chắc nịch của người nói (chắc chắn là như thế, không sai được).',
        },
        {
          id: 'n3-l4-r1-q5',
          question: '「親しめるように」の「〜ように」の文法的な機能は何ですか。(Chức năng ngữ pháp của "〜ように" ở đây là gì?)',
          options: [
            'Chỉ mục đích hành động (để cho / sao cho học sinh có thể gần gũi với sách)',
            'Chỉ mệnh lệnh trực tiếp gay gắt',
            'Chỉ sự phỏng đoán ngoại hình giống cái gì',
            'Chỉ một ví dụ minh họa',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 động từ khả năng + ように biểu thị mục đích (để có thể làm được việc gì đó).',
        },
        {
          id: 'n3-l4-r1-q6',
          question: '読書に関して筆者が最も大切だと考えている姿勢は何ですか。(Thái độ tác giả xem là quan trọng nhất về việc đọc sách là gì?)',
          options: [
            '紙の本だけを大切にして電子書籍を排除すること',
            '形式にとらわれず、知的好奇心を刺激する読書体験そのものを育てること',
            '漫画を読むことを法律で全面的に禁止すること',
            '１日最低１０時間は読書を強制すること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn cuối: "紙かデジタルかという形式の議論にとらわれるのではなく、知的好奇心を刺激して深い思索へと導く読書体験そのものを守り育てる姿勢が大切です。"',
        },
      ],
    },
    {
      id: 'n3-l4-r2',
      title: 'Bài đọc 2: 多文化共生社会で活躍するグローバル人材への期待 (Kỳ vọng vào nguồn nhân lực toàn cầu tỏa sáng trong xã hội đa văn hóa)',
      summary: 'Tầm quan trọng của nhân sự thông thạo ngoại ngữ, thấu hiểu đa văn hóa trong các doanh nghiệp hiện đại.',
      passageJp: `グローバル化の進展に伴い、日本のビジネス現場でも国籍や文化的背景を異にする人々が共に働く機会が急速に増加しています。少子化による深刻な労働力不足を補うだけでなく、多様な視点を取り入れてイノベーションを創出するためにも、外国人人材の活躍に対する社会の期待はかつてないほど高まっています。

異なる文化を持つ人々と円滑に協働するためには、単なる語学力だけでなく、相手の価値観を尊重し、柔軟に対話を進めるコミュニケーション能力が必要不可欠です。文化の違いから生じる誤解や摩擦を恐れずにオープンに対話を重ねるリーダーは、組織の結束力を高める上で極めて重要な存在であるに違いありません。

多くの企業では、外国人社員が安心して能力を発揮できるように、メンター制度の設置や社内文書の多言語化、異文化理解研修の実施など、働きやすい環境づくりに注力しています。多様性を力に変えることができる組織こそが、今後の激しい国際競争を勝ち抜いていくはずです。`,
      passageVi: `Cùng với sự phát triển của toàn cầu hóa, tại các môi trường kinh doanh Nhật Bản, cơ hội để những con người khác biệt về quốc tịch và nền tảng văn hóa cùng làm việc đang gia tăng nhanh chóng. Không chỉ đơn thuần nhằm bù đắp sự thiếu hụt lao động trầm trọng do suy giảm tỷ lệ sinh, mà để tiếp thu các góc nhìn đa dạng nhằm tạo ra sự đổi mới sáng tạo, kỳ vọng của xã hội đối với sự tỏa sáng của nguồn nhân lực nước ngoài đang cao hơn bao giờ hết.

Để có thể cộng tác trôi chảy với những con người mang nền văn hóa khác nhau, không chỉ đơn thuần là năng lực ngoại ngữ mà năng lực giao tiếp tôn trọng giá trị quan của đối phương và đối thoại linh hoạt là điều vô cùng thiết yếu. Những người lãnh đạo không sợ hãi hiểu lầm hay xích mích nảy sinh từ sự khác biệt văn hóa mà cởi mở đối thoại nhiều lần chắc chắn là sự hiện diện cực kỳ quan trọng trong việc nâng cao sự gắn kết tổ chức.

Tại nhiều doanh nghiệp, để các nhân viên nước ngoài có thể an tâm phát huy năng lực của mình, người ta đang dồn sức xây dựng môi trường làm việc thuận lợi như thiết lập chế độ người hướng dẫn (mentor), đa ngôn ngữ hóa văn bản nội bộ, tổ chức các khóa tập huấn thấu hiểu đa văn hóa. Chính những tổ chức có thể biến sự đa dạng thành sức mạnh mới có thể chiến thắng trong cuộc cạnh tranh quốc tế khốc liệt sau này.`,
      vocabFocus: ['活躍 (hoạt động sôi nổi)', '調査 (điều tra/khảo sát)', '増加 (tăng)', '減少 (giảm)', '傾向 (xu hướng)', '期待 (kỳ vọng)'],
      grammarFocus: ['〜に違いない (chắc chắn là không thể sai)', '〜ように (để mà / sao cho)'],
      questions: [
        {
          id: 'n3-l4-r2-q1',
          question: '外国人人材の活躍が期待されている主な理由として何が挙げられていますか。(Lý do chính khiến nhân lực nước ngoài được kỳ vọng là gì?)',
          options: [
            '給料を安く抑えることができるから',
            '深刻な労働力不足を補い、多様な視点からイノベーションを創出するため',
            '日本語の文法を社員に教えさせるため',
            '海外の観光名所を案内してもらうため',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "深刻な労働力不足を補うだけでなく、多様な視点を取り入れてイノベーションを創出するためにも、外国人人材の活躍に対する社会の期待はかつてないほど高まっています。"',
        },
        {
          id: 'n3-l4-r2-q2',
          question: '異文化の人々と円滑に働くために何が必要だと書かれていますか。(Cần gì để làm việc trôi chảy với người khác biệt văn hóa?)',
          options: [
            '英語のテストで満点を取ること',
            '相手の価値観を尊重し、柔軟に対話を進めるコミュニケーション能力',
            '相手に日本の習慣をすべて無理矢理押し付けること',
            '仕事以外の会話を一切しないこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "相手の価値観を尊重し、柔軟に対話を進めるコミュニケーション能力が必要不可欠です。"',
        },
        {
          id: 'n3-l3-r2-q3',
          question: '「重要な存在であるに違いありません」の「に違いない」の意味は何ですか。(Nghĩa của "に違いない" trong câu là gì?)',
          options: [
            'Tác giả khẳng định chắc chắn 100% dựa trên tầm quan trọng của người lãnh đạo thấu hiểu',
            'Sự nghi ngờ liệu có quan trọng hay không',
            'Chỉ sự sai sót nhầm lẫn',
            'Lời yêu cầu cấp dưới phải tuân lệnh',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜に違いない dùng để phán đoán với sự tin tưởng tuyệt đối (chắc chắn là như vậy).',
        },
        {
          id: 'n3-l4-r2-q4',
          question: '企業が職場環境を整えるために行っている取り組みはどれですか。(Nỗ lực doanh nghiệp thực hiện để hoàn thiện môi trường là gì?)',
          options: [
            '残業時間を毎晩増やすこと',
            'メンター制度の設置、文書の多言語化、異文化理解研修の実施',
            '外国人社員のデスクを別室に隔離すること',
            '日本語以外の使用を社内で禁止すること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "メンター制度の設置や社内文書の多言語化、異文化理解研修の実施など、働きやすい環境づくりに注力しています。"',
        },
        {
          id: 'n3-l4-r2-q5',
          question: '「安心して能力を発揮できるように」の「ように」の用法は何ですか。(Cách dùng "ように" ở đây là gì?)',
          options: [
            'Biểu thị mục đích (để nhân viên có thể an tâm phát huy năng lực)',
            'Biểu thị sự giống nhau (giống như bức tranh)',
            'Biểu thị lời chúc phúc',
            'Biểu thị thói quen hàng ngày',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜ように kết hợp động từ khả năng biểu thị mục đích hành động.',
        },
        {
          id: 'n3-l4-r2-q6',
          question: '国際競争を勝ち抜く組織の特徴として筆者が述べているのはどれですか。(Đặc trưng tổ chức thắng trong cạnh tranh quốc tế là gì?)',
          options: [
            '社員全員が同じ国籍と年齢で揃っている組織',
            '多様性を力に変えることができる組織',
            '新しい技術の導入を断固拒否する組織',
            '海外事業から撤退して国内だけに専念する組織',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 3: "多様性を力に変えることができる組織こそが、今後の激しい国際競争を勝ち抜いていくはずです。"',
        },
      ],
    },
    {
      id: 'n3-l4-r3',
      title: 'Bài đọc 3: 地方都市の人口減少と関係人口の創出 (Suy giảm dân số ở các đô thị địa phương và sáng tạo dân số gắn kết)',
      summary: 'Các biện pháp ứng phó với hiện tượng già hóa và di cư về thủ đô: thu hút người làm việc từ xa và xây dựng cộng đồng gắn kết.',
      passageJp: `日本の地方都市では、若年層の東京圏への流出と少子高齢化によって、急激な人口減少の傾向が続いています。商店街のシャッター通り化や空き家の増加、地域のお祭りなど伝統行事の存続危機は、多くの自治体が抱える深刻な悩みです。

この課題に対処するため、単に移住者を増やすことだけを目指すのではなく、地域と多様に関わる「関係人口」を増やそうという新しい試みが広がっています。関係人口とは、その地域に完全には定住していなくても、ワーケーションや副業、定期的なボランティアなどを通じて継続的に地域を応援してくれる人々のことです。

都市部に住みながら地方のまちづくりに関わる若者は、地域に新しい活気と視点をもたらしてくれるに違いありません。高速インターネット網やシェアオフィスの整備が進んだことで、場所を選ばずに仕事ができる環境が整ったことも、この流れを後押ししています。

訪れた人々が地域の魅力を深く実感できるように、住民との温かい交流イベントや体験プログラムを工夫することが、地方創生の成否を分ける鍵となるでしょう。`,
      passageVi: `Tại các thành phố địa phương của Nhật Bản, do sự di cư của tầng lớp trẻ về khu vực Tokyo và tình trạng già hóa suy giảm sinh con, xu hướng suy giảm dân số nhanh chóng đang tiếp diễn. Việc các con phố buôn bán phải đóng sập cửa cuốn, nhà bỏ hoang gia tăng và nguy cơ mai một của các sự kiện truyền thống như lễ hội địa phương là nỗi trăn trở nghiêm trọng của nhiều chính quyền cấp huyện thị.

Nhằm đối phó với thách thức này, thay vì chỉ nhắm vào việc gia tăng cư dân chuyển đến định cư hoàn toàn, một thử nghiệm mới nhằm gia tăng "dân số gắn kết" - những người có mối quan hệ đa dạng với vùng đất - đang lan rộng. Dân số gắn kết là những người tuy không định cư hẳn ở địa phương đó nhưng liên tục ủng hộ vùng đất thông qua du lịch kết hợp làm việc từ xa (workation), nghề tay trái hay làm tình nguyện định kỳ.

Những người trẻ sinh sống tại đô thị nhưng tham gia vào phát triển địa phương chắc chắn sẽ mang lại sức sống và góc nhìn mới mẻ cho khu vực. Việc hạ tầng internet tốc độ cao và các văn phòng làm việc chia sẻ được hoàn thiện, tạo ra môi trường có thể làm việc không kén chọn địa điểm, cũng tiếp thêm sức mạnh cho dòng chảy này.

Dày công sáng tạo các chương trình trải nghiệm và sự kiện giao lưu ấm áp với người dân bản địa sao cho những người ghé thăm có thể cảm nhận sâu sắc sức hút của vùng quê sẽ là chìa khóa quyết định sự thành bại của công cuộc tái sinh địa phương.`,
      vocabFocus: ['活躍 (hoạt động sôi nổi)', '調査 (điều tra/khảo sát)', '増加 (tăng)', '減少 (giảm)', '傾向 (xu hướng)', '期待 (kỳ vọng)'],
      grammarFocus: ['〜に違いない (chắc chắn là không thể sai)', '〜ように (để mà / sao cho)'],
      questions: [
        {
          id: 'n3-l4-r3-q1',
          question: '地方都市が抱えている深刻な問題として書かれているものはどれですか。(Vấn đề địa phương đang gặp phải được nhắc tới là gì?)',
          options: [
            '観光客が多すぎてホテルが足りないこと',
            '若者の大都市流出による人口減少、空き家増加、伝統行事の危機',
            '雨が一年中降り続いて農作物が全滅したこと',
            '電車の本数が多すぎて道路が渋滞すること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "若年層の東京圏への流出と少子高齢化によって、急激な人口減少の傾向が続いています。商店街のシャッター通り化や空き家の増加、地域のお祭りなど伝統行事の存続危機..."',
        },
        {
          id: 'n3-l4-r3-q2',
          question: '「関係人口」とはどのような人々を指しますか。(Dân số gắn kết chỉ những người như thế nào?)',
          options: [
            'その町で生まれた人全員',
            '完全には定住していなくても、ワーケーションや副業等で継続的に地域に関わる人',
            '一度もその町に来たことがない人',
            '町の役所に勤務する公務員',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "関係人口とは、その地域に完全には定住していなくても、ワーケーションや副業、定期的なボランティアなどを通じて継続的に地域を応援してくれる人々のことです。"',
        },
        {
          id: 'n3-l4-r3-q3',
          question: '「新しい活気と視点をもたらしてくれるに違いありません」の「に違いない」のニュアンスは何ですか。(Sắc thái của "に違いない" trong câu là gì?)',
          options: [
            'Niềm tin chắc chắn dựa trên sự nhiệt huyết và góc nhìn mới của người trẻ',
            'Sự lo sợ sẽ làm xáo trộn vùng quê',
            'Phủ định khả năng đóng góp của giới trẻ',
            'Lời khuyên người trẻ nên ở yên tại Tokyo',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜に違いない dùng để khẳng định niềm tin mãnh liệt (chắc chắn sẽ mang lại luồng sinh khí mới).',
        },
        {
          id: 'n3-l4-r3-q4',
          question: '関係人口の増加を後押ししているインフラの整備は何ですか。(Hạ tầng nào hỗ trợ cho sự gia tăng dân số gắn kết?)',
          options: [
            '新幹線の無料化',
            '高速インターネット網やシェアオフィスの整備',
            '大型遊園地の建設',
            '空港の滑走路の延伸',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "高速インターネット網やシェアオフィスの整備が進んだことで、場所を選ばずに仕事ができる環境が整ったことも、この流れを後押ししています。"',
        },
        {
          id: 'n3-l4-r3-q5',
          question: '「魅力を深く実感できるように」の「ように」の意味は何ですか。(Ý nghĩa của "ように" trong câu là gì?)',
          options: [
            'Chỉ mục đích (sao cho / để cho du khách cảm nhận sâu sắc sức hút)',
            'Chỉ ngoại hình tương tự',
            'Chỉ một thói quen cố định',
            'Chỉ lời cảnh báo nguy hiểm',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜ように biểu thị mục đích hành động.',
        },
        {
          id: 'n3-l4-r3-q6',
          question: '地方創生の鍵として文章の最後で強調されていることは何ですか。(Điều được nhấn mạnh ở cuối bài như chìa khóa chấn hưng địa phương là gì?)',
          options: [
            '大企業の本社を強制的に地方へ移転させること',
            '住民との温かい交流イベントや体験プログラムを工夫すること',
            '観光客に高い税金を課すこと',
            'すべてのお祭りを中止して経費を削減すること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "訪れた人々が地域の魅力を深く実感できるように、住民との温かい交流イベントや体験プログラムを工夫することが、地方創生の成否を分ける鍵となるでしょう。"',
        },
      ],
    },
    {
      id: 'n3-l4-r4',
      title: 'Bài đọc 4: キャッシュレス決済の急増と消費者の購買意識 (Sự gia tăng thanh toán không dùng tiền mặt và ý thức mua sắm người tiêu dùng)',
      summary: 'Ảnh hưởng của thanh toán không tiền mặt đối với sự tiện lợi và rủi ro chi tiêu quá đà thiếu kiểm soát.',
      passageJp: `日本銀行や経済産業省の調査によると、日本国内におけるキャッシュレス決済の利用比率は年々増加の一途をたどっています。かつて日本は「現金主義の国」として知られ、偽札が極めて少ない治安の良さもあって現金の信頼性が非常に高かったのですが、スマートフォンのQRコード決済や非接触ICカードの普及により、現金を使わない生活が急速に定着しました。

キャッシュレスの普及は、レジでの会計時間を劇的に短縮し、店舗側の現金管理コストを削減する上で大きな効果をもたらしたに違いありません。ポイント還元キャンペーンの実施も、消費者の利用を強力に後押ししました。

しかしその一方で、現金という物理的なお金が手元から減る感覚が薄れるため、無意識のうちにお金を使いすぎてしまう傾向が指摘されています。特に学生や若い世代において、クレジットカードや後払い決済の利用残高が増加し、支払いに困窮するケースも報告されています。

家計を適切に管理できるように、アプリで支出履歴をこまめに確認し、使いすぎを防ぐ自己規律を保つ工夫が不可欠です。`,
      passageVi: `Theo các cuộc khảo sát của Ngân hàng Trung ương Nhật Bản và Bộ Kinh tế, Thương mại và Công nghiệp, tỷ lệ sử dụng thanh toán không tiền mặt tại Nhật Bản đang trên đà gia tăng đều đặn qua từng năm. Trước đây, Nhật Bản từng nổi tiếng là "xứ sở tôn sùng tiền mặt", nơi mức độ tin cậy vào tiền mặt cực kỳ cao nhờ an ninh tốt hầu như không có tiền giả, nhưng với sự lan rộng của thanh toán mã QR trên smartphone và thẻ vi mạch không tiếp xúc, cuộc sống không dùng tiền mặt đã nhanh chóng bén rễ sâu rộng.

Sự phổ biến của thanh toán không tiền mặt chắc chắn đã mang lại hiệu quả to lớn trong việc rút ngắn chóng mặt thời gian tính tiền tại quầy thu ngân và cắt giảm chi phí kiểm đếm quản lý tiền mặt cho các cửa hàng. Các chiến dịch hoàn điểm thưởng cũng tạo lực đẩy mạnh mẽ cho người tiêu dùng sử dụng.

Thế nhưng mặt khác, do cảm giác nhìn thấy những tờ tiền mặt vật lý hao hụt khỏi tay bị phai nhạt, người ta chỉ ra xu hướng chi tiêu quá đà một cách vô thức. Đặc biệt trong giới học sinh sinh viên và thế hệ trẻ, đã có những trường hợp dư nợ thẻ tín dụng hoặc thanh toán trả sau tăng cao dẫn tới khốn đốn khi trả nợ.

Để có thể quản lý chi tiêu gia đình một cách phù hợp, việc kiểm tra thường xuyên lịch sử chi tiêu trên ứng dụng và giữ vững kỷ luật bản thân để phòng ngừa tiêu xài quá tay là điều không thể thiếu.`,
      vocabFocus: ['活躍 (hoạt động sôi nổi)', '調査 (điều tra/khảo sát)', '増加 (tăng)', '減少 (giảm)', '傾向 (xu hướng)', '期待 (kỳ vọng)'],
      grammarFocus: ['〜に違いない (chắc chắn là không thể sai)', '〜ように (để mà / sao cho)'],
      questions: [
        {
          id: 'n3-l4-r4-q1',
          question: 'かつて日本で現金への信頼が高かった理由として書かれているのは何ですか。(Lý do trước đây Nhật Bản rất tin dùng tiền mặt là gì?)',
          options: [
            'クレジットカードが法律で禁止されていたから',
            '治安が良く偽札が極めて少なかったから',
            '銀行が町に一つもなかったから',
            'スマートフォンが高額で誰も持っていなかったから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "かつて日本は「現金主義の国」として知られ、偽札が極めて少ない治安の良さもあって現金の信頼性が非常に高かったのですが..."',
        },
        {
          id: 'n3-l4-r4-q2',
          question: 'キャッシュレス決済の普及がもたらした店舗側の利点は何ですか。(Lợi ích cho phía cửa hàng nhờ thanh toán không tiền mặt là gì?)',
          options: [
            '会計時間の短縮と現金管理コストの削減',
            '店員を全員解雇できること',
            '商品の値段を２倍にできること',
            '電気代が無料になること',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 2 nêu: "レジでの会計時間を劇的に短縮し、店舗側の現金管理コストを削減する上で大きな効果をもたらしたに違いありません。"',
        },
        {
          id: 'n3-l4-r4-q3',
          question: '「効果をもたらしたに違いありません」の「に違いない」の使い方はどれですか。(Cách dùng "に違いない" ở đây là gì?)',
          options: [
            'Khẳng định chắc chắn từ kết quả quan sát thực tế ở các cửa hàng',
            'Nghi ngờ về tính hiệu quả của máy móc',
            'Đổ lỗi cho thanh toán không tiền mặt',
            'Yêu cầu bồi thường tiền mặt',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜に違いない khẳng định chắc chắn suy đoán dựa trên căn cứ rõ ràng.',
        },
        {
          id: 'n3-l4-r4-q4',
          question: 'キャッシュレス決済のデメリットや懸念点として何が指摘されていますか。(Điểm bất lợi hoặc lo ngại của thanh toán không tiền mặt là gì?)',
          options: [
            'スマートフォンが重くなること',
            'お金を使っている感覚が薄れ、無意識に使いすぎてしまう傾向があること',
            'ポイントが貯まりすぎて困ること',
            'レジで暗証番号を大声で言わなければならないこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "現金という物理的なお金が手元から減る感覚が薄れるため、無意識のうちにお金を使いすぎてしまう傾向が指摘されています。"',
        },
        {
          id: 'n3-l4-r4-q5',
          question: '「家計を適切に管理できるように」の「ように」の働きは何ですか。(Vai trò của "ように" trong câu là gì?)',
          options: [
            'Biểu thị mục đích (để có thể quản lý chi tiêu tài chính đúng cách)',
            'Biểu thị sự so sánh ví von',
            'Biểu thị ước mơ viển vông',
            'Biểu thị việc bắt chước người khác',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 động từ khả năng + ように biểu thị mục tiêu cần đạt được.',
        },
        {
          id: 'n3-l4-r4-q6',
          question: '使いすぎを防ぐために筆者が推奨している工夫は何ですか。(Biện pháp tác giả khuyến nghị để phòng ngừa chi tiêu quá đà là gì?)',
          options: [
            'スマートフォンを解約すること',
            'アプリで支出履歴をこまめに確認し、自己規律を保つこと',
            'すべての買い物を現金だけに戻すこと',
            '買い物自体を一切やめること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn cuối: "アプリで支出履歴をこまめに確認し、使いすぎを防ぐ自己規律を保つ工夫が不可欠です。"',
        },
      ],
    },
    {
      id: 'n3-l4-r5',
      title: 'Bài đọc 5: 健康志向の高まりとフィットネス習慣の定着 (Xu hướng hướng về sức khỏe và sự hình thành thói quen tập luyện)',
      summary: 'Lối sống lành mạnh sau đại dịch: phòng ngừa bệnh tật, nâng cao thể lực và duy trì thói quen tập thể dục bền bỉ.',
      passageJp: `生活習慣病の予防やメンタルヘルスの改善に対する意識の高まりを受けて、日常的に運動を取り入れる人々の割合が急増しています。特に２４時間営業の小型フィットネスジムや、オンラインで自宅から参加できるヨガレッスンなど、忙しい現代人の生活スタイルに寄り添った新しい健康サービスが続々と登場しています。

健康維持のためには適度な運動が不可欠であることは科学的にも証明されています。運動によって分泌されるホルモンがストレスを和らげ、睡眠の質を向上させる効果は誰にとっても大きいに違いありません。階段を使うように心がけたり、一駅手前で降りて歩いたりする小さな習慣の積み重ねが、長期的には大きな体力向上へとつながります。

無理な運動で怪我をしないように、自分の年齢や体力に見合ったペースを守ることが大切です。他人の記録と比較するのではなく、昨日の自分よりも少しだけ健やかに過ごせるように、楽しみながら運動を継続する姿勢が期待されています。`,
      passageVi: `Trước ý thức ngày càng nâng cao đối với việc phòng chống các bệnh do thói quen sinh hoạt và cải thiện sức khỏe tinh thần, tỷ lệ người đưa thể dục thể thao vào đời sống hàng ngày đang gia tăng đột biến. Đặc biệt, các phòng gym mini mở cửa 24/7 hay các lớp học yoga trực tuyến có thể tham gia ngay tại nhà đã liên tục xuất hiện, đáp ứng linh hoạt lối sống bận rộn của con người hiện đại.

Việc vận động điều độ là không thể thiếu để duy trì sức khỏe đã được khoa học chứng minh rõ ràng. Lượng hormone tiết ra nhờ tập luyện giúp xoa dịu căng thẳng và nâng cao chất lượng giấc ngủ chắc chắn đem lại hiệu quả to lớn đối với bất kỳ ai. Việc tích lũy những thói quen nhỏ như chú ý đi thang bộ hay xuống trước một ga tàu để đi bộ, về lâu dài sẽ dẫn tới sự nâng cao thể lực vượt bậc.

Để không bị chấn thương do vận động quá sức, việc giữ vững nhịp độ tương xứng với độ tuổi và thể lực của bản thân là vô cùng quan trọng. Thay vì so đo với thành tích của người khác, chúng ta được kỳ vọng sẽ duy trì thái độ tập luyện vui vẻ sao cho ngày hôm nay có thể sống khỏe khoắn hơn một chút so với bản thân của ngày hôm qua.`,
      vocabFocus: ['活躍 (hoạt động sôi nổi)', '調査 (điều tra/khảo sát)', '増加 (tăng)', '減少 (giảm)', '傾向 (xu hướng)', '期待 (kỳ vọng)'],
      grammarFocus: ['〜に違いない (chắc chắn là không thể sai)', '〜ように (để mà / sao cho)'],
      questions: [
        {
          id: 'n3-l4-r5-q1',
          question: 'フィットネスジムなどの健康サービスが増加している背景は何ですか。(Bối cảnh gia tăng các dịch vụ thể hình chăm sóc sức khỏe là gì?)',
          options: [
            'オリンピックの選手になる人が増えたから',
            '生活習慣病予防やメンタルヘルス改善への意識の高まり',
            '病院がすべて閉鎖されたから',
            '医者から全員に運動が命令されたから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "生活習慣病の予防やメンタルヘルスの改善に対する意識の高まりを受けて、日常的に運動を取り入れる人々の割合が急増しています。"',
        },
        {
          id: 'n3-l4-r5-q2',
          question: '運動によって分泌されるホルモンの効果は何ですか。(Hiệu quả của hormone tiết ra khi tập luyện là gì?)',
          options: [
            '視力が急激に良くなること',
            'ストレスを和らげ、睡眠の質を向上させること',
            '体重が一晩で１０キロ減ること',
            '髪の毛が急に伸びること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "運動によって分泌されるホルモンがストレスを和らげ、睡眠の質を向上させる効果は誰にとっても大きいに違いありません。"',
        },
        {
          id: 'n3-l4-r5-q3',
          question: '「誰にとっても大きいに違いありません」の「に違いない」のニュアンスは何ですか。(Sắc thái của "に違いない" trong câu là gì?)',
          options: [
            'Khẳng định chắc nịch dựa trên cơ sở khoa học đã chứng minh',
            'Sự băn khoăn nghi hoặc',
            'Lời trách móc người lười tập',
            'Ước mơ không có thật',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜に違いない thể hiện sự khẳng định vững chắc dựa vào chứng cứ khoa học đã nêu.',
        },
        {
          id: 'n3-l4-r5-q4',
          question: '日常生活で実践できる小さな運動習慣として挙げられているのはどれですか。(Thói quen vận động nhỏ có thể áp dụng trong sinh hoạt là gì?)',
          options: [
            '毎晩１００キロ走ること',
            '階段を使うように心がけたり、一駅手前で降りて歩いたりすること',
            '一日中立ちっぱなしで仕事をすること',
            '重いバーベルを持ちながら通勤すること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "階段を使うように心がけたり、一駅手前で降りて歩いたりする小さな習慣の積み重ねが、長期的には大きな体力向上へとつながります。"',
        },
        {
          id: 'n3-l4-r5-q5',
          question: '「怪我をしないように」の「ように」の意味は何ですか。(Ý nghĩa của "ように" trong câu là gì?)',
          options: [
            'Chỉ mục đích phòng ngừa (để không bị chấn thương)',
            'Chỉ lời chào hỏi xã giao',
            'Chỉ phương pháp nấu ăn',
            'Chỉ sự phỏng đoán theo giác quan',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 động từ thể phủ định ない + ように mang nghĩa "để không / sao cho không xảy ra điều gì xấu".',
        },
        {
          id: 'n3-l4-r5-q6',
          question: '運動を継続する上で大切だとされている姿勢は何ですか。(Thái độ quan trọng để duy trì việc tập luyện là gì?)',
          options: [
            '他人の記録と激しく競い合って勝つこと',
            '昨日の自分より健やかに過ごせるよう、楽しみながら自分のペースを守ること',
            '痛みを我慢して限界まで体を追い込むこと',
            '高額なサプリメントを大量に飲むこと',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 3: "他人の記録と比較するのではなく、昨日の自分よりも少しだけ健やかに過ごせるように、楽しみながら運動を継続する姿勢が期待されています。"',
        },
      ],
    },
  ],

  // ================= N3 BÀI 5 =================
  'n3-l5': [
    {
      id: 'n3-l5-r1',
      title: 'Bài đọc 1: 新製品発売後の顧客フィードバックと迅速な改善 (Phản hồi khách hàng sau khi mở bán sản phẩm mới và cải tiến nhanh chóng)',
      summary: 'Kinh nghiệm xử lý phản hồi của người dùng sau khi ra mắt ứng dụng di động: lắng nghe ý kiến và khắc phục lỗi tức thì.',
      passageJp: `あるITスタートアップ企業が、若者向けのスケジュール管理アプリをリリースしました。何ヶ月もの準備期間を経て公開されたアプリでしたが、配信を開始したとたん、ユーザーから膨大な数の問い合わせと改善要望が殺到しました。「操作画面のデザインは見やすくて満足しているが、通知設定に関して不具合があり、予定時刻にアラームが鳴らない」という不満の声が相次いだのです。

開発チームは落胆する暇もなく、ただちに緊急対策会議を開きました。ユーザーの不満や不安の声を真摯に受け止め、通知機能に関するプログラムの修正に昼夜を問わず取り組みました。そして公開からわずか３日後、不具合を解消した最新バージョンを再配信しました。

修正版をリリースしたとたん、アプリの評価欄には「素早い対応に感謝する」「誠実な運営チームに安心した」といった好意的なレビューが次々と投稿されるようになりました。初期のトラブルに対して誠心誠意向き合い、迅速な改善を重ねる姿勢こそが、ユーザーとの強固な信頼関係を築く基礎となるのです。`,
      passageVi: `Một công ty khởi nghiệp công nghệ thông tin đã ra mắt ứng dụng quản lý lịch trình dành cho giới trẻ. Dù là ứng dụng được công bố sau nhiều tháng chuẩn bị chu đáo, thế nhưng ngay khi vừa bắt đầu phát hành, hàng loạt thắc mắc cùng yêu cầu cải tiến từ người dùng đã trút xuống như thác. Những tiếng nói phàn nàn liên tiếp nổ ra: "Giao diện thao tác rất dễ nhìn nên tôi rất hài lòng, nhưng liên quan đến cài đặt thông báo thì đang có lỗi, chuông báo không kêu vào giờ đã định".

Đội ngũ phát triển thậm chí không có thời gian để chán nản thất vọng, mà lập tức mở cuộc họp khẩn cấp. Họ chân thành tiếp thu những tiếng nói bất mãn và bất an của người dùng, làm việc cả ngày lẫn đêm để sửa đổi chương trình liên quan đến tính năng thông báo. Và chỉ đúng 3 ngày sau khi phát hành, phiên bản mới nhất khắc phục triệt để lỗi đã được đưa lên trở lại.

Ngay sau khi tung ra bản sửa lỗi, trên mục đánh giá ứng dụng, hàng loạt bình luận tích cực đã liên tiếp được đăng tải: "Rất cảm ơn sự phản hồi thần tốc", "Tôi cảm thấy rất an tâm trước đội ngũ vận hành đầy chân thành". Thái độ đối diện hết lòng thành ý trước các sự cố ban đầu và cải tiến nhanh chóng chính là nền tảng để xây dựng mối quan hệ tin cậy vững chắc với người dùng.`,
      vocabFocus: ['さ (độ / mức độ)', '興味 (hứng thú)', '満足 (hài lòng)', '不安 (bất an)', '意見 (ý kiến)', '改善 (cải thiện)'],
      grammarFocus: ['〜たとたん（に） (vừa mới... thì ngay lập tức)', '〜に関して (liên quan đến / về vấn đề)'],
      questions: [
        {
          id: 'n3-l5-r1-q1',
          question: 'アプリの配信を開始したとたん、何が起きましたか。(Chuyện gì xảy ra ngay khi vừa bắt đầu phát hành ứng dụng?)',
          options: [
            'アプリが世界一のダウンロード数を記録した',
            '膨大な数の問い合わせと改善要望が殺到した',
            '会社が倒産した',
            'すべてのデータが消去された',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "配信を開始したとたん、ユーザーから膨大な数の問い合わせと改善要望が殺到しました。"',
        },
        {
          id: 'n3-l5-r1-q2',
          question: 'ユーザーから寄せられた不具合の内容は何でしたか。(Nội dung lỗi bị người dùng phàn nàn là gì?)',
          options: [
            'アプリのアイコンがダサいこと',
            'デザインは満足だが、通知設定に不具合があり予定時刻にアラームが鳴らないこと',
            'アプリの利用料金が高すぎること',
            'スマートフォンが起動しなくなること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1: "「操作画面のデザインは見やすくて満足しているが、通知設定に関して不具合があり、予定時刻にアラームが鳴らない」という不満の声が相次いだのです。"',
        },
        {
          id: 'n3-l5-r1-q3',
          question: '「通知設定に関して」の「に関して」の意味は何ですか。(Nghĩa của "に関して" trong câu là gì?)',
          options: [
            'Liên quan đến / về đối tượng, chủ đề đang đề cập',
            'Chỉ sự phủ định hoàn toàn',
            'Chỉ kết quả không thể thay đổi',
            'Chỉ một mong muốn tương lai',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜に関して mang nghĩa "liên quan đến / về việc...", trang trọng hơn について.',
        },
        {
          id: 'n3-l5-r1-q4',
          question: '開発チームは不具合に対してどのように対応しましたか。(Đội ngũ phát triển đã xử lý sự cố như thế nào?)',
          options: [
            '苦情を無視してアプリを放置した',
            '真摯に受け止め、昼夜問わず修正に取り組み３日後に修正版を配信した',
            '苦情を言ったユーザーのアカウントを削除した',
            'アプリの開発を完全に断念した',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "ユーザーの不満や不安の声を真摯に受け止め、通知機能に関するプログラムの修正に昼夜を問わず取り組みました。そして公開からわずか３日後、不具合を解消した最新バージョンを再配信しました。"',
        },
        {
          id: 'n3-l5-r1-q5',
          question: '「修正版をリリースしたとたん」の「〜たとたん」の文法的なニュアンスは何ですか。(Sắc thái của "〜たとたん" là gì?)',
          options: [
            'Ngay khi hành động trước vừa diễn ra thì sự việc sau xảy ra gần như đồng thời và bất ngờ',
            'Làm dần dần từng bước một cách chậm chạp',
            'Dự định sẽ làm trong tương lai xa',
            'Mệnh lệnh bắt buộc phải hoàn thành',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 Động từ thể Ta + とたん（に） biểu thị một hành động/sự việc diễn ra tức thì, bất ngờ ngay sau khi vế trước vừa xảy ra.',
        },
        {
          id: 'n3-l5-r1-q6',
          question: 'ユーザーとの信頼関係を築く上で最も大切だと書かれていることは何ですか。(Điều được xem là quan trọng nhất để xây dựng lòng tin với người dùng là gì?)',
          options: [
            '絶対に最初からミスをしない完璧な人間だけを採用すること',
            'トラブルに対して誠心誠意向き合い、迅速な改善を重ねる姿勢',
            '広告宣伝に巨額のお金を投じること',
            '不具合を隠蔽して気付かれないようにすること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 3: "初期のトラブルに対して誠心誠意向き合い、迅速な改善を重ねる姿勢こそが、ユーザーとの強固な信頼関係を築く基礎となるのです。"',
        },
      ],
    },
    {
      id: 'n3-l5-r2',
      title: 'Bài đọc 2: キャリアの転換と新しい環境への適応に関する考察 (Suy ngẫm về chuyển đổi nghề nghiệp và thích nghi với môi trường mới)',
      summary: 'Hành trình vượt qua nỗi bất an ban đầu khi chuyển việc và bí quyết hòa nhập vào văn hóa tổ chức mới.',
      passageJp: `終身雇用が当たり前ではなくなった現代において、自己の成長やキャリアアップのために転職を決断する人々が増えています。しかし、長年勤め慣れた会社を離れ、人間関係や企業風土が全く異なる新しい職場へ飛び込むことに関して、強い不安を抱くのは自然な感情です。

新しい会社に初出社したとたん、専門用語の飛び交うスピード感や独自のルールに圧倒され、「自分はこの職場で本当にやっていけるだろうか」と自信を失いそうになる人も少なくありません。業務の難しさ（難易度の高さ）に直面し、一時的にモチベーションが低下してしまう時期もあります。

こうした不安を解消するためには、分からないことを一人で抱え込まず、同僚や上司に積極的に質問し、助言を求める謙虚な姿勢が重要です。最初の数ヶ月間は完璧な成果を焦るのではなく、新しい職場の人間関係や業務の流れを丁寧に観察し、少しずつ改善を重ねながら適応していく心の余裕が求められます。`,
      passageVi: `Trong thời đại ngày nay khi chế độ làm việc trọn đời không còn là điều đương nhiên, ngày càng có nhiều người quyết định chuyển việc để phát triển bản thân và thăng tiến sự nghiệp. Tuy nhiên, liên quan đến việc rời khỏi công ty đã gắn bó nhiều năm và bước vào một môi trường làm việc mới hoàn toàn khác biệt về văn hóa doanh nghiệp cũng như mối quan hệ đồng nghiệp, việc ôm nỗi bất an mãnh liệt là một cảm xúc hết sức tự nhiên.

Ngay sau khi vừa bước chân tới công ty mới trong ngày đầu đi làm, không ít người bị choáng ngợp bởi nhịp độ nhanh thoăn thoắt với các thuật ngữ chuyên môn đan xen cùng các quy tắc riêng biệt, và suýt đánh mất tự tin: "Liệu mình có thực sự tồn tại được ở nơi làm việc này không?". Cũng có giai đoạn người ta phải đối diện với độ khó của nghiệp vụ khiến động lực bị giảm sút tạm thời.

Để xua tan nỗi bất an này, điều quan trọng là thái độ khiêm tốn, không ôm đồm khúc mắc một mình mà chủ động đặt câu hỏi cho đồng nghiệp và cấp trên để tìm kiếm lời khuyên. Trong vài tháng đầu, thay vì nóng vội đòi hỏi thành quả hoàn hảo, chúng ta cần có sự bình tâm để quan sát cẩn thận luồng công việc cũng như mối quan hệ nơi công sở mới, từng bước kiên trì cải thiện và thích nghi dần.`,
      vocabFocus: ['さ (độ / mức độ)', '興味 (hứng thú)', '満足 (hài lòng)', '不安 (bất an)', '意見 (ý kiến)', '改善 (cải thiện)'],
      grammarFocus: ['〜たとたん（に） (vừa mới... thì ngay lập tức)', '〜に関して (liên quan đến / về vấn đề)'],
      questions: [
        {
          id: 'n3-l5-r2-q1',
          question: '転職する人が抱きやすい自然な感情は何ですか。(Cảm xúc tự nhiên người chuyển việc hay gặp phải là gì?)',
          options: [
            'すぐに社長になれるという過度な自信',
            '人間関係や企業風土が異なる環境に飛び込むことへの強い不安',
            '前の会社の同僚に対する怒り',
            '仕事をしなくても給料がもらえるという期待',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "人間関係や企業風土が全く異なる新しい職場へ飛び込むことに関して、強い不安を抱くのは自然な感情です。"',
        },
        {
          id: 'n3-l5-r2-q2',
          question: '初出社したとたん、多くの人が圧倒される原因は何ですか。(Nguyên nhân khiến nhiều người bị choáng ngợp ngay khi vừa đi làm ngày đầu là gì?)',
          options: [
            'オフィスの部屋が暗すぎること',
            '専門用語の飛び交うスピード感や独自のルール',
            '机の上にパソコンが一台もなかったこと',
            '同僚が全員英語で歌っていたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "新しい会社に初出社したとたん、専門用語の飛び交うスピード感や独自のルールに圧倒され..."',
        },
        {
          id: 'n3-l5-r2-q3',
          question: '「難しさ（むずかしさ）」の「〜さ」の文法的な役割は何ですか。(Vai trò ngữ pháp của đuôi "-sa" là gì?)',
          options: [
            'Biến tính từ thành danh từ chỉ mức độ, tính chất khách quan (độ khó)',
            'Biến tính từ thành động từ chỉ hành động',
            'Chỉ sự phủ định tuyệt đối',
            'Chỉ mệnh lệnh trực tiếp',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3: Tính từ đuôi -i bỏ i thêm -sa chuyển thành danh từ đo lường mức độ, tính chất (難しさ = độ khó).',
        },
        {
          id: 'n3-l5-r2-q4',
          question: '職場への適応に関する不安を解消するために有効な方法は何ですか。(Phương pháp hữu hiệu để giải tỏa bất an thích nghi môi trường là gì?)',
          options: [
            '誰とも話さず自分の部屋に閉じこもること',
            '分からないことを一人で抱えず、同僚や上司に積極的に質問し助言を求めること',
            '初日に気に入らないルールがあればすぐ怒鳴ること',
            '１週間で会社を辞めること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "分からないことを一人で抱え込まず、同僚や上司に積極的に質問し、助言を求める謙虚な姿勢が重要です。"',
        },
        {
          id: 'n3-l5-r2-q5',
          question: '「初出社したとたん」の「〜たとたん」の表す時間的関係は何ですか。(Mối quan hệ thời gian của "〜たとたん" biểu thị điều gì?)',
          options: [
            'Vừa mới bước chân vào công ty thì ngay lập tức xuất hiện cảm giác choáng ngợp',
            'Sau khi đi làm được 10 năm mới nhận ra',
            'Trước khi đi làm 3 tháng',
            'Chỉ một giả định không có thật',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜たとたん: vừa lúc A xảy ra thì ngay tức khắc B xuất hiện.',
        },
        {
          id: 'n3-l5-r2-q6',
          question: '新しい職場で最初の数ヶ月間に持つべき心の余裕は何ですか。(Sự bình tâm cần có trong vài tháng đầu ở nơi làm mới là gì?)',
          options: [
            '完璧な成果を焦らず、人間関係や業務の流れを観察して少しずつ改善・適応すること',
            '何もしないで居眠りをして過ごすこと',
            '周囲の人全員をライバル視して敵を作ること',
            '毎日残業して体を壊すこと',
          ],
          answerIndex: 0,
          explanation: 'Câu kết đoạn 3: "最初の数ヶ月間は完璧な成果を焦るのではなく、新しい職場の人間関係や業務の流れを丁寧に観察し、少しずつ改善を重ねながら適応していく心の余裕が求められます。"',
        },
      ],
    },
    {
      id: 'n3-l5-r3',
      title: 'Bài đọc 3: 伝統工芸の現代的リデザインと若者の関心向上 (Tái thiết kế hiện đại thủ công truyền thống và gia tăng quan tâm của giới trẻ)',
      summary: 'Cách các làng nghề gốm sứ, dệt lụa truyền thống thu hút người trẻ bằng thiết kế tối giản, công năng hiện đại.',
      passageJp: `後継者不足や生活様式の欧米化によって、長年にわたり衰退の危機に直面していた日本の伝統工芸品が、いま新たな転機を迎えています。陶磁器や漆器、着物の織物といった伝統の技法を活かしつつ、現代の生活スタイルに合わせたシンプルで実用的なデザインへと刷新する試みが全国で進められています。

ある老舗の陶磁器工房が、電子レンジや食洗機にも対応できるモダンなマグカップを開発し、SNSで発表したとたん、全国の若者から注文が殺到して数ヶ月待ちの人気商品となりました。「重くて扱いにくい」という従来のイメージを覆し、手仕事の温かみと実用性の高さ（便利さ）が見事に融合したことが支持された理由です。

伝統工芸の未来に関して、過去の形式をただ頑なに守り続けるだけでは生き残れません。伝統の本質を守りながらも、現代の顧客の意見やニーズを取り入れて柔軟に改善を続けることによって、若い世代の興味や関心を引きつけ、技術を次の時代へと継承していくことができるのです。`,
      passageVi: `Do tình trạng thiếu người kế nghiệp và lối sống bị Âu hóa, các sản phẩm thủ công mỹ nghệ truyền thống của Nhật Bản - vốn đứng trước nguy cơ mai một trong suốt nhiều năm - nay đang đón nhận một bước ngoặt mới. Vừa phát huy các kỹ pháp truyền thống như gốm sứ, đồ sơn mài hay dệt lụa Kimono, vừa đổi mới sang các thiết kế giản dị và có tính thực dụng cao phù hợp với lối sống hiện đại đang là nỗ lực được tiến hành trên khắp cả nước.

Một xưởng gốm sứ lâu đời đã nghiên cứu phát triển loại cốc uống nước hiện đại có thể dùng được cả trong lò vi sóng và máy rửa bát, và ngay khi vừa công bố trên mạng xã hội, đơn đặt hàng từ giới trẻ trên toàn quốc đã ùa tới tấp, biến nó thành món hàng bán chạy phải chờ đợi nhiều tháng. Lý do được đón nhận chính là sự phá vỡ định kiến "nặng nề và khó sử dụng" truyền thống, kết hợp hoàn hảo giữa độ ấm áp của đôi tay thủ công với tính thực dụng cao (độ tiện lợi).

Liên quan đến tương lai của thủ công truyền thống, nếu chỉ khư khư bảo thủ giữ nguyên những hình thức của quá khứ thì không thể nào tồn tại được. Vừa giữ vững bản chất truyền thống nhưng vừa tiếp thu ý kiến cùng nhu cầu của khách hàng đương đại để kiên trì cải thiện linh hoạt, chúng ta mới có thể lôi cuốn sự hứng thú quan tâm của thế hệ trẻ và kế thừa kỹ thuật trao truyền cho thế hệ mai sau.`,
      vocabFocus: ['さ (độ / mức độ)', '興味 (hứng thú)', '満足 (hài lòng)', '不安 (bất an)', '意見 (ý kiến)', '改善 (cải thiện)'],
      grammarFocus: ['〜たとたん（に） (vừa mới... thì ngay lập tức)', '〜に関して (liên quan đến / về vấn đề)'],
      questions: [
        {
          id: 'n3-l5-r3-q1',
          question: '伝統工芸品が衰退の危機に直面していた主な理由は何ですか。(Lý do chính khiến thủ công truyền thống từng bên bờ mai một là gì?)',
          options: [
            '職人が全員外国へ行ってしまったから',
            '後継者不足や生活様式の欧米化',
            '土や木などの材料が日本から消えたから',
            '伝統工芸を作ることが法律で禁じられたから',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "後継者不足や生活様式の欧米化によって、長年にわたり衰退の危機に直面していた日本の伝統工芸品..."',
        },
        {
          id: 'n3-l5-r3-q2',
          question: '老舗工房がSNSでマグカップを発表したとたん、何が起きましたか。(Chuyện gì xảy ra ngay khi xưởng gốm công bố chiếc cốc trên mạng xã hội?)',
          options: [
            '注文が殺到し、数ヶ月待ちの人気商品となった',
            '誰からも見向きもされず売れ残った',
            '工房のアカウントが炎上して閉鎖された',
            'マグカップがすべて割れてしまった',
          ],
          answerIndex: 0,
          explanation: 'Đoạn 2 nêu: "SNSで発表したとたん、全国の若者から注文が殺到して数ヶ月待ちの人気商品となりました。"',
        },
        {
          id: 'n3-l5-r3-q3',
          question: '若者に支持されたマグカップの強みは何ですか。(Điểm mạnh của chiếc cốc được giới trẻ ủng hộ là gì?)',
          options: [
            '価格が１円だったこと',
            '手仕事の温かみと電子レンジ対応などの実用性（便利さ）が融合したこと',
            '純金で作られていたこと',
            '有名タレントのサインが入っていたこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "手仕事の温かみと実用性の高さ（便利さ）が見事に融合したことが支持された理由です。"',
        },
        {
          id: 'n3-l3-r3-q4',
          question: '「伝統工芸の未来に関して」の「に関して」の意味は何ですか。(Nghĩa của "に関して" trong câu là gì?)',
          options: [
            'Về vấn đề / liên quan đến chủ đề tương lai làng nghề',
            'Chỉ sự so sánh hơn thua',
            'Chỉ một mệnh lệnh cấp bách',
            'Chỉ nguyên nhân tiêu cực',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜に関して biểu thị chủ đề thảo luận, xem xét (về vấn đề tương lai thủ công truyền thống).',
        },
        {
          id: 'n3-l5-r3-q5',
          question: '「便利さ（べんりさ）」の「〜さ」の役割は何ですか。(Vai trò của "-sa" trong "便利さ" là gì?)',
          options: [
            'Danh từ hóa tính từ đuôi na biểu thị mức độ tiện lợi khách quan',
            'Biến đổi thành phó từ bổ nghĩa',
            'Biểu thị lời khen mang tính chủ quan cảm tính',
            'Biểu thị sự cấm đoán',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3: Tính từ đuôi na bỏ na thêm -sa tạo thành danh từ chỉ mức độ, tính chất (便利さ = độ tiện lợi).',
        },
        {
          id: 'n3-l5-r3-q6',
          question: '伝統技術を次の時代に継承するために必要な姿勢は何ですか。(Thái độ cần thiết để trao truyền kỹ thuật truyền thống cho tương lai là gì?)',
          options: [
            '過去のやり方を１ミリも変えずに固執すること',
            '本質を守りつつ、現代のニーズや意見を取り入れて柔軟に改善を続けること',
            'すべての製品を機械による完全自動生産に変えること',
            '若者向けの販売をやめて高齢者だけに売ること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 3: "伝統の本質を守りながらも、現代の顧客の意見やニーズを取り入れて柔軟に改善を続けることによって、若い世代の興味や関心を引きつけ、技術を次の時代へと継承していくことができるのです。"',
        },
      ],
    },
    {
      id: 'n3-l5-r4',
      title: 'Bài đọc 4: 教育現場におけるタブレット端末導入に関する議論 (Thảo luận liên quan đến việc đưa thiết bị máy tính bảng vào giáo dục)',
      summary: 'Mặt tích cực và những âu lo của phụ huynh khi đưa công nghệ số và máy tính bảng vào trường học.',
      passageJp: `国の「GIGAスクール構想」に基づき、全国の小中学校で児童生徒に１人１台のデジタル端末（タブレットやノートパソコン）が配備されました。紙の教科書とノートを中心としてきた学校現場に最新のICT機器が一斉に導入されたことに関して、教育関係者や保護者の間で活発な議論が交わされています。

授業でタブレットを使い始めたとたん、子供たちはゲーム感覚で楽しそうにクイズ形式の問題を解き、動画や音声を使ったインタラクティブな学びに夢中になりました。児童の学習意欲や興味を引き出す上での効果の大きさには、多くの教師が驚きの声を上げています。

その一方で、視力の低下や長時間の画面注視による健康被害、SNSを通じたトラブルなどへの不安も根強く存在します。「文字を書く練習量が減るのではないか」という保護者からの意見も少なくありません。

デジタル機器の便利さを最大限に活かしつつ、懸念されるリスクを減らすためには、家庭と学校が連携して利用ルールを定期的に見直し、適切な使い方へと改善していく姿勢が不可欠です。`,
      passageVi: `Dựa trên "Ý tưởng trường học GIGA" của chính phủ, các thiết bị kỹ thuật số (máy tính bảng hoặc laptop) đã được trang bị cho mỗi học sinh một máy tại các trường tiểu học và trung học cơ sở trên toàn quốc. Liên quan đến việc các thiết bị ICT tối tân được đưa đồng loạt vào môi trường trường học - nơi vốn lấy sách giáo khoa giấy và vở ghi làm trung tâm, những cuộc thảo luận sôi nổi đang diễn ra giữa giới giáo dục và các bậc phụ huynh.

Ngay sau khi vừa bắt đầu sử dụng máy tính bảng trong giờ học, các em học sinh đã hào hứng giải các bài toán dạng đố vui như một trò chơi, say mê với phương thức học tương tác kết hợp cả hình ảnh động và âm thanh. Về độ lớn của hiệu quả trong việc kích thích hứng thú và ý muốn học tập của học sinh, nhiều thầy cô giáo đã phải thốt lên kinh ngạc.

Thế nhưng mặt khác, nỗi bất an về việc suy giảm thị lực, tác hại sức khỏe do dán mắt vào màn hình thời gian dài và các rắc rối qua mạng xã hội vẫn tồn tại dai dẳng. Ý kiến từ các bậc cha mẹ rằng "liệu lượng luyện viết chữ có bị giảm sút đi hay không" cũng không hề ít.

Để phát huy tối đa độ tiện lợi của thiết bị số trong khi giảm thiểu các rủi ro đáng lo ngại, sự liên kết giữa gia đình và nhà trường nhằm rà soát định kỳ quy tắc sử dụng và kiên trì cải thiện hướng tới cách dùng phù hợp là điều không thể thiếu.`,
      vocabFocus: ['さ (độ / mức độ)', '興味 (hứng thú)', '満足 (hài lòng)', '不安 (bất an)', '意見 (ý kiến)', '改善 (cải thiện)'],
      grammarFocus: ['〜たとたん（に） (vừa mới... thì ngay lập tức)', '〜に関して (liên quan đến / về vấn đề)'],
      questions: [
        {
          id: 'n3-l5-r4-q1',
          question: '全国の小中学校で実施された政策は何ですか。(Chính sách được thực hiện tại các trường tiểu học và THCS là gì?)',
          options: [
            '教科書をすべて英語に変更すること',
            '児童生徒１人に１台のデジタル端末を配備すること',
            '学校の授業時間を半分に減らすこと',
            'テストをすべて廃止すること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "児童生徒に１人１台のデジタル端末（タブレットやノートパソコン）が配備されました。"',
        },
        {
          id: 'n3-l5-r4-q2',
          question: 'タブレットを使い始めたとたん、子供たちにどのような変化が見られましたか。(Thay đổi nào xuất hiện ở học sinh ngay khi vừa bắt đầu dùng tablet?)',
          options: [
            '全員が勉強を嫌がって泣き出した',
            '楽しそうにクイズ形式の問題を解き、インタラクティブな学びに夢中になった',
            '端末を壊して遊ぶようになった',
            '友達と全く話さなくなった',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "授業でタブレットを使い始めたとたん、子供たちはゲーム感覚で楽しそうにクイズ形式の問題を解き、動画や音声を使ったインタラクティブな学びに夢中になりました。"',
        },
        {
          id: 'n3-l5-r4-q3',
          question: '「効果の大きさ」の「〜さ」の役割は何ですか。(Vai trò của đuôi "-sa" trong "大きさ" là gì?)',
          options: [
            'Chuyển tính từ "大きい" thành danh từ đo lường mức độ to lớn của hiệu quả',
            'Chỉ kích thước hình học cụ thể của đồ vật',
            'Chỉ sự thất vọng về kết quả',
            'Lời yêu cầu học sinh nói to lên',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3: Tính từ đuôi -i (大きい) chuyển thành danh từ đo lường mức độ (大きさ = độ lớn / mức độ to lớn).',
        },
        {
          id: 'n3-l5-r4-q4',
          question: '保護者が抱いている不安や意見として書かれているのはどれですか。(Bất an hoặc ý kiến phụ huynh ôm giữ là gì?)',
          options: [
            '電気代を家庭で払わされること',
            '視力低下や画面注視による健康被害、手書き練習量の減少',
            'タブレットの色が気に入らないこと',
            '先生が授業中に寝てしまうこと',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "視力の低下や長時間の画面注視による健康被害、SNSを通じたトラブルなどへの不安...「文字を書く練習量が減るのではないか」という保護者からの意見..."',
        },
        {
          id: 'n3-l5-r4-q5',
          question: '「機器が一斉に導入されたことに関して」の「に関して」の働きは何ですか。(Vai trò của "に関して" trong câu là gì?)',
          options: [
            'Nêu lên chủ đề/vấn đề đang được tranh luận sôi nổi',
            'So sánh hai trường học với nhau',
            'Chỉ thời gian bắt đầu năm học mới',
            'Khẳng định điều đó là sai lầm',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3 〜に関して dùng để nêu chủ đề đàm luận (về việc đưa thiết bị ICT vào trường học).',
        },
        {
          id: 'n3-l5-r4-q6',
          question: 'リスクを減らし利便性を活かすために何が必要だと筆者は述べていますか。(Tác giả cho rằng cần gì để giảm rủi ro và phát huy tiện ích?)',
          options: [
            'タブレット端末を今すぐ全員回収して捨てること',
            '家庭と学校が連携して利用ルールを定期的に見直し改善していくこと',
            '子供たちに暗証番号を教えないこと',
            '学校での授業をすべてオンラインだけにすること',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "家庭と学校が連携して利用ルールを定期的に見直し、適切な使い方へと改善していく姿勢が不可欠です。"',
        },
      ],
    },
    {
      id: 'n3-l5-r5',
      title: 'Bài đọc 5: 異文化体験がもたらす自己変革と視野の広がり (Tự làm mới bản thân và mở rộng tầm nhìn nhờ trải nghiệm dị văn hóa)',
      summary: 'Trải nghiệm du học và sự va chạm văn hóa giúp nhận ra sự đa dạng của thế giới và sự trưởng thành nội tâm.',
      passageJp: `自分の生まれ育った国を離れ、異なる文化圏で生活することは、人生における貴重な自己変革の機会となります。日本で「常識」だと信じて疑わなかった価値観が、海外の環境では全く通用しない現実に直面し、最初は大きなカルチャーショックや不安を感じるのが常です。

ある留学生は、初めて海外の空港に降り立ったとたん、行き交う人々の多種多様な言語や振る舞いの自由さ（フランクさ）に圧倒されました。スーパーでの買い物の仕方や電車の乗り方に関して戸惑うことばかりで、最初の１ヶ月は失敗の連続でした。

しかし、現地の人々の温かい親切に触れ、積極的に地元のコミュニティに参加して意見を交わす中で、異文化に対する興味と理解が深まりました。「物事の正しさは一つではない」という柔軟な思考を身につけたことで、物事を多角的に捉える心の広さが養われたわけです。

未知の世界へ勇気を出して一歩を踏み出すことによって、人は自己の限界を超え、真の豊かさを実感できる人間へと成長できるのです。`,
      passageVi: `Rời khỏi đất nước nơi mình sinh ra và lớn lên để sinh sống tại một vùng văn hóa khác biệt sẽ trở thành cơ hội quý báu để thay đổi bản thân trong cuộc đời. Khi đối diện với hiện thực rằng những giá trị quan mà ở Nhật Bản người ta tin chắc là "lẽ thường" lại hoàn toàn không được áp dụng tại môi trường nước ngoài, việc ban đầu cảm thấy cú sốc văn hóa hay bất an to lớn luôn là điều bình thường.

Một bạn du học sinh nọ, ngay khi vừa đặt chân xuống sân bay nước ngoài lần đầu tiên, đã bị choáng ngợp bởi vô vàn ngôn ngữ khác nhau của dòng người qua lại cùng sự phóng khoáng tự do trong cử chỉ của họ. Liên quan đến cách mua sắm trong siêu thị hay cách đi tàu điện, toàn là những điều bỡ ngỡ khiến cho tháng đầu tiên là một chuỗi những lần lúng túng sai sót.

Tuy nhiên, khi chạm vào lòng tốt ấm áp của người dân bản xứ, chủ động tham gia vào cộng đồng địa phương để trao đổi ý kiến, sự hứng thú và thấu hiểu đối với nền văn hóa khác đã ngày càng sâu sắc. Nhờ trang bị được lối tư duy linh hoạt rằng "chân lý của sự việc không chỉ có một", tấm lòng rộng mở nhìn nhận sự vật dưới nhiều góc độ thành ra đã được bồi đắp.

Bằng việc dũng cảm cất bước tiến vào thế giới chưa biết, con người mới có thể vượt qua những giới hạn của bản thân và trưởng thành thành một con người có thể cảm nhận được sự phong phú đích thực của cuộc sống.`,
      vocabFocus: ['さ (độ / mức độ)', '興味 (hứng thú)', '満足 (hài lòng)', '不安 (bất an)', '意見 (ý kiến)', '改善 (cải thiện)'],
      grammarFocus: ['〜たとたん（に） (vừa mới... thì ngay lập tức)', '〜に関して (liên quan đến / về vấn đề)'],
      questions: [
        {
          id: 'n3-l5-r5-q1',
          question: '異文化圏で暮らし始めた人が最初に直面しやすい現実として書かれているのは何ですか。(Hiện thực người bắt đầu sống ở xứ sở khác hay gặp đầu tiên là gì?)',
          options: [
            'お金が道に落ちていること',
            '母国で常識と信じていた価値観が全く通用しない現実',
            '誰も日本語を勉強していないこと',
            '食べ物がすべて甘すぎること',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 1 nêu: "日本で「常識」だと信じて疑わなかった価値観が、海外の環境では全く通用しない現実に直面し、最初は大きなカルチャーショックや不安を感じるのが常です。"',
        },
        {
          id: 'n3-l5-r5-q2',
          question: '留学生が空港に降り立ったとたん、何に圧倒されましたか。(Du học sinh bị choáng ngợp bởi điều gì ngay khi vừa hạ cánh xuống sân bay?)',
          options: [
            '空港の建物の高さ',
            '人々の多種多様な言語や振る舞いの自由さ（フランクさ）',
            '空港の警察官の銃',
            '飛行機のエンジンの音',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2 nêu: "初めて海外の空港に降り立ったとたん、行き交う人々の多種多様な言語や振る舞いの自由さ（フランクさ）に圧倒されました。"',
        },
        {
          id: 'n3-l5-r5-q3',
          question: '「自由さ（じゆうさ）」の「〜さ」の働きは何ですか。(Vai trò của "-sa" trong "自由さ" là gì?)',
          options: [
            'Chuyển tính từ 自由 thành danh từ chỉ mức độ tự do phóng khoáng',
            'Thể hiện lời cầu nguyện tự do',
            'Chỉ sự bất lực không thể tự do',
            'Chỉ một điều kiện bắt buộc',
          ],
          answerIndex: 0,
          explanation: 'Ngữ pháp N3: Tính từ + さ biến thành danh từ đo lường tính chất, mức độ (自由さ = độ tự do phóng khoáng).',
        },
        {
          id: 'n3-l5-r5-q4',
          question: '留学生が最初の１ヶ月に戸惑ったこととして何が挙げられていますか。(Điều du học sinh bỡ ngỡ trong tháng đầu là gì?)',
          options: [
            '朝起きる時間',
            'スーパーでの買い物の仕方や電車の乗り方に関して',
            'スマートフォンの充電方法',
            '靴の履き方',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 2: "スーパーでの買い物の仕方や電車の乗り方に関して戸惑うことばかりで、最初の１ヶ月は失敗の連続でした。"',
        },
        {
          id: 'n3-l5-r5-q5',
          question: '留学生が身につけた「柔軟な思考」とはどのような考え方ですか。(Lối tư duy linh hoạt mà du học sinh rèn luyện được là gì?)',
          options: [
            '自分の国のやり方が常に世界一正しいという考え',
            '物事の正しさは一つではないという考え方',
            'どんなルールも守らなくてよいという考え',
            '外国語は勉強しなくても通じるという考え',
          ],
          answerIndex: 1,
          explanation: 'Đoạn 3: "「物事の正しさは一つではない」という柔軟な思考を身につけたことで、物事を多角的に捉える心の広さが養われたわけです。"',
        },
        {
          id: 'n3-l5-r5-q6',
          question: 'この文章全体で筆者が最も主張したいことは何ですか。(Chủ trương lớn nhất của tác giả trong toàn bài là gì?)',
          options: [
            '海外旅行は危ないので絶対に行くべきではない',
            '未知の世界へ一歩を踏み出すことで自己の限界を超え、真の豊かさを持つ人間に成長できる',
            '外国に行ったら母国の文化をすべて捨て去るべきだ',
            '空港では誰とも話さずに過ごすべきだ',
          ],
          answerIndex: 1,
          explanation: 'Câu kết đoạn 4: "未知の世界へ勇気を出して一歩を踏み出すことによって、人は自己の限界を超え、真の豊かさを実感できる人間へと成長できるのです。"',
        },
      ],
    },
  ],
}

