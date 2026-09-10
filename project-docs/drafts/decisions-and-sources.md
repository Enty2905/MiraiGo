# Nhật ký quyết định và nguồn — Gói v0.1

Ngày: 2026-09-08. Đây là dữ liệu làm việc của gói Draft; không phải báo cáo
review chính thức hoặc bằng chứng toàn bộ sản phẩm đã được duyệt.

## Quyết định đã được người dùng xác nhận trong hội thoại

| ID | Nội dung | Trạng thái | Nguồn |
| --- | --- | --- | --- |
| D01 | Sửa cả quy trình P1.1–P3.3 và bộ tài liệu đầu ra | Confirmed | Trả lời “Cả quy trình và bộ tài liệu đầu ra” |
| D02 | Người học tiếng Nhật để thi JLPT, đi học và đi làm | Confirmed | Câu trả lời làm rõ người học trong phiên này |
| D03 | Trình độ mục tiêu từ JLPT N5 đến N1 | Confirmed | Cùng câu trả lời D02 |
| D04 | Khó khăn trọng tâm là nhớ từ vựng và Kanji | Confirmed | Cùng câu trả lời D02 |
| D05 | Dùng các chức năng hiện có làm cơ sở draft: kana, bài học/quiz, từ điển, flashcards, nhận dạng chữ, tiến độ, trợ lý, quản trị | Confirmed về phạm vi nhóm | Câu trả lời chọn phạm vi trong phiên này; không duyệt sẵn mọi hành vi |

Các quyết định này áp dụng cho cả bốn draft. Việc xác nhận D01–D05 không
đồng nghĩa Approved cho một phiên bản tài liệu.

## Đề xuất cụ thể chờ duyệt cho phiên bản đầu

| ID | Đề xuất | Lý do/ảnh hưởng | Áp dụng |
| --- | --- | --- | --- |
| P01 | N5–N1 là nhóm người học và cấp lọc nội dung; chỉ công bố bài/nội dung đã có và đã kiểm tra, không cam kết đủ giáo trình hoặc bộ đề JLPT | Tránh đánh đồng hỗ trợ cấp với đủ nội dung; dùng bảng kiểm dữ liệu theo cấp trước phát hành | Brief, context, FR-03/05, NFR-04 |
| P02 | Khách xem kana/từ điển; tài khoản cho bài học, flashcards, chữ viết, tiến độ và trợ lý; admin quản trị | Giữ hướng luồng hiện có; quyền đọc API bài học phải đồng nhất với cam kết này | FR-01/03/12 |
| P03 | Bài trong mỗi cấp mở tuần tự; đánh dấu hoàn thành hoặc nộp quiz hợp lệ sẽ mở bài tiếp; không đặt điểm đậu | Gần hành vi hiện có; quy tắc học cần được duyệt riêng | FR-03/04 |
| P04 | Quiz hiển thị điểm lần hiện tại = làm tròn 100 × số đúng / tổng câu; lưu thêm điểm tốt nhất; bỏ trống tính sai; chuẩn hóa đáp án theo quy tắc trong đặc tả | Tách điểm hiện tại và tốt nhất, không dùng điểm quiz để xác nhận đạt JLPT | FR-04/10 |
| P05 | Flashcards cho từ vựng và Kanji do người học nhập; tự đánh giá nhớ/chưa nhớ; bản đầu không cam kết thuật toán SRS hay dùng mastery/streak như kết quả học đã được kiểm chứng | Giữ trọng tâm ghi nhớ; không hợp thức hóa mọi công thức trong code | FR-06/07/10 |
| P06 | Ghi nhớ kana chỉ lưu trên trình duyệt và phải gọi rõ là dữ liệu trên thiết bị; bài học/quiz/thẻ/lịch sử trợ lý thuộc tài khoản | Người dùng cần biết giới hạn đồng bộ và máy dùng chung | FR-02/10/11 |
| P07 | Chữ viết: canvas hoặc tải ảnh, OCR chữ ngang tách rõ trong bộ nhãn đã kiểm chứng; không hứa nhận đủ Kanji N2/N1, chấm chữ hay nét | Phân biệt phạm vi người học và phạm vi model | FR-08/09 |
| P08 | Ảnh/canvas và kết quả OCR chỉ tạm trong màn hình, không lưu dài hạn hoặc dùng huấn luyện; lỗi giữ đầu vào khi còn ở trang; hạn chế đổi đầu vào trong khi gửi | Đề xuất quyền riêng tư và phục hồi, không tuyên bố đã audit log toàn hệ thống | FR-08/09, NFR-03 |
| P09 | Xóa bộ flashcards cần xác nhận tên bộ và hậu quả; admin chỉ xóa nội dung chưa có tham chiếu, nếu đã dùng thì từ chối xóa và cho sửa nội dung | Bảo vệ nội dung học/tiến độ; giới hạn xóa admin có thể khác code hiện có | FR-06/12 |
| P10 | Loại khỏi phiên bản này: khóa học/đề thi đầy đủ, camera trực tiếp, chấm phát âm/chấm nét/chấm chữ, thanh toán, mạng xã hội, mở rộng MCP, password reset/email verification/SSO/social login, trang văn hóa độc lập và game hóa | Đây là đề xuất loại trừ để duyệt, không suy ra từ TaskFlow; không yêu cầu xóa code sẵn có | Brief, PRD |
| P11 | Bản đầu tối ưu giao diện tiếng Việt trên trình duyệt desktop/mobile; kiểm tra bàn phím với các thao tác không cần vẽ tự do | Phù hợp bản triển khai nhưng ngôn ngữ/thiết bị chưa được người dùng xác nhận | NFR-01 |

