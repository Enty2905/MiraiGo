const fs = require('node:fs');
const path = require('node:path');
const { Client } = require('pg');
require('dotenv').config();

const SEED_LESSONS = [
  // ==========================================
  // JLPT N5 Lessons
  // ==========================================
  {
    level: 'N5',
    number: 1,
    title: 'Bài 1: Chào hỏi & Tự giới thiệu',
    description: 'Làm quen với đại từ nhân xưng, danh xưng và cấu trúc giới thiệu bản thân.',
    vocabulary: [
      ['私', 'わたし', 'watashi', 'tôi', 'I', 'pronoun'],
      ['あなた', 'あなた', 'anata', 'bạn, anh, chị', 'you', 'pronoun'],
      ['あの人', 'あのひと', 'anohito', 'người kia', 'that person', 'pronoun'],
      ['先生', 'せんせい', 'sensei', 'thầy cô giáo', 'teacher', 'noun'],
      ['学生', 'がくせい', 'gakusei', 'học sinh, sinh viên', 'student', 'noun'],
      ['会社員', 'かいしゃいん', 'kaishain', 'nhân viên công ty', 'company employee', 'noun'],
      ['医者', 'いしゃ', 'isha', 'bác sĩ', 'doctor', 'noun'],
      ['研究者', 'けんきゅうしゃ', 'kenkyuusha', 'nhà nghiên cứu', 'researcher', 'noun'],
      ['大学', 'だいがく', 'daigaku', 'trường đại học', 'university', 'noun'],
      ['病院', 'びょういん', 'byouin', 'bệnh viện', 'hospital', 'noun'],
      ['こんにちは', 'こんにちは', 'konnichiwa', 'xin chào', 'hello', 'expression'],
      ['はじめまして', 'はじめまして', 'hajimemashite', 'rất vui được gặp bạn lần đầu', 'nice to meet you', 'expression'],
    ],
  },
  {
    level: 'N5',
    number: 2,
    title: 'Bài 2: Đồ vật & Sở hữu',
    description: 'Học các đại từ chỉ định đồ vật và cách hỏi, trả lời quyền sở hữu.',
    vocabulary: [
      ['これ', 'これ', 'kore', 'cái này (gần người nói)', 'this one', 'pronoun'],
      ['それ', 'それ', 'sore', 'cái đó (gần người nghe)', 'that one', 'pronoun'],
      ['あれ', 'あれ', 'are', 'cái kia (xa cả hai)', 'that one over there', 'pronoun'],
      ['本', 'ほん', 'hon', 'quyển sách', 'book', 'noun'],
      ['辞書', 'じしょ', 'jisho', 'từ điển', 'dictionary', 'noun'],
      ['雑誌', 'ざっし', 'zasshi', 'tạp chí', 'magazine', 'noun'],
      ['新聞', 'しんぶん', 'shinbun', 'tờ báo', 'newspaper', 'noun'],
      ['手帳', 'てちょう', 'techou', 'sổ tay', 'pocket notebook', 'noun'],
      ['名刺', 'めいし', 'meishi', 'danh thiếp', 'business card', 'noun'],
      ['鉛筆', 'えんぴつ', 'enpitsu', 'bút chì', 'pencil', 'noun'],
      ['時計', 'とけい', 'tokei', 'đồng hồ', 'watch, clock', 'noun'],
      ['傘', 'かさ', 'kasa', 'cây dù, ô', 'umbrella', 'noun'],
      ['鞄', 'かばん', 'kaban', 'cặp xách, túi xách', 'bag', 'noun'],
    ],
  },
  {
    level: 'N5',
    number: 3,
    title: 'Bài 3: Địa điểm & Nơi chốn',
    description: 'Hỏi và chỉ phương hướng, phòng ban, địa điểm và giá tiền.',
    vocabulary: [
      ['ここ', 'ここ', 'koko', 'chỗ này, ở đây', 'here', 'pronoun'],
      ['そこ', 'そこ', 'soko', 'chỗ đó, ở đó', 'there', 'pronoun'],
      ['あそこ', 'あそこ', 'asoko', 'chỗ kia, đằng kia', 'over there', 'pronoun'],
      ['どこ', 'どこ', 'doko', 'ở đâu', 'where', 'question word'],
      ['教室', 'きょうしつ', 'kyoushitsu', 'phòng học, lớp học', 'classroom', 'noun'],
      ['食堂', 'しょくどう', 'shokudou', 'nhà ăn, căng tin', 'cafeteria', 'noun'],
      ['事務所', 'じむしょ', 'jimusho', 'văn phòng làm việc', 'office', 'noun'],
      ['部屋', 'へや', 'heya', 'căn phòng', 'room', 'noun'],
      ['お手洗い', 'おてあらい', 'otearai', 'nhà vệ sinh', 'restroom', 'noun'],
      ['階段', 'かいだん', 'kaidan', 'cầu thang', 'stairs', 'noun'],
      ['会社', 'かいしゃ', 'kaisha', 'công ty', 'company', 'noun'],
      ['家', 'うち', 'uchi', 'nhà', 'home, house', 'noun'],
      ['いくら', 'いくら', 'ikura', 'bao nhiêu tiền', 'how much', 'question word'],
      ['円', 'えん', 'en', 'tiền Yên (Nhật)', 'yen', 'counter'],
    ],
  },
  {
    level: 'N5',
    number: 4,
    title: 'Bài 4: Thời gian & Thói quen',
    description: 'Nói giờ giấc, ngày tháng và các động từ sinh hoạt thường ngày.',
    vocabulary: [
      ['今', 'いま', 'ima', 'bây giờ', 'now', 'noun'],
      ['時', 'じ', 'ji', 'giờ (thời gian)', 'o clock', 'counter'],
      ['分', 'ふん', 'fun', 'phút', 'minute', 'counter'],
      ['半', 'はん', 'han', 'nửa, rưỡi (30 phút)', 'half past', 'noun'],
      ['朝', 'あさ', 'asa', 'buổi sáng', 'morning', 'noun'],
      ['昼', 'ひる', 'hiru', 'buổi trưa', 'noon', 'noun'],
      ['晩', 'ばん', 'ban', 'buổi tối', 'evening, night', 'noun'],
      ['今日', 'きょう', 'kyou', 'hôm nay', 'today', 'noun'],
      ['明日', 'あした', 'ashita', 'ngày mai', 'tomorrow', 'noun'],
      ['起きます', 'おきます', 'okimasu', 'thức dậy', 'wake up', 'verb'],
      ['寝ます', 'ねます', 'nemasu', 'đi ngủ', 'go to bed', 'verb'],
      ['働きます', 'はたらきます', 'hatarakimasu', 'làm việc', 'work', 'verb'],
      ['勉強します', 'べんきょうします', 'benkyoushimasu', 'học tập', 'study', 'verb'],
      ['終わります', 'おわります', 'owarimasu', 'kết thúc, xong', 'finish', 'verb'],
    ],
  },
  {
    level: 'N5',
    number: 5,
    title: 'Bài 5: Đi lại & Phương tiện giao thông',
    description: 'Nói về việc đi đâu, đến đâu bằng phương tiện gì và đi cùng ai.',
    vocabulary: [
      ['行きます', 'いきます', 'ikimasu', 'đi', 'go', 'verb'],
      ['来ます', 'きます', 'kimasu', 'đến', 'come', 'verb'],
      ['帰ります', 'かえります', 'kaerimasu', 'về (nhà/nước)', 'return, go home', 'verb'],
      ['学校', 'がっこう', 'gakkou', 'trường học', 'school', 'noun'],
      ['駅', 'えき', 'eki', 'nhà ga', 'station', 'noun'],
      ['飛行機', 'ひこうき', 'hikouki', 'máy bay', 'airplane', 'noun'],
      ['電車', 'でんしゃ', 'densha', 'tàu điện', 'electric train', 'noun'],
      ['地下鉄', 'ちかてつ', 'chikatetsu', 'tàu điện ngầm', 'subway', 'noun'],
      ['自転車', 'じてんしゃ', 'jitensha', 'xe đạp', 'bicycle', 'noun'],
      ['歩いて', 'あるいて', 'aruite', 'đi bộ', 'on foot', 'expression'],
      ['友達', 'ともだち', 'tomodachi', 'bạn bè', 'friend', 'noun'],
      ['家族', 'かぞく', 'kazoku', 'gia đình', 'family', 'noun'],
      ['一人で', 'ひとりで', 'hitoride', 'một mình', 'alone', 'expression'],
    ],
  },

  // ==========================================
  // JLPT N4 Lessons
  // ==========================================
  {
    level: 'N4',
    number: 1,
    title: 'Bài 1: Thể Te & Yêu cầu lịch sự',
    description: 'Chuyển đổi động từ sang thể Te, đưa ra lời yêu cầu và diễn tả hành động đang tiếp diễn.',
    vocabulary: [
      ['食べて', 'たべて', 'tabete', 'hãy ăn (thể te)', 'eat', 'verb'],
      ['見て', 'みて', 'mite', 'hãy xem (thể te)', 'look', 'verb'],
      ['読んで', 'よんで', 'yonde', 'hãy đọc (thể te)', 'read', 'verb'],
      ['書いて', 'かいて', 'kaite', 'hãy viết (thể te)', 'write', 'verb'],
      ['開けます', 'あけます', 'akemasu', 'mở (cửa/sách)', 'open', 'verb'],
      ['閉めます', 'しめます', 'shimemasu', 'đóng (cửa/sách)', 'close', 'verb'],
      ['急ぎます', 'いそぎます', 'isogimasu', 'vội vàng, gấp rút', 'hurry', 'verb'],
      ['待ちます', 'まちます', 'machimasu', 'chờ đợi', 'wait', 'verb'],
      ['手伝います', 'てつだいます', 'tetsudaimasu', 'giúp đỡ', 'help', 'verb'],
      ['教えます', 'おしえます', 'oshiemasu', 'dạy, chỉ dẫn', 'teach, tell', 'verb'],
      ['ください', 'ください', 'kudasai', 'xin hãy, làm ơn', 'please', 'expression'],
    ],
  },
  {
    level: 'N4',
    number: 2,
    title: 'Bài 2: Xin phép & Trạng thái',
    description: 'Diễn đạt việc xin phép làm điều gì, nêu điều cấm đoán và nói về trạng thái kéo dài.',
    vocabulary: [
      ['置きます', 'おきます', 'okimasu', 'đặt, để', 'put, place', 'verb'],
      ['作ります', 'つくります', 'tsukurimasu', 'làm, chế tạo', 'make, produce', 'verb'],
      ['売ります', 'うります', 'urimasu', 'bán', 'sell', 'verb'],
      ['知ります', 'しります', 'shirimasu', 'biết', 'know', 'verb'],
      ['住みます', 'すみます', 'sumimasu', 'sống, cư trú', 'live, reside', 'verb'],
      ['資料', 'しりょう', 'shiryou', 'tài liệu', 'materials, data', 'noun'],
      ['製品', 'せいひん', 'seihin', 'sản phẩm', 'product', 'noun'],
      ['専門', 'せんもん', 'senmon', 'chuyên môn', 'specialty', 'noun'],
      ['歯医者', 'はいしゃ', 'haisha', 'nha sĩ', 'dentist', 'noun'],
      ['独身', 'どくしん', 'dokushin', 'độc thân', 'single, unmarried', 'noun'],
    ],
  },
  {
    level: 'N4',
    number: 3,
    title: 'Bài 3: Thể Nai & Nghĩa vụ',
    description: 'Chuyển đổi động từ thể phủ định ngắn (Nai), diễn đạt nghĩa vụ bắt buộc hoặc khuyên nhủ.',
    vocabulary: [
      ['覚えます', 'おぼえます', 'oboemasu', 'nhớ, ghi nhớ', 'memorize', 'verb'],
      ['忘れます', 'わすれます', 'wasuremasu', 'quên', 'forget', 'verb'],
      ['なくします', 'なくします', 'nakushimasu', 'làm mất', 'lose', 'verb'],
      ['払います', 'はらいます', 'haraimasu', 'trả tiền', 'pay', 'verb'],
      ['返します', 'かえします', 'kaeshimasu', 'trả lại (đồ vật)', 'give back', 'verb'],
      ['出かけます', 'でかけます', 'dekakemasu', 'ra ngoài', 'go out', 'verb'],
      ['脱ぎます', 'ぬぎます', 'nugimasu', 'cởi (áo, giày)', 'take off', 'verb'],
      ['心配します', 'しんぱいします', 'shinpaishimasu', 'lo lắng', 'worry', 'verb'],
      ['残業します', 'ざんぎょうします', 'zangyoushimasu', 'làm thêm giờ', 'work overtime', 'verb'],
      ['薬', 'くすり', 'kusuri', 'thuốc', 'medicine', 'noun'],
      ['保険証', 'ほけんしょう', 'hokenshou', 'thẻ bảo hiểm', 'insurance card', 'noun'],
    ],
  },
  {
    level: 'N4',
    number: 4,
    title: 'Bài 4: Thể Khả năng & Sở thích',
    description: 'Diễn tả năng lực, khả năng có thể làm được việc gì và nói về sở thích cá nhân.',
    vocabulary: [
      ['弾きます', 'ひきます', 'hikimasu', 'chơi (nhạc cụ)', 'play (piano/guitar)', 'verb'],
      ['歌います', 'うたいま す', 'utaimasu', 'hát', 'sing', 'verb'],
      ['泳ぎます', 'およぎます', 'oyogimasu', 'bơi lội', 'swim', 'verb'],
      ['直します', 'なおします', 'naoshimasu', 'sửa chữa', 'repair', 'verb'],
      ['運転します', 'うんてんします', 'untenshimasu', 'lái xe', 'drive', 'verb'],
      ['ピアノ', 'ピアノ', 'piano', 'đàn piano', 'piano', 'noun'],
      ['外国語', 'がいこくご', 'gaikokugo', 'ngoại ngữ', 'foreign language', 'noun'],
      ['趣味', 'しゅみ', 'shumi', 'sở thích', 'hobby', 'noun'],
      ['日記', 'にっき', 'nikki', 'nhật ký', 'diary', 'noun'],
      ['特に', 'とくに', 'tokuni', 'đặc biệt là', 'especially', 'adverb'],
    ],
  },

  // ==========================================
  // Higher Levels
  // ==========================================
  {
    level: 'N3',
    number: 1,
    title: 'Bài 1: Câu điều kiện',
    description: 'So sánh các mẫu điều kiện thông dụng qua ví dụ ngắn.',
    vocabulary: [
      ['雨', 'あめ', 'ame', 'mưa', 'rain', 'noun'],
      ['場合', 'ばあい', 'baai', 'trường hợp', 'case', 'noun'],
      ['もし', 'もし', 'moshi', 'nếu như', 'if', 'adverb'],
      ['できる', 'できる', 'dekiru', 'có thể làm', 'can do', 'verb'],
      ['必要', 'ひつよう', 'hitsuyou', 'cần thiết', 'necessary', 'na-adjective'],
      ['準備', 'じゅんび', 'junbi', 'chuẩn bị', 'preparation', 'noun'],
      ['連絡', 'れんらく', 'renraku', 'liên lạc', 'contact', 'noun'],
      ['注意', 'ちゅうい', 'chuui', 'chú ý', 'attention', 'noun'],
    ],
  },
  {
    level: 'N2',
    number: 1,
    title: 'Bài 1: Từ nối trang trọng',
    description: 'Luyện các từ nối thường dùng trong văn viết và báo cáo.',
    vocabulary: [
      ['従って', 'したがって', 'shitagatte', 'do đó', 'therefore', 'conjunction'],
      ['一方', 'いっぽう', 'ippou', 'mặt khác', 'on the other hand', 'noun'],
      ['結果', 'けっか', 'kekka', 'kết quả', 'result', 'noun'],
      ['事実', 'じじつ', 'jijitsu', 'sự thật', 'fact', 'noun'],
      ['検討', 'けんとう', 'kentou', 'xem xét', 'consideration', 'noun'],
    ],
  },
  {
    level: 'N1',
    number: 1,
    title: 'Bài 1: Lập luận nâng cao',
    description: 'Xây dựng mạch lập luận rõ ràng trong ngữ cảnh học thuật.',
    vocabulary: [
      ['論理', 'ろんり', 'ronri', 'logic', 'logic', 'noun'],
      ['視点', 'してん', 'shiten', 'góc nhìn', 'viewpoint', 'noun'],
      ['指摘', 'してき', 'shiteki', 'chỉ ra', 'pointing out', 'noun'],
      ['提言', 'ていげん', 'teigen', 'đề xuất', 'proposal', 'noun'],
      ['根拠', 'こんきょ', 'konkyo', 'căn cứ', 'basis', 'noun'],
    ],
  },
];

