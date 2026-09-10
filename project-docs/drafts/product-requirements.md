# Japanese Learning App — Product Requirements

## 1. Trạng thái và nguồn

**Draft v0.1 — Awaiting Human Approval.** Ngày: 2026-09-08.
Đích sau duyệt: `project-docs/product-requirements.md`, thay mẫu TaskFlow.
Nguồn: [brief](project-brief.md), [context](project-context.md),
[nhật ký D/P/V/S/Q](decisions-and-sources.md). D02–D05 đã được người dùng
xác nhận; brief/context và các hành vi dưới đây chưa được phê duyệt toàn bộ.
Không dùng feature specification để tự xác nhận yêu cầu của PRD này.

## 2. Mục tiêu và người dùng

Người học N5–N1 để thi JLPT, đi học/đi làm gặp khó khăn nhớ từ vựng và Kanji.
Giá trị đề xuất: kết nối học/tra cứu, luyện nhớ và xem lại phản hồi.
Hành trình: chọn nội dung → học/tra từ hoặc Kanji → quiz/thẻ → xem mục sai
hoặc chưa nhớ → quay lại nội dung cần ôn. Chữ viết và trợ lý hỗ trợ hành trình.

## 3. Phạm vi

Nhóm đã chọn D05: kana, bài học/quiz, từ điển, flashcards, chữ viết, tiến độ,
trợ lý, quản trị. Tài khoản/quyền và chi tiết hành vi là đề xuất để duyệt.
P01 phân biệt cấp N5–N1 với mức đầy đủ nội dung; P10 là danh sách loại trừ
đề xuất. Chưa có loại trừ nào được tự coi là đã duyệt.

## 4. Dấu hiệu thành công

Các dấu hiệu sau là đề xuất nghiệm thu chức năng, không phải chỉ số hiệu quả
ghi nhớ dài hạn hoặc cam kết thi đỗ:

| ID | Kết quả quan sát | Cách kiểm chứng |
| --- | --- | --- |
| SC-01 | Học/tra cứu được mục từ và Kanji có trong dữ liệu được duyệt | Chọn mẫu theo bảng kiểm nội dung từng cấp; đối chiếu nội dung/đáp án với nguồn được người phụ trách xác nhận |
| SC-02 | Hoàn tất quiz/thẻ, phân biệt đúng/sai hoặc nhớ/chưa nhớ | Chạy bài có đáp án/kết quả biết trước; kiểm tra FR-04/07 |
| SC-03 | Xem lại dữ liệu đã lưu đúng tài khoản sau reload/đăng nhập lại | Hai tài khoản độc lập, kiểm tra lưu thành công, lỗi và truy cập chéo |
| SC-04 | OCR hiển thị văn bản/confidence đúng ý nghĩa và cho thử lại khi lỗi | Ảnh có nhãn, ảnh trống, ảnh ngoài hỗ trợ, lỗi dịch vụ; chất lượng nhận dạng còn Q02/Q03 |

Ngưỡng cải thiện ghi nhớ, thời gian phản hồi, tải đồng thời và chất lượng AI:
TBD theo Q02/Q03; không lấy số validation cục bộ làm chuẩn người dùng thực tế.

## 5. Yêu cầu chức năng và user stories

**Trạng thái chung:** toàn bộ FR/US/AC dưới đây là **Proposal — chờ duyệt**.
D05 cung cấp nguồn phạm vi nhóm; P/V chỉ ra quyết định cần duyệt, S là bằng
chứng triển khai tham khảo. Mỗi US đi cùng FR tương ứng, không phải task code.

### FR-01 — Phiên và quyền truy cập

US-01: Là người học, tôi muốn dùng tài khoản để truy cập và giữ dữ liệu riêng.
Nguồn: D05, P02, V01, S02/S11.
Đề xuất đăng ký/đăng nhập/đăng xuất; khách dùng kana/từ điển; các khu vực
theo P02 cần phiên hợp lệ, quản trị cần quyền admin.

- AC-01a: Given dữ liệu hợp lệ theo chính sách được duyệt, When đăng ký/đăng nhập thành công, Then mở phiên và tới đường dẫn nội bộ hợp lệ đã yêu cầu hoặc trang chính.
- AC-01b: Given lỗi form/đăng nhập, When gửi, Then báo lỗi có thể sửa, giữ tên/email an toàn và không mở phiên hoặc lộ mật khẩu/token.
- AC-01c: Given chưa có/hết phiên hoặc không đủ quyền, When truy cập khu vực/dữ liệu bảo vệ, Then yêu cầu đăng nhập hoặc từ chối quyền; không trả dữ liệu riêng.
- AC-01d: Given đang đăng nhập, When đăng xuất, Then phiên phía trình duyệt bị xóa và không tiếp tục xem khu vực bảo vệ. Thu hồi token cũ ở server còn cần chính sách phiên tại Q03.

