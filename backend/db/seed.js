const fs = require('node:fs');
const path = require('node:path');
const { Client } = require('pg');
require('dotenv').config();
const { seedCultureDictionary } = require('./seed-culture-dictionary');
const { seedKanjiCompounds } = require('./seed-kanji-compounds');
const { seed25LessonsCurriculum } = require('./seed-25-lessons');

const SEED_LESSONS = [
  {
    "level": "N5",
    "number": 1,
    "title": "Bài 1: Chào hỏi & Tự giới thiệu",
    "description": "Làm quen với đại từ nhân xưng, danh xưng và cấu trúc giới thiệu bản thân.",
    "vocabulary": [
      [
        "私",
        "わたし",
        "watashi",
        "tôi",
        "I",
        "pronoun"
      ],
      [
        "あなた",
        "あなた",
        "anata",
        "bạn, anh, chị",
        "you",
        "pronoun"
      ],
      [
        "あの人",
        "あのひと",
        "anohito",
        "người kia",
        "that person",
        "pronoun"
      ],
      [
        "人",
        "ひと",
        "hito",
        "người, con người",
        "person, human",
        "noun"
      ],
      [
        "先生",
        "せんせい",
        "sensei",
        "thầy cô giáo",
        "teacher",
        "noun"
      ],
      [
        "学生",
        "がくせい",
        "gakusei",
        "học sinh, sinh viên",
        "student",
        "noun"
      ],
      [
        "会社員",
        "かいしゃいん",
        "kaishain",
        "nhân viên công ty",
        "company employee",
        "noun"
      ],
      [
        "医者",
        "いしゃ",
        "isha",
        "bác sĩ",
        "doctor",
        "noun"
      ],
      [
        "研究者",
        "けんきゅうしゃ",
        "kenkyuusha",
        "nhà nghiên cứu",
        "researcher",
        "noun"
      ],
      [
        "大学",
        "だいがく",
        "daigaku",
        "trường đại học",
        "university",
        "noun"
      ],
      [
        "病院",
        "びょういん",
        "byouin",
        "bệnh viện",
        "hospital",
        "noun"
      ],
      [
        "こんにちは",
        "こんにちは",
        "konnichiwa",
        "xin chào",
        "hello",
        "expression"
      ],
      [
        "はじめまして",
        "はじめまして",
        "hajimemashite",
        "rất vui được gặp bạn lần đầu",
        "nice to meet you",
        "expression"
      ]
    ]
  },
  {
    "level": "N5",
    "number": 2,
    "title": "Bài 2: Đồ vật & Sở hữu",
    "description": "Học các đại từ chỉ định đồ vật và cách hỏi, trả lời quyền sở hữu.",
    "vocabulary": [
      [
        "これ",
        "これ",
        "kore",
        "cái này (gần người nói)",
        "this one",
        "pronoun"
      ],
      [
        "それ",
        "それ",
        "sore",
        "cái đó (gần người nghe)",
        "that one",
        "pronoun"
      ],
      [
        "あれ",
        "あれ",
        "are",
        "cái kia (xa cả hai)",
        "that one over there",
        "pronoun"
      ],
      [
        "本",
        "ほん",
        "hon",
        "quyển sách",
        "book",
        "noun"
      ],
      [
        "辞書",
        "じしょ",
        "jisho",
        "từ điển",
        "dictionary",
        "noun"
      ],
      [
        "雑誌",
        "ざっし",
        "zasshi",
        "tạp chí",
        "magazine",
        "noun"
      ],
      [
        "新聞",
        "しんぶん",
        "shinbun",
        "tờ báo",
        "newspaper",
        "noun"
      ],
      [
        "手帳",
        "てちょう",
        "techou",
        "sổ tay",
        "pocket notebook",
        "noun"
      ],
      [
        "名刺",
        "めいし",
        "meishi",
        "danh thiếp",
        "business card",
        "noun"
      ],
      [
        "鉛筆",
        "えんぴつ",
        "enpitsu",
        "bút chì",
        "pencil",
        "noun"
      ],
      [
        "時計",
        "とけい",
        "tokei",
        "đồng hồ",
        "watch, clock",
        "noun"
      ],
      [
        "傘",
        "かさ",
        "kasa",
        "cây dù, ô",
        "umbrella",
        "noun"
      ],
      [
        "鞄",
        "かばん",
        "kaban",
        "cặp xách, túi xách",
        "bag",
        "noun"
      ]
    ]
  },
  {
    "level": "N5",
    "number": 3,
    "title": "Bài 3: Địa điểm & Nơi chốn",
    "description": "Hỏi và chỉ phương hướng, phòng ban, địa điểm và giá tiền.",
    "vocabulary": [
      [
        "ここ",
        "ここ",
        "koko",
        "chỗ này, ở đây",
        "here",
        "pronoun"
      ],
      [
        "そこ",
        "そこ",
        "soko",
        "chỗ đó, ở đó",
        "there",
        "pronoun"
      ],
      [
        "あそこ",
        "あそこ",
        "asoko",
        "chỗ kia, đằng kia",
        "over there",
        "pronoun"
      ],
      [
        "どこ",
        "どこ",
        "doko",
        "ở đâu",
        "where",
        "question word"
      ],
      [
        "教室",
        "きょうしつ",
        "kyoushitsu",
        "phòng học, lớp học",
        "classroom",
        "noun"
      ],
      [
        "食堂",
        "しょくどう",
        "shokudou",
        "nhà ăn, căng tin",
        "cafeteria",
        "noun"
      ],
      [
        "事務所",
        "じむしょ",
        "jimusho",
        "văn phòng làm việc",
        "office",
        "noun"
      ],
      [
        "部屋",
        "へや",
        "heya",
        "căn phòng",
        "room",
        "noun"
      ],
      [
        "お手洗い",
        "おてあらい",
        "otearai",
        "nhà vệ sinh",
        "restroom",
        "noun"
      ],
      [
        "階段",
        "かいだん",
        "kaidan",
        "cầu thang",
        "stairs",
        "noun"
      ],
      [
        "会社",
        "かいしゃ",
        "kaisha",
        "công ty",
        "company",
        "noun"
      ],
      [
        "家",
        "うち",
        "uchi",
        "nhà",
        "home, house",
        "noun"
      ],
      [
        "いくら",
        "いくら",
        "ikura",
        "bao nhiêu tiền",
        "how much",
        "question word"
      ],
      [
        "円",
        "えん",
        "en",
        "tiền Yên (Nhật)",
        "yen",
        "counter"
      ]
    ]
  },
  {
    "level": "N5",
    "number": 4,
    "title": "Bài 4: Thời gian & Thói quen",
    "description": "Nói giờ giấc, ngày tháng và các động từ sinh hoạt thường ngày.",
    "vocabulary": [
      [
        "今",
        "いま",
        "ima",
        "bây giờ",
        "now",
        "noun"
      ],
      [
        "時",
        "じ",
        "ji",
        "giờ (thời gian)",
        "o clock",
        "counter"
      ],
      [
        "分",
        "ふん",
        "fun",
        "phút",
        "minute",
        "counter"
      ],
      [
        "半",
        "はん",
        "han",
        "nửa, rưỡi (30 phút)",
        "half past",
        "noun"
      ],
      [
        "朝",
        "あさ",
        "asa",
        "buổi sáng",
        "morning",
        "noun"
      ],
      [
        "昼",
        "ひる",
        "hiru",
        "buổi trưa",
        "noon",
        "noun"
      ],
      [
        "晩",
        "ばん",
        "ban",
        "buổi tối",
        "evening, night",
        "noun"
      ],
      [
        "今日",
        "きょう",
        "kyou",
        "hôm nay",
        "today",
        "noun"
      ],
      [
        "明日",
        "あした",
        "ashita",
        "ngày mai",
        "tomorrow",
        "noun"
      ],
      [
        "起きます",
        "おきます",
        "okimasu",
        "thức dậy",
        "wake up",
        "verb"
      ],
      [
        "寝ます",
        "ねます",
        "nemasu",
        "đi ngủ",
        "go to bed",
        "verb"
      ],
      [
        "働きます",
        "はたらきます",
        "hatarakimasu",
        "làm việc",
        "work",
        "verb"
      ],
      [
        "勉強します",
        "べんきょうします",
        "benkyoushimasu",
        "học tập",
        "study",
        "verb"
      ],
      [
        "終わります",
        "おわります",
        "owarimasu",
        "kết thúc, xong",
        "finish",
        "verb"
      ]
    ]
  },
  {
    "level": "N5",
    "number": 5,
    "title": "Bài 5: Đi lại & Phương tiện giao thông",
    "description": "Nói về việc đi đâu, đến đâu bằng phương tiện gì và đi cùng ai.",
    "vocabulary": [
      [
        "行きます",
        "いきます",
        "ikimasu",
        "đi",
        "go",
        "verb"
      ],
      [
        "来ます",
        "きます",
        "kimasu",
        "đến",
        "come",
        "verb"
      ],
      [
        "帰ります",
        "かえります",
        "kaerimasu",
        "về (nhà/nước)",
        "return, go home",
        "verb"
      ],
      [
        "学校",
        "がっこう",
        "gakkou",
        "trường học",
        "school",
        "noun"
      ],
      [
        "駅",
        "えき",
        "eki",
        "nhà ga",
        "station",
        "noun"
      ],
      [
        "飛行機",
        "ひこうき",
        "hikouki",
        "máy bay",
        "airplane",
        "noun"
      ],
      [
        "電車",
        "でんしゃ",
        "densha",
        "tàu điện",
        "electric train",
        "noun"
      ],
      [
        "地下鉄",
        "ちかてつ",
        "chikatetsu",
        "tàu điện ngầm",
        "subway",
        "noun"
      ],
      [
        "自転車",
        "じてんしゃ",
        "jitensha",
        "xe đạp",
        "bicycle",
        "noun"
      ],
      [
        "歩いて",
        "あるいて",
        "aruite",
        "đi bộ",
        "on foot",
        "expression"
      ],
      [
        "友達",
        "ともだち",
        "tomodachi",
        "bạn bè",
        "friend",
        "noun"
      ],
      [
        "家族",
        "かぞく",
        "kazoku",
        "gia đình",
        "family",
        "noun"
      ],
      [
        "一人で",
        "ひとりで",
        "hitoride",
        "một mình",
        "alone",
        "expression"
      ]
    ]
  },
  {
    "level": "N4",
    "number": 1,
    "title": "Bài 1: Thể Te & Yêu cầu lịch sự",
    "description": "Chuyển đổi động từ sang thể Te, đưa ra lời yêu cầu và diễn tả hành động đang tiếp diễn.",
    "vocabulary": [
      [
        "食べて",
        "たべて",
        "tabete",
        "hãy ăn (thể te)",
        "eat",
        "verb"
      ],
      [
        "見て",
        "みて",
        "mite",
        "hãy xem (thể te)",
        "look",
        "verb"
      ],
      [
        "読んで",
        "よんで",
        "yonde",
        "hãy đọc (thể te)",
        "read",
        "verb"
      ],
      [
        "書いて",
        "かいて",
        "kaite",
        "hãy viết (thể te)",
        "write",
        "verb"
      ],
      [
        "開けます",
        "あけます",
        "akemasu",
        "mở (cửa/sách)",
        "open",
        "verb"
      ],
      [
        "閉めます",
        "しめます",
        "shimemasu",
        "đóng (cửa/sách)",
        "close",
        "verb"
      ],
      [
        "急ぎます",
        "いそぎます",
        "isogimasu",
        "vội vàng, gấp rút",
        "hurry",
        "verb"
      ],
      [
        "待ちます",
        "まちます",
        "machimasu",
        "chờ đợi",
        "wait",
        "verb"
      ],
      [
        "手伝います",
        "てつだいます",
        "tetsudaimasu",
        "giúp đỡ",
        "help",
        "verb"
      ],
      [
        "教えます",
        "おしえます",
        "oshiemasu",
        "dạy, chỉ dẫn",
        "teach, tell",
        "verb"
      ],
      [
        "ください",
        "ください",
        "kudasai",
        "xin hãy, làm ơn",
        "please",
        "expression"
      ]
    ]
  },
  {
    "level": "N4",
    "number": 2,
    "title": "Bài 2: Xin phép & Trạng thái",
    "description": "Diễn đạt việc xin phép làm điều gì, nêu điều cấm đoán và nói về trạng thái kéo dài.",
    "vocabulary": [
      [
        "置きます",
        "おきます",
        "okimasu",
        "đặt, để",
        "put, place",
        "verb"
      ],
      [
        "作ります",
        "つくります",
        "tsukurimasu",
        "làm, chế tạo",
        "make, produce",
        "verb"
      ],
      [
        "売ります",
        "うります",
        "urimasu",
        "bán",
        "sell",
        "verb"
      ],
      [
        "知ります",
        "しります",
        "shirimasu",
        "biết",
        "know",
        "verb"
      ],
      [
        "住みます",
        "すみます",
        "sumimasu",
        "sống, cư trú",
        "live, reside",
        "verb"
      ],
      [
        "資料",
        "しりょう",
        "shiryou",
        "tài liệu",
        "materials, data",
        "noun"
      ],
      [
        "製品",
        "せいひん",
        "seihin",
        "sản phẩm",
        "product",
        "noun"
      ],
      [
        "専門",
        "せんもん",
        "senmon",
        "chuyên môn",
        "specialty",
        "noun"
      ],
      [
        "歯医者",
        "はいしゃ",
        "haisha",
        "nha sĩ",
        "dentist",
        "noun"
      ],
      [
        "独身",
        "どくしん",
        "dokushin",
        "độc thân",
        "single, unmarried",
        "noun"
      ]
    ]
  },
  {
    "level": "N4",
    "number": 3,
    "title": "Bài 3: Thể Nai & Nghĩa vụ",
    "description": "Chuyển đổi động từ thể phủ định ngắn (Nai), diễn đạt nghĩa vụ bắt buộc hoặc khuyên nhủ.",
    "vocabulary": [
      [
        "覚えます",
        "おぼえます",
        "oboemasu",
        "nhớ, ghi nhớ",
        "memorize",
        "verb"
      ],
      [
        "忘れます",
        "わすれます",
        "wasuremasu",
        "quên",
        "forget",
        "verb"
      ],
      [
        "なくします",
        "なくします",
        "nakushimasu",
        "làm mất",
        "lose",
        "verb"
      ],
      [
        "払います",
        "はらいます",
        "haraimasu",
        "trả tiền",
        "pay",
        "verb"
      ],
      [
        "返します",
        "かえします",
        "kaeshimasu",
        "trả lại (đồ vật)",
        "give back",
        "verb"
      ],
      [
        "出かけます",
        "でかけます",
        "dekakemasu",
        "ra ngoài",
        "go out",
        "verb"
      ],
      [
        "脱ぎます",
        "ぬぎます",
        "nugimasu",
        "cởi (áo, giày)",
        "take off",
        "verb"
      ],
      [
        "心配します",
        "しんぱいします",
        "shinpaishimasu",
        "lo lắng",
        "worry",
        "verb"
      ],
      [
        "残業します",
        "ざんぎょうします",
        "zangyoushimasu",
        "làm thêm giờ",
        "work overtime",
        "verb"
      ],
      [
        "薬",
        "くすり",
        "kusuri",
        "thuốc",
        "medicine",
        "noun"
      ],
      [
        "保険証",
        "ほけんしょう",
        "hokenshou",
        "thẻ bảo hiểm",
        "insurance card",
        "noun"
      ]
    ]
  },
  {
    "level": "N4",
    "number": 4,
    "title": "Bài 4: Thể Khả năng & Sở thích",
    "description": "Diễn tả năng lực, khả năng có thể làm được việc gì và nói về sở thích cá nhân.",
    "vocabulary": [
      [
        "弾きます",
        "ひきます",
        "hikimasu",
        "chơi (nhạc cụ)",
        "play (piano/guitar)",
        "verb"
      ],
      [
        "歌います",
        "うたいます",
        "utaimasu",
        "hát",
        "sing",
        "verb"
      ],
      [
        "泳ぎます",
        "およぎます",
        "oyogimasu",
        "bơi lội",
        "swim",
        "verb"
      ],
      [
        "直します",
        "なおします",
        "naoshimasu",
        "sửa chữa",
        "repair",
        "verb"
      ],
      [
        "運転します",
        "うんてんします",
        "untenshimasu",
        "lái xe",
        "drive",
        "verb"
      ],
      [
        "ピアノ",
        "ピアノ",
        "piano",
        "đàn piano",
        "piano",
        "noun"
      ],
      [
        "外国語",
        "がいこくご",
        "gaikokugo",
        "ngoại ngữ",
        "foreign language",
        "noun"
      ],
      [
        "趣味",
        "しゅみ",
        "shumi",
        "sở thích",
        "hobby",
        "noun"
      ],
      [
        "日記",
        "にっき",
        "nikki",
        "nhật ký",
        "diary",
        "noun"
      ],
      [
        "特に",
        "とくに",
        "tokuni",
        "đặc biệt là",
        "especially",
        "adverb"
      ]
    ]
  },
  {
    "level": "N4",
    "number": 5,
    "title": "Bài 5: So sánh, Lựa chọn & Chi phí",
    "description": "Học cách so sánh đồ vật, lựa chọn phương án và trao đổi về giá cả, số lượng.",
    "vocabulary": [
      [
        "値段",
        "ねだん",
        "nedan",
        "giá cả, mức giá",
        "price, cost",
        "noun"
      ],
      [
        "以上",
        "いじょう",
        "ijou",
        "trở lên, hơn thế, xin hết",
        "more than, or more",
        "noun"
      ],
      [
        "以下",
        "いか",
        "ika",
        "trở xuống, dưới mức",
        "less than, or less",
        "noun"
      ],
      [
        "間",
        "あいだ",
        "aida",
        "khoảng cách, ở giữa, trong lúc",
        "between, interval",
        "noun"
      ],
      [
        "頭",
        "あたま",
        "atama",
        "cái đầu, đầu óc",
        "head, brain",
        "noun"
      ],
      [
        "比べる",
        "くらべる",
        "kuraberu",
        "so sánh, đối chiếu",
        "compare",
        "verb"
      ],
      [
        "ずっと",
        "ずっと",
        "zutto",
        "hơn hẳn, suốt từ trước",
        "by far, all the time",
        "adverb"
      ],
      [
        "どちら",
        "どちら",
        "dochira",
        "bên nào, hướng nào",
        "which one",
        "pronoun"
      ],
      [
        "一番",
        "いちばん",
        "ichiban",
        "nhất, số một",
        "most, number one",
        "adverb"
      ],
      [
        "増えます",
        "ふえます",
        "fuemasu",
        "tăng lên (số lượng)",
        "increase",
        "verb"
      ],
      [
        "減ります",
        "へります",
        "herimasu",
        "giảm đi",
        "decrease",
        "verb"
      ],
      [
        "半分",
        "はんぶん",
        "hanbun",
        "một nửa",
        "half",
        "noun"
      ]
    ]
  },
  {
    "level": "N3",
    "number": 1,
    "title": "Bài 1: Câu điều kiện & Giả định thực tế",
    "description": "Nắm vững các mẫu câu điều kiện 〜と、〜ば、〜たら、〜なら trong giao tiếp đời sống và công việc.",
    "vocabulary": [
      [
        "雨",
        "あめ",
        "ame",
        "mưa",
        "rain",
        "noun"
      ],
      [
        "場合",
        "ばあい",
        "baai",
        "trường hợp, tình huống",
        "case, situation",
        "noun"
      ],
      [
        "もし",
        "もし",
        "moshi",
        "nếu như, giả sử",
        "if",
        "adverb"
      ],
      [
        "できる",
        "できる",
        "dekiru",
        "có thể làm được",
        "can do",
        "verb"
      ],
      [
        "必要",
        "ひつよう",
        "hitsuyou",
        "cần thiết, thiết yếu",
        "necessary",
        "na-adjective"
      ],
      [
        "準備",
        "じゅんび",
        "junbi",
        "chuẩn bị",
        "preparation",
        "noun"
      ],
      [
        "連絡",
        "れんらく",
        "renraku",
        "liên lạc, thông báo",
        "contact",
        "noun"
      ],
      [
        "注意",
        "ちゅうい",
        "chuui",
        "chú ý, cẩn thận",
        "attention, caution",
        "noun"
      ],
      [
        "予定",
        "よてい",
        "yotei",
        "dự định, lịch trình",
        "plan, schedule",
        "noun"
      ],
      [
        "案内",
        "あんない",
        "annai",
        "hướng dẫn, chỉ dẫn",
        "guidance",
        "noun"
      ],
      [
        "相談",
        "そうだん",
        "soudan",
        "trao đổi, thảo luận",
        "consultation",
        "noun"
      ],
      [
        "遠慮",
        "えんりょ",
        "enryo",
        "ngại ngùng, khách khí",
        "reserve, hesitation",
        "noun"
      ]
    ]
  },
  {
    "level": "N3",
    "number": 2,
    "title": "Bài 2: Công việc & Giao tiếp công sở",
    "description": "Trau dồi từ vựng và cấu trúc diễn đạt trách nhiệm, vai trò, tác động trong môi trường làm việc.",
    "vocabulary": [
      [
        "影響",
        "えいきょう",
        "eikyou",
        "ảnh hưởng, tác động",
        "influence, impact",
        "noun"
      ],
      [
        "役割",
        "やくわり",
        "yakuwari",
        "vai trò, phận sự",
        "role, part",
        "noun"
      ],
      [
        "業務",
        "ぎょうむ",
        "gyoumu",
        "nghiệp vụ, công việc",
        "business, operations",
        "noun"
      ],
      [
        "担当",
        "たんとう",
        "tantou",
        "phụ trách, đảm nhiệm",
        "charge, responsibility",
        "noun"
      ],
      [
        "締め切り",
        "しめきり",
        "shimekiri",
        "hạn chót, thời hạn",
        "deadline",
        "noun"
      ],
      [
        "依頼",
        "いらい",
        "irai",
        "nhờ vả, yêu cầu",
        "request",
        "noun"
      ],
      [
        "提出",
        "ていしゅつ",
        "teishutsu",
        "nộp bài, đệ trình",
        "submission",
        "noun"
      ],
      [
        "報告",
        "ほうこく",
        "houkoku",
        "báo cáo",
        "report",
        "noun"
      ],
      [
        "指示",
        "しじ",
        "shiji",
        "chỉ thị, hướng dẫn",
        "instructions",
        "noun"
      ],
      [
        "確認",
        "かくにん",
        "kakunin",
        "xác nhận, kiểm tra lại",
        "confirmation",
        "noun"
      ],
      [
        "調整",
        "ちょうせい",
        "chousei",
        "điều chỉnh, dàn xếp",
        "adjustment, coordination",
        "noun"
      ],
      [
        "成果",
        "せいか",
        "seika",
        "thành quả, kết quả đạt được",
        "result, fruit",
        "noun"
      ]
    ]
  },
  {
    "level": "N3",
    "number": 3,
    "title": "Bài 3: Khoa học, Kỹ thuật & Đổi mới đời sống",
    "description": "Học các thuật ngữ về công nghệ, phát minh và quá trình cải tiến kỹ thuật hiện đại.",
    "vocabulary": [
      [
        "技術",
        "ぎじゅつ",
        "gijutsu",
        "kỹ thuật, công nghệ",
        "technology, skill",
        "noun"
      ],
      [
        "開発",
        "かいはつ",
        "kaihatsu",
        "phát triển (sản phẩm, phần mềm)",
        "development",
        "noun"
      ],
      [
        "発明",
        "はつめい",
        "hatsumei",
        "phát minh, sáng chế",
        "invention",
        "noun"
      ],
      [
        "機能",
        "きのう",
        "kinou",
        "tính năng, chức năng",
        "function, feature",
        "noun"
      ],
      [
        "利用",
        "りよう",
        "riyou",
        "sử dụng, tận dụng",
        "use, utilization",
        "noun"
      ],
      [
        "変化",
        "へんか",
        "henka",
        "sự thay đổi, biến đổi",
        "change, alteration",
        "noun"
      ],
      [
        "改善",
        "かいぜん",
        "kaizen",
        "cải tiến, nâng cao chất lượng",
        "improvement",
        "noun"
      ],
      [
        "故障",
        "こしょう",
        "koshou",
        "sự cố, hỏng hóc máy móc",
        "breakdown, malfunction",
        "noun"
      ],
      [
        "操作",
        "そうさ",
        "sousa",
        "thao tác, vận hành",
        "operation, handling",
        "noun"
      ],
      [
        "普及",
        "ふきゅう",
        "fukyuu",
        "phổ biến, lan rộng",
        "spread, popularization",
        "noun"
      ],
      [
        "発展",
        "はってん",
        "hatten",
        "phát triển, mở rộng",
        "expansion, growth",
        "noun"
      ],
      [
        "実験",
        "じっけん",
        "jikken",
        "thực nghiệm, thí nghiệm",
        "experiment",
        "noun"
      ]
    ]
  },
  {
    "level": "N3",
    "number": 4,
    "title": "Bài 4: Xã hội, Môi trường & Đời sống",
    "description": "Nói về các vấn đề xã hội, bảo vệ môi trường, xu hướng và sự tích cực cống hiến.",
    "vocabulary": [
      [
        "活躍",
        "かつやく",
        "katsuyaku",
        "hoạt động tích cực, thành công vang dội",
        "great activity, flourishing",
        "noun"
      ],
      [
        "調査",
        "ちょうさ",
        "chousa",
        "điều tra, khảo sát ý kiến",
        "survey, investigation",
        "noun"
      ],
      [
        "増加",
        "ぞうか",
        "zouka",
        "sự gia tăng, tăng trưởng",
        "increase, rise",
        "noun"
      ],
      [
        "減少",
        "げんしょう",
        "genshou",
        "sự suy giảm, sụt giảm",
        "decrease, drop",
        "noun"
      ],
      [
        "傾向",
        "けいこう",
        "keikou",
        "khuynh hướng, xu hướng",
        "trend, tendency",
        "noun"
      ],
      [
        "環境",
        "かんきょう",
        "kankyou",
        "môi trường xung quanh",
        "environment",
        "noun"
      ],
      [
        "資源",
        "しげん",
        "shigen",
        "tài nguyên thiên nhiên",
        "resources",
        "noun"
      ],
      [
        "対策",
        "たいさく",
        "taisaku",
        "biện pháp, đối sách xử lý",
        "countermeasure, policy",
        "noun"
      ],
      [
        "協力",
        "きょうりょく",
        "kyouryoku",
        "hợp tác, chung sức",
        "cooperation",
        "noun"
      ],
      [
        "努力",
        "どりょく",
        "doryoku",
        "nỗ lực, cố gắng hết mình",
        "effort, endeavor",
        "noun"
      ],
      [
        "参加",
        "さんか",
        "sanka",
        "tham gia vào sự kiện",
        "participation",
        "noun"
      ],
      [
        "解決",
        "かいけつ",
        "kaiketsu",
        "giải quyết vấn đề",
        "solution, settlement",
        "noun"
      ]
    ]
  },
  {
    "level": "N3",
    "number": 5,
    "title": "Bài 5: Cảm xúc, Đánh giá & Mức độ",
    "description": "Cách biểu đạt cảm xúc sâu sắc, nhận định về phẩm chất và dùng tiếp vĩ ngữ chỉ mức độ.",
    "vocabulary": [
      [
        "さ",
        "さ",
        "sa",
        "độ, mức độ (tiếp vĩ ngữ danh từ hóa: 重さ, 高さ)",
        "degree, suffix -ness",
        "suffix"
      ],
      [
        "興味",
        "きょうみ",
        "kyoumi",
        "hứng thú, sự quan tâm",
        "interest",
        "noun"
      ],
      [
        "満足",
        "まんぞく",
        "manzoku",
        "hài lòng, thỏa mãn",
        "satisfaction, contentment",
        "noun"
      ],
      [
        "不安",
        "ふあん",
        "fuan",
        "bất an, lo âu",
        "anxiety, worry",
        "na-adjective"
      ],
      [
        "感動",
        "かんどう",
        "kandou",
        "cảm động, xúc động mạnh",
        "deep emotion, moving",
        "noun"
      ],
      [
        "判断",
        "はんだん",
        "handan",
        "phán đoán, nhận định",
        "judgment, decision",
        "noun"
      ],
      [
        "態度",
        "たいど",
        "taido",
        "thái độ cư xử",
        "attitude, stance",
        "noun"
      ],
      [
        "印象",
        "いんしょう",
        "inshou",
        "ấn tượng",
        "impression",
        "noun"
      ],
      [
        "魅力",
        "みりょく",
        "miryoku",
        "sức hút, vẻ quyến rũ",
        "charm, attraction",
        "noun"
      ],
      [
        "苦労",
        "くろう",
        "kurou",
        "gian nan, vất vả nhọc công",
        "hardship, toil",
        "noun"
      ],
      [
        "成長",
        "せいちょう",
        "seichou",
        "trưởng thành, phát triển bản thân",
        "growth, maturation",
        "noun"
      ],
      [
        "違い",
        "ちがい",
        "chigai",
        "sự khác biệt, điểm sai lệch",
        "difference, disparity",
        "noun"
      ]
    ]
  },
  {
    "level": "N2",
    "number": 1,
    "title": "Bài 1: Lập luận, Từ nối trang trọng & Báo cáo",
    "description": "Rèn luyện khả năng dùng từ liên kết logic và phân tích sự việc trong văn phong công sở chuyên nghiệp.",
    "vocabulary": [
      [
        "従って",
        "したがって",
        "shitagatte",
        "do đó, vì vậy theo lẽ tự nhiên",
        "therefore, consequently",
        "conjunction"
      ],
      [
        "一方",
        "いっぽう",
        "ippou",
        "mặt khác, ngược lại",
        "on the other hand",
        "noun"
      ],
      [
        "結果",
        "けっか",
        "kekka",
        "kết quả cuối cùng",
        "result, outcome",
        "noun"
      ],
      [
        "事実",
        "じじつ",
        "jijitsu",
        "sự thật, thực tế khách quan",
        "fact, reality",
        "noun"
      ],
      [
        "検討",
        "けんとう",
        "kentou",
        "cân nhắc, xem xét kỹ lưỡng",
        "consideration, examination",
        "noun"
      ],
      [
        "状況",
        "じょうきょう",
        "joukyou",
        "tình hình, bối cảnh",
        "situation, circumstances",
        "noun"
      ],
      [
        "分析",
        "ぶんせき",
        "bunseki",
        "phân tích dữ liệu",
        "analysis",
        "noun"
      ],
      [
        "課題",
        "かだい",
        "kadai",
        "vấn đề, thách thức cần giải quyết",
        "challenge, topic",
        "noun"
      ],
      [
        "根拠",
        "こんきょ",
        "konkyo",
        "căn cứ, cơ sở lập luận",
        "basis, ground",
        "noun"
      ],
      [
        "観点",
        "かんてん",
        "kanten",
        "quan điểm, góc nhìn",
        "viewpoint, angle",
        "noun"
      ],
      [
        "結論",
        "けつろん",
        "ketsuron",
        "kết luận",
        "conclusion",
        "noun"
      ],
      [
        "背景",
        "はいけい",
        "haikei",
        "bối cảnh đằng sau",
        "background, context",
        "noun"
      ]
    ]
  },
  {
    "level": "N2",
    "number": 2,
    "title": "Bài 2: Kinh tế, Thương mại & Thị trường",
    "description": "Từ vựng chuyên sâu về thị trường, tài chính kinh doanh và quan hệ hợp tác doanh nghiệp.",
    "vocabulary": [
      [
        "景気",
        "けいき",
        "keiki",
        "tình hình kinh tế, thịnh vượng",
        "business climate, economy",
        "noun"
      ],
      [
        "市場",
        "しじょう",
        "shijou",
        "thị trường giao thương",
        "market",
        "noun"
      ],
      [
        "利益",
        "りえき",
        "rieki",
        "lợi nhuận, lợi ích kinh tế",
        "profit, gain",
        "noun"
      ],
      [
        "需要",
        "じゅよう",
        "juyou",
        "nhu cầu tiêu thụ",
        "demand",
        "noun"
      ],
      [
        "供給",
        "きょうきゅう",
        "kyoukyuu",
        "nguồn cung ứng",
        "supply, provision",
        "noun"
      ],
      [
        "投資",
        "とうし",
        "toushi",
        "đầu tư vốn",
        "investment",
        "noun"
      ],
      [
        "企業",
        "きぎょう",
        "kigyou",
        "doanh nghiệp, công ty lớn",
        "enterprise, company",
        "noun"
      ],
      [
        "競争",
        "きょうそう",
        "kyousou",
        "cạnh tranh trên thương trường",
        "competition",
        "noun"
      ],
      [
        "業績",
        "ぎょうせき",
        "gyouseki",
        "kết quả kinh doanh, thành tích",
        "business performance, results",
        "noun"
      ],
      [
        "契約",
        "けいやく",
        "keiyaku",
        "hợp đồng cam kết",
        "contract, agreement",
        "noun"
      ],
      [
        "経営",
        "けいえい",
        "keiei",
        "quản trị, vận hành doanh nghiệp",
        "management, administration",
        "noun"
      ],
      [
        "採用",
        "さいよう",
        "saiyou",
        "tuyển dụng nhân sự, áp dụng",
        "recruitment, adoption",
        "noun"
      ]
    ]
  },
  {
    "level": "N2",
    "number": 3,
    "title": "Bài 3: Trí tuệ nhân tạo & Kỷ nguyên số",
    "description": "Nắm bắt các thuật ngữ công nghệ hiện đại, tự động hóa và an ninh mạng.",
    "vocabulary": [
      [
        "人工知能",
        "じんこうちのう",
        "jinkouchinou",
        "trí tuệ nhân tạo (AI)",
        "artificial intelligence",
        "noun"
      ],
      [
        "情報",
        "じょうほう",
        "jouhou",
        "thông tin, dữ liệu truyền tải",
        "information, data",
        "noun"
      ],
      [
        "通信",
        "つうしん",
        "tsuushin",
        "viễn thông, liên lạc số",
        "telecommunications",
        "noun"
      ],
      [
        "効率",
        "こうりつ",
        "kouritsu",
        "hiệu suất, năng suất làm việc",
        "efficiency",
        "noun"
      ],
      [
        "自動化",
        "じどうか",
        "jidouka",
        "tự động hóa quy trình",
        "automation",
        "noun"
      ],
      [
        "導入",
        "どうにゅう",
        "dounyuu",
        "áp dụng, đưa công nghệ mới vào",
        "introduction, installation",
        "noun"
      ],
      [
        "活用",
        "かつよう",
        "katsuyou",
        "vận dụng hiệu quả, phát huy",
        "practical application, utilization",
        "noun"
      ],
      [
        "推進",
        "すいしん",
        "suishin",
        "thúc đẩy, đẩy mạnh tiến độ",
        "promotion, acceleration",
        "noun"
      ],
      [
        "革新",
        "かくしん",
        "kakushin",
        "đổi mới sáng tạo, cách tân",
        "innovation, reform",
        "noun"
      ],
      [
        "端末",
        "たんまつ",
        "tanmatsu",
        "thiết bị đầu cuối (máy tính, điện thoại)",
        "device, terminal",
        "noun"
      ],
      [
        "処理",
        "しょり",
        "shori",
        "xử lý dữ liệu/sự việc",
        "processing, treatment",
        "noun"
      ],
      [
        "蓄積",
        "ちくせき",
        "chikuseki",
        "tích lũy dữ liệu/kiến thức",
        "accumulation",
        "noun"
      ]
    ]
  },
  {
    "level": "N2",
    "number": 4,
    "title": "Bài 4: Quan hệ xã hội & Ứng xử chuyên nghiệp",
    "description": "Cách cư xử khéo léo, tinh tế và duy trì mối quan hệ tin cậy trong môi trường doanh nghiệp Nhật.",
    "vocabulary": [
      [
        "配慮",
        "はいりょ",
        "hairyo",
        "chu đáo, quan tâm đến người khác",
        "consideration, thoughtfulness",
        "noun"
      ],
      [
        "尊重",
        "そんちょう",
        "sonchou",
        "tôn trọng quan điểm, ý kiến",
        "respect, esteem",
        "noun"
      ],
      [
        "妥協",
        "だきょう",
        "dakyou",
        "thỏa hiệp, nhượng bộ đôi bên",
        "compromise",
        "noun"
      ],
      [
        "信頼",
        "しんらい",
        "shinrai",
        "tin cậy, đặt niềm tin",
        "trust, reliance",
        "noun"
      ],
      [
        "連携",
        "れんけい",
        "renkei",
        "phối hợp chặt chẽ giữa các bộ phận",
        "cooperation, coordination",
        "noun"
      ],
      [
        "責任",
        "せきにん",
        "sekinin",
        "trách nhiệm",
        "responsibility, liability",
        "noun"
      ],
      [
        "義務",
        "ぎむ",
        "gimu",
        "nghĩa vụ, bổn phận",
        "obligation, duty",
        "noun"
      ],
      [
        "誠意",
        "せいい",
        "seii",
        "thành ý, sự chân thành",
        "sincerity, good faith",
        "noun"
      ],
      [
        "礼儀",
        "れいぎ",
        "reigi",
        "lễ nghi, phép lịch sự",
        "etiquette, manners",
        "noun"
      ],
      [
        "対応",
        "たいおう",
        "taiou",
        "ứng phó, giải quyết tình huống",
        "response, dealing with",
        "noun"
      ],
      [
        "配属",
        "はいぞく",
        "haizoku",
        "phân bổ nhân sự về phòng ban",
        "assignment, deployment",
        "noun"
      ],
      [
        "円滑",
        "えんかつ",
        "enkatsu",
        "trôi chảy, suôn sẻ, êm đẹp",
        "smooth, harmonious",
        "na-adjective"
      ]
    ]
  },
  {
    "level": "N2",
    "number": 5,
    "title": "Bài 5: Hiện tượng tự nhiên & Khủng hoảng",
    "description": "Từ vựng thời tiết cực đoan, phòng chống thiên tai và khôi phục sau sự cố.",
    "vocabulary": [
      [
        "異常",
        "いじょう",
        "ijou",
        "bất thường, dị thường",
        "abnormal, unusual",
        "na-adjective"
      ],
      [
        "気象",
        "きしょう",
        "kishou",
        "khí tượng, thời tiết",
        "weather, meteorology",
        "noun"
      ],
      [
        "災害",
        "さいがい",
        "saigai",
        "thảm họa thiên tai",
        "disaster, calamity",
        "noun"
      ],
      [
        "警戒",
        "けいかい",
        "keikai",
        "cảnh giác, đề phòng",
        "vigilance, precaution",
        "noun"
      ],
      [
        "避難",
        "ひなん",
        "hinan",
        "lánh nạn, sơ tán khẩn cấp",
        "evacuation, refuge",
        "noun"
      ],
      [
        "復旧",
        "ふっきゅう",
        "fukkyuu",
        "khôi phục, phục hồi hiện trạng",
        "restoration, recovery",
        "noun"
      ],
      [
        "防止",
        "ぼうし",
        "boushi",
        "phòng chống, ngăn chặn trước",
        "prevention",
        "noun"
      ],
      [
        "被害",
        "ひがい",
        "higai",
        "thiệt hại tổn thất",
        "damage, harm",
        "noun"
      ],
      [
        "克服",
        "こくふく",
        "kokufuku",
        "khắc phục khó khăn",
        "overcoming, surmounting",
        "noun"
      ],
      [
        "警報",
        "けいほう",
        "keihou",
        "cảnh báo thiên tai khẩn cấp",
        "warning, alarm",
        "noun"
      ],
      [
        "予測",
        "よそく",
        "yosoku",
        "dự báo, dự đoán xu thế",
        "prediction, forecast",
        "noun"
      ],
      [
        "規模",
        "きぼ",
        "kibo",
        "quy mô, kích cỡ diện tích",
        "scale, scope",
        "noun"
      ]
    ]
  },
  {
    "level": "N1",
    "number": 1,
    "title": "Bài 1: Lập luận học thuật & Phản biện",
    "description": "Xây dựng chuỗi lập luận chặt chẽ, tư duy phân tích đa chiều và nhận diện ngụy biện.",
    "vocabulary": [
      [
        "論理",
        "ろんり",
        "ronri",
        "logic, lý luận chặt chẽ",
        "logic, reasoning",
        "noun"
      ],
      [
        "視点",
        "してん",
        "shiten",
        "góc nhìn, quan điểm học thuật",
        "viewpoint, perspective",
        "noun"
      ],
      [
        "指摘",
        "してき",
        "shiteki",
        "chỉ ra, lưu ý điểm mấu chốt",
        "pointing out, identification",
        "noun"
      ],
      [
        "提言",
        "ていげん",
        "teigen",
        "đề xuất chính sách, khuyến nghị",
        "proposal, suggestion",
        "noun"
      ],
      [
        "根拠",
        "こんきょ",
        "konkyo",
        "căn cứ, cơ sở minh chứng",
        "basis, evidence",
        "noun"
      ],
      [
        "概念",
        "がいねん",
        "gainen",
        "khái niệm trừu tượng",
        "concept, notion",
        "noun"
      ],
      [
        "妥当",
        "だとう",
        "datou",
        "hợp lý, thỏa đáng",
        "appropriate, valid",
        "na-adjective"
      ],
      [
        "偏見",
        "へんけん",
        "henken",
        "định kiến, thiên kiến",
        "prejudice, bias",
        "noun"
      ],
      [
        "矛盾",
        "むじゅん",
        "mujun",
        "mâu thuẫn trái ngược",
        "contradiction, inconsistency",
        "noun"
      ],
      [
        "考察",
        "こうさつ",
        "kousatsu",
        "khảo sát nghiên cứu kỹ lưỡng",
        "inquiry, consideration",
        "noun"
      ],
      [
        "緻密",
        "ちみつ",
        "chimitsu",
        "tỉ mỉ, chuẩn xác, tinh tế",
        "minute, detailed, precise",
        "na-adjective"
      ],
      [
        "弁証法",
        "べんしょうほう",
        "benshouhou",
        "phương pháp biện chứng",
        "dialectic",
        "noun"
      ]
    ]
  },
  {
    "level": "N1",
    "number": 2,
    "title": "Bài 2: Triết học, Đạo đức & Bản chất nhân sinh",
    "description": "Khám phá thế giới nội tâm, bản chất con người và những trăn trở đạo đức sâu sắc.",
    "vocabulary": [
      [
        "本質",
        "ほんしつ",
        "honshitsu",
        "bản chất cốt lõi",
        "essence, true nature",
        "noun"
      ],
      [
        "倫理",
        "りんり",
        "rinri",
        "đạo đức, luân thường đạo lý",
        "ethics, morals",
        "noun"
      ],
      [
        "普遍",
        "ふへん",
        "fuhen",
        "phổ biến khắp nơi, vĩnh cửu",
        "universality, omnipresence",
        "noun"
      ],
      [
        "葛藤",
        "かっとう",
        "kattou",
        "giằng xé nội tâm, xung đột ý chí",
        "conflict, entanglement",
        "noun"
      ],
      [
        "宿命",
        "しゅくめい",
        "shukumei",
        "số mệnh, định mệnh",
        "fate, destiny",
        "noun"
      ],
      [
        "理念",
        "りねん",
        "rinen",
        "triết lý sống, lý tưởng nền tảng",
        "philosophy, ideal",
        "noun"
      ],
      [
        "意義",
        "いぎ",
        "igi",
        "ý nghĩa sâu xa, giá trị tinh thần",
        "significance, meaning",
        "noun"
      ],
      [
        "洞察",
        "どうさつ",
        "dousatsu",
        "thấu thị, nhìn thấu sự tình",
        "insight, discernment",
        "noun"
      ],
      [
        "模索",
        "もさく",
        "mosaku",
        "tìm tòi, mò mẫm phương hướng",
        "groping, seeking",
        "noun"
      ],
      [
        "究極",
        "きゅうきょく",
        "kyuukyoku",
        "tột cùng, cảnh giới cao nhất",
        "ultimate, extreme",
        "noun"
      ],
      [
        "摂理",
        "せつり",
        "setsuri",
        "quy luật tự nhiên, sự an bài",
        "providence, natural order",
        "noun"
      ],
      [
        "崇高",
        "すうこう",
        "suukou",
        "cao cả, thanh cao vĩ đại",
        "sublime, lofty",
        "na-adjective"
      ]
    ]
  },
  {
    "level": "N1",
    "number": 3,
    "title": "Bài 3: Chiến lược vĩ mô & Quản trị quốc tế",
    "description": "Phân tích các cơ chế thể chế, điều ước quốc tế và giải quyết xung đột toàn cầu.",
    "vocabulary": [
      [
        "施策",
        "しさく",
        "shisaku",
        "chính sách hành động cụ thể",
        "policy measure",
        "noun"
      ],
      [
        "規範",
        "きはん",
        "kihan",
        "quy phạm, chuẩn mực ứng xử",
        "norm, standard",
        "noun"
      ],
      [
        "統括",
        "とうかつ",
        "toukatsu",
        "thống nhất chỉ đạo, bao quát chung",
        "unification, overseeing",
        "noun"
      ],
      [
        "批准",
        "ひじゅん",
        "hijun",
        "phê chuẩn hiệp ước quốc tế",
        "ratification",
        "noun"
      ],
      [
        "枠組み",
        "わくぐみ",
        "wakugumi",
        "khung thể chế, khuôn khổ",
        "framework",
        "noun"
      ],
      [
        "紛争",
        "ふんそう",
        "funsou",
        "tranh chấp xung đột",
        "dispute, conflict",
        "noun"
      ],
      [
        "調停",
        "ちょうてい",
        "choutei",
        "hòa giải trung gian",
        "mediation, arbitration",
        "noun"
      ],
      [
        "均衡",
        "きんこう",
        "kinkou",
        "trạng thái cân bằng quyền lực",
        "equilibrium, balance",
        "noun"
      ],
      [
        "抑止",
        "よくし",
        "yokushi",
        "ngăn chặn răn đe",
        "deterrence, restraint",
        "noun"
      ],
      [
        "裁量",
        "さいりょう",
        "sairyou",
        "quyền tự quyết, sự tùy cơ",
        "discretion",
        "noun"
      ],
      [
        "覇権",
        "はけん",
        "haken",
        "quyền bá chủ, ảnh hưởng áp đảo",
        "hegemony, supremacy",
        "noun"
      ],
      [
        "合意",
        "ごうい",
        "goui",
        "đồng thuận, nhất trí văn kiện",
        "agreement, consensus",
        "noun"
      ]
    ]
  },
  {
    "level": "N1",
    "number": 4,
    "title": "Bài 4: Mỹ học, Nghệ thuật & Di sản văn hóa",
    "description": "Cảm thụ nét đẹp truyền thống Nhật Bản từ tính tinh giản tới vẻ đẹp u huyền thâm thúy.",
    "vocabulary": [
      [
        "洗練",
        "せんれん",
        "senren",
        "tinh tế, trau chuốt hoàn mỹ",
        "refinement, polish",
        "noun"
      ],
      [
        "幽玄",
        "ゆうげん",
        "yuugen",
        "u huyền, vẻ đẹp bí ẩn sâu thẳm",
        "subtle grace, mysterious beauty",
        "noun"
      ],
      [
        "象徴",
        "しょうちょう",
        "shouchou",
        "biểu tượng, hình tượng nghệ thuật",
        "symbol, emblem",
        "noun"
      ],
      [
        "継承",
        "けいしょう",
        "keishou",
        "kế thừa tinh hoa di sản",
        "inheritance, succession",
        "noun"
      ],
      [
        "昇華",
        "しょうか",
        "shouka",
        "thăng hoa lên tầm cao mới",
        "sublimation",
        "noun"
      ],
      [
        "趣",
        "おもむき",
        "omomuki",
        "phong vị, nét tao nhã thanh nhã",
        "flavor, charm, aura",
        "noun"
      ],
      [
        "技巧",
        "ぎこう",
        "gikou",
        "kỹ xảo điêu luyện nghệ nhân",
        "technique, artifice",
        "noun"
      ],
      [
        "意匠",
        "いしょう",
        "ishou",
        "ý niệm thiết kế, mẫu hoa văn",
        "design, motif",
        "noun"
      ],
      [
        "響き",
        "ひびき",
        "hibiki",
        "âm hưởng ngân vang lay động",
        "echo, resonance, reverberation",
        "noun"
      ],
      [
        "余韻",
        "よいん",
        "yoin",
        "dư âm, dư ba sâu lắng",
        "aftertaste, lingering memory",
        "noun"
      ],
      [
        "風情",
        "ふぜい",
        "fuzei",
        "phong cảnh hữu tình, thi vị",
        "taste, elegance, aesthetic atmosphere",
        "noun"
      ],
      [
        "侘び寂び",
        "わびさび",
        "wabisabi",
        "vẻ đẹp mộc mạc từ sự không hoàn hảo",
        "wabi-sabi, Japanese rustic simplicity",
        "noun"
      ]
    ]
  },
  {
    "level": "N1",
    "number": 5,
    "title": "Bài 5: Đột phá khoa học & Tương lai nhân loại",
    "description": "Tầm nhìn về tiến trình văn minh, tiềm năng trí tuệ và mở ra chân trời mới.",
    "vocabulary": [
      [
        "躍進",
        "やくしん",
        "yakushin",
        "bước tiến thần tốc, bứt phá mạnh",
        "rapid progress, giant leap",
        "noun"
      ],
      [
        "飛躍",
        "ひやく",
        "hiyaku",
        "bước nhảy vọt lịch sử",
        "leap, dramatic advance",
        "noun"
      ],
      [
        "展望",
        "てんぼう",
        "tenbou",
        "triển vọng tương lai, tầm nhìn",
        "outlook, prospect",
        "noun"
      ],
      [
        "潜在",
        "せんざい",
        "senzai",
        "tiềm tàng, ẩn chứa bên trong",
        "latent, potential",
        "noun"
      ],
      [
        "領域",
        "りょういき",
        "ryouiki",
        "lĩnh vực chuyên sâu, cương vực",
        "domain, sphere",
        "noun"
      ],
      [
        "変革",
        "へんかく",
        "henkaku",
        "cải cách triệt để, đổi thay to lớn",
        "transformation, revolution",
        "noun"
      ],
      [
        "契機",
        "けいき",
        "keiki",
        "cơ hội bước ngoặt, thời cơ",
        "opportunity, momentum",
        "noun"
      ],
      [
        "叡智",
        "えいち",
        "eichi",
        "trí tuệ uyên bác của nhân loại",
        "wisdom, sagacity",
        "noun"
      ],
      [
        "繁栄",
        "はんえい",
        "hanei",
        "phồn vinh, hưng thịnh lâu dài",
        "prosperity",
        "noun"
      ],
      [
        "胎動",
        "たいどう",
        "taidou",
        "sự manh nha khởi phát, nhen nhóm",
        "stirring, incipient sign",
        "noun"
      ],
      [
        "開拓",
        "かいたく",
        "kaitaku",
        "khai phá, tiên phong mở lối",
        "pioneering, reclamation",
        "noun"
      ],
      [
        "英断",
        "えいだん",
        "eidan",
        "quyết định sáng suốt, quyết đoán",
        "decisive resolution",
        "noun"
      ]
    ]
  }
];

