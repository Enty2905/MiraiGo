# Japanese Learning App — Feature Specification

## 1. Trạng thái và nguồn

**Draft v0.1 — Proposed behavior, not implementation-ready.** Ngày: 2026-09-08.
Đích sau duyệt: `project-docs/feature-specification.md`, thay mẫu TaskFlow.
Nguồn yêu cầu: [PRD draft](product-requirements.md); nguồn quyết định và mã:
[nhật ký D/P/V/S/Q](decisions-and-sources.md); bối cảnh: [context](project-context.md).
PRD chưa được duyệt và còn quyết định chặn. Tài liệu này là nội dung cụ thể
để người dùng xem xét khi đã yêu cầu chuẩn bị cả bộ; không vượt review gate.

## 2. Phạm vi đặc tả

Bao phủ FR-01–FR-12 ở mức hành vi đề xuất. Các FR/US/AC tồn tại trong PRD
draft, không giả định đã được duyệt. Hành vi mới trong đặc tả cũng là Proposal.
Ngưỡng phát hành, chính sách phiên/retention, quyền admin chi tiết và nguồn
đánh giá chưa đủ điều kiện đặc tả hoàn chỉnh; xem mục 6.

Không đặc tả khóa học đầy đủ, chấm chữ/nét hoặc tính năng ngoài P10 như thể
đã bị loại trừ; P10 còn cần duyệt. Không quy định component, API contract,
database hoặc model mới.

## 3. Thuật ngữ và quy tắc chung

Thuật ngữ học/AI theo context. Ký hiệu F-xx là mục đặc tả; AC-xx là ID gốc
trong PRD. Trạng thái/ngưỡng có chữ “đề xuất” chưa là hành vi được duyệt.

### Quyền và phiên — Proposal theo P02

Khách dùng kana/từ điển. Người học có phiên dùng bài học, quiz, thẻ, chữ viết,
tiến độ và trợ lý. Admin có quyền quản trị được duyệt. Dữ liệu riêng phải
được kiểm tra quyền ở hệ thống; ẩn giao diện không đủ.

Khi mất phiên, không hiển thị dữ liệu riêng mới và yêu cầu đăng nhập; cho
quay lại đường dẫn nội bộ hợp lệ. Không hứa giữ mọi bản nháp qua đăng nhập/reload.
Khi không đủ quyền nhưng phiên hợp lệ, báo từ chối, không báo sai là dữ liệu rỗng.
Vòng đời/thu hồi token và hiệu lực khóa tài khoản còn Q03.

### Gửi, lưu và phục hồi — Proposal theo NFR-05

Các thao tác gửi/lưu hiển thị đang xử lý, ngăn gửi lặp do bấm liên tiếp,
chỉ báo đã lưu sau xác nhận. Nếu timeout có thể xảy ra sau khi đã ghi, hiển
thị trạng thái chưa xác định và kiểm tra lại trước khi tạo lần ghi mới.
Thử lại cùng lượt không tăng trùng số lần đúng/sai hoặc log; người học chủ
động bắt đầu lượt luyện mới được tính riêng. Đây là hợp đồng hành vi đề xuất,
không tuyên bố hệ thống đã có cơ chế chống trùng hoàn chỉnh.

Lỗi khi vẫn ở màn hình giữ dữ liệu nhập liên quan để sửa/thử lại. Reload/rời
trang chỉ giữ dữ liệu đã cam kết lưu trong bảng mục 7 PRD. Không lưu mật khẩu
vào bản nháp lâu dài, không đưa token/password vào thông báo lỗi.

### Trạng thái UI chung

