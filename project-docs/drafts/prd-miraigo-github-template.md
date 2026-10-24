# PRD — MiraiGo: Hệ thống hỗ trợ học tập tiếng Nhật

| Thuộc tính | Giá trị |
| --- | --- |
| Phiên bản | 1.0 |
| Trạng thái | Draft — chờ review |
| Ngày cập nhật | 15/09/2026 |
| Phạm vi | MVP phục vụ đồ án |

## 1. Tóm tắt

MiraiGo là ứng dụng web hỗ trợ người Việt học tiếng Nhật trong một luồng gồm
học, tra cứu, luyện tập và ôn lại. MVP tập trung vào kana, bài học/quiz, từ vựng
và Kanji, flashcard cá nhân, tiến độ và nhận diện chữ viết bằng AI. Tài liệu này
quy định sản phẩm cần làm và điều kiện xác nhận hoàn thành; cách triển khai chi
tiết thuộc tài liệu kỹ thuật.

## 2. Vấn đề

Người tự học tiếng Nhật thường dùng các công cụ riêng cho kana, từ điển, quiz,
flashcard và luyện viết. Dữ liệu học bị phân tán nên họ khó biết nội dung nào đã
học, trả lời sai hoặc cần ôn lại, đặc biệt với từ vựng và Kanji.

Nhóm chưa thực hiện phỏng vấn hoặc khảo sát chính thức. Nhu cầu về một luồng học
thống nhất hiện là giả thuyết cần kiểm chứng bằng thử nghiệm người dùng, không
phải kết quả nghiên cứu đã xác nhận.

## 3. Mục tiêu và non-goals

| ID | Mục tiêu | Cách xác nhận |
| --- | --- | --- |
| G-01 | Biết phần cần ôn sau luyện tập | Hoàn thành quiz mẫu và xem phản hồi từng câu |
| G-02 | Quản lý nội dung cần nhớ | Tạo, mở lại, ôn và xóa flashcard cá nhân |
| G-03 | Theo dõi hoạt động đã lưu | Đăng nhập lại vẫn xem được tiến độ đã xác nhận lưu |
| G-04 | Nhận gợi ý AI minh bạch | Kết quả hoặc lỗi thể hiện đúng trạng thái và giới hạn |

Non-goals:

- Không cam kết đầy đủ giáo trình/đề thi N5–N1 vì học liệu chưa được kiểm duyệt.
- Không chấm nét hoặc thứ tự nét vì nhận diện ký tự khác với chấm chữ viết.
- Không dùng ảnh người học để huấn luyện AI khi chưa có chính sách dữ liệu.
- Không xây thanh toán, mạng xã hội hoặc bảng xếp hạng trong MVP.

## 4. Người dùng

**U-01 — Người học:** người Việt học tiếng Nhật để thi JLPT, học tập hoặc làm
việc. Họ cần học/tra cứu, luyện tập và quay lại các mục chưa nhớ trên trình duyệt.

**U-02 — Quản trị viên:** thành viên quản lý tài khoản và học liệu trong quyền
được cấp. Quyền chi tiết còn là quyết định mở.

Sản phẩm không tối ưu cho giáo viên quản lý lớp, người cần chứng chỉ chính thức
hoặc trẻ em cần luồng kiểm soát của phụ huynh.

## 5. Yêu cầu sản phẩm

Mỗi yêu cầu dùng user story, ID, priority và tiêu chí chấp nhận. P0 bắt buộc cho
MVP; P1 thực hiện sau khi P0 ổn định. MVP có tối đa tám yêu cầu P0.

### PR-01 — Phiên và quyền truy cập (P0)

**User story:** Là người học, tôi muốn đăng nhập để dùng dữ liệu học tập riêng.

Chấp nhận khi:

- AC-01.1: Thông tin hợp lệ tạo phiên; thông tin sai không tạo phiên.
- AC-01.2: Truy cập dữ liệu bảo vệ khi chưa đăng nhập bị từ chối.
- AC-01.3: Tài khoản A không đọc, sửa hoặc xóa dữ liệu của tài khoản B.
- AC-01.4: Đăng xuất kết thúc phiên trình duyệt và chặn khu vực bảo vệ.
- AC-01.5: Lỗi không làm lộ mật khẩu hoặc token.

### PR-02 — Học kana (P0)

**User story:** Là người mới học, tôi muốn đánh dấu kana đã nhớ để biết phần cần ôn.

Chấp nhận khi:

