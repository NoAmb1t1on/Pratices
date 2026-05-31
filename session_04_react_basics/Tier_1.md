## Bài 1.1:
1. Component chỉ render 1 lần vì:
    - component này là tĩnh (static), không chứa dữ liệu thay đổi.
    - React chỉ cần gọi hàm này đúng 1 lần duy nhất để vẽ giao diện lên màn hình khi tải trang.
2. Render lại (Re-render) chỉ khi rơi vào 1 trong 3 trường hợp sau:
    - State thay đổi: Khi bạn sử dụng `useState` và kích hoạt hàm cập nhật trạng thái.
    - Props thay đổi: Khi component cha truyền vào cho nó một dữ liệu mới.
    - Component cha re-render: Khi component chứa nó bị render lại, nó cũng sẽ bị ép render theo.
## Bài 1.2:
**Kết quả thử nghiệm:**
1. Chạy `BadCounter` -> Nhấn nút:
    - Màn hình: Số 0 đứng im, không đổi.
    - Console: Log giá trị vẫn tăng đều (Count: 1, Count: 2...).
    - Lý do: Biến có tăng nhưng React không biết để vẽ lại UI.
2. Chạy `GoodCounter` -> Nhấn nút:
    - Màn hình: Số cập nhật tăng dần 1, 2, 3... ngay lập tức.
3. Log "render":
    - `BadCounter`: 1 lần duy nhất khi tải trang. Nhấn nút không log thêm.
    - `GoodCounter`: 1 lần đầu + thêm 1 lần sau mỗi cú click (bấm bao nhiêu lần, chạy lại hàm bấy nhiêu lần).
