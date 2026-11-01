const path = require('node:path');
const { Client } = require('pg');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const CULTURE_VOCABULARY = [
  // ==========================================
  // 1. ẨM THỰC NHẬT BẢN (Food & Dining Culture)
  // ==========================================
  {
    word: '和食',
    kana: 'わしょく',
    romaji: 'washoku',
    meaningVi: 'Ẩm thực truyền thống Nhật Bản',
    meaningEn: 'traditional Japanese cuisine (registered as UNESCO Intangible Cultural Heritage)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['văn hóa ẩm thực', 'truyền thống', 'đời sống'],
    notes: 'Washoku được UNESCO công nhận là Di sản văn hóa phi vật thể của nhân loại vào năm 2013. Tinh thần cốt lõi của Washoku dựa trên nguyên tắc "Một canh ba món" (一汁三菜 - ichiju-sansai), chú trọng sử dụng nguyên liệu theo đúng mùa ngon nhất (旬 - shun), nước dùng dashi tự nhiên từ cá ngừ bào và tảo bẹ, giúp tôn vinh hương vị thanh đạm nguyên bản mà không lạm dụng gia vị nhân tạo.',
    examples: [
      {
        jp: '和食はユネスコ無形文化遺産に登録されています。',
        kana: 'わしょくはゆねすこむけいぶんかいさんにとうろくされています。',
        vi: 'Washoku đã được UNESCO công nhận là Di sản văn hóa phi vật thể của nhân loại.',
      },
      {
        jp: '和食の基本は一汁三菜で、栄養のバランスがとても優れています。',
        kana: 'わしょくのきほんはいちじゅうさんさいで、えいようのばらんすがとてもすぐれています。',
        vi: 'Cơ bản của ẩm thực Washoku là cấu trúc một canh ba món, cân bằng dinh dưỡng rất tốt.',
      },
    ],
  },
  {
    word: '旬',
    kana: 'しゅん',
    romaji: 'shun',
    meaningVi: 'Mùa vụ ngon nhất',
    meaningEn: 'season (for food), peak of seasonality',
    wordType: 'noun',
    jlptLevel: 'N2',
    tags: ['văn hóa ẩm thực', 'bốn mùa', 'nguyên liệu'],
    notes: 'Trong văn hóa ẩm thực Nhật Bản, khái niệm "Shun" là linh hồn của sự tinh tế. Người Nhật chia mùa nguyên liệu thành ba giai đoạn: Hashiri (đầu mùa, vị thanh), Sakari/Shun (chính vụ, vị đậm đà và ngon nhất), và Nagori (cuối mùa, lưu luyến). Thưởng thức món ăn vào đúng mùa Shun không chỉ tốt cho sức khỏe mà còn là cách người Nhật bày tỏ lòng tri ân với sự hào phóng của thiên nhiên theo 4 mùa.',
    examples: [
      {
        jp: '秋は秋刀魚が一番脂が乗って旬の時期です。',
        kana: 'あきはさんまがいちばんあぶらがのってしゅんのじきです。',
        vi: 'Mùa thu là lúc cá thu đao béo ngậy và bước vào mùa vụ ngon nhất trong năm.',
      },
      {
        jp: '旬の野菜を食べると、季節の移り変わりを感じることができます。',
        kana: 'しゅんのやさいをたべると、きせつのうつりかわりをかんじることができます。',
        vi: 'Ăn rau củ đúng mùa giúp bạn cảm nhận rõ nét sự chuyển mình của thời tiết và đất trời.',
      },
    ],
  },
  {
    word: '一汁三菜',
    kana: 'いちじゅうさんさい',
    romaji: 'ichiju-sansai',
    meaningVi: 'Một canh ba món',
    meaningEn: 'traditional meal structure consisting of soup and three side dishes',
    wordType: 'noun',
    jlptLevel: 'N2',
    tags: ['văn hóa ẩm thực', 'dinh dưỡng', 'nghi thức bàn ăn'],
    notes: 'Bữa ăn bao gồm 1 bát cơm trắng (chủ thực), 1 bát súp miso hoặc canh trong (canh), 1 món chính giàu đạm (cá hoặc thịt), cùng 2 món phụ (rau củ hầm, đồ chua tsukemono). Quy tắc bài trí: cơm đặt bên trái, canh đặt bên phải, các món ăn đặt phía trên, đũa đặt ngang phía trước trên đồ gác đũa. Cấu trúc này giúp cân bằng dinh dưỡng hoàn hảo và tôn vinh lối sống lành mạnh của người Nhật.',
    examples: [
      {
        jp: '一汁三菜は、日本の伝統的な健康的な食事の基本形です。',
        kana: 'いちじゅうさんさいは、にほんのでんとうてきなけんこうてきなしょくじのきほんけいです。',
        vi: 'Một canh ba món là mô hình chuẩn mực truyền thống cho bữa ăn lành mạnh của người Nhật.',
      },
      {
        jp: '毎日の献立を一汁三菜にすることで、栄養の偏りを防ぐことができます。',
        kana: 'まいにちのこんだてをいちじゅうさんさいにすることで、えいようのかたよりをふせぐことができます。',
        vi: 'Lập thực đơn mỗi ngày theo chuẩn một canh ba món giúp ngăn ngừa mất cân bằng dinh dưỡng.',
      },
    ],
  },
  {
    word: '箸置き',
    kana: 'はしおき',
    romaji: 'hashioki',
    meaningVi: 'Đồ gác đũa',
    meaningEn: 'chopstick rest (small stand to keep chopsticks from touching the table)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['nghi thức bàn ăn', 'văn hóa ẩm thực', 'lịch sự'],
    notes: 'Trong văn hóa ẩm thực Nhật Bản, đặt đũa ngang trên miệng bát (gọi là 渡し箸 - watashibashi) bị xem là điều cấm kỵ, biểu thị sự bất lịch sự hoặc ngầm chê món ăn không ngon. Do đó, người Nhật luôn dùng "hashioki" để gác đũa ngay ngắn mỗi khi tạm dừng ăn hoặc trò chuyện. Tại các quán ăn bình dân nếu không có sẵn hashioki bằng gốm hay gỗ, thực khách thường khéo léo gấp bao giấy bọc đũa (hashi-bukuro) thành hình chiếc nơ nhỏ để làm đồ gác tạm thời.',
    examples: [
      {
        jp: '食事の合間には箸を箸置きに戻すのがマナーです。',
        kana: 'しょくじのあいまにははしをはしおきにもどすのがまなーです。',
        vi: 'Trong bữa ăn, gác đũa lại ngay ngắn lên đồ gác đũa khi tạm dừng là phép lịch sự cơ bản.',
      },
      {
        jp: '居酒屋に入ったら、箸袋を折って箸置きを作りました。',
        kana: 'いざかやにはいったら、はしぶくろをおってはしおきをつくりました。',
        vi: 'Khi vào quán nhậu, tôi đã gấp bao đũa giấy lại để làm đồ gác đũa tạm thời.',
      },
    ],
  },
  {
    word: 'だし',
    kana: 'だし',
    romaji: 'dashi',
    meaningVi: 'Nước dùng dashi',
    meaningEn: 'traditional Japanese soup stock made from kelp and bonito flakes',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['văn hóa ẩm thực', 'nguyên liệu', 'nấu ăn'],
    notes: 'Dashi là nền tảng cốt lõi của hơn 80% món ăn truyền thống Nhật Bản (từ súp miso, canh hầm nimono đến nước chấm soba). Dashi tinh khiết được nấu từ tảo bẹ Kombu giàu acid glutamic kết hợp với cá ngừ bào Katsuobushi giàu inosinate, tạo nên sự cộng hưởng vị ngọt thanh sâu lắng mà phương Tây gọi là "Umami" (vị ngon thứ năm bên cạnh ngọt, mặn, chua, đắng).',
    examples: [
      {
        jp: '昆布と鰹節から取った良質なだしが料理の味を決めます。',
        kana: 'こんぶとかつおぶしからとったりょうしつなだしがりょうりのあじをきめます。',
        vi: 'Nước dùng dashi chất lượng nấu từ tảo bẹ và cá ngừ bào quyết định độ ngon của món ăn.',
      },
      {
        jp: 'だしをしっかり取ることで、塩分を控えめにしても美味しく仕上がります。',
        kana: 'だしをしっかりとることで、えんぶんをひかえめにしてもおいしくしあがります。',
        vi: 'Nhờ nấu nước dùng dashi đậm đà, món ăn dù nêm ít muối vẫn giữ được hương vị thơm ngon.',
      },
    ],
  },
  {
    word: 'ごちそうさま',
    kana: 'ごちそうさま',
    romaji: 'gochisousama',
    meaningVi: 'Cảm ơn vì bữa ăn',
    meaningEn: 'thank you for the feast/meal (said after eating)',
    wordType: 'expression',
    jlptLevel: 'N5',
    tags: ['nghi thức bàn ăn', 'giao tiếp', 'lịch sự'],
    notes: 'Chữ Hán của từ này là ご馳走様 (Chi Tẩu Dạng). "Chi Tẩu" (馳走) nghĩa là chạy đôn chạy đáo khắp nơi. Câu nói mang ý nghĩa: "Xin cảm ơn vì người nấu và người nuôi trồng đã vất vả gom góp nguyên liệu để chuẩn bị cho tôi bữa ăn thịnh soạn này". Khi nói, người Nhật thường chắp hai tay trước ngực và cúi nhẹ đầu.',
    examples: [
      {
        jp: '食べ終わったら両手を合わせて「ごちそうさまでした」と言います。',
        kana: 'たべおわったらりょうてをあわせて「ごちそうさまでした」といいます。',
        vi: 'Sau khi ăn xong, hãy chắp hai tay lại và nói "Gochisousama deshita" để bày tỏ lòng cảm ơn.',
      },
      {
        jp: 'ごちそうさま、とても美味しいお料理でした。',
        kana: 'ごちそうさま、とてもおいしいおりょうりでした。',
        vi: 'Cảm ơn vì bữa ăn, đồ ăn thực sự rất ngon.',
      },
    ],
  },
  {
    word: 'いただきます',
    kana: 'いただきます',
    romaji: 'itadakimasu',
    meaningVi: 'Mời dùng bữa, xin phép ăn',
    meaningEn: 'humble phrase said before eating ("I gratefully receive this food")',
    wordType: 'expression',
    jlptLevel: 'N5',
    tags: ['nghi thức bàn ăn', 'giao tiếp', 'triết lý'],
    notes: 'Bắt nguồn từ động từ 頂く (itadaku - nhận lấy từ người trên hoặc đưa lên đỉnh đầu để tỏ lòng tôn kính). Người Nhật nói câu này để tạ ơn muôn loài sinh mạng (động thực vật) đã hy sinh để nuôi sống bản thân, đồng thời tri ân công sức của người nông dân và đầu bếp.',
    examples: [
      {
        jp: '食事の前には必ず手を合わせて「いただきます」と言いましょう。',
        kana: 'しょくじのまえにはかならずてをあわせて「いただきます」といいましょう。',
        vi: 'Trước bữa ăn, hãy luôn chắp tay lại và nói "Itadakimasu".',
      },
      {
        jp: '美味しそうな料理ですね、早速いただきます！',
        kana: 'おいしそうなりょうりですね、さっそくいただきます！',
        vi: 'Món ăn trông ngon quá, tôi xin phép ăn ngay đây!',
      },
    ],
  },
  {
    word: '居酒屋',
    kana: 'いざかや',
    romaji: 'izakaya',
    meaningVi: 'Quán nhậu truyền thống kiểu Nhật',
    meaningEn: 'Japanese-style pub / tavern for dining and drinking',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['văn hóa ẩm thực', 'giao lưu', 'đời sống'],
    notes: 'Izakaya xuất phát từ chữ 居 (ở lại) và 酒屋 (quán rượu), nghĩa là quán rượu mà khách có thể nán lại uống. Đây là không gian xả stress và gắn kết tình đồng nghiệp (nomikai) phổ biến nhất tại Nhật. Khi vừa ngồi vào bàn, khách sẽ được phục vụ một đĩa món khai vị nhỏ gọi là "otoushi" và mọi người thường đồng thanh hô "Kanpai!" với ly đồ uống đầu tiên.',
    examples: [
      {
        jp: '仕事帰りに同僚と駅前の居酒屋で一杯飲みました。',
        kana: 'しごとがえりにどうりょうとえきまえのいざかやでいっぱいのみました。',
        vi: 'Sau giờ tan sở, tôi cùng đồng nghiệp ghé quán nhậu trước ga uống một ly.',
      },
      {
        jp: '日本の居酒屋には焼き鳥や刺身など、美味しい料理がたくさんあります。',
        kana: 'にほんのいざかやにはやきとりやさしみなど、おいしいりょうりがたくさんあります。',
        vi: 'Tại các quán nhậu Nhật Bản có rất nhiều món ngon như gà nướng xiên yakitori và gỏi cá sống sashimi.',
      },
    ],
  },
  {
    word: '乾杯',
    kana: 'かんぱい',
    romaji: 'kanpai',
    meaningVi: 'Cạn ly, nâng ly chúc mừng',
    meaningEn: 'cheers! (toast before drinking)',
    wordType: 'noun',
    jlptLevel: 'N5',
    tags: ['tiệc tùng', 'giao tiếp', 'nghi thức'],
    notes: 'Chữ Hán là 乾 (Can - cạn) và 杯 (Bôi - chén rượu). Quy tắc trong tiệc rượu Nhật: mọi người phải đợi tất cả các thành viên trong bàn đều được rót đầy ly nước rồi mới cùng hô "Kanpai!", tuyệt đối không được tự ý uống trước. Trong quan hệ cấp trên cấp dưới, người có vai vế thấp hơn thường chủ động cụng ly ở vị trí thấp hơn miệng ly của người lớn tuổi hoặc cấp trên.',
    examples: [
      {
        jp: '全員のグラスにお酒が注がれてから、元気に乾杯しました。',
        kana: 'ぜんいんのぐらすにおさけがそそがれてから、げんきにかんぱいしました。',
        vi: 'Sau khi tất cả ly của mọi người được rót đầy rượu, chúng tôi cùng cạn ly thật hào hứng.',
      },
      {
        jp: 'プロジェクトの成功を祝って乾杯しましょう！',
        kana: 'ぷろじぇくとのせいこうをいわってかんぱいしましょう！',
        vi: 'Hãy cùng nâng ly chúc mừng cho sự thành công của dự án nào!',
      },
    ],
  },
  {
    word: '割り勘',
    kana: 'わりかん',
    romaji: 'warikan',
    meaningVi: 'Chia tiền đều nhau',
    meaningEn: 'splitting the bill / going Dutch',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['đời sống', 'tiền bạc', 'giao tiếp'],
    notes: 'Rút gọn từ cụm từ 割前勘定 (Warimae Kanjou). Tại Nhật Bản, kể cả bạn bè thân thiết hay đi hẹn hò, chia tiền sòng phẳng (warikan) là chuyện rất bình thường và văn minh, tránh gây áp lực hay nợ nần ân nghĩa cho người khác. Trong các buổi tiệc công ty (nomikai), cấp trên hoặc sếp thường trả phần nhiều hơn, phần còn lại mới chia đều cho cấp dưới.',
    examples: [
      {
        jp: '今日の飲み会のお会計は割り勘にしましょう。',
        kana: 'きょうののみかいのおかいけいはわりかんにしましょう。',
        vi: 'Hóa đơn buổi nhậu hôm nay chúng ta chia đều nhé.',
      },
      {
        jp: '日本では友達同士で食事をするとき、割り勘が一般的です。',
        kana: 'にほんではともだちどうしでしょくじをするとき、わりかんがいっぱんてきです。',
        vi: 'Ở Nhật Bản, khi bạn bè đi ăn cùng nhau thì chia đều tiền là điều phổ biến.',
      },
    ],
  },
  {
    word: 'お通し',
    kana: 'おとおし',
    romaji: 'otoushi',
    meaningVi: 'Món khai vị tính phí',
    meaningEn: 'small appetizer served automatically at izakaya (table charge)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['văn hóa ẩm thực', 'quán nhậu', 'phong tục'],
    notes: 'Khi bạn bước vào một quán nhậu Izakaya tại Nhật, nhân viên sẽ lập tức mang ra một món ăn nhỏ (như đậu edamame, củ cải hầm hay salad khoai tây). Đây được xem là lời chào mừng và xác nhận khách đã có chỗ ngồi (thay cho phí chỗ ngồi - cover charge). Món này thường có giá từ 300 - 500 yên và được cộng thẳng vào hóa đơn cuối cùng.',
    examples: [
      {
        jp: '居酒屋に入ると、席料として最初にお通しが出されます。',
        kana: 'いざかやにはいると、せきりょうとしてさいしょにおとおしがだされます。',
        vi: 'Khi vào quán nhậu, quán sẽ mang ra đĩa món khai vị otoushi đóng vai trò như phí chỗ ngồi.',
      },
      {
        jp: '今日のお通しは自家製のポテトサラダで、とても美味しかったです。',
        kana: 'きょうのおとおしはじかせいのぽてとさらだで、とてもおいしかったです。',
        vi: 'Món khai vị otoushi hôm nay là món salad khoai tây quán tự làm, ăn rất ngon.',
      },
    ],
  },
  {
    word: '麺',
    kana: 'めん',
    romaji: 'men',
    meaningVi: 'Mì, sợi mì',
    meaningEn: 'noodles (ramen, udon, soba)',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['văn hóa ẩm thực', 'món ăn bình dân'],
    notes: 'Khi ăn mì (đặc biệt là mì nóng ramen hay mì soba chan nước dùng), người Nhật có thói quen húp xì xụp (phát ra tiếng kêu "sulp"). Đây không phải là hành vi thô lỗ, mà ngược lại giúp đưa không khí vào cùng sợi mì để làm nguội bớt, đồng thời giải phóng tối đa hương thơm của nước dùng lên khứu giác, thể hiện lời khen món mì rất ngon.',
    examples: [
      {
        jp: 'ラーメンの麺を音を立ててすするのは、日本ではマナー違反ではありません。',
        kana: 'らーめんのめんをおとをたててすするのは、にほんではまなーいはんではありません。',
        vi: 'Húp sợi mì ramen xì xụp tạo ra tiếng kêu không bị xem là hành vi bất lịch sự ở Nhật Bản.',
      },
      {
        jp: 'この店の自家製麺はコシがあってスープによく絡みます。',
        kana: 'このみせのじかせいめんはこしがあってすーぷによくからみます。',
        vi: 'Sợi mì tự làm của quán này rất dai ngon và ngấm đều vị nước dùng súp.',
      },
    ],
  },
  {
    word: 'スープ',
    kana: 'すーぷ',
    romaji: 'suupu',
    meaningVi: 'Nước súp, nước dùng',
    meaningEn: 'soup / broth',
    wordType: 'noun',
    jlptLevel: 'N5',
    tags: ['văn hóa ẩm thực', 'món ăn'],
    notes: 'Trong tô mì ramen Nhật, nước súp được ví như "linh hồn" của người đầu bếp. Nước súp được chia thành nhiều dòng: Shoyu (xì dầu), Shio (muối biển), Miso (tương lên men) và Tonkotsu (xương heo hầm cô đặc), ninh liên tục từ 10 đến 24 giờ để đạt độ béo ngậy và vị ngọt đậm đà.',
    examples: [
      {
        jp: '濃厚な豚骨スープが細麺と絶妙にマッチしています。',
        kana: 'のうこうなとんこつすーぷがほそめんとぜつみょうにまっちしています。',
        vi: 'Nước súp xương heo đậm đà kết hợp hoàn hảo tuyệt vời với sợi mì mảnh.',
      },
      {
        jp: '熱いスープを一口飲むと、体の芯から温まります。',
        kana: 'あついすーぷをひとくちのむと、からだのしんからあたたまります。',
        vi: 'Uống một ngụm nước súp nóng hổi giúp sưởi ấm cơ thể từ tận bên trong.',
      },
    ],
  },

  // ==========================================
  // 2. TRANG PHỤC & PHONG CÁCH (Fashion & Attire)
  // ==========================================
  {
    word: '着物',
    kana: 'きもの',
    romaji: 'kimono',
    meaningVi: 'Áo kimono truyền thống',
    meaningEn: 'kimono, traditional Japanese silk garment',
    wordType: 'noun',
    jlptLevel: 'N5',
    tags: ['trang phục truyền thống', 'nghệ thuật', 'lễ nghi'],
    notes: 'Bắt nguồn từ 着 (mặc) và 物 (đồ vật), ban đầu chỉ y phục nói chung. Ngày nay, Kimono là quốc phục trang trọng bậc nhất, chủ yếu được mặc trong các dịp lễ tết trọng đại như Lễ trưởng thành (Seijin shiki), đám cưới truyền thống, lễ tốt nghiệp hoặc trà đạo. Khác với Yukata mỏng nhẹ mặc mùa hè, Kimono truyền thống thường may bằng lụa và có cấu trúc mặc nhiều lớp (kitsuke) vô cùng tỉ mỉ và trang nghiêm.',
    examples: [
      {
        jp: 'お正月や成人式には美しい着物を着る人が多いです。',
        kana: 'おしょうがつやせいじんしきにはうつくしいきものをきるひとがおおいです。',
        vi: 'Vào dịp Tết và Lễ trưởng thành, nhiều người mặc những bộ kimono lộng lẫy.',
      },
      {
        jp: '着物を一人で綺麗に着付けられるようになるには練習が必要です。',
        kana: 'きものをひとりできれいにきつけられるようになるにはれんしゅうがひつようです。',
        vi: 'Để có thể tự mình mặc kimono đẹp và ngay ngắn đòi hỏi phải luyện tập rất nhiều.',
      },
    ],
  },
  {
    word: '浴衣',
    kana: 'ゆかた',
    romaji: 'yukata',
    meaningVi: 'Áo yukata',
    meaningEn: 'yukata, casual summer cotton kimono',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['trang phục truyền thống', 'mùa hè', 'lễ hội'],
    notes: 'Xuất phát từ từ 湯帷子 (Yukabira - áo choàng mặc khi tắm hơi của giới quý tộc thời Heian). Ngày nay, Yukata là trang phục mùa hè không thể thiếu của giới trẻ Nhật khi dạo bước ngắm pháo hoa (hanabi) hay tham gia các lễ hội mùa hè (matsuri). Yukata dễ mặc hơn Kimono rất nhiều, chỉ cần khoác một lớp và thắt đai hanhaba obi đơn giản.',
    examples: [
      {
        jp: '夏の夜、色とりどりの浴衣を着て花火大会に出かけました。',
        kana: 'なつのよる、いろとりどりのゆかたをきてはなびたいかいにでかけました。',
        vi: 'Vào một đêm hè, chúng tôi mặc những bộ yukata rực rỡ sắc màu đi xem lễ hội pháo hoa.',
      },
      {
        jp: '温泉旅館に泊まると、館内で過ごすための浴衣が用意されています。',
        kana: 'おんせんりょかんにとまると、かんないですごすためのゆかたがよういされています。',
        vi: 'Khi nghỉ chân tại lữ quán suối nước nóng, du khách sẽ được chuẩn bị sẵn áo yukata để mặc thư giãn.',
      },
    ],
  },
  {
    word: '帯',
    kana: 'おび',
    romaji: 'obi',
    meaningVi: 'Đai thắt lưng kimono',
    meaningEn: 'obi, traditional sash / belt for kimono and yukata',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['trang phục truyền thống', 'thẩm mỹ', 'phụ kiện'],
    notes: 'Đai Obi được xem là linh hồn quyết định vẻ đẹp và độ sang trọng của bộ Kimono. Có rất nhiều kiểu thắt obi tùy theo độ tuổi và hoàn cảnh: thắt nơ bướm (cho thiếu nữ trẻ trung), thắt nút taiko otaiko (cho phụ nữ đã lập gia đình, mang vẻ đẹp trang nhã quý phái). Bản thân chiếc đai obi thường được dệt gấm Nishijin quý giá như một tác phẩm hội họa độc lập.',
    examples: [
      {
        jp: '着物の柄に合わせて、華やかな帯を選びました。',
        kana: 'きもののがらにあわせて、はなやかなおびをえらびました。',
        vi: 'Tôi đã chọn một chiếc đai obi rực rỡ để phối hài hòa với hoa văn của bộ kimono.',
      },
      {
        jp: '帯をきつく締めすぎると苦しくなるので、適度な加減が大切です。',
        kana: 'おびをきつくしめすぎるとくるしくなるので、てきどなかげんがたいせつです。',
        vi: 'Thắt đai obi quá chặt sẽ khiến bạn khó thở, nên việc điều chỉnh độ vừa vặn là rất quan trọng.',
      },
    ],
  },
  {
    word: '和服',
    kana: 'わふく',
    romaji: 'wafuku',
    meaningVi: 'Trang phục truyền thống Nhật Bản',
    meaningEn: 'Japanese-style clothing (contrast with western clothing)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['trang phục truyền thống', 'thuật ngữ'],
    notes: 'Từ thời kỳ Minh Trị duy tân, khi trang phục phương Tây (洋服 - Yofuku) du nhập ồ ạt vào Nhật Bản, người Nhật đã đặt ra từ "Wafuku" (Hòa phục) để chỉ chung tất cả các loại trang phục may theo phong cách truyền thống Nhật Bản (bao gồm kimono, yukata, hakama, haori, jinbei...).',
    examples: [
      {
        jp: '京都の古い町並みには、和服姿の観光客がよく似合います。',
        kana: 'きょうとのふるいまちなみには、わふくすがたのかんこうきゃくがよくにあいます。',
        vi: 'Khung cảnh phố cổ Kyoto rất tôn vẻ đẹp của những du khách khoác trên mình trang phục truyền thống Wafuku.',
      },
      {
        jp: '祖母は特別な行事がある日には必ず和服を着て出かけます。',
        kana: 'そぼはとくべつなぎょうじがあるひにはかならずわふくをきてでかけます。',
        vi: 'Bà tôi mỗi khi có dịp lễ hội đặc biệt đều luôn diện đồ truyền thống Nhật Bản.',
      },
    ],
  },
  {
    word: 'おしゃれ',
    kana: 'おしゃれ',
    romaji: 'oshare',
    meaningVi: 'Sành điệu, thời trang',
    meaningEn: 'fashionable, stylish, well-dressed',
    wordType: 'na-adjective',
    jlptLevel: 'N4',
    tags: ['thời trang', 'phong cách', 'khen ngợi'],
    notes: 'Người Nhật dùng "Oshare" như một lời khen ngợi rất phổ biến về gu ăn mặc tinh tế, sự gọn gàng và cá tính thẩm mỹ của một người hoặc cách bài trí của một quán cà phê, cửa hàng. Đây là từ biểu thị sự chăm chút cho bản thân để tạo cảm giác dễ chịu cho người xung quanh.',
    examples: [
      {
        jp: '彼女はいつも流行を取り入れたおしゃれな服を着ています。',
        kana: 'かのじょはいつもりゅうこうをとりいれたおしゃれなふくをきています。',
        vi: 'Cô ấy lúc nào cũng mặc những bộ trang phục sành điệu bắt kịp xu hướng thời trang mới nhất.',
      },
      {
        jp: '原宿にはおしゃれな若者や個性的な古着屋が集まっています。',
        kana: 'はらじゅくにはおしゃれなわかものやこせいてきなふるぎやがあつまっています。',
        vi: 'Harajuku là nơi tụ hội của những bạn trẻ sành điệu và những tiệm đồ vintage độc đáo.',
      },
    ],
  },
  {
    word: '花火',
    kana: 'はなび',
    romaji: 'hanabi',
    meaningVi: 'Pháo hoa',
    meaningEn: 'fireworks',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['lễ hội', 'mùa hè', 'văn hóa'],
    notes: 'Chữ Hán là 花 (Hoa) và 火 (Lửa), nghĩa là "bông hoa bằng lửa". Lễ hội pháo hoa (Hanabi Taikai) có lịch sử hàng trăm năm từ thời Edo, ban đầu được tổ chức nhằm xua đuổi tà ma và cầu siêu cho các nạn nhân qua đời vì dịch bệnh. Ngày nay, việc mặc áo yukata đi dạo ngắm pháo hoa bên bờ sông là trải nghiệm lãng mạn kinh điển của người Nhật mỗi độ hè về.',
    examples: [
      {
        jp: '川沿いで夜空いっぱいに打ち上げられる大きな花火を見上げました。',
        kana: 'かわぞいでよぞらいっぱいにうちあげられるおおきなはなびをみあげました。',
        vi: 'Chúng tôi đứng ven bờ sông ngước nhìn những chùm pháo hoa rực sáng lung linh khắp bầu trời đêm.',
      },
      {
        jp: '日本の花火は真円に広がる技術が世界中で高く評価されています。',
        kana: 'にほんのはなびはしんえんにひろがるぎじゅつがせかいじゅうでたかくひょうかされています。',
        vi: 'Kỹ thuật bắn pháo hoa nở bung thành hình tròn hoàn hảo của Nhật Bản được thế giới đánh giá rất cao.',
      },
    ],
  },

  // ==========================================
  // 3. TÌM VIỆC & CÔNG SỞ (Job Hunting & Business Culture)
  // ==========================================
  {
    word: '就活',
    kana: 'しゅうかつ',
    romaji: 'shuukatsu',
    meaningVi: 'Tìm kiếm việc làm',
    meaningEn: 'job hunting (especially for new graduates in Japan)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['tìm việc', 'công sở', 'sinh viên'],
    notes: 'Viết tắt từ 就職活動 (Shuushoku Katsudou). Đây là một cột mốc trọng đại mang tính bước ngoặt đời người tại Nhật Bản. Sinh viên đại học thường bắt đầu tìm việc đồng loạt từ năm thứ ba: tham dự hội thảo doanh nghiệp (setsumeikai), làm bài thi năng lực SPI, nộp hồ sơ tự ứng tuyển (Entry Sheet), và trải qua 3-5 vòng phỏng vấn gắt gao để nhận được quyết định tuyển dụng trước khi tốt nghiệp.',
    examples: [
      {
        jp: '大学３年生の秋から本格的な就活がスタートします。',
        kana: 'だいがくさんねんせいのあきからほんかくてきなしゅうかつがすたーとします。',
        vi: 'Từ mùa thu năm thứ 3 đại học, kỳ tìm việc làm chính thức bắt đầu khởi động.',
      },
      {
        jp: '黒いリクルートスーツを着て就活の説明会に参加しました。',
        kana: 'くろいりくるーとすーつをきてしゅうかつのせつめいかいにさんかしました。',
        vi: 'Tôi mặc bộ vest tuyển dụng màu đen trang trọng để tham dự buổi hội thảo giới thiệu doanh nghiệp.',
      },
    ],
  },
  {
    word: '身だしなみ',
    kana: 'みだしなみ',
    romaji: 'midashinami',
    meaningVi: 'Tác phong chỉn chu',
    meaningEn: 'personal grooming, neat appearance',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['tác phong', 'công sở', 'lịch sự'],
    notes: 'Người Nhật phân biệt rạch ròi giữa "Thời trang" (おしゃれ - vì bản thân) và "Tác phong diện mạo" (身だしなみ - vì người đối diện). Trong môi trường công sở và phỏng vấn tại Nhật, diện mạo chỉn chu (đầu tóc gọn gàng, cà vạt ngay ngắn, giày tây đánh bóng, trang phục không nhăn) được xem là thước đo tinh thần trách nhiệm và lòng tôn trọng khách hàng.',
    examples: [
      {
        jp: '面接の前には鏡を見て身だしなみをしっかり整えましょう。',
        kana: 'めんせつのまえにはかがみをみてみだしなみをしっかりととのえましょう。',
        vi: 'Trước khi bước vào phòng phỏng vấn, hãy soi gương để chỉnh trang lại tác phong diện mạo thật ngay ngắn.',
      },
      {
        jp: '社会人として清潔感のある身だしなみを保つことは基本のマナーです。',
        kana: 'しゃかいじんとしてせいけつかんのあるみだしなみをたもつことはきほんのまなーです。',
        vi: 'Là một người đi làm chuyên nghiệp, duy trì diện mạo gọn gàng sạch sẽ là phép lịch sự cơ bản.',
      },
    ],
  },
  {
    word: '面接',
    kana: 'めんせつ',
    romaji: 'mensetsu',
    meaningVi: 'Phỏng vấn',
    meaningEn: 'interview (job, school)',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['tìm việc', 'công sở', 'giao tiếp'],
    notes: 'Quy trình phỏng vấn tại công ty Nhật tuân thủ lễ nghi rất nghiêm ngặt: gõ cửa 3 tiếng (knocking), chờ mời "Douzo" mới bước vào phòng, nói "Shitsurei shimasu" và cúi chào 30 độ, đứng cạnh ghế chờ được mời ngồi rồi mới ngồi thẳng lưng, hai tay đặt ngay ngắn trên đùi.',
    examples: [
      {
        jp: '明日は第一志望の企業の最終面接なのでとても緊張しています。',
        kana: 'あすはだいいちしぼうのきぎょうのさいしゅうめんせつなのでとてもきんちょうしています。',
        vi: 'Ngày mai là vòng phỏng vấn cuối cùng của công ty nguyện vọng một nên tôi cảm thấy khá hồi hộp.',
      },
      {
        jp: '面接官の目を見て、はっきりとした声で自己PRを話しました。',
        kana: 'めんせつかんのめをみて、はっきりとしたこえでじこぴーあーるをはなしました。',
        vi: 'Nhìn thẳng vào mắt người phỏng vấn, tôi tự tin trình bày điểm mạnh của bản thân bằng giọng nói rõ ràng.',
      },
    ],
  },
  {
    word: '履歴書',
    kana: 'りれきしょ',
    romaji: 'rirekisho',
    meaningVi: 'Sơ yếu lý lịch',
    meaningEn: 'resume, curriculum vitae (CV)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['tìm việc', 'hồ sơ', 'văn phòng'],
    notes: 'Tại Nhật Bản, bản lý lịch Rirekisho có mẫu chuẩn riêng (JIS standard). Khi viết tay bằng bút mực đen, tuyệt đối không được gạch xóa hay dùng bút xóa (nếu viết sai một chữ phải viết lại từ đầu để thể hiện sự tôn trọng tuyệt đối). Ảnh thẻ dán trên sơ yếu lý lịch phải mặc vest đen, chụp chuyên nghiệp trên phông nền sáng.',
    examples: [
      {
        jp: '丁寧に手書きで作成した履歴書を企業に郵送しました。',
        kana: 'ていねいにてがきでさくせいしたりれきしょをきぎょうにゆうそうしました。',
        vi: 'Tôi đã gửi bưu điện bộ hồ sơ sơ yếu lý lịch được viết tay nắn nót chỉn chu tới doanh nghiệp.',
      },
      {
        jp: '履歴書の志望動機の欄には、なぜこの会社で働きたいかを具体的に書きます。',
        kana: 'りれきしょのしぼうどうきのらんには、なぜこのかいしゃではたらきたいかをぐたいてきにかきます。',
        vi: 'Ở mục lý do ứng tuyển trong sơ yếu lý lịch, hãy nêu cụ thể vì sao bạn mong muốn cống hiến cho công ty này.',
      },
    ],
  },
  {
    word: '清潔感',
    kana: 'せいけつかん',
    romaji: 'seiketsukan',
    meaningVi: 'Cảm giác sạch sẽ',
    meaningEn: 'sense of cleanliness, fresh and neat look',
    wordType: 'noun',
    jlptLevel: 'N2',
    tags: ['tác phong', 'ấn tượng', 'giao tiếp'],
    notes: 'Trong xã hội Nhật Bản, "Seiketsukan" là tiêu chí số một quyết định thiện cảm trong cả công việc lẫn tình cảm. Nó không chỉ đơn thuần là cơ thể không bị bẩn, mà là cảm giác dễ chịu người khác cảm nhận được từ bạn: mái tóc cắt tỉa gọn gàng, móng tay cắt ngắn sạch sẽ, áo sơ mi ủi phẳng phiu và không có mùi khó chịu.',
    examples: [
      {
        jp: 'ビジネスの第一印象において、清潔感は最も重視される要素の一つです。',
        kana: 'びじねすのだいいちいんしょうにおいて、せいけつかんはもっともじゅうしされるようそのひとつです。',
        vi: 'Trong ấn tượng đầu tiên khi làm ăn kinh doanh, cảm giác sạch sẽ chỉn chu là một trong những yếu tố được xem trọng nhất.',
      },
      {
        jp: '白いシャツを着るだけで、相手に清潔感を与えることができます。',
        kana: 'しろいしゃつをきるだけで、あいてにせいけつかんをあたえることができます。',
        vi: 'Chỉ cần mặc một chiếc áo sơ mi trắng tinh tươm là bạn đã tạo được ấn tượng sạch sẽ, tin cậy cho người đối diện.',
      },
    ],
  },
  {
    word: '内定',
    kana: 'ないてい',
    romaji: 'naitei',
    meaningVi: 'Quyết định trúng tuyển',
    meaningEn: 'official job offer (prior to graduation)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['tìm việc', 'thành công', 'doanh nghiệp'],
    notes: 'Thuật ngữ đặc thù trong văn hóa tuyển dụng Nhật Bản. Doanh nghiệp ký kết thỏa thuận ngầm sẽ nhận sinh viên vào làm việc chính thức vào ngày 1 tháng 4 của năm sau. Lễ trao giấy trúng tuyển (Naiteishiki - 内定式) thường được các tập đoàn lớn tổ chức đồng loạt vào đầu tháng 10 hàng năm.',
    examples: [
      {
        jp: '苦労して就活を続けた結果、希望の大手企業から内定をもらいました。',
        kana: 'くろうしてしゅうかつをつづけたけっか、きぼうのおおてきぎょうからないていをもらいました。',
        vi: 'Sau chuỗi ngày kiên trì nỗ lực tìm việc, tôi đã nhận được quyết định trúng tuyển chính thức từ tập đoàn lớn mà mình hằng mơ ước.',
      },
      {
        jp: '１０月１日に開催される内定式に出席する予定です。',
        kana: 'じゅうがつついたちにかいさいされるないていしきにしゅっせきするよていです。',
        vi: 'Tôi dự định sẽ tham dự lễ trao quyết định trúng tuyển Naiteishiki được tổ chức vào ngày 1 tháng 10.',
      },
    ],
  },

  // ==========================================
  // 4. LỄ HỘI & TÂM LINH (Festivals & Community)
  // ==========================================
  {
    word: '祭り',
    kana: 'まつり',
    romaji: 'matsuri',
    meaningVi: 'Lễ hội truyền thống',
    meaningEn: 'traditional festival / celebration',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['lễ hội', 'truyền thống', 'cộng đồng'],
    notes: 'Bắt nguồn từ động từ 祀る (Matsuru - cúng tế, dâng lễ vật lên các vị thần Shinto). Hầu hết các lễ hội tại Nhật đều gắn liền với đền thần địa phương nhằm tạ ơn vụ mùa bội thu hoặc cầu bình an. Trong lễ hội, mọi người cùng mặc áo happi, nhảy múa điệu dân gian, thưởng thức món ngon tại các gian hàng yatai.',
    examples: [
      {
        jp: '夏になると全国各地の神社で賑やかな祭りが開かれます。',
        kana: 'なつになるとぜんこくかくちのじんじゃでにぎやかなまつりがひらかれます。',
        vi: 'Mỗi khi hè về, khắp các đền thờ trên toàn nước Nhật đều tưng bừng mở những lễ hội náo nhiệt.',
      },
      {
        jp: '町の人々が一体となって祭りのお神輿を担ぎました。',
        kana: 'まちのひとびとがいったいとなってまつりのおみこしをかつぎました。',
        vi: 'Người dân trong khu phố đã đồng lòng hợp lực khiêng chiếc kiệu rước thần thiêng liêng của lễ hội.',
      },
    ],
  },
  {
    word: '神社',
    kana: 'じんじゃ',
    romaji: 'jinja',
    meaningVi: 'Đền Thần đạo',
    meaningEn: 'Shinto shrine',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['tâm linh', 'thần đạo', 'văn hóa'],
    notes: 'Đền Thần đạo (Jinja) phân biệt với Chùa Phật giáo (Tera) qua cổng đỏ Torii sừng sững ở lối vào. Trước khi vào lễ, du khách phải thanh tẩy tay và miệng tại bể nước Temizuya. Nghi thức cầu nguyện chuẩn tại đền là: "2 lần cúi đầu, 2 lần vỗ tay, 1 lần cúi đầu" (二礼二拍手一礼 - Ni-rei, ni-hakushu, ichi-rei).',
    examples: [
      {
        jp: '鳥居をくぐる前に立ち止まり、神社に向かって一礼します。',
        kana: 'とりいをくぐるまえにたちどまり、じんじゃにむかっていちれいします。',
        vi: 'Trước khi bước qua cổng Torii, hãy dừng chân và cúi đầu chào hướng về phía đền thờ thần.',
      },
      {
        jp: 'お正月の初詣には家族みんなで地元の神社へお参りに行きます。',
        kana: 'おしょうがつのはつもうでにはかぞくみんなでじもとのじんじゃへおまいりにいきます。',
        vi: 'Vào dịp lễ đầu năm Hatsumode, cả gia đình tôi cùng nhau đi viếng ngôi đền thần trong khu phố.',
      },
    ],
  },
  {
    word: '神輿',
    kana: 'みこし',
    romaji: 'mikoshi',
    meaningVi: 'Kiệu thần',
    meaningEn: 'portable Shinto shrine (carried during festivals)',
    wordType: 'noun',
    jlptLevel: 'N2',
    tags: ['lễ hội', 'truyền thống', 'tâm linh'],
    notes: 'Mikoshi là biểu tượng hào hùng nhất của các lễ hội Nhật Bản. Hàng chục thanh niên trai tráng mặc áo happi cùng nhau khiêng cỗ kiệu nặng hàng trăm kg trên vai, vừa đi vừa hô vang khẩu hiệu tiếp sức nhịp nhàng "Wasshoi, wasshoi!" để tạo khí thế hừng hực và gắn kết tinh thần đoàn kết.',
    examples: [
      {
        jp: '男たちが「ワッショイ」と威勢のいい掛け声を合わせながら神輿を担ぎます。',
        kana: 'おとこたちが「わっしょい」といせいのいいかけごえをあわせながらみこしをかつぎます。',
        vi: 'Những chàng trai hòa vang tiếng hô dũng mãnh "Wasshoi" khi cùng khiêng cỗ kiệu thần uy nghi.',
      },
      {
        jp: '黄金に輝く豪華なお神輿が町中を練り歩きました。',
        kana: 'おうごんにかがやくごうかなおみこしがまちじゅうをねりあるきました。',
        vi: 'Cỗ kiệu thần thếp vàng lộng lẫy được rước đi diễu hành khắp các nẻo đường trong thị trấn.',
      },
    ],
  },
  {
    word: '太鼓',
    kana: 'たいこ',
    romaji: 'taiko',
    meaningVi: 'Trống truyền thống',
    meaningEn: 'traditional Japanese drum',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['âm nhạc', 'truyền thống', 'lễ hội'],
    notes: 'Tiếng trống Wadaiko vang dội như nhịp đập của trái tim đất mẹ, thời xưa được dùng để xua đuổi sâu bệnh hại mùa màng hoặc phát hiệu lệnh chiến trận. Trong các đêm hội Bon Odori, tay trống đứng trên chòi cao Yagura đánh trống giữ nhịp cho hàng trăm người dân vui bước nhảy múa theo vòng tròn.',
    examples: [
      {
        jp: '力強い和太鼓の重低音が胸の奥深くまで響き渡りました。',
        kana: 'ちからづよいわだいこのじゅうていおんがむねのおくふかくまでひびきわたるとおりました。',
        vi: 'Âm thanh trầm hùng vang dội của dàn trống Taiko rung chuyển chạm tới tận sâu thẳm lồng ngực.',
      },
      {
        jp: 'お祭りの夜、櫓の上で叩かれる太鼓のリズムに合わせて盆踊りを踊りました。',
        kana: 'おまつりのよる、やぐらのうえでたたかれるたいこのりずむにあわせてぼんおどりををおどりました。',
        vi: 'Trong đêm hội, chúng tôi hòa vào điệu múa Bon Odori theo nhịp trống vang dội từ trên đài chòi cao.',
      },
    ],
  },
  {
    word: '屋台',
    kana: 'やたい',
    romaji: 'yatai',
    meaningVi: 'Quầy ăn đường phố',
    meaningEn: 'food stall / street stand',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['ẩm thực đường phố', 'lễ hội', 'đời sống'],
    notes: 'Lễ hội Nhật Bản sẽ không trọn vẹn nếu thiếu các dãy quầy Yatai rực rỡ ánh đèn lồng. Đây là nơi bạn có thể thưởng thức những món ăn đường phố nóng hổi như bánh bạch tuộc takoyaki, mì xào yakisoba, thịt xiên nướng, kẹo bông gòn hay trò chơi vớt cá vàng goldfish scooping.',
    examples: [
      {
        jp: '参道に並んだ屋台で、焼きたてのたこ焼きとかき氷を買いました。',
        kana: 'さんどうにならんだやたいで、やきたてのたこやきとかきごおりをかいました。',
        vi: 'Tại các quầy yatai san sát ven lối vào đền, tôi đã mua món bánh bạch tuộc nóng hổi và bát đá bào mát lạnh.',
      },
      {
        jp: '祭りの屋台から漂ってくる香ばしいソースの匂いが食欲をそそります。',
        kana: 'まつりのやたいからただよってくるこうばしいそーすのにおいがしょくよくをそそります。',
        vi: 'Mùi nước sốt thơm lừng tỏa ra từ những quầy hàng yatai khiến bất kỳ ai cũng phải thèm thuồng.',
      },
    ],
  },
  {
    word: '絆',
    kana: 'きずな',
    romaji: 'kizuna',
    meaningVi: 'Tình gắn kết, keo sơn',
    meaningEn: 'bonds of friendship / emotional ties',
    wordType: 'noun',
    jlptLevel: 'N2',
    tags: ['triết lý', 'tình cảm', 'cộng đồng'],
    notes: 'Ban đầu từ này chỉ sợi dây buộc ngựa với cọc. Sau thảm họa động đất sóng thần Tohoku năm 2011, chữ "Kizuna" được bình chọn là Chữ Hán tiêu biểu của năm, tượng trưng cho tình đoàn kết kiên cường, sự tương thân tương ái giữa người dân trên khắp nước Nhật và thế giới để cùng nhau vượt qua nghịch cảnh.',
    examples: [
      {
        jp: '困難を共に乗り越えることで、仲間との絆がさらに深まりました。',
        kana: 'こんなんをともにのりこえることで、なかまとのきずながさらにふかまりました。',
        vi: 'Nhờ cùng nhau kề vai sát cánh vượt qua khó khăn, mối gắn kết keo sơn giữa chúng tôi càng thêm bền chặt.',
      },
      {
        jp: '地域のお祭りは、世代を超えて人と人との温かい絆を結ぶ場です。',
        kana: 'ちいきのおまつりは、せだいをおえてひととひととのあたたかいきずなをむすぶばです。',
        vi: 'Lễ hội địa phương là nơi bắc nhịp cầu gắn kết tình nghĩa ấm áp giữa người với người qua nhiều thế hệ.',
      },
    ],
  },

  // ==========================================
  // 5. NGHỆ THUẬT HIẾU KHÁCH & LỄ NGHI (Hospitality & Etiquette)
  // ==========================================
  {
    word: 'おもてなし',
    kana: 'おもてなし',
    romaji: 'omotenashi',
    meaningVi: 'Tinh thần hiếu khách tận tâm',
    meaningEn: 'Japanese hospitality, selfless and thoughtful reception',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['hiếu khách', 'triết lý', 'dịch vụ'],
    notes: 'Bắt nguồn sâu xa từ triết lý Trà đạo của thiền sư Sen no Rikyu với quan niệm "Nhất kỳ nhất hội" (一期一会 - Ichigo ichie: trân quý từng khoảnh khắc gặp gỡ vì có thể không bao giờ lặp lại). "Omotenashi" không đơn thuần là dịch vụ khách hàng (service), mà là sự tiếp đãi vô điều kiện, không kỳ vọng tiền tip hay trả ơn, thể hiện qua từng cử chỉ chăm sóc tỉ mỉ tại các lữ quán Ryokan, nhà hàng truyền thống hay ga tàu Nhật Bản.',
    examples: [
      {
        jp: '旅館の女将さんの温かいおもてなしに心から感動しました。',
        kana: 'りょかんのおかみさんのあたたかいおもてなしにこころからかんどうしました。',
        vi: 'Tôi đã thực sự xúc động trước lòng hiếu khách ấm áp của bà chủ lữ quán Ryokan.',
      },
      {
        jp: '日本のサービスには、相手を思いやる「おもてなし」の精神が息づいています。',
        kana: 'にほんのさーびすには、あいてをおもいやる「おもてなし」のせいしんがいきづいています。',
        vi: 'Trong ngành dịch vụ Nhật Bản, tinh thần hiếu khách chu đáo "omotenashi" luôn hiện diện sâu sắc.',
      },
    ],
  },
  {
    word: '一期一会',
    kana: 'いちごいちえ',
    romaji: 'ichigo-ichie',
    meaningVi: 'Nhất kỳ nhất hội',
    meaningEn: 'once-in-a-lifetime encounter / treasure every meeting',
    wordType: 'noun',
    jlptLevel: 'N1',
    tags: ['thành ngữ', 'triết lý', 'trà đạo'],
    notes: 'Xuất phát từ bậc thầy Trà đạo Yamanoue Souji: "Dù cùng chủ cùng khách ngồi thưởng trà trong căn phòng quen thuộc, buổi tao ngộ hôm nay sẽ không bao giờ tái hiện lại y nguyên". Do đó, hãy dốc hết tấm chân tình để tiếp đãi đối phương, sống trọn vẹn trong phút giây hiện tại.',
    examples: [
      {
        jp: '旅先で出会った人々との縁を「一期一会」として大切にしています。',
        kana: 'たびさきでであったひとびととのえんを「いちごいちえ」としてたいせつにしています。',
        vi: 'Tôi luôn trân quý nhân duyên gặp gỡ với những con người trên bước đường du lịch như một cuộc hội ngộ duy nhất trong đời.',
      },
      {
        jp: 'どんな出会いも一期一会の気持ちで、誠心誠意向き合いたいと思います。',
        kana: 'どんなであいもいちごいちえのきもちで、せいしんせいいむきあいたいとおもいます。',
        vi: 'Dù là cuộc gặp gỡ nào, tôi cũng mong muốn đối đãi bằng tất cả tấm lòng chân thành nhất.',
      },
    ],
  },
  {
    word: 'おしぼり',
    kana: 'おしぼり',
    romaji: 'oshibori',
    meaningVi: 'Khăn ướt lau tay',
    meaningEn: 'wet towel given to customers before a meal',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['hiếu khách', 'dịch vụ', 'ẩm thực'],
    notes: 'Chữ xuất phát từ động từ 絞る (Shiboru - vắt khô). Phong tục này có từ thời Edo khi các quán trà ven đường chuẩn bị thùng nước và khăn sạch cho lữ khách đường xa lau sạch bụi bẩn trên tay và mặt. Quy tắc lịch sự: chỉ dùng oshibori để lau tay, tránh dùng để lau mặt hoặc bàn ăn.',
    examples: [
      {
        jp: '冬の寒い日に席に着くと、温かいおしぼりを出してくれました。',
        kana: 'ふゆのさむいひにせきにつくと、あたたかいおしぼりをだしてくれました。',
        vi: 'Vào một ngày đông giá rét khi vừa ngồi vào bàn, nhân viên đã mang ra chiếc khăn ướt ấm áp dễ chịu.',
      },
      {
        jp: '食事の前にまずはおしぼりで両手を綺麗に拭きます。',
        kana: 'しょくじのまえにまずはおしぼりでりょうてをきれいにふきます。',
        vi: 'Trước khi bắt đầu dùng bữa, trước tiên hãy dùng khăn ướt lau sạch hai bàn tay.',
      },
    ],
  },
  {
    word: '配慮',
    kana: 'はいりょ',
    romaji: 'hairyo',
    meaningVi: 'Sự quan tâm chu đáo',
    meaningEn: 'thoughtful consideration, concern for others',
    wordType: 'noun',
    jlptLevel: 'N2',
    tags: ['ứng xử', 'giao tiếp', 'tinh tế'],
    notes: 'Văn hóa Nhật Bản rất coi trọng "Omoiyari" và "Hairyo" - khả năng đặt mình vào vị trí của đối phương để hành động. Ví dụ: tài xế xe buýt hạ sàn xe cho người già bước lên dễ dàng, nhân viên bọc thêm túi nilon chống ướt cho túi giấy khi trời mưa to.',
    examples: [
      {
        jp: '周りの人々に迷惑をかけないよう、細やかな配慮が求められます。',
        kana: 'まわりのひとびとにめいわくをかけないよう、こまやかなはいりょがもとめられます。',
        vi: 'Để không gây phiền hà cho những người xung quanh, mỗi người đều cần có sự quan sát và quan tâm tinh tế.',
      },
      {
        jp: '車椅子の利用者に配慮したバリアフリーの施設が増えています。',
        kana: 'くるまいすのりようしゃにはいりょしたばりあふりーのしせつがふえています。',
        vi: 'Ngày càng có nhiều công trình công cộng không rào cản được thiết kế chu đáo dành cho người sử dụng xe lăn.',
      },
    ],
  },
  {
    word: '丁寧',
    kana: 'ていねい',
    romaji: 'teinei',
    meaningVi: 'Lịch thiệp, cẩn thận',
    meaningEn: 'polite, courteous, careful, meticulous',
    wordType: 'na-adjective',
    jlptLevel: 'N4',
    tags: ['thái độ', 'lịch sự', 'giao tiếp'],
    notes: 'Từ ghép từ 丁 và 寧 (vốn là hai loại chuông đồng thời xưa gióng lên nhịp nhàng cẩn trọng). Người Nhật đánh giá rất cao thái độ "Teinei" trong mọi lĩnh vực: viết chữ nắn nót, gói quà cẩn thận, gấp quần áo vuông vức và sử dụng kính ngữ nhã nhặn khi giao tiếp.',
    examples: [
      {
        jp: '店員さんは商品の使い方についてとても丁寧に説明してくれました。',
        kana: 'てんいんさんはしょうひんのつかいかたについてとてもていねいにせつめいしてくれました。',
        vi: 'Nhân viên bán hàng đã giải thích cách sử dụng sản phẩm vô cùng tỉ mỉ và tận tình.',
      },
      {
        jp: '敬語を使った丁寧な言葉遣いを心がけましょう。',
        kana: 'けいごをつかったていねいなことばづかいをこころがけましょう。',
        vi: 'Hãy luôn chú ý sử dụng cách diễn đạt lịch thiệp kết hợp với kính ngữ chuẩn mực.',
      },
    ],
  },
  {
    word: '感謝',
    kana: 'かんしゃ',
    romaji: 'kansha',
    meaningVi: 'Lòng biết ơn, sự cảm tạ',
    meaningEn: 'gratitude, appreciation, thanksgiving',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['cảm xúc', 'giao tiếp', 'đạo đức'],
    notes: 'Chữ 感 (Cảm nhận trong tim) và 謝 (Nói lời tạ ơn). Tại Nhật, lời cảm ơn luôn đi kèm hành động thực tế: gửi thiệp cảm ơn (oreijo), biếu quà tạ ơn mùa hè (ochuugen) và cuối năm (oseibo) để tri ân sự giúp đỡ của quý nhân trong suốt một năm qua.',
    examples: [
      {
        jp: '日頃からお世話になっている恩師に心からの感謝を伝えました。',
        kana: 'ひごろからおせわになっているおんしにこころからのかんしゃをつたえました。',
        vi: 'Tôi đã bày tỏ lòng biết ơn sâu sắc từ đáy lòng tới người thầy đã luôn dìu dắt mình suốt thời gian qua.',
      },
      {
        jp: '皆様の温かいご支援に対し、深く感謝申し上げます。',
        kana: 'みなさまのあたたかいごしえんにたいし、ふかくかんしゃもうしあげます。',
        vi: 'Chúng tôi xin trân trọng gửi lời cảm ơn sâu sắc nhất tới sự ủng hộ ấm áp của toàn thể quý vị.',
      },
    ],
  },
  {
    word: 'お辞儀',
    kana: 'おじぎ',
    romaji: 'ojigi',
    meaningVi: 'Cúi đầu chào',
    meaningEn: 'bowing, traditional bow for greeting and respect',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['lễ nghi', 'chào hỏi', 'giao tiếp'],
    notes: 'Trong văn hóa giao tiếp Nhật Bản, Ojigi được chia thành 3 cấp độ góc độ tùy theo đối tượng: 1. Eshaku (会釈 - cúi 15 độ): chào xã giao đồng nghiệp ngang hàng; 2. Keirei (敬礼 - cúi 30 độ): chào khách hàng, đối tác, cấp trên; 3. Saikeirei (最敬礼 - cúi 45 độ): nghi thức trang trọng nhất để bày tỏ sự cảm kích sâu sắc hoặc xin lỗi chân thành. Khi cúi chào, giữ thẳng cột sống và ánh mắt hạ xuống sàn một cách tự nhiên.',
    examples: [
      {
        jp: '相手の目を見てから、背筋をまっすぐ伸ばして丁寧にお辞儀をします。',
        kana: 'あいてのめをみてから、せすじをまっすぐのばしてていねいにおじぎをします。',
        vi: 'Nhìn vào mắt đối phương trước, sau đó giữ thẳng lưng và cúi đầu chào thật lịch sự.',
      },
      {
        jp: 'ビジネスの場では、場面や相手に合わせてお辞儀の角度を使い分けます。',
        kana: 'びじねすのばでは、ばめんやあいてにあわせておじぎのかくどをつかいわけます。',
        vi: 'Trong môi trường kinh doanh, người ta linh hoạt thay đổi góc độ cúi chào cho phù hợp với hoàn cảnh và đối tượng.',
      },
    ],
  },
  {
    word: '会釈',
    kana: 'えしゃく',
    romaji: 'eshaku',
    meaningVi: 'Cúi chào nhẹ 15 độ',
    meaningEn: 'slight bow (approx. 15 degrees) for casual greetings',
    wordType: 'noun',
    jlptLevel: 'N2',
    tags: ['lễ nghi', 'chào hỏi', 'công sở'],
    notes: 'Góc nghiêng lưng khoảng 15 độ, ánh mắt hướng về phía sàn cách chân khoảng 1.5 đến 2 mét. Thường dùng khi chạm mặt nhau ở hành lang, bước vào thang máy chung hoặc thay cho lời chào buổi sáng nhẹ nhàng.',
    examples: [
      {
        jp: '廊下ですれ違った先輩に軽く会釈をして通り過ぎました。',
        kana: 'ろうかですれちがったせんぱいにかるくえしゃくをしてとおりすぎました。',
        vi: 'Tôi cúi đầu chào nhẹ 15 độ với đàn anh khi hai người bước lướt qua nhau ở hành lang.',
      },
      {
        jp: 'エレベーターで同乗した人に会釈をするのは良いマナーです。',
        kana: 'えれべーたーでどうじょうしたひとにえしゃくをするのはいいまなーです。',
        vi: 'Cúi đầu chào nhẹ khi bước vào thang máy cùng người khác là phép lịch sự văn minh.',
      },
    ],
  },
  {
    word: '敬礼',
    kana: 'けいれい',
    romaji: 'keirei',
    meaningVi: 'Cúi chào kính cẩn 30 độ',
    meaningEn: 'respectful bow (approx. 30 degrees) for business and formal greetings',
    wordType: 'noun',
    jlptLevel: 'N2',
    tags: ['lễ nghi', 'công sở', 'khách hàng'],
    notes: 'Lưng nghiêng một góc 30 độ, giữ lại tư thế cúi khoảng 1-2 giây trước khi từ từ ngẩng lên. Thường dùng khi đón tiếp khách hàng, nói lời cảm ơn đối tác hoặc chào sếp khi ra về.',
    examples: [
      {
        jp: 'お客様をお迎えする際には、３０度の敬礼で「いらっしゃいませ」と迎えます。',
        kana: 'おきゃくさまをおむかえするさいには、さんじゅうどのけいれいで「いらっしゃいませ」とむかえます。',
        vi: 'Khi đón tiếp quý khách hàng, nhân viên cúi chào kính cẩn 30 độ kèm lời nói "Xin kính chào quý khách".',
      },
      {
        jp: '名刺交換の後、お互いに敬礼を交わして商談に入りました。',
        kana: 'めいしこうかんのあと、おたがいにけいれいをかわしてしょうだんにはいりました。',
        vi: 'Sau khi trao đổi danh thiếp, hai bên cúi chào lịch thiệp rồi bắt đầu bước vào bàn thảo luận công việc.',
      },
    ],
  },
  {
    word: '最敬礼',
    kana: 'さいけいれい',
    romaji: 'saikeirei',
    meaningVi: 'Cúi chào trang trọng 45 độ',
    meaningEn: 'deepest bow (approx. 45 degrees) for deep gratitude or sincere apology',
    wordType: 'noun',
    jlptLevel: 'N1',
    tags: ['lễ nghi', 'trang trọng', 'tạ lỗi'],
    notes: 'Thân trên nghiêng hẳn một góc 45 đến 60 độ, hai bàn tay khép ngón duỗi thẳng đặt phía trước hoặc cạnh đùi, cúi giữ yên lặng trong khoảng 3 giây. Nghi thức này chỉ dùng trong những thời khắc hệ trọng: đứng trước điện thờ thần linh, tạ lỗi sâu sắc khi công ty xảy ra sự cố lớn, hoặc gửi lời tri ân thiêng liêng nhất.',
    examples: [
      {
        jp: '重大な不祥事のお詫びとして、社長は記者会見で深々と最敬礼を行いました。',
        kana: 'じゅうだいなふしょうじのおわびとして、しゃちょうはきしゃかいけんでふかぶかとさいけいれいをおこないました。',
        vi: 'Để tạ lỗi về sự cố nghiêm trọng, vị giám đốc đã cúi rạp người 45 độ trong buổi họp báo trước công chúng.',
      },
      {
        jp: '神社の本殿の前で、神様に対して最敬礼を捧げました。',
        kana: 'じんじゃのほんでんのまえで、かみさまにたいしてさいけいれいをささげました。',
        vi: 'Đứng trước chính điện của ngôi đền thần, tôi thành kính cúi đầu sâu 45 độ hướng về chư thần.',
      },
    ],
  },
  {
    word: '礼儀',
    kana: 'れいぎ',
    romaji: 'reigi',
    meaningVi: 'Lễ nghi, phép tắc',
    meaningEn: 'manners, etiquette, courtesy',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['đạo đức', 'lễ nghi', 'xã hội'],
    notes: 'Người Nhật có câu tục ngữ nổi tiếng: "Bắt đầu bằng lễ nghi, kết thúc bằng lễ nghi" (礼に始まり礼に終わる - Rei ni hajimari, rei ni owaru) trong mọi môn võ đạo (Karate, Kendo, Judo) cũng như trong văn hóa ứng xử hàng ngày. Lễ nghi chính là thước đo tư cách con người.',
    examples: [
      {
        jp: 'どんなに親しい間柄であっても、最低限の礼儀を守ることが大切です。',
        kana: 'どんなにしたしいあいだがらであっても、さいていげんのれいぎをまもることがたいせつです。',
        vi: 'Dù là mối quan hệ có thân thiết đến đâu đi chăng nữa, việc giữ gìn phép lịch sự tối thiểu vẫn là điều tối quan trọng.',
      },
      {
        jp: '日本の武道では、技術の上達以上に礼儀作法が厳しく教えられます。',
        kana: 'にほんのぶどうでは、ぎじゅつのじょうたついじょうにれいぎさほうがきびしくおしえられます。',
        vi: 'Trong võ đạo Nhật Bản, lễ nghi và tác phong còn được rèn giũa nghiêm khắc hơn cả kỹ năng chiến đấu.',
      },
    ],
  },
  {
    word: '謝罪',
    kana: 'しゃざい',
    romaji: 'shazai',
    meaningVi: 'Tạ lỗi, xin lỗi',
    meaningEn: 'apology, making an apology',
    wordType: 'noun',
    jlptLevel: 'N2',
    tags: ['giao tiếp', 'công sở', 'tạ lỗi'],
    notes: 'Trong văn hóa kinh doanh Nhật Bản, khi phát sinh lỗi lầm (như trễ hạn giao dịch, giao nhầm hàng), thái độ "Shazai" nhanh chóng, chân thành và không ngụy biện đổ lỗi là chìa khóa then chốt để duy trì lòng tin của đối tác. Kèm theo lời xin lỗi luôn là cam kết về giải pháp khắc phục triệt để.',
    examples: [
      {
        jp: '製品の欠陥について、お客様に直接お会いして深く謝罪しました。',
        kana: 'せいひんのけっかんについて、おきゃくさまにちょくせつおあいしてふかくしゃざいしました。',
        vi: 'Về lỗi của sản phẩm, chúng tôi đã trực tiếp đến gặp khách hàng để cúi đầu tạ lỗi sâu sắc.',
      },
      {
        jp: '言い訳をせず、誠意を持って謝罪することが信頼回復への第一歩です。',
        kana: 'いいわけをせず、せいいをもってしゃざいすることがしんらいかいふくへのだいいっぽです。',
        vi: 'Không ngụy biện bao biện mà hãy tạ lỗi bằng tất cả tấm lòng chân thành - đó là bước đi đầu tiên để khôi phục lòng tin.',
      },
    ],
  },

  // ==========================================
  // 6. TRƯỜNG HỌC & GIÁO DỤC (School & Education Culture)
  // ==========================================
  {
    word: '給食',
    kana: 'きゅうしょく',
    romaji: 'kyuushoku',
    meaningVi: 'Bữa trưa học đường',
    meaningEn: 'school lunch (prepared and served collectively)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['trường học', 'giáo dục', 'dinh dưỡng'],
    notes: 'Kyuushoku không chỉ là việc ăn trưa, mà là một môn học giáo dục dinh dưỡng (Shokuiku). Học sinh thay phiên nhau làm "đội trưởng trực nhật" mặc áo choàng trắng, đội mũ chia cơm canh cho các bạn, cùng nhau nói "Itadakimasu", và sau bữa ăn tự giác dọn dẹp, phân loại rác và rửa sạch hộp sữa giấy.',
    examples: [
      {
        jp: '小学校では毎日バランスの取れた温かい給食が提供されます。',
        kana: 'しょうがっこうではまいにちばらんすのとれたあたたかいきゅうしょくがていきょうされます。',
        vi: 'Tại các trường tiểu học, học sinh được phục vụ bữa trưa học đường nóng hổi và cân bằng dinh dưỡng mỗi ngày.',
      },
      {
        jp: '給食当番の生徒たちが白い割烹着を着て手際よく配膳を行いました。',
        kana: 'きゅうしょくとうばんのせいとたちがしろいかっぽうぎをきててぎわよくはいぜんをおこないました。',
        vi: 'Các em học sinh trực nhật bữa ăn mặc áo choàng trắng khéo léo phân chia từng phần cơm canh cho cả lớp.',
      },
    ],
  },
  {
    word: '掃除',
    kana: 'そうじ',
    romaji: 'souji',
    meaningVi: 'Dọn dẹp vệ sinh',
    meaningEn: 'cleaning (cleaning time by students at Japanese schools)',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['trường học', 'giáo dục', 'tự lập'],
    notes: 'Trường học Nhật Bản hầu như không thuê lao công dọn dẹp lớp học. Mỗi buổi chiều sau giờ học, toàn bộ học sinh cùng nhau cầm chổi quét lớp, lau sàn hành lang bằng khăn giẻ (Zoukin) và cọ rửa nhà vệ sinh. Hoạt động này rèn luyện cho trẻ tính khiêm nhường, không chê bai lao động chân tay và ý thức giữ gìn vệ sinh chung.',
    examples: [
      {
        jp: '放課後の掃除の時間には、クラス全員で教室の床を雑巾がけします。',
        kana: 'ほうかごのそうじのじかんには、くらすぜんいんできょうしつのゆかをぞうきんがけします。',
        vi: 'Trong giờ dọn dẹp sau buổi học, cả lớp cùng nhau dùng giẻ lau bóng loáng mặt sàn phòng học.',
      },
      {
        jp: '自分の学ぶ場所を自分たちの手で掃除することで、物を大切にする心が育ちます。',
        kana: 'じぶんのまなぶばしょをじぶんたちのてでそうじすることで、ものをたいせつにするこころがそだちます。',
        vi: 'Tự tay dọn dẹp nơi mình học tập giúp nuôi dưỡng tấm lòng biết trân quý cơ sở vật chất xung quanh.',
      },
    ],
  },
  {
    word: '部活',
    kana: 'ぶかつ',
    romaji: 'bukatsu',
    meaningVi: 'Câu lạc bộ ngoại khóa',
    meaningEn: 'extracurricular club activities after school',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['trường học', 'thể thao', 'tuổi trẻ'],
    notes: 'Viết tắt từ 部活動 (Bukatsudou). Chia thành 2 mảng chính: Thể thao (bóng chày, bóng đá, kendo...) và Văn hóa (dàn nhạc thính phòng, hội họa, trà đạo...). Đây là cái nôi tôi luyện tinh thần bền bỉ (Gaman), tinh thần đồng đội và thấm nhuần mối quan hệ tiền bối - hậu bối (Senpai - Kouhai) sâu sắc của người Nhật.',
    examples: [
      {
        jp: '放課後は野球部の部活に打ち込み、日が暮れるまで練習しました。',
        kana: 'ほうかごはやきゅうぶのぶかつにうちこみ、ひがくれるまでれんしゅうしました。',
        vi: 'Sau giờ học, tôi dồn hết tâm huyết cho câu lạc bộ bóng chày và tập luyện chăm chỉ đến tận lúc hoàng hôn buông xuống.',
      },
      {
        jp: '部活を通じて一生の親友と固い絆を結ぶことができました。',
        kana: 'ぶかつをつうじていっしょうのしんゆうとかたいきずなをむすぶことができました。',
        vi: 'Nhờ tham gia câu lạc bộ trường học, tôi đã kết thân được với những người bạn tri kỷ suốt đời.',
      },
    ],
  },
  {
    word: '上履き',
    kana: 'うわばき',
    romaji: 'uwabaki',
    meaningVi: 'Giày đi trong trường',
    meaningEn: 'indoor school shoes (changed at the entrance shoe lockers)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['trường học', 'thói quen', 'vệ sinh'],
    notes: 'Bắt nguồn từ văn hóa cởi giày trước khi bước lên nhà của người Nhật. Khi tới trường, học sinh tháo giày đi ngoài đường (Sotobaki) cất vào tủ giày cá nhân (Getabako) và thay đôi giày vải Uwabaki. Điều này giúp giữ cho sàn lớp học luôn tinh tươm sạch sẽ, phân định rõ ràng giữa không gian ngoài đường và không gian học tập thiêng liêng.',
    examples: [
      {
        jp: '昇降口の靴箱で外履きから上履きに履き替えて教室へ向かいます。',
        kana: 'しょうこうぐちのくつばこでそとばきからうわばきにはきかえてきょうしつへむかいます。',
        vi: 'Tại tủ để giày ở lối vào, học sinh đổi từ giày đi đường sang giày trong nhà Uwabaki rồi mới bước lên lớp.',
      },
      {
        jp: '週末には上履きを家に持ち帰って、自分で洗って乾かします。',
        kana: 'しゅうまつにはうわばきをいえにもちかえって、じぶんであらってかわかします。',
        vi: 'Mỗi cuối tuần, các em học sinh mang đôi giày Uwabaki về nhà tự tay giặt sạch và phơi khô.',
      },
    ],
  },
  {
    word: '先輩',
    kana: 'せんぱい',
    romaji: 'senpai',
    meaningVi: 'Tiền bối, đàn anh, đàn chị',
    meaningEn: 'senior (in school, workplace, or club)',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['quan hệ xã hội', 'trường học', 'công sở'],
    notes: 'Mối quan hệ Senpai - Kouhai (Tiền bối - Hậu bối) là trụ cột trong cấu trúc xã hội Nhật Bản. Senpai có trách nhiệm hướng dẫn, bảo ban và che chở cho đàn em; đổi lại Hậu bối luôn kính trọng, dùng kính ngữ Teineigo và lắng nghe lời chỉ dạy từ người đi trước.',
    examples: [
      {
        jp: '部活の頼れる先輩が、練習のコツを親切に教えてくれました。',
        kana: 'ぶかつのたよれるせんぱいが、れんしゅうのこつをしんせつにおしえてくれました。',
        vi: 'Người đàn anh đáng tin cậy trong câu lạc bộ đã tận tình chỉ cho tôi những bí quyết luyện tập hiệu quả.',
      },
      {
        jp: '会社に入社したばかりの頃、先輩社員のサポートにとても助けられました。',
        kana: 'かいしゃににゅうしゃしたばかりのころ、せんぱいしゃいんのさぽーとによくたすけられました。',
        vi: 'Hồi mới chập chững bước chân vào công ty, tôi đã nhận được sự hỗ trợ dìu dắt quý báu từ các anh chị tiền bối.',
      },
    ],
  },
  {
    word: '後輩',
    kana: 'こうはい',
    romaji: 'kouhai',
    meaningVi: 'Hậu bối, đàn em',
    meaningEn: 'junior (in school, workplace, or club)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['quan hệ xã hội', 'trường học', 'công sở'],
    notes: 'Đối trọng với Senpai. Trong văn hóa Nhật Bản, một Senpai tốt luôn chủ động chăm lo cho Kouhai (ví dụ như bao đàn em ăn uống sau buổi tập câu lạc bộ). Sự kế thừa thế hệ này giúp tổ chức duy trì sự gắn kết bền vững qua nhiều năm.',
    examples: [
      {
        jp: '新しく入部してきた後輩たちに、基本のフォームを教えました。',
        kana: 'あたらしくにゅうぶしてきたこうはいたちに、きほんのふぉーむをおしえました。',
        vi: 'Tôi đã hướng dẫn tư thế căn bản cho các em đàn em hậu bối mới gia nhập câu lạc bộ.',
      },
      {
        jp: '仕事で困っている後輩を見かけたら、優しく声をかけるようにしています。',
        kana: 'しごとでこまっているこうはいをみかけたら、やさしくこえをかけるようにしています。',
        vi: 'Mỗi khi thấy đàn em gặp khúc mắc trong công việc, tôi luôn chủ động đến gần hỏi han và hỗ trợ.',
      },
    ],
  },
  {
    word: '受験',
    kana: 'じゅけん',
    romaji: 'juken',
    meaningVi: 'Dự thi, thi tuyển chuyển cấp',
    meaningEn: 'taking entrance examinations',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['thi cử', 'giáo dục', 'thử thách'],
    notes: 'Mùa thi cử (Juken Season) tại Nhật thường diễn ra vào mùa đông lạnh giá (tháng 1 đến tháng 3). Đây là giai đoạn các sĩ tử (Jukensei) dồn hết sức lực ôn luyện ngày đêm để vượt qua "kỳ thi địa ngục" (Juken Jigoku) nhằm bước chân vào cánh cổng trường đại học mơ ước.',
    examples: [
      {
        jp: '志望校合格を目指して、毎日夜遅くまで受験勉強に励んでいます。',
        kana: 'しぼうこうごうかくをめざして、まいにちよるおそくまでじゅけんべんきょうにはげんでいます。',
        vi: 'Hướng tới mục tiêu thi đỗ trường mơ ước, mỗi ngày tôi đều miệt mài dùi mài kinh sử đến tận đêm khuya.',
      },
      {
        jp: '大学受験を控えた冬は、家族全員で健康管理に気を配りました。',
        kana: 'だいがくじゅけんをひかえたふゆは、かぞくぜんいんでけんこうかんりにきをくばりました。',
        vi: 'Vào mùa đông trước kỳ thi đại học trọng đại, cả gia đình tôi đều hết sức chú ý giữ gìn sức khỏe cho sĩ tử.',
      },
    ],
  },
  {
    word: '塾',
    kana: 'じゅく',
    romaji: 'juku',
    meaningVi: 'Lò luyện thi, trung tâm học thêm ngoài giờ',
    meaningEn: 'cram school / private tutoring academy',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['giáo dục', 'thi cử', 'trường học'],
    notes: 'Juku (Gakushuu Juku) là một nét đặc thù trong văn hóa giáo dục Nhật Bản. Sau khi tan trường lúc 4-5 giờ chiều, rất nhiều học sinh ăn vội cơm hộp rồi tiếp tục đến trung tâm Juku học đến 9-10 giờ đêm để chuẩn bị cho các kỳ thi học sinh giỏi và thi tuyển đại học.',
    examples: [
      {
        jp: '放課後、週に３回受験対策のために学習塾に通っています。',
        kana: 'ほうかご、しゅうにさんかいじゅけんたいさくのためにがくしゅうじゅくにかよっています。',
        vi: 'Sau giờ tan trường, mỗi tuần 3 buổi tôi đều đến trung tâm luyện thi để chuẩn bị kỹ lưỡng cho kỳ vượt cấp.',
      },
      {
        jp: '塾の先生の分かりやすい指導のおかげで、苦手な数学を克服できました。',
        kana: 'じゅくのせんせいのわかりやすいしどうのおかげで、にがてなすうがくをこくふくできました。',
        vi: 'Nhờ sự hướng dẫn dễ hiểu của thầy giáo trung tâm luyện thi, tôi đã khắc phục được môn toán điểm yếu của mình.',
      },
    ],
  },
  {
    word: '合格',
    kana: 'ごうかく',
    romaji: 'goukaku',
    meaningVi: 'Thi đỗ, trúng tuyển',
    meaningEn: 'passing an exam / qualifying',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['thi cử', 'thành công', 'niềm vui'],
    notes: 'Khi học sinh thi đỗ trường đại học, người Nhật thường dùng hình ảnh ẩn dụ "Sakura saku" (Hoa anh đào nở - 桜咲く) trong điện tín báo tin mừng. Trái lại, thi trượt sẽ dùng cụm "Sakura chiru" (Hoa anh đào rụng - 桜散る).',
    examples: [
      {
        jp: '第一志望の大学に見事合格して、家族全員で大喜びしました。',
        kana: 'だいいちしぼうのだいがくにみごとごうかくして、かぞくぜんいんでおおよろこびしました。',
        vi: 'Thi đỗ xuất sắc vào trường đại học nguyện vọng 1, cả gia đình tôi vỡ òa trong niềm vui sướng tột cùng.',
      },
      {
        jp: '合格発表の掲示板で自分の受験番号を見つけた瞬間の感動は忘れられません。',
        kana: 'ごうかくはっぴょうのけいじばんでじぶんのじゅけんばんごうをみつけたしゅんかんのかんどうはわすれられません。',
        vi: 'Khoảnh khắc nhìn thấy số báo danh của mình trên bảng tin báo điểm đỗ là kỷ niệm xúc động tôi không bao giờ quên.',
      },
    ],
  },
  {
    word: '絵馬',
    kana: 'えま',
    romaji: 'ema',
    meaningVi: 'Thẻ gỗ cầu nguyện tại đền chùa',
    meaningEn: 'votive wooden plaque for writing prayers at shrines',
    wordType: 'noun',
    jlptLevel: 'N2',
    tags: ['tâm linh', 'cầu nguyện', 'đền thần'],
    notes: 'Chữ Hán là 絵 (Bức tranh) và 馬 (Con ngựa). Thời xưa, ngựa được xem là phương tiện linh thiêng để thần linh cưỡi đi lại, nên người giàu dâng ngựa thật lên đền. Về sau, dân chúng chuyển sang vẽ hình ngựa lên tấm gỗ ngũ giác để dâng lễ vật cầu bình an, thi cử đỗ đạt hoặc nhân duyên tốt lành.',
    examples: [
      {
        jp: '受験の前に神社を訪れ、合格祈願の絵馬を奉納しました。',
        kana: 'じゅけんのまえにじんじゃをおとずれ、ごうかくきがんのえまをほうのうしました。',
        vi: 'Trước kỳ thi, tôi đã đến đền thần và thành kính dâng tấm thẻ gỗ Ema ghi lời ước nguyện thi cử đỗ đạt.',
      },
      {
        jp: '境内の絵馬掛けには、たくさんの人々の夢や願い事が掛けられています。',
        kana: 'けいだいのえまかけには、たくさんのひとびとのゆめやねがいごとがかけられています。',
        vi: 'Trên giá treo thẻ gỗ trong khuôn viên đền treo đầy những ước mơ và tâm nguyện tha thiết của muôn người.',
      },
    ],
  },
  {
    word: 'お守り',
    kana: 'おまもり',
    romaji: 'omamori',
    meaningVi: 'Bùa hộ mệnh may mắn',
    meaningEn: 'protective amulet / lucky charm sold at shrines and temples',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['tâm linh', 'may mắn', 'bảo vệ'],
    notes: 'Bùa Omamori có nhiều loại: cầu thi cử đỗ đạt (Goukaku), bình an khi lái xe (Koutsuu Anzen), sức khỏe (Kenkou), tình duyên (Enmusubi). Quy tắc tâm linh: tuyệt đối không được mở túi bùa ra xem bên trong vì sẽ làm bay mất linh khí của thần linh. Sau 1 năm, người ta thường mang bùa cũ về đền để làm lễ hóa tạ ơn.',
    examples: [
      {
        jp: '母が交通安全を祈って神社のお守りをプレゼントしてくれました。',
        kana: 'ははがこうつうあんぜんをいのってじんじゃのおまもりをぷれぜんとしてくれました。',
        vi: 'Mẹ đã tặng cho tôi một chiếc bùa hộ mệnh mua ở đền để cầu chúc bình an trên mọi nẻo đường.',
      },
      {
        jp: '試験当日は、いつもカバンにつけている合格祈願のお守りを握りしめました。',
        kana: 'しけんとうじつは、いつもかばんにつけているごうかくきがんのおまもりをにぎりしめました。',
        vi: 'Vào đúng ngày thi cử, tôi nắm chặt chiếc bùa cầu thi đỗ may mắn luôn treo bên mình trên chiếc cặp sách.',
      },
    ],
  },
  {
    word: '努力',
    kana: 'どりょく',
    romaji: 'doryoku',
    meaningVi: 'Nỗ lực, phấn đấu không ngừng nghỉ',
    meaningEn: 'great effort, hard work, striving',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['đức tính', 'nỗ lực', 'thành công'],
    notes: 'Người Nhật luôn tôn vinh "Doryoku" hơn là tài năng bẩm sinh. Câu nói "Nỗ lực sẽ không bao giờ phản bội bạn" (努力は人を裏切らない - Doryoku wa hito o uragiranai) là phương châm sống được các thầy cô giáo và huấn luyện viên truyền dạy cho bao thế hệ thanh thiếu niên Nhật Bản.',
    examples: [
      {
        jp: '日々の地道な努力を積み重ねることが、大きな成功への近道です。',
        kana: 'ひびのじみちなどりょくをつみかさねることが、おおきなせいこうへのちかみちです。',
        vi: 'Tích lũy những nỗ lực bền bỉ thầm lặng mỗi ngày chính là con đường ngắn nhất dẫn lối tới thành công lớn.',
      },
      {
        jp: '彼女は最後まで諦めずに努力を続け、見事に目標を達成しました。',
        kana: 'かのじょはさいごまであきらめずにどりょくをつづけ、みごとにもくひょうをたっせいしました。',
        vi: 'Cô ấy kiên cường không bỏ cuộc tới phút cuối cùng và đã xuất sắc hoàn thành mục tiêu đề ra.',
      },
    ],
  },

  // ==========================================
  // 7. QUY TẮC CÔNG SỞ & GIAO TIẾP ĐI LÀM (Business Communication & Ho-Ren-So)
  // ==========================================
  {
    word: '報告',
    kana: 'ほうこく',
    romaji: 'houkoku',
    meaningVi: 'Báo cáo',
    meaningEn: 'report, reporting work progress to superiors',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['quy tắc công sở', 'ho-ren-so', 'giao tiếp'],
    notes: 'Quy tắc vàng khi báo cáo trong công ty Nhật: "Báo cáo xấu trước, báo cáo tốt sau" (Bad news first). Khi xảy ra sự cố hay sai sót, phải báo cáo lập tức cho cấp trên cùng số liệu thực tế, tuyệt đối không được giấu giếm hay chờ giải quyết xong mới báo.',
    examples: [
      {
        jp: 'トラブルが発生した際は、自己判断せず直ちに上司へ報告することが重要です。',
        kana: 'とらぶるがはっせいしたさいは、じこはんだんせずただちにじょうしへほうこくすることがじゅうようです。',
        vi: 'Khi phát sinh sự cố, điều tối quan trọng là phải báo cáo ngay lập tức cho cấp trên chứ không được tự tiện quyết định.',
      },
      {
        jp: '今日の午前中にプロジェクトの進捗状況を上司に報告しました。',
        kana: 'きょうのごぜんちゅうにぷろじぇくとのしんちょくじょうきょうをじょうしにほうこくしました。',
        vi: 'Trong buổi sáng hôm nay, tôi đã báo cáo tình hình tiến độ dự án cho sếp.',
      },
    ],
  },
  {
    word: '連絡',
    kana: 'れんらく',
    romaji: 'renraku',
    meaningVi: 'Liên lạc, thông báo thông tin',
    meaningEn: 'contact, informing, keeping everyone in the loop',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['quy tắc công sở', 'ho-ren-so', 'giao tiếp'],
    notes: 'Liên lạc (Renraku) là việc truyền đạt các thông tin thực tế (thay đổi giờ họp, tài liệu mới, việc nghỉ phép) một cách nhanh chóng và chính xác. Khác với Báo cáo (có phân tích kết quả), Liên lạc đơn thuần là đưa tin tức đúng người, đúng lúc.',
    examples: [
      {
        jp: '電車の遅延で遅刻しそうな時は、始業時間前に会社へ連絡を入れます。',
        kana: 'でんしゃのちえんでちこくしそうなときは、しぎょうじかんまえにかいしゃへれんらくをいれます。',
        vi: 'Khi tàu trễ có nguy cơ đến muộn, phải liên lạc báo tin cho công ty trước giờ vào làm.',
      },
      {
        jp: '会議の開始時間が変更になったため、関係者全員にメールで連絡しました。',
        kana: 'かいぎのかいしじかんがへんこうになったため、かんけいしゃぜんいんにめーるでれんらくしました。',
        vi: 'Vì giờ bắt đầu cuộc họp bị thay đổi, tôi đã gửi email thông báo tới toàn thể những người có liên quan.',
      },
    ],
  },
  {
    word: '相談',
    kana: 'そうだん',
    romaji: 'soudan',
    meaningVi: 'Thảo luận, xin ý kiến tư vấn',
    meaningEn: 'consultation, discussing and asking for advice',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['quy tắc công sở', 'ho-ren-so', 'hợp tác'],
    notes: 'Trong doanh nghiệp Nhật, tự ý hành động một mình khi chưa chắc chắn (độc đoán) là điều tối kỵ. Việc chủ động "Soudan" xin ý kiến chỉ đạo từ người có kinh nghiệm giúp phòng ngừa rủi ro sai sót và cùng nhau tìm ra giải pháp tối ưu nhất cho tập thể.',
    examples: [
      {
        jp: '判断に迷った時は、一人で抱え込まずに先輩に相談しましょう。',
        kana: 'はんだんにまよったときは、ひとりでかかえこまずにせんぱいにそうだんしましょう。',
        vi: 'Khi phân vân chưa đưa ra được quyết định, đừng ôm việc một mình mà hãy mở lời thảo luận xin ý kiến tiền bối.',
      },
      {
        jp: '今後のキャリアプランについて、上司に相談に乗ってもらいました。',
        kana: 'こんごのきゃりあぷらんについて、じょうしにそうだんにのってもらいました。',
        vi: 'Tôi đã được cấp trên lắng nghe và nhiệt tình tư vấn về định hướng phát triển sự nghiệp trong tương lai.',
      },
    ],
  },
  {
    word: '残業',
    kana: 'ざんぎょう',
    romaji: 'zangyou',
    meaningVi: 'Làm thêm giờ, tăng ca',
    meaningEn: 'overtime work',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['công sở', 'thời gian', 'lao động'],
    notes: 'Thời kỳ trước đây, văn hóa làm tăng ca thâu đêm (Zangyou) gắn liền với hình tượng nhân viên công ty mẫn cán (Salaryman). Tuy nhiên hiện nay, nhờ luật cải cách phong cách làm việc (Hatarakikata Kaikaku), các doanh nghiệp Nhật đều siết chặt trần làm thêm giờ và khuyến khích nhân viên về đúng giờ (Teiji).',
    examples: [
      {
        jp: '月末は締め切りが重なるため、どうしても残業が多くなってしまいます。',
        kana: 'げつまつはしめきりがかさなるため、どうしてもざんぎょうがおおくなってしまいます。',
        vi: 'Cuối tháng do nhiều hạn chót dồn lại một lúc nên việc làm thêm giờ thường tăng lên.',
      },
      {
        jp: '毎週水曜日はノー残業デーに指定されており、全員が定時で退社します。',
        kana: 'まいしゅうすいようびはのーざんぎょうでーにしていされており、ぜんいんがていじでたいしゃします。',
        vi: 'Mỗi thứ Tư hàng tuần được chọn là "Ngày không tăng ca", tất cả nhân viên đều ra về đúng giờ.',
      },
    ],
  },
  {
    word: '納期',
    kana: 'のうき',
    romaji: 'nouki',
    meaningVi: 'Thời hạn giao hàng, hạn chót hoàn thành công việc',
    meaningEn: 'deadline, delivery date',
    wordType: 'noun',
    jlptLevel: 'N2',
    tags: ['kinh doanh', 'thời hạn', 'trách nhiệm'],
    notes: 'Người Nhật cực kỳ coi trọng chữ tín và việc đúng giờ giấc. "Tuyệt đối giữ đúng hạn chót" (納期厳守 - Nouki Genshu) được xem là nguyên tắc sống còn trong kinh doanh. Nếu dự kiến có nguy cơ trễ hạn dù chỉ vài giờ, bạn bắt buộc phải thông báo và xin lỗi đối tác từ trước chứ không được chờ tới đúng hạn mới thông báo.',
    examples: [
      {
        jp: '厳しいスケジュールですが、チーム一丸となって納期を守り抜きました。',
        kana: 'きびしいすけじゅーるですが、ちーむいちがんとなってのうきをまもりぬきました。',
        vi: 'Dù tiến độ rất gấp rút, cả đội ngũ đã đồng lòng sát cánh để bàn giao sản phẩm đúng thời hạn cam kết.',
      },
      {
        jp: '納期に遅れそうな場合は、事前にクライアントへ連絡して調整をお願いします。',
        kana: 'のうきにおくれそうなばあいは、じぜんにくらいあんとへれんらくしてちょうせいをおねがいします。',
        vi: 'Trường hợp có nguy cơ chậm tiến độ, hãy liên lạc trước với khách hàng để xin điều chỉnh thời hạn.',
      },
    ],
  },
  {
    word: '共有',
    kana: 'きょうゆう',
    romaji: 'kyouyuu',
    meaningVi: 'Chia sẻ, dùng chung thông tin',
    meaningEn: 'sharing, co-owning (information, documents)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['hợp tác', 'thông tin', 'công sở'],
    notes: 'Cụm từ "Jouhou Kyouyuu" (Chia sẻ thông tin - 情報共有) là khẩu hiệu quen thuộc trong văn phòng Nhật. Bất kỳ email trao đổi nào với khách hàng, nhân viên đều thường Cc cho cấp trên và đồng nghiệp phụ trách để mọi người cùng nắm bắt tiến độ, tránh tình trạng thông tin bị gián đoạn khi có người vắng mặt.',
    examples: [
      {
        jp: '会議の議事録を作成し、チーム全体で情報を共有しました。',
        kana: 'かいぎのぎじろくをさくせいし、ちーむぜんたいでじょうほうをきょうゆうしました。',
        vi: 'Tôi đã lập biên bản cuộc họp và gửi chia sẻ thông tin đồng bộ tới toàn thể các thành viên trong nhóm.',
      },
      {
        jp: '最新の顧客データをクラウド上でリアルタイムに共有しています。',
        kana: 'さいしんのこきゃくでーたをくらうどじょうでりあるたいむにきょうゆうしています。',
        vi: 'Dữ liệu khách hàng mới nhất đang được chúng tôi đồng bộ chia sẻ theo thời gian thực trên đám mây.',
      },
    ],
  },
  {
    word: '飲み会',
    kana: 'のみかい',
    romaji: 'nomikai',
    meaningVi: 'Tiệc nhậu giao lưu sau giờ làm',
    meaningEn: 'drinking party (after-work social gathering)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['giao lưu', 'văn hóa công sở', 'đời sống'],
    notes: 'Được mệnh danh là "Nomunication" (kết hợp giữa Nomi và Communication). Trong giờ làm việc người Nhật rất nghiêm nghị và tuân thủ thứ bậc; tiệc nhậu Nomikai chính là dịp để mọi người cởi mở lòng mình, giãi bày tâm tư (Bureikou - tiệc không phân biệt ngôi thứ), từ đó hiểu và gắn kết với nhau hơn.',
    examples: [
      {
        jp: '新入社員を歓迎するために、部署のみんなで飲み会を開きました。',
        kana: 'しんにゅうしゃいんをかんげいするために、ぶしょのみんなでのみかいをひらきました。',
        vi: 'Để chào đón những nhân viên mới, cả phòng ban chúng tôi đã tổ chức một buổi tiệc nhậu ấm cúng.',
      },
      {
        jp: '飲み会の席では、普段あまり話せない上司とも気さくに話すことができました。',
        kana: 'のみかいのせきでは、ふだんあまりはなせないじょうしともきさくにはなすことができました。',
        vi: 'Tại bàn tiệc nhậu, tôi đã có thể trò chuyện cởi mở thoải mái với cả những vị sếp thường ngày vốn rất nghiêm khắc.',
      },
    ],
  },
  {
    word: '上司',
    kana: 'じょうし',
    romaji: 'joushi',
    meaningVi: 'Cấp trên, sếp',
    meaningEn: 'boss, superior, supervisor',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['công sở', 'thứ bậc', 'quan hệ'],
    notes: 'Khi nói chuyện trực tiếp với cấp trên, người Nhật gọi theo chức danh (ví dụ: Buchou - Trưởng phòng, Kachou - Trưởng ban). Tuy nhiên khi nói chuyện với khách hàng bên ngoài công ty, theo nguyên tắc khiêm nhường, họ sẽ lược bỏ chức danh và chỉ xưng tên sếp kèm họ mà không thêm kính ngữ Sama/San.',
    examples: [
      {
        jp: '上司に書類を確認してもらい、承認のサインをいただきました。',
        kana: 'じょうしにしょるいをかくにんしてもらい、しょうにんのさいんをいただきました。',
        vi: 'Tôi đã nhờ sếp kiểm tra lại tập tài liệu và nhận được chữ ký phê duyệt từ cấp trên.',
      },
      {
        jp: '尊敬できる上司のもとで働けることは、とても恵まれた環境です。',
        kana: 'そんけいできるじょうしのもとではたらけることは、とてもめぐまれたかんきょうです。',
        vi: 'Được làm việc dưới sự chỉ dẫn của một người sếp đáng kính là một môi trường vô cùng may mắn.',
      },
    ],
  },
  {
    word: '同僚',
    kana: 'どうりょう',
    romaji: 'douryou',
    meaningVi: 'Đồng nghiệp',
    meaningEn: 'colleague, coworker',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['công sở', 'quan hệ', 'hợp tác'],
    notes: 'Đồng nghiệp cùng gia nhập công ty vào một năm gọi là Douki (同期 - cùng khóa). Mối quan hệ Douki rất đặc biệt: họ vừa là những người bạn cùng chia sẻ những áp lực đầu đời khi đi làm, vừa là những người bạn đồng hành hỗ trợ nhau trong suốt sự nghiệp.',
    examples: [
      {
        jp: '困った時にはいつでも助け合える素晴らしい同僚たちに恵まれました。',
        kana: 'こまったときにはいつでもたすけあえるすばらしいどうりょうたちにめぐまれました。',
        vi: 'Tôi thật may mắn khi có được những người đồng nghiệp tuyệt vời, luôn sẵn sàng sẻ chia giúp đỡ mỗi khi gặp khó khăn.',
      },
      {
        jp: '休日に同僚とバーベキューをしてリフレッシュしました。',
        kana: 'きゅうじつにどうりょうとばーべきゅーをしてりふれっしゅしました。',
        vi: 'Vào ngày nghỉ, tôi cùng các đồng nghiệp tổ chức tiệc nướng BBQ ngoài trời để nạp lại năng lượng.',
      },
    ],
  },
  {
    word: 'お疲れ様',
    kana: 'おつかれさま',
    romaji: 'otsukaresama',
    meaningVi: 'Anh/chị đã vất vả rồi',
    meaningEn: 'thank you for your hard work / good work today',
    wordType: 'expression',
    jlptLevel: 'N4',
    tags: ['chào hỏi', 'công sở', 'động viên'],
    notes: 'Câu nói đa năng nhất trong văn phòng Nhật. Khi gặp nhau ở hành lang, khi bắt đầu mở email hay khi chào tạm biệt ra về lúc tan sở, người ta đều nói "Otsukaresama desu" (hoặc "Otsukaresama deshita"). Lưu ý: cấp dưới không được dùng "Gokurousama" với cấp trên, mà bắt buộc phải dùng "Otsukaresama".',
    examples: [
      {
        jp: '一日の仕事を終えて退社するとき、「お疲れ様でした」と挨拶します。',
        kana: 'いちにちのしごとをおえてたいしゃするとき、「おつかれさまでした」とあいさつします。',
        vi: 'Khi hoàn thành một ngày làm việc và rời văn phòng, mọi người cất lời chào "Otsukaresama deshita".',
      },
      {
        jp: '大きなプレゼンを終えた同僚に「本当にお疲れ様！」と労いの言葉をかけました。',
        kana: 'おおきなぷれぜんをおえたどうりょうに「ほんとうにおつかれさま！」とねぎらいのことばをかけました。',
        vi: 'Tôi gửi lời động viên chân thành "Bạn đã vất vả nhiều rồi!" tới người đồng nghiệp vừa hoàn thành bài thuyết trình quan trọng.',
      },
    ],
  },
  {
    word: '二次会',
    kana: 'にじかい',
    romaji: 'nijikai',
    meaningVi: 'Tăng hai, tăng tiếp theo',
    meaningEn: 'after-party, second gathering (karaoke, bar)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['tiệc tùng', 'giao lưu', 'đời sống'],
    notes: 'Sau khi kết thúc tiệc chính (Ichijikai) tại quán nhậu Izakaya, những người còn muốn tiếp tục trò chuyện thường rủ nhau đi "tăng hai" Nijikai (thường là quán bar nhỏ, quán ramen đêm hoặc quán hát karaoke). Việc tham gia tăng hai hoàn toàn tự nguyện theo nhịp sống hiện đại.',
    examples: [
      {
        jp: '忘年会の一次会が終わった後、有志でカラオケの二次会へ行きました。',
        kana: 'ぼうねんかいのいちじかいがおわったあと、ゆうしでからおけのにじかいへいきました。',
        vi: 'Sau khi tiệc tất niên tăng một kết thúc, những ai còn hào hứng đã cùng nhau đi hát karaoke tăng hai.',
      },
      {
        jp: '明日の朝が早いので、二次会には参加せず帰宅することにしました。',
        kana: 'あしたのあさがはやいので、にじかいにはさんかせずきたくすることにしました。',
        vi: 'Vì sáng mai có việc bận từ sớm nên tôi xin phép không tham gia tăng hai mà về nhà nghỉ ngơi.',
      },
    ],
  },
  {
    word: '敬語',
    kana: 'けいご',
    romaji: 'keigo',
    meaningVi: 'Kính ngữ',
    meaningEn: 'honorific language, polite speech',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['ngôn ngữ', 'kính ngữ', 'giao tiếp'],
    notes: 'Kính ngữ được chia thành 3 trụ cột chính: 1. Sonkeigo (Tôn kính ngữ - nâng đối phương lên); 2. Kenjougo (Khiêm nhường ngữ - hạ mình xuống); 3. Teineigo (Lịch sự ngữ - thể hiện sự trang nhã bằng đuôi desu/masu). Việc dùng chuẩn kính ngữ là tiêu chuẩn tối thiểu của một công dân đi làm chuyên nghiệp (Shakaijin).',
    examples: [
      {
        jp: 'ビジネスメールでは適切な敬語を使って丁寧な文章を作成します。',
        kana: 'びじねすめーるではてきせつなけいごをつかってていねいなぶんしょうをさくせいします。',
        vi: 'Trong thư từ thương mại, việc sử dụng kính ngữ chuẩn mực để viết nên những câu từ lịch thiệp là điều bắt buộc.',
      },
      {
        jp: '目上の人と話すときは、尊敬語と謙譲語を正しく使い分けなければなりません。',
        kana: 'めうえのひととはなすときは、そんけいごとけんじょうごをただしくつかいわけなければなりません。',
        vi: 'Khi giao tiếp với người bề trên, bạn cần phân biệt rạch ròi giữa tôn kính ngữ và khiêm nhường ngữ.',
      },
    ],
  },
  {
    word: '尊敬語',
    kana: 'そんけいご',
    romaji: 'sonkeigo',
    meaningVi: 'Tôn kính ngữ',
    meaningEn: 'respectful / honorific language (elevating the listener/subject)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['kính ngữ', 'ngôn ngữ', 'lịch thiệp'],
    notes: 'Dùng riêng cho hành động của khách hàng, cấp trên, người lớn tuổi. Ví dụ: chuyển từ 食べる (ăn) thành 召し上がる (meshiagaru), 行く (đi) thành いらっしゃる (irassharu), 言う (nói) thành おっしゃる (ossharu). Tuyệt đối không bao giờ dùng tôn kính ngữ cho hành động của bản thân mình.',
    examples: [
      {
        jp: '社長はもう資料をお読みになりましたか。（「読む」の尊敬語）',
        kana: 'しゃちょうはもうしりょうをおよみになりましたか。',
        vi: 'Giám đốc đã đọc qua tập tài liệu này chưa ạ? (Sử dụng tôn kính ngữ của động từ Yomu).',
      },
      {
        jp: 'お客様が何とおっしゃったのか、もう一度確認してください。',
        kana: 'おきゃくさまがなんとおっしゃったのか、もういちどかくにんしてください。',
        vi: 'Hãy xác nhận lại xem vừa rồi quý khách hàng đã nói điều gì.',
      },
    ],
  },
  {
    word: '謙譲語',
    kana: 'けんじょうご',
    romaji: 'kenjougo',
    meaningVi: 'Khiêm nhường ngữ',
    meaningEn: 'humble language (lowering oneself to elevate the other)',
    wordType: 'noun',
    jlptLevel: 'N3',
    tags: ['kính ngữ', 'khiêm tốn', 'ngôn ngữ'],
    notes: 'Dùng riêng cho hành động của chính mình hoặc người trong công ty mình (Uchi). Ví dụ: chuyển từ 行く (đi) thành 伺う (ukagau) hoặc 参る (mairu), 言う (nói) thành 申す (mousu), 食べる (ăn) thành 頂く (itadaku), する (làm) thành いたす (itasu).',
    examples: [
      {
        jp: '明日、御社のオフィスへ午後２時に伺います。（「行く」の謙譲語）',
        kana: 'あした、おんしゃのおふぃすへごごにじにうかがいます。',
        vi: 'Vào lúc 2 giờ chiều ngày mai, tôi xin phép được đến văn phòng của quý công ty. (Khiêm nhường ngữ của Iku).',
      },
      {
        jp: '私から企画書をご説明いたします。（「する」の謙譲語）',
        kana: 'わたしからきかくしょをごせつめいいいたします。',
        vi: 'Tôi xin phép được trình bày bản kế hoạch này tới quý vị. (Khiêm nhường ngữ của Suru).',
      },
    ],
  },
  {
    word: 'お世話',
    kana: 'おせわ',
    romaji: 'osewa',
    meaningVi: 'Sự giúp đỡ, chiếu cố',
    meaningEn: 'care, assistance, favor from someone',
    wordType: 'noun',
    jlptLevel: 'N4',
    tags: ['công sở', 'giao tiếp', 'biết ơn'],
    notes: 'Bất kỳ cuộc điện thoại hay email giao dịch nào trong thương trường Nhật Bản cũng đều mở đầu bằng câu cửa miệng: "Osewa ni natte orimasu" (いつもお世話になっております - Cảm ơn quý khách/quý đối tác đã luôn chiếu cố và giúp đỡ chúng tôi). Đây là câu thần chú ngoại giao tạo bầu không khí tôn trọng và ấm áp.',
    examples: [
      {
        jp: 'いつも大変お世話になっております。株式会社〇〇の田中です。',
        kana: 'いつもたいへんおせわになっております。かぶしきがいしゃまるまるのたなかです。',
        vi: 'Xin cảm ơn quý đối tác đã luôn chiếu cố giúp đỡ chúng tôi trong suốt thời gian qua. Tôi là Tanaka từ công ty XX.',
      },
      {
        jp: '留学中、ホストファミリーには本当にお世話になりました。',
        kana: 'りゅうがくちゅう、ほすとふぁみりーにはほんとうにおせわになりました。',
        vi: 'Trong suốt thời gian du học, tôi đã nhận được sự chăm sóc cưu mang vô cùng chu đáo từ gia đình nhà nuôi.',
      },
    ],
  },
  {
    word: '恐縮',
    kana: 'きょうしゅく',
    romaji: 'kyoushuku',
    meaningVi: 'Áy náy, cảm kích',
    meaningEn: 'feeling obliged, embarrassed with gratitude, apologetic polite feeling',
    wordType: 'noun',
    jlptLevel: 'N2',
    tags: ['kính ngữ', 'tinh tế', 'công sở'],
    notes: 'Chữ 恐 (Kính sợ) và 縮 (Co lại, nép mình). Biểu thị trạng thái khiêm nhường sâu sắc: "Nhận được sự ưu ái của quý vị khiến tôi cảm thấy vô cùng áy náy và cảm kích". Cụm từ "Taihen kyoushuku desu ga..." (Rất làm phiền quý vị nhưng...) là lời mở đầu vô cùng lịch thiệp trước khi nhờ vả ai đó.',
    examples: [
      {
        jp: 'お忙しいところ大変恐縮ですが、アンケートへのご協力をお願い申し上げます。',
        kana: 'おいそがしいところたいへんきょうしゅくですが、あんけーとへのごきょうりょくをおねがいもうしあげます。',
        vi: 'Biết quý vị đang rất bận rộn tôi thực sự rất áy náy, nhưng kính mong quý vị bớt chút thời gian hỗ trợ điền phiếu khảo sát này.',
      },
      {
        jp: '身に余る光栄なお言葉をいただき、大変恐縮しております。',
        kana: 'みにあまるこうえいなおことばをいただき、たいへんきょうしゅくしております。',
        vi: 'Nhận được những lời khen ngợi ưu ái vượt quá năng lực của mình, tôi cảm thấy vô cùng cảm kích và khiêm nhường.',
      },
    ],
  },
  {
    word: 'よろしくお願いします',
    kana: 'よろしくおねがいします',
    romaji: 'yoroshiku onegaishimasu',
    meaningVi: 'Xin nhờ giúp đỡ, chiếu cố',
    meaningEn: 'please treat me favorably / looking forward to working with you',
    wordType: 'expression',
    jlptLevel: 'N5',
    tags: ['chào hỏi', 'hợp tác', 'công sở'],
    notes: 'Không có từ ngữ tương đương trực tiếp trong tiếng Anh hay tiếng Việt. Nó gói trọn sự khiêm nhường, tin cậy và trao gửi: "Từ nay về sau, rất mong nhận được sự dìu dắt, bao dung và giúp đỡ tốt đẹp từ phía bạn". Dùng khi lần đầu gặp mặt, khi kết thúc email, khi giao việc hoặc khi bắt đầu một dự án mới.',
    examples: [
      {
        jp: '本日新しくチームに加わりました山田です。どうぞよろしくお願いします！',
        kana: 'ほんじつあたらしくちーむにくわわりましたやまだです。どうぞよろしくおねがいします！',
        vi: 'Tôi là Yamada, hôm nay vừa mới gia nhập vào đội ngũ của chúng ta. Rất mong nhận được sự giúp đỡ và chỉ bảo từ mọi người!',
      },
      {
        jp: 'ご多忙中恐れ入りますが、ご確認のほどよろしくお願い申し上げます。',
        kana: 'ごたぼうちゅうおそれいりますが、ごかくにんのほどよろしくおねがいもうしあげます。',
        vi: 'Biết anh/chị đang bận rộn trăm công nghìn việc, nhưng kính mong anh/chị xem xét qua tập tài liệu này giúp tôi.',
      },
    ],
  },
];