- AC-02.1: Chọn ký tự hiển thị nội dung tương ứng.
- AC-02.2: Đánh dấu/bỏ dấu cập nhật trạng thái và số ký tự đã nhớ.
- AC-02.3: Lưu cục bộ thành công giữ trạng thái sau reload và thông báo dữ liệu
  chưa đồng bộ với tài khoản.

### PR-03 — Bài học theo cấp (P0)

**User story:** Là người học, tôi muốn chọn bài theo cấp để học nội dung phù hợp.

Chấp nhận khi:

- AC-03.1: Chọn cấp chỉ hiển thị bài đã được công bố cho cấp đó.
- AC-03.2: Cấp chưa có bài hiển thị trạng thái trống, không hứa nội dung chưa có.
- AC-03.3: Bài không tồn tại/tải lỗi có cách quay lại hoặc thử lại và không ghi
  hoàn thành giả.

### PR-04 — Quiz và phản hồi (P0)

**User story:** Là người học, tôi muốn biết đáp án đúng/sai để ôn phần chưa nhớ.

Chấp nhận khi:

- AC-04.1: Quiz hợp lệ hiển thị đúng/sai từng câu, đáp án và điểm lượt làm.
- AC-04.2: Quiz rỗng không thể nộp và không tạo kết quả.
- AC-04.3: Lưu lỗi giữ câu trả lời nếu có thể, báo chưa lưu và cho thử lại.
- AC-04.4: Gửi lại cùng lượt do lỗi mạng không tạo kết quả trùng.

### PR-05 — Tra cứu từ và Kanji (P0)

**User story:** Là người học, tôi muốn tra từ/Kanji để xem dữ liệu hiện có.

Chấp nhận khi:

- AC-05.1: Truy vấn có nội dung trả kết quả khớp từ dữ liệu hệ thống.
- AC-05.2: Không tự tạo nghĩa, cách đọc hoặc ví dụ còn thiếu.
- AC-05.3: Phân biệt truy vấn rỗng, không có kết quả và lỗi dịch vụ.

### PR-06 — Flashcard cá nhân (P0)

**User story:** Là người học, tôi muốn quản lý flashcard cho mục khó nhớ.

Chấp nhận khi:

- AC-06.1: Bộ thẻ hợp lệ được lưu cho đúng tài khoản và mở lại sau reload.
- AC-06.2: Lưu lỗi giữ bản nhập và không hiển thị thành công giả.
- AC-06.3: Xóa cần xác nhận; hủy không đổi dữ liệu; thành công chỉ xóa bộ đã chọn.

### PR-07 — Tiến độ học tập (P0)

**User story:** Là người học, tôi muốn xem hoạt động đã hoàn thành để học tiếp.

Chấp nhận khi:

- AC-07.1: Chỉ hiển thị kết quả thuộc tài khoản đang đăng nhập.
- AC-07.2: Kết quả/bài hoàn thành chỉ xuất hiện sau khi lưu thành công.
- AC-07.3: Tải lỗi không xóa dữ liệu đang hiển thị và có cách thử lại.

### PR-08 — Nhận diện chữ viết bằng AI (P0)

**User story:** Là người học, tôi muốn gửi ảnh/vùng vẽ để nhận gợi ý ký tự.

Chấp nhận khi:

- AC-08.1: Đầu vào hợp lệ và AI sẵn sàng trả ký tự cùng độ tin cậy.
- AC-08.2: Ảnh lỗi hoặc AI chưa sẵn sàng báo lỗi, cho thử lại, không tạo dự đoán giả.
- AC-08.3: Kết quả được gọi là gợi ý, không phải điểm năng lực/chất lượng chữ.
- AC-08.4: Không lưu dài hạn ảnh/kết quả khi chưa có quyết định dữ liệu.

### PR-09 — Trợ lý học tập (P1)

**User story:** Là người học, tôi muốn hỏi trợ lý để nhận giải thích bổ sung.

Chấp nhận khi câu hỏi nhận câu trả lời hoặc lỗi có thể thử lại; câu trả lời được
ghi là nội dung AI có thể sai; lỗi trả lời và lỗi lưu lịch sử được phân biệt.

### PR-10 — Quản trị dữ liệu (P1)

**User story:** Là admin, tôi muốn quản lý dữ liệu trong quyền được cấp.

Chấp nhận khi người không có quyền bị từ chối; dữ liệu lỗi không được lưu; thao
tác xóa có xác nhận và nêu rõ dữ liệu bị ảnh hưởng.

