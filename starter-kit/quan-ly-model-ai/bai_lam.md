# BÀI LÀM –(CHỦ ĐỀ QUẢN LÝ MODEL AI)

- **Mã đề:**
- **Họ tên:Vũ Nam Tùng**
- **Lớp:CNTT3**
- **Link repository:**
- **Hệ điều hành (Windows/macOS):Windows**

## 4.2. Thao tác máy tính cơ bản bằng CLI

### Các lệnh đã chạy

```shell
pwd
ls -Force
mv .\tai_lieu_ban_giao.txt .\docs\
New-Item backup
cp .\data\chi_phi_model_thang_11.xlsx .\backup
rm .\model_cache_01.tmp
cd .\logs
ls
cd..
Get-ChildItem -Recurse -Force
```

### Kết quả liệt kê toàn bộ dự án (Windows: Get-ChildItem -Recurse -Force; macOS: ls -aR)

```text

    Directory: D:\MiniPrjoect\starter-kit\quan-ly-model-ai


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/10/2026   1:45 PM                data
d-----        11/10/2026   1:46 PM                docs
d-----        11/10/2026   1:44 PM                evidence
d-----        11/10/2026   1:45 PM                logs
d-----        11/10/2026   1:42 PM                web
-a----        11/10/2026   1:41 PM             96 .env
-a----        11/10/2026   1:41 PM           5815 backup
-a----        11/10/2026   1:41 PM           2665 bai_lam.md


    Directory: D:\MiniPrjoect\starter-kit\quan-ly-model-ai\data


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026   1:41 PM           5815 chi_phi_model_thang_11.xlsx


    Directory: D:\MiniPrjoect\starter-kit\quan-ly-model-ai\docs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026   1:41 PM            204 tai_lieu_ban_giao.txt


    Directory: D:\MiniPrjoect\starter-kit\quan-ly-model-ai\logs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026   1:41 PM           1234 inference.log


    Directory: D:\MiniPrjoect\starter-kit\quan-ly-model-ai\web


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/10/2026   1:42 PM                images
-a----        11/10/2026   1:41 PM            644 app.js
-a----        11/10/2026   1:41 PM            567 index.html
-a----        11/10/2026   1:41 PM            460 style.css


    Directory: D:\MiniPrjoect\starter-kit\quan-ly-model-ai\web\images


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026   1:41 PM            339 logo-ai-hub.png

```

## 4.3. Lọc log vận hành Model AI

### a) Lệnh lọc các dòng ERROR

```shell
Get-Content .\logs\inference.log | Select-String "ERROR" > .\logs\loi_model.txt
Get-Content .\logs\loi_model.txt

```

### 2 dòng đầu tiên trong logs/loi_model.txt

```text
2026-11-10 08:27:45 ERROR POST /v1/chat/completions model=CLAUDE-35
2026-11-10 08:31:12 ERROR POST /v1/audio/transcriptions model=WHISPER-V3

```

### b) Lệnh đếm số dòng WARNING và kết quả

```shell
 (Get-Content .\logs\inference.log | Select-String "ERROR").Count

```

```text
6

```

## 4.4. Chạy script tong_hop (.ps1 hoặc .sh)

### Lệnh chạy (Windows: nếu dùng Phụ lục 2 thì ghi cả 2 lệnh)

```shell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\tong_hop.ps1

```

### Nội dung file logs/tong_hop.txt

```text
=== BAO CAO VAN HANH MODEL AI ===

2026-11-10 08:09:18 WARNING POST /v1/embeddings model=LLAMA-2-OLD
2026-11-10 08:16:05 WARNING GET /v1/fine-tune/jobs-legacy
2026-11-10 08:38:29 WARNING GET /images/model-card-v1.png
2026-11-10 09:01:44 WARNING POST /v1/completions model=DAVINCI-002
2026-11-10 09:14:02 WARNING GET /v1/quota/expired-key




Count    : 6
Average  :
Sum      :
Maximum  :
Minimum  :
Property :





```

## 4.5. README.md và bảo vệ thông tin bí mật

> README.md, .gitignore và .env.example được chấm trực tiếp trên file ở gốc dự án. Đánh dấu `[x]` vào các mục đã làm để tự kiểm tra.

- [x] README.md: Heading 1, hình ảnh (`![Alt](path)`), mô tả có **in đậm**, _in nghiêng_ và `inline code`, bảng, code block, task list, blockquote
- [x] .gitignore có dòng `.env` (tên file đúng, không có đuôi .txt)
- [x] .env.example có đủ tên biến, giá trị để trống (tên file đúng, không có đuôi .txt)

## 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi

### Bảng lỗi

| STT | Tab DevTools phát hiện lỗi | Tên file hoặc thông báo lỗi                                                     | Cách khắc phục                                                                                                                 |
| --- | -------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 1   | network                    | File ảnh `logo.png` bị lỗi 404 Not Found (màu đỏ)                               | Mở file `web/index.html`, tại dòng 10 sửa đường dẫn `src="images/logo.png"` thành đúng tên file ảnh trong thư mục `web/images` |
| 2   | console                    | Uncaught TypeError / Failed to fetch (thông báo lỗi dữ liệu bảng đơn giá model) | Nhờ Trưởng nhóm hỗ trợ kiểm tra và khắc phục kết nối API/Data nguồn của bảng đơn giá model                                     |

> Ảnh chụp màn hình lưu trong thư mục `evidence/` (network.png, console.png).

### Báo cáo lỗi gửi trưởng nhóm

- **Context:Đang mở file `web/index.html` trên trình duyệt để kiểm tra hiển thị bảng đơn giá các Model AI.**
- **Expected:Trang web hiển thị đầy đủ danh sách và dữ liệu bảng đơn giá các model AI**
- **Actual:Bảng đơn giá model trống không có dữ liệu, xuất hiện thông báo lỗi màu đỏ trong tab Console của DevTools.**
- **Log:Uncaught ReferenceError: hienThiBangModel is not defined**

### Câu tìm kiếm Google

```text
site:stackoverflow.com "Uncaught (in promise) TypeError: Failed to fetch"

```

## 4.7. Excel

> Phần Excel được chấm trực tiếp trên file `data/chi_phi_model_thang_11.xlsx`, không cần ghi vào đây.