| Trạng thái | Sự kiện | Kết quả quan sát đề xuất |
| --- | --- | --- |
| Ban đầu | Mở tính năng | Hiển thị hướng dẫn hoặc đang tải đúng ngữ cảnh |
| Đang tải | Nhận dữ liệu | Có nội dung hoặc trạng thái chưa có dữ liệu |
| Sẵn sàng | Đầu vào không hợp lệ | Lỗi gần trường liên quan, cho sửa, không gửi |
| Sẵn sàng | Gửi hợp lệ | Đang xử lý, không gửi lặp |
| Đang xử lý | Thành công xác nhận | Kết quả/đã lưu đúng phạm vi thao tác |
| Đang xử lý | Lỗi rõ ràng | Lỗi có thể sửa/thử lại, không thành công giả |
| Đang xử lý | Không biết server đã ghi chưa | Thông báo chưa xác định, kiểm tra trước retry |
| Bất kỳ thao tác bảo vệ | Thiếu phiên/quyền | Yêu cầu xác thực hoặc báo từ chối; không lộ dữ liệu riêng |

Disabled, focus và thông báo trạng thái phải quan sát được bằng bàn phím/
công nghệ hỗ trợ trong phạm vi NFR-01; không ấn định màu, bố cục hoặc modal.

## 4. Đặc tả từng tính năng

### F-01 — Tài khoản và truy cập

- **Mục đích/nguồn:** FR-01, US-01; P02/V01; S02/S11.
- **Người/quyền:** khách đăng ký/đăng nhập; người có phiên đăng xuất.
- **Điều kiện trước/điểm bắt đầu:** mở form hoặc truy cập trang bảo vệ.
- **Luồng chính:** nhập tên/email/password khi đăng ký; email/password khi
  đăng nhập → gửi → lưu phiên được trả về → tới đường dẫn nội bộ hợp lệ hoặc
  trang chính. Đăng ký thành công mở phiên, không sao chép quy tắc quay về
  Login của TaskFlow. Đăng xuất xóa phiên trình duyệt rồi về khu vực công khai.
- **Validation đề xuất:** tên/email không rỗng sau trim; email đúng định dạng;
  password theo V01 nếu được duyệt. Không tự trim mật khẩu. Không thêm trường
  xác nhận mật khẩu, email verification hoặc SSO trong bước này.
- **Lỗi/thay thế:** email đã tồn tại, thông tin đăng nhập sai, mạng lỗi hoặc
  tài khoản bị chặn có phản hồi phù hợp; không lộ token/password. Giữ tên/email
  đang nhập. Chỉ điều hướng sau thành công, không nhận redirect ra ngoài ứng dụng.
- **UI/dữ liệu/điều kiện sau:** trạng thái chung; phiên tồn tại sau thành công,
  thất bại không mở phiên. Dữ liệu tài khoản không bị xóa bởi logout.
- **Nghiệm thu:** AC-01a–AC-01d; kiểm tra đường dẫn trực tiếp, phiên hết hạn,
  tài khoản khác và người không có quyền admin.
- **Mở:** V01; lifetime/thu hồi token và xử lý tài khoản đổi trạng thái còn Q03.

### F-02 — Kana

- **Mục đích/nguồn:** FR-02, US-02; P06; S03.
- **Người/điều kiện:** khách hoặc người có phiên; dữ liệu kana có sẵn.
- **Luồng chính:** chọn Hiragana/Katakana → chọn ký tự → xem thông tin đang
  có → đánh dấu/bỏ dấu đã nhớ → số lượng dấu thay đổi theo tập ký tự.
- **Thay thế/lỗi:** không chọn ký tự thì hiển thị hướng dẫn; dữ liệu cục bộ
  lỗi định dạng không làm hỏng trang; ghi localStorage thất bại báo chưa lưu.
- **Validation/UI:** chỉ đánh dấu ký tự thuộc danh sách; thao tác bàn phím
  có thể chọn/đổi dấu. Không dùng dấu “đã nhớ” như chấm điểm năng lực tự động.
- **Dữ liệu/điều kiện sau:** theo P06 lưu trên trình duyệt nếu thành công;
  dùng chung trình duyệt có thể cùng thấy dấu, không gọi đó là dữ liệu riêng
  của tài khoản hoặc đồng bộ nhiều thiết bị. Xóa dữ liệu trình duyệt có thể mất dấu.