## 6. Yêu cầu phi chức năng

**NFR-01 — Bảo mật (P0):** yêu cầu không có phiên/quyền hợp lệ bị từ chối trước
khi trả dữ liệu. Kiểm thử hai tài khoản phải không truy cập chéo được dữ liệu.

**NFR-02 — Dữ liệu nhạy cảm (P0):** mật khẩu không lưu dạng văn bản thuần; token,
mật khẩu và ảnh không xuất hiện trong response lỗi hoặc log kiểm thử.

**NFR-03 — Phục hồi lỗi (P0):** mỗi thao tác phân biệt đang xử lý, thành công,
trống và lỗi. Mất kết nối phải cho thử lại và không báo thành công sai.

**NFR-04 — Khả năng sử dụng (P1):** luồng P0 dùng được ở 360 px và 1280 px;
trạng thái không chỉ thể hiện bằng màu; chức năng chính dùng được bằng bàn phím.

**NFR-05 — Hiệu năng (TBD):** chưa có baseline để đặt ngưỡng. Nhóm phải đo các
luồng P0 trước khi duyệt con số; từ “nhanh” không thay cho tiêu chí đo được.

## 7. Thiết kế

Chưa có prototype được duyệt. Khi có, PRD liên kết tới thiết kế thay vì mô tả
bố cục. Prototype đã duyệt là nguồn đúng cho bố cục; PRD là nguồn đúng cho hành
vi và tiêu chí chấp nhận.

## 8. Câu hỏi mở

| ID | Câu hỏi | Người quyết định | Cần trước |
| --- | --- | --- | --- |
| Q-01 | MVP có học liệu đến cấp nào, ai duyệt? | Nhóm/Giảng viên | PR-03 đến PR-05 |
| Q-02 | Công thức điểm và điều kiện hoàn thành/mở bài? | Nhóm sản phẩm | PR-04, PR-07 |
| Q-03 | Có lưu ảnh/kết quả AI không, và bao lâu? | Nhóm/Giảng viên | PR-08 |
| Q-04 | Admin được xem, sửa, xóa dữ liệu nào? | Nhóm/Giảng viên | PR-10 |
| Q-05 | Ngưỡng hiệu năng MVP là gì? | Nhóm kỹ thuật | NFR-05 |

Khi có câu trả lời, chuyển câu hỏi thành quyết định có ngày và nguồn; không xóa
lịch sử câu hỏi.

## 9. Phát hành và đánh giá

MVP được demo trước cho nhóm và giảng viên. Điều kiện demo: health check hoạt
động, dữ liệu mẫu được duyệt và AC của PR-01 đến PR-08 có kết quả `PASS`, hoặc
ngoại lệ được ghi rõ và chấp nhận.

| Tiêu chí | Bằng chứng |
| --- | --- |
| AC-01 | Test xác thực, quyền và hai tài khoản độc lập |
| AC-02 đến AC-07 | Test thành công, dữ liệu trống, lưu lỗi và reload |
| AC-08 | Test ảnh hợp lệ, ảnh lỗi và AI chưa sẵn sàng |
| NFR-01 đến NFR-03 | Test quyền, response/log và mất kết nối |
| NFR-04 | Kiểm tra responsive và bàn phím |

## 10. Ngoài phạm vi

- Spaced repetition hoàn chỉnh và lộ trình thích ứng.
- Cá nhân hóa học liệu từ lịch sử dài hạn.
- Đồng bộ kana giữa thiết bị khi chưa có quyết định thay lưu cục bộ.
- Mobile native, học offline và thông báo nhắc học.
- Huấn luyện/triển khai mô hình AI mới ngoài adapter của hệ thống.

## 11. Thiết kế sản phẩm

Phần này chuyển các yêu cầu P0 thành định hướng trải nghiệm có thể review trước
khi triển khai. Wireframe là bố cục khung, không phải giao diện cuối cùng. Mọi
chi tiết chưa được nhóm duyệt vẫn giữ trạng thái đề xuất.

### 11.1 Luồng người dùng (User Flow)

#### UF-01 — Luồng học và ôn tập chính

Luồng này truy vết tới PR-01, PR-03, PR-04, PR-06 và PR-07.