const SEED_GRAMMAR = [
  {
    "title": "Khẳng định danh từ",
    "pattern": "〜は〜です",
    "meaningVi": "A là B",
    "explanation": "Trợ từ は đánh dấu chủ ngữ hoặc chủ đề. です biểu thị sự khẳng định lịch sự.",
    "formation": "Danh từ 1 + は + Danh từ 2 + です",
    "usageNote": "Dùng để giới thiệu tên, nghề nghiệp, quốc tịch.",
    "jlptLevel": "N5",
    "examples": [
      {
        "jp": "わたしは がくせいです。",
        "kana": "わたしは がくせいです。",
        "vi": "Tôi là học sinh."
      },
      {
        "jp": "たなかさんは せんせいです。",
        "kana": "たなかさんは せんせいです。",
        "vi": "Anh Tanaka là giáo viên."
      }
    ]
  },
  {
    "title": "Phủ định danh từ",
    "pattern": "〜は〜じゃありません",
    "meaningVi": "A không phải là B",
    "explanation": "じゃありません là dạng phủ định lịch sự của です trong hội thoại hàng ngày.",
    "formation": "Danh từ 1 + は + Danh từ 2 + じゃありません",
    "usageNote": "Dùng khi muốn bác bỏ thông tin về một đối tượng.",
    "jlptLevel": "N5",
    "examples": [
      {
        "jp": "わたしは いしゃじゃありません。",
        "kana": "わたしは いしゃじゃありません。",
        "vi": "Tôi không phải là bác sĩ."
      },
      {
        "jp": "サントスさんは がくせいじゃありません。",
        "kana": "サントスさんは がくせいじゃありません。",
        "vi": "Anh Santos không phải là sinh viên."
      }
    ]
  },
  {
    "title": "Câu hỏi xác nhận",
    "pattern": "〜は〜ですか",
    "meaningVi": "A có phải là B không?",
    "explanation": "Thêm trợ từ か vào cuối câu khẳng định để biến thành câu hỏi nghi vấn.",
    "formation": "Câu khẳng định + か",
    "usageNote": "Trả lời: はい、〜です hoặc いいえ、〜じゃありません.",
    "jlptLevel": "N5",
    "examples": [
      {
        "jp": "あなたは かいしゃいんですか。",
        "kana": "あなたは かいしゃいんですか。",
        "vi": "Bạn có phải là nhân viên công ty không?"
      },
      {
        "jp": "あのかたは どなたですか。",
        "kana": "あのかたは どなたですか。",
        "vi": "Vị kia là ai vậy?"
      }
    ]
  },
  {
    "title": "Đại từ chỉ định đồ vật",
    "pattern": "これ / それ / あれ は〜です",
    "meaningVi": "Cái này / cái đó / cái kia là...",
    "explanation": "これ (gần người nói), それ (gần người nghe), あれ (xa cả hai người).",
    "formation": "これ / それ / あれ + は + Danh từ + です",
    "usageNote": "Dùng để gọi tên đồ vật.",
    "jlptLevel": "N5",
    "examples": [
      {
        "jp": "これは わたしのはんです。",
        "kana": "これは わたしのほんです。",
        "vi": "Đây là sách của tôi."
      },
      {
        "jp": "それは なんの ざっしですか。",
        "kana": "それは なんの ざっしですか。",
        "vi": "Đó là tạp chí về cái gì?"
      }
    ]
  },
  {
    "title": "Chỉ định từ bổ nghĩa danh từ",
    "pattern": "この / その / あの ＋ Danh từ",
    "meaningVi": "Cái [Danh từ] này / đó / kia",
    "explanation": "Khác với これ/それ/あれ (đứng một mình), この/その/あの luôn phải đi kèm trực tiếp với một danh từ.",
    "formation": "この / その / あの + Danh từ + は 〜 です",
    "usageNote": "Chỉ đích danh một đối tượng cụ thể.",
    "jlptLevel": "N5",
    "examples": [
      {
        "jp": "このかさは あなたのですか。",
        "kana": "このかさは あなたのですか。",
        "vi": "Cây dù này có phải của bạn không?"
      },
      {
        "jp": "あのひとは だれですか。",
        "kana": "あのひとは だれですか。",
        "vi": "Người kia là ai thế?"
      }
    ]
  },
  {
    "title": "Đại từ chỉ nơi chốn",
    "pattern": "ここ / そこ / あそこ は〜です",
    "meaningVi": "Chỗ này / chỗ đó / chỗ kia là...",
    "explanation": "Dùng để chỉ vị trí, phòng ban hoặc địa điểm.",
    "formation": "ここ / そこ / あそこ + は + Địa điểm + です",
    "usageNote": "Hỏi địa điểm dùng: 〜は どこですか。",
    "jlptLevel": "N5",
    "examples": [
      {
        "jp": "きょうしつは ここです。",
        "kana": "きょうしつは ここです。",
        "vi": "Phòng học ở đây."
      },
      {
        "jp": "おてあらいは どこですか。",
        "kana": "おてあらいは どこですか。",
        "vi": "Nhà vệ sinh ở đâu vậy?"
      }
    ]
  },
  {
    "title": "Thời gian & Mốc giờ",
    "pattern": "〜時〜分です",
    "meaningVi": "Bây giờ là... giờ... phút",
    "explanation": "Dùng để diễn tả thời điểm hiện tại hoặc mốc giờ diễn ra sự việc.",
    "formation": "Số đếm + じ + Số đếm + ふん/ぷん + です",
    "usageNote": "Rưỡi (30 phút) dùng はん (ví dụ: いちじはん - 1 giờ rưỡi).",
    "jlptLevel": "N5",
    "examples": [
      {
        "jp": "いま なんじですか。",
        "kana": "いま なんじですか。",
        "vi": "Bây giờ là mấy giờ?"
      },
      {
        "jp": "ごご しちじはん です。",
        "kana": "ごご しちじはん です。",
        "vi": "Là 7 giờ rưỡi tối."
      }
    ]
  },
  {
    "title": "Thời gian bắt đầu và kết thúc",
    "pattern": "〜から〜まで",
    "meaningVi": "Từ... đến...",
    "explanation": "から biểu thị điểm bắt đầu (thời gian hoặc địa điểm), まで biểu thị điểm kết thúc.",
    "formation": "Thời gian/Địa điểm 1 + から + Thời gian/Địa điểm 2 + まで",
    "usageNote": "Có thể dùng riêng lẻ 〜から hoặc 〜まで.",
    "jlptLevel": "N5",
    "examples": [
      {
        "jp": "ぎんこうは ９じから ３じまでです。",
        "kana": "ぎんこうは くじから さんじまでです。",
        "vi": "Ngân hàng mở từ 9 giờ đến 3 giờ."
      },
      {
        "jp": "まいあさ ７じに おきます。",
        "kana": "まいあさ しちじに おきます。",
        "vi": "Mỗi sáng tôi thức dậy lúc 7 giờ."
      }
    ]
  },
  {
    "title": "Phương hướng di chuyển",
    "pattern": "〜へ 行きます / 来ます / 帰ります",
    "meaningVi": "Đi / Đến / Về [địa điểm]",
    "explanation": "Trợ từ へ chỉ hướng di chuyển đến địa điểm.",
    "formation": "Địa điểm + へ + いきます / きます / かえります",
    "usageNote": "Phủ định hoàn toàn: どこ[へ]も いきません (Không đi đâu cả).",
    "jlptLevel": "N5",
    "examples": [
      {
        "jp": "わたしは がっこうへ いきます。",
        "kana": "わたしは がっこうへ いきます。",
        "vi": "Tôi đi đến trường học."
      },
      {
        "jp": "らいしゅう にほんへ いきます。",
        "kana": "らいしゅう にほんへ いきます。",
        "vi": "Tuần sau tôi sẽ đi Nhật Bản."
      }
    ]
  },
  {
    "title": "Phương tiện di chuyển",
    "pattern": "〜で 行きます",
    "meaningVi": "Đi bằng [phương tiện]",
    "explanation": "Trợ từ で chỉ phương tiện, cách thức di chuyển.",
    "formation": "Phương tiện giao thông + で + いきます",
    "usageNote": "Đi bộ dùng あるいて (không thêm で).",
    "jlptLevel": "N5",
    "examples": [
      {
        "jp": "でんしゃで えきへ いきます。",
        "kana": "でんしゃで えきへ いきます。",
        "vi": "Tôi đi đến nhà ga bằng tàu điện."
      },
      {
        "jp": "うちから えきまで あるいて いきます。",
        "kana": "うちから えきまで あるいて いきます。",
        "vi": "Từ nhà đến ga tôi đi bộ."
      }
    ]
  },
  {
    "title": "Yêu cầu lịch sự",
    "pattern": "〜てください",
    "meaningVi": "Xin hãy / Hãy làm...",
    "explanation": "Dùng thể Te kết hợp ください để đưa ra lời yêu cầu, hướng dẫn một cách lịch sự.",
    "formation": "V-て + ください",
    "usageNote": "Không dùng với người bề trên khi giao việc bắt buộc.",
    "jlptLevel": "N4",
    "examples": [
      {
        "jp": "ここに なまえを かいてください。",
        "kana": "ここに なまえを かいてください。",
        "vi": "Xin hãy viết tên vào đây."
      },
      {
        "jp": "ちょっと まってください。",
        "kana": "ちょっと まってください。",
        "vi": "Xin vui lòng đợi một chút."
      }
    ]
  },
  {
    "title": "Hành động đang tiếp diễn",
    "pattern": "〜ています",
    "meaningVi": "Đang làm...",
    "explanation": "Diễn tả hành động đang xảy ra tại thời điểm nói.",
    "formation": "V-て + います",
    "usageNote": "Phủ định: 〜ていません (chưa làm).",
    "jlptLevel": "N4",
    "examples": [
      {
        "jp": "いま にほんごを べんきょうしています。",
        "kana": "いま にほんごを べんきょうしています。",
        "vi": "Bây giờ tôi đang học tiếng Nhật."
      },
      {
        "jp": "あめが ふっています。",
        "kana": "あめが ふっています。",
        "vi": "Trời đang mưa."
      }
    ]
  },
  {
    "title": "Xin phép làm gì",
    "pattern": "〜てもいいです",
    "meaningVi": "Được phép làm / Làm... có được không?",
    "explanation": "Dùng để xin phép hoặc cho phép ai đó làm một hành động.",
    "formation": "V-て + もいいです (câu hỏi: 〜てもいいですか)",
    "usageNote": "Trả lời đồng ý: ええ、いいですよ. Từ chối lịch sự: すみません、ちょっと...",
    "jlptLevel": "N4",
    "examples": [
      {
        "jp": "しゃしんを とってもいいですか。",
        "kana": "しゃしんを とってもいいですか。",
        "vi": "Tôi chụp ảnh ở đây có được không?"
      },
      {
        "jp": "たばこを すってもいいですか。",
        "kana": "たばこを すってもいいですか。",
        "vi": "Tôi hút thuốc có được không?"
      }
    ]
  },
  {
    "title": "Cấm đoán",
    "pattern": "〜てはいけません",
    "meaningVi": "Không được làm...",
    "explanation": "Biểu thị sự cấm đoán, quy định không được phép thực hiện hành động.",
    "formation": "V-て + はいけません",
    "usageNote": "Thường dùng trong quy tắc công cộng, biển báo hoặc người lớn nhắc nhở trẻ em.",
    "jlptLevel": "N4",
    "examples": [
      {
        "jp": "ここで たばこを すってはいけません。",
        "kana": "ここで たばこを すってはいけません。",
        "vi": "Không được hút thuốc ở đây."
      },
      {
        "jp": "びじゅつかんで しゃしんを とってはいけません。",
        "kana": "びじゅつかんで しゃしんを とってはいけません。",
        "vi": "Không được chụp ảnh trong bảo tàng mỹ thuật."
      }
    ]
  },
  {
    "title": "Khuyên nhủ không làm gì",
    "pattern": "〜ないでください",
    "meaningVi": "Xin đừng làm...",
    "explanation": "Dùng thể Nai kết hợp でください để yêu cầu hoặc khuyên ai đó đừng làm gì.",
    "formation": "V-ない + でください",
    "usageNote": "Mang sắc thái lịch sự, quan tâm.",
    "jlptLevel": "N4",
    "examples": [
      {
        "jp": "しんぱいしないでください。",
        "kana": "しんぱいしないでください。",
        "vi": "Xin đừng lo lắng."
      },
      {
        "jp": "パスポートを わすれないでください。",
        "kana": "パスポートを わすれないでください。",
        "vi": "Xin đừng quên hộ chiếu."
      }
    ]
  },
  {
    "title": "Bắt buộc / Nghĩa vụ",
    "pattern": "〜なければなりません",
    "meaningVi": "Phải làm...",
    "explanation": "Diễn tả hành động bắt buộc phải thực hiện, không thể không làm.",
    "formation": "V-ない (bỏ い) + ければなりません",
    "usageNote": "Trong giao tiếp thân mật có thể nói ngắn: 〜なきゃ / 〜ないと.",
    "jlptLevel": "N4",
    "examples": [
      {
        "jp": "まいあさ くすりを のまなければなりません。",
        "kana": "まいあさ くすりを のまなければなりません。",
        "vi": "Mỗi sáng tôi phải uống thuốc."
      },
      {
        "jp": "きょうは ざんぎょうしなければなりません。",
        "kana": "きょうは ざんぎょうしなければなりません。",
        "vi": "Hôm nay tôi phải làm thêm giờ."
      }
    ]
  },
  {
    "title": "Khả năng / Năng lực",
    "pattern": "〜ことができます",
    "meaningVi": "Có thể làm...",
    "explanation": "Diễn tả năng lực bản thân có thể làm việc gì, hoặc hoàn cảnh cho phép thực hiện việc gì.",
    "formation": "V-る (thể từ điển) + ことができます",
    "usageNote": "Hỏi khả năng: 〜ことができますか。",
    "jlptLevel": "N4",
    "examples": [
      {
        "jp": "わたしは にほんごを はなすことができます。",
        "kana": "わたしは にほんごを はなすことができます。",
        "vi": "Tôi có thể nói tiếng Nhật."
      },
      {
        "jp": "カードで はらうことができますか。",
        "kana": "カードで はらうことができますか。",
        "vi": "Tôi có thể thanh toán bằng thẻ được không?"
      }
    ]
  },
  {
    "title": "Trước khi làm gì",
    "pattern": "〜まえに",
    "meaningVi": "Trước khi...",
    "explanation": "Chỉ thứ tự hành động xảy ra trước một hành động khác.",
    "formation": "V-る / Danh từ + の + まえに",
    "usageNote": "Động từ luôn ở thể từ điển V-る dù câu ở quá khứ.",
    "jlptLevel": "N4",
    "examples": [
      {
        "jp": "ねるまえに、ほんを よみます。",
        "kana": "ねるまえに、ほんを よみます。",
        "vi": "Trước khi đi ngủ, tôi đọc sách."
      },
      {
        "jp": "しょくじの まえに、てを あらいます。",
        "kana": "しょくじの まえに、てを あらいます。",
        "vi": "Trước bữa ăn, tôi rửa tay."
      }
    ]
  },
  {
    "title": "So sánh giữa hai vật",
    "pattern": "Aのほうが Bより 〜です",
    "meaningVi": "A thì... hơn B",
    "explanation": "Dùng để so sánh tính chất hoặc mức độ giữa hai đối tượng A và B.",
    "formation": "Danh từ A + のほうが + Danh từ B + より + Tính từ + です",
    "usageNote": "Câu hỏi: Aと Bと どちらが〜ですか。",
    "jlptLevel": "N4",
    "examples": [
      {
        "jp": "ひこうきのほうが でんしゃより はやいです。",
        "kana": "ひこうきのほうが でんしゃより はやいです。",
        "vi": "Máy bay thì nhanh hơn tàu điện."
      },
      {
        "jp": "りんごと みかんと どちらが すきですか。",
        "kana": "りんごと みかんと どちらが すきですか。",
        "vi": "Táo và quýt bạn thích loại nào hơn?"
      }
    ]
  },
  {
    "title": "So sánh nhất trong phạm vi",
    "pattern": "〜で 一番 〜です",
    "meaningVi": "Trong phạm vi... thì... là nhất",
    "explanation": "Khẳng định một đối tượng đạt mức độ cao nhất trong một tập hợp hoặc phạm vi xác định.",
    "formation": "Phạm vi/Tập hợp + で + Danh từ + が + いちばん + Tính từ + です",
    "usageNote": "Hỏi cái gì nhất: なにが いちばん〜ですか。",
    "jlptLevel": "N4",
    "examples": [
      {
        "jp": "スポーツのなかで サッカーがいちばん おもしろいです。",
        "kana": "スポーツのなかで サッカーがいちばん おもしろいです。",
        "vi": "Trong các môn thể thao thì bóng đá là thú vị nhất."
      },
      {
        "jp": "いちねんで いつがいちばん さむいですか。",
        "kana": "いちねんで いつがいちばん さむいですか。",
        "vi": "Trong một năm thì khi nào là lạnh nhất?"
      }
    ]
  },
  {
    "title": "Đối lập & Đối với",
    "pattern": "〜に対して",
    "meaningVi": "Đối với... / Trái ngược với...",
    "explanation": "Biểu thị thái độ, hành động hướng tới đối tượng, hoặc đối chiếu hai sự việc tương phản.",
    "formation": "Danh từ + に対して / Thể thông thường + のに対して",
    "usageNote": "Rất phổ biến trong báo chí và trao đổi công việc.",
    "jlptLevel": "N3",
    "examples": [
      {
        "jp": "お客様に対して丁寧な言葉遣いを心がけてください。",
        "kana": "おきゃくさまにたいして ていねいなことばづかいを こころがけてください。",
        "vi": "Xin hãy chú ý dùng lời lẽ lịch sự đối với khách hàng."
      },
      {
        "jp": "兄が無口なのに対して、弟はとてもおしゃべりだ。",
        "kana": "あにがむくちなのにたいして、おとうとは とてもおしゃべりだ。",
        "vi": "Trái ngược với người anh ít nói, cậu em lại rất thích trò chuyện."
      }
    ]
  },
  {
    "title": "Nguyên nhân & Cách thức",
    "pattern": "〜によって",
    "meaningVi": "Do... / Bằng cách... / Tùy vào...",
    "explanation": "Chỉ nguyên nhân lý do, phương tiện phương pháp, hoặc sự khác biệt tùy theo từng trường hợp.",
    "formation": "Danh từ + によって",
    "usageNote": "Dạng bổ nghĩa cho danh từ là 〜による + N.",
    "jlptLevel": "N3",
    "examples": [
      {
        "jp": "台風によって多くの電車が運休となった。",
        "kana": "たいふうによって おおくのでんしゃが うんきゅうとなった。",
        "vi": "Do cơn bão mà nhiều tuyến tàu điện đã bị tạm dừng hoạt động."
      },
      {
        "jp": "人によって考え方が大きく異なります。",
        "kana": "ひとによって かんがえかたが おおきくことなります。",
        "vi": "Tùy vào mỗi người mà cách suy nghĩ khác biệt nhau rất lớn."
      }
    ]
  },
  {
    "title": "Nhờ vào / Tại vì",
    "pattern": "〜おかげで / 〜せいで",
    "meaningVi": "Nhờ có... (tích cực) / Tại vì... (tiêu cực)",
    "explanation": "おかげで dùng khi kết quả tốt đẹp. せいで dùng khi kết quả xấu hoặc đổ lỗi.",
    "formation": "V/A thể thông thường / N + の + おかげで / せいで",
    "usageNote": "Mỉa mai có thể dùng おかげで với ý châm biếm.",
    "jlptLevel": "N3",
    "examples": [
      {
        "jp": "先生のご指導のおかげで、試験に合格できました。",
        "kana": "せんせいのごしどうのおかげで、しけんに ごうかくできました。",
        "vi": "Nhờ có sự chỉ bảo của thầy cô mà tôi đã đỗ kỳ thi."
      },
      {
        "jp": "大雨のせいで、イベントが中止になってしまった。",
        "kana": "おおあめのせいで、イベントが ちゅうしになってしまった。",
        "vi": "Tại vì trời mưa lớn mà sự kiện đã bị hủy bỏ mất."
      }
    ]
  },
  {
    "title": "Phán đoán chắc chắn",
    "pattern": "〜はずだ",
    "meaningVi": "Chắc chắn là... / Đáng lẽ phải...",
    "explanation": "Người nói có căn cứ rõ ràng và tin chắc điều đó sẽ hoặc đã xảy ra.",
    "formation": "V/A thể thông thường / Na + な / N + の + はずだ",
    "usageNote": "Phủ định mạnh mẽ: 〜はずがない (không thể nào có chuyện đó).",
    "jlptLevel": "N3",
    "examples": [
      {
        "jp": "昨日メールを送ったから、届いているはずです。",
        "kana": "きのうメールをおくったから、とどいているはずです。",
        "vi": "Vì tôi đã gửi email hôm qua nên chắc chắn là đã nhận được rồi."
      },
      {
        "jp": "彼が約束を破るはずがありません。",
        "kana": "かれがやくそくをやぶるはずがありません。",
        "vi": "Không thể nào có chuyện anh ấy thất hứa được."
      }
    ]
  },
  {
    "title": "Lý do tự nhiên & Thảo nào",
    "pattern": "〜わけだ",
    "meaningVi": "Thảo nào, hèn chi... / Nghĩa là...",
    "explanation": "Bày tỏ sự thấu hiểu lý do sau khi đã biết được một nguyên nhân hợp lý.",
    "formation": "V/A thể thông thường / Na + な / N + の + わけだ",
    "usageNote": "Phủ định: 〜わけではない (không hẳn là như vậy).",
    "jlptLevel": "N3",
    "examples": [
      {
        "jp": "外は雪が降っている。寒いわけだ。",
        "kana": "そとはゆきがふっている。さむいわけだ。",
        "vi": "Bên ngoài tuyết đang rơi. Thảo nào lạnh thế."
      },
      {
        "jp": "高いものが必ずしも良いわけではない。",
        "kana": "たかいものがかならずしも いいわけではない。",
        "vi": "Đồ đắt tiền không hẳn lúc nào cũng tốt."
      }
    ]
  },
  {
    "title": "Lấy làm trọng tâm",
    "pattern": "〜を中心に",
    "meaningVi": "Lấy... làm trung tâm, nòng cốt",
    "explanation": "Chỉ đối tượng, khu vực hoặc chủ đề đóng vai trò chủ đạo trong hoạt động.",
    "formation": "Danh từ + を中心に / を中心として",
    "usageNote": "Dạng bổ nghĩa danh từ: 〜を中心とする + N.",
    "jlptLevel": "N3",
    "examples": [
      {
        "jp": "若手社員を中心に新プロジェクトが進められている。",
        "kana": "わかてしゃいんをちゅうしんに しんプロジェクトが すすめられている。",
        "vi": "Dự án mới đang được xúc tiến với nòng cốt là các nhân viên trẻ."
      },
      {
        "jp": "駅周辺を中心に商業施設が広がっている。",
        "kana": "えきしゅうへんをちゅうしんに しょうぎょうしせつが ひろがっている。",
        "vi": "Các khu thương mại đang mở rộng tập trung quanh khu vực nhà ga."
      }
    ]
  },
  {
    "title": "Khẳng định chắc chắn",
    "pattern": "〜に違いない",
    "meaningVi": "Chắc chắn là... không sai",
    "explanation": "Sự phán đoán mang tính trực giác hoặc suy luận chủ quan mạnh mẽ của người nói.",
    "formation": "Thể thông thường (bỏ だ) + に違いない",
    "usageNote": "Dùng nhiều trong văn nói biểu cảm lẫn văn viết luận.",
    "jlptLevel": "N3",
    "examples": [
      {
        "jp": "あんなに練習したのだから、彼らは勝つに違いない。",
        "kana": "あんなにれんしゅうしたのだから、かれらは かつにちがいない。",
        "vi": "Đã luyện tập nhiều đến thế nên họ chắc chắn sẽ giành chiến thắng."
      },
      {
        "jp": "犯人はこの鍵を持っていた人物に違いない。",
        "kana": "はんにんはこのかぎをもっていた じんぶつにちがいない。",
        "vi": "Thủ phạm chắc chắn là người đã giữ chiếc chìa khóa này."
      }
    ]
  },
  {
    "title": "Mục đích hành động",
    "pattern": "〜ように",
    "meaningVi": "Để mà... / Sao cho...",
    "explanation": "Diễn tả mục đích, vế trước thường là động từ chỉ khả năng hoặc trạng thái không chủ ý.",
    "formation": "V-khả năng / V-ない + ように",
    "usageNote": "Khác với 〜ために (chủ ngữ có thể chủ động kiểm soát hành vi).",
    "jlptLevel": "N3",
    "examples": [
      {
        "jp": "後ろの人にもよく聞こえるように、大きな声で話した。",
        "kana": "うしろのひとにも よくきこえるように、おおきなこえで はなした。",
        "vi": "Tôi đã nói lớn tiếng để người ngồi phía sau cũng nghe rõ."
      },
      {
        "jp": "風邪を引かないように、温かい服を着てください。",
        "kana": "かぜをひかないように、あたたかいふくを きてください。",
        "vi": "Xin hãy mặc áo ấm để không bị cảm lạnh."
      }
    ]
  },
  {
    "title": "Thời điểm ngay lập tức",
    "pattern": "〜たとたん（に）",
    "meaningVi": "Ngay sau khi... thì bất ngờ...",
    "explanation": "Diễn tả việc hành động sau bất ngờ xảy ra ngay tức thì sau hành động trước.",
    "formation": "V-た + とたん（に）",
    "usageNote": "Vế sau là hiện tượng bất ngờ ngoài ý muốn của người nói.",
    "jlptLevel": "N3",
    "examples": [
      {
        "jp": "窓を開けたとたん、冷たい風が吹き込んできた。",
        "kana": "まどをあけたとたん、つめたいかぜが ふきこんできた。",
        "vi": "Ngay khi vừa mở cửa sổ thì một luồng gió lạnh đã ùa vào."
      },
      {
        "jp": "立ち上がったとたんに、めまいがした。",
        "kana": "たちあがったとたんに、めまいがした。",
        "vi": "Vừa mới đứng dậy một cái là tôi đã thấy chóng mặt."
      }
    ]
  },
  {
    "title": "Về vấn đề liên quan",
    "pattern": "〜に関して",
    "meaningVi": "Liên quan đến... / Về vấn đề...",
    "explanation": "Dùng trong ngữ cảnh trang trọng để nêu lên chủ đề đang được nghiên cứu, thảo luận.",
    "formation": "Danh từ + に関して / に関する + N",
    "usageNote": "Trang trọng hơn 〜について.",
    "jlptLevel": "N3",
    "examples": [
      {
        "jp": "新製品の安全性に関して、専門家の意見を伺った。",
        "kana": "しんせいひんのあんぜんせいにかんして、せんもんかのいけんを うかがった。",
        "vi": "Chúng tôi đã lắng nghe ý kiến của chuyên gia liên quan đến độ an toàn của sản phẩm mới."
      },
      {
        "jp": "環境問題に関する報告書をまとめた。",
        "kana": "かんきょうもんだいにかんする ほうこくしょを まとめた。",
        "vi": "Tôi đã tổng hợp bản báo cáo liên quan đến vấn đề môi trường."
      }
    ]
  },
  {
    "title": "Biến đổi tương ứng",
    "pattern": "〜に従って",
    "meaningVi": "Càng... thì càng... / Theo như...",
    "explanation": "Khi một sự việc biến đổi, sự việc kia cũng tiến triển theo một cách tương ứng tỉ lệ thuận.",
    "formation": "V-る / Danh từ + に従って",
    "usageNote": "Mang tính quy luật khách quan, tự nhiên.",
    "jlptLevel": "N2",
    "examples": [
      {
        "jp": "年齢を重ねるに従って、健康の大切さを実感する。",
        "kana": "ねんれいをかさねるにしたがって、けんこうのたいせつさを じっかんする。",
        "vi": "Càng nhiều tuổi thì người ta càng cảm nhận sâu sắc tầm quan trọng của sức khỏe."
      },
      {
        "jp": "規則に従って行動することが求められます。",
        "kana": "きそくにしたがって こうどうすることが もとめられます。",
        "vi": "Mọi người được yêu cầu phải hành động theo đúng quy định."
      }
    ]
  },
  {
    "title": "Đi kèm cùng lúc",
    "pattern": "〜に伴って",
    "meaningVi": "Cùng với... / Đi đôi với...",
    "explanation": "Diễn tả hai sự việc quy mô lớn biến đổi song hành cùng nhau.",
    "formation": "V-る / Danh từ + に伴って (に伴い)",
    "usageNote": "Văn phong trang trọng, thường dùng trong kinh tế xã hội.",
    "jlptLevel": "N2",
    "examples": [
      {
        "jp": "経済の発展に伴って、人々のライフスタイルも多様化した。",
        "kana": "けいざいのはってんにともなって、ひとびとのライフスタイルも たよう化した。",
        "vi": "Cùng với sự phát triển của kinh tế, phong cách sống của người dân cũng trở nên đa dạng hóa."
      },
      {
        "jp": "会社の移転に伴い、電話番号が変更されます。",
        "kana": "かいしゃのいてんにともない、でんわばんごうが へんこうされます。",
        "vi": "Cùng với việc chuyển trụ sở công ty, số điện thoại cũng sẽ được thay đổi."
      }
    ]
  },
  {
    "title": "Đại diện tiêu biểu",
    "pattern": "〜をはじめ（として）",
    "meaningVi": "Trước tiên phải kể đến... / Tiêu biểu là...",
    "explanation": "Nêu ra một đại diện điển hình tiêu biểu nhất trong số nhiều đối tượng khác.",
    "formation": "Danh từ + をはじめ / をはじめとする + N",
    "usageNote": "Dùng khi muốn nhấn mạnh một nhân vật hoặc sự vật nổi bật.",
    "jlptLevel": "N2",
    "examples": [
      {
        "jp": "日本には富士山をはじめ、美しい自然が多くあります。",
        "kana": "にほんにはふじさんをはじめ、うつくしいしぜんが おおくあります。",
        "vi": "Ở Nhật Bản, trước tiên phải kể đến núi Phú Sĩ, có rất nhiều cảnh sắc thiên nhiên tươi đẹp."
      },
      {
        "jp": "社長をはじめ、全社員が一丸となって取り組みました。",
        "kana": "しゃちょうをはじめ、ぜんしゃいんが いちがんとなって とりくみました。",
        "vi": "Bắt đầu từ giám đốc, toàn thể nhân viên đã đồng lòng dốc sức thực hiện."
      }
    ]
  },
  {
    "title": "Thời cơ bước ngoặt",
    "pattern": "〜を契機に（して）",
    "meaningVi": "Nhân cơ hội... / Xuất phát từ bước ngoặt...",
    "explanation": "Biểu thị một sự kiện mang tính bước ngoặt khởi đầu cho sự thay đổi lớn.",
    "formation": "Danh từ + を契機に / を契機として",
    "usageNote": "Thường mang nghĩa tích cực về sự phát triển hoặc cải tổ.",
    "jlptLevel": "N2",
    "examples": [
      {
        "jp": "海外留学を契機に、異文化理解への関心が一層深まった。",
        "kana": "かいがいりゅうがくをけいきに、いぶんかりかいへの かんしんがいっそうふかまった。",
        "vi": "Nhân chuyến du học nước ngoài, sự quan tâm của tôi đến việc thấu hiểu văn hóa khác biệt càng sâu sắc hơn."
      },
      {
        "jp": "病気を契機として、食生活を根本的に見直した。",
        "kana": "びょうきをけいきとして、しょくせいかつを こんぽんてきにみなおした。",
        "vi": "Từ cột mốc trận ốm đó, tôi đã xem xét lại căn bản thói quen ăn uống của mình."
      }
    ]
  },
  {
    "title": "Khẳng định độc tôn",
    "pattern": "〜にほかならない",
    "meaningVi": "Chính là... / Không gì khác ngoài...",
    "explanation": "Khẳng định chắc nịch rằng nguyên nhân hay bản chất chính là điều được nhắc đến.",
    "formation": "Danh từ / から + にほかならない",
    "usageNote": "Văn phong viết nghị luận, hùng biện sắc sảo.",
    "jlptLevel": "N2",
    "examples": [
      {
        "jp": "今回の成功はチーム全員の弛まぬ努力の結果にほかならない。",
        "kana": "こんかいのせいこうは チームぜんいんのたゆまぬどりょくの けっかにほかならない。",
        "vi": "Thành công lần này không gì khác chính là kết quả của sự nỗ lực không ngừng nghỉ từ toàn đội."
      },
      {
        "jp": "彼が厳しく言うのは、君への期待の表れにほかならない。",
        "kana": "かれがきびしくいうのは、きみへのきたいのあらわれに ほかならない。",
        "vi": "Việc anh ấy nói nghiêm khắc chính là biểu hiện sự kỳ vọng lớn dành cho bạn."
      }
    ]
  },
  {
    "title": "Bắt buộc không tránh khỏi",
    "pattern": "〜ざるを得ない",
    "meaningVi": "Đành phải... / Buộc phải làm...",
    "explanation": "Tình thế éo le buộc người nói phải làm một việc dù bản thân không hề muốn.",
    "formation": "V-ない (bỏ ない) + ざるを得ない (する -> せざるを得ない)",
    "usageNote": "Nhấn mạnh sự miễn cưỡng trước hoàn cảnh khách quan.",
    "jlptLevel": "N2",
    "examples": [
      {
        "jp": "証拠が揃っている以上、事実を認めざるを得ない。",
        "kana": "しょうこがそろっているいじょう、じじつを みとめざるをえない。",
        "vi": "Một khi chứng cứ đã rành rành, tôi đành phải thừa nhận sự thật."
      },
      {
        "jp": "悪天候のため、登山計画は中止せざるを得なかった。",
        "kana": "あくてんこうのため、とざんけいかくは ちゅうしせざるをえなかった。",
        "vi": "Do thời tiết xấu, chúng tôi buộc lòng phải hủy bỏ kế hoạch leo núi."
      }
    ]
  },
  {
    "title": "Nhân dịp trọng đại",
    "pattern": "〜にあたって",
    "meaningVi": "Nhân dịp... / Trước khi bước vào sự kiện...",
    "explanation": "Dùng trong các dịp trang trọng như khai mạc, bắt đầu dự án, kết hôn.",
    "formation": "V-る / Danh từ + にあたって / にあたり",
    "usageNote": "Thường đi cùng các lời chào mừng, dặn dò tâm huyết.",
    "jlptLevel": "N2",
    "examples": [
      {
        "jp": "新年度の開始にあたり、一言ご挨拶を申し上げます。",
        "kana": "しんねんどのかいしにあたり、ひとこと ごあいさつをもうしあげます。",
        "vi": "Nhân dịp bắt đầu niên độ mới, tôi xin phép có đôi lời phát biểu chào mừng."
      },
      {
        "jp": "契約を結ぶにあたっては、条項を隅々まで確認してください。",
        "kana": "けいやくをむすぶにあたっては、じょうこうを すみずみまでかくにんしてください。",
        "vi": "Trước khi ký kết hợp đồng, xin hãy kiểm tra cẩn thận từng điều khoản một."
      }
    ]
  },
  {
    "title": "Xoay quanh tranh luận",
    "pattern": "〜をめぐって",
    "meaningVi": "Xoay quanh... / Về cuộc tranh cãi...",
    "explanation": "Chỉ chủ đề gây ra nhiều tranh cãi, ý kiến trái chiều giữa các bên.",
    "formation": "Danh từ + をめぐって / をめぐる + N",
    "usageNote": "Vế sau thường là các động từ như tranh cãi, đối đầu, đàm phán.",
    "jlptLevel": "N2",
    "examples": [
      {
        "jp": "遺産の配分をめぐって、親族間で激しい議論が続いている。",
        "kana": "いさんのはいぶんをめぐって、しんぞくかんで はげしいぎろんが つづいている。",
        "vi": "Xoay quanh việc phân chia di sản, giữa những người thân đang tiếp tục diễn ra tranh cãi nảy lửa."
      },
      {
        "jp": "消費税の引き上げをめぐる国民の関心は非常に高い。",
        "kana": "しょうひぜいのひきあげをめぐる こくみんのかんしんは ひじょうにたかい。",
        "vi": "Mối quan tâm của người dân xoay quanh việc tăng thuế tiêu dùng là cực kỳ cao."
      }
    ]
  },
  {
    "title": "Mối lo ngại e rằng",
    "pattern": "〜恐れがある",
    "meaningVi": "E rằng... / Có nguy cơ là...",
    "explanation": "Dự báo một hậu quả xấu, tai hại có khả năng xảy ra trong tương lai.",
    "formation": "V-る / Danh từ + の + 恐れがある",
    "usageNote": "Rất hay dùng trong bản tin thời tiết, cảnh báo y tế và pháp luật.",
    "jlptLevel": "N2",
    "examples": [
      {
        "jp": "このまま温暖化が進めば、海面が上昇する恐れがある。",
        "kana": "このままおんだんかがすすめば、かいめんが じょうしょうするおそれがある。",
        "vi": "Nếu hiện tượng nóng lên toàn cầu cứ tiếp diễn thế này, e rằng mực nước biển sẽ dâng cao."
      },
      {
        "jp": "地震による津波の恐れがありますので、高台へ避難してください。",
        "kana": "じしんによるつなみのおそれがありますので、たかだいへ ひなんしてください。",
        "vi": "Vì có nguy cơ xảy ra sóng thần do động đất, xin hãy sơ tán lên vùng đất cao."
      }
    ]
  },
  {
    "title": "Hạn định khiêm tốn",
    "pattern": "〜にすぎない",
    "meaningVi": "Chỉ là... / Chẳng qua chỉ là...",
    "explanation": "Đánh giá mức độ của sự việc không có gì to tát, chỉ dừng lại ở phạm vi nhỏ.",
    "formation": "Thể thông thường (bỏ だ) / N + にすぎない",
    "usageNote": "Dùng để hạ bớt tính quan trọng hoặc tỏ thái độ khiêm tốn.",
    "jlptLevel": "N2",
    "examples": [
      {
        "jp": "これはまだ初期の仮説にすぎず、実証には時間を要する。",
        "kana": "これはまだしょきのかせつにすぎず、じっしょうには じかんをようする。",
        "vi": "Đây chẳng qua chỉ là giả thuyết ban đầu, việc chứng minh trên thực tế sẽ cần thời gian."
      },
      {
        "jp": "私は自分の役目を果たしたにすぎません。",
        "kana": "わたしはじぶんのやくめを はたしたにすぎません。",
        "vi": "Tôi chỉ là đã làm tròn bổn phận của bản thân mà thôi."
      }
    ]
  },
  {
    "title": "Cảm xúc trào dâng khó nén",
    "pattern": "〜を禁じ得ない",
    "meaningVi": "Không thể kìm nén được...",
    "explanation": "Người nói tự nhiên dâng lên một cảm xúc mãnh liệt mà lý trí không thể ngăn lại được.",
    "formation": "Danh từ + を禁じ得ない (thường đi với 涙, 怒り, 驚き, 同情)",
    "usageNote": "Văn phong văn học, xã luận sâu sắc.",
    "jlptLevel": "N1",
    "examples": [
      {
        "jp": "悲惨な戦争の記録を目の当たりにして、深い憤りを禁じ得ない。",
        "kana": "ひさんなせんそうのきろくを まのあたりにして、ふかいいきどおりを きんじえない。",
        "vi": "Tận mắt chứng kiến những ghi chép về chiến tranh bi thảm, tôi không thể kìm nén được nỗi phẫn nộ sâu sắc."
      },
      {
        "jp": "逆境を乗り越えた若者の姿に、誰もが称賛を禁じ得なかった。",
        "kana": "ぎゃっきょうをのりこえたわかもののすがたに、だれもが しょうさんをきんじえなかった。",
        "vi": "Trước hình ảnh người thanh niên vượt qua nghịch cảnh, không một ai có thể kìm nén được lời ngợi khen."
      }
    ]
  },
  {
    "title": "Quá trình dẫn tới đỉnh điểm",
    "pattern": "〜に至る",
    "meaningVi": "Dẫn tới mức... / Trải qua đến tận...",
    "explanation": "Biểu thị diễn biến kéo dài cuối cùng đã đạt đến một giai đoạn hoặc tình trạng cụ thể.",
    "formation": "V-る / Danh từ + に至る",
    "usageNote": "Dùng cả cho thời gian, không gian và mức độ trừu tượng.",
    "jlptLevel": "N1",
    "examples": [
      {
        "jp": "長年の地道な研究が実を結び、ついに実用化に至った。",
        "kana": "ながねんのじみちなけんきゅうが みをむすび、ついに じつようかにいたった。",
        "vi": "Nghiên cứu bền bỉ nhiều năm đã đơm hoa kết trái, cuối cùng đã dẫn tới việc ứng dụng thực tiễn."
      },
      {
        "jp": "事態がここに至っては、もはや妥協の余地はない。",
        "kana": "じたいがここにいたっては、もはや だきょうのよちはない。",
        "vi": "Khi tình hình đã đi đến bước này thì không còn chỗ cho sự thỏa hiệp nữa."
      }
    ]
  },
  {
    "title": "Độ cực hạn không gì bằng",
    "pattern": "〜極まりない / 〜極まる",
    "meaningVi": "Hết sức... / Vô cùng... cực kỳ...",
    "explanation": "Nhấn mạnh một trạng thái đã chạm tới giới hạn tột cùng (thường mang sắc thái tiêu cực hoặc cảm thán).",
    "formation": "Na (bỏ な) + 極まりない / 極まる",
    "usageNote": "Văn phong trang trọng đỉnh cao.",
    "jlptLevel": "N1",
    "examples": [
      {
        "jp": "公の場でそのような無責任な発言をするとは、失礼極まりない。",
        "kana": "おおやけのばで そのようなむせきにんなはつげんをするとは、しつれいきわまりない。",
        "vi": "Phát biểu vô trách nhiệm như vậy ở nơi công cộng thì thật là vô lễ hết sức."
      },
      {
        "jp": "危険極まる行為であり、直ちに中止しなければならない。",
        "kana": "きけんきわまるこういであり、ただちに ちゅうししなければならない。",
        "vi": "Đó là một hành vi cực kỳ nguy hiểm, phải dừng lại ngay lập tức."
      }
    ]
  },
  {
    "title": "Phương tiện & Thời điểm dứt khoát",
    "pattern": "〜をもって",
    "meaningVi": "Bằng... / Lấy mốc thời gian là...",
    "explanation": "Chỉ phương tiện cách thức đặc biệt, hoặc thông báo mốc thời gian kết thúc một trạng thái.",
    "formation": "Danh từ + をもって",
    "usageNote": "Thường thấy trong các thông cáo chính thức: 本日をもって (kể từ hôm nay).",
    "jlptLevel": "N1",
    "examples": [
      {
        "jp": "当店は今月末日をもちまして、閉店させていただくこととなりました。",
        "kana": "とうてんはこんげつまつじつをもちまして、へいてんさせていただくこととなりました。",
        "vi": "Cửa hàng chúng tôi xin phép được đóng cửa kể từ ngày cuối cùng của tháng này."
      },
      {
        "jp": "誠意をもって話し合えば、必ず道は開けるはずだ。",
        "kana": "せいいをもってはなしあえば、かならず みちはひらけるはずだ。",
        "vi": "Nếu chúng ta trao đổi bằng cả sự chân thành, chắc chắn con đường sẽ mở ra."
      }
    ]
  },
  {
    "title": "Căn cứ nền tảng",
    "pattern": "〜を踏まえて",
    "meaningVi": "Dựa trên... / Căn cứ vào...",
    "explanation": "Xem xét và tiếp thu những kết quả, kinh nghiệm hoặc dữ liệu sẵn có để đưa ra phán đoán mới.",
    "formation": "Danh từ + を踏まえて",
    "usageNote": "Rất thông dụng trong báo cáo đề án chiến lược cấp cao.",
    "jlptLevel": "N1",
    "examples": [
      {
        "jp": "前回の反省を踏まえて、より強固な安全対策を講じる必要がある。",
        "kana": "ぜんかいのはんせいをふまえて、よりきょうこな あんぜんたいさくを こうじるひつようがある。",
        "vi": "Căn cứ vào những bài học kiểm điểm lần trước, chúng ta cần đề ra biện pháp an toàn vững chắc hơn."
      },
      {
        "jp": "市場の最新動向を踏まえた柔軟な事業計画が求められている。",
        "kana": "しじょうのさいしんどうこうをふまえた じゅうなんな じぎょうけいかくが もとめられている。",
        "vi": "Một kế hoạch kinh doanh linh hoạt dựa trên những biến động mới nhất của thị trường đang được đòi hỏi."
      }
    ]
  },
  {
    "title": "Bị ép buộc chấp nhận",
    "pattern": "〜を余儀なくされる",
    "meaningVi": "Buộc phải... / Không còn cách nào khác đành...",
    "explanation": "Hoàn cảnh khách quan bất khả kháng ép buộc chủ thể phải làm hoặc chịu đựng một tình trạng đau đớn.",
    "formation": "Danh từ + を余儀なくされる / を余儀なくさせる",
    "usageNote": "Thường nói về việc hoãn kế hoạch, sơ tán hoặc thay đổi chính sách.",
    "jlptLevel": "N1",
    "examples": [
      {
        "jp": "予期せぬ資金難により、プロジェクトは大幅な縮小を余儀なくされた。",
        "kana": "よきせぬしきんなんにより、プロジェクトは おおはばなしゅくしょうを よぎなくされた。",
        "vi": "Do khó khăn tài chính bất ngờ ập đến, dự án buộc phải thu hẹp quy mô đáng kể."
      },
      {
        "jp": "怪我の悪化が、彼に現役引退を余儀なくさせた。",
        "kana": "けがのあっかが、かれに げんえきいんたいを よぎなくさせた。",
        "vi": "Vết thương chuyển biến xấu đã buộc anh ấy phải giã từ sự nghiệp thi đấu đỉnh cao."
      }
    ]
  },
  {
    "title": "So sánh tương tự hoặc coi nhẹ",
    "pattern": "〜ごとき / 〜ごとく",
    "meaningVi": "Như là... / Cỡ như... (hạ thấp hoặc ví von)",
    "explanation": "Dùng như 比喩 (ví von cổ điển) hoặc dùng để khiêm tốn về bản thân, đôi khi hạ thấp đối thủ.",
    "formation": "V-る / Danh từ + の + ごとき + N / ごとく + V",
    "usageNote": "Mang màu sắc văn học tao nhã hoặc văn tự cổ.",
    "jlptLevel": "N1",
    "examples": [
      {
        "jp": "光陰矢のごとし。年月が過ぎ去るのは実に早いものだ。",
        "kana": "こういんやのごとし。ねんげつが すぎさるのは じつにはやいものだ。",
        "vi": "Thời gian trôi như thoi đưa. Năm tháng qua đi thật sự quá đỗi nhanh chóng."
      },
      {
        "jp": "私ごとき未熟者に、このような大役が務まるでしょうか。",
        "kana": "わたしごときみじゅくものに、このようなたいやくが つとまるでしょうか。",
        "vi": "Một kẻ non nớt như tôi liệu có cáng đáng nổi trọng trách to lớn dường này?"
      }
    ]
  },
  {
    "title": "Đặc sắc độc nhất vô nhị",
    "pattern": "〜ならではの",
    "meaningVi": "Chỉ có ở... / Đậm chất riêng của...",
    "explanation": "Đánh giá cao một nét độc đáo, tài hoa hoặc phẩm chất mà chỉ riêng đối tượng đó mới có.",
    "formation": "Danh từ + ならではの + N / ならではだ",
    "usageNote": "Luôn mang hàm ý khen ngợi, trân trọng.",
    "jlptLevel": "N1",
    "examples": [
      {
        "jp": "伝統の職人技ならではの繊細な美しさに圧倒された。",
        "kana": "でんとうのしょくにんわざならではの せんさいなうつくしさに あっとうされた。",
        "vi": "Tôi đã bị choáng ngợp trước vẻ đẹp tinh xảo mà chỉ có ở bàn tay nghệ nhân truyền thống."
      },
      {
        "jp": "京都ならではの落ち着いた風情を心ゆくまで堪能した。",
        "kana": "きょうとならではのおちついたふぜいを こころゆくまで たんのうした。",
        "vi": "Tôi đã thưởng thức trọn vẹn nét thi vị thanh tịnh chỉ có riêng ở cố đô Kyoto."
      }
    ]
  },
  {
    "title": "Tư cách & Trách nhiệm cao cả",
    "pattern": "〜たるもの",
    "meaningVi": "Đã là người ở vị trí... thì phải...",
    "explanation": "Đưa ra chuẩn mực đạo đức hoặc trách nhiệm nặng nề mà người giữ cương vị đó phải gánh vác.",
    "formation": "Danh từ + たるもの",
    "usageNote": "Vế sau luôn là câu khẳng định đạo lý hoặc việc phải làm.",
    "jlptLevel": "N1",
    "examples": [
      {
        "jp": "国家の指導者たるもの、常に国民の安寧を最優先に考えるべきだ。",
        "kana": "こっかのしどうしゃたるもの、つねに こくみんのあんねいを さいゆうせんに かんがえるべきだ。",
        "vi": "Đã là người lãnh đạo quốc gia thì phải luôn coi sự an lành của người dân là ưu tiên số một."
      },
      {
        "jp": "教育者たるものは、自らの言動に常に責任を持たねばならない。",
        "kana": "きょういくしゃたるものは、みずからのげんどうに つねにせきにんをもたねばならない。",
        "vi": "Đã là người làm giáo dục thì phải luôn chịu trách nhiệm về từng lời nói và hành vi của mình."
      }
    ]
  },
  {
    "title": "Điều kiện tồn tại cốt tử",
    "pattern": "〜あっての",
    "meaningVi": "Có được là nhờ có... / Tồn tại dựa trên...",
    "explanation": "Khẳng định sự tồn tại hoặc thành công của A hoàn toàn nhờ vào sự hiện diện của B.",
    "formation": "Danh từ A + あっての + Danh từ B",
    "usageNote": "Bày tỏ lòng biết ơn sâu sắc đối với yếu tố nền tảng.",
    "jlptLevel": "N1",
    "examples": [
      {
        "jp": "お客様あっての我が社であり、常に感謝の念を忘れてはならない。",
        "kana": "おきゃくさまあってのわがしゃであり、つねに かんしゃのねんを わすれてはならない。",
        "vi": "Có khách hàng mới có công ty chúng ta, không bao giờ được quên lòng biết ơn."
      },
      {
        "jp": "健康あっての人生だ。無理を重ねて体を壊しては元も子もない。",
        "kana": "けんこうあってのじんせいだ。むりをかさねて からだをこわしては もともこもない。",
        "vi": "Có sức khỏe mới có cuộc đời. Cố quá mà tổn hại thân thể thì chẳng còn lại gì cả."
      }
    ]
  }
];