P01–P11 chỉ thành quyết định khi người dùng chấp nhận rõ. Có thể sửa hoặc
hoãn từng mục; tài liệu phụ thuộc phải cập nhật theo lựa chọn đó.

## Giá trị vận hành có nguồn, đề xuất giữ làm baseline kiểm thử

| ID | Giá trị quan sát | Trạng thái và giới hạn |
| --- | --- | --- |
| V01 | Đăng ký yêu cầu tên/email/password; backend yêu cầu password ít nhất 6 ký tự | Observation S02; chưa phê duyệt như chính sách mật khẩu |
| V02 | Backend chữ viết chấp nhận data URL PNG/JPEG/WebP, tối đa 4 MiB sau giải mã; timeout 30 giây; OCR min_confidence 0.35 | Observation S07; giới hạn payload gửi khác kích thước file tải ban đầu; không phải SLA |
| V03 | Flashcards: tên 255, mô tả 1000, mặt trước 255, mặt sau 2000 ký tự; 1–200 thẻ/bộ | Observation S06; đề xuất dùng khi nghiệm thu, chưa phê duyệt |
| V04 | Trợ lý tối đa 1200 ký tự cho một câu hỏi | Observation S09; chưa phê duyệt giới hạn sản phẩm |

## Nguồn triển khai đã kiểm tra tĩnh

| ID | Nguồn | Nội dung có thể chứng minh |
| --- | --- | --- |
| S01 | [README](../../README.md), [AGENTS](../../AGENTS.md), [App](../../frontend/src/App.jsx) | Mục đích web, ràng buộc, các route và guard UI |
| S02 | [Auth UI](../../frontend/src/pages/auth/auth-page.jsx), [auth service](../../backend/src/services/auth.service.js), [middleware](../../backend/src/middleware/auth.middleware.js) | Form, lưu phiên, phản hồi, token và kiểm tra admin |
| S03 | [Hiragana hook](../../frontend/src/hooks/use-hiragana-study.js), [Katakana hook](../../frontend/src/hooks/use-katakana-study.js) | Chọn ký tự, đánh dấu và localStorage |
| S04 | [Lesson service](../../backend/src/services/lesson.service.js), [lesson detail](../../frontend/src/pages/lessons/lesson-detail-page.jsx) | Cấp bài học, nội dung, khóa bài và quiz UI |
| S05 | [Dictionary routes](../../backend/src/routes/dictionary.routes.js), [dictionary page](../../frontend/src/pages/dictionary/dictionary-page.jsx) | Route tra cứu và giao diện tìm kiếm |
| S06 | [Flashcards service](../../backend/src/services/flashcard.service.js), [page](../../frontend/src/pages/flashcards/flashcards-page.jsx) | Tạo/xem/xóa bộ, validation, tự đánh giá và lưu kết quả |
| S07 | [Handwriting page](../../frontend/src/pages/handwriting/handwriting-page.jsx), [proxy](../../backend/src/services/handwriting.service.js), [AI API](../../ai/src/japanese_handwriting_ai/api.py), [AI README](../../ai/README.md), [labels](../../ai/src/japanese_handwriting_ai/labels.py) | Canvas/tải ảnh, payload, mặc định model/OCR và giới hạn tài liệu mô tả |
| S08 | [Progress service](../../backend/src/services/progress.service.js), [model](../../backend/src/models/progress.model.js) | Ghi hoàn thành, điểm quiz tốt nhất, log và công thức mastery/streak trong code |
| S09 | [Assistant](../../backend/src/services/assistant.service.js), [Groq](../../backend/src/services/groq.service.js) | Lịch sử chat, ngữ cảnh dữ liệu và phụ thuộc dịch vụ ngoài |
| S10 | [Admin routes](../../backend/src/routes/admin.routes.js), [admin service](../../backend/src/services/admin.service.js) | Nhóm quản lý nội dung/tài khoản, chưa phải phê duyệt mọi quyền xóa |
| S11 | [App backend](../../backend/src/app.js), [DB](../../backend/src/config/db.js), [schema](../../backend/db/schema.sql), [API client](../../frontend/src/services/api-client.js) | Ranh giới dịch vụ, xác thực router, PostgreSQL, mặc định kết nối |

Chưa chạy ứng dụng, truy vấn DB, nạp checkpoint hoặc đo độ chính xác. Không
đọc secrets. Không dùng thư mục AI ngoài monorepo làm bằng chứng tương đương.

## Câu hỏi còn mở

- Q01: Chấp nhận hoặc sửa P01–P11 và baseline V01–V04 trước khi nghiệm thu?
- Q02: Ai cung cấp/kiểm duyệt nội dung N5–N1, dữ liệu Kanji và tập đánh giá OCR?
- Q03: Thời hạn và nhân lực dự án; thiết bị/trình duyệt đích; ngưỡng hiệu năng,
  tải đồng thời, chất lượng OCR thực tế và chính sách lưu lịch sử chat/tiến độ?

Q02/Q03 chưa có giá trị mặc định. Tính năng phụ thuộc được đánh dấu chưa đủ
điều kiện cam kết phát hành; không tự đặt SLA, thời hạn lưu hoặc tỷ lệ chính xác.