const SEED_GRAMMAR = [
  // ==========================================
  // N5 Grammar Points
  // ==========================================
  {
    title: 'Khẳng định danh từ',
    pattern: '〜は〜です',
    meaningVi: 'A là B',
    explanation: 'Trợ từ は (đọc là wa) đánh dấu chủ ngữ hoặc chủ đề. です biểu thị sự khẳng định lịch sự.',
    formation: 'Danh từ 1 + は + Danh từ 2 + です',
    usageNote: 'Dùng để giới thiệu tên, nghề nghiệp, quốc tịch.',
    jlptLevel: 'N5',
    examples: [
      { jp: 'わたしは がくせいです。', kana: 'わたしは がくせいです。', vi: 'Tôi là học sinh.' },
      { jp: 'たなかさんは せんせいです。', kana: 'たなかさんは せんせいです。', vi: 'Anh Tanaka là giáo viên.' },
    ],
  },
  {
    title: 'Phủ định danh từ',
    pattern: '〜は〜じゃありません',
    meaningVi: 'A không phải là B',
    explanation: 'じゃありません là dạng phủ định lịch sự của です trong hội thoại hàng ngày (văn viết dùng ではありません).',
    formation: 'Danh từ 1 + は + Danh từ 2 + じゃありません',
    usageNote: 'Dùng khi muốn bác bỏ thông tin về một đối tượng.',
    jlptLevel: 'N5',
    examples: [
      { jp: 'わたしは いしゃじゃありません。', kana: 'わたしは いしゃじゃありません。', vi: 'Tôi không phải là bác sĩ.' },
      { jp: 'サントスさんは がくせいじゃありません。', kana: 'サントスさんは がくせいじゃありません。', vi: 'Anh Santos không phải là sinh viên.' },
    ],
  },
  {
    title: 'Câu hỏi xác nhận',
    pattern: '〜は〜ですか',
    meaningVi: 'A có phải là B không?',
    explanation: 'Thêm trợ từ か vào cuối câu khẳng định để biến thành câu hỏi nghi vấn.',
    formation: 'Câu khẳng định + か',
    usageNote: 'Trả lời: はい、〜です hoặc いいえ、〜じゃありません.',
    jlptLevel: 'N5',
    examples: [
      { jp: 'あなたは かいしゃいんですか。', kana: 'あなたは かいしゃいんですか。', vi: 'Bạn có phải là nhân viên công ty không?' },
      { jp: 'あのかたは どなたですか。', kana: 'あのかたは どなたですか。', vi: 'Vị kia là ai vậy?' },
    ],
  },
  {
    title: 'Đại từ chỉ định đồ vật',
    pattern: 'これ / それ / あれ は〜です',
    meaningVi: 'Cái này / cái đó / cái kia là...',
    explanation: 'これ (gần người nói), それ (gần người nghe), あれ (xa cả hai người).',
    formation: 'これ / それ / あれ + は + Danh từ + です',
    usageNote: 'Dùng để gọi tên đồ vật.',
    jlptLevel: 'N5',
    examples: [
      { jp: 'これは わたしのはんです。', kana: 'これは わたしのほんです。', vi: 'Đây là sách của tôi.' },
      { jp: 'それは なんの ざっしですか。', kana: 'それは なんの ざっしですか。', vi: 'Đó là tạp chí về cái gì?' },
    ],
  },
  {
    title: 'Chỉ định từ bổ nghĩa danh từ',
    pattern: 'この / その / あの ＋ Danh từ',
    meaningVi: 'Cái [Danh từ] này / đó / kia',
    explanation: 'Khác với これ/それ/あれ (đứng một mình), この/その/あの luôn phải đi kèm trực tiếp với một danh từ.',
    formation: 'この / その / あの + Danh từ + は 〜 です',
    usageNote: 'Chỉ đích danh một đối tượng cụ thể.',
    jlptLevel: 'N5',
    examples: [
      { jp: 'このかさは あなたのですか。', kana: 'このかさは あなたのですか。', vi: 'Cây dù này có phải của bạn không?' },
      { jp: 'あのひとは だれですか。', kana: 'あのひとは だれですか。', vi: 'Người kia là ai thế?' },
    ],
  },
  {
    title: 'Đại từ chỉ nơi chốn',
    pattern: 'ここ / そこ / あそこ は〜です',
    meaningVi: 'Chỗ này / chỗ đó / chỗ kia là...',
    explanation: 'Dùng để chỉ vị trí, phòng ban hoặc địa điểm.',
    formation: 'ここ / そこ / あそこ + は + Địa điểm + です',
    usageNote: 'Hỏi địa điểm dùng: 〜は どこですか。',
    jlptLevel: 'N5',
    examples: [
      { jp: 'きょうしつは ここです。', kana: 'きょうしつは ここです。', vi: 'Phòng học ở đây.' },
      { jp: 'おてあらいは どこですか。', kana: 'おてあらいは どこですか。', vi: 'Nhà vệ sinh ở đâu vậy?' },
    ],
  },
  {
    title: 'Thời gian & Mốc giờ',
    pattern: '〜時〜分です',
    meaningVi: 'Bây giờ là... giờ... phút',
    explanation: 'Dùng để diễn tả thời điểm hiện tại hoặc mốc giờ diễn ra sự việc.',
    formation: 'Số đếm + じ + Số đếm + ふん/ぷん + です',
    usageNote: 'Rưỡi (30 phút) dùng はん (ví dụ: いちじはん - 1 giờ rưỡi).',
    jlptLevel: 'N5',
    examples: [
      { jp: 'いま なんじですか。', kana: 'いま なんじですか。', vi: 'Bây giờ là mấy giờ?' },
      { jp: 'ごご しちじはん です。', kana: 'ごご しちじはん です。', vi: 'Là 7 giờ rưỡi tối.' },
    ],
  },
  {
    title: 'Thời gian bắt đầu và kết thúc',
    pattern: '〜から〜まで',
    meaningVi: 'Từ... đến...',
    explanation: 'から biểu thị điểm bắt đầu (thời gian hoặc địa điểm), まで biểu thị điểm kết thúc.',
    formation: 'Thời gian/Địa điểm 1 + から + Thời gian/Địa điểm 2 + まで',
    usageNote: 'Có thể dùng riêng lẻ 〜から hoặc 〜まで.',
    jlptLevel: 'N5',
    examples: [
      { jp: 'ぎんこうは ９じから ３じまでです。', kana: 'ぎんこうは くじから さんじまでです。', vi: 'Ngân hàng mở từ 9 giờ đến 3 giờ.' },
      { jp: 'まいあさ ７じに おきます。', kana: 'まいあさ しちじに おきます。', vi: 'Mỗi sáng tôi thức dậy lúc 7 giờ.' },
    ],
  },
  {
    title: 'Phương hướng di chuyển',
    pattern: '〜へ 行きます / 来ます / 帰ります',
    meaningVi: 'Đi / Đến / Về [địa điểm]',
    explanation: 'Trợ từ へ (đọc là e) chỉ hướng di chuyển đến địa điểm.',
    formation: 'Địa điểm + へ + いきます / きます / かえります',
    usageNote: 'Phủ định hoàn toàn: どこ[へ]も いきません (Không đi đâu cả).',
    jlptLevel: 'N5',
    examples: [
      { jp: 'わたしは がっこうへ いきます。', kana: 'わたしは がっこうへ いきます。', vi: 'Tôi đi đến trường học.' },
      { jp: 'らいしゅう にほんへ いきます。', kana: 'らいしゅう にほんへ いきます。', vi: 'Tuần sau tôi sẽ đi Nhật Bản.' },
    ],
  },
  {
    title: 'Phương tiện di chuyển',
    pattern: '〜で 行きます',
    meaningVi: 'Đi bằng [phương tiện]',
    explanation: 'Trợ từ で chỉ phương tiện, cách thức di chuyển.',
    formation: 'Phương tiện giao thông + で + いきます',
    usageNote: 'Đi bộ dùng あるいて (không thêm で).',
    jlptLevel: 'N5',
    examples: [
      { jp: 'でんしゃで えきへ いきます。', kana: 'でんしゃで えきへ いきます。', vi: 'Tôi đi đến nhà ga bằng tàu điện.' },
      { jp: 'うちから えきまで あるいて いきます。', kana: 'うちから えきまで あるいて いきます。', vi: 'Từ nhà đến ga tôi đi bộ.' },
    ],
  },

  // ==========================================
  // N4 Grammar Points
  // ==========================================
  {
    title: 'Yêu cầu lịch sự',
    pattern: '〜てください',
    meaningVi: 'Xin hãy / Hãy làm...',
    explanation: 'Dùng thể Te kết hợp ください để đưa ra lời yêu cầu, hướng dẫn một cách lịch sự.',
    formation: 'V-て + ください',
    usageNote: 'Không dùng với người bề trên khi giao việc bắt buộc.',
    jlptLevel: 'N4',
    examples: [
      { jp: 'ここに なまえを かいてください。', kana: 'ここに なまえを かいてください。', vi: 'Xin hãy viết tên vào đây.' },
      { jp: 'ちょっと まってください。', kana: 'ちょっと まってください。', vi: 'Xin vui lòng đợi một chút.' },
    ],
  },
  {
    title: 'Hành động đang tiếp diễn',
    pattern: '〜ています',
    meaningVi: 'Đang làm...',
    explanation: 'Diễn tả hành động đang xảy ra tại thời điểm nói.',
    formation: 'V-て + います',
    usageNote: 'Phủ định: 〜ていません (chưa làm).',
    jlptLevel: 'N4',
    examples: [
      { jp: 'いま にほんごを べんきょうしています。', kana: 'いま にほんごを べんきょうしています。', vi: 'Bây giờ tôi đang học tiếng Nhật.' },
      { jp: 'あめが ふっています。', kana: 'あめが ふっています。', vi: 'Trời đang mưa.' },
    ],
  },
  {
    title: 'Xin phép làm gì',
    pattern: '〜てもいいです',
    meaningVi: 'Được phép làm / Làm... có được không?',
    explanation: 'Dùng để xin phép hoặc cho phép ai đó làm một hành động.',
    formation: 'V-て + もいいです (câu hỏi: 〜てもいいですか)',
    usageNote: 'Trả lời đồng ý: ええ、いいですよ. Từ chối lịch sự: すみません、ちょっと...',
    jlptLevel: 'N4',
    examples: [
      { jp: 'しゃしんを とってもいいですか。', kana: 'しゃしんを とってもいいですか。', vi: 'Tôi chụp ảnh ở đây có được không?' },
      { jp: 'たばこを すってもいいですか。', kana: 'たばこを すってもいいですか。', vi: 'Tôi hút thuốc có được không?' },
    ],
  },
  {
    title: 'Cấm đoán',
    pattern: '〜てはいけません',
    meaningVi: 'Không được làm...',
    explanation: 'Biểu thị sự cấm đoán, quy định không được phép thực hiện hành động.',
    formation: 'V-て + はいけません',
    usageNote: 'Thường dùng trong quy tắc công cộng, biển báo hoặc người lớn nhắc nhở trẻ em.',
    jlptLevel: 'N4',
    examples: [
      { jp: 'ここで たばこを すってはいけません。', kana: 'ここで たばこを すってはいけません。', vi: 'Không được hút thuốc ở đây.' },
      { jp: 'びじゅつかんで しゃしんを とってはいけません。', kana: 'びじゅつかんで しゃしんを とってはいけません。', vi: 'Không được chụp ảnh trong bảo tàng mỹ thuật.' },
    ],
  },
  {
    title: 'Khuyên nhủ không làm gì',
    pattern: '〜ないでください',
    meaningVi: 'Xin đừng làm...',
    explanation: 'Dùng thể Nai kết hợp でください để yêu cầu hoặc khuyên ai đó đừng làm gì.',
    formation: 'V-ない + でください',
    usageNote: 'Mang sắc thái lịch sự, quan tâm.',
    jlptLevel: 'N4',
    examples: [
      { jp: 'しんぱいしないでください。', kana: 'しんぱいしないでください。', vi: 'Xin đừng lo lắng.' },
      { jp: 'パスポートを わすれないでください。', kana: 'パスポートを わすれないでください。', vi: 'Xin đừng quên hộ chiếu.' },
    ],
  },
  {
    title: 'Bắt buộc / Nghĩa vụ',
    pattern: '〜なければなりません',
    meaningVi: 'Phải làm...',
    explanation: 'Diễn tả hành động bắt buộc phải thực hiện, không thể không làm.',
    formation: 'V-ない (bỏ い) + ければなりません',
    usageNote: 'Trong giao tiếp thân mật có thể nói ngắn: 〜なきゃ / 〜ないと.',
    jlptLevel: 'N4',
    examples: [
      { jp: 'まいあさ くすりを のまなければなりません。', kana: 'まいあさ くすりを のまなければなりません。', vi: 'Mỗi sáng tôi phải uống thuốc.' },
      { jp: 'きょうは ざんぎょうしなければなりません。', kana: 'きょうは ざんぎょうしなければなりません。', vi: 'Hôm nay tôi phải làm thêm giờ.' },
    ],
  },
  {
    title: 'Khả năng / Năng lực',
    pattern: '〜ことができます',
    meaningVi: 'Có thể làm...',
    explanation: 'Diễn tả năng lực bản thân có thể làm việc gì, hoặc hoàn cảnh cho phép thực hiện việc gì.',
    formation: 'V-る (thể từ điển) + ことができます',
    usageNote: 'Hỏi khả năng: 〜ことができますか。',
    jlptLevel: 'N4',
    examples: [
      { jp: 'わたしは にほんごを はなすことができます。', kana: 'わたしは にほんごを はなすことができます。', vi: 'Tôi có thể nói tiếng Nhật.' },
      { jp: 'カードで はらうことができますか。', kana: 'カードで はらうことができますか。', vi: 'Tôi có thể thanh toán bằng thẻ được không?' },
    ],
  },
  {
    title: 'Trước khi làm gì',
    pattern: '〜まえに',
    meaningVi: 'Trước khi...',
    explanation: 'Chỉ thứ tự hành động xảy ra trước một hành động khác.',
    formation: 'V-る / Danh từ + の + まえに',
    usageNote: 'Động từ luôn ở thể từ điển V-る dù câu ở quá khứ.',
    jlptLevel: 'N4',
    examples: [
      { jp: 'ねるまえに、ほんを よみます。', kana: 'ねるまえに、ほんを よみます。', vi: 'Trước khi đi ngủ, tôi đọc sách.' },
      { jp: 'しょくじの まえに、てを あらいます。', kana: 'しょくじの まえに、てを あらいます。', vi: 'Trước bữa ăn, tôi rửa tay.' },
    ],
  },
];

