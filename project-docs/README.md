# Mục lục tài liệu dự án

## Quy trình và bản nháp đang làm việc

- [Quy trình thống nhất P1.1–P3.3](product-workflow.md): đầu vào, mức chi tiết,
  nhật ký dùng chung, review gate và cách duyệt cả gói.
- [Brainstorm](SKILL.md): làm rõ quyết định sản phẩm; đọc trực tiếp bằng đường dẫn.
- [Gói Draft v0.1](drafts/README.md): bộ tài liệu học tiếng Nhật đã có nội dung
  theo câu trả lời người dùng, chờ duyệt.
- [Nhật ký quyết định/nguồn](drafts/decisions-and-sources.md): quyết định đã
  xác nhận, đề xuất và phần còn mở; dùng chung cho bốn tài liệu.
- [README ứng dụng](../README.md) và [AGENTS.md](../AGENTS.md): vận hành và
  ràng buộc repository; không thay quyết định sản phẩm.

## Trạng thái từng đầu ra

| Bước | Canonical | Trạng thái hiện tại | Bản đề xuất thay thế |
| --- | --- | --- | --- |
| P1.1 | [project-brief.md](project-brief.md) | Mẫu TaskFlow, không là brief học tiếng Nhật đã duyệt | [Draft](drafts/project-brief.md) |
| P2.1 | [project-context.md](project-context.md) | Mẫu TaskFlow, không là context học tiếng Nhật đã duyệt | [Draft](drafts/project-context.md) |
| P3.1 | [product-requirements.md](product-requirements.md) | Mẫu TaskFlow, không là PRD học tiếng Nhật đã duyệt | [Draft](drafts/product-requirements.md) |
| P3.2 | Review trong hội thoại | Không có báo cáo review chính thức riêng; READY không thay phê duyệt | Review đúng phiên bản draft |
| P3.3 | [feature-specification.md](feature-specification.md) | Mẫu xác thực/ticket board, không là đặc tả học tiếng Nhật đã duyệt | [Draft](drafts/feature-specification.md) |

## Cơ sở sản phẩm đã xác nhận

Người học N5–N1 để thi JLPT, học tập và công việc; khó nhớ từ vựng và Kanji.
Dùng nhóm hiện có làm cơ sở draft: kana, bài học/quiz, từ điển, flashcards,
nhận dạng chữ, tiến độ, trợ lý và quản trị. Nguồn xác nhận nằm trong nhật ký;
đây không phải phê duyệt mọi hành vi hoặc cam kết đủ nội dung từng cấp.

## Cách dùng tài liệu

- Không suy ra phê duyệt từ tên tệp hoặc nhãn `Accepted reviewed sample`.
- Mẫu chỉ tham khảo cấu trúc; không mang board/ticket/lane vào yêu cầu sản phẩm.
- Draft là bản để xem xét, không phải chỉ dẫn tự động triển khai.
- Quy trình/skill là chỉ dẫn làm việc, không phải yêu cầu chức năng.
- Sau duyệt, thay nội dung canonical tương ứng bằng bản được chấp nhận;
  cập nhật trạng thái và liên kết. Không sửa code trong đợt tài liệu này.

Đường dẫn đầu ra dùng thống nhất ngay trong `project-docs/`; không dùng
đường dẫn chapter của mẫu gốc. Skill hiện có tại `project-docs/SKILL.md`,
không dùng đường dẫn `project-docs/skills/brainstorm/SKILL.md` không tồn tại.
