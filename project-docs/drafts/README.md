# Gói tài liệu học tiếng Nhật — v0.1

**Draft — chờ duyệt.** Ngày: 2026-09-08.
Gói này được chuẩn bị theo yêu cầu sửa cả quy trình và đầu ra P1.1–P3.3.
Người dùng đã xác nhận người học N5–N1, thi JLPT/học/làm, khó nhớ từ/Kanji
và nhóm chức năng hiện có. Nội dung chi tiết chưa được phê duyệt.

## Đọc và phản hồi

| Bước | Bản nháp đầy đủ | Nội dung |
| --- | --- | --- |
| P1.1 | [Project brief](project-brief.md) | Người học, vấn đề, kết quả, phạm vi và rủi ro |
| P2.1 | [Project context](project-context.md) | Bối cảnh dùng lại, kiến trúc, nguồn và hiện trạng |
| P3.1 | [Product requirements](product-requirements.md) | 12 FR/US, AC, 6 NFR, dữ liệu và giới hạn AI |
| P3.2 | Review trong hội thoại | Không tạo báo cáo review chính thức riêng |
| P3.3 | [Feature specification](feature-specification.md) | 12 mục hành vi có truy vết, gồm phần đề xuất/chưa đủ quyết định |
| Chương 3 | [PRD MiraiGo](prd-miraigo-github-template.md) | Bản PRD riêng theo cấu trúc mẫu GitHub, chờ review |
| Dùng chung | [Quyết định và nguồn](decisions-and-sources.md) | D01–D05, P01–P11, V01–V04, S01–S11, Q01–Q03 |

## Những lựa chọn đáng đọc trước khi duyệt

- P01: N5–N1 là cấp người học/nội dung, chưa cam kết đủ giáo trình hoặc bộ đề.
- P02/P06: phân biệt phần công khai, dữ liệu tài khoản và dấu kana chỉ trên thiết bị.
- P03/P04: bài mở tuần tự; không có điểm đậu; điểm lượt quiz và điểm tốt nhất tách riêng.
- P05: tự đánh giá flashcards; chưa cam kết SRS hoặc chứng nhận năng lực qua mastery/streak.
- P07/P08: OCR hỗ trợ theo bộ nhãn đã kiểm chứng; ảnh/kết quả tạm thời, không dùng huấn luyện.
- P09: xóa thẻ có chủ đích; không xóa học liệu đã có tham chiếu.
- P10/P11: loại trừ đề xuất và thiết bị/ngôn ngữ đích.
- V01–V04: các giới hạn từ code chỉ là baseline đề xuất, chưa được tự phê duyệt.

## Cổng duyệt

Gói chưa READY để triển khai. Người dùng có thể xác nhận/sửa một nhóm P/V
trong cùng phản hồi; không phải trả lời lại người học/mục tiêu D02–D05.
Q02/Q03 và phần quyền/validation quản trị còn cần làm rõ theo tác động.

Có thể duyệt brief/context trước hoặc duyệt gói đã chỉnh khi các blocker
được giải quyết. Duyệt mục tiêu không tự duyệt từng hành vi; review READY
không thay phê duyệt tài liệu. Các tệp canonical vẫn là mẫu và không được
dùng làm yêu cầu học tiếng Nhật trong thời gian chờ.

Sau phê duyệt nội dung, thay đúng các tệp canonical tương ứng, ghi nguồn
duyệt, sửa liên kết từ drafts về vị trí mới và cập nhật mục lục. Không tự
đánh dấu cả bộ Approved khi chỉ một phần được chấp nhận.
