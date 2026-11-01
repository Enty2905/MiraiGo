import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { DashboardNav } from '../../components/dashboard/dashboard-nav'
import { NAV_ITEMS } from '../dashboard/dashboard-content'
import '../dashboard/dashboard-page.css'
import './culture-page.css'

function LightbulbIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}

function ArrowUpRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

const CATEGORY_FILTERS = [
  { id: 'all', label: 'Tất cả' },
  { id: 'food', label: 'Ẩm thực' },
  { id: 'fashion', label: 'Thời trang' },
  { id: 'culture', label: 'Văn hóa' },
  { id: 'study', label: 'Học tập' },
  { id: 'work', label: 'Đi làm' },
]

const CULTURE_ARTICLES = [
  // ==========================================
  // 1. ẨM THỰC (FOOD)
  // ==========================================
  {
    id: 'washoku',
    category: 'food',
    categoryLabel: 'Ẩm thực',
    title: 'Washoku và cách người Nhật kể chuyện mùa qua bữa ăn',
    japaneseTitle: '和食と旬の味',
    readTime: '6 phút đọc',
    accent: 'coral',
    visual: '食',
    visualCaption: 'Bữa ăn theo mùa',
    summary:
      'Ẩm thực Nhật không chỉ là sushi hay ramen. Tinh thần washoku đặt sự cân bằng, mùa vụ và cách trình bày lên cùng một bàn ăn.',
    lead:
      'Ẩm thực truyền thống Nhật Bản (Washoku - 和食) đã được UNESCO công nhận là Di sản văn hóa phi vật thể thế giới không chỉ vì hương vị thanh khiết, mà bởi chiều sâu triết lý tôn trọng thiên nhiên và sự hài hòa ngũ sắc, ngũ vị.',
    sections: [
      {
        heading: 'Triết lý "Nhất thang tam thái" (一汁三菜 - Ichiju-Sansai)',
        paragraphs: [
          'Một bữa cơm gia đình kiểu mẫu của người Nhật luôn xoay quanh cấu trúc "một canh ba món": cơm trắng là trung tâm tinh bột, một bát canh miso nóng hổi (nhất thang) và ba món ăn kèm (tam thái) gồm một món đạm chính từ cá hoặc thịt, hai món phụ từ rau củ quả theo mùa, cùng một phần nhỏ dưa muối chua tsukemono.',
          'Cách bố trí này không chỉ mang lại sự cân đối hoàn hảo về dinh dưỡng, ít dầu mỡ, mà còn kích thích thị giác qua cách bài trí khay cơm: bát cơm luôn đặt bên tay trái, bát canh đặt bên tay phải, đũa gác ngang phía trước.',
        ],
      },
      {
        heading: 'Khái niệm Shun (旬) - Trân quý tinh hoa bốn mùa',
        paragraphs: [
          'Shun (旬) là khoảnh khắc vàng khi một loại nông sản hoặc hải sản đạt độ tươi ngon, béo ngọt và giàu dinh dưỡng nhất trong năm. Người Nhật mong chờ từng mùa trôi qua để thưởng thức đúng hương vị của đất trời.',
          'Mùa xuân đón măng non (takenoko) và vị đắng nhẹ của hoa rau; mùa hè giải nhiệt với lươn nướng unagi và dưa chuột giòn; mùa thu béo ngậy cá thu đao sanma nướng muối cùng nấm matsutake; mùa đông sưởi ấm tâm hồn với nồi lẩu củ cải ngọt và cá cam buri.',
        ],
      },
      {
        heading: 'Lễ nghi bên chén cơm và kiêng kỵ khi dùng đũa',
        paragraphs: [
          'Khi ăn, người Nhật luôn nâng bát cơm hoặc bát canh lên ngang ngực bằng cả bàn tay để thưởng thức, thể hiện sự nâng niu hạt ngọc trời. Việc để bát trên bàn và cúi gục đầu xuống ăn (inu-gui - ăn kiểu cẩu) bị xem là rất khiếm nhã.',
          'Đặc biệt, tuyệt đối tránh cắm thẳng đôi đũa vào bát cơm (tsukitate-bashi) vì đây là hình thức cúng cơm trong đám tang Phật giáo, và không chuyền thức ăn trực tiếp từ đũa sang đũa (hashi-watashi) vì gợi nhớ nghi thức gắp tro cốt người đã khuất.',
        ],
      },
    ],
    culturalTip: {
      title: 'Cách nói "Itadakimasu" và "Gochisousama" chuẩn mực',
      text: 'Trước khi cầm đũa, hãy chắp hai tay trước ngực và nói khẽ "Itadakimasu" (いただきます - Tôi xin thành kính đón nhận sự sống của vạn vật và công lao người nấu). Sau khi ăn xong, tiếp tục chắp tay và nói "Gochisousama deshita" (ごちそうさまでした) để cảm tạ sự chu đáo.',
    },
    quote: {
      japanese: 'いただきます。命をいただく、感謝の心。',
      vietnamese: 'Itadakimasu - Lời cảm tạ chân thành vì được đón nhận sự sống của vạn vật.',
    },
    vocabulary: [
      { word: '和食', kana: 'わしょく', romaji: 'washoku', meaning: 'Ẩm thực truyền thống Nhật' },
      { word: '旬', kana: 'しゅん', romaji: 'shun', meaning: 'Mùa vụ ngon nhất của nguyên liệu' },
      { word: '一汁三菜', kana: 'いちじゅうさんさい', romaji: 'ichiju-sansai', meaning: 'Cấu trúc bữa ăn một canh ba món' },
      { word: '箸置き', kana: 'はしおき', romaji: 'hashioki', meaning: 'Đồ gác đũa' },
      { word: 'だし', kana: 'だし', romaji: 'dashi', meaning: 'Nước dùng cốt cá ngừ và tảo bẹ' },
      { word: 'ごちそうさま', kana: 'ごちそうさま', romaji: 'gochisousama', meaning: 'Lời cảm ơn sau bữa ăn' },
    ],
  },
  {
    id: 'ramen-izakaya',
    category: 'food',
    categoryLabel: 'Ẩm thực',
    title: 'Ramen & Izakaya: Linh hồn ẩm thực đường phố và sau giờ làm việc',
    japaneseTitle: '居酒屋とラーメン',
    readTime: '7 phút đọc',
    accent: 'coral',
    visual: '酒',
    visualCaption: 'Quán nhậu & Phố đêm',
    summary:
      'Không gian ấm áp của quán nhậu Izakaya và tiếng húp mì Ramen xì xụp phản ánh hơi thở đời thường sống động nhất của người dân đô thị.',
    lead:
      'Nếu Washoku là nghệ thuật thanh tao trong các dịp trang trọng, thì quán nhậu bình dân Izakaya và những quán Ramen khói nghi ngút ẩn mình trong ngõ hẻm chính là nơi rũ bỏ mọi áp lực và gắn kết con người đời thường ở xứ Phù Tang.',
    sections: [
      {
        heading: 'Izakaya - Nơi rũ bỏ khoảng cách và thứ bậc',
        paragraphs: [
          'Sau 6 giờ tối, các con ngõ Yokocho sáng rực ánh đèn lồng đỏ Akachochin. Tại Izakaya, quy tắc thứ bậc nơi công sở tạm thời được thả lỏng. Nghi thức mở đầu quen thuộc của hầu hết bàn nhậu là câu gọi "Toriaezu Nama!" (Cho tôi một cốc bia tươi trước nhé!) để mọi người cùng nâng ly cạn chén "Kanpai!".',
          'Mỗi thực khách thường được phục vụ một đĩa khai vị nhỏ gọi là "Otoshi" - nét đặc trưng tính phí dịch vụ chỗ ngồi (seat fee) rất phổ biến trong văn hóa ẩm thực Nhật Bản.',
        ],
      },
      {
        heading: 'Tại sao ăn mì Ramen lại phải húp xì xụp?',
        paragraphs: [
          'Khác với văn hóa phương Tây xem việc phát ra tiếng động khi ăn là thô lỗ, tại Nhật, húp mì Ramen thành tiếng (gọi là "Zuzutto") là lời khen ngợi gián tiếp dành cho đầu bếp, thể hiện bạn đang thưởng thức món ăn một cách trọn vẹn và ngon lành.',
          'Về mặt khoa học ẩm thực, hành động húp mạnh giúp sợi mì kéo theo cả nước dùng dashi nóng hổi, đồng thời luồng khí tràn vào khoang miệng làm bùng nổ hương thơm ngào ngạt của nước dùng mà không làm bỏng lưỡi.',
        ],
      },
      {
        heading: 'Văn hóa chia tiền sòng phẳng (Warikan)',
        paragraphs: [
          'Trong các buổi tụ tập bạn bè hoặc đồng nghiệp ngang hàng, người Nhật thường chia đều hóa đơn đến từng đồng yên (Warikan - 割り勘).',
          'Nếu cấp trên muốn chiêu đãi cấp dưới, họ sẽ khéo léo nói trước hoặc thanh toán kín đáo tại quầy thu ngân lúc mọi người chưa chú ý, tránh phô trương lộ liễu.',
        ],
      },
    ],
    culturalTip: {
      title: 'Lễ nghi nâng ly và rót bia tại quán Izakaya',
      text: 'Khi nâng ly cùng cấp trên hoặc tiền bối, hãy giữ mép ly của mình thấp hơn một chút so với ly của họ để bày tỏ lòng tôn kính. Khi thấy ly bia của người ngồi cạnh đã vơi, hãy chủ động dùng hai tay cầm chai rót thêm cho họ trước khi rót cho mình.',
    },
    quote: {
      japanese: 'とりあえず生！今日もお疲れ様でした。',
      vietnamese: '"Cho một cốc bia tươi trước! Hôm nay mọi người cũng vất vả rồi."',
    },
    vocabulary: [
      { word: '居酒屋', kana: 'いざかや', romaji: 'izakaya', meaning: 'Quán nhậu truyền thống Nhật Bản' },
      { word: '乾杯', kana: 'かんぱい', romaji: 'kanpai', meaning: 'Nâng ly cạn chén' },
      { word: '割り勘', kana: 'わりかん', romaji: 'warikan', meaning: 'Chia đều tiền hóa đơn' },
      { word: 'お通し', kana: 'おとおし', romaji: 'otoshi', meaning: 'Món khai vị tính phí chỗ ngồi' },
      { word: '麺', kana: 'めん', romaji: 'men', meaning: 'Sợi mì' },
      { word: 'スープ', kana: 'すーぷ', romaji: 'suupu', meaning: 'Nước dùng mì' },
    ],
  },

  // ==========================================
  // 2. THỜI TRANG (FASHION)
  // ==========================================
  {
    id: 'street-fashion',
    category: 'fashion',
    categoryLabel: 'Thời trang',
    title: 'Từ Kimono truyền thống đến Harajuku: Bản sắc thời trang Nhật',
    japaneseTitle: '和服と現代モード',
    readTime: '6 phút đọc',
    accent: 'violet',
    visual: '装',
    visualCaption: 'Kimono và phố trẻ',
    summary:
      'Thời trang Nhật tạo ấn tượng bởi sự chỉn chu trong lễ nghi và khả năng thử nghiệm táo bạo ở các khu phố trẻ.',
    lead:
      'Thời trang Nhật Bản là một bức tranh đối lập đầy mê hoặc: một bên là chuẩn mực nghi lễ hàng thế kỷ của Kimono, một bên là sàn diễn đường phố Harajuku nơi mọi biên giới sáng tạo được tự do bộc lộ.',
    sections: [
      {
        heading: 'Kimono và Yukata - Sự tỉ mỉ trong từng nếp vải',
        paragraphs: [
          'Kimono truyền thống đòi hỏi quy trình mặc nhiều lớp với thắt lưng Obi công phu, thường dành cho các dịp lễ trọng đại như Seijin Shiki (Lễ trưởng thành) hay lễ cưới. Vào mùa hè, người Nhật chuộng Yukata - phiên bản nhẹ nhàng làm từ vải bông thoáng mát để đi ngắm pháo hoa (Hanabi) và dạo lễ hội Matsuri.',
          'Họa tiết trên Kimono cũng phản ánh bốn mùa: hoa đào và mây trắng mùa xuân, sóng biển và chuồn chuồn mùa hè, lá phong momiji đỏ rực mùa thu và cành tùng bách phủ tuyết mùa đông.',
        ],
      },
      {
        heading: 'Quy tắc vạt áo sinh tử không được phép nhầm lẫn',
        paragraphs: [
          'Dù là Kimono hay Yukata, quy tắc bất di bất dịch là vạt áo bên trái luôn phải đè lên vạt áo bên phải (gọi là Migi-mae).',
          'Chỉ có người đã khuất trong nghi lễ tang ma mới được mặc vạt phải đè lên vạt trái. Đây là lỗi sai cấm kỵ mà du khách và người học tiếng Nhật cần đặc biệt lưu ý khi tự mặc hoặc thuê trang phục truyền thống.',
        ],
      },
      {
        heading: 'Kinh đô Harajuku & Triết lý tối giản đương đại',
        paragraphs: [
          'Tại các khu phố Harajuku, Shibuya và Shimokitazawa, giới trẻ biến đường phố thành triển lãm nghệ thuật sống với phong cách Kawaii, Decora hay Vintage tái chế.',
          'Ngược lại, thời trang ứng dụng Nhật Bản lại tôn sùng phong cách tối giản (Minimalism) với gam màu trung tính, form dáng suông thoải mái và chất liệu tự nhiên, mang tinh thần Wabi-sabi vào trang phục hàng ngày.',
        ],
      },
    ],
    culturalTip: {
      title: 'Mẹo nhỏ khi thuê và mặc Yukata dạo phố',
      text: 'Khi bước đi trong bộ Yukata, hãy bước những bước ngắn hơn thường lệ và hơi khép mũi chân vào trong. Dùng một chiếc khăn tay nhỏ kẹp vào đai Obi để lau mồ hôi và mang theo chiếc túi vải thắt dây (Kinchaku) để đựng điện thoại, ví tiền gọn gàng.',
    },
    quote: {
      japanese: '装いは礼儀なり。着る人の心が姿に現れる。',
      vietnamese: 'Trang phục là lễ nghi. Tấm lòng của người mặc luôn hiển hiện nơi phong thái.',
    },
    vocabulary: [
      { word: '着物', kana: 'きもの', romaji: 'kimono', meaning: 'Trang phục truyền thống Nhật' },
      { word: '浴衣', kana: 'ゆかた', romaji: 'yukata', meaning: 'Áo kimono mùa hè vải bông' },
      { word: '帯', kana: 'おび', romaji: 'obi', meaning: 'Thắt lưng áo kimono' },
      { word: '和服', kana: 'わふく', romaji: 'wafuku', meaning: 'Trang phục phong cách Nhật Bản' },
      { word: 'おしゃれ', kana: 'おしゃれ', romaji: 'oshare', meaning: 'Phong cách, ăn mặc sành điệu' },
      { word: '花火', kana: 'はなび', romaji: 'hanabi', meaning: 'Pháo hoa mùa hè' },
    ],
  },
  {
    id: 'shukatsu-suit',
    category: 'fashion',
    categoryLabel: 'Thời trang',
    title: 'Shūkatsu Suit: Kỷ luật và sự đồng nhất trong trang phục phỏng vấn',
    japaneseTitle: '就活スーツの美学',
    readTime: '6 phút đọc',
    accent: 'violet',
    visual: '服',
    visualCaption: 'Âu phục phỏng vấn',
    summary:
      'Tại sao sinh viên Nhật Bản đều mặc vest đen khi xin việc và bài học về tính tập thể, sự tôn trọng doanh nghiệp.',
    lead:
      'Bước vào mùa tuyển dụng (Shūkatsu - 就職活動), bạn sẽ bắt gặp hàng ngàn sinh viên Nhật Bản trong những bộ âu phục đen tuyền giống hệt nhau. Đây không chỉ là trang phục, mà là biểu tượng cho bước chuyển mình từ ghế nhà trường vào kỷ luật doanh nghiệp.',
    sections: [
      {
        heading: 'Bộ suit đen chuẩn mực đến từng chi tiết',
        paragraphs: [
          'Một bộ trang phục Shūkatsu đạt chuẩn bao gồm áo vest và quần tây/chân váy màu đen trơn, áo sơ mi trắng không họa tiết, giày da đen trơn đã đánh bóng và chiếc cặp tài liệu màu đen có đáy cứng đứng vững khi đặt xuống sàn cạnh chân ghế.',
          'Màu tóc phải là màu đen tự nhiên, móng tay cắt tỉa sạch sẽ và không xịt nước hoa nồng nặc.',
        ],
      },
      {
        heading: 'Ý nghĩa sâu sắc của sự đồng điệu',
        paragraphs: [
          'Nhiều người nước ngoài băn khoăn vì sao người Nhật không chọn trang phục thể hiện cá tính riêng khi đi phỏng vấn. Trong quan niệm tuyển dụng Nhật Bản, sự đồng nhất giúp hội đồng phỏng vấn hoàn toàn tập trung vào năng lực, thái độ, tư chất và tiềm năng của ứng viên mà không bị phân tâm bởi yếu tố bề ngoài.',
          'Người Nhật phân biệt rất rõ giữa "Oshare" (mặc đẹp vì sở thích cá nhân) và "Midashinami" (ăn mặc chỉnh tề, tươm tất để tạo sự dễ chịu và tôn trọng tuyệt đối cho người đối diện).',
        ],
      },
    ],
    culturalTip: {
      title: 'Quy tắc cởi áo khoác ngoài trước khi vào tòa nhà',
      text: 'Vào mùa đông, hãy cởi áo khoác ấm bên ngoài và gấp gọn gàng trên cánh tay trước khi bước qua cửa sảnh chính của tòa nhà công ty. Đừng đợi đến khi bước vào phòng phỏng vấn mới cởi áo khoác, vì điều đó bị xem là mang bụi bặm bên ngoài vào nơi làm việc.',
    },
    quote: {
      japanese: '身だしなみは相手への敬意から始まる。',
      vietnamese: 'Sự chỉn chu bắt đầu từ lòng tôn trọng sâu sắc dành cho người đối diện.',
    },
    vocabulary: [
      { word: '就活', kana: 'しゅうかつ', romaji: 'shuukatsu', meaning: 'Hoạt động tìm kiếm việc làm' },
      { word: '身だしなみ', kana: 'みだしなみ', romaji: 'midashinami', meaning: 'Sự tươm tất, chỉn chu diện mạo' },
      { word: '面接', kana: 'めんせつ', romaji: 'mensetsu', meaning: 'Cuộc phỏng vấn tuyển dụng' },
      { word: '履歴書', kana: 'りれきしょ', romaji: 'rirekisho', meaning: 'Bản sơ yếu lý lịch' },
      { word: '清潔感', kana: 'せいけつかん', romaji: 'seiketsukan', meaning: 'Cảm giác sạch sẽ, thiện cảm' },
      { word: '内定', kana: 'ないてい', romaji: 'naitei', meaning: 'Thông báo trúng tuyển việc làm' },
    ],
  },

  // ==========================================
  // 3. VĂN HÓA (CULTURE)
  // ==========================================
  {
    id: 'matsuri',
    category: 'culture',
    categoryLabel: 'Văn hóa',
    title: 'Matsuri: Khi cộng đồng hòa làm một trong nhịp trống Taiko',
    japaneseTitle: '日本の祭り',
    readTime: '7 phút đọc',
    accent: 'teal',
    visual: '祭',
    visualCaption: 'Lễ hội địa phương',
    summary:
      'Lễ hội Nhật Bản là nơi truyền thống, âm nhạc, ẩm thực đường phố và tinh thần cộng đồng cùng xuất hiện.',
    lead:
      'Mỗi khi tiếng trống Taiko dồn dập vang lên và cỗ kiệu thần Mikoshi lướt qua các con phố, người Nhật như bước vào một thế giới khác: cuồng nhiệt, gắn kết và chan hòa sức sống cộng đồng.',
    sections: [
      {
        heading: 'Linh hồn Thần đạo trong từng nhịp lễ hội',
        paragraphs: [
          'Matsuri khởi nguồn từ tín ngưỡng Thần đạo (Shinto) nhằm tạ ơn trời đất, cầu xin thần linh phù hộ cho mưa thuận gió hòa, mùa màng trĩu hạt và xua đuổi tai ương bệnh tật. Mỗi ngôi đền Jinja tại địa phương đều có những ngày hội lớn quy tụ toàn thể cư dân quanh vùng.',
          'Các lễ hội lớn như Gion Matsuri ở Kyoto, Kanda Matsuri ở Tokyo hay Nebuta Matsuri ở Aomori đã trở thành biểu tượng văn hóa thu hút hàng triệu du khách khắp năm châu.',
        ],
      },
      {
        heading: 'Sức mạnh tập thể quanh cỗ kiệu Mikoshi',
        paragraphs: [
          'Cỗ kiệu thần Mikoshi nặng hàng trăm kilogam được hàng chục thanh niên trai tráng mặc áo happi cùng nhau khiêng trên vai. Nhịp điệu dập dồn, tiếng hô đồng thanh "Wasshoi! Wasshoi!" hòa cùng tiếng chuông đồng thể hiện sức mạnh của sự đoàn kết và tinh thần tương thân tương ái.',
          'Đó là khoảnh khắc mọi rào cản xã hội thường ngày biến mất, chỉ còn lại sự đồng lòng của cả một tập thể.',
        ],
      },
      {
        heading: 'Thiên đường ẩm thực đường phố tại các quầy Yatai',
        paragraphs: [
          'Dọc hai bên đường dẫn vào đền thờ là hàng trăm gian hàng ẩm thực dã chiến (Yatai). Mùi thơm quyến rũ của Takoyaki nóng hổi rưới sốt nâu, thịt xiên Yakitori nướng than hoa, bắp nướng bơ xì dầu thơm lừng và các quầy trò chơi vớt cá vàng (Kingyo-sukui) tạo nên ký ức tuổi thơ không thể phai mờ của người Nhật.',
        ],
      },
    ],
    culturalTip: {
      title: 'Học tiếng Nhật sống động qua các câu reo hò lễ hội',
      text: 'Khi tham gia lễ hội, bạn sẽ nghe thấy tiếng hô vang "Wasshoi!" (わっしょい) mang ý nghĩa "Hòa làm một" hoặc "Seiya!". Hãy tự tin hòa mình vào dòng người nhảy điệu Bon Odori quanh tháp Yagura, người dân bản xứ sẽ vô cùng phấn khởi chỉ dẫn cho bạn!',
    },
    quote: {
      japanese: '祭りは地域の絆、世代をつなぐ心のふるさと。',
      vietnamese: 'Lễ hội là sợi dây gắn kết cộng đồng, là bến đỗ tâm hồn nối liền các thế hệ.',
    },
    vocabulary: [
      { word: '祭り', kana: 'まつり', romaji: 'matsuri', meaning: 'Lễ hội truyền thống' },
      { word: '神社', kana: 'じんじゃ', romaji: 'jinja', meaning: 'Đền thờ Thần đạo Shinto' },
      { word: '神輿', kana: 'みこし', romaji: 'mikoshi', meaning: 'Cỗ kiệu rước thần linh' },
      { word: '太鼓', kana: 'たいこ', romaji: 'taiko', meaning: 'Trống truyền thống Nhật Bản' },
      { word: '屋台', kana: 'やたい', romaji: 'yatai', meaning: 'Quầy ẩm thực đường phố dã chiến' },
      { word: '絆', kana: 'きずな', romaji: 'kizuna', meaning: 'Mối liên kết, sợi dây gắn bó tình cảm' },
    ],
  },
  {
    id: 'omotenashi',
    category: 'culture',
    categoryLabel: 'Văn hóa',
    title: 'Omotenashi: Lòng hiếu khách nằm trong những chi tiết tinh tế',
    japaneseTitle: 'おもてなしの心',
    readTime: '6 phút đọc',
    accent: 'rose',
    visual: '心',
    visualCaption: 'Sự tinh tế từ tâm',
    summary:
      'Omotenashi là cách phục vụ dự đoán nhu cầu của người khác mà không làm họ thấy bị áp lực.',
    lead:
      'Omotenashi không đơn thuần là dịch vụ khách hàng (Customer service), mà là triết lý đón tiếp xuất phát từ đáy lòng: thấu hiểu và đáp ứng nhu cầu của người khác trước cả khi họ nhận ra.',
    sections: [
      {
        heading: 'Nguồn gốc từ tinh hoa Trà đạo (Chanoyu)',
        paragraphs: [
          'Đại sư trà đạo Sen no Rikyu đã đúc kết triết lý tiếp khách qua câu thành ngữ "Ichigo Ichie" (Nhất kỳ nhất hội - 一期一会). Mỗi lần gặp gỡ giữa người với người trong cuộc đời này đều là cơ duyên duy nhất không thể lặp lại lần thứ hai, do đó người chủ trà luôn dốc trọn tâm can để chuẩn bị từ chén trà, đóa hoa đến góc treo tranh.',
        ],
      },
      {
        heading: 'Những chi tiết chăm sóc vô hình nhưng đầy rung động',
        paragraphs: [
          'Tại Nhật, bạn sẽ bắt gặp Omotenashi ở khắp mọi nơi: chiếc khăn ấm Oshibori đưa tận tay khách khi vừa bước vào quán ăn, chiếc móc treo túi xách được bố trí kín đáo dưới gầm bàn ăn, nhân viên siêu thị xoay tay cầm túi mua sắm về phía khách để họ xách đi dễ nhất, hay tài xế taxi bấm nút tự động mở cửa xe từ bên trong.',
          'Tại các nhà hàng hay khách sạn tại Nhật, việc để lại tiền tip có thể khiến nhân viên bối rối và chạy theo trả lại bạn tiền thừa. Đối với người Nhật, phục vụ chu đáo, tận tụy và lịch thiệp là niềm tự hào nghề nghiệp đã được bao hàm trọn vẹn trong giá trị công việc.',
        ],
      },
    ],
    culturalTip: {
      title: 'Cách đón nhận sự hiếu khách đúng mực',
      text: 'Khi nhận đồ vật từ nhân viên phục vụ, hãy đón bằng cả hai tay và khẽ cúi đầu mỉm cười nói "Arigatou gozaimasu". Sau khi trả phòng khách sạn hoặc dùng xong bữa tại quán, việc xếp gọn chăn gối hoặc gác đũa ngăn nắp là cách tinh tế nhất để gửi lại lòng biết ơn đối với người đã phục vụ mình.',
    },
    quote: {
      japanese: '一期一会。今この瞬間を心から大切にする。',
      vietnamese: 'Nhất kỳ nhất hội - Trân quý trọn vẹn từng khoảnh khắc gặp gỡ của hiện tại.',
    },
    vocabulary: [
      { word: 'おもてなし', kana: 'おもてなし', romaji: 'omotenashi', meaning: 'Lòng hiếu khách tận tâm' },
      { word: '一期一会', kana: 'いちごいちえ', romaji: 'ichigo ichie', meaning: 'Cuộc hội ngộ nghìn năm có một' },
      { word: 'おしぼり', kana: 'おしぼり', romaji: 'oshibori', meaning: 'Khăn ướt lau tay ấm hoặc mát' },
      { word: '配慮', kana: 'はいりょ', romaji: 'hairyo', meaning: 'Sự quan tâm, chu đáo tinh tế' },
      { word: '丁寧', kana: 'ていねい', romaji: 'teinei', meaning: 'Lịch thiệp, cẩn thận, nhã nhặn' },
      { word: '感謝', kana: 'かんしゃ', romaji: 'kansha', meaning: 'Lòng biết ơn sâu sắc' },
    ],
  },
  {
    id: 'ojigi-etiquette',
    category: 'culture',
    categoryLabel: 'Văn hóa',
    title: 'Nghệ thuật cúi chào (Ojigi) và khoảng cách giao tiếp của người Nhật',
    japaneseTitle: 'お辞儀と礼儀作法',
    readTime: '6 phút đọc',
    accent: 'teal',
    visual: '礼',
    visualCaption: 'Nghi thức cúi chào',
    summary:
      'Không cần bắt tay hay ôm hôn thân mật, một cái cúi đầu chuẩn mực truyền tải trọn vẹn lòng biết ơn và sự tôn kính.',
    lead:
      'Cúi chào (Ojigi - お辞儀) là ngôn ngữ không lời quan trọng nhất trong xã hội Nhật Bản. Góc độ nghiêng của cơ thể không phải là sự khúm núm, mà là thước đo chuẩn xác của sự tôn trọng, lòng thành kính và khoảng cách giao tiếp tinh tế.',
    sections: [
      {
        heading: 'Ba cấp độ cúi chào chuẩn mực trong đời sống',
        paragraphs: [
          'Eshaku (会釈 - 15 độ): Cúi đầu chào nhẹ nhàng khi vô tình chạm mặt người quen, đồng nghiệp cùng cấp tại hành lang hoặc khi đi ngang qua ai đó.',
          'Keirei (敬礼 - 30 độ): Cúi chào trang trọng nhất định, áp dụng khi gặp khách hàng, đối tác, cấp trên hoặc khi bắt đầu cuộc phỏng vấn tuyển dụng.',
          'Saikeirei (最敬礼 - 45 độ): Thể hiện lòng tôn kính tột cùng, dùng khi tạ lỗi sâu sắc (Shazai), tri ân ân nhân lớn hoặc cầu nguyện trước điện thờ Thần đạo.',
        ],
      },
      {
        heading: 'Tư thế lưng thẳng và ánh mắt đúng điệu',
        paragraphs: [
          'Khi thực hiện Ojigi, lưng và cổ phải giữ trên một đường thẳng, không được chỉ gục mỗi đầu. Nam giới khép thẳng hai tay áp dọc theo đường chỉ quần; nữ giới đặt hai tay chắp nhẹ chéo nhau ở phía trước eo.',
          'Sau khi cúi xuống, dừng lại khoảng 1 nhịp thở rồi mới từ từ nâng người lên. Ánh mắt hướng xuống sàn cách mũi chân khoảng 1 mét.',
        ],
      },
    ],
    culturalTip: {
      title: 'Đừng vừa đi sải bước vừa cúi đầu',
      text: 'Quy tắc lịch sự chuẩn Nhật là "Dừng bước chân -> Cúi đầu chào -> Ngẩng lên mỉm cười -> Tiếp tục di chuyển" (gọi là Bunri-rei - 分離礼). Vừa đi vừa gật đầu lia lịa tạo cảm giác vội vã, hời hợt và thiếu tôn trọng.',
    },
    quote: {
      japanese: '礼に始まり、礼に終わる。',
      vietnamese: 'Mọi việc đều bắt đầu bằng lễ nghĩa, và kết thúc trọn vẹn trong lễ nghi.',
    },
    vocabulary: [
      { word: 'お辞儀', kana: 'おじぎ', romaji: 'ojigi', meaning: 'Nghi thức cúi đầu chào' },
      { word: '会釈', kana: 'えしゃく', romaji: 'eshaku', meaning: 'Chào khẽ 15 độ xã giao' },
      { word: '敬礼', kana: 'けいれい', romaji: 'keirei', meaning: 'Cúi chào trang trọng 30 độ' },
      { word: '最敬礼', kana: 'さいけいれい', romaji: 'saikeirei', meaning: 'Cúi chào tôn kính nhất 45 độ' },
      { word: '礼儀', kana: 'れいぎ', romaji: 'reigi', meaning: 'Lễ nghi, phép tắc ứng xử' },
      { word: '謝罪', kana: 'しゃざい', romaji: 'shazai', meaning: 'Tạ lỗi chân thành' },
    ],
  },

  // ==========================================
  // 4. HỌC TẬP (STUDY)
  // ==========================================
  {
    id: 'study-life',
    category: 'study',
    categoryLabel: 'Học tập',
    title: 'Một ngày học ở Nhật: Đúng giờ, tự quản và tinh thần câu lạc bộ',
    japaneseTitle: '学校生活と部活動',
    readTime: '6 phút đọc',
    accent: 'blue',
    visual: '学',
    visualCaption: 'Học đường & Tự quản',
    summary:
      'Môi trường học tập ở Nhật đề cao thói quen đúng giờ, chuẩn bị trước và trách nhiệm với tập thể.',
    lead:
      'Trường học tại Nhật Bản không chỉ là nơi truyền đạt tri thức sách vở, mà là một xã hội thu nhỏ rèn luyện tính tự lập phi thường, ý thức tập thể và bản lĩnh trưởng thành từ thuở ấu thơ.',
    sections: [
      {
        heading: 'Giờ ăn trưa Kyushoku & Tự dọn dẹp O-souji',
        paragraphs: [
          'Không có nhân viên lao công riêng cho từng phòng học, chính học sinh Nhật Bản từ tiểu học đến trung học phổ thông là người trực nhật phân phát cơm trưa cho bạn bè, sau đó cùng nhau quét sàn, lau bảng và đổ rác.',
          'Giờ trực nhật O-souji rèn luyện cho các em lòng biết ơn với không gian sống, sự tôn trọng người lao động và ý thức gìn giữ tài sản công cộng.',
        ],
      },
      {
        heading: 'Trái tim thanh xuân mang tên Bukatsu (部活動)',
        paragraphs: [
          'Sau giờ tan học lúc 3 giờ chiều, hầu hết học sinh đều tham gia câu lạc bộ thể thao (như bóng chày, bóng chuyền, kendo) hoặc văn hóa (như trà đạo, thư pháp, ban nhạc kèn đồng).',
          'Bukatsu là nơi các em rèn luyện tính nhẫn nại, tinh thần đồng đội kiên cường và bài học đối nhân xử thế giữa tiền bối (Senpai) và hậu bối (Kouhai).',
        ],
      },
      {
        heading: 'Quy tắc 5 phút trước giờ hẹn (5-fun mae koudou)',
        paragraphs: [
          'Trong môi trường giáo dục Nhật, việc đến đúng giờ ấn định bị xem là quá muộn. Học sinh luôn được dạy phải có mặt trước giờ học hoặc điểm hẹn ít nhất 5 đến 10 phút để ổn định tâm thế và sẵn sàng bắt đầu.',
        ],
      },
    ],
    culturalTip: {
      title: 'Văn hóa tháo giày và mang dép Uwabaki',
      text: 'Khi bước vào bất kỳ trường học nào ở Nhật, học sinh và giáo viên đều phải tháo giày đi ngoài đường và cất vào tủ giày (Getabako), sau đó xỏ đôi giày vải mềm chuyên dụng (Uwabaki). Thói quen này giữ cho trường học luôn sạch bóng và tượng trưng cho việc bỏ lại bụi bặm bên ngoài ngưỡng cửa tri thức.',
    },
    quote: {
      japanese: '一人はみんなのために、みんなは一人のために。',
      vietnamese: 'Một người vì mọi người, mọi người vì một người.',
    },
    vocabulary: [
      { word: '給食', kana: 'きゅうしょく', romaji: 'kyuushoku', meaning: 'Bữa ăn trưa tập thể ở trường' },
      { word: '掃除', kana: 'そうじ', romaji: 'souji', meaning: 'Dọn dẹp vệ sinh phòng ốc' },
      { word: '部活', kana: 'ぶかつ', romaji: 'bukatsu', meaning: 'Hoạt động câu lạc bộ ngoại khóa' },
      { word: '上履き', kana: 'うわばき', romaji: 'uwabaki', meaning: 'Giày vải đi trong lớp học' },
      { word: '先輩', kana: 'せんぱい', romaji: 'senpai', meaning: 'Đàn anh, tiền bối đi trước' },
      { word: '後輩', kana: 'こうはい', romaji: 'kouhai', meaning: 'Đàn em, hậu bối đi sau' },
    ],
  },
  {
    id: 'juken-exam',
    category: 'study',
    categoryLabel: 'Học tập',
    title: 'Mùa thi Juken và nỗ lực phi thường của sĩ tử xứ hoa anh đào',
    japaneseTitle: '受験と合格祈願',
    readTime: '6 phút đọc',
    accent: 'blue',
    visual: '試',
    visualCaption: 'Mùa thi & Nỗ lực',
    summary:
      'Cuộc chạy đua thi cử vào trường chuyên, đại học và nét văn hóa xin bùa may mắn tại các ngôi đền học vấn.',
    lead:
      'Mùa đông Nhật Bản không chỉ có tuyết trắng, mà còn được hâm nóng bởi ngọn lửa quyết tâm của hàng triệu học sinh bước vào mùa thi cử khốc liệt (Juken - 受験) để chạm tay vào cánh cổng trường mơ ước.',
    sections: [
      {
        heading: 'Cuộc đua bền bỉ tại các lò luyện thi Juku',
        paragraphs: [
          'Để chuẩn bị cho kỳ thi tuyển sinh trung học và đại học, học sinh Nhật thường theo học tại các trường bổ túc tư thục (Juku) đến tận 9-10 giờ đêm. Tinh thần "Gambaru" (Cố gắng hết mình) được tôi luyện qua những đêm chong đèn học bài cùng chiếc khăn quàng cổ và bình trà nóng do cha mẹ chuẩn bị.',
        ],
      },
      {
        heading: 'Bùa may mắn Omamori và nghệ thuật chơi chữ KitKat',
        paragraphs: [
          'Trước kỳ thi, các sĩ tử và gia đình thường đến các ngôi đền thờ thần học vấn Tenmangu (như đền Dazaifu hay Kitano Tenmangu) để mua thẻ gỗ Ema, viết nắn nót ước nguyện đỗ đạt và treo lên giàn đền.',
          'Người Nhật có thú chơi chữ đồng âm rất thú vị: vào mùa thi, các mẹ thường làm món cơm thịt heo chiên xù Tonkatsu (từ "Katsu" đồng âm với "Chiến thắng" - 勝つ). Bánh xốp socola KitKat cũng trở thành món quà tặng may mắn số một vì phát âm tương tự câu chúc "Kitto Katsu" (Chắc chắn sẽ thắng!).',
        ],
      },
    ],
    culturalTip: {
      title: 'Lời động viên tinh tế gửi đến sĩ tử',
      text: 'Thay vì gây áp lực bằng câu "Phải đỗ đấy nhé", người Nhật thường gửi lời khích lệ ấm áp: "Okarada ni ki wo tsukete ne" (Hãy giữ gìn sức khỏe nhé) hoặc "Ima made no doryoku wo shinjite" (Hãy tin vào những nỗ lực bấy lâu nay của bạn).',
    },
    quote: {
      japanese: '七転び八起き。何度倒れても立ち上がる。',
      vietnamese: 'Bảy lần ngã, tám lần đứng dậy - Bền bỉ vươn lên trước mọi thử thách.',
    },
    vocabulary: [
      { word: '受験', kana: 'じゅけん', romaji: 'juken', meaning: 'Tham gia kỳ thi tuyển sinh' },
      { word: '塾', kana: 'じゅく', romaji: 'juku', meaning: 'Lò luyện thi ngoài giờ' },
      { word: '合格', kana: 'ごうかく', romaji: 'goukaku', meaning: 'Thi đỗ, trúng tuyển' },
      { word: '絵馬', kana: 'えま', romaji: 'ema', meaning: 'Thẻ gỗ viết điều ước ở đền' },
      { word: 'お守り', kana: 'おまもり', romaji: 'omamori', meaning: 'Bùa hộ mệnh bình an/đỗ đạt' },
      { word: '努力', kana: 'どりょく', romaji: 'doryoku', meaning: 'Nỗ lực, phấn đấu kiên trì' },
    ],
  },

  // ==========================================
  // 5. ĐI LÀM (WORK)
  // ==========================================
  {
    id: 'work-culture',
    category: 'work',
    categoryLabel: 'Đi làm',
    title: 'Quy tắc Horenso: Xương sống trong giao tiếp công sở Nhật Bản',
    japaneseTitle: '報連相の鉄則',
    readTime: '8 phút đọc',
    accent: 'green',
    visual: '報',
    visualCaption: 'Báo cáo & Phối hợp',
    summary:
      'Văn hóa công sở Nhật nổi tiếng với sự cẩn trọng trong giao tiếp, quy trình và cách phối hợp giữa các thành viên.',
    lead:
      'Trong bất kỳ doanh nghiệp Nhật Bản nào, từ tập đoàn toàn cầu đến văn phòng khởi nghiệp, ba chữ "Ho - Ren - So" luôn là kim chỉ nam quyết định sự trơn tru trong công việc và xây dựng lòng tin đồng nghiệp.',
    sections: [
      {
        heading: 'Hokoku (報告 - Báo cáo): Minh bạch và báo tin xấu trước',
        paragraphs: [
          'Báo cáo không chỉ thực hiện khi công việc hoàn thành mà cần cập nhật định kỳ theo từng giai đoạn tiến độ. Khi xảy ra sai sót hoặc trục trặc phát sinh, nguyên tắc vàng là "Bad news first" - báo cáo ngay lập tức cho cấp trên để cả nhóm cùng ứng phó kịp thời, tuyệt đối không giấu diếm khiến lỗi bị dây chuyền.',
        ],
      },
      {
        heading: 'Renraku (連絡 - Liên lạc): Nhanh chóng, chính xác và không suy diễn',
        paragraphs: [
          'Liên lạc là truyền đạt thông tin thực tế khách quan (Fact) cho những người liên quan. Không lồng định kiến hay cảm xúc cá nhân; luôn nêu rõ các mốc thời gian, số liệu cụ thể và kiểm tra xác nhận đối phương đã tiếp nhận thông tin đầy đủ.',
        ],
      },
      {
        heading: 'Soudan (相談 - Thảo luận/Tham vấn): Sức mạnh của trí tuệ tập thể',
        paragraphs: [
          'Khi đứng trước một quyết định khó khăn hoặc băn khoăn về hướng giải quyết, nhân viên được khuyến khích chủ động gõ cửa xin ý kiến cấp trên và đồng nghiệp. Tự ý hành động khi chưa nắm rõ quy trình bị coi là thiếu trách nhiệm với tập thể.',
        ],
      },
    ],
    culturalTip: {
      title: 'Công thức xin ý kiến cấp trên ghi điểm chuyên nghiệp',
      text: 'Khi muốn trao đổi với cấp trên, hãy gõ cửa nhẹ nhàng và mở lời: "Ima, sukoshi ojikan yoroshii deshou ka?" (Bây giờ anh/chị có thể cho em xin ít phút được không ạ?). Hãy chuẩn bị sẵn ít nhất 2 phương án do chính bạn đề xuất trước khi hỏi ý kiến sếp.',
    },
    quote: {
      japanese: '悪い報告ほど早くせよ。信頼は迅速な共有から生まれる。',
      vietnamese: 'Tin xấu càng cần báo cáo sớm. Lòng tin được gây dựng từ sự chia sẻ kịp thời.',
    },
    vocabulary: [
      { word: '報告', kana: 'ほうこく', romaji: 'houkoku', meaning: 'Báo cáo tiến độ và kết quả' },
      { word: '連絡', kana: 'れんらく', romaji: 'renraku', meaning: 'Liên lạc thông báo thông tin' },
      { word: '相談', kana: 'そうだん', romaji: 'soudan', meaning: 'Thảo luận, xin ý kiến tư vấn' },
      { word: '残業', kana: 'ざんぎょう', romaji: 'zangyou', meaning: 'Làm việc thêm giờ, tăng ca' },
      { word: '納期', kana: 'のうき', romaji: 'nouki', meaning: 'Thời hạn bàn giao công việc' },
      { word: '共有', kana: 'きょうゆう', romaji: 'kyouyuu', meaning: 'Chia sẻ thông tin nội bộ' },
    ],
  },
  {
    id: 'nomikai-etiquette',
    category: 'work',
    categoryLabel: 'Đi làm',
    title: 'Nomi-kai và nghệ thuật giao tiếp sau giờ làm việc (Nomu-nication)',
    japaneseTitle: '飲み会とノミュニケーション',
    readTime: '7 phút đọc',
    accent: 'green',
    visual: '飲',
    visualCaption: 'Tiệc tùng & Kết nối',
    summary:
      'Văn hóa nhậu công sở (Nomikai) là chiếc cầu nối cảm xúc và những điều cần nằm lòng để ghi điểm chuyên nghiệp.',
    lead:
      'Khái niệm "Nomu-nication" (kết hợp giữa Nomu - Uống và Communication - Giao tiếp) là một phần không thể tách rời của văn hóa doanh nghiệp Nhật Bản, nơi các rào cản phòng ban được tháo gỡ bên cốc bia sủi bọt.',
    sections: [
      {
        heading: 'Chiếc cầu nối cảm xúc sau những giờ làm việc căng thẳng',
        paragraphs: [
          'Ban ngày, công sở Nhật vận hành với kỷ luật thép và kính ngữ trang trọng. Bữa tiệc Nomikai sau giờ làm là dịp để mọi người thư giãn, hiểu thêm về tính cách đời thường của sếp và đồng nghiệp, từ đó giúp công việc phối hợp ban ngày trở nên ăn ý và thấu cảm hơn.',
        ],
      },
      {
        heading: 'Nghệ thuật rót đồ uống và quan sát tinh tế',
        paragraphs: [
          'Trong bữa tiệc, người trẻ nhất hoặc người mới vào công ty thường chủ động ngồi ở vị trí gần cửa ra vào (Shimoza) để tiện gọi món và hỗ trợ tiếp đồ uống. Hãy luôn để ý ly bia của người xung quanh; khi thấy ly chỉ còn 1/3, hãy nhẹ nhàng cầm chai bằng hai tay, hướng nhãn chai lên trên và ngỏ ý rót thêm cho họ.',
        ],
      },
      {
        heading: 'Lễ nghi kết thúc và lời chào cảm ơn sáng hôm sau',
        paragraphs: [
          'Sau bữa tiệc chính, mọi người thường vỗ tay đồng nhịp theo nghi thức "Tejime" (như Ippon-jime) để mừng buổi tiệc thành công tốt đẹp. Sáng ngày làm việc tiếp theo, việc đầu tiên khi bước vào công ty là gặp cấp trên và đồng nghiệp cùng bàn tiệc để nói lời cảm ơn: "Kinou wa gochisousama deshita" hoặc "Arigatou gozaimashita".',
        ],
      },
    ],
    culturalTip: {
      title: 'Nếu bạn là người không uống được rượu bia?',
      text: 'Đừng lo lắng! Người Nhật ngày nay rất cởi mở và tôn trọng sức khỏe. Bạn hoàn toàn có thể tự tin gọi trà ô long (Oolong-cha), nước ngọt hoặc bia không cồn (Non-aru). Điều quan trọng nhất của Nomikai là sự hiện diện chung vui của bạn chứ không phải lượng rượu bạn uống.',
    },
    quote: {
      japanese: '昨日はごちそうさまでした。感謝で始まる新しい一日。',
      vietnamese: '"Cảm ơn vì bữa tối hôm qua" - Ngày mới luôn bắt đầu bằng lời cảm kích.',
    },
    vocabulary: [
      { word: '飲み会', kana: 'のみかい', romaji: 'nomikai', meaning: 'Tiệc liên hoan ăn uống sau giờ làm' },
      { word: '乾杯', kana: 'かんぱい', romaji: 'kanpai', meaning: 'Nâng ly cạn chén' },
      { word: '上司', kana: 'じょうし', romaji: 'joushi', meaning: 'Cấp trên, quản lý trực tiếp' },
      { word: '同僚', kana: 'どうりょう', romaji: 'douryou', meaning: 'Đồng nghiệp cùng cấp' },
      { word: 'お疲れ様', kana: 'おつかれさま', romaji: 'otsukaresama', meaning: 'Lời chào sau giờ làm việc vất vả' },
      { word: '二次会', kana: 'にじかい', romaji: 'nijikai', meaning: 'Tăng hai sau bữa tiệc chính' },
    ],
  },
  {
    id: 'business-keigo',
    category: 'work',
    categoryLabel: 'Đi làm',
    title: 'Kính ngữ (Keigo) và quy chuẩn viết email thương mại chuẩn Nhật',
    japaneseTitle: 'ビジネス敬語とメール作法',
    readTime: '8 phút đọc',
    accent: 'green',
    visual: '敬',
    visualCaption: 'Kính ngữ công sở',
    summary:
      'Làm chủ 3 cấp độ kính ngữ và cấu trúc email chuyên nghiệp để không bị đánh giá thiếu chỉn chu.',
    lead:
      'Kính ngữ trong tiếng Nhật không đơn thuần là ngữ pháp học thuộc lòng, mà là thước đo thể hiện sự tinh tế, địa vị xã hội và độ tin cậy của một đối tác chuyên nghiệp.',
    sections: [
      {
        heading: 'Ba trụ cột kính ngữ phân biệt trong chớp mắt',
        paragraphs: [
          'Teineigo (丁寧語 - Thể lịch sự): Sử dụng đuôi câu "desu/masu", là nền tảng giao tiếp căn bản hàng ngày.',
          'Sonkeigo (尊敬語 - Tôn kính ngữ): Nâng cao hành động của đối phương, khách hàng hoặc cấp trên (Ví dụ: "Iku/Kuru" chuyển thành "Irassharu", "Suru" chuyển thành "Nasaru").',
          'Kenjougo (謙譲語 - Khiêm nhường ngữ): Hạ thấp hành động của bản thân và người cùng nhóm (Uchi) để gián tiếp tôn vinh người nghe (Ví dụ: "Iku" chuyển thành "Mairu", "Suru" chuyển thành "Itasu").',
        ],
      },
      {
        heading: 'Khung xương chuẩn mực của một Email công sở Nhật',
        paragraphs: [
          'Dòng tiêu đề (Kenmei): Nêu rõ nội dung chính và tên công ty/người gửi trong ngoặc vuông.',
          'Lời chào đầu thư: Tên công ty đối tác + Chức danh + Họ tên + Sama.',
          'Câu mở đầu kinh điển: "Itsumo taihen osewa ni natte orimasu" (Cảm ơn quý công ty vì luôn đồng hành cùng chúng tôi).',
          'Nội dung thông điệp: Ngắn gọn, gạch đầu dòng rõ ràng, hạn chế đoạn văn dài dòng.',
          'Lời kết và chữ ký: "Douzo yoroshiku onegai moushiagemasu" kèm chữ ký liên hệ đầy đủ.',
        ],
      },
      {
        heading: 'Quy tắc Uchi (Bên trong) và Soto (Bên ngoài)',
        paragraphs: [
          'Khi nói chuyện với khách hàng bên ngoài (Soto), ngay cả khi nhắc đến Giám đốc công ty mình (Uchi), bạn vẫn không được gắn hậu tố "Sama" hay dùng Tôn kính ngữ cho sếp, mà phải gọi bằng họ trần (Ví dụ: "Tanaka ga moushimashita" - Anh Tanaka bên em có nói...).',
        ],
      },
    ],
    culturalTip: {
      title: 'Nguyên tắc vàng khi phản hồi email công việc',
      text: 'Thời gian phản hồi email lý tưởng trong doanh nghiệp Nhật là trong vòng 24 giờ (tốt nhất là trong buổi sáng). Nếu vấn đề cần thời gian kiểm tra thêm, hãy gửi ngay một email ngắn xác nhận đã nhận thư và hẹn mốc thời gian phản hồi chi tiết cụ thể.',
    },
    quote: {
      japanese: '言葉遣いは心の鏡。敬意は言葉を通して伝わる。',
      vietnamese: 'Lời ăn tiếng nói là tấm gương của tâm hồn. Lòng kính trọng luôn được truyền tải trọn vẹn qua từng từ ngữ.',
    },
    vocabulary: [
      { word: '敬語', kana: 'けいご', romaji: 'keigo', meaning: 'Kính ngữ tiếng Nhật' },
      { word: '尊敬語', kana: 'そんけいご', romaji: 'sonkeigo', meaning: 'Tôn kính ngữ nâng đối phương lên' },
      { word: '謙譲語', kana: 'けんじょうご', romaji: 'kenjougo', meaning: 'Khiêm nhường ngữ hạ mình xuống' },
      { word: 'お世話', kana: 'おせわ', romaji: 'osewa', meaning: 'Sự quan tâm, giúp đỡ' },
      { word: '恐縮', kana: 'きょうしゅく', romaji: 'kyoushuku', meaning: 'Cảm thấy vinh hạnh lẫn áy náy' },
      { word: 'よろしくお願いします', kana: 'よろしくおねがいします', romaji: 'yoroshiku onegai shimasu', meaning: 'Rất mong nhận được sự giúp đỡ' },
    ],
  },
]