- **Nghiệm thu:** AC-02a–AC-02c; kiểm tra reload, bỏ dấu và lỗi lưu.
- **Mở:** cần duyệt P06; không tự thêm tính năng reset toàn bộ.

### F-03 — Nội dung và điều kiện mở bài

- **Mục đích/nguồn:** FR-03, US-03; P01–P03; S04/S11.
- **Người/điều kiện:** người có phiên; bài được công bố. Bài đầu của mỗi cấp
  được mở; bài sau phụ thuộc hoàn thành bài trước theo P03.
- **Luồng chính:** chọn cấp N5–N1 → xem danh sách → mở bài đủ điều kiện → xem
  nội dung thực có → đánh dấu hoàn thành hoặc thực hiện quiz → sau lưu thành
  công, tiến độ và quyền mở bài tiếp cập nhật.
- **Thay thế:** bài chưa mở hiển thị lý do/đường về bài trước; chưa có bài ở
  cấp thì báo chưa có nội dung; không tự sinh học liệu. Rời bài không tự hoàn thành.
- **Lỗi/validation:** cấp/số bài không hợp lệ, không tồn tại, tải tiến độ lỗi
  được phân biệt; không coi lỗi tải tiến độ là chắc chắn đã đủ điều kiện mở.
- **UI/dữ liệu:** đang tải, có bài, khóa bài, trống, lỗi; hoàn thành chỉ tồn tại
  sau xác nhận lưu và reload phải đọc lại đúng tài khoản.
- **Nghiệm thu:** AC-03a–AC-03c và AC-10a; thử đường dẫn trực tiếp tới bài khóa.
- **Khoảng cách:** UI/API bài học chưa bảo vệ nhất quán qua kiểm tra tĩnh;
  nếu P02/P03 được duyệt, cần kiểm tra cả quyền đọc và điều kiện học khi đặc tả triển khai.

### F-04 — Quiz

- **Mục đích/nguồn:** FR-04, US-04; P03/P04; S04/S08.
- **Người/điều kiện:** người có phiên, bài mở, có câu hỏi/đáp án được kiểm duyệt.
- **Luồng chính:** trả lời → nộp một lần → đối chiếu đáp án → hiển thị đúng/sai,
  đáp án, điểm lượt hiện tại và điểm tốt nhất riêng → lưu kết quả/hoàn thành.
- **Quy tắc đề xuất:** điểm hiện tại làm tròn `100 × đúng / tổng câu`; bỏ trống
  tính sai; tổng câu phải lớn hơn 0. So đáp án sau trim, chuyển chữ Latin về
  thường và gộp chuỗi khoảng trắng thành một khoảng trắng, phù hợp hàm hiện có.
  Không tự coi romaji/kana/Kanji là tương đương trừ khi danh sách đáp án chấp nhận
  có ghi. Điểm tốt nhất là max của các lượt đã lưu; không đặt điểm đậu.
- **Thay thế:** thử luyện mới xóa đáp án trên form nhưng không xóa điểm tốt nhất.
  Quiz rỗng không có nút nộp khả dụng. Rời khi chưa lưu không cam kết giữ bản nháp.
- **Lỗi/phục hồi:** giữ đáp án và kết quả lượt hiện tại khi lưu lỗi; tách “đã
  có kết quả” khỏi “đã lưu/hoàn thành”. Retry cùng lượt không tăng trùng tiến độ.
- **UI/dữ liệu/điều kiện sau:** thành công ghi điểm lượt và tốt nhất đúng nghĩa;
  lỗi không mở bài tiếp bằng một xác nhận hoàn thành giả.
- **Nghiệm thu:** AC-04a–AC-04d; ví dụ điểm cũ 80, lượt mới 50 thì hiện tại 50,
  tốt nhất 80; hai lần gửi lại cùng lượt không tạo hai lượt học.
