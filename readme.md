# Auto check mail Moodle

For more documentation on the use of the Moodle apisee the [Moodle api - documentation](https://docs.moodle.org/dev/Web_service_API_functions)

## How to implement
Đầu tiên, chúng ta cần lấy một số thông tin của tài khoản (access token, user id, mail token)
### Step 1: Get your information
Đầu tiên, chúng ta cần lấy một số thông tin của tài khoản (access token, user id, mail token)
#### Access token
Vào Trang chủ của trường  -> Nhấn vào biểu tượng trên góc phải -> Tùy Chọn

<img src="./imgs/accesstoken1.png">

Trong phần Tùy chọn -> chọn security keys

<img src="./imgs/accesstoken2.png">

Lấy hàng đầu tiên của cột key

<img src="./imgs/accesstoken3.png">

#### User id
Vào Trang chủ của trường  -> Nhấn vào biểu tượng trên góc phải -> Hồ sơ

<img src="./imgs/userid1.png">

Trên thanh địa chỉ chúng ta sẽ thấy userid gồm 6 chữ số

<img src="./imgs/userid2.png">

#### Email token
Truy cập link https://postmail.invotes.com/

Nhập mail vào “Your contact email” -> Go 

__Chú ý: mail nhập vào sẽ là mail mà bạn muốn nhận tin nhắn từ hệ thống khi có tin nhắn mới từ el.__

<img src="./imgs/mailtoken1.png">

Check mail mà bạn vừa đăng kí sẽ nhận được 1 mail mới với nội dung

<img src="./imgs/mailtoken2.png">

Note lại phần mail access token này.
### Step 2: Built Google Script
Truy cập https://www.google.com/script/start/ -> Start Script

<img src="./imgs/ggscript1.png">

Chọn tạo dự án mới

<img src="./imgs/ggscript2.png">

Copy + Paste code vào dự án như hình -> điền 3 tham số là 3 thông tin vừa thu thập ở trên -> Ctrl + S để lưu dự án
```
    const token = 'a964c82f48069bcea5470b067d8f3'
    const userid = 1234567
    const mail_token = 'rqtx4443dlmmnlkxmh4u2'
```

<img src="./imgs/ggscript3.png">

Chọn vào phần kích hoạt trong các mục phía bên trái

<img src="./imgs/ggscript4.png">

Chọn tiếp thêm trình kích hoạt ở góc phải phía dưới

<img src="./imgs/ggscript5.png">

Trong hộp thoại hiện ra, chỉnh các thông tin như hình -> nhấn “Lưu”:

<img src="./imgs/ggscript6.png">

Chọn email bạn đang dùng để chạy dự án google script:

<img src="./imgs/ggscript7.png">

Cửa sổ mới hiện ra chọn Nâng cao

<img src="./imgs/ggscript8.png">

Chọn đi tới dự án không an toàn (vì đây là dịch vụ của google và code do chúng ta tự tạo ra nên các bạn không cần lo lắng vấn đề bảo mật nữa)

<img src="./imgs/ggscript9.png">

Trong cửa sổ kế tiếp ta kéo xuống và nhấn vào nút “Cho Phép”:

<img src="./imgs/ggscript10.png">

Và vậy là chúng ta đã hoàn thành hệ thống tự động

<img src="./imgs/done.png">

Khi có tin nhắn trên hệ thống el

<img src="./imgs/result1.png">

Chúng ta sẽ nhận được mail 

<img src="./imgs/result2.png">

### Step 3: Stop implement
Khi muốn xóa dự án chúng ta đến phần thi hành chọn Xóa vĩnh viễn

<img src="./imgs/delete1.png">


### Lỗi thường gặp
Trong quá trình chạy đôi khi sẽ gặp lỗi quá hạn mức băng thông được báo về mail (như hình dưới) nhưng nó sẽ chỉ ảnh hưởng đến 1 lệnh đó mà không ảnh hưởng đến cả dự án.

<img src="./imgs/error.png">