const SEED_KANJI = [
  ['日', 'ニチ、ジツ', 'ひ、か', 'ngày, mặt trời', 'day, sun', 4, '日', 'N5', 'NHẬT', 'Mặt trời mọc mỗi ngày.'],
  ['本', 'ホン', 'もと', 'sách, gốc', 'book, origin', 5, '木', 'N5', 'BẢN', 'Cây thêm một nét ở gốc thành bản.'],
  ['学', 'ガク', 'まなぶ', 'học', 'study', 8, '子', 'N5', 'HỌC', 'Đứa trẻ dưới mái nhà đang học.'],
  ['語', 'ゴ', 'かたる', 'ngôn ngữ', 'language', 14, '言', 'N5', 'NGỮ', 'Lời nói tạo thành ngôn ngữ.'],
  ['人', 'ジン、ニン', 'ひと', 'người', 'person', 2, '人', 'N5', 'NHÂN', 'Hình dáng con người đang đứng.'],
  ['先', 'セン', 'さき', 'trước, đi trước', 'previous, ahead', 6, '儿', 'N5', 'TIÊN', 'Người đi trước hướng dẫn.'],
  ['生', 'セイ、ショウ', 'いきる、うまれる', 'sinh, sống', 'life, birth', 5, '生', 'N5', 'SINH', 'Mầm cây sinh sôi nảy nở.'],
  ['何', 'カ', 'なに、なん', 'cái gì', 'what', 7, '人', 'N5', 'HÀ', 'Người vác cái gì trên vai.'],
  ['行', 'コウ、ギョウ', 'いく、おこなう', 'đi, tổ chức', 'go, carry out', 6, '行', 'N5', 'HÀNH', 'Ngã tư đường người đi lại.'],
  ['来', 'ライ', 'くる', 'đến', 'come', 7, '木', 'N5', 'LAI', 'Cây lúa trĩu hạt mùa gặt đến.'],
  ['食', 'ショク', 'たべる', 'ăn', 'eat', 9, '食', 'N4', 'THỰC', 'Đậy thức ăn lại trước khi ăn.'],
  ['見', 'ケン', 'みる', 'nhìn, xem', 'look, see', 7, '見', 'N4', 'KIẾN', 'Mắt to đang chăm chú nhìn.'],
  ['書', 'ショ', 'かく', 'viết', 'write', 10, '曰', 'N4', 'THƯ', 'Tay cầm bút viết chữ ra lời.'],
  ['読', 'ドク', 'よむ', 'đọc', 'read', 14, '言', 'N4', 'ĐỘC', 'Lời nói đọc đi bán lại.'],
  ['論', 'ロン', null, 'luận', 'argument', 15, '言', 'N1', 'LUẬN', 'Nhiều lời nói được sắp xếp thành lập luận.'],
];