- **Khoảng cách:** UI hiện có thể dùng điểm tốt nhất từ response để hiển thị
  điểm lượt. Không tuyên bố đã sửa code. P04 và tính nhất quán chấm/lưu cần duyệt/test.

### F-05 — Từ điển

- **Mục đích/nguồn:** FR-05, US-05; P01/P02; S05.
- **Người/điểm bắt đầu:** khách/người học mở tra cứu.
- **Luồng chính:** nhập truy vấn → tìm → xem mục từ/Kanji và cách đọc/nghĩa,
  ví dụ hoặc gợi ý nhớ khi dữ liệu thực sự có. Nội dung sinh phải được phân biệt.
- **Validation/thay thế:** trim truy vấn; rỗng thì hướng dẫn nhập, không khởi
  chạy tìm kiếm vô nghĩa. Không khớp thì báo không có kết quả, khác trạng thái lỗi.
- **Lỗi/UI:** giữ truy vấn, cho thử lại; khi đổi truy vấn chỉ kết quả của truy
  vấn hiện tại được trình bày, không gắn response cũ vào từ mới.
- **Dữ liệu/sau thao tác:** tra cứu không tự đánh dấu đã nhớ/hoàn thành.
  Lưu lịch sử tra cứu không thuộc cam kết draft này; nếu giữ như code hiện có,
  cần chốt quyền/retention trước khi đưa vào phạm vi chính thức.
- **Nghiệm thu:** AC-05a/AC-05b; kiểm tra dữ liệu thiếu trường, từ không có và lỗi mạng.
- **Mở:** Q02 xác định dữ liệu/nguồn gợi ý được kiểm duyệt.

### F-06 — Tạo, xem và xóa bộ thẻ

- **Mục đích/nguồn:** FR-06, US-06; P02/P05/P09; V03; S06.
- **Người/điều kiện:** người có phiên; chỉ bộ của mình. Thẻ hai mặt hỗ trợ từ
  hoặc Kanji do người dùng nhập, không tự hứa thêm chế độ Kanji chưa có.
- **Luồng chính:** nhập tên, mô tả tùy chọn, các mặt thẻ → lưu → thấy bộ mới
  → mở bộ sau reload. Validation theo V03 nếu được duyệt: trim các trường;
  tên/mặt trước/mặt sau bắt buộc, bộ ít nhất một thẻ, không lặng lẽ cắt nội dung vượt giới hạn.
- **Lỗi:** báo trường không hợp lệ/lỗi lưu, giữ nội dung đang nhập tại màn hình;
  kiểm tra trạng thái nếu server có thể đã tạo trước timeout, không tạo trùng khi retry.
- **Xóa theo P09:** chọn bộ → hiển thị tên bộ, các thẻ sẽ mất và không hoàn tác
  → xác nhận có chủ đích hoặc hủy. Hủy không đổi dữ liệu. Chờ kết quả xóa mới
  loại bộ khỏi danh sách; lỗi giữ bộ và cho thử lại.
- **Dữ liệu/sau thao tác:** bộ và thẻ thuộc tài khoản; xóa bộ không được xóa
  từ vựng học liệu dùng chung. Không cam kết xóa log/tiến độ liên quan nếu chưa duyệt chính sách đó.
- **Nghiệm thu:** AC-06a–AC-06c và NFR-02; thử ID bộ của tài khoản khác.
- **Mở:** V03, P09; ảnh hưởng xóa lên log/tiến độ phải được duyệt nếu cần thay baseline.

### F-07 — Ôn thẻ

- **Mục đích/nguồn:** FR-07, US-07; P05; S06/S08.
- **Người/điều kiện:** người học có bộ thẻ của mình, bộ không rỗng.
- **Luồng chính:** xem mặt trước → tự nhớ → xem mặt sau → chọn nhớ/chưa nhớ
  → tiếp tục → tổng kết và lưu kết quả lượt. Cho bắt đầu lượt mới có chủ đích.
