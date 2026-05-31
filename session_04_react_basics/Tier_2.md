## Bài 2.1:
```jsx
function PersonalInfoChallenge() {
    const ten = "Nguyễn Văn Minh";
    const tuoi = 20;
    const queQuan = "Hà Nội";

    const gio = new Date().getHours();
    const loiChao = gio < 12 ? "Chào buổi sáng" : gio < 18 ? "Chào buổi chiều" : "Chào buổi tối";

    const canNang = 65;   // kg
    const chieuCao = 1.70; // m
    const bmi = (canNang / (chieuCao * chieuCao)).toFixed(1);

    return (
        <div style={{ padding: "20px" }}>
            <h1>{loiChao}!</h1> 

            <h3>Thông tin cá nhân:</h3>
            <p>Họ tên: {ten}</p>
            <p>Tuổi: {tuoi}</p>
            <p>Quê quán: {queQuan}</p>

            <h3>Chỉ số sức khỏe:</h3>
            <p>BMI của bạn: {bmi}</p>
        </div>
    );
}

export default PersonalInfoChallenge;
```

## Bài 2.2:
```jsx
function ConditionalChallenge() {
    const isOnline = true;
    const isLoggedIn = true;
    const stock = 0;

    return (
        <div style={{ padding: "20px" }}>
            <p>Trạng thái: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>

            {isLoggedIn && (
                <nav style={{ background: "#f0f0f0", padding: "10px", marginBottom: "15px" }}>
                    <b>Menu điều hướng:</b> Trang chủ | Cài đặt | Đăng xuất
                </nav>
            )}

            <div>
                <span>Sản phẩm A (Kho: {stock}) </span>
                {stock === 0 && <strong style={{ color: "red" }}>- ⚠️ Hết hàng</strong>}
            </div>
        </div>
    );
}

export default ConditionalChallenge;
```

## Bài 2.3:
```jsx
function ProductListChallenge() {
    const products = [
        { id: 101, name: "Chuột không dây", price: 350000 },
        { id: 102, name: "Bàn phím cơ", price: 1200000 }, // > 1 triệu
        { id: 103, name: "Tai nghe Bluetooth", price: 850000 },
        { id: 104, name: "Màn hình Gaming", price: 4500000 }, // > 1 triệu
        { id: 105, name: "Lót chuột cỡ lớn", price: 150000 }
    ];

    const tongGia = products.reduce((sum, product) => sum + product.price, 0);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {products.map((product) => (
                    <li 
                        key={product.id} 
                        style={{ color: product.price > 1000000 ? "red" : "black", padding: "4px 0" }}
                    >
                        {product.name} - {product.price.toLocaleString("vi-VN")}đ
                    </li>
                ))}
            </ul>

            <h3>Tổng cộng: {tongGia.toLocaleString("vi-VN")}đ</h3>
        </div>
    );
}

export default ProductListChallenge;
```