### FR-02 — Học kana

US-02: Là người học, tôi muốn xem ký tự kana và tự đánh dấu đã nhớ.
Nguồn: D05, P06, S03.

- AC-02a: Given danh sách kana, When chọn ký tự và đổi dấu đã nhớ, Then hiển thị nội dung ký tự, cập nhật dấu và số lượng tương ứng.
- AC-02b: Given đã lưu cục bộ thành công, When reload trên cùng trình duyệt, Then giữ dấu; thông báo rõ không đồng bộ tài khoản.
- AC-02c: Given lưu cục bộ không khả dụng, When đánh dấu, Then báo chưa lưu được, không khẳng định dấu sẽ còn sau reload.

### FR-03 — Bài học theo cấp

US-03: Là người học, tôi muốn chọn bài phù hợp cấp và biết bước học tiếp theo.
Nguồn: D03/D05, P01–P03, S04.

- AC-03a: Given đã đăng nhập, When chọn cấp N5–N1, Then chỉ liệt kê nội dung được công bố; nếu chưa có, hiển thị chưa có bài thay vì cam kết đủ giáo trình.
- AC-03b: Given bài có điều kiện theo P03, When bài trước chưa hoàn thành, Then cho biết điều kiện mở; sau khi lưu hoàn thành bài trước, bài tiếp theo mở.
- AC-03c: Given lỗi tải hoặc bài không tồn tại, When mở bài, Then hiển thị lỗi/không có nội dung và cách quay lại hoặc thử lại; không hiển thị hoàn thành giả.

### FR-04 — Quiz và phản hồi

US-04: Là người học, tôi muốn biết câu đúng/sai để ôn phần chưa nhớ.
Nguồn: D04/D05, P03/P04, S04/S08.

- AC-04a: Given quiz có câu/đáp án hợp lệ, When nộp, Then hiển thị đúng/sai từng câu, đáp án, điểm lần hiện tại và điểm tốt nhất tách riêng; quy tắc điểm theo P04.
- AC-04b: Given lưu thất bại, When đã chấm câu trả lời, Then giữ đáp án đang làm và cho thử lưu lại, không báo đã lưu/hoàn thành thành công.
- AC-04c: Given cùng lần nộp bị gửi lại do lỗi kết nối, When lưu lại, Then không tăng kết quả/tiến độ lặp ngoài ý muốn; nộp một lượt luyện mới vẫn là lượt riêng.
- AC-04d: Given không có câu hỏi, When mở quiz, Then không cho nộp và không tạo điểm hoặc tiến độ từ quiz rỗng.

### FR-05 — Tra cứu từ vựng/Kanji

US-05: Là người học, tôi muốn tìm cách đọc/nghĩa và nội dung liên quan của mục cần nhớ.
Nguồn: D04/D05, P01/P02, S05.

- AC-05a: Given truy vấn có nội dung, When tìm, Then hiển thị kết quả khớp với các trường thực có; không tự tạo nghĩa/ví dụ thiếu trong dữ liệu.
- AC-05b: Given truy vấn rỗng, không khớp hoặc lỗi, When tìm, Then phân biệt hướng dẫn nhập, không có kết quả và lỗi thử lại; giữ truy vấn khi lỗi.

### FR-06 — Bộ flashcards cá nhân

US-06: Là người học, tôi muốn tạo và quản lý bộ thẻ từ vựng/Kanji cần ôn.
Nguồn: D04/D05, P02/P05/P09, V03, S06.

- AC-06a: Given bộ có tên và các thẻ hai mặt hợp lệ, When lưu thành công, Then có thể mở lại đúng bộ thuộc tài khoản sau reload.
- AC-06b: Given dữ liệu không hợp lệ hoặc lưu lỗi, When tạo, Then báo lỗi và giữ bản nhập ở màn hình để sửa/thử lại, không tạo bộ thành công giả.
- AC-06c: Given bộ thuộc người dùng, When xác nhận xóa đúng bộ, Then bộ/thẻ trong bộ biến mất sau thành công; hủy không đổi dữ liệu; lỗi giữ bộ và cho thử lại.

### FR-07 — Ôn flashcards

US-07: Là người học, tôi muốn tự nhớ câu trả lời trước khi xem mặt sau và ghi mục chưa nhớ.
Nguồn: D04/D05, P05, S06/S08.

