# Japanese Learning App — Project Context

## Trạng thái và nguồn gốc

**Draft v0.1 — Awaiting Human Approval**, 2026-09-08.
Đích sau duyệt: `project-docs/project-context.md`, thay mẫu TaskFlow.
Nguồn: [brief draft](project-brief.md), [nhật ký D/P/V/S/Q](decisions-and-sources.md).
Chưa có brief/PRD được duyệt. Đây là context có quyết định trực tiếp từ người
dùng và hiện trạng kiểm tra tĩnh; chưa kiểm chứng dịch vụ đang chạy.

## Tổng quan sản phẩm

Người học N5–N1, phục vụ thi JLPT, đi học và đi làm; vấn đề trọng tâm là
nhớ từ vựng/Kanji (D02–D04). Nhóm chức năng làm cơ sở draft đã chọn tại D05.
Mục tiêu quan sát đề xuất: học/tra cứu → luyện → thấy mục chưa nhớ → xem lại.
Không cam kết tăng điểm thi hoặc đầy đủ giáo trình chỉ từ nhãn cấp độ.

## Phạm vi sản phẩm

D05: kana, bài học/quiz, từ điển, flashcards, chữ viết, tiến độ, trợ lý và quản trị.
Hành vi cụ thể P01–P11 chưa duyệt. Văn hóa độc lập và game hóa đang được
đề xuất hoãn, không mặc định phạm vi từ các route hiện có.

## Hành trình chính

| Hiện trạng qua mã | Nguồn | Giới hạn quyết định |
| --- | --- | --- |
| Đăng ký/đăng nhập → lưu phiên → quay lại trang | S02 | Chính sách tài khoản là P02/V01 |
| Xem kana → đánh dấu đã nhớ trong localStorage | S03 | Không đồng bộ tài khoản; P06 cần duyệt |
| Chọn cấp/bài → quiz/hoàn thành → tiến độ | S04/S08 | Khóa bài, điểm và hoàn thành là P03/P04 |
| Tra cứu; tạo/ôn/xóa bộ thẻ | S05/S06 | P05/P09; chưa cam kết SRS |
| Canvas/tải ảnh → backend → OCR → văn bản/confidence | S07 | P07/P08 và baseline V02 |
| Hỏi trợ lý với lịch sử/ngữ cảnh dữ liệu | S09 | Có phụ thuộc Groq; chưa audit chất lượng câu trả lời |
| Admin xem/sửa dữ liệu và tài khoản | S10 | Quyền/hậu quả xóa cần P09 |

## Quyết định đã được phê duyệt

D01–D05 đã xác nhận trực tiếp, xem nhật ký. Chưa có phê duyệt toàn bộ tài liệu.
Không coi chấp nhận nhóm “quản trị” là chấp nhận mọi thao tác phá hủy.

## Kiến trúc và ranh giới hệ thống

S01/S11: React/Vite gọi Express; API client mặc định `http://localhost:5000/api`,
có thể cấu hình bằng `VITE_API_BASE_URL`, kèm Bearer token nếu có phiên.
Express truy cập PostgreSQL. Schema trên đĩa không chứng minh DB đã khởi tạo.

S07: backend chuyển ảnh sang FastAPI qua `HANDWRITING_AI_BASE_URL`, mặc định
`http://127.0.0.1:8001`; luồng web hiện gọi `/predict/text`.
S09: trợ lý dùng Groq từ backend, tách khỏi FastAPI chữ viết.
Địa chỉ/model mặc định không xác nhận môi trường đang chạy.

Khoảng cách cần kiểm tra: trang bài học cần login ở frontend, nhưng lesson
router backend chưa gắn authenticateToken trong S11. P02 nếu duyệt sẽ yêu cầu
bảo vệ nhất quán. Không coi guard giao diện là bằng chứng bảo vệ dữ liệu.

Không kiểm chứng thư mục AI ngoài monorepo; không mặc định đồng bộ với `ai/`.

## Khả năng và giới hạn AI

S07: `/predict` phân loại ký tự theo classes của checkpoint;
`/predict/text` tách vùng rồi phân loại, phù hợp ảnh chữ ngang tách rõ.
AI README mô tả nhóm `all_with_kanji_n3` gồm 46 Hiragana + 46 Katakana +
612 Kanji. Tệp checkpoint N3 tồn tại, chưa nạp/kiểm tra metadata trong đợt này.

Nhãn không chứng minh đủ giáo trình N5–N1 hoặc nhận đủ Kanji N2/N1.
Kana nhỏ, dakuten/handakuten, chữ dính/dọc và ảnh nền phức tạp có giới hạn.
Không tìm thấy chấm chất lượng chữ/thứ tự nét trong luồng đã đọc.
Confidence không là điểm năng lực; validation cục bộ không cam kết ảnh thực tế.
Trợ lý là nội dung sinh từ dịch vụ riêng, cần kiểm chứng câu trả lời học thuật.

## Thuật ngữ

Người học: đối tượng D02/D03. Bài học: đơn vị nội dung theo cấp/số bài.
Quiz: luyện trả lời theo nội dung; không là đề thi JLPT được chuẩn hóa.
Flashcard: thẻ hai mặt ôn từ/Kanji. Kana: Hiragana và Katakana.
Kanji: chữ Hán dùng trong tiếng Nhật. Recognition: dự đoán ký tự từ ảnh.
OCR: trích xuất văn bản. Label/class: lớp phân loại. Confidence: mức tin cậy
dự đoán. “Đã nhớ” trên thẻ/kana là tự đánh giá, không chứng nhận năng lực.

## Hệ thống tài liệu và thứ tự ưu tiên

| Nguồn | Vai trò/trạng thái |
| --- | --- |
| [Nhật ký](decisions-and-sources.md) | Câu trả lời người dùng, đề xuất, nguồn mã và câu hỏi |
| [Brief](project-brief.md) | Draft mục tiêu/phạm vi |
| [PRD](product-requirements.md) | Draft FR/US/AC; chưa được duyệt |
| [Đặc tả](feature-specification.md) | Draft hành vi đề xuất, chưa sẵn sàng triển khai |
| [Mục lục chính](../README.md) | Trạng thái canonical và vị trí drafts |
| [AGENTS](../../AGENTS.md) | Ràng buộc repository, không thay quyết định sản phẩm |

Quyết định người dùng → tài liệu được duyệt đúng vai trò → hiện trạng có
nguồn → mẫu/đề xuất. Context không tự thay brief/PRD. Khi mâu thuẫn, cần
quyết định thay thế đã được xác nhận. Canonical hiện vẫn là mẫu chờ thay.

## Ngoài phạm vi và quy tắc chống mở rộng

Loại trừ sản phẩm P10 chờ duyệt; nội dung chưa nói tới không tự là loại trừ.
Không mang board/ticket/lane vào sản phẩm; card/label dùng đúng nghĩa vẫn hợp lệ.
Không triển khai code, đổi framework, huấn luyện hoặc thêm MCP trong đợt tài liệu.

## Giả định và câu hỏi còn mở

Giả thuyết giá trị ở brief chưa được đo. Q01–Q03 của nhật ký tiếp tục mở.
Không coi chính sách lưu ảnh, dữ liệu lâu dài, ngưỡng AI hay NFR đề xuất
là hành vi đã triển khai/được phê duyệt.