```mermaid
flowchart TD
    A[Trang chủ] --> B{Đã đăng nhập?}
    B -- Chưa --> C[Đăng nhập / Đăng ký]
    C --> D[Bảng điều khiển học tập]
    B -- Rồi --> D
    D --> E[Chọn cấp độ và bài học]
    E --> F[Đọc nội dung bài]
    F --> G[Làm quiz]
    G --> H[Xem đúng/sai và điểm]
    H --> I{Có mục cần ôn?}
    I -- Có --> J[Thêm vào flashcard]
    J --> K[Ôn flashcard]
    I -- Không --> L[Xem tiến độ]
    K --> L
    L --> D
```

Luồng thay thế và lỗi:

- Đăng nhập lỗi giữ lại định danh an toàn, báo lỗi và không tạo phiên.
- Bài học/quiz trống hiển thị trạng thái trống và đường quay lại.
- Lưu kết quả hoặc flashcard lỗi giữ dữ liệu đang làm và cho thử lại.
- Gửi lặp cùng một lượt quiz không được tạo tiến độ trùng.

#### UF-02 — Luồng nhận diện chữ viết

Luồng này truy vết tới PR-08.

```mermaid
flowchart TD
    A[Mở luyện viết] --> B{Chọn đầu vào}
    B --> C[Vẽ trên canvas]
    B --> D[Tải ảnh]
    C --> E[Xem trước và gửi]
    D --> E
    E --> F{Đầu vào hợp lệ?}
    F -- Không --> G[Hiện lỗi và hướng dẫn sửa]
    F -- Có --> H{AI sẵn sàng?}
    H -- Không --> I[Thông báo chưa sẵn sàng]
    H -- Có --> J[Hiện ký tự dự đoán và confidence]
    G --> B
    I --> K[Thử lại]
    K --> H
    J --> L[Viết lại hoặc kết thúc]
```

Nguyên tắc: không có nhánh lỗi nào dẫn tới kết quả giả; confidence không được
đổi thành điểm năng lực.

#### UF-03 — Luồng tra cứu và tạo flashcard

Luồng này truy vết tới PR-05 và PR-06.

```mermaid
flowchart LR
    A[Nhập từ hoặc Kanji] --> B[Tìm kiếm]
    B --> C{Có kết quả?}
    C -- Có --> D[Xem nghĩa/cách đọc hiện có]
    D --> E[Thêm vào bộ flashcard]
    E --> F{Lưu thành công?}
    F -- Có --> G[Mở bộ thẻ]
    F -- Không --> H[Giữ bản nhập và thử lại]
    C -- Không --> I[Hiện không có kết quả]
```

### 11.2 Bố cục khung (Wireframing)

#### WF-01 — Dashboard học tập (desktop)

```text
┌──────────────────────────────────────────────────────────────┐
│ MiraiGo       Học | Tra cứu | Flashcard | Luyện viết   Hồ sơ │
├──────────────────────────────────────────────────────────────┤
│ Chào bạn, [Tên]                       Tiến độ tuần [=====---] │
│                                                              │
│ Tiếp tục học                                                 │
│ ┌──────────────────────────────┐  ┌────────────────────────┐ │
│ │ Bài đang học                 │  │ Nội dung cần ôn        │ │
│ │ [Tên bài] · [Cấp độ]         │  │ Từ: --  Kanji: --     │ │
│ │ [Tiếp tục học]               │  │ [Ôn flashcard]         │ │
│ └──────────────────────────────┘  └────────────────────────┘ │
│                                                              │
│ Lối tắt: [Kana] [Tra cứu] [Quiz] [Luyện viết AI]             │
└──────────────────────────────────────────────────────────────┘
```

Thứ tự ưu tiên thị giác: hành động “Tiếp tục học” → nội dung cần ôn → lối tắt.
Dashboard không được biến thành danh sách các card có trọng lượng ngang nhau.

#### WF-02 — Bài học và quiz (desktop)

```text
┌──────────────────────────────────────────────────────────────┐
│ ← Danh sách bài      [Tên bài]                     [Tiến độ] │
├───────────────────────────────┬──────────────────────────────┤
│ Nội dung bài học              │ Mục lục                      │
│                               │ 1. Từ vựng                   │
│ [Từ/Kanji]                    │ 2. Kanji                     │
│ [Cách đọc]                    │ 3. Quiz                      │
│ [Nghĩa và ví dụ đã duyệt]     │                              │
│                               │                              │
│ [Bài trước]      [Bắt đầu quiz]                              │
└───────────────────────────────┴──────────────────────────────┘
```

Trên mobile, mục lục thu gọn thành nút điều hướng; nội dung nằm một cột và hành
động chính vẫn xuất hiện sau phần học, không che nội dung.