- **Quy tắc:** tự đánh giá không là AI chấm; cùng thẻ trong cùng lượt không
  bị đếm nhiều lần do bấm lặp. Không hứa ngày ôn tối ưu, mastery hay SRS chỉ từ code.
- **Lỗi/thay thế:** bộ rỗng/không có quyền không bắt đầu luyện; lưu lỗi giữ
  tổng kết để thử lưu lại. Theo quy tắc chung, retry cùng lượt không tăng trùng số đúng/sai.
- **Dữ liệu/UI/sau thao tác:** tổng kết của lượt và trạng thái lưu tách riêng;
  reload chỉ khôi phục dữ liệu đã được cam kết lưu, không tự tiếp tục thẻ đang xem.
- **Nghiệm thu:** AC-07a–AC-07c; xem 3 thẻ, chọn 2 nhớ/1 chưa nhớ thì tổng kết
  khớp; thử lưu lại không biến thành 4 nhớ/2 chưa nhớ.
- **Mở:** cần duyệt P05; không đặc tả thuật toán SRS mới.

### F-08 — Đầu vào và gửi nhận dạng

- **Mục đích/nguồn:** FR-08, US-08; P07/P08; V02; S07.
- **Người/điều kiện:** người có phiên; kiểm tra khả năng kết nối/model trước gửi.
- **Luồng chính:** vẽ lên canvas hoặc tải ảnh giải mã được → xem đầu vào →
  gửi → khóa gửi/vẽ/tải/xóa đầu vào trong lượt xử lý → nhận kết quả hoặc lỗi.
- **Validation đề xuất:** chưa có nét thì không gửi. Chỉ nhận PNG/JPEG/WebP
  theo baseline nếu được duyệt. Giới hạn 4 MiB V02 áp dụng ảnh payload sau
  giải mã tại backend, không phải mặc định giới hạn file ảnh ban đầu trước canvas.
  File ảnh hỏng báo rõ, giữ đầu vào trước nếu chưa thay thành công.
- **Phân biệt ảnh trống:** việc “có file/nét” không chứng minh có ký tự; ảnh
  trắng vẫn có thể đi qua bước gửi rồi trả không nhận dạng được tại F-09.
- **Lỗi:** chưa kết nối/model chưa sẵn sàng thì báo và có kiểm tra lại; timeout
  hoặc xử lý lỗi giữ ảnh trên màn hình, cho thử lại. V02 là timeout kỹ thuật
  quan sát; chỉ áp dụng làm baseline khi duyệt, không gọi là SLA.
- **Rời màn hình:** đầu vào/kết quả tạm không được hứa khôi phục; response của
  màn hình cũ không cập nhật màn hình mới hoặc ghi tiến độ ngầm.
- **Nghiệm thu:** AC-08a–AC-08c; gửi lặp, file hỏng, payload quá hạn, mất kết
  nối, model chưa nạp và rời trang trong lúc chờ.
- **Mở:** Q03 còn giới hạn file ban đầu/pixel và ngưỡng đánh giá; P08/V02 cần duyệt.

### F-09 — Kết quả OCR

- **Mục đích/nguồn:** FR-09, US-09; P07/P08; S07.
- **Điều kiện/luồng chính:** response thuộc đúng ảnh đã gửi → hiển thị văn
  bản nhận dạng, số ký tự và confidence với ý nghĩa tin cậy dự đoán.
- **Thay thế:** không có ký tự được chấp nhận thì báo không nhận dạng được;
  có vùng bị bỏ qua thì báo có thể thiếu nội dung. Cho viết/tải lại khi hết xử lý.
- **Quy tắc:** không tự biến vùng confidence cao thành “chắc chắn đúng”; không
  gọi confidence là điểm chữ/điểm JLPT; không đưa khả năng chấm nét vào kết quả.
- **UI/dữ liệu:** sau đổi ảnh, kết quả cũ bị xóa/không còn gắn với ảnh mới.
  P08 đề xuất không lưu ảnh hoặc kết quả dài hạn và không cập nhật điểm học.