const CULTURE_NOTES = [
  {
    title: 'Học qua bối cảnh thực tế',
    text: 'Mỗi bài viết đều gắn liền từ vựng và mẫu câu với các tình huống đời sống cụ thể ở Nhật Bản.',
  },
  {
    title: 'Đọc theo chủ đề định hướng',
    text: 'Bộ lọc 5 chủ đề từ Ẩm thực, Thời trang, Lễ hội đến Đời sống học đường và Công sở giúp bạn tra cứu đúng nhu cầu.',
  },
  {
    title: 'Ghi nhớ bằng triết lý và mẹo nhỏ',
    text: 'Nắm chắc các quy tắc bất thành văn (Etiquette) để tự tin giao tiếp và ứng xử chuẩn mực như người bản xứ.',
  },
]

function CultureHero({ articleCount }) {
  return (
    <section className="culture-hero">
      <div className="culture-hero__copy">
        <span className="culture-eyebrow">NHỮNG TRANG VỀ NHẬT BẢN</span>
        <h1>Văn hóa Nhật Bản</h1>
        <p>
          Khám phá trọn vẹn từ ẩm thực, thời trang, lễ nghi, học đường cho đến văn hóa làm việc tại các doanh nghiệp Nhật Bản để việc học tiếng Nhật trở nên sống động và gắn liền với thực tiễn.
        </p>

        <div className="culture-hero__actions">
          <a href="#culture-reader" className="culture-primary-link">Đọc bài nổi bật</a>
          <a href="#culture-articles" className="culture-secondary-link">Khám phá danh mục ({articleCount} bài)</a>
        </div>
      </div>

      <div className="culture-hero__visual" aria-label={`${articleCount} bài viết văn hóa`}>
        <div className="culture-visual-board">
          <span>日</span>
          <span>本</span>
          <span>文</span>
          <span>化</span>
        </div>
        <div className="culture-hero__stat">
          <strong>{articleCount}</strong>
          <span>chuyên đề chọn lọc</span>
        </div>
      </div>
    </section>
  )
}