// ==========================================
// 50+ KANJI LIÊN QUAN TRỰC TIẾP TỚI TỪ VỰNG VĂN HÓA
// ==========================================
const CULTURE_KANJI = [
  ['箸', 'チョ', 'はし', 'đũa', 'chopsticks', 15, '竹', 'N1', 'TRỢ, TRỨ', 'Cây tre dùng làm đôi đũa gắp thức ăn'],
  ['置', 'チ', 'お.く', 'đặt, để, bố trí, gác', 'put, place, set', 13, '网', 'N4', 'TRÍ', 'Bố trí đặt vật phẩm ngay ngắn dưới lưới che'],
  ['和', 'ワ, オ', 'やわ.らぐ, なご.む', 'hòa hợp, phong cách Nhật', 'harmony, Japanese style', 8, '口', 'N3', 'HÒA', 'Lúa gạo bên miệng đem lại hòa bình no ấm'],
  ['食', 'ショク', 'た.べる', 'ăn, ẩm thực', 'eat, food', 9, '食', 'N4', 'THỰC', 'Đậy thức ăn lại trước khi ăn'],
  ['旬', 'シュン, ジュン', '', 'mùa vụ ngon nhất, 10 ngày', 'in season, 10-day period', 6, '日', 'N2', 'TUẦN', 'Mặt trời chiếu rọi trong tuần 10 ngày tạo nên mùa ngon'],
  ['汁', 'ジュウ', 'しる', 'nước canh, nước cốt', 'soup, juice', 5, '氵', 'N2', 'TRẮP, CHI', 'Nước dùng từ mười vị ngon'],
  ['菜', 'サイ', 'な', 'rau củ, món ăn kèm', 'vegetable, side dish', 11, '艹', 'N3', 'THÁI', 'Rau củ hái bằng tay trên đồng cỏ'],
  ['酒', 'シュ', 'さけ, さか', 'rượu', 'sake, alcohol', 10, '酉', 'N4', 'TỬU', 'Bình rượu ủ men nước sóng sánh'],
  ['屋', 'オク', 'や', 'quán, tiệm, mái nhà', 'roof, house, shop', 9, '尸', 'N4', 'ỐC', 'Mái nhà che chở cho quán tiệm buôn bán'],
  ['居', 'キョ, コ', 'い.る', 'ở, cư trú, ngồi lại', 'reside, exist', 8, '尸', 'N3', 'CƯ', 'Ngồi lại dưới mái nhà trò chuyện'],
  ['乾', 'カン, ケン', 'かわ.く, かわ.かす', 'khô cạn, cạn ly', 'dry, drink up', 11, '乙', 'N2', 'KIỀN, CAN', 'Mặt trời chiếu rọi làm cạn khô nước'],
  ['杯', 'ハイ', 'さかづき', 'chén rượu, cốc, ly', 'cup, toast', 8, '木', 'N3', 'BÔI', 'Chén rượu gỗ không bao giờ vơi'],
  ['通', 'ツウ, ツ', 'とお.る, かよ.う', 'thông qua, đi lại, đi làm', 'pass through, commute', 10, '辶', 'N4', 'THÔNG', 'Đường đi thông suốt kết nối muôn nơi'],
  ['割', 'カツ', 'わ.る, わ.れる, わり', 'chia, vỡ, tỷ lệ', 'divide, split', 12, '刀', 'N3', 'CÁT', 'Dùng dao chia phần công bằng'],
  ['勘', 'カン', 'かんが.える', 'trực giác, tính toán', 'intuition, perception', 13, '力', 'N1', 'KHÁM', 'Dùng sức lực và trí tuệ để suy xét tính toán'],
  ['麺', 'メン', 'むぎ', 'mì, bột mì kéo sợi', 'noodles, wheat', 16, '麦', 'N1', 'MIẾN', 'Lúa mạch nhào nặn kéo thành sợi mì dai ngon'],
  ['着', 'チャク, ジャク', 'き.る, き.せる, つ.く', 'mặc, đến nơi', 'wear, arrive', 12, '目', 'N4', 'TRƯỚC, TRỨ', 'Người mặc y phục chỉnh tề đến nơi'],
  ['物', 'ブツ, モツ', 'もの', 'vật, đồ vật', 'thing, object', 8, '牛', 'N5', 'VẬT', 'Đồ vật, vạn vật trên cõi đời'],
  ['浴', 'ヨク', 'あ.びる, あ.びせる', 'tắm, đắm mình', 'bathe, bask', 10, '氵', 'N3', 'DỤC', 'Dòng nước suối trong thung lũng tắm mát'],
  ['衣', 'イ, エ', 'ころも, きぬ', 'y phục, áo', 'clothes, garment', 6, '衣', 'N3', 'Y', 'Tà áo truyền thống che chở thân mình'],
  ['帯', 'タイ', 'お.びる, おび', 'đai thắt lưng, dải', 'sash, belt, zone', 10, '巾', 'N3', 'ĐỚI, ĐÀI', 'Dải khăn thắt lưng quấn quanh eo thon'],
  ['服', 'フク', '', 'trang phục, phục tùng', 'clothing, obey', 8, '月', 'N4', 'PHỤC', 'Y phục mặc vào người mang vẻ trang nghiêm'],
  ['花', 'カ, ケ', 'はな', 'hoa, bông hoa', 'flower', 7, '艹', 'N5', 'HOA', 'Cỏ cây biến hóa nở thành bông hoa rực rỡ'],
  ['火', 'カ', 'ひ, ほ', 'lửa, ngọn lửa', 'fire', 4, '火', 'N5', 'HỎA', 'Ngọn lửa bốc cháy bừng sáng'],
  ['就', 'シュウ, ジュ', 'つ.く, つ.ける', 'bước vào, đảm nhận việc', 'settle in, take position', 12, '尢', 'N2', 'TỰU', 'Bước lên kinh đô đảm nhận chức vụ'],
  ['職', 'ショク', '', 'chức vụ, nghề nghiệp', 'employment, job', 18, '耳', 'N3', 'CHỨC', 'Lắng nghe bằng tai để hoàn thành chức trách nghề nghiệp'],
  ['活', 'カツ', 'い.きる, い.かす', 'sinh hoạt, hoạt bát, sống', 'lively, active', 9, '氵', 'N4', 'HOẠT', 'Dòng nước chảy bên đầu lưỡi tạo nên sức sống'],
  ['動', 'ドウ', 'うご.く, うご.かす', 'chuyển động, hành động', 'move, motion', 11, '力', 'N4', 'ĐỘNG', 'Nặng nề dùng sức lực để chuyển động'],
  ['身', 'シン', 'み', 'thân thể, bản thân', 'body, oneself', 7, '身', 'N3', 'THÂN', 'Hình dáng người với thân mình đứng thẳng'],
  ['面', 'メン', 'おも, おもて, つら', 'mặt, diện mạo, bề mặt', 'face, mask, surface', 9, '面', 'N3', 'DIỆN', 'Khuôn mặt tròn với đôi mắt và sống mũi'],
  ['接', 'セツ', 'つ.ぐ', 'tiếp xúc, gắn kết', 'contact, join', 11, '扌', 'N3', 'TIẾP', 'Bàn tay đón tiếp người phụ nữ một cách lịch thiệp'],
  ['履', 'リ', 'は.く', 'xỏ chân, giày dép, lý lịch', 'footwear, walk', 15, '尸', 'N1', 'LÍ', 'Mái nhà và bàn chân xỏ vào đôi giày đi lại'],
  ['歴', 'レキ', '', 'trải qua, lịch sử', 'pass through, history', 14, '止', 'N3', 'LỊCH', 'Những bước chân đi qua những tán rừng lịch sử'],
  ['書', 'ショ', 'か.く', 'viết, quyển sách', 'write, book', 10, '曰', 'N5', 'THƯ', 'Bàn tay cầm bút viết lời hay lên trang giấy'],
  ['清', 'セイ, ショウ', 'きよ.い, きよ.まる', 'trong sạch, thanh khiết', 'pure, clean', 11, '氵', 'N3', 'THANH', 'Dòng nước xanh biếc trong vắt như ngọc'],
  ['潔', 'ケツ', 'いさぎよ.い', 'trong sạch, tinh khiết', 'pure, clean, noble', 15, '氵', 'N2', 'KHIẾT', 'Nước suối gội rửa sạch sẽ từng sợi tơ'],
  ['感', 'カン', '', 'cảm xúc, cảm giác', 'feeling, emotion', 13, '心', 'N3', 'CẢM', 'Trái tim rung động cảm nhận mọi điều xung quanh'],
  ['内', 'ナイ, ダイ', 'うち', 'bên trong, nội bộ', 'inside, within', 4, '冂', 'N4', 'NỘI', 'Bước vào bên trong cánh cổng ngôi nhà'],
  ['定', 'テイ, ジョウ', 'さだ.まる, さだ.める', 'xác định, cố định, giờ giấc', 'fix, decide', 8, '宀', 'N3', 'ĐỊNH', 'Dưới mái nhà bàn chân đứng vững chắc chắn'],
  ['祭', 'サイ', 'まつ.る, まつり', 'lễ tế, lễ hội', 'festival, ritual', 11, '示', 'N3', 'TẾ', 'Dâng thịt bằng tay lên bàn thờ thần linh trong ngày lễ hội'],
  ['神', 'シン, ジン', 'かみ, かん', 'thần linh, tâm thần', 'god, deity, spirit', 9, '礻', 'N3', 'THẦN', 'Tia chớp sáng rực rỡ từ cõi trời linh thiêng'],
  ['社', 'シャ', 'やしろ', 'đền thần, công ty, xã hội', 'shrine, company, society', 7, '礻', 'N5', 'XÃ', 'Bàn thờ thần linh trên mảnh đất quê hương'],
  ['台', 'ダイ, タイ', 'うてな', 'cái bệ, đài, chiếc xe', 'stand, platform, pedestal', 5, '口', 'N4', 'ĐÀI', 'Cái bệ cao vững chãi để bày biện'],
  ['太', 'タイ, タ', 'ふと.い, ふと.る', 'to, béo, thái bình', 'thick, fat, grand', 4, '大', 'N4', 'THÁI', 'Người to lớn dang tay chân vững chãi'],
  ['鼓', 'コ', 'つづみ', 'trống, đánh trống', 'drum, beat', 13, '鼓', 'N1', 'CỔ', 'Tay cầm cành dùi đánh vào mặt trống vang lừng'],
  ['絆', 'ハン', 'きずな, つな.ぐ', 'sợi dây gắn kết, ràng buộc', 'bonds, ties', 11, '糸', 'N1', 'BÁN', 'Sợi tơ nửa vòng gắn kết tình người keo sơn'],
  ['配', 'ハイ', 'くば.る', 'phân phát, phối hợp, chu đáo', 'distribute, allocate', 10, '酉', 'N3', 'PHỐI', 'Chia đều từng bình rượu men cho mọi người'],
  ['慮', 'リョ', 'おもんぱく.る', 'suy nghĩ, lo liệu, chu đáo', 'consider, deliberate', 15, '心', 'N2', 'LỰ', 'Hổ ngồi ngẫm nghĩ trong lòng sâu sắc'],
  ['丁', 'テイ, チョウ', '', 'ngăn nắp, lịch thiệp, đinh', 'street, ward, polite', 2, '一', 'N3', 'ĐINH', 'Chiếc đinh thẳng đứng ngay ngắn'],
  ['寧', 'ネイ', '', 'yên tĩnh, chu đáo', 'peaceful, polite', 14, '宀', 'N2', 'NINH', 'Dưới mái nhà an tâm bình yên chu đáo'],
  ['謝', 'シャ', 'あやま.る', 'tạ ơn, tạ lỗi, từ chối', 'thank, apologize', 17, '言', 'N3', 'TẠ', 'Lời nói chân thành cảm ơn hoặc nhận lỗi'],
  ['辞', 'ジ', 'や.める', 'từ ngữ, nghi thức, từ chức', 'word, resign, polite', 13, '辛', 'N3', 'TỪ', 'Dùng lời lẽ công minh phân định rõ ràng'],
  ['儀', 'ギ', '', 'nghi thức, lễ nghi', 'ceremony, etiquette', 15, '亻', 'N2', 'NGHI', 'Con người tuân theo lẽ công bằng và nghi thức chuẩn mực'],
  ['礼', 'レイ, ライ', '', 'lễ nghi, cúi chào, cảm ơn', 'bow, etiquette, thanks', 5, '礻', 'N3', 'LỄ', 'Thành kính cúi đầu trước bàn thờ tổ tiên'],
  ['給', 'キュウ', 'たま.う', 'cung cấp, tiền lương', 'supply, wage, grant', 12, '糸', 'N3', 'CẤP', 'Chắp nối sợi tơ đầy đủ cung cấp cho muôn người'],
  ['掃', 'ソウ', 'は.く', 'quét tước, dọn dẹp', 'sweep, clear', 11, '扌', 'N3', 'TẢO', 'Bàn tay cầm chổi quét sạch bụi bặm'],
  ['除', 'ジョ, ジ', ' veteran, のぞ.く', 'loại bỏ, khử trừ', 'remove, exclude', 10, '阝', 'N3', 'TRỪ', 'Gò đất trừ bỏ mọi chướng ngại vật'],
  ['部', 'ブ', '', 'bộ phận, câu lạc bộ', 'section, club, part', 11, '阝', 'N4', 'BỘ', 'Mỗi vùng đất chia thành từng bộ phận riêng biệt'],
  ['上', 'ジョウ', 'うえ, あ.がる, のぼ.る', 'ở trên, lên trên', 'up, above', 3, '一', 'N5', 'THƯỢNG', 'Dấu chỉ hướng lên phía trên mặt đất'],
  ['先', 'セン', 'さき, ま.ず', 'trước tiên, phía trước', 'before, ahead', 6, '儿', 'N5', 'TIÊN', 'Đôi chân bước đi trước dẫn đường'],
  ['輩', 'ハイ', 'ともがら', 'thế hệ, đồng loại, lứa', 'fellows, generation', 15, '車', 'N2', 'BỐI', 'Đoàn xe song hành cùng chở một thế hệ người'],
  ['後', 'ゴ, コウ', 'のち, うし.ろ, あと', 'sau này, phía sau', 'after, behind', 9, '彳', 'N5', 'HẬU', 'Bước chân đi chậm rãi theo sau'],
  ['受', 'ジュ', 'う.ける, う.かる', 'nhận lấy, dự thi', 'receive, take (test)', 8, '又', 'N3', 'THỤ', 'Bàn tay đưa đồ trao nhận lấy'],
  ['験', 'ケン, ゲン', '', 'kiểm nghiệm, thí nghiệm', 'test, examine', 18, '馬', 'N4', 'NGHIỆM', 'Ngựa chạy kiểm tra độ bền thực tế'],
  ['塾', 'ジュク', '', 'trung tâm học thêm, trường tư', 'cram school', 14, '土', 'N1', 'THỤC', 'Nền đất vững chãi để xây dựng trường tư thục'],
  ['合', 'ゴウ, ガッ', 'あ.う, あ.わせる', 'hợp lại, vừa vặn, thi đỗ', 'fit, join, match', 6, '口', 'N4', 'HỢP', 'Ba người cùng chung một miệng tiếng hòa hợp'],
  ['格', 'カク, コウ', '', 'quy cách, tư cách, đẳng cấp', 'status, standard', 10, '木', 'N3', 'CÁCH', 'Cây gỗ đo đạc theo đúng quy cách tiêu chuẩn'],
  ['絵', 'カイ, エ', '', 'bức tranh, hội họa', 'picture, painting', 12, '糸', 'N4', 'HỘI', 'Sợi chỉ ngũ sắc thêu dệt nên bức tranh đẹp'],
  ['馬', 'バ', 'うま, ま', 'con ngựa', 'horse', 10, '馬', 'N4', 'MÃ', 'Hình dáng chú ngựa với bờm dài và bốn chân phi nhanh'],
  ['守', 'シュ, ス', 'まも.る, もり', 'bảo vệ, gìn giữ, bùa', 'protect, defend, obey', 6, '宀', 'N3', 'THỦ', 'Dưới mái nhà bàn tay che chở'],
  ['努', 'ド', 'つと.める', 'nỗ lực, gắng sức', 'toil, diligent', 7, '力', 'N3', 'NỖ', 'Dùng toàn bộ sức lực của người tớ để phấn đấu'],
  ['力', 'リョク, リキ', 'ちから', 'sức lực, năng lực', 'power, strength', 2, '力', 'N5', 'LỰC', 'Cánh tay gồng cơ bắp tràn đầy sức mạnh'],
  ['報', 'ホウ', 'むく.いる', 'báo cáo, đền đáp, tin tức', 'report, reward', 12, '土', 'N3', 'BÁO', 'Dùng sự thật để báo cáo đền đáp công ơn'],
  ['告', 'コク', 'つ.げる', 'thông báo, cáo tri', 'tell, inform', 7, '口', 'N3', 'CÁO', 'Dùng miệng nói lời thông cáo rõ ràng'],
  ['連', 'レン', 'つら.なる, つ.れる', 'liên kết, dắt theo', 'connect, take along', 10, '辶', 'N4', 'LIÊN', 'Đoàn xe nối đuôi nhau di chuyển trên đường'],
  ['絡', 'ラク', 'から.む, から.まる', 'liên lạc, quấn quýt', 'entangle, connect', 12, '糸', 'N3', 'LẠC', 'Sợi tơ quấn quanh kết nối liên lạc'],
  ['相', 'ソウ, ショウ', 'あい', 'tương hỗ, lẫn nhau, tướng', 'mutual, together', 9, '目', 'N3', 'TƯƠNG', 'Mắt ngắm nhìn cây cối tương hỗ lẫn nhau'],
  ['談', 'ダン', '', 'đàm đạo, thảo luận', 'discuss, talk', 15, '言', 'N3', 'ĐÀM', 'Lời nói ấm áp như ngọn lửa bập bùng đàm đạo'],
  ['残', 'ザン', 'のこ.る, のこ.す', 'tàn dư, còn lại, tăng ca', 'remain, leftover', 10, '歹', 'N3', 'TÀN', 'Xương tàn sót lại sau bao năm tháng'],
  ['業', 'ギョウ, ゴウ', 'わざ', 'nghiệp, nghề nghiệp, công việc', 'business, industry, karma', 13, '木', 'N4', 'NGHIỆP', 'Cái giá gỗ lớn treo chuông thành tựu sự nghiệp'],
  ['納', 'ノウ, ナッ', 'おさ.める, おさ.まる', 'thu nạp, giao hàng, đóng thuế', 'obtain, supply, pay', 10, '糸', 'N2', 'NẠP', 'Thu nạp từng cuộn tơ lụa vào kho'],
  ['期', 'キ, ゴ', '', 'thời kỳ, kỳ hạn, mong đợi', 'period, term, time', 12, '月', 'N3', 'KỲ', 'Mặt trăng tròn khuyết theo đúng chu kỳ thời gian'],
  ['共', 'キョウ', 'とも, とも.に', 'chung, cùng nhau, cộng sản', 'together, both', 6, '八', 'N3', 'CỘNG', 'Hai bàn tay cùng nâng niu một vật phẩm'],
  ['有', 'ユウ, ウ', 'あ.る', 'có, tồn tại, hữu ích', 'have, possess, exist', 6, '月', 'N4', 'HỮU', 'Bàn tay nắm giữ miếng thịt no đủ'],
  ['飲', 'イン', 'の.む', 'uống', 'drink', 12, '食', 'N5', 'ẨM', 'Há miệng đón nhận thức uống ngon lành'],
  ['会', 'カイ, エ', 'あ.う', 'hội ngộ, gặp gỡ, công ty', 'meet, society', 6, '人', 'N5', 'HỘI', 'Mọi người tụ họp dưới một mái nhà chung'],
  ['司', 'シ', 'つかさど.る', 'cai quản, giám đốc, chủ trì', 'administer, official', 5, '口', 'N3', 'TI', 'Người đứng đầu mở miệng ra lệnh chỉ đạo'],
  ['僚', 'リョウ', '', 'đồng liêu, bạn đồng nghiệp', 'colleague, coworker', 14, '亻', 'N2', 'LIÊU', 'Người bạn cùng chung ngọn đuốc thắp sáng công việc'],
  ['労', 'ロウ', 'ねぎら.う, つか.れる', 'lao động, vất vả, cảm ơn', 'labor, effort, fatigue', 7, '力', 'N3', 'LAO', 'Ngọn đuốc sáng soi người dùng sức lao động'],
  ['次', 'ジ, シ', 'つぎ, つ.ぐ', 'tiếp theo, thứ hai', 'next, order, second', 6, '欠', 'N3', 'THỨ', 'Người há miệng thở đợi đến lượt tiếp theo'],
  ['語', 'ゴ', 'かた.る, かた.らう', 'ngôn ngữ, tiếng, kể chuyện', 'word, language, tell', 14, '言', 'N5', 'NGỮ', 'Lời nói của năm người đúc kết thành ngôn ngữ'],
  ['尊', 'ソン', 'とうと.い, たっと.い', 'tôn kính, tôn quý', 'revered, precious, honor', 12, '寸', 'N2', 'TÔN', 'Hai tay nâng niu chén rượu quý tôn kính'],
  ['謙', 'ケン', 'へりくだ.る', 'khiêm tốn, nhún nhường', 'modest, humble', 17, '言', 'N1', 'KHIÊM', 'Lời nói kiêm toàn mọi điều khiêm nhường'],
  ['譲', 'ジョウ', 'ゆず.る', 'nhường nhịn, chuyển nhượng', 'yield, defer, transfer', 20, '言', 'N1', 'NHƯỢNG', 'Dùng lời nói nhã nhặn nhường nhịn người khác'],
  ['世', 'セイ, セ', 'よ', 'thế gian, đời người, thời thế', 'world, era, generation', 5, '一', 'N4', 'THẾ', 'Ba mươi năm nối tiếp thành một đời người'],
  ['話', 'ワ', 'はな.す, はなし', 'nói chuyện, câu chuyện', 'talk, story', 13, '言', 'N5', 'THOẠI', 'Lời nói từ đầu lưỡi phát ra câu chuyện'],
  ['恐', 'キョウ', 'おそ.れる, おそ.ろしい', 'lo sợ, sợ hãi, áy náy', 'fear, dread, awe', 10, '心', 'N3', 'KHỦNG', 'Trong lòng run rẩy sợ hãi kính cẩn'],
  ['縮', 'シュク', 'ちぢ.む, ちぢ.まる', 'co lại, thu nhỏ, rút gọn', 'shrink, contract', 17, '糸', 'N2', 'SÚC', 'Sợi tơ co lại dưới mái nhà ấm áp'],
];

