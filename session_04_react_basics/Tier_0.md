## Bài 0.1:
1. File .jsx khác file .js:
    - `.js`: Là file chứa mã nguồn JavaScript tiêu chuẩn. Nó chỉ hiểu các cú pháp logic của JS (biến, hàm, vòng lặp...). Nếu viết code HTML vào giữa file .js, trình duyệt hoặc các công cụ build sẽ báo lỗi cú pháp (Syntax Error) ngay lập tức.
    - .jsx: Là một cú pháp mở rộng của JavaScript. Nó cho phép viết code giống như HTML ngay bên trong JavaScript một cách hợp pháp.
2. `export default App` để:
    - Mặc định, file App.jsx là một "hòn đảo cô lập".
    - Phải có `export default` thì file chạy chính (main.jsx) mới import (lấy) component App này về để hiển thị lên màn hình được.
3. Khi xóa `export default`, thì:
    - Màn hình trắng xóa (Lỗi sập ứng dụng).
    - Trình duyệt sẽ báo lỗi vì file main.jsx không tìm thấy linh hồn của app (App) đâu để chạy nữa.
## Bài 0.2:
### Bài 1:
```jsx
function UserProfile() {
    return (
        <div className="profile">
            <h1>Hồ sơ cá nhân</h1>
            <img src="photo.jpg" alt="Ảnh đại diện" />
            <table>
                <tbody>
                    <tr>
                        <td>Họ tên:</td>
                        <td>Minh</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>minh@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserProfile;
```
### Bài 2:
```jsx
function ProductInfo() {
    return (
        <div className="product">
            <h2>iPhone 15</h2>
            <p className="price">25.000.000đ</p> 
            <ul>
                <li>Màn hình: 6.1 inch</li>
                <li>Camera: 48MP</li>
                <li>Pin: 3349 mAh</li>
            </ul>
            <button>Mua ngay</button>
        </div>
    );
}

export default ProductInfo;
```