const SEED_KANJI = [
  [
    "日",
    "ニチ、ジツ",
    "ひ、か",
    "ngày, mặt trời",
    "day, sun",
    4,
    "日",
    "N5",
    "NHẬT",
    "Mặt trời mọc mỗi ngày."
  ],
  [
    "本",
    "ホン",
    "もと",
    "sách, gốc",
    "book, origin",
    5,
    "木",
    "N5",
    "BẢN",
    "Cây thêm một nét ở gốc thành bản."
  ],
  [
    "学",
    "ガク",
    "まなぶ",
    "học",
    "study",
    8,
    "子",
    "N5",
    "HỌC",
    "Đứa trẻ dưới mái nhà đang học."
  ],
  [
    "語",
    "ゴ",
    "かたる",
    "ngôn ngữ",
    "language",
    14,
    "言",
    "N5",
    "NGỮ",
    "Lời nói tạo thành ngôn ngữ."
  ],
  [
    "人",
    "ジン、ニン",
    "ひと",
    "người",
    "person",
    2,
    "人",
    "N5",
    "NHÂN",
    "Hình dáng con người đang đứng."
  ],
  [
    "先",
    "セン",
    "さき",
    "trước, đi trước",
    "previous, ahead",
    6,
    "儿",
    "N5",
    "TIÊN",
    "Người đi trước hướng dẫn."
  ],
  [
    "生",
    "セイ、ショウ",
    "いきる、うまれる",
    "sinh, sống",
    "life, birth",
    5,
    "生",
    "N5",
    "SINH",
    "Mầm cây sinh sôi nảy nở."
  ],
  [
    "何",
    "カ",
    "なに、なん",
    "cái gì",
    "what",
    7,
    "人",
    "N5",
    "HÀ",
    "Người vác cái gì trên vai."
  ],
  [
    "行",
    "コウ、ギョウ",
    "いく、おこなう",
    "đi, tổ chức",
    "go, carry out",
    6,
    "行",
    "N5",
    "HÀNH",
    "Ngã tư đường người đi lại."
  ],
  [
    "来",
    "ライ",
    "くる",
    "đến",
    "come",
    7,
    "木",
    "N5",
    "LAI",
    "Cây lúa trĩu hạt mùa gặt đến."
  ],
  [
    "食",
    "ショク",
    "たべる",
    "ăn",
    "eat",
    9,
    "食",
    "N4",
    "THỰC",
    "Đậy thức ăn lại trước khi ăn."
  ],
  [
    "見",
    "ケン",
    "みる",
    "nhìn, xem",
    "look, see",
    7,
    "見",
    "N4",
    "KIẾN",
    "Mắt to đang chăm chú nhìn."
  ],
  [
    "書",
    "ショ",
    "かく",
    "viết",
    "write",
    10,
    "曰",
    "N4",
    "THƯ",
    "Tay cầm bút viết chữ ra lời."
  ],
  [
    "読",
    "ドク",
    "よむ",
    "đọc",
    "read",
    14,
    "言",
    "N4",
    "ĐỘC",
    "Lời nói đọc đi bán lại."
  ],
  [
    "間",
    "カン、ケン",
    "あいだ、ま",
    "gian, khoảng cách, ở giữa",
    "interval, space",
    12,
    "門",
    "N5",
    "GIAN",
    "Ánh mặt trời lọt qua khe giữa hai cánh cổng."
  ],
  [
    "頭",
    "トウ、ズ",
    "あたま、かしら",
    "đầu, đầu óc, con (đếm thú lớn)",
    "head, top",
    16,
    "頁",
    "N4",
    "ĐẦU",
    "Hạt đậu đặt trên trang giấy tựa cái đầu."
  ],
  [
    "以",
    "イ",
    "もっ・て",
    "lấy làm mốc, dĩ, bởi vì",
    "by means of, because",
    5,
    "人",
    "N4",
    "DĨ",
    "Người cầm cày lấy vệt đất làm mốc chuẩn mực."
  ],
  [
    "活",
    "カツ",
    "い・きる、い・かす",
    "sống động, sinh hoạt, linh hoạt",
    "lively, active",
    9,
    "氵",
    "N4",
    "HOẠT",
    "Dòng nước tưới vào miệng mang lại sức sống tươi mới."
  ],
  [
    "影",
    "エイ",
    "かげ",
    "bóng, hình bóng, ảnh hưởng",
    "shadow, silhouette, image",
    15,
    "彡",
    "N3",
    "ẢNH",
    "Ánh nắng mặt trời rọi qua kinh đô để lại ba vệt bóng lông dài."
  ],
  [
    "響",
    "キョウ",
    "ひび・く",
    "tiếng vang, âm hưởng, rung động",
    "echo, sound, reverberate",
    20,
    "音",
    "N1",
    "HƯỞNG",
    "Hương thơm quyện cùng tiếng nhạc vang dội khắp xóm làng."
  ],
  [
    "技",
    "ギ",
    "わざ",
    "kỹ năng, tay nghề, kỹ thuật",
    "skill, art, craft",
    7,
    "扌",
    "N3",
    "KĨ",
    "Bàn tay uốn nắn từng cành nhánh thể hiện kỹ năng khéo léo."
  ],
  [
    "術",
    "ジュツ",
    "すべ",
    "kỹ thuật, nghệ thuật, phương pháp",
    "art, technique, means",
    11,
    "行",
    "N3",
    "THUẬT",
    "Đi giữa ngã tư đường gieo hạt lúa biến hóa thành thuật ảo diệu."
  ],
  [
    "役",
    "ヤク、エキ",
    null,
    "vai trò, bổn phận, chiến dịch",
    "duty, role, service",
    7,
    "彳",
    "N3",
    "DỊCH",
    "Bước chân cầm binh khí gánh vác vai trò bảo vệ non sông."
  ],
  [
    "割",
    "カツ",
    "わ・る、わ・れる、さ・く",
    "chia, cắt, tỉ lệ, giảm giá",
    "divide, cut, proportion",
    12,
    "刂",
    "N3",
    "CÁT",
    "Dùng dao chia nhỏ đồ vật trong nhà ra từng phần."
  ],
  [
    "値",
    "チ",
    "ね、あたい",
    "giá trị, mức giá, trị số",
    "price, value, cost",
    10,
    "亻",
    "N3",
    "TRỊ",
    "Con người ngay thẳng đánh giá đúng giá trị của đồ vật."
  ],
  [
    "段",
    "ダン",
    null,
    "bậc thang, giai đoạn, thứ bậc",
    "grade, steps, stairs",
    9,
    "殳",
    "N3",
    "ĐOẠN",
    "Dùng búa gõ từng bậc đá xếp thành cầu thang phân giai đoạn."
  ],
  [
    "躍",
    "ヤク",
    "おど・る",
    "nhảy vọt, sôi nổi, hoạt bát",
    "leap, jump, skip",
    21,
    "足",
    "N1",
    "DƯỢC",
    "Đôi chân dang đôi cánh lông chim nhảy vút lên không trung."
  ],
  [
    "検",
    "ケン",
    "しら・べる",
    "kiểm tra, xem xét",
    "examination, inspect",
    12,
    "木",
    "N3",
    "KIỂM",
    "Cây cối được mọi người tập hợp kiểm định chất lượng."
  ],
  [
    "討",
    "トウ",
    "う・つ",
    "thảo phạt, bàn luận, xem xét",
    "discuss, attack",
    10,
    "言",
    "N2",
    "THẢO",
    "Dùng lời nói đo từng tấc bàn thảo kế hoạch chi tiết."
  ],
  [
    "経",
    "ケイ、キョウ",
    "へ・る",
    "kinh tế, kinh qua, kinh điển",
    "pass through, manage, sutra",
    11,
    "糸",
    "N3",
    "KINH",
    "Sợi tơ dệt nên đạo lý kinh bang tế thế."
  ],
  [
    "済",
    "サイ",
    "す・む、す・ます",
    "kinh tế, cứu giúp, hoàn tất",
    "settle, relieve, finish",
    11,
    "氵",
    "N3",
    "TẾ",
    "Dòng nước giúp mọi việc trôi qua êm thấm."
  ],
  [
    "政",
    "セイ、ショウ",
    "まつりごと",
    "chính trị, chính sách",
    "politics, government",
    9,
    "攵",
    "N3",
    "CHÍNH",
    "Đánh roi uốn nắn việc nước cho ngay thẳng."
  ],
  [
    "治",
    "ジ、チ",
    "おさ・める、なお・る",
    "cai trị, điều trị, lành bệnh",
    "cure, govern, heal",
    8,
    "氵",
    "N3",
    "TRỊ",
    "Dùng dòng nước hiền hòa để quản lý và trị bệnh."
  ],
  [
    "関",
    "カン",
    "せき、かか・わる",
    "cửa quan, liên quan",
    "connection, barrier",
    14,
    "門",
    "N3",
    "QUAN",
    "Cửa ải đóng then cài liên quan tới vận mệnh đất nước."
  ],
  [
    "係",
    "ケイ",
    "かかり、かか・わる",
    "hệ số, phụ trách, quan hệ",
    "person in charge, connection",
    9,
    "亻",
    "N3",
    "HỆ",
    "Người giữ mối dây tơ liên kết các bộ phận."
  ],
  [
    "企",
    "キ",
    "くわだ・てる",
    "xí nghiệp, mưu tính",
    "plan, undertake, enterprise",
    6,
    "人",
    "N2",
    "XÍ",
    "Người đứng kiễng chân ngóng trông mưu tính việc lớn."
  ],
  [
    "業",
    "ギョウ、ゴウ",
    "わざ",
    "nghề nghiệp, sự nghiệp, công nghiệp",
    "business, karma",
    13,
    "木",
    "N4",
    "NGHIỆP",
    "Cây giá treo chuông biểu trưng cho sự nghiệp lâu bền."
  ],
  [
    "績",
    "セキ",
    null,
    "thành tích, dệt sợi",
    "exploits, achievements",
    17,
    "糸",
    "N2",
    "TÍCH",
    "Dệt từng sợi tơ thành tấm vải chiến tích rực rỡ."
  ],
  [
    "契",
    "ケイ",
    "ちぎ・る",
    "khế ước, giao ước",
    "pledge, contract",
    9,
    "大",
    "N2",
    "KHẾ",
    "Khắc chữ giao ước lên phiến đá lớn."
  ],
  [
    "約",
    "ヤク",
    null,
    "ước hẹn, khoảng chừng, tóm lược",
    "promise, approximately",
    9,
    "糸",
    "N4",
    "ƯỚC",
    "Sợi tơ buộc chặt lời hẹn ước."
  ],
  [
    "景",
    "ケイ",
    null,
    "phong cảnh, quang cảnh kinh tế",
    "scene, view",
    12,
    "日",
    "N3",
    "CẢNH",
    "Mặt trời chiếu sáng cảnh sắc kinh thành tráng lệ."
  ],
  [
    "慮",
    "リョ",
    "おもんぱか・る",
    "suy nghĩ chu đáo, lo toan",
    "consideration, thought",
    15,
    "心",
    "N2",
    "LỰ",
    "Hổ suy ngẫm trong lòng với tất cả sự chu đáo."
  ],
  [
    "調",
    "チョウ",
    "しら・べる、ととの・う",
    "điều tra, điều chỉnh, hòa nhịp",
    "tune, investigate",
    15,
    "言",
    "N3",
    "ĐIỀU",
    "Dùng lời nói sắp xếp cho giai điệu hòa hợp."
  ],
  [
    "整",
    "セイ",
    "ととの・える",
    "chỉnh tề, sắp xếp gọn gàng",
    "organize, arrange",
    16,
    "攵",
    "N2",
    "CHỈNH",
    "Chỉnh đốn dây trói cho ngay ngắn nghiêm trang."
  ],
  [
    "妥",
    "ダ",
    null,
    "thỏa hiệp, thỏa đáng",
    "gentle, compromise",
    7,
    "女",
    "N2",
    "THỎA",
    "Bàn tay che chở người phụ nữ biểu thị sự yên thỏa."
  ],
  [
    "協",
    "キョウ",
    null,
    "hợp tác, chung sức đồng lòng",
    "cooperation",
    8,
    "十",
    "N3",
    "HIỆP",
    "Mười người cùng chung một sức lực hợp tác."
  ],
  [
    "頼",
    "ライ",
    "たの・む、たよ・る",
    "nhờ cậy, trông cậy",
    "trust, request",
    16,
    "頁",
    "N3",
    "LẠI",
    "Trông cậy vào người có đầu óc sáng suốt."
  ],
  [
    "責",
    "セキ",
    "せ・める",
    "trách nhiệm, khiển trách",
    "blame, responsibility",
    11,
    "貝",
    "N3",
    "TRÁCH",
    "Đòi tiền vỏ sò gánh vác trách nhiệm trả nợ."
  ],
  [
    "誠",
    "セイ",
    "まこと",
    "thành thật, chân thành",
    "sincerity, truth",
    13,
    "言",
    "N1",
    "THÀNH",
    "Lời nói thành toàn mang lại sự chân thành tuyệt đối."
  ],
  [
    "礼",
    "レイ、ライ",
    null,
    "lễ nghi, cảm ơn",
    "etiquette, bow",
    5,
    "示",
    "N4",
    "LỄ",
    "Dâng lễ vật tạ ơn thần linh."
  ],
  [
    "災",
    "サイ",
    "わざわ・い",
    "tai họa, thiên tai",
    "disaster, calamity",
    7,
    "火",
    "N2",
    "TAI",
    "Nước lũ sông ngòi và lửa cháy gây ra thảm họa."
  ],
  [
    "害",
    "ガイ",
    null,
    "tổn hại, gây hại",
    "harm, injury",
    10,
    "宀",
    "N3",
    "HẠI",
    "Dưới mái nhà lời nói gây tổn thương nhau."
  ],
  [
    "警",
    "ケイ",
    "いまし・める",
    "cảnh báo, cảnh sát",
    "admonish, warn",
    19,
    "言",
    "N3",
    "CẢNH",
    "Dùng lời nói nghiêm khắc răn đe giữ an ninh."
  ],
  [
    "戒",
    "カイ",
    "いまし・める",
    "cảnh giới, răn đe",
    "commandment, warn",
    7,
    "戈",
    "N1",
    "GIỚI",
    "Hai tay cầm kích canh phòng cảnh giới."
  ],
  [
    "避",
    "ヒ",
    "さ・ける",
    "tị nạn, tránh né",
    "evade, avoid",
    16,
    "辶",
    "N2",
    "TỊ",
    "Bước chân nhanh chóng né tránh tai ương."
  ],
  [
    "難",
    "ナン",
    "むずか・しい",
    "gian nan, khó khăn",
    "difficult, hardship",
    18,
    "隹",
    "N3",
    "NAN",
    "Bắt chim trên cành khô gặp nhiều gian nan."
  ],
  [
    "復",
    "フク",
    "また",
    "hồi phục, lặp lại",
    "restore, return",
    12,
    "彳",
    "N3",
    "PHỤC",
    "Bước chân quay trở lại khôi phục con đường xưa."
  ],
  [
    "旧",
    "キュウ",
    "ふる・い",
    "cũ kỹ, nguyên trạng",
    "old, former",
    5,
    "日",
    "N2",
    "CỰU",
    "Mặt trời soi rọi một nét chữ thời xưa cũ."
  ],
  [
    "防",
    "ボウ",
    "ふせ・ぐ",
    "phòng chống, ngăn chặn",
    "defend, protect",
    7,
    "阝",
    "N3",
    "PHÒNG",
    "Gò đất đắp lũy kiên cố phòng ngừa giặc."
  ],
  [
    "被",
    "ヒ",
    "こうむ・る",
    "chịu thiệt hại, bị động",
    "incur, cover",
    10,
    "衤",
    "N2",
    "BỊ",
    "Khoác áo da chịu đựng giông gió."
  ],
  [
    "克",
    "コク",
    "か・つ",
    "khắc phục, vượt qua",
    "overcome, conquer",
    7,
    "儿",
    "N1",
    "KHẮC",
    "Đôi chân con người vượt qua mọi trở ngại."
  ],
  [
    "論",
    "ロン",
    null,
    "luận, lập luận",
    "argument, discourse",
    15,
    "言",
    "N1",
    "LUẬN",
    "Nhiều lời nói được sắp xếp thành lập luận."
  ],
  [
    "拠",
    "キョ、コ",
    "よ・る",
    "căn cứ, dựa vào",
    "foothold, based on",
    8,
    "扌",
    "N1",
    "CỨ",
    "Bàn tay nắm chặt căn cứ điểm vững chãi."
  ],
  [
    "概",
    "ガイ",
    "おおむ・ね",
    "khái niệm, đại khái",
    "outline, concept",
    14,
    "木",
    "N1",
    "KHÁI",
    "Thanh gỗ gạt phẳng đại khái bề mặt."
  ],
  [
    "念",
    "ネン",
    null,
    "ý niệm, suy nghĩ, tưởng nhớ",
    "thought, wish",
    8,
    "心",
    "N3",
    "NIỆM",
    "Trái tim lắng đọng suy ngẫm trong khoảnh khắc."
  ],
  [
    "偏",
    "ヘン",
    "かたよ・る",
    "thiên vị, định kiến",
    "partial, lean",
    11,
    "亻",
    "N1",
    "THIÊN",
    "Con người thiên lệch về một phía."
  ],
  [
    "盾",
    "ジュン",
    "たて",
    "cái khiên, mâu thuẫn",
    "shield",
    9,
    "目",
    "N1",
    "THUẪN",
    "Mắt chăm chú nhìn chiếc khiên đỡ tên."
  ],
  [
    "察",
    "サツ",
    null,
    "quan sát, thấu suốt",
    "judge, perceive",
    14,
    "宀",
    "N3",
    "SÁT",
    "Dưới mái nhà xem xét kỹ lưỡng tế tự."
  ],
  [
    "倫",
    "リン",
    null,
    "luân lý, đạo đức",
    "ethics, morals",
    10,
    "亻",
    "N1",
    "LUÂN",
    "Con người xếp sách theo thứ tự luân thường."
  ],
  [
    "普",
    "フ",
    "あまね・く",
    "phổ biến, rộng khắp",
    "universal, widespread",
    12,
    "日",
    "N2",
    "PHỔ",
    "Ánh mặt trời soi chiếu rộng khắp nhân gian."
  ],
  [
    "遍",
    "ヘン",
    "あまね・く",
    "khắp nơi, biến thể",
    "everywhere, complete",
    12,
    "辶",
    "N1",
    "BIẾN",
    "Bước chân đi khắp mọi ngõ ngách."
  ],
  [
    "葛",
    "カツ",
    "くず",
    "dây sắn, giằng xé nội tâm",
    "arrowroot, vine",
    11,
    "艹",
    "N1",
    "CÁT",
    "Dây sắn cuốn quýt tựa giằng xé nội tâm."
  ],
  [
    "藤",
    "トウ",
    "ふじ",
    "hoa tử đằng, dây leo",
    "wisteria",
    18,
    "艹",
    "N1",
    "ĐẰNG",
    "Hoa tử đằng rủ nhánh dây leo mềm mại."
  ],
  [
    "宿",
    "シュク",
    "やど、やど・る",
    "nhà trọ, số mệnh sẵn có",
    "inn, lodge, fate",
    11,
    "宀",
    "N3",
    "TÚC",
    "Dưới mái nhà có chiếu nghỉ trọ qua đêm."
  ],
  [
    "命",
    "メイ、ミョウ",
    "いのち",
    "sinh mạng, số mệnh, mệnh lệnh",
    "life, fate, command",
    8,
    "口",
    "N3",
    "MỆNH",
    "Khẩu lệnh tập hợp bảo toàn sinh mạng."
  ],
  [
    "洞",
    "ドウ",
    "ほら",
    "hang động, thấu suốt",
    "cave, insight",
    9,
    "氵",
    "N1",
    "ĐỔNG",
    "Dòng nước chảy xuyên qua hang động sâu thẳm."
  ],
  [
    "索",
    "サク",
    null,
    "tìm kiếm, dây thừng",
    "cord, search",
    10,
    "糸",
    "N1",
    "SÁCH",
    "Dùng dây thừng dò tìm manh mối."
  ],
  [
    "究",
    "キュウ",
    "きわ・める",
    "nghiên cứu, tìm tòi tận cùng",
    "research, investigate",
    7,
    "穴",
    "N3",
    "CỨU",
    "Dưới hang sâu uốn người tìm tòi tận cùng."
  ],
  [
    "極",
    "キョク、ゴク",
    "きわ・める",
    "cực độ, tột cùng",
    "pole, extreme",
    12,
    "木",
    "N2",
    "CỰC",
    "Cột gỗ dựng ở nơi tột cùng bắc nam."
  ],
  [
    "策",
    "サク",
    null,
    "đối sách, kế sách",
    "scheme, plan",
    12,
    "竹",
    "N2",
    "SÁCH",
    "Thẻ tre ghi chép mưu lược đối sách."
  ],
  [
    "範",
    "ハン",
    null,
    "quy phạm, khuôn khổ",
    "pattern, model",
    15,
    "竹",
    "N1",
    "PHẠM",
    "Khuôn tre xe chở làm chuẩn mực noi theo."
  ],
  [
    "統",
    "トウ",
    "す・べる",
    "thống nhất, quản lý tổng thể",
    "overall, command",
    12,
    "糸",
    "N2",
    "THỐNG",
    "Nắm đầu mối tơ dẫn dắt toàn thể."
  ],
  [
    "括",
    "カツ",
    "くく・る",
    "bao quát, gom lại",
    "fasten, tie up",
    9,
    "扌",
    "N1",
    "QUÁT",
    "Bàn tay gom lời nói lại bao quát chung."
  ],
  [
    "練",
    "レン",
    "ね・る",
    "rèn luyện, trau chuốt",
    "practice, polish",
    14,
    "糸",
    "N3",
    "LUYỆN",
    "Tơ được luộc kỹ trở nên dẻo dai."
  ],
  [
    "幽",
    "ユウ",
    "かす・か",
    "u huyền, sâu thẳm bí ẩn",
    "faint, dark",
    9,
    "幺",
    "N1",
    "U",
    "Nằm sâu trong núi bóng tối u huyền."
  ],
  [
    "玄",
    "ゲン",
    null,
    "huyền ảo, sâu kín",
    "mysterious, occult",
    5,
    "玄",
    "N1",
    "HUYỀN",
    "Màu đen huyền ảo sâu thẳm khó lường."
  ],
  [
    "徴",
    "チョウ",
    null,
    "tượng trưng, đặc trưng",
    "sign, symptom",
    14,
    "彳",
    "N1",
    "TRƯNG",
    "Bước chân tìm kiếm đặc trưng dấu vết."
  ],
  [
    "承",
    "ショウ",
    "うけたまわ・る",
    "kế thừa, thừa nhận",
    "acquiesce, hear",
    8,
    "手",
    "N3",
    "THỪA",
    "Hai tay nâng niu tiếp nhận lời dặn dò."
  ],
  [
    "華",
    "カ、ケ",
    "はな",
    "hoa mỹ, rực rỡ, thăng hoa",
    "flower, splendor",
    10,
    "艹",
    "N1",
    "HOA",
    "Cỏ cây đơm hoa rực rỡ thăng hoa."
  ],
  [
    "趣",
    "シュ",
    "おもむき",
    "phong vị tao nhã, thanh thú",
    "grace, flavor",
    15,
    "走",
    "N1",
    "THÚ",
    "Bước chạy tìm về nơi có phong vị tao nhã."
  ],
  [
    "巧",
    "コウ",
    "たく・み",
    "kỹ xảo, tinh xảo",
    "adroit, skillful",
    5,
    "工",
    "N1",
    "XẢO",
    "Người thợ khéo léo tạo ra kỹ xảo."
  ],
  [
    "匠",
    "ショウ",
    "たくみ",
    "nghệ nhân, bậc thầy",
    "artisan, master",
    6,
    "匚",
    "N1",
    "TƯỢNG",
    "Chiếc rìu trong tay người thợ bậc thầy."
  ],
  [
    "韻",
    "イン",
    null,
    "vần điệu, dư âm sâu lắng",
    "rhyme, elegance",
    19,
    "音",
    "N1",
    "VẦN",
    "Âm thanh tròn trịa ngân nga dư âm sâu lắng."
  ],
  [
    "飛",
    "ヒ",
    "と・ぶ",
    "bay, nhảy vọt",
    "fly, skip",
    9,
    "飛",
    "N3",
    "PHI",
    "Đôi cánh chim dang rộng bay vút lên."
  ],
  [
    "望",
    "ボウ、モウ",
    "のぞ・む",
    "kỳ vọng, triển vọng, trông xa",
    "hope, wish, prospect",
    11,
    "月",
    "N3",
    "VỌNG",
    "Đứng trên đài cao ngóng trông ánh trăng tròn."
  ],
  [
    "潜",
    "セン",
    "ひそ・む、もぐ・る",
    "tiềm tàng, ẩn náu, lặn sâu",
    "submerge, conceal",
    15,
    "氵",
    "N1",
    "TIỀM",
    "Dòng nước che giấu điều tiềm tàng dưới đáy."
  ],
  [
    "領",
    "リョウ",
    null,
    "lãnh thổ, lĩnh vực, tiếp nhận",
    "territory, dominion",
    14,
    "頁",
    "N3",
    "LÃNH",
    "Cái đầu lãnh đạo cai quản cương vực."
  ],
  [
    "域",
    "イキ",
    null,
    "khu vực, cương vực",
    "region, limits",
    11,
    "土",
    "N2",
    "VỰC",
    "Đất đai cầm vũ khí bảo vệ ranh giới khu vực."
  ],
  [
    "革",
    "カク",
    "かわ",
    "cải cách, da thuộc, đổi mới",
    "leather, reform",
    9,
    "革",
    "N2",
    "CÁCH",
    "Tấm da thú căng ra cải cách đổi mới."
  ],
  [
    "叡",
    "エイ",
    "あき・らか",
    "trí tuệ uyên bác, sáng suốt",
    "wisdom, astute",
    16,
    "又",
    "N1",
    "DUỆ",
    "Mắt thấu suốt việc đời biểu thị trí tuệ uyên bác."
  ],
  [
    "智",
    "チ",
    "し・る",
    "trí tuệ, mưu trí",
    "wisdom, intellect",
    12,
    "日",
    "N1",
    "TRÍ",
    "Hiểu biết như mũi tên bắn trúng mặt trời."
  ],
  [
    "繁",
    "ハン",
    "しげ・る",
    "phồn vinh, tấp nập",
    "prosper, lush",
    16,
    "糸",
    "N1",
    "PHỒN",
    "Dệt tơ hoa tấp nập phồn vinh."
  ],
  [
    "栄",
    "エイ",
    "さか・える",
    "vinh quang, hưng thịnh",
    "flourish, glory",
    9,
    "木",
    "N3",
    "VINH",
    "Cây cối nở hoa đón ánh sáng vinh quang."
  ]
];

