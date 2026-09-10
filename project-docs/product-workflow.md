# Quy trình thống nhất P1.1 → P3.3

## Cách dùng và nguồn chuẩn

Đây là quy trình tạo tài liệu, không phải phê duyệt sản phẩm. Đường dẫn
canonical tính từ `japanese-learning-app/`. Có thể chạy một bước hoặc cả chuỗi;
đọc trạng thái và câu trả lời đã ghi thay vì bắt đầu lại mỗi lần đổi prompt.

Prompt dùng chung:

> Đọc AGENTS.md, project-docs/README.md và product-workflow.md. Thực hiện bước
> được yêu cầu hoặc tiếp tục bước còn thiếu trong P1.1–P3.3. Dùng quyết định
> đã xác nhận, kiểm tra nguồn hiện tại, hỏi gộp quyết định còn thiếu và hoàn thành
> phần độc lập. Trình nội dung cụ thể để duyệt; không suy ra phê duyệt từ việc
> người dùng gửi prompt của bước tiếp theo.

Thứ tự nguồn:

1. Quyết định mới nhất người dùng xác nhận, có phạm vi áp dụng rõ.
2. Tài liệu đã duyệt: brief sở hữu mục tiêu/phạm vi; PRD sở hữu yêu cầu;
   đặc tả sở hữu chi tiết hành vi trong ranh giới yêu cầu.
3. Context tổng hợp nguồn trên và hiện trạng, không tự tạo quyết định thay thế.
4. README, mã, cấu hình và kiểm thử: bằng chứng mô tả/triển khai.
5. Mẫu tham khảo, đề xuất và suy luận AI.

AGENTS.md và constitution nếu có quy định ràng buộc làm việc; không tự tạo
tính năng. Số bước lớn hơn không tự chứng minh quyết định mới hơn. Báo mâu
thuẫn chưa có quyết định thay thế. Kiểm tra liên kết tồn tại trước khi dùng.

TaskFlow/Kanban là mẫu; `Accepted reviewed sample` không chứng minh duyệt cho
ứng dụng này. Thư mục `../japanese-handwriting-ai/` ngoài monorepo không mặc
định giống `ai/`; chỉ tham khảo sau khi kiểm chứng quan hệ.

## Trạng thái và nhật ký

Mỗi tài liệu có phiên bản, ngày, nguồn, phê duyệt và câu hỏi mở.

- `Draft`: chưa duyệt, kể cả đề xuất đã viết đầy đủ.
- `Approved`: đã duyệt rõ phiên bản/nội dung và giả định đi kèm.
- Review `READY`, `READY WITH MINOR FIXES`, `NOT READY` là trục riêng;
  READY không thay thế phê duyệt sản phẩm.
- `BRIEF_READY_FOR_REVIEW` chỉ dành cho brief đủ cơ sở để xem xét.

Dùng chung một nhật ký quyết định cho đợt kết hợp:

| ID | Nội dung | Loại/trạng thái | Nguồn xác nhận | Tài liệu ảnh hưởng |
| --- | --- | --- | --- | --- |

Các loại: Fact, Implementation observation, Approved decision, Proposal,
Assumption, Open question. Không giấu quyết định thiếu trong giả định.
Giữ ID ổn định; không tái dùng ID cho yêu cầu khác. Thay đổi nghĩa cần ghi
nguồn và review lại phần liên quan.

## P1.1 — Làm rõ ý tưởng

**Skill:** [brainstorm](SKILL.md).
**Canonical:** `project-docs/project-brief.md`.

Làm rõ người học, khó khăn, kết quả, phạm vi đầu tiên, loại trừ có chủ đích,
ràng buộc và rủi ro. Tối đa 5 quyết định mỗi vòng; không hỏi lại điều đã rõ.

Cấu trúc: Status; Problem Hypothesis; Primary Learner/User; Learner Need;
Desired Outcome; In/Out of Scope; Core User Journey; Product Constraints;
Technical Constraints; AI Working Rules; Risks; Assumptions; Decision Log;
Open Questions. Không viết FR/US/AC chi tiết, API, schema hoặc kế hoạch code.

Khi đủ cơ sở, trình Draft và BRIEF_READY_FOR_REVIEW. Sau duyệt rõ ràng,
đổi Status thành Approved, ghi phiên bản/ngày/bằng chứng và lưu canonical.
Nếu chưa duyệt, giữ Draft; im lặng hoặc chuyển bước không phải đồng ý.

## P2.1 — Context dùng lại

**Canonical:** `project-docs/project-context.md`.

Đọc brief và kiến trúc liên quan. Nếu brief chưa duyệt, vẫn tổng hợp được
hiện trạng có nguồn nhưng không gọi đó là phạm vi sản phẩm đã duyệt.

Cấu trúc: trạng thái/nguồn; tổng quan; phạm vi; hành trình; quyết định;
kiến trúc; giới hạn AI; thuật ngữ; nguồn chuẩn; loại trừ; giả định/câu hỏi.
Ưu tiên khoảng 1.000 từ; không chép API specification hoặc hướng dẫn huấn luyện.
Phân biệt cấu hình mặc định, mã quan sát được và dịch vụ đã kiểm tra đang chạy.
Trình nội dung để duyệt trước khi lưu canonical.

## P3.1 — PRD

**Canonical:** `project-docs/product-requirements.md`.
Dùng prd-generator nếu có; nếu thiếu, thông báo và dùng cấu trúc này.