- **Nghiệm thu:** AC-09a–AC-09c; response rỗng, một phần, chữ ngoài nhãn và đổi ảnh.
- **Mở:** phạm vi chất lượng ảnh/ký tự Q02/Q03; không cam kết đầy đủ N2/N1.

### F-10 — Tiến độ học

- **Mục đích/nguồn:** FR-10, US-10; P04–P06; S08.
- **Người/điểm bắt đầu:** người có phiên mở tổng quan hoặc quay lại học.
- **Luồng chính:** tải dữ liệu đúng tài khoản → hiển thị bài hoàn thành và
  kết quả đã lưu; điểm hiện tại/tốt nhất và tự đánh giá được gọi đúng nghĩa.
- **Thay thế/lỗi:** chưa học là trạng thái trống có hướng dẫn; lỗi tải là lỗi,
  không thay bằng số 0 giả. Cho tải lại. Sau ghi dữ liệu thành công cập nhật
  tiến độ; lỗi ghi giữ trạng thái đã biết trước, không nhận hoàn thành giả.
- **Dữ liệu:** tách dấu kana cục bộ khỏi tiến độ tài khoản. Không dùng streak,
  mastery hoặc số bài hoàn thành làm chứng nhận N5–N1.
- **Nghiệm thu:** AC-10a–AC-10c; hai tài khoản, reload, lỗi đọc/ghi và dữ liệu rỗng.
- **Mở:** retention và các chỉ số bổ sung ngoài P05 còn cần quyết định.

### F-11 — Trợ lý học tập

- **Mục đích/nguồn:** FR-11, US-11; P02; V04; S09.
- **Người/điều kiện:** người có phiên; dịch vụ trợ lý cấu hình được; hỏi về
  nội dung học như từ/Kanji/ngữ pháp/cách dùng hoặc cách nhớ.
- **Luồng chính:** chọn mức nội dung phù hợp → nhập câu hỏi → gửi → hiển thị
  đang trả lời → xem câu trả lời và nguồn khi có → mở lại lịch sử đã lưu.
- **Validation:** câu hỏi sau trim không rỗng; V04 nếu được duyệt. Không gửi
  lặp khi đang chờ; không hứa câu trả lời nào cũng có nguồn dữ liệu nội bộ.
- **Lỗi/phục hồi:** dịch vụ lỗi giữ câu hỏi để gửi lại; nếu có câu trả lời nhưng
  lưu lịch sử lỗi, giữ câu trả lời tại màn hình và báo chưa lưu, cho thử lưu
  lại cùng trao đổi mà không sinh một câu trả lời khác hoặc lịch sử trùng.
- **Quyền/dữ liệu:** chỉ mở phiên của mình; không truyền hoặc hiển thị lịch
  sử tài khoản khác. Thời hạn lưu và chính sách gửi dữ liệu cho Groq cần Q03.
- **Nghiệm thu:** AC-11a–AC-11c; câu hỏi rỗng/quá dài, dịch vụ lỗi, lưu lỗi sau
  khi sinh nội dung, truy cập phiên khác và reload sau lưu thành công.
- **Khoảng cách:** chuỗi sinh/lưu hiện có chưa chứng minh phục hồi từng phần;
  hành vi đề xuất cần duyệt và kiểm thử, không tự mở rộng tích hợp.

### F-12 — Quản trị

- **Mục đích/nguồn:** FR-12, US-12; P02/P09; S10/S11.
- **Người/điều kiện:** admin có quyền hợp lệ; không suy ra vai trò giáo viên/
  lớp học từ enum `teacher` hiện có trong code.
- **Phạm vi đề xuất:** xem/tạo/sửa từ vựng, Kanji, ngữ pháp; xem tài khoản;
  các thay đổi vai trò/trạng thái tài khoản chỉ sẵn sàng khi ma trận quyền được duyệt.