async function queryOne(client, query, values) {
  const { rows } = await client.query(query, values);
  return rows[0] || null;
}

function createLessonSlug(level, lessonNumber) {
  return `${level.toLowerCase()}-l${lessonNumber}`;
}

function createLessonContent(lesson) {
  const words = lesson.vocabulary
    .map(([word, kana, romaji, meaningVi]) => `- ${word} (${kana || romaji}): ${meaningVi}`)
    .join('\n');

  return `# ${lesson.title}\n${lesson.description}\n\n## Từ vựng trọng tâm\n${words}`;
}

async function seedLesson(client, lesson) {
  const slug = createLessonSlug(lesson.level, lesson.number);

  const dbLesson = await queryOne(
    client,
    `
      INSERT INTO lessons (
        title,
        slug,
        lesson_type,
        jlpt_level,
        description,
        content,
        duration_seconds,
        is_published,
        created_at,
        updated_at
      )
      VALUES ($1, $2, 'mixed', $3, $4, $5, 900, true, NOW(), NOW())
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        jlpt_level = EXCLUDED.jlpt_level,
        description = EXCLUDED.description,
        content = EXCLUDED.content,
        is_published = true,
        updated_at = NOW()
      RETURNING *
    `,
    [
      lesson.title,
      slug,
      lesson.level,
      lesson.description,
      createLessonContent(lesson),
    ],
  );

  for (const [word, kana, romaji, meaningVi, meaningEn, wordType] of lesson.vocabulary) {
    const existingVocabulary = await queryOne(
      client,
      `
        SELECT id
        FROM vocabulary
        WHERE word = $1
          AND COALESCE(kana, '') = COALESCE($2, '')
          AND jlpt_level = $3
          AND lesson_number = $4
        LIMIT 1
      `,
      [word, kana, lesson.level, lesson.number],
    );

    if (existingVocabulary) {
      await client.query(
        `
          UPDATE vocabulary
          SET
            romaji = $1,
            meaning_vi = $2,
            meaning_en = $3,
            word_type = $4,
            updated_at = NOW()
          WHERE id = $5
        `,
        [romaji, meaningVi, meaningEn, wordType, existingVocabulary.id],
      );
    } else {
      await client.query(
        `
          INSERT INTO vocabulary (
            word,
            kana,
            romaji,
            meaning_vi,
            meaning_en,
            word_type,
            jlpt_level,
            lesson_number,
            created_at,
            updated_at
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())
        `,
        [word, kana, romaji, meaningVi, meaningEn, wordType, lesson.level, lesson.number],
      );
    }
  }

  return dbLesson;
}