const CORE_VOCABULARY_EXAMPLES = [
  {
    "word": "影響",
    "exampleJp": "インターネットの普及は社会に大きな影響を与えている。",
    "exampleKana": "インターネットのふきゅうは しゃかいにおおきな えいきょうをあたえている。",
    "exampleVi": "Sự phổ biến của Internet đang mang lại ảnh hưởng to lớn cho xã hội."
  },
  {
    "word": "技術",
    "exampleJp": "日本の情報技術は急速に発展しています。",
    "exampleKana": "にほんのじょうほうぎじゅつは きゅうそくにはってんしています。",
    "exampleVi": "Công nghệ thông tin của Nhật Bản đang phát triển nhanh chóng."
  },
  {
    "word": "役割",
    "exampleJp": "彼はこのプロジェクトで重要な役割を果たした。",
    "exampleKana": "かれはこのプロジェクトで じゅうようなやくわりをはたした。",
    "exampleVi": "Anh ấy đã đóng một vai trò quan trọng trong dự án này."
  },
  {
    "word": "値段",
    "exampleJp": "この店の野菜は新鮮で値段も手頃です。",
    "exampleKana": "このみせのやさいはしんせんで ねだんもてごろです。",
    "exampleVi": "Rau ở cửa hàng này vừa tươi mà giá cả lại vừa phải."
  },
  {
    "word": "活躍",
    "exampleJp": "多くの日本人選手が世界の舞台で活躍している。",
    "exampleKana": "おおくのにほんじんせんしゅが せかいのぶたいでかつやくしている。",
    "exampleVi": "Nhiều vận động viên Nhật Bản đang thi đấu thành công rực rỡ trên trường quốc tế."
  },
  {
    "word": "検討",
    "exampleJp": "提案された新しい計画について現在検討中です。",
    "exampleKana": "ていあんされたあたらしいけいかくについて げんざいけんとうちゅうです。",
    "exampleVi": "Chúng tôi hiện đang xem xét kế hoạch mới được đề xuất."
  },
  {
    "word": "以上",
    "exampleJp": "18歳以上の人は選挙権を持っています。",
    "exampleKana": "じゅうはっさいいじょうのひとは せんきょけんをもっています。",
    "exampleVi": "Người từ 18 tuổi trở lên có quyền bầu cử."
  },
  {
    "word": "間",
    "exampleJp": "学校と駅の間に大きな公園があります。",
    "exampleKana": "がっこうとえきのあいだに おおきなこうえんがあります。",
    "exampleVi": "Ở giữa trường học và nhà ga có một công viên lớn."
  },
  {
    "word": "頭",
    "exampleJp": "風邪を引いて朝から頭が痛いです。",
    "exampleKana": "かぜをひいてあさから あたまがいたいです。",
    "exampleVi": "Tôi bị cảm nên từ sáng đến giờ đầu cứ đau nhức."
  },
  {
    "word": "人",
    "exampleJp": "あの人は親切で皆から好かれています。",
    "exampleKana": "あのひとはしんせつで みなからすかれています。",
    "exampleVi": "Người đó tốt bụng nên được mọi người quý mến."
  },
  {
    "word": "さ",
    "exampleJp": "荷物の重さを測ってから郵便局へ持って行きます。",
    "exampleKana": "にもつのおもさをはかってから ゆうびんきょくへもっていきます。",
    "exampleVi": "Tôi đo độ nặng của kiện hàng rồi mới mang đến bưu điện."
  }
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


async function seedVocabularyExamples(client) {
  for (const ex of CORE_VOCABULARY_EXAMPLES) {
    const vocab = await queryOne(
      client,
      'SELECT id FROM vocabulary WHERE word = $1 LIMIT 1',
      [ex.word]
    );
    if (vocab) {
      const existing = await queryOne(
        client,
        'SELECT id FROM vocabulary_examples WHERE vocabulary_id = $1 AND example_jp = $2 LIMIT 1',
        [vocab.id, ex.exampleJp]
      );
      if (!existing) {
        await client.query(
          `INSERT INTO vocabulary_examples (vocabulary_id, example_jp, example_kana, example_vi, created_at)
           VALUES ($1, $2, $3, $4, NOW())`,
          [vocab.id, ex.exampleJp, ex.exampleKana, ex.exampleVi]
        );
      }
    }
  }
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
    await seedCultureDictionary(client);
    await seedKanjiCompounds(client);
    await seedVocabularyExamples(client);
    await seed25LessonsCurriculum(client);
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
