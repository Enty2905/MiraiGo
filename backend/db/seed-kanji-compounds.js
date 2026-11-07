const path = require('node:path');
const { Client } = require('pg');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const KANJI_COMPOUND_WORDS = [
  // 着 (TRƯỚC, TRỨ)
  { word: '着る', kana: 'きる', romaji: 'kiru', meaningVi: 'Mặc (áo, trang phục nửa trên)', meaningEn: 'wear, put on', wordType: 'verb', jlptLevel: 'N5', tags: ['đời sống', 'trang phục'] },
  { word: '着く', kana: 'つく', romaji: 'tsuku', meaningVi: 'Đến nơi, tới nơi', meaningEn: 'arrive at, reach', wordType: 'verb', jlptLevel: 'N5', tags: ['di chuyển', 'đời sống'] },
  { word: '上着', kana: 'うわぎ', romaji: 'uwagi', meaningVi: 'Áo khoác ngoài, áo ngoài', meaningEn: 'jacket, outerwear', wordType: 'noun', jlptLevel: 'N5', tags: ['trang phục'] },
  { word: '下着', kana: 'したぎ', romaji: 'shitagi', meaningVi: 'Quần áo lót', meaningEn: 'underwear', wordType: 'noun', jlptLevel: 'N4', tags: ['trang phục'] },
  { word: '到着', kana: 'とうちゃく', romaji: 'touchaku', meaningVi: 'Sự đến nơi, hạ cánh', meaningEn: 'arrival', wordType: 'noun', jlptLevel: 'N3', tags: ['giao thông', 'du lịch'] },

  // 物 (VẬT)
  { word: '食べ物', kana: 'たべもの', romaji: 'tabemono', meaningVi: 'Thức ăn, đồ ăn', meaningEn: 'food', wordType: 'noun', jlptLevel: 'N5', tags: ['ẩm thực', 'đời sống'] },
  { word: '飲み物', kana: 'のみもの', romaji: 'nomimono', meaningVi: 'Thức uống, đồ uống', meaningEn: 'beverage, drink', wordType: 'noun', jlptLevel: 'N5', tags: ['ẩm thực', 'đời sống'] },
  { word: '買い物', kana: 'かいもの', romaji: 'kaimono', meaningVi: 'Việc mua sắm', meaningEn: 'shopping', wordType: 'noun', jlptLevel: 'N5', tags: ['đời sống', 'mua sắm'] },
  { word: '動物', kana: 'どうぶつ', romaji: 'doubutsu', meaningVi: 'Động vật, muông thú', meaningEn: 'animal', wordType: 'noun', jlptLevel: 'N5', tags: ['tự nhiên', 'động vật'] },
  { word: '荷物', kana: 'にもつ', romaji: 'nimotsu', meaningVi: 'Hành lý, kiện hàng', meaningEn: 'luggage, baggage', wordType: 'noun', jlptLevel: 'N5', tags: ['du lịch', 'đời sống'] },

  // 本 (BẢN)
  { word: '日本', kana: 'にほん', romaji: 'nihon', meaningVi: 'Nước Nhật Bản', meaningEn: 'Japan', wordType: 'noun', jlptLevel: 'N5', tags: ['địa lý', 'quốc gia'] },
  { word: '本当', kana: 'ほんとう', romaji: 'hontou', meaningVi: 'Thật sự, sự thật', meaningEn: 'truth, reality', wordType: 'noun', jlptLevel: 'N5', tags: ['giao tiếp'] },

  // 論 (LUẬN)
  { word: '論文', kana: 'ろんぶん', romaji: 'ronbun', meaningVi: 'Luận văn, bài báo khoa học', meaningEn: 'thesis, paper', wordType: 'noun', jlptLevel: 'N2', tags: ['học thuật'] },
  { word: '議論', kana: 'ぎろん', romaji: 'giron', meaningVi: 'Thảo luận, tranh luận', meaningEn: 'argument, discussion', wordType: 'noun', jlptLevel: 'N2', tags: ['giao tiếp', 'học thuật'] },

  // 何 (HÀ)
  { word: '何時', kana: 'なんじ', romaji: 'nanji', meaningVi: 'Mấy giờ', meaningEn: 'what time', wordType: 'noun', jlptLevel: 'N5', tags: ['thời gian', 'câu hỏi'] },
  { word: '何度', kana: 'なんど', romaji: 'nando', meaningVi: 'Mấy lần, bao nhiêu độ', meaningEn: 'how many times, what degree', wordType: 'noun', jlptLevel: 'N4', tags: ['số đếm'] },

  // 来 (LAI)
  { word: '来年', kana: 'らいねん', romaji: 'rainen', meaningVi: 'Năm sau, năm tới', meaningEn: 'next year', wordType: 'noun', jlptLevel: 'N5', tags: ['thời gian'] },
  { word: '来週', kana: 'らいしゅう', romaji: 'raishuu', meaningVi: 'Tuần sau, tuần tới', meaningEn: 'next week', wordType: 'noun', jlptLevel: 'N5', tags: ['thời gian'] },
  { word: '未来', kana: 'みらい', romaji: 'mirai', meaningVi: 'Tương lai xa', meaningEn: 'distant future', wordType: 'noun', jlptLevel: 'N3', tags: ['thời gian', 'triết lý'] },

  // 見 (KIẾN)
  { word: '見る', kana: 'みる', romaji: 'miru', meaningVi: 'Xem, nhìn, ngắm', meaningEn: 'see, look, watch', wordType: 'verb', jlptLevel: 'N5', tags: ['hành động', 'đời sống'] },
  { word: '見学', kana: 'けんがく', romaji: 'kengaku', meaningVi: 'Tham quan học tập', meaningEn: 'study tour, field trip', wordType: 'noun', jlptLevel: 'N4', tags: ['giáo dục'] },
  { word: '意見', kana: 'いけん', romaji: 'iken', meaningVi: 'Ý kiến, quan điểm', meaningEn: 'opinion, view', wordType: 'noun', jlptLevel: 'N4', tags: ['giao tiếp', 'công việc'] },

  // 読 (ĐỘC)
  { word: '読む', kana: 'よむ', romaji: 'yomu', meaningVi: 'Đọc (sách, báo)', meaningEn: 'read', wordType: 'verb', jlptLevel: 'N5', tags: ['hành động', 'học tập'] },
  { word: '読書', kana: 'どくしょ', romaji: 'dokusho', meaningVi: 'Việc đọc sách', meaningEn: 'reading books', wordType: 'noun', jlptLevel: 'N4', tags: ['sở thích', 'học tập'] },

  // 旬 (TUẦN)
  { word: '上旬', kana: 'じょうじゅん', romaji: 'joujun', meaningVi: 'Thượng tuần (10 ngày đầu tháng)', meaningEn: 'first 10 days of month', wordType: 'noun', jlptLevel: 'N2', tags: ['thời gian', 'lịch'] },
  { word: '中旬', kana: 'ちゅうじゅん', romaji: 'chuujun', meaningVi: 'Trung tuần (10 ngày giữa tháng)', meaningEn: 'middle 10 days of month', wordType: 'noun', jlptLevel: 'N2', tags: ['thời gian', 'lịch'] },
  { word: '下旬', kana: 'げじゅん', romaji: 'gejun', meaningVi: 'Hạ tuần (10 ngày cuối tháng)', meaningEn: 'last 10 days of month', wordType: 'noun', jlptLevel: 'N2', tags: ['thời gian', 'lịch'] },

  // 汁 (TRẮP, CHI)
  { word: '味噌汁', kana: 'みそしる', romaji: 'misoshiru', meaningVi: 'Súp miso truyền thống', meaningEn: 'miso soup', wordType: 'noun', jlptLevel: 'N4', tags: ['ẩm thực', 'truyền thống'] },
  { word: '果汁', kana: 'かじゅう', romaji: 'kajuu', meaningVi: 'Nước ép hoa quả nguyên chất', meaningEn: 'fruit juice', wordType: 'noun', jlptLevel: 'N2', tags: ['ẩm thực'] },

  // 菜 (THÁI)
  { word: '野菜', kana: 'やさい', romaji: 'yasai', meaningVi: 'Rau củ quả', meaningEn: 'vegetable', wordType: 'noun', jlptLevel: 'N5', tags: ['ẩm thực', 'đời sống'] },
  { word: '白菜', kana: 'はくさい', romaji: 'hakusai', meaningVi: 'Cải thảo', meaningEn: 'Chinese cabbage', wordType: 'noun', jlptLevel: 'N3', tags: ['ẩm thực'] },

  // 箸 (TRỢ, TRỨ)
  { word: '箸', kana: 'はし', romaji: 'hashi', meaningVi: 'Đôi đũa ăn', meaningEn: 'chopsticks', wordType: 'noun', jlptLevel: 'N5', tags: ['ẩm thực', 'dụng cụ'] },
  { word: '割り箸', kana: 'わりばし', romaji: 'waribashi', meaningVi: 'Đũa gỗ dùng một lần', meaningEn: 'disposable chopsticks', wordType: 'noun', jlptLevel: 'N3', tags: ['ẩm thực', 'đời sống'] },

  // 酒 (TỬU)
  { word: 'お酒', kana: 'おさけ', romaji: 'osake', meaningVi: 'Rượu sake, đồ uống có cồn', meaningEn: 'alcoholic drink, sake', wordType: 'noun', jlptLevel: 'N5', tags: ['ẩm thực'] },
  { word: '日本酒', kana: 'にほんしゅ', romaji: 'nihonshu', meaningVi: 'Rượu truyền thống Nhật Bản', meaningEn: 'Japanese sake', wordType: 'noun', jlptLevel: 'N3', tags: ['văn hóa ẩm thực'] },

  // 杯 (BÔI)
  { word: '一杯', kana: 'いっぱい', romaji: 'ippai', meaningVi: 'Một ly, no căng / đầy ắp', meaningEn: 'one cup, full', wordType: 'adverb', jlptLevel: 'N5', tags: ['số lượng', 'đời sống'] },
  { word: '乾杯', kana: 'かんぱい', romaji: 'kanpai', meaningVi: 'Nâng ly, cạn chén!', meaningEn: 'cheers, toast', wordType: 'expression', jlptLevel: 'N4', tags: ['giao tiếp', 'ẩm thực'] },

  // 浴 (DỤC)
  { word: '入浴', kana: 'にゅうよく', romaji: 'nyuuyoku', meaningVi: 'Sự tắm rửa, tắm bồn onsen', meaningEn: 'bathing, taking a bath', wordType: 'noun', jlptLevel: 'N3', tags: ['văn hóa onsen', 'đời sống'] },
  { word: '浴びる', kana: 'あびる', romaji: 'abiru', meaningVi: 'Tắm (vòi sen), hứng chịu', meaningEn: 'take a shower, bathe in', wordType: 'verb', jlptLevel: 'N4', tags: ['đời sống'] },

  // 衣 (Y)
  { word: '衣服', kana: 'いふく', romaji: 'ifuku', meaningVi: 'Quần áo y phục', meaningEn: 'clothing, garments', wordType: 'noun', jlptLevel: 'N3', tags: ['trang phục'] },
  { word: '白衣', kana: 'はくい', romaji: 'hakui', meaningVi: 'Áo blouse trắng (bác sĩ, phòng thí nghiệm)', meaningEn: 'white lab coat', wordType: 'noun', jlptLevel: 'N2', tags: ['y tế'] },

  // 帯 (ĐỚI)
  { word: '時間帯', kana: 'じかんたい', romaji: 'jikantai', meaningVi: 'Khung giờ, khoảng thời gian', meaningEn: 'time zone, time slot', wordType: 'noun', jlptLevel: 'N2', tags: ['thời gian'] },
  { word: '携帯', kana: 'けいたい', romaji: 'keitai', meaningVi: 'Mang theo, điện thoại di động', meaningEn: 'mobile phone, portable', wordType: 'noun', jlptLevel: 'N4', tags: ['công nghệ', 'đời sống'] },

  // 祭 (TẾ)
  { word: '文化祭', kana: 'ぶんかさい', romaji: 'bunkasai', meaningVi: 'Lễ hội văn hóa trường học', meaningEn: 'school culture festival', wordType: 'noun', jlptLevel: 'N3', tags: ['trường học', 'lễ hội'] },
  { word: '学園祭', kana: 'がくえんさい', romaji: 'gakuensai', meaningVi: 'Lễ hội sinh viên đại học', meaningEn: 'campus festival', wordType: 'noun', jlptLevel: 'N2', tags: ['trường học', 'lễ hội'] },

  // 太 (THÁI)
  { word: '太い', kana: 'ふとい', romaji: 'futoi', meaningVi: 'Dày, béo, to bản', meaningEn: 'thick, fat', wordType: 'adjective', jlptLevel: 'N5', tags: ['mô tả'] },
  { word: '太陽', kana: 'たいよう', romaji: 'taiyou', meaningVi: 'Mặt trời, thái dương', meaningEn: 'sun, solar', wordType: 'noun', jlptLevel: 'N4', tags: ['thiên văn'] },

  // 鼓 (CỔ)
  { word: '鼓動', kana: 'こどう', romaji: 'kodou', meaningVi: 'Nhịp đập con tim, sự rung động', meaningEn: 'heartbeat, palpitation', wordType: 'noun', jlptLevel: 'N2', tags: ['cơ thể', 'cảm xúc'] },

  // 心 (TÂM)
  { word: '安心', kana: 'あんしん', romaji: 'anshin', meaningVi: 'An tâm, yên lòng', meaningEn: 'peace of mind, relief', wordType: 'noun', jlptLevel: 'N4', tags: ['cảm xúc'] },
  { word: '中心', kana: 'ちゅうしん', romaji: 'chuushin', meaningVi: 'Trung tâm, tiêu điểm', meaningEn: 'center, core', wordType: 'noun', jlptLevel: 'N3', tags: ['địa lý', 'không gian'] },

  // 働 (ĐỘNG)
  { word: '働く', kana: 'はたらく', romaji: 'hataraku', meaningVi: 'Làm việc, lao động', meaningEn: 'work, labor', wordType: 'verb', jlptLevel: 'N5', tags: ['công việc'] },
  { word: '労働', kana: 'ろうどう', romaji: 'roudou', meaningVi: 'Lao động', meaningEn: 'labor, manual work', wordType: 'noun', jlptLevel: 'N3', tags: ['công việc', 'xã hội'] },

  // 報 (BÁO)
  { word: '情報', kana: 'じょうほう', romaji: 'jouhou', meaningVi: 'Thông tin, tin tức', meaningEn: 'information, data', wordType: 'noun', jlptLevel: 'N4', tags: ['công nghệ', 'đời sống'] },
  { word: '天気予報', kana: 'てんきよほう', romaji: 'tenki yohou', meaningVi: 'Dự báo thời tiết', meaningEn: 'weather forecast', wordType: 'noun', jlptLevel: 'N4', tags: ['thời tiết', 'đời sống'] },

  // 連 (LIÊN)
  { word: '関連', kana: 'かんれん', romaji: 'kanren', meaningVi: 'Sự liên quan, mối liên hệ', meaningEn: 'connection, relation', wordType: 'noun', jlptLevel: 'N3', tags: ['học thuật', 'công việc'] },
  { word: '連れて行く', kana: 'つれていく', romaji: 'tsurete iku', meaningVi: 'Dẫn dắt ai đó đi cùng', meaningEn: 'take someone along', wordType: 'verb', jlptLevel: 'N4', tags: ['hành động'] },

  // 相 (TƯƠNG)
  { word: '相手', kana: 'あいて', romaji: 'aite', meaningVi: 'Đối phương, đối tác, người đối diện', meaningEn: 'partner, opponent', wordType: 'noun', jlptLevel: 'N4', tags: ['giao tiếp', 'xã hội'] },
  { word: '首相', kana: 'しゅしょう', romaji: 'shushou', meaningVi: 'Thủ tướng chính phủ', meaningEn: 'Prime Minister', wordType: 'noun', jlptLevel: 'N2', tags: ['chính trị'] },

  // 飲 (ẨM)
  { word: '飲む', kana: 'のむ', romaji: 'nomu', meaningVi: 'Uống (nước, thuốc)', meaningEn: 'drink, swallow', wordType: 'verb', jlptLevel: 'N5', tags: ['ẩm thực', 'đời sống'] },
  { word: '飲食店', kana: 'いんしょくてん', romaji: 'inshokuten', meaningVi: 'Nhà hàng, quán ăn uống', meaningEn: 'restaurant, eatery', wordType: 'noun', jlptLevel: 'N3', tags: ['ẩm thực', 'địa điểm'] },

  // 試 (THÍ)
  { word: '試験', kana: 'しけん', romaji: 'shiken', meaningVi: 'Kỳ thi, cuộc thi', meaningEn: 'exam, test', wordType: 'noun', jlptLevel: 'N5', tags: ['học tập', 'trường học'] },
  { word: '試合', kana: 'しあい', romaji: 'shiai', meaningVi: 'Trận thi đấu thể thao', meaningEn: 'match, game', wordType: 'noun', jlptLevel: 'N4', tags: ['thể thao'] },
  { word: '試す', kana: 'ためす', romaji: 'tamesu', meaningVi: 'Thử nghiệm, thử làm', meaningEn: 'try out, test', wordType: 'verb', jlptLevel: 'N3', tags: ['hành động'] },

  // 験 (NGHIỆM)
  { word: '経験', kana: 'けいけん', romaji: 'keiken', meaningVi: 'Kinh nghiệm bản thân', meaningEn: 'experience', wordType: 'noun', jlptLevel: 'N4', tags: ['đời sống', 'học tập'] },
  { word: '体験', kana: 'たいけん', romaji: 'taiken', meaningVi: 'Trải nghiệm thực tế', meaningEn: 'hands-on experience', wordType: 'noun', jlptLevel: 'N3', tags: ['du lịch', 'văn hóa'] },

  // 守 (THỦ)
  { word: '守る', kana: 'まもる', romaji: 'mamoru', meaningVi: 'Bảo vệ, tuân thủ (lời hứa, luật)', meaningEn: 'protect, keep a promise', wordType: 'verb', jlptLevel: 'N4', tags: ['hành động', 'đạo đức'] },
  { word: '見守る', kana: 'みまもる', romaji: 'mimamoru', meaningVi: 'Dõi theo, che chở', meaningEn: 'watch over, gaze at', wordType: 'verb', jlptLevel: 'N2', tags: ['tình cảm'] },

  // 居 (CƯ)
  { word: '居間', kana: 'いま', romaji: 'ima', meaningVi: 'Phòng khách gia đình', meaningEn: 'living room', wordType: 'noun', jlptLevel: 'N3', tags: ['nhà cửa'] },
  { word: '住居', kana: 'じゅうきょ', romaji: 'juukyo', meaningVi: 'Nơi cư trú, nhà ở', meaningEn: 'residence, housing', wordType: 'noun', jlptLevel: 'N2', tags: ['xã hội'] },

  // 乾 (KIỀN)
  { word: '乾く', kana: 'かわく', romaji: 'kawaku', meaningVi: 'Khô ráo', meaningEn: 'get dry', wordType: 'verb', jlptLevel: 'N4', tags: ['đời sống'] },
  { word: '乾かす', kana: 'かわかす', romaji: 'kawakasu', meaningVi: 'Phơi khô, sấy khô', meaningEn: 'dry clothes, blow-dry', wordType: 'verb', jlptLevel: 'N3', tags: ['đời sống'] },

  // 通 (THÔNG)
  { word: '通る', kana: 'とおる', romaji: 'tooru', meaningVi: 'Đi ngang qua, thông qua', meaningEn: 'pass by, go through', wordType: 'verb', jlptLevel: 'N4', tags: ['di chuyển'] },
  { word: '通う', kana: 'かよう', romaji: 'kayou', meaningVi: 'Đi lại thường xuyên (đi làm, đi học)', meaningEn: 'commute, attend', wordType: 'verb', jlptLevel: 'N4', tags: ['đời sống'] },
  { word: '普通', kana: 'ふつう', romaji: 'futsuu', meaningVi: 'Bình thường, thông thường', meaningEn: 'normal, ordinary', wordType: 'noun', jlptLevel: 'N4', tags: ['mô tả'] },

  // 割 (CÁT)
  { word: '割る', kana: 'わる', romaji: 'waru', meaningVi: 'Đập vỡ, chia rẽ', meaningEn: 'divide, break, smash', wordType: 'verb', jlptLevel: 'N3', tags: ['hành động'] },
  { word: '割合', kana: 'わりあい', romaji: 'wariai', meaningVi: 'Tỷ lệ, phần trăm', meaningEn: 'rate, ratio, proportion', wordType: 'noun', jlptLevel: 'N3', tags: ['toán học'] },
  { word: '割引', kana: 'わりびき', romaji: 'waribiki', meaningVi: 'Sự giảm giá, chiết khấu', meaningEn: 'discount', wordType: 'noun', jlptLevel: 'N3', tags: ['mua sắm'] },

  // 勘 (KHÁM)
  { word: '勘定', kana: 'かんじょう', romaji: 'kanjou', meaningVi: 'Thanh toán tiền, tính hóa đơn', meaningEn: 'bill, check, counting', wordType: 'noun', jlptLevel: 'N3', tags: ['mua sắm', 'nhà hàng'] },
  { word: '勘違い', kana: 'かんちがい', romaji: 'kanchigai', meaningVi: 'Sự hiểu lầm, phán đoán sai', meaningEn: 'misunderstanding, mistaken idea', wordType: 'noun', jlptLevel: 'N2', tags: ['giao tiếp'] },

  // 麺 (MIẾN)
  { word: '麺類', kana: 'めんるい', romaji: 'menrui', meaningVi: 'Các món mì sợi (ramen, udon, soba)', meaningEn: 'noodles, noodle dishes', wordType: 'noun', jlptLevel: 'N2', tags: ['ẩm thực'] },
  { word: 'ラーメン', kana: 'らーめん', romaji: 'raamen', meaningVi: 'Mì Ramen Nhật Bản', meaningEn: 'ramen noodles', wordType: 'noun', jlptLevel: 'N5', tags: ['ẩm thực'] },

  // 服 (PHỤC)
  { word: '洋服', kana: 'ようふく', romaji: 'youfuku', meaningVi: 'Quần áo kiểu Tây phương', meaningEn: 'Western-style clothes', wordType: 'noun', jlptLevel: 'N5', tags: ['trang phục'] },
  { word: '制服', kana: 'せいふく', romaji: 'seifuku', meaningVi: 'Đồng phục học sinh, công sở', meaningEn: 'uniform', wordType: 'noun', jlptLevel: 'N3', tags: ['trường học', 'công việc'] },

  // 花 (HOA)
  { word: '花', kana: 'はな', romaji: 'hana', meaningVi: 'Bông hoa', meaningEn: 'flower, blossom', wordType: 'noun', jlptLevel: 'N5', tags: ['tự nhiên'] },
  { word: '花見', kana: 'はなみ', romaji: 'hanami', meaningVi: 'Lễ hội ngắm hoa anh đào mùa xuân', meaningEn: 'cherry blossom viewing', wordType: 'noun', jlptLevel: 'N4', tags: ['văn hóa', 'bốn mùa'] },

  // 火 (HỎA)
  { word: '火曜日', kana: 'かようび', romaji: 'kayoubi', meaningVi: 'Thứ Ba trong tuần', meaningEn: 'Tuesday', wordType: 'noun', jlptLevel: 'N5', tags: ['thời gian', 'thứ'] },
  { word: '火', kana: 'ひ', romaji: 'hi', meaningVi: 'Lửa, ngọn lửa', meaningEn: 'fire, flame', wordType: 'noun', jlptLevel: 'N5', tags: ['tự nhiên'] },

  // 就 (TỰU)
  { word: '就職', kana: 'しゅうしょく', romaji: 'shuushoku', meaningVi: 'Việc tìm được việc làm, vào công ty', meaningEn: 'finding employment', wordType: 'noun', jlptLevel: 'N3', tags: ['nghề nghiệp'] },
  { word: '就任', kana: 'しゅうにん', romaji: 'shuunin', meaningVi: 'Sự nhậm chức, đảm nhiệm vị trí', meaningEn: 'inauguration, taking office', wordType: 'noun', jlptLevel: 'N2', tags: ['chính trị', 'công việc'] },

  // 職 (CHỨC)
  { word: '職業', kana: 'しょくぎょう', romaji: 'shokugyou', meaningVi: 'Nghề nghiệp, công việc chuyên môn', meaningEn: 'occupation, profession', wordType: 'noun', jlptLevel: 'N4', tags: ['nghề nghiệp'] },
  { word: '職場', kana: 'しょくば', romaji: 'shokuba', meaningVi: 'Nơi làm việc, công sở', meaningEn: 'workplace', wordType: 'noun', jlptLevel: 'N3', tags: ['công việc'] },

  // 動 (ĐỘNG)
  { word: '動く', kana: 'うごく', romaji: 'ugoku', meaningVi: 'Chuyển động, hoạt động', meaningEn: 'move, operate', wordType: 'verb', jlptLevel: 'N4', tags: ['hành động'] },
  { word: '運動', kana: 'うんどう', romaji: 'undou', meaningVi: 'Vận động thể thao, tập thể dục', meaningEn: 'exercise, physical training', wordType: 'noun', jlptLevel: 'N4', tags: ['thể thao', 'sức khỏe'] },
  { word: '自動車', kana: 'じどうしゃ', romaji: 'jidousha', meaningVi: 'Xe ô tô, xe hơi', meaningEn: 'automobile, car', wordType: 'noun', jlptLevel: 'N5', tags: ['giao thông'] },

  // 面 (DIỆN)
  { word: '面白い', kana: 'おもしろい', romaji: 'omoshiroi', meaningVi: 'Thú vị, hấp dẫn, vui vẻ', meaningEn: 'interesting, amusing', wordType: 'adjective', jlptLevel: 'N5', tags: ['cảm xúc'] },
  { word: '方面', kana: 'ほうめん', romaji: 'houmen', meaningVi: 'Phương diện, hướng đi', meaningEn: 'direction, area, field', wordType: 'noun', jlptLevel: 'N3', tags: ['không gian'] },

  // 接 (TIẾP)
  { word: '直接', kana: 'ちょくせつ', romaji: 'chokusetsu', meaningVi: 'Trực tiếp', meaningEn: 'direct, immediate', wordType: 'adverb', jlptLevel: 'N3', tags: ['giao tiếp'] },
  { word: '接近', kana: 'せっきん', romaji: 'sekkin', meaningVi: 'Tiếp cận, đến gần', meaningEn: 'approaching, getting close', wordType: 'noun', jlptLevel: 'N2', tags: ['hành động'] },

  // 歴 (LỊCH)
  { word: '歴史', kana: 'れきし', romaji: 'rekishi', meaningVi: 'Lịch sử', meaningEn: 'history', wordType: 'noun', jlptLevel: 'N4', tags: ['xã hội', 'học thuật'] },
  { word: '学歴', kana: 'がくれき', romaji: 'gakureki', meaningVi: 'Trình độ học vấn, lý lịch học tập', meaningEn: 'academic background', wordType: 'noun', jlptLevel: 'N2', tags: ['giáo dục'] },

  // 清 (THANH)
  { word: '清い', kana: 'きよい', romaji: 'kiyoi', meaningVi: 'Trong sạch, thuần khiết', meaningEn: 'clean, pure, noble', wordType: 'adjective', jlptLevel: 'N3', tags: ['tính chất'] },
  { word: '清掃', kana: 'せいそう', romaji: 'seisou', meaningVi: 'Sự dọn dẹp vệ sinh sạch sẽ', meaningEn: 'cleaning, sweeping', wordType: 'noun', jlptLevel: 'N2', tags: ['đời sống'] },

  // 潔 (KHIẾT)
  { word: '清潔', kana: 'せいけつ', romaji: 'seiketsu', meaningVi: 'Sạch sẽ, vệ sinh', meaningEn: 'clean, sanitary', wordType: 'adjective', jlptLevel: 'N3', tags: ['tính chất', 'sức khỏe'] },
  { word: '潔白', kana: 'けっぱく', romaji: 'keppaku', meaningVi: 'Trong sạch, liêm khiết, vô tội', meaningEn: 'innocence, spotless', wordType: 'noun', jlptLevel: 'N1', tags: ['phẩm chất'] },

  // 内 (NỘI)
  { word: '案内', kana: 'あんない', romaji: 'annai', meaningVi: 'Sự hướng dẫn, chỉ dẫn đường', meaningEn: 'guidance, leading the way', wordType: 'noun', jlptLevel: 'N4', tags: ['hành động', 'du lịch'] },
  { word: '国内', kana: 'こくない', romaji: 'kokunai', meaningVi: 'Trong nước, nội địa', meaningEn: 'domestic, internal', wordType: 'noun', jlptLevel: 'N4', tags: ['địa lý'] },

  // 定 (ĐỊNH)
  { word: '予定', kana: 'よてい', romaji: 'yotei', meaningVi: 'Dự định, lịch trình kế hoạch', meaningEn: 'schedule, plan', wordType: 'noun', jlptLevel: 'N4', tags: ['thời gian', 'công việc'] },
  { word: '定食', kana: 'ていしょく', romaji: 'teishoku', meaningVi: 'Cơm phần, suất cơm định sẵn', meaningEn: 'set meal, combo', wordType: 'noun', jlptLevel: 'N4', tags: ['ẩm thực'] },

  // 台 (ĐÀI)
  { word: '台所', kana: 'だいどころ', romaji: 'daidokoro', meaningVi: 'Nhà bếp', meaningEn: 'kitchen', wordType: 'noun', jlptLevel: 'N5', tags: ['nhà cửa'] },
  { word: '台風', kana: 'たいふう', romaji: 'taifuu', meaningVi: 'Cơn bão nhiệt đới', meaningEn: 'typhoon', wordType: 'noun', jlptLevel: 'N4', tags: ['thời tiết', 'tự nhiên'] },

  // 絆 (BÁN)
  { word: '家族の絆', kana: 'かぞくのきずな', romaji: 'kazoku no kizuna', meaningVi: 'Sợi dây gắn kết gia đình bền chặt', meaningEn: 'family bonds', wordType: 'noun', jlptLevel: 'N2', tags: ['gia đình', 'văn hóa'] },

  // 慮 (LỰ)
  { word: '遠慮', kana: 'えんりょ', romaji: 'enryo', meaningVi: 'Sự khách khí, ngần ngại, e dè', meaningEn: 'hesitation, restraint', wordType: 'noun', jlptLevel: 'N4', tags: ['giao tiếp', 'văn hóa'] },
  { word: '考慮', kana: 'こうりょ', romaji: 'kouryo', meaningVi: 'Sự cân nhắc, suy xét thấu đáo', meaningEn: 'consideration, taking into account', wordType: 'noun', jlptLevel: 'N2', tags: ['công việc'] },

  // 丁 (ĐINH)
  { word: '丁度', kana: 'ちょうど', romaji: 'choudo', meaningVi: 'Vừa vặn, đúng lúc, vừa khớp', meaningEn: 'exactly, just right', wordType: 'adverb', jlptLevel: 'N5', tags: ['thời gian', 'mô tả'] },

  // 寧 (NINH)
  { word: '安寧', kana: 'あんねい', romaji: 'annei', meaningVi: 'Thái bình, an ninh trật tự', meaningEn: 'peace, tranquility', wordType: 'noun', jlptLevel: 'N1', tags: ['xã hội'] },

  // 給 (CẤP)
  { word: '給料', kana: 'きゅうりょう', romaji: 'kyuuryou', meaningVi: 'Tiền lương hàng tháng', meaningEn: 'salary, wages', wordType: 'noun', jlptLevel: 'N4', tags: ['công việc', 'kinh tế'] },
  { word: '月給', kana: 'げっきゅう', romaji: 'gekkyuu', meaningVi: 'Lương cố định theo tháng', meaningEn: 'monthly salary', wordType: 'noun', jlptLevel: 'N3', tags: ['công việc'] },

  // 掃 (TẢO)
  { word: '掃く', kana: 'はく', romaji: 'haku', meaningVi: 'Quét (nhà, rác, sân)', meaningEn: 'sweep', wordType: 'verb', jlptLevel: 'N3', tags: ['đời sống'] },

  // 除 (TRỪ)
  { word: '除く', kana: 'のぞく', romaji: 'nozoku', meaningVi: 'Loại bỏ, loại trừ ra', meaningEn: 'remove, exclude', wordType: 'verb', jlptLevel: 'N3', tags: ['hành động'] },
  { word: '削除', kana: 'さくじょ', romaji: 'sakujo', meaningVi: 'Xóa bỏ (dữ liệu, bài viết)', meaningEn: 'deletion, elimination', wordType: 'noun', jlptLevel: 'N2', tags: ['công nghệ'] },

  // 後 (HẬU)
  { word: '後ろ', kana: 'うしろ', romaji: 'ushiro', meaningVi: 'Phía sau, đằng sau', meaningEn: 'behind, back', wordType: 'noun', jlptLevel: 'N5', tags: ['vị trí'] },
  { word: '午後', kana: 'ごご', romaji: 'gogo', meaningVi: 'Buổi chiều (sau 12h trưa, PM)', meaningEn: 'afternoon, P.M.', wordType: 'noun', jlptLevel: 'N5', tags: ['thời gian'] },

  // 受 (THỤ)
  { word: '受ける', kana: 'うける', romaji: 'ukeru', meaningVi: 'Nhận lấy, tiếp nhận, dự thi', meaningEn: 'receive, catch, take (a test)', wordType: 'verb', jlptLevel: 'N4', tags: ['hành động'] },
  { word: '受付', kana: 'うけつけ', romaji: 'uketsuke', meaningVi: 'Quầy lễ tân tiếp đón', meaningEn: 'reception desk', wordType: 'noun', jlptLevel: 'N4', tags: ['địa điểm', 'công sở'] },

  // 塾 (THỤC)
  { word: '学習塾', kana: 'がくしゅうじゅく', romaji: 'gakushuujuku', meaningVi: 'Trung tâm bồi dưỡng kiến thức, trường phụ đạo', meaningEn: 'cram school, tutoring school', wordType: 'noun', jlptLevel: 'N2', tags: ['giáo dục'] },

  // 格 (CÁCH)
  { word: '性格', kana: 'せいかく', romaji: 'seikaku', meaningVi: 'Tính cách, phẩm chất con người', meaningEn: 'personality, character', wordType: 'noun', jlptLevel: 'N4', tags: ['con người'] },
  { word: '資格', kana: 'しかく', romaji: 'shikaku', meaningVi: 'Tư cách, chứng chỉ chuyên môn', meaningEn: 'qualification, license', wordType: 'noun', jlptLevel: 'N3', tags: ['nghề nghiệp'] },

  // 絵 (HỘI)
  { word: '絵', kana: 'え', romaji: 'e', meaningVi: 'Bức tranh vẽ', meaningEn: 'picture, painting, drawing', wordType: 'noun', jlptLevel: 'N5', tags: ['nghệ thuật'] },
  { word: '絵本', kana: 'えほん', romaji: 'ehon', meaningVi: 'Sách truyện tranh cho thiếu nhi', meaningEn: 'picture book', wordType: 'noun', jlptLevel: 'N3', tags: ['sách'] },

  // 馬 (MÃ)
  { word: '馬', kana: 'うま', romaji: 'uma', meaningVi: 'Con ngựa', meaningEn: 'horse', wordType: 'noun', jlptLevel: 'N4', tags: ['động vật'] },
  { word: '乗馬', kana: 'じょうば', romaji: 'jouba', meaningVi: 'Môn cưỡi ngựa', meaningEn: 'horseback riding', wordType: 'noun', jlptLevel: 'N2', tags: ['thể thao'] },

  // 努 (NỖ)
  { word: '努める', kana: 'つとめる', romaji: 'tsutomeru', meaningVi: 'Nỗ lực, gắng sức làm điều gì', meaningEn: 'make an effort, strive', wordType: 'verb', jlptLevel: 'N3', tags: ['hành động'] },

  // 力 (LỰC)
  { word: '力', kana: 'ちから', romaji: 'chikara', meaningVi: 'Sức lực, sức mạnh', meaningEn: 'power, strength', wordType: 'noun', jlptLevel: 'N4', tags: ['năng lực'] },
  { word: '能力', kana: 'のうりょく', romaji: 'nouryoku', meaningVi: 'Năng lực, khả năng', meaningEn: 'ability, capacity', wordType: 'noun', jlptLevel: 'N3', tags: ['học tập', 'công việc'] },

  // 告 (CÁO)
  { word: '広告', kana: 'こうこく', romaji: 'koukoku', meaningVi: 'Bài quảng cáo', meaningEn: 'advertisement', wordType: 'noun', jlptLevel: 'N3', tags: ['kinh doanh', 'truyền thông'] },

  // 絡 (LẠC)
  { word: '絡む', kana: 'からむ', romaji: 'karamu', meaningVi: 'Vướng vào, dính dáng tới', meaningEn: 'get entangled, involve', wordType: 'verb', jlptLevel: 'N2', tags: ['hành động'] },

  // 談 (ĐÀM)
  { word: '対談', kana: 'たいだん', romaji: 'taidan', meaningVi: 'Cuộc đàm đạo, trò chuyện tay đôi', meaningEn: 'dialogue, conversation', wordType: 'noun', jlptLevel: 'N2', tags: ['giao tiếp'] },

  // 納 (NẠP)
  { word: '納品', kana: 'のうひん', romaji: 'nouhin', meaningVi: 'Việc giao hàng hóa cho khách', meaningEn: 'delivery of goods', wordType: 'noun', jlptLevel: 'N2', tags: ['kinh doanh', 'công việc'] },
  { word: '納得', kana: 'なっとく', romaji: 'nattoku', meaningVi: 'Sự thấu hiểu, đồng ý, tâm phục', meaningEn: 'consent, understanding', wordType: 'noun', jlptLevel: 'N3', tags: ['cảm xúc'] },

  // 共 (CỘNG)
  { word: '共同', kana: 'きょうどう', romaji: 'kyoudou', meaningVi: 'Sự cùng làm, chung, hợp tác', meaningEn: 'cooperation, joint', wordType: 'noun', jlptLevel: 'N3', tags: ['xã hội'] },
  { word: '共通', kana: 'きょうつう', romaji: 'kyoutsuu', meaningVi: 'Điểm chung, dùng chung', meaningEn: 'common, mutual', wordType: 'noun', jlptLevel: 'N3', tags: ['xã hội'] },

  // 有 (HỮU)
  { word: '有名', kana: 'ゆうめい', romaji: 'yuumei', meaningVi: 'Nổi tiếng, trứ danh', meaningEn: 'famous, well-known', wordType: 'adjective', jlptLevel: 'N5', tags: ['tính chất'] },
  { word: '有料', kana: 'ゆうりょう', romaji: 'yuuryou', meaningVi: 'Có thu phí, tính tiền', meaningEn: 'fee-charging, paid', wordType: 'noun', jlptLevel: 'N3', tags: ['kinh tế'] },

  // 司 (TI)
  { word: '司会', kana: 'しかい', romaji: 'shikai', meaningVi: 'Chủ trì cuộc họp, MC dẫn chương trình', meaningEn: 'master of ceremonies, host', wordType: 'noun', jlptLevel: 'N2', tags: ['công việc', 'truyền thông'] },

  // 僚 (LIÊU)
  { word: '官僚', kana: 'かんりょう', romaji: 'kanryou', meaningVi: 'Quan chức chính phủ, quan chức cấp cao', meaningEn: 'bureaucrat', wordType: 'noun', jlptLevel: 'N1', tags: ['chính trị'] },

  // 労 (LAO)
  { word: '苦労', kana: 'くろう', romaji: 'kurou', meaningVi: 'Sự gian nan, vất vả, khó nhọc', meaningEn: 'hardship, toil, troubles', wordType: 'noun', jlptLevel: 'N3', tags: ['đời sống'] },
  { word: '疲労', kana: 'ひろう', romaji: 'hirou', meaningVi: 'Sự mệt mỏi, kiệt sức', meaningEn: 'fatigue, exhaustion', wordType: 'noun', jlptLevel: 'N2', tags: ['sức khỏe'] },

  // 次 (THỨ)
  { word: '次', kana: 'つぎ', romaji: 'tsugi', meaningVi: 'Tiếp theo, kế tiếp', meaningEn: 'next, subsequent', wordType: 'noun', jlptLevel: 'N5', tags: ['thời gian', 'thứ tự'] },
  { word: '目次', kana: 'もくじ', romaji: 'mokuji', meaningVi: 'Mục lục cuốn sách', meaningEn: 'table of contents', wordType: 'noun', jlptLevel: 'N3', tags: ['sách'] },

  // 尊 (TÔN)
  { word: '尊重', kana: 'そんちょう', romaji: 'sonchou', meaningVi: 'Sự tôn trọng, coi trọng', meaningEn: 'respect, esteem', wordType: 'noun', jlptLevel: 'N2', tags: ['đạo đức', 'xã hội'] },
  { word: '尊敬', kana: 'そんけい', romaji: 'sonkei', meaningVi: 'Sự tôn kính, kính trọng bậc trên', meaningEn: 'respect, reverence', wordType: 'noun', jlptLevel: 'N3', tags: ['giao tiếp', 'đạo đức'] },

  // 謙 (KHIÊM)
  { word: '謙虚', kana: 'けんきょ', romaji: 'kenkyo', meaningVi: 'Khiêm tốn, biết điều', meaningEn: 'modest, humble', wordType: 'adjective', jlptLevel: 'N2', tags: ['phẩm chất'] },
  { word: '謙遜', kana: 'けんそん', romaji: 'kenson', meaningVi: 'Sự nhún nhường, khiêm tốn', meaningEn: 'humility, modesty', wordType: 'noun', jlptLevel: 'N1', tags: ['phẩm chất'] },

  // 譲 (NHƯỢNG)
  { word: '譲る', kana: 'ゆずる', romaji: 'yuzuru', meaningVi: 'Nhường (ghế, quyền lợi), bàn giao', meaningEn: 'yield, hand over, give up', wordType: 'verb', jlptLevel: 'N3', tags: ['hành động', 'đạo đức'] },

  // 世 (THẾ)
  { word: '世界', kana: 'せかい', romaji: 'sekai', meaningVi: 'Thế giới, toàn cầu', meaningEn: 'world, globe', wordType: 'noun', jlptLevel: 'N4', tags: ['địa lý', 'xã hội'] },
  { word: '世代', kana: 'せだい', romaji: 'sedai', meaningVi: 'Thế hệ con người', meaningEn: 'generation', wordType: 'noun', jlptLevel: 'N2', tags: ['xã hội'] },

  // 話 (THOẠI)
  { word: '話す', kana: 'はなす', romaji: 'hanasu', meaningVi: 'Nói chuyện, kể chuyện', meaningEn: 'speak, talk, tell', wordType: 'verb', jlptLevel: 'N5', tags: ['giao tiếp'] },
  { word: '電話', kana: 'でんわ', romaji: 'denwa', meaningVi: 'Điện thoại, cuộc gọi', meaningEn: 'telephone, phone call', wordType: 'noun', jlptLevel: 'N5', tags: ['công nghệ', 'đời sống'] },
  { word: '会話', kana: 'かいわ', romaji: 'kaiwa', meaningVi: 'Cuộc trò chuyện, hội thoại', meaningEn: 'conversation', wordType: 'noun', jlptLevel: 'N4', tags: ['giao tiếp'] },

  // 恐 (KHỦNG)
  { word: '恐ろしい', kana: 'おそろしい', romaji: 'osoroshii', meaningVi: 'Đáng sợ, ghê rợn', meaningEn: 'terrible, dreadful', wordType: 'adjective', jlptLevel: 'N3', tags: ['cảm xúc'] },
  { word: '恐竜', kana: 'きょうりゅう', romaji: 'kyouryuu', meaningVi: 'Khủng long thời cổ đại', meaningEn: 'dinosaur', wordType: 'noun', jlptLevel: 'N3', tags: ['sinh vật'] },

  // 縮 (SÚC)
  { word: '縮む', kana: 'ちぢむ', romaji: 'chijimu', meaningVi: 'Co lại, rút ngắn lại', meaningEn: 'shrink, contract', wordType: 'verb', jlptLevel: 'N3', tags: ['hành động'] },
  { word: '短縮', kana: 'たんしゅく', romaji: 'tanshuku', meaningVi: 'Sự rút ngắn thời gian/quãng đường', meaningEn: 'shortening, reduction', wordType: 'noun', jlptLevel: 'N2', tags: ['thời gian'] },

  // 語
  { word: '日本語', kana: 'にほんご', romaji: 'nihongo', meaningVi: 'Tiếng Nhật', meaningEn: 'Japanese language', wordType: 'noun', jlptLevel: 'N5', tags: ['ngôn ngữ'] },
  { word: '単語', kana: 'たんご', romaji: 'tango', meaningVi: 'Từ vựng, từ ngữ', meaningEn: 'vocabulary word', wordType: 'noun', jlptLevel: 'N5', tags: ['ngôn ngữ', 'học tập'] },

  // 先
  { word: '先輩', kana: 'せんぱい', romaji: 'senpai', meaningVi: 'Tiền bối, đàn anh đàn chị', meaningEn: 'senior', wordType: 'noun', jlptLevel: 'N4', tags: ['xã hội', 'trường học'] },
  { word: '先月', kana: 'せんげつ', romaji: 'sengetsu', meaningVi: 'Tháng trước', meaningEn: 'last month', wordType: 'noun', jlptLevel: 'N5', tags: ['thời gian'] },

  // 頭
  { word: '先頭', kana: 'せんとう', romaji: 'sentou', meaningVi: 'Dẫn đầu, đi đầu', meaningEn: 'head, lead', wordType: 'noun', jlptLevel: 'N3', tags: ['vị trí'] },
  { word: '頭痛', kana: 'ずつう', romaji: 'zutsuu', meaningVi: 'Đau đầu, nhức đầu', meaningEn: 'headache', wordType: 'noun', jlptLevel: 'N4', tags: ['sức khỏe'] },

  // 影
  { word: '撮影', kana: 'さつえい', romaji: 'satsuei', meaningVi: 'Quay phim, chụp ảnh', meaningEn: 'filming, photography', wordType: 'noun', jlptLevel: 'N3', tags: ['nghệ thuật'] },
  { word: '人影', kana: 'ひとかげ', romaji: 'hitokage', meaningVi: 'Bóng dáng người', meaningEn: 'figure of a person, shadow', wordType: 'noun', jlptLevel: 'N2', tags: ['đời sống'] },

  // 術
  { word: '手術', kana: 'しゅじゅつ', romaji: 'shujutsu', meaningVi: 'Phẫu thuật, mổ', meaningEn: 'surgery, operation', wordType: 'noun', jlptLevel: 'N4', tags: ['y tế'] },
  { word: '美術', kana: 'びじゅつ', romaji: 'bijutsu', meaningVi: 'Mỹ thuật, hội họa', meaningEn: 'fine arts, art', wordType: 'noun', jlptLevel: 'N4', tags: ['nghệ thuật'] },

  // 役
  { word: '役立つ', kana: 'やくだつ', romaji: 'yakudatsu', meaningVi: 'Hữu ích, có ích', meaningEn: 'be useful, be helpful', wordType: 'verb', jlptLevel: 'N3', tags: ['đời sống'] },
  { word: '役所', kana: 'やくしょ', romaji: 'yakusho', meaningVi: 'Cơ quan công quyền, ủy ban', meaningEn: 'government office', wordType: 'noun', jlptLevel: 'N3', tags: ['xã hội'] },

  // 値
  { word: '価値', kana: 'かち', romaji: 'kachi', meaningVi: 'Giá trị', meaningEn: 'value, worth', wordType: 'noun', jlptLevel: 'N3', tags: ['kinh tế', 'triết lý'] },
  { word: '値上げ', kana: 'ねあげ', romaji: 'neage', meaningVi: 'Sự tăng giá hàng hóa', meaningEn: 'price increase', wordType: 'noun', jlptLevel: 'N3', tags: ['kinh tế'] },

  // 検
  { word: '検査', kana: 'けんさ', romaji: 'kensa', meaningVi: 'Kiểm tra, xét nghiệm', meaningEn: 'inspection, examination', wordType: 'noun', jlptLevel: 'N3', tags: ['y tế', 'kỹ thuật'] },
  { word: '検索', kana: 'けんさく', romaji: 'kensaku', meaningVi: 'Tìm kiếm, tra cứu', meaningEn: 'search, lookup', wordType: 'noun', jlptLevel: 'N3', tags: ['công nghệ'] },

  // 討
  { word: '討論', kana: 'とうろん', romaji: 'touron', meaningVi: 'Tranh luận, thảo luận', meaningEn: 'debate, discussion', wordType: 'noun', jlptLevel: 'N2', tags: ['học thuật'] },
  { word: '討議', kana: 'とうぎ', romaji: 'tougi', meaningVi: 'Bàn bạc, thảo nghị', meaningEn: 'deliberation', wordType: 'noun', jlptLevel: 'N1', tags: ['công việc'] },

  // 済
  { word: '経済', kana: 'けいざい', romaji: 'keizai', meaningVi: 'Kinh tế', meaningEn: 'economy', wordType: 'noun', jlptLevel: 'N4', tags: ['kinh tế', 'xã hội'] },
  { word: '返済', kana: 'へんさい', romaji: 'hensai', meaningVi: 'Trả nợ, hoàn trả tiền vay', meaningEn: 'repayment', wordType: 'noun', jlptLevel: 'N2', tags: ['tài chính'] },

  // 政
  { word: '政治', kana: 'せいじ', romaji: 'seiji', meaningVi: 'Chính trị', meaningEn: 'politics', wordType: 'noun', jlptLevel: 'N4', tags: ['chính trị'] },
  { word: '政策', kana: 'せいさく', romaji: 'seisaku', meaningVi: 'Chính sách nhà nước', meaningEn: 'policy', wordType: 'noun', jlptLevel: 'N2', tags: ['chính trị', 'xã hội'] },

  // 治
  { word: '治療', kana: 'ちりょう', romaji: 'chiryou', meaningVi: 'Điều trị y tế, chữa bệnh', meaningEn: 'treatment, cure', wordType: 'noun', jlptLevel: 'N3', tags: ['y tế'] },
  { word: '治安', kana: 'ちあん', romaji: 'chian', meaningVi: 'Trật tự an ninh xã hội', meaningEn: 'public order', wordType: 'noun', jlptLevel: 'N2', tags: ['xã hội'] },

  // 関
  { word: '関係', kana: 'かんけい', romaji: 'kankei', meaningVi: 'Mối quan hệ, liên quan', meaningEn: 'relationship, connection', wordType: 'noun', jlptLevel: 'N4', tags: ['xã hội', 'giao tiếp'] },
  { word: '玄関', kana: 'げんかん', romaji: 'genkan', meaningVi: 'Tiền sảnh, cửa vào nhà', meaningEn: 'entrance hall', wordType: 'noun', jlptLevel: 'N5', tags: ['nhà cửa'] },

  // 係
  { word: '係員', kana: 'かかりいん', romaji: 'kakariin', meaningVi: 'Nhân viên phụ trách, người phụ trách', meaningEn: 'person in charge, clerk', wordType: 'noun', jlptLevel: 'N3', tags: ['công việc'] },

  // 企
  { word: '企画', kana: 'きかく', romaji: 'kikaku', meaningVi: 'Kế hoạch dự án, quy hoạch', meaningEn: 'planning, project', wordType: 'noun', jlptLevel: 'N2', tags: ['công việc'] },

  // 績
  { word: '成績', kana: 'せいせき', romaji: 'seiseki', meaningVi: 'Thành tích học tập, điểm số', meaningEn: 'grades, marks', wordType: 'noun', jlptLevel: 'N4', tags: ['học tập', 'trường học'] },

  // 約
  { word: '約束', kana: 'やくそく', romaji: 'yakusoku', meaningVi: 'Lời hứa, hẹn ước', meaningEn: 'promise, appointment', wordType: 'noun', jlptLevel: 'N5', tags: ['giao tiếp'] },

  // 整
  { word: '整理', kana: 'せいり', romaji: 'seiri', meaningVi: 'Chỉnh lý, sắp xếp gọn gàng', meaningEn: 'sorting, arrangement', wordType: 'noun', jlptLevel: 'N3', tags: ['đời sống'] },

  // 責
  { word: '責める', kana: 'せめる', romaji: 'semeru', meaningVi: 'Khiển trách, đổ lỗi', meaningEn: 'blame, criticize', wordType: 'verb', jlptLevel: 'N3', tags: ['giao tiếp'] },

  // 誠
  { word: '誠実', kana: 'せいじつ', romaji: 'seijitsu', meaningVi: 'Thành thực, chân thành, đứng đắn', meaningEn: 'sincere, honest', wordType: 'adjective', jlptLevel: 'N2', tags: ['phẩm chất'] },

  // 礼
  { word: 'お礼', kana: 'おれい', romaji: 'orei', meaningVi: 'Lời cảm ơn, quà tạ ơn', meaningEn: 'gratitude, thank-you gift', wordType: 'noun', jlptLevel: 'N4', tags: ['giao tiếp'] },

  // 災
  { word: '火災', kana: 'かさい', romaji: 'kasai', meaningVi: 'Hỏa hoạn, đám cháy', meaningEn: 'fire disaster', wordType: 'noun', jlptLevel: 'N3', tags: ['tai họa'] },

  // 戒
  { word: '訓戒', kana: 'くんかい', romaji: 'kunkai', meaningVi: 'Lời răn dạy, khuyên can', meaningEn: 'admonition, warning', wordType: 'noun', jlptLevel: 'N1', tags: ['giáo dục'] },

  // 避
  { word: '避ける', kana: 'さける', romaji: 'sakeru', meaningVi: 'Tránh né, né khỏi rủi ro', meaningEn: 'avoid, dodge', wordType: 'verb', jlptLevel: 'N3', tags: ['hành động'] },

  // 難
  { word: '困難', kana: 'こんなん', romaji: 'konnan', meaningVi: 'Khó khăn, gian nan trắc trở', meaningEn: 'difficulty, hardship', wordType: 'adjective', jlptLevel: 'N3', tags: ['đời sống'] },

  // 復
  { word: '回復', kana: 'かいふく', romaji: 'kaifuku', meaningVi: 'Hồi phục sức khỏe, khôi phục', meaningEn: 'recovery, restoration', wordType: 'noun', jlptLevel: 'N3', tags: ['sức khỏe'] },

  // 旧
  { word: '旧型', kana: 'きゅうがた', romaji: 'kyuugata', meaningVi: 'Mẫu cũ, dòng máy đời cũ', meaningEn: 'old model, old type', wordType: 'noun', jlptLevel: 'N2', tags: ['công nghệ'] },

  // 防
  { word: '消防', kana: 'しょうぼう', romaji: 'shoubou', meaningVi: 'Cứu hỏa, phòng cháy chữa cháy', meaningEn: 'firefighting', wordType: 'noun', jlptLevel: 'N3', tags: ['an toàn'] },

  // 被
  { word: '被災', kana: 'ひさい', romaji: 'hisai', meaningVi: 'Bị nạn, chịu ảnh hưởng thiên tai', meaningEn: 'suffering disaster', wordType: 'noun', jlptLevel: 'N2', tags: ['xã hội'] },

  // 克
  { word: '克己', kana: 'こっき', romaji: 'kokki', meaningVi: 'Khắc kỷ, tự chủ bản thân', meaningEn: 'self-control, self-denial', wordType: 'noun', jlptLevel: 'N1', tags: ['triết lý'] },

  // 拠
  { word: '証拠', kana: 'しょうこ', romaji: 'shouko', meaningVi: 'Chứng cứ, bằng chứng xác thực', meaningEn: 'evidence, proof', wordType: 'noun', jlptLevel: 'N3', tags: ['pháp luật'] },

  // 概
  { word: '大概', kana: 'たいがい', romaji: 'taigai', meaningVi: 'Đại khái, phần lớn, hầu hết', meaningEn: 'generally, mostly', wordType: 'adverb', jlptLevel: 'N2', tags: ['đời sống'] },

  // 偏
  { word: '偏る', kana: 'かたよる', romaji: 'katayoru', meaningVi: 'Nghiêng về một phía, lệch lạc', meaningEn: 'lean, be biased', wordType: 'verb', jlptLevel: 'N2', tags: ['đời sống'] },

  // 盾
  { word: '後盾', kana: 'うしろだて', romaji: 'ushirodate', meaningVi: 'Hậu thuẫn, chỗ dựa lưng', meaningEn: 'backing, supporter', wordType: 'noun', jlptLevel: 'N1', tags: ['xã hội'] },

  // 倫
  { word: '不倫', kana: 'ふりん', romaji: 'furin', meaningVi: 'Ngoại tình, phi luân', meaningEn: 'adultery, affair', wordType: 'noun', jlptLevel: 'N1', tags: ['xã hội'] },

  // 遍
  { word: '普遍的', kana: 'ふへんてき', romaji: 'fuhenteki', meaningVi: 'Mang tính phổ biến, phổ quát', meaningEn: 'universal', wordType: 'adjective', jlptLevel: 'N1', tags: ['triết lý'] },

  // 葛
  { word: '葛湯', kana: 'くずゆ', romaji: 'kuzuyu', meaningVi: 'Nước bột sắn dây ấm', meaningEn: 'arrowroot tea', wordType: 'noun', jlptLevel: 'N1', tags: ['ẩm thực'] },

  // 藤
  { word: '藤色', kana: 'ふじいろ', romaji: 'fujiiro', meaningVi: 'Màu tím hoa tử đằng', meaningEn: 'wisteria color, light purple', wordType: 'noun', jlptLevel: 'N1', tags: ['màu sắc'] },

  // 宿
  { word: '宿題', kana: 'しゅくだい', romaji: 'shukudai', meaningVi: 'Bài tập về nhà', meaningEn: 'homework', wordType: 'noun', jlptLevel: 'N5', tags: ['học tập', 'trường học'] },

  // 命
  { word: '生命', kana: 'せいめい', romaji: 'seimei', meaningVi: 'Sinh mệnh, sự sống', meaningEn: 'life, existence', wordType: 'noun', jlptLevel: 'N3', tags: ['sinh học', 'triết lý'] },

  // 洞
  { word: '空洞', kana: 'くうどう', romaji: 'kuudou', meaningVi: 'Hang rỗng, lỗ hổng bên trong', meaningEn: 'cavity, hollow', wordType: 'noun', jlptLevel: 'N1', tags: ['khoa học'] },

  // 索
  { word: '探索', kana: 'たんさく', romaji: 'tansaku', meaningVi: 'Thám hiểm, thăm dò, truy tìm', meaningEn: 'exploration, search', wordType: 'noun', jlptLevel: 'N2', tags: ['khoa học'] },

  // 極
  { word: '積極的', kana: 'せっきょくてき', romaji: 'sekkyokuteki', meaningVi: 'Tích cực, chủ động', meaningEn: 'positive, proactive', wordType: 'adjective', jlptLevel: 'N3', tags: ['thái độ'] },

  // 範
  { word: '模範', kana: 'もはん', romaji: 'mohan', meaningVi: 'Mẫu mực, gương sáng noi theo', meaningEn: 'model, exemplar', wordType: 'noun', jlptLevel: 'N1', tags: ['đạo đức'] },

  // 統
  { word: '大統領', kana: 'だいとうりょう', romaji: 'daitouryou', meaningVi: 'Tổng thống quốc gia', meaningEn: 'president', wordType: 'noun', jlptLevel: 'N3', tags: ['chính trị'] },

  // 括
  { word: '総括', kana: 'そうかつ', romaji: 'soukatsu', meaningVi: 'Tổng kết, đánh giá tổng thể', meaningEn: 'generalization, summary', wordType: 'noun', jlptLevel: 'N1', tags: ['công việc'] },

  // 練
  { word: '練習', kana: 'れんしゅう', romaji: 'renshuu', meaningVi: 'Luyện tập, thực hành', meaningEn: 'practice', wordType: 'noun', jlptLevel: 'N5', tags: ['học tập'] },

  // 幽
  { word: '幽霊', kana: 'ゆうれい', romaji: 'yuurei', meaningVi: 'Ma quỷ, linh hồn u linh', meaningEn: 'ghost, phantom', wordType: 'noun', jlptLevel: 'N2', tags: ['văn hóa'] },

  // 玄
  { word: '玄人', kana: 'くろうと', romaji: 'kurouto', meaningVi: 'Chuyên gia, người sành sỏi', meaningEn: 'expert, professional', wordType: 'noun', jlptLevel: 'N1', tags: ['nghề nghiệp'] },

  // 徴
  { word: '特徴', kana: 'とくちょう', romaji: 'tokuchou', meaningVi: 'Đặc trưng, nét tiêu biểu', meaningEn: 'characteristic, feature', wordType: 'noun', jlptLevel: 'N3', tags: ['mô tả'] },

  // 承
  { word: '承知', kana: 'しょうち', romaji: 'shouchi', meaningVi: 'Hiểu rõ, ưng thuận tiếp nhận', meaningEn: 'consent, awareness', wordType: 'noun', jlptLevel: 'N3', tags: ['giao tiếp'] },

  // 華
  { word: '華やか', kana: 'はなやか', romaji: 'hanayaka', meaningVi: 'Rực rỡ, lộng lẫy, tươi thắm', meaningEn: 'gorgeous, brilliant', wordType: 'adjective', jlptLevel: 'N2', tags: ['mô tả'] },

  // 巧
  { word: '巧妙', kana: 'こうみょう', romaji: 'koumyou', meaningVi: 'Khéo léo, tinh vi tài tình', meaningEn: 'ingenious, clever', wordType: 'adjective', jlptLevel: 'N1', tags: ['đánh giá'] },

  // 匠
  { word: '巨匠', kana: 'きょしょう', romaji: 'kyoshou', meaningVi: 'Bậc thầy danh họa, đại sư', meaningEn: 'great master', wordType: 'noun', jlptLevel: 'N1', tags: ['nghệ thuật'] },

  // 韻
  { word: '気韻', kana: 'きいん', romaji: 'kiin', meaningVi: 'Khí chất tao nhã, phong vị nghệ thuật', meaningEn: 'graceful style, elegance', wordType: 'noun', jlptLevel: 'N1', tags: ['nghệ thuật'] },

  // 望
  { word: '希望', kana: 'きぼう', romaji: 'kibou', meaningVi: 'Hy vọng, kỳ vọng tương lai', meaningEn: 'hope, wish', wordType: 'noun', jlptLevel: 'N4', tags: ['cảm xúc'] },

  // 潜
  { word: '潜水', kana: 'せんすい', romaji: 'sensui', meaningVi: 'Lặn nước, môn lặn', meaningEn: 'diving, submerging', wordType: 'noun', jlptLevel: 'N2', tags: ['thể thao'] },

  // 領
  { word: '領収書', kana: 'りょうしゅうしょ', romaji: 'ryoushuusho', meaningVi: 'Biên lai, hóa đơn nhận tiền', meaningEn: 'receipt', wordType: 'noun', jlptLevel: 'N3', tags: ['kinh doanh'] },

  // 域
  { word: '地域', kana: 'ちいき', romaji: 'chiiki', meaningVi: 'Khu vực, vùng miền địa phương', meaningEn: 'region, area', wordType: 'noun', jlptLevel: 'N3', tags: ['địa lý'] },

  // 叡
  { word: '叡慮', kana: 'えいりょ', romaji: 'eiryo', meaningVi: 'Thánh ý sáng suốt, ý chỉ bậc quân vương', meaningEn: 'emperor thinking', wordType: 'noun', jlptLevel: 'N1', tags: ['lịch sử'] },

  // 智
  { word: '才智', kana: 'さいち', romaji: 'saichi', meaningVi: 'Tài trí, tài năng và mưu trí', meaningEn: 'wit, resourcefulness', wordType: 'noun', jlptLevel: 'N1', tags: ['phẩm chất'] },
  { word: '理智', kana: 'りち', romaji: 'richi', meaningVi: 'Lý trí, khả năng suy xét lý tính', meaningEn: 'intellect, reason', wordType: 'noun', jlptLevel: 'N1', tags: ['tư duy'] },

  // 繁
  { word: '繁華街', kana: 'はんかがい', romaji: 'hankagai', meaningVi: 'Khu phố sầm uất, trung tâm buôn bán', meaningEn: 'bustling street, downtown', wordType: 'noun', jlptLevel: 'N2', tags: ['đô thị'] },

  // 栄
  { word: '光栄', kana: 'こうえい', romaji: 'kouei', meaningVi: 'Vinh dự, quang vinh', meaningEn: 'honor, glory', wordType: 'noun', jlptLevel: 'N3', tags: ['cảm xúc'] },
];

async function seedKanjiCompounds(client) {
  let inserted = 0;
  for (const item of KANJI_COMPOUND_WORDS) {
    const existing = await client.query('SELECT id FROM vocabulary WHERE word = $1', [item.word]);
    if (existing.rows.length === 0) {
      await client.query(
        `INSERT INTO vocabulary (word, kana, romaji, meaning_vi, meaning_en, word_type, jlpt_level, tags)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [
          item.word,
          item.kana,
          item.romaji,
          item.meaningVi,
          item.meaningEn,
          item.wordType,
          item.jlptLevel,
          item.tags,
        ]
      );
      inserted++;
    }
  }
  console.log(`[KANJI COMPOUNDS SEED] Inserted ${inserted} new compound vocabulary words.`);
}

async function main() {
  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  await client.connect();
  try {
    await seedKanjiCompounds(client);
  } finally {
    await client.end();
  }
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = {
  seedKanjiCompounds,
  KANJI_COMPOUND_WORDS,
};