Cần mục tiêu/phạm vi có nguồn và brief/context hợp lệ để trình PRD phê duyệt.
Khi người dùng cho phép dùng hiện trạng làm cơ sở draft, có thể viết đề xuất
đầy đủ từ đó; phải ghi Proposal, không trình bày như yêu cầu đã duyệt.

Cấu trúc: trạng thái/nguồn; mục tiêu/người dùng; phạm vi; dấu hiệu thành công;
FR/US/AC; NFR; dữ liệu/quyền/phục hồi; giới hạn AI; giả định/phụ thuộc/rủi ro;
câu hỏi/quyết định cần duyệt.

Mỗi FR có một hành vi, nguồn/trạng thái, US khi hữu ích và AC quan sát được.
Bao phủ thành công/lỗi/quyền/lưu/khôi phục khi liên quan. Giá trị trong code
là hiện trạng, chưa phải ngưỡng nghiệm thu. Không tự đặt SLA, độ chính xác,
chính sách ảnh, dung lượng hoặc giáo trình. TBD phải kèm quyết định cần bổ sung.

## P3.2 — Review gate

Trình review trong hội thoại, không tạo báo cáo chính thức riêng. Nhật ký
chung của gói draft có thể giữ ID và trạng thái phát hiện để tiếp tục.

Kiểm tra đúng miền, nguồn và tính kiểm thử trước. Chỉ áp dụng nhóm hành vi
liên quan; không thêm tính năng để đủ checklist. Yêu cầu khác code là khoảng
cách triển khai, không tự sửa yêu cầu đã duyệt để khớp code.

Mỗi phát hiện: R-ID; Blocker/Major/Minor; confirmed issue/human decision needed;
vị trí; bằng chứng; tác động; sửa tối thiểu; câu hỏi khi cần.
Báo theo thứ tự phát hiện → nguồn/giới hạn → kết luận → ID cần phản hồi.

Chỉ sửa phát hiện được chấp nhận; nếu cần chọn hành vi phải có lựa chọn cụ thể.
Cho phép người dùng chấp nhận một nhóm ID. Review lại phần ảnh hưởng;
sửa xong không tự đánh dấu PRD Approved.

## P3.3 — Đặc tả tính năng

**Canonical:** `project-docs/feature-specification.md`.

PRD được duyệt và không còn blocker review của tính năng là điều kiện sẵn
sàng triển khai. Phần đủ nguồn có thể soạn Draft; phần dựa trên Proposal
chỉ là đề xuất thảo luận, không được gọi là đặc tả đã duyệt.

Cấu trúc: trạng thái/nguồn; phạm vi; thuật ngữ/quy tắc chung; từng tính năng;
truy vết FR/US/AC; câu hỏi/hành vi cần duyệt.

Mỗi tính năng: mục đích/nguồn; phạm vi; người/quyền; điều kiện trước; điểm bắt
đầu; luồng chính/thay thế/lỗi; validation; trạng thái UI; dữ liệu/reload;
điều kiện sau; AC; câu hỏi. Chỉ giữ mục có ý nghĩa.

Mô tả kết quả quan sát được, không thiết kế database/API contract/model/UI.
Kiểm tra gửi lặp, thử lại, đổi đầu vào/rời màn hình và thao tác phá hủy khi
liên quan. Giữ nguyên ID FR/US/AC nguồn; không tạo tham chiếu giả.

## Quy tắc AI và dữ liệu

Nhận dạng ký tự, OCR, chấm chất lượng chữ và thứ tự nét là khả năng khác nhau.
Confidence không phải điểm năng lực. Nhãn N5/N4/N3 không chứng minh đủ khóa
học/luyện thi; validation cục bộ không cam kết ảnh thực tế.
Tách ảnh gốc, đầu vào tạm, kết quả nhận dạng, điểm quiz và tiến độ.
Không mặc định lưu/chia sẻ ảnh hay dùng ảnh huấn luyện.

Không tự thêm MCP, framework, tích hợp hoặc tính năng chưa xác nhận. Chức
năng đã có được ghi như hiện trạng, không tự đưa vào/loại khỏi MVP.

## Chạy kết hợp và lưu

1. Kiểm tra nguồn một lần, dùng nhật ký chung và hỏi các quyết định còn thiếu
   theo vòng nhỏ. Tiếp tục việc độc lập có nguồn trong lúc chờ.
2. Khi việc chuẩn bị tệp được cho phép, lưu gói Draft dưới `project-docs/drafts/`.
   Liên kết phải mở được tại vị trí thật. Không coi drafts là canonical.
3. Review đúng phiên bản draft. Trình toàn bộ nội dung trong hội thoại hoặc
   mở/liên kết đầy đủ các tệp để người dùng xem trước khi quyết định.
4. Chỉ thay canonical sau khi người dùng duyệt nội dung tương ứng. Có thể
   duyệt cả gói có tên/phiên bản nếu các quyết định chặn được giải quyết.
   Khi chuyển khỏi drafts, chỉnh liên kết theo vị trí canonical.
5. Ghi nguồn duyệt, cập nhật mục lục theo thực tế và chỉ sửa tài liệu được
   yêu cầu. Không tự sửa code hoặc tạo review artifact chính thức.

Không lặp bộ tài liệu chỉ chứa TBD mỗi khi chuyển bước. Nếu thiếu quyết định,
giữ draft có nội dung đã biết và hỏi đúng phần còn thiếu.