function CultureCategoryBar({ activeCategory, onCategoryChange, counts }) {
  return (
    <section className="culture-category-bar" aria-label="Danh mục văn hóa">
      {CATEGORY_FILTERS.map((category) => {
        const count = counts[category.id] ?? 0
        return (
          <button
            key={category.id}
            type="button"
            className={`culture-category-btn${activeCategory === category.id ? ' is-active' : ''}`}
            aria-pressed={activeCategory === category.id}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.label} {count > 0 ? `(${count})` : ''}
          </button>
        )
      })}
    </section>
  )
}

function CultureArticleCard({ article, isSelected, onSelect }) {
  return (
    <article className={`culture-article-card${isSelected ? ' is-selected' : ''}`}>
      <button type="button" aria-pressed={isSelected} aria-controls="culture-reader" onClick={() => onSelect(article.id)}>
        <div className={`culture-article-visual culture-article-visual--${article.accent}`}>
          <span>{article.visual}</span>
          <small>{article.visualCaption}</small>
        </div>

        <div className="culture-article-card__body">
          <div className="culture-article-meta">
            <span className="culture-tag-category">{article.categoryLabel}</span>
            <span className="culture-tag-time">{article.readTime}</span>
          </div>
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
        </div>
      </button>
    </article>
  )
}