#### WF-03 — Luyện viết AI

```text
┌──────────────────────────────────────────────────────────────┐
│ ← Quay lại                    Luyện nhận diện chữ viết       │
├───────────────────────────────┬──────────────────────────────┤
│ [Vẽ] [Tải ảnh]                │ Kết quả                      │
│ ┌───────────────────────────┐ │ Ký tự dự đoán: [—]          │
│ │                           │ │ Độ tin cậy: [—]             │
│ │       Canvas / ảnh        │ │                              │
│ │                           │ │ Đây là gợi ý AI, không phải │
│ └───────────────────────────┘ │ điểm chấm chữ viết.          │
│ [Xóa]              [Nhận diện]│ [Thử lại]                    │
└───────────────────────────────┴──────────────────────────────┘
```

Khu vực kết quả phải có bốn trạng thái riêng: chưa gửi, đang xử lý, có kết quả,
và lỗi/chưa sẵn sàng. Trên mobile, kết quả đặt dưới vùng nhập.

### 11.3 Tạo bản mẫu (Prototyping)

Prototype được đề xuất ở mức tương tác trung bình trước khi làm giao diện hoàn
chỉnh. Công cụ có thể là Figma hoặc prototype HTML; link sẽ được bổ sung sau khi
nhóm tạo và duyệt.

| Prototype | Màn hình | Tương tác bắt buộc | Requirement |
| --- | --- | --- | --- |
| PT-01 | Đăng nhập → Dashboard | Lỗi form, đăng nhập thành công, đăng xuất | PR-01 |
| PT-02 | Bài học → Quiz → Kết quả | Chọn đáp án, nộp, xem đúng/sai, lưu lỗi | PR-03, PR-04, PR-07 |
| PT-03 | Tra cứu → Flashcard | Không kết quả, thêm thẻ, lưu lỗi, xác nhận xóa | PR-05, PR-06 |
| PT-04 | Luyện viết AI | Vẽ/tải ảnh, loading, kết quả, AI lỗi, thử lại | PR-08 |

Prototype đạt điều kiện review khi:

- Có thể đi hết UF-01 đến UF-03 mà không gặp đường cụt.
- Có trạng thái empty, loading, success và error cho thao tác bất đồng bộ.
- Có bản desktop 1280 px và mobile 360 px cho WF-01 đến WF-03.
- Nội dung AI có nhãn giới hạn ngay tại nơi hiển thị kết quả.
- Thành phần tương tác có tên dễ hiểu và thứ tự focus hợp lý.

### 11.4 AI đánh giá thiết kế (AI Design Review)

**Trạng thái:** review sơ bộ từ PRD, wireframe và codebase ngày 15/09/2026. Chưa
phải review trực quan cuối vì chưa có prototype/render đầy đủ của các tính năng.
AI không tự phê duyệt thiết kế; nhóm chịu trách nhiệm quyết định và xác minh.

Tiêu chí review:

- Luồng nhiệm vụ và mức độ dễ tìm của hành động chính.
- Thứ bậc thị giác, tính nhất quán và khả năng đọc.
- Responsive ở desktop/mobile và khả năng dùng bàn phím.
- Empty/loading/error/success và khả năng phục hồi.
- Minh bạch của kết quả do AI tạo.

| ID | Mức độ | Phát hiện sơ bộ | Đề xuất | Trạng thái |
| --- | --- | --- | --- | --- |
| DR-01 | Blocker | Giao diện hiện tại mới là trang giới thiệu technical base; chưa có màn hình cho UF-01 đến UF-03 | Tạo PT-01 đến PT-04 trước review cuối | Open |
| DR-02 | Major | Chưa có prototype để kiểm tra thứ bậc và đường cụt của luồng học | Prototype toàn bộ nhánh chính/lỗi trong bảng PT | Open |
| DR-03 | Major | Chưa có bằng chứng trực quan về mobile cho màn hình nghiệp vụ | Tạo frame 360 px và 1280 px cho ba wireframe | Open |
| DR-04 | Major | Kết quả AI có nguy cơ bị hiểu là đánh giá năng lực | Giữ disclaimer cạnh ký tự/confidence ở mọi trạng thái kết quả | Proposed fix |
| DR-05 | Minor | Visual hiện tại có bản sắc giấy–mực–vermilion phù hợp chủ đề Nhật nhưng cần kiểm tra tương phản ở UI thật | Dùng palette hiện có có chủ đích và đo contrast khi có prototype | Monitor |