async function seedKanji(client) {
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
  ] of SEED_KANJI) {
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
          unicode_code = EXCLUDED.unicode_code,
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
}

async function seedGrammar(client) {
  // Clear existing grammar points and rebuild cleanly
  await client.query('DELETE FROM grammar_points');

  for (const item of SEED_GRAMMAR) {
    const res = await client.query(
      `
        INSERT INTO grammar_points (
          title,
          pattern,
          meaning_vi,
          explanation,
          usage_note,
          formation,
          jlpt_level,
          created_at,
          updated_at
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
        RETURNING id
      `,
      [
        item.title,
        item.pattern,
        item.meaningVi,
        item.explanation,
        item.usageNote,
        item.formation,
        item.jlptLevel,
      ],
    );

    const grammarId = res.rows[0]?.id;
    if (grammarId && item.examples) {
      for (const ex of item.examples) {
        await client.query(
          `
            INSERT INTO grammar_examples (
              grammar_point_id,
              example_jp,
              example_kana,
              example_vi,
              created_at
            )
            VALUES ($1, $2, $3, $4, NOW())
          `,
          [grammarId, ex.jp, ex.kana, ex.vi],
        );
      }
    }
  }
}

async function seedLessonsFromVocabulary(client) {
  await client.query(
    `
      INSERT INTO lessons (
        title,
        slug,
        lesson_type,
        jlpt_level,
        description,
        content,
        duration_seconds,
        is_published,
        created_at,
        updated_at
      )
      SELECT
        'Bài ' || lesson_number,
        LOWER(jlpt_level) || '-l' || lesson_number,
        'mixed',
        jlpt_level,
        'Bài ' || lesson_number || ' cấp độ ' || jlpt_level || '.',
        '# Bài ' || lesson_number,
        900,
        true,
        NOW(),
        NOW()
      FROM (
        SELECT DISTINCT jlpt_level, lesson_number
        FROM vocabulary
        WHERE lesson_number IS NOT NULL
          AND jlpt_level IS NOT NULL
      ) vocabulary_lessons
      ON CONFLICT (slug) DO UPDATE SET
        jlpt_level = EXCLUDED.jlpt_level,
        is_published = true,
        updated_at = NOW()
    `,
  );
}

