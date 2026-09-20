export const dailyLessons = [
  { icon: 'あ', title: 'Từ vựng', detail: '12 / 20 từ', progress: 60, tone: 'coral' },
  { icon: '漢', title: 'Kanji', detail: '6 / 10 chữ', progress: 60, tone: 'indigo' },
  { icon: '文', title: 'Ngữ pháp', detail: '1 / 2 bài', progress: 50, tone: 'gold' },
  { icon: '聴', title: 'Luyện nghe', detail: '8 / 15 phút', progress: 53, tone: 'teal' },
  { icon: '読', title: 'Luyện đọc', detail: '0 / 1 bài', progress: 8, tone: 'violet' },
];

export const vocabulary = [
  { word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: 'Ăn', type: 'Động từ', level: 'N5', example: '私は毎朝パンを食べます。', translation: 'Tôi ăn bánh mì mỗi sáng.' },
  { word: '約束', reading: 'やくそく', romaji: 'yakusoku', meaning: 'Lời hứa, cuộc hẹn', type: 'Danh từ', level: 'N4', example: '友達との約束を守ります。', translation: 'Tôi giữ lời hứa với bạn.' },
  { word: '経験', reading: 'けいけん', romaji: 'keiken', meaning: 'Kinh nghiệm', type: 'Danh từ', level: 'N3', example: '日本で働いた経験があります。', translation: 'Tôi có kinh nghiệm làm việc tại Nhật.' },
];

export const kanji = [
  { char: '学', on: 'ガク', kun: 'まなぶ', meaning: 'Học', strokes: 8, level: 'N5', words: ['学生', '学校', '学ぶ'] },
  { char: '食', on: 'ショク', kun: 'たべる', meaning: 'Ăn', strokes: 9, level: 'N5', words: ['食事', '食べ物', '食堂'] },
  { char: '旅', on: 'リョ', kun: 'たび', meaning: 'Du lịch', strokes: 10, level: 'N4', words: ['旅行', '旅館', '旅人'] },
];

export const grammar = [
  { pattern: '〜ながら', meaning: 'Vừa... vừa...', structure: 'Vます + ながら', level: 'N4', example: '音楽を聞きながら勉強します。', translation: 'Tôi vừa nghe nhạc vừa học.' },
  { pattern: '〜ことがある', meaning: 'Đã từng...', structure: 'Vた + ことがある', level: 'N4', example: '京都へ行ったことがあります。', translation: 'Tôi đã từng đến Kyoto.' },
  { pattern: '〜ように', meaning: 'Để, sao cho...', structure: 'Vる/Vない + ように', level: 'N3', example: '忘れないようにメモします。', translation: 'Tôi ghi chú để không quên.' },
];

export const weekData = [42, 58, 35, 76, 64, 88, 72];
