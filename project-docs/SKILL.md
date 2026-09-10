---
name: brainstorm
description: >
  Làm rõ người học, mục tiêu, phạm vi và quyết định hành vi của japanese-learning-app;
  dùng cho P1.1 hoặc điểm chưa chốt trong P2.1–P3.3, không dùng cho sửa cơ học đã rõ.
---

# Brainstorm — Japanese Learning App

## Phạm vi

Làm rõ quyết định trước phần công việc phụ thuộc vào nó. Đọc
[quy trình P1.1–P3.3](product-workflow.md) khi thực hiện một bước hoặc cả chuỗi.
Skill không thay thế AGENTS.md và không tự chọn MVP.

## Nguồn và ràng buộc

- Đọc quyết định người dùng mới nhất, AGENTS.md và mục lục tài liệu.
- Phân biệt Fact, Implementation observation, Approved decision, Proposal,
  Assumption và Open question. Mã và tài liệu mẫu không tự xác nhận yêu cầu.
- Giữ React/Vite, Express, FastAPI và quy ước repository hiện có.
- Không suy ra trình độ, giáo trình, quyền hoặc tính năng từ model/mã nguồn.
- Context tổng hợp không tự thay đổi brief/PRD. Khi nguồn mâu thuẫn, chỉ coi
  quyết định mới thay thế quyết định cũ nếu có bằng chứng xác nhận.

## Hội thoại

1. Đọc các câu trả lời đã có trước khi hỏi; giữ ID quyết định xuyên suốt.
2. Diễn đạt người học, khó khăn và kết quả mong muốn. Nếu thiếu ý tưởng,
   hỏi người dùng; không dựng lại từ mẫu.
3. Hỏi tối đa 5 quyết định có tác động mỗi vòng. Đề xuất lựa chọn khi hữu ích,
   luôn cho phép trả lời tự do. Không hỏi chi tiết triển khai ở P1.1.
4. Tiếp tục phần độc lập có nguồn trong lúc chờ. Không lặp báo cáo chặn hoặc
   sinh nhiều tài liệu chỉ chứa TBD khi chưa có dữ kiện mới.
5. Ghi quyết định, nguồn, giả định và câu hỏi vào nhật ký chung. Chọn phạm vi
   không đồng nghĩa duyệt mọi validation hoặc chính sách dữ liệu.

## Mức chi tiết theo bước

- P1.1: người học, vấn đề, kết quả quan sát được, phạm vi, loại trừ, ràng buộc,
  rủi ro. Chưa viết FR/US/AC, API, schema hoặc kế hoạch code.
- P2.1: tổng hợp bối cảnh và hiện trạng có nguồn, không biến mã thành yêu cầu.
- P3.1: chuyển quyết định thành FR/US/AC/NFR; ghi rõ đề xuất chờ duyệt.
- P3.2: phát hiện có bằng chứng; không tự sửa PRD hoặc chọn hành vi.
- P3.3: đặc tả hành vi có nguồn, giữ rõ đề xuất và câu hỏi mở.

## Đầu ra và chuyển bước

Dùng cấu trúc tương ứng trong product-workflow.md; không ép mọi bước thành
Brainstorm Brief hoặc một trạng thái READY chung.

Khi P1.1 đủ cơ sở, trình Draft với BRIEF_READY_FOR_REVIEW; nếu chưa đủ,
ghi câu hỏi cụ thể và phần bị ảnh hưởng. Không đánh dấu Approved khi chưa
có phê duyệt rõ cho phiên bản tài liệu.

Nếu người dùng yêu cầu sửa cả bộ, chuẩn bị gói draft có nhật ký dùng chung
để duyệt một lần. Giữ các tệp canonical theo cổng duyệt đã thỏa thuận;
không hỏi lại từng bước nếu người dùng đã duyệt rõ cả gói và các quyết định.

Thiết kế/triển khai chỉ bắt đầu theo yêu cầu tiếp theo; với UI, theo AGENTS.md.