async function seedLessonVocabularyLinks(client) {
  await client.query(
    `
      INSERT INTO lesson_vocabularies (
        lesson_id,
        vocabulary_id,
        position,
        is_main
      )
      SELECT
        lessons.id,
        ranked_vocabulary.id,
        ranked_vocabulary.position,
        true
      FROM (
        SELECT
          vocabulary.id,
          vocabulary.jlpt_level,
          vocabulary.lesson_number,
          ROW_NUMBER() OVER (
            PARTITION BY vocabulary.jlpt_level, vocabulary.lesson_number
            ORDER BY vocabulary.id
          ) AS position
        FROM vocabulary
        WHERE vocabulary.lesson_number IS NOT NULL
          AND vocabulary.jlpt_level IS NOT NULL
      ) ranked_vocabulary
      INNER JOIN lessons
        ON lessons.slug = LOWER(ranked_vocabulary.jlpt_level) || '-l' || ranked_vocabulary.lesson_number
      ON CONFLICT (lesson_id, vocabulary_id) DO UPDATE SET
        position = EXCLUDED.position,
        is_main = true
    `,
  );
}

async function seedLessonGrammarLinks(client) {
  await client.query(
    `
      WITH lesson_counts AS (
        SELECT
          jlpt_level,
          COUNT(*)::int AS lesson_count
        FROM lessons
        WHERE jlpt_level IS NOT NULL
        GROUP BY jlpt_level
      ),
      ranked_lessons AS (
        SELECT
          lessons.id,
          lessons.jlpt_level,
          ROW_NUMBER() OVER (
            PARTITION BY lessons.jlpt_level
            ORDER BY COALESCE((SUBSTRING(lessons.slug FROM '-l([0-9]+)$'))::int, lessons.id::int), lessons.id
          ) AS lesson_rank
        FROM lessons
        INNER JOIN lesson_counts
          ON lesson_counts.jlpt_level = lessons.jlpt_level
      ),
      ranked_grammar AS (
        SELECT
          grammar_points.id,
          grammar_points.jlpt_level,
          ROW_NUMBER() OVER (
            PARTITION BY grammar_points.jlpt_level
            ORDER BY grammar_points.id
          ) AS grammar_rank,
          COUNT(*) OVER (
            PARTITION BY grammar_points.jlpt_level
          ) AS grammar_count
        FROM grammar_points
        WHERE grammar_points.jlpt_level IS NOT NULL
      ),
      assigned_grammar AS (
        SELECT
          ranked_grammar.id AS grammar_point_id,
          ranked_grammar.jlpt_level,
          FLOOR(
            ((ranked_grammar.grammar_rank - 1) * lesson_counts.lesson_count)::numeric
            / ranked_grammar.grammar_count
          )::int + 1 AS lesson_rank,
          ranked_grammar.grammar_rank AS position
        FROM ranked_grammar
        INNER JOIN lesson_counts
          ON lesson_counts.jlpt_level = ranked_grammar.jlpt_level
      )
      INSERT INTO lesson_grammar_points (
        lesson_id,
        grammar_point_id,
        position
      )
      SELECT
        ranked_lessons.id,
        assigned_grammar.grammar_point_id,
        assigned_grammar.position
      FROM assigned_grammar
      INNER JOIN ranked_lessons
        ON ranked_lessons.jlpt_level = assigned_grammar.jlpt_level
        AND ranked_lessons.lesson_rank = assigned_grammar.lesson_rank
      ON CONFLICT (lesson_id, grammar_point_id) DO UPDATE SET
        position = EXCLUDED.position
    `,
  );
}

async function main() {
  const requiredEnvVars = ['DB_HOST', 'DB_PORT', 'DB_NAME', 'DB_USER', 'DB_PASSWORD'];
  const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);

  if (missingEnvVars.length > 0) {
    throw new Error(`Missing env vars: ${missingEnvVars.join(', ')}`);
  }

  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  await client.connect();

  try {
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');

    await client.query('BEGIN');
    await client.query(schemaSql);

    for (const lesson of SEED_LESSONS) {
      await seedLesson(client, lesson);
    }

    await seedKanji(client);
    await seedGrammar(client);
    await seedLessonsFromVocabulary(client);
    await seedLessonVocabularyLinks(client);
    await seedLessonGrammarLinks(client);
    await client.query('COMMIT');

    console.log('[DB SETUP] Schema, lessons, vocabulary, and grammar seed data are ready.');
  } catch (error) {
    await client.query('ROLLBACK').catch(() => {});
    throw error;
  } finally {
    await client.end().catch(() => {});
  }
}

main().catch((error) => {
  console.error('[DB SETUP] Failed:', error.message);
  process.exitCode = 1;
});