- AC-07a: Given bộ có thẻ, When xem/lật và chọn nhớ hoặc chưa nhớ, Then tổng kết đúng phân loại của lượt đó.
- AC-07b: Given lưu kết quả ôn bị lỗi, When kết thúc, Then giữ kết quả lượt hiện tại và cho thử lưu lại; không ghi nhận trùng cùng lượt khi thử lại.
- AC-07c: Given bộ rỗng/không thuộc quyền, When mở, Then hiển thị trạng thái phù hợp mà không bắt đầu luyện hoặc lộ thẻ người khác.

### FR-08 — Gửi đầu vào chữ viết

US-08: Là người học, tôi muốn vẽ hoặc tải ảnh để lấy văn bản nhận dạng.
Nguồn: D05, P07/P08, V02, S07.

- AC-08a: Given đầu vào hợp lệ trong điều kiện được duyệt, When gửi, Then hiển thị đang xử lý và không cho gửi lặp/đổi đầu vào cùng lúc.
- AC-08b: Given chưa vẽ, file không giải mã được hoặc payload vượt giới hạn được duyệt, When gửi/tải, Then báo lý do phù hợp và không tuyên bố nhận dạng thành công.
- AC-08c: Given dịch vụ không khả dụng/timeout, When nhận dạng, Then giữ đầu vào nếu còn ở màn hình, báo lỗi và cho kiểm tra lại/thử lại.

### FR-09 — Hiển thị kết quả nhận dạng

US-09: Là người học, tôi muốn hiểu văn bản máy đọc được và biết kết quả có thể sai.
Nguồn: D05, P07/P08, S07.

- AC-09a: Given dịch vụ trả kết quả, When hiển thị, Then tách văn bản, số ký tự và confidence; không gọi confidence là điểm chữ/điểm năng lực.
- AC-09b: Given không có ký tự được chấp nhận hoặc có vùng bị bỏ qua, When hiển thị, Then cho biết không nhận được/nhận một phần, cho sửa ảnh/thử lại và không tuyên bố văn bản đầy đủ chắc chắn.
- AC-09c: Given đổi đầu vào sau khi xử lý xong, When bắt đầu lượt mới, Then kết quả cũ không được gắn với ảnh mới. Reload không hứa giữ ảnh/kết quả OCR theo P08.

### FR-10 — Xem tiến độ

US-10: Là người học, tôi muốn xem việc đã hoàn tất và kết quả đã lưu để tiếp tục ôn.
Nguồn: D04/D05, P04–P06, S08.

- AC-10a: Given dữ liệu đã lưu thành công, When đăng nhập lại đúng tài khoản, Then thấy bài hoàn thành và kết quả lưu tương ứng; không trộn dữ liệu người khác.
- AC-10b: Given chưa có tiến độ hoặc tải lỗi, When mở, Then phân biệt chưa học với lỗi; không hiển thị số không như kết quả đã xác minh khi tải lỗi.
- AC-10c: Given dấu nhớ kana chỉ cục bộ, When xem tiến độ, Then không gọi nó là tiến độ đã đồng bộ tài khoản hoặc bằng chứng đạt cấp JLPT.

### FR-11 — Trợ lý giải thích học tập

US-11: Là người học, tôi muốn hỏi nghĩa/cách dùng hoặc cách nhớ từ/Kanji đang học.
Nguồn: D04/D05, P02, V04, S09.

- AC-11a: Given câu hỏi hợp lệ, When gửi, Then hiển thị câu trả lời và nguồn dữ liệu được dùng nếu có; phân biệt nội dung sinh với dữ liệu học được kiểm duyệt.
- AC-11b: Given lỗi dịch vụ hoặc lỗi lưu lịch sử, When gửi, Then giữ câu hỏi để thử lại, thông báo phần nào chưa thành công và không tạo lịch sử trùng cho cùng lần gửi.
- AC-11c: Given lịch sử đã lưu, When mở lại đúng tài khoản, Then xem lại được; truy cập phiên người khác bị từ chối.

### FR-12 — Quản trị nội dung và tài khoản

US-12: Là quản trị viên, tôi muốn duy trì dữ liệu học và trạng thái tài khoản theo quyền được duyệt.
Nguồn: D05, P02/P09, S10/S11.

- AC-12a: Given admin hợp lệ, When lưu nội dung hợp lệ, Then hiển thị dữ liệu đã lưu; validation/lỗi giữ bản nhập để sửa hoặc thử lại.
- AC-12b: Given người không có quyền admin, When gọi thao tác quản trị, Then bị từ chối ở hệ thống, không chỉ bị ẩn nút UI.
- AC-12c: Given nội dung đã có tham chiếu, When yêu cầu xóa theo P09, Then từ chối và giải thích; nội dung độc lập chỉ xóa sau xác nhận có chủ đích, hủy/lỗi không làm mất dữ liệu.

## 6. Yêu cầu phi chức năng

Tất cả NFR dưới đây là Proposal, chưa là cam kết đã kiểm thử.