function CultureReader({ article }) {
  return (
    <aside tabIndex={-1} id="culture-reader" className="culture-reader" aria-label="Bài viết đang đọc">
      <div className={`culture-reader__cover culture-reader__cover--${article.accent}`}>
        <span>{article.visual}</span>
      </div>

      <div className="culture-reader__body">
        <div className="culture-article-meta">
          <span className="culture-tag-category">{article.categoryLabel}</span>
          <span className="culture-tag-time">{article.readTime}</span>
        </div>

        <p className="culture-reader__jp-title" lang="ja">{article.japaneseTitle}</p>
        <h2>{article.title}</h2>

        {article.lead ? (
          <div className="culture-reader__lead">
            <p>{article.lead}</p>
          </div>
        ) : null}

        {article.sections?.map((section, idx) => (
          <section key={idx} className="culture-reader__section">
            <h3>{section.heading}</h3>
            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </section>
        ))}

        {!article.sections && article.details?.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}

        {article.culturalTip ? (
          <div className="culture-reader__tip-box">
            <div className="culture-tip-header">
              <LightbulbIcon />
              <h4>{article.culturalTip.title}</h4>
            </div>
            <p>{article.culturalTip.text}</p>
          </div>
        ) : null}

        {article.quote ? (
          <blockquote className="culture-reader__quote-box">
            <p className="culture-quote-jp" lang="ja">「{article.quote.japanese}」</p>
            <p className="culture-quote-vn">{article.quote.vietnamese}</p>
          </blockquote>
        ) : null}

        <section className="culture-vocabulary" aria-label="Từ vựng & Mẫu câu trọng tâm">
          <div className="culture-vocab-header">
            <h3>Từ vựng & Mẫu câu trọng tâm</h3>
            <span className="culture-vocab-count">{article.vocabulary?.length || 0} mục</span>
          </div>

          <div className="culture-vocab-grid">
            {article.vocabulary?.map((item, idx) => {
              const isObj = typeof item === 'object' && item !== null
              const word = isObj ? item.word : item
              const kana = isObj ? item.kana : ''
              const meaning = isObj ? item.meaning : ''

              return (
                <div key={idx} className="culture-vocab-card">
                  <div className="culture-vocab-card__top">
                    <span className="culture-vocab-word" lang="ja">{word}</span>
                    {kana ? <span className="culture-vocab-kana" lang="ja">{kana}</span> : null}
                  </div>
                  {meaning ? <p className="culture-vocab-meaning">{meaning}</p> : null}
                  <Link
                    to={`/dictionary?q=${encodeURIComponent(word)}&type=vocabulary`}
                    className="culture-vocab-link"
                    title={`Tra từ "${word}" trong từ điển`}
                  >
                    <span>Tra từ điển</span>
                    <ArrowUpRightIcon />
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </aside>
  )
}

function CultureNotes() {
  return (
    <section className="culture-notes" aria-labelledby="culture-notes-title">
      <div className="culture-section-heading">
        <span>Gợi ý đọc</span>
        <h2 id="culture-notes-title">Biến văn hóa thành ngữ cảnh học tiếng Nhật</h2>
      </div>

      <div className="culture-notes__grid">
        {CULTURE_NOTES.map((note) => (
          <article key={note.title} className="culture-note-card">
            <h3>{note.title}</h3>
            <p>{note.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function CulturePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedArticleId, setSelectedArticleId] = useState(CULTURE_ARTICLES[0].id)

  const categoryCounts = useMemo(() => {
    const counts = { all: CULTURE_ARTICLES.length }
    for (const art of CULTURE_ARTICLES) {
      counts[art.category] = (counts[art.category] || 0) + 1
    }
    return counts
  }, [])

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all') {
      return CULTURE_ARTICLES
    }

    return CULTURE_ARTICLES.filter((article) => article.category === activeCategory)
  }, [activeCategory])

  const selectedArticle =
    CULTURE_ARTICLES.find((article) => article.id === selectedArticleId) || filteredArticles[0] || CULTURE_ARTICLES[0]

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)

    if (categoryId === 'all') {
      setSelectedArticleId(CULTURE_ARTICLES[0].id)
      return
    }

    const nextArticle = CULTURE_ARTICLES.find((article) => article.category === categoryId)

    if (nextArticle) {
      setSelectedArticleId(nextArticle.id)
    }
  }

  return (
    <div className="culture-page">
      <DashboardNav navItems={NAV_ITEMS} />

      <main className="culture-main" id="main-content" tabIndex={-1}>
        <CultureHero articleCount={CULTURE_ARTICLES.length} />
        <CultureCategoryBar
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          counts={categoryCounts}
        />

        <section id="culture-articles" className="culture-content-grid" aria-label="Blog văn hóa Nhật Bản">
          <div className="culture-article-list">
            {filteredArticles.map((article) => (
              <CultureArticleCard
                key={article.id}
                article={article}
                isSelected={article.id === selectedArticle.id}
                onSelect={(id) => {
                  setSelectedArticleId(id)
                  requestAnimationFrame(() => {
                    const reader = document.getElementById('culture-reader')
                    reader?.focus({ preventScroll: true })
                    reader?.scrollIntoView({ block: 'start' })
                  })
                }}
              />
            ))}
          </div>

          <CultureReader article={selectedArticle} />
        </section>

        <CultureNotes />
      </main>
    </div>
  )
}