async function seedCultureDictionary(externalClient = null) {
  const isInternalClient = !externalClient;
  const client =
    externalClient ||
    new Client({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

  if (isInternalClient) {
    await client.connect();
    await client.query('BEGIN');
  }

  try {
    console.log('[SEED CULTURE] Inserting Kanji...');
    for (const [
      kanji,
      onyomi,
      kunyomi,
      meaningVi,
      meaningEn,
      strokeCount,
      radical,
      jlptLevel,
      hanViet,
      mnemonic,
    ] of CULTURE_KANJI) {
      await client.query(
        `
          INSERT INTO kanji (
            kanji,
            onyomi,
            kunyomi,
            meaning_vi,
            meaning_en,
            stroke_count,
            radical,
            jlpt_level,
            unicode_code,
            han_viet,
            mnemonic,
            created_at,
            updated_at
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), NOW())
          ON CONFLICT (kanji) DO UPDATE SET
            onyomi = EXCLUDED.onyomi,
            kunyomi = EXCLUDED.kunyomi,
            meaning_vi = EXCLUDED.meaning_vi,
            meaning_en = EXCLUDED.meaning_en,
            stroke_count = EXCLUDED.stroke_count,
            radical = EXCLUDED.radical,
            jlpt_level = EXCLUDED.jlpt_level,
            han_viet = EXCLUDED.han_viet,
            mnemonic = EXCLUDED.mnemonic,
            updated_at = NOW()
        `,
        [
          kanji,
          onyomi,
          kunyomi,
          meaningVi,
          meaningEn,
          strokeCount,
          radical,
          jlptLevel,
          `U+${kanji.codePointAt(0).toString(16).toUpperCase()}`,
          hanViet,
          mnemonic,
        ],
      );
    }

    console.log('[SEED CULTURE] Inserting Vocabulary, Notes & Examples...');
    for (const item of CULTURE_VOCABULARY) {
      const existingRes = await client.query(
        'SELECT id FROM vocabulary WHERE word = $1 AND kana = $2',
        [item.word, item.kana],
      );

      let vocabId;
      if (existingRes.rows.length > 0) {
        vocabId = existingRes.rows[0].id;
        await client.query(
          `
            UPDATE vocabulary
            SET
              meaning_vi = $1,
              meaning_en = $2,
              word_type = $3,
              jlpt_level = $4,
              notes = $5,
              tags = $6,
              updated_at = NOW()
            WHERE id = $7
          `,
          [
            item.meaningVi,
            item.meaningEn,
            item.wordType,
            item.jlptLevel,
            item.notes || '',
            item.tags,
            vocabId,
          ],
        );
      } else {
        const insertRes = await client.query(
          `
            INSERT INTO vocabulary (
              word,
              kana,
              romaji,
              meaning_vi,
              meaning_en,
              word_type,
              jlpt_level,
              notes,
              tags,
              created_at,
              updated_at
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), NOW())
            RETURNING id
          `,
          [
            item.word,
            item.kana,
            item.romaji,
            item.meaningVi,
            item.meaningEn,
            item.wordType,
            item.jlptLevel,
            item.notes || '',
            item.tags,
          ],
        );
        vocabId = insertRes.rows[0].id;
      }

      if (vocabId && item.examples && item.examples.length > 0) {
        // Clear old examples and insert fresh ones
        await client.query('DELETE FROM vocabulary_examples WHERE vocabulary_id = $1', [vocabId]);
        for (const ex of item.examples) {
          await client.query(
            `
              INSERT INTO vocabulary_examples (
                vocabulary_id,
                example_jp,
                example_kana,
                example_vi,
                created_at
              )
              VALUES ($1, $2, $3, $4, NOW())
            `,
            [vocabId, ex.jp, ex.kana, ex.vi],
          );
        }
      }
    }

    if (isInternalClient) {
      await client.query('COMMIT');
    }
    console.log('[SEED CULTURE] Successfully seeded culture vocabulary, notes, examples, and kanji into database!');
  } catch (err) {
    if (isInternalClient) {
      await client.query('ROLLBACK').catch(() => {});
    }
    console.error('[SEED CULTURE] Error seeding:', err);
    throw err;
  } finally {
    if (isInternalClient) {
      await client.end().catch(() => {});
    }
  }
}

if (require.main === module) {
  seedCultureDictionary().catch(() => {
    process.exitCode = 1;
  });
}

module.exports = {
  seedCultureDictionary,
  CULTURE_VOCABULARY,
  CULTURE_KANJI,
};
