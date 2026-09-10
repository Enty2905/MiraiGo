# Project Brief — Japanese Learning App

## Status

**Draft v0.1 — Awaiting Human Approval.** Ngày: 2026-09-08.
Đích sau phê duyệt: `project-docs/project-brief.md`, thay mẫu TaskFlow.
Nguồn và ID: [nhật ký chung](decisions-and-sources.md).
Chưa dùng BRIEF_READY_FOR_REVIEW: loại trừ và giới hạn phát hành còn chờ chọn.

## 1. Problem Hypothesis

Người học tiếng Nhật từ JLPT N5 đến N1, phục vụ thi JLPT, học tập và công việc,
gặp khó khăn trong việc nhớ từ vựng và Kanji (D02–D04).
Ứng dụng hướng tới kết nối học, tra cứu, ôn lại và xem kết quả trong một nơi.
Giả thuyết giá trị cần kiểm chứng: chuỗi hoạt động này giúp người học nhận ra
và quay lại những từ/chữ chưa nhớ, thay vì chỉ xem thêm nội dung.

## 2. Primary Learner / User

- Đã xác nhận: người học N5–N1 với mục đích D02.
- Quản trị là nhóm chức năng được chọn ở D05; vai trò/quyền chi tiết đề xuất P02/P09.
- Ngôn ngữ tiếng Việt và thiết bị desktop/mobile là P11, chưa là quyết định.

## 3. Learner Need

Trọng tâm là ghi nhớ từ vựng và Kanji, không mặc định luyện viết là mục tiêu
chính chỉ vì có AI. Học kana, bài học, tra cứu, flashcards và phản hồi kết quả
cần phục vụ nhu cầu này; hiệu quả dài hạn chưa được đo.

## 4. Desired Outcome

Đề xuất kết quả quan sát để duyệt: người học tìm được từ/Kanji cần học, ôn
qua bộ thẻ hoặc bài luyện, xem mục đúng/sai hoặc nhớ/chưa nhớ, và quay lại
kết quả đã lưu trong phạm vi tài khoản. Không cam kết đậu JLPT hay tăng điểm
thi theo một tỷ lệ chưa có bằng chứng.

## 5. Product Scope

### In Scope

D05 xác nhận dùng nhóm chức năng hiện có làm cơ sở:

- Học kana; bài học và quiz; tra cứu từ vựng/Kanji.
- Flashcards; nhận dạng chữ viết; theo dõi tiến độ.
- Trợ lý học tập và quản trị.

Tài khoản/quyền, điều kiện hoàn thành, chính sách dữ liệu, phạm vi OCR và
quyền quản trị chi tiết là đề xuất P02–P09, chưa được duyệt theo tên tính năng.
N5–N1 xác định đối tượng; độ đầy đủ giáo trình cần chọn P01.

### Out of Scope

Chưa có loại trừ sản phẩm được xác nhận. P10 đề xuất hoãn các phần mở rộng
ngoài nhóm đã chọn; người dùng cần duyệt. “Chưa thảo luận” không có nghĩa
“ngoài phạm vi”. Việc hoãn tính năng không cho phép tự xóa code của tính năng đó.

## 6. Core User Journey

Đề xuất: chọn nội dung/cấp phù hợp → học/tra từ hoặc Kanji → luyện quiz/thẻ
→ xem phản hồi → xem lại tiến độ và ôn mục chưa nhớ.

Nhận dạng chữ là nhánh hỗ trợ chuyển ảnh thành ký tự/văn bản; trợ lý là nhánh
giải thích nội dung. Hai nhánh không thay thế đánh giá năng lực hoặc kiểm duyệt học liệu.

## 7. Product Constraints

- N5–N1 là phạm vi người học đã xác nhận, chưa chứng minh đủ học liệu.
- Nhân lực, thời hạn, nguồn nội dung, thiết bị đích và ngưỡng chất lượng còn mở.
- Quyền lưu ảnh và dữ liệu học cần tách rõ; P08 đề xuất không lưu ảnh dài hạn.

## 8. Technical Constraints

Theo AGENTS.md: giữ React/Vite, Node.js/Express và FastAPI cùng quy ước hiện có.
PostgreSQL và Groq là hiện trạng quan sát, không phải lý do mở rộng sản phẩm.
Model chữ viết được tài liệu mô tả cho kana và Kanji theo nhóm N5/N4/N3;
không suy ra khả năng nhận toàn bộ Kanji N2/N1 từ mục tiêu người học.

## 9. AI Working Rules

AI được đề xuất phương án, phải ghi giả định và nguồn. Không tự đặt yêu cầu
học tập/nghiệp vụ, không dùng code hoặc mẫu TaskFlow làm phê duyệt. Quyết định
ảnh hưởng phạm vi phải được người dùng xem xét. Confidence không phải điểm
năng lực; nhận dạng không đồng nghĩa chấm chữ hoặc thứ tự nét. Người dùng
giữ quyền duyệt cuối cùng cho brief và các tài liệu dẫn xuất.

## 10. Risks

- Phạm vi chín nhóm chức năng có thể vượt nhân lực/thời hạn chưa biết.
- Thiếu nội dung đã kiểm duyệt ở một số cấp N5–N1.
- Tự đánh giá flashcards và điểm quiz chưa chứng minh ghi nhớ dài hạn.
- OCR có thể trả ký tự sai với ảnh ngoài điều kiện đã đánh giá.
- Trợ lý có thể giải thích sai; cần cơ chế phân biệt dữ liệu nguồn và nội dung sinh.
- Hiện trạng mã có thể khác hành vi đề xuất; cần kiểm thử trước khi công bố.

## 11. Assumptions

Giả thuyết giá trị: ôn lại và phản hồi giúp người học phát hiện mục chưa nhớ.
Chưa có nghiên cứu người dùng hoặc dữ liệu kết quả để xác nhận tác động.
P01–P11 được giữ là Proposal, không chuyển thành sự thật trong brief.

## 12. Decision Log

| ID | Quyết định | Trạng thái | Nguồn |
| --- | --- | --- | --- |
| D02–D04 | Người học N5–N1; thi JLPT/học/làm; khó nhớ từ và Kanji | Confirmed | Người dùng trong phiên này |
| D05 | Nhóm chức năng hiện có làm cơ sở bản nháp | Confirmed về nhóm | Người dùng trong phiên này |
| P01–P11 | Giới hạn nội dung, hành vi và loại trừ đề xuất | Chờ duyệt | Nhật ký chung |

## 13. Open Questions

Q01–Q03 trong nhật ký: lựa chọn đề xuất, nguồn/kiểm duyệt nội dung, điều kiện
phát hành và chính sách dữ liệu. Các quyết định này tiếp tục dùng chung ở
P2.1–P3.3; không hỏi lại D02–D05.