- **Luồng nội dung:** chọn loại → xem danh sách → tạo/sửa → kiểm tra trường
  bắt buộc/nhãn cấp → lưu → hiển thị bản đã lưu. Không im lặng cắt dữ liệu vượt giới hạn.
- **Xóa theo P09:** nội dung có tham chiếu thì từ chối với lý do; nội dung
  độc lập cần xác nhận đúng đối tượng/hậu quả. Hủy không đổi; lỗi giữ dữ liệu.
- **Lỗi/UI/dữ liệu:** form lỗi giữ bản nhập; không có quyền bị từ chối ở hệ
  thống. Thành công ghi dữ liệu dùng chung, không sửa/xóa tiến độ ngầm ngoài cam kết.
- **Nghiệm thu:** AC-12a–AC-12c; non-admin gọi trực tiếp, xóa mục đang dùng,
  hủy xóa, lưu lỗi và đọc lại sau reload.
- **Phần chặn:** trường/giới hạn từng loại nội dung, quyền cấp admin/khóa tài
  khoản, tự đổi quyền và bảo vệ admin cuối cùng chưa có quyết định. Không
  tự chọn hoặc coi toàn bộ màn hình quản trị sẵn sàng triển khai.

## 5. Truy vết yêu cầu

| PRD | User story | Đặc tả | Tiêu chí nguồn | Điều kiện còn chờ |
| --- | --- | --- | --- | --- |
| FR-01 | US-01 | F-01 | AC-01a–AC-01d | P02, V01, Q03 phiên |
| FR-02 | US-02 | F-02 | AC-02a–AC-02c | P06 |
| FR-03 | US-03 | F-03 | AC-03a–AC-03c | P01–P03, Q02 |
| FR-04 | US-04 | F-04 | AC-04a–AC-04d | P03/P04, Q02 đáp án |
| FR-05 | US-05 | F-05 | AC-05a/AC-05b | P01, Q02 |
| FR-06 | US-06 | F-06 | AC-06a–AC-06c | P05/P09, V03 |
| FR-07 | US-07 | F-07 | AC-07a–AC-07c | P05 |
| FR-08 | US-08 | F-08 | AC-08a–AC-08c | P07/P08, V02, Q02/Q03 |
| FR-09 | US-09 | F-09 | AC-09a–AC-09c | P07/P08, Q02/Q03 |
| FR-10 | US-10 | F-10 | AC-10a–AC-10c | P04–P06, Q03 |
| FR-11 | US-11 | F-11 | AC-11a–AC-11c | V04, Q03 |
| FR-12 | US-12 | F-12 | AC-12a–AC-12c | P09, ma trận quyền/validation |

NFR-01–NFR-06 áp dụng theo điều kiện tại PRD, không có FR chưa được ánh xạ.
Ánh xạ không có nghĩa đã kiểm thử hoặc mọi phần đã đủ quyết định.

## 6. Câu hỏi và hành vi cần duyệt

- Duyệt hoặc sửa P01–P11 và V01–V04; các giá trị hiện có chỉ là baseline đề xuất.
- Q02: người phụ trách và bộ nội dung/đáp án từng cấp; bộ ảnh và điều kiện OCR.
- Q03: mục tiêu đo, thiết bị đích, giới hạn ảnh ban đầu, retention, phiên và
  hiệu lực thay đổi quyền; không tự đặt giá trị.
- Quản trị: ma trận thao tác và trường/validation chính xác cho từng loại nội
  dung/tài khoản; quyền phá hủy cần được xác nhận trước đặc tả đầy đủ.
- Lịch sử tra cứu, bookmark, hồ sơ mở rộng và các route ngoài D05 không tự
  trở thành yêu cầu; muốn giữ trong phạm vi phát hành phải có quyết định.

P3.2 phải review lại phần thay đổi sau phản hồi. Chưa đánh dấu READY hoặc
Approved; không sửa code theo tài liệu này chỉ vì đã có FR/AC chi tiết.
