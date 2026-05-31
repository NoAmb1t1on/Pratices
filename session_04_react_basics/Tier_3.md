## Bài 3.3:
```jsx
function UserCard({ name, email, avatar }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", width: "200px" }}>
            <img src={avatar} alt={name} style={{ width: "100px", borderRadius: "50%" }} />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
}

function PriceTag({ originalPrice, salePrice }) {
    return (
        <div>
            <span style={{ textDecoration: "line-through", color: "gray" }}>{originalPrice.toLocaleString()}đ</span>
            <b style={{ color: "red", marginLeft: "10px" }}>{salePrice.toLocaleString()}đ</b>
        </div>
    );
}

function App() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Danh sách User:</h2>
            <div style={{ display: "flex" }}>
               
                <UserCard name="Nguyễn Văn Minh" email="minh@gmail.com" avatar="https://via.placeholder.com/100" />
                <UserCard name="Trần Thị An" email="an@gmail.com" avatar="https://via.placeholder.com/100" />
                <UserCard name="Lê Hoàng Linh" email="linh@gmail.com" avatar="https://via.placeholder.com/100" />
            </div>

            <h2>Demo PriceTag:</h2>
            <PriceTag originalPrice={25000000} salePrice={21990000} />
        </div>
    );
}

export default App;
```