| ID | Kỳ vọng và kiểm chứng | Nguồn/câu hỏi |
| --- | --- | --- |
| NFR-01 | Theo P11: không mất thao tác chính trên desktop/mobile; input có nhãn, trạng thái có thông báo, focus thấy được, dùng bàn phím với form/nút/danh sách; vẽ tự do có phương án tải ảnh | Thiết bị/trình duyệt cụ thể Q03; AGENTS |
| NFR-02 | Hai tài khoản không đọc/sửa thẻ, tiến độ, lịch sử chat của nhau; kiểm tra đường dẫn trực tiếp và yêu cầu dữ liệu, không chỉ UI | P02; phiên/thu hồi quyền Q03 |
| NFR-03 | Theo P08: ảnh tạm không lưu lâu dài/dùng huấn luyện; kiểm tra backend, AI và log triển khai trước phát hành | Chính sách lịch sử chat/tiến độ, retention Q03 |
| NFR-04 | Nội dung/đáp án và nhãn cấp được đối chiếu nguồn đã duyệt; OCR có tập ảnh thật đại diện điều kiện cam kết, đánh giá riêng ký tự/văn bản | Chủ sở hữu dữ liệu, ngưỡng chất lượng Q02/Q03 |
| NFR-05 | Không báo lưu thành công trước xác nhận; thử lại cùng thao tác không tạo trùng ngoài ý muốn | AC lưu/phục hồi; cần kiểm thử mất kết nối sau khi server đã ghi |
| NFR-06 | Đo thời gian phản hồi/tỷ lệ lỗi theo thiết bị, tải và thao tác đã chọn; ngưỡng TBD, không dùng timeout V02 làm SLA | Q03 |

## 7. Dữ liệu, quyền truy cập và phục hồi

| Dữ liệu | Đề xuất lưu | Sau reload và khi lỗi |
| --- | --- | --- |
| Dấu nhớ kana | Trình duyệt, P06 | Cùng trình duyệt giữ nếu ghi thành công; không hứa cách ly theo tài khoản trên máy chung |
| Bài hoàn thành, điểm quiz, kết quả ôn, bộ thẻ | Theo tài khoản | Chỉ báo đã lưu sau xác nhận; thử lại cùng lượt không tăng trùng |
| Ảnh/canvas, văn bản OCR | Tạm thời, P08 | Không giữ sau reload/rời trang; giữ khi lỗi nếu vẫn ở màn hình |
| Câu hỏi/trả lời trợ lý | Theo tài khoản khi lưu thành công | Thông báo riêng lỗi trả lời và lỗi lưu; thời hạn lưu còn Q03 |

Không có yêu cầu reset tiến độ, xóa tài khoản hoặc dùng ảnh huấn luyện tự thêm.
Giới hạn xóa cụ thể thuộc P09. Với mạng mất sau khi server có thể đã ghi,
phải xác minh trạng thái trước khi báo thất bại dứt khoát hoặc tạo bản mới.

## 8. Giới hạn AI

Nhận dạng ký tự, OCR, chấm chữ và thứ tự nét không thay thế cho nhau.
P07 đề xuất OCR có điều kiện theo model đã kiểm chứng; AI README mô tả nhóm
kana + Kanji N5/N4/N3, không đủ cơ sở cam kết toàn bộ N2/N1.
Confidence thấp/ảnh ngoài nhóm vẫn có thể cho ký tự sai; lọc ngưỡng không
chứng minh dự đoán còn lại đúng. Validation cục bộ không phải độ chính xác thực tế.
Trợ lý có thể trả lời sai và phụ thuộc Groq; không gọi nội dung sinh là đáp án
chuẩn hoặc kết quả chấm năng lực.

## 9. Giả định, phụ thuộc và rủi ro

- Assumption: chuỗi học/ôn/phản hồi giúp giải quyết khó nhớ; cần kiểm chứng giá trị thực.
- Dependencies: học liệu được kiểm duyệt, DB, model/ảnh đánh giá, dịch vụ trợ lý, quyết định P/V/Q.
- Risks: phạm vi rộng, thiếu dữ liệu N2/N1, OCR sai, nội dung trợ lý sai, mất/trùng kết quả khi retry, khác biệt UI/API quyền bài học và công thức quiz hiện tại.

## 10. Câu hỏi và quyết định cần duyệt

Q01–Q03 trong nhật ký là nguồn chung. P01–P11, V01–V04 và toàn bộ FR/US/AC/NFR
cần được duyệt trước khi trở thành yêu cầu chính thức. Quyền quản trị chi
tiết, vòng đời phiên, retention và ngưỡng đo còn thiếu; đặc tả ghi phần bị
chặn, không tự hoàn thiện thành hợp đồng đã duyệt.
