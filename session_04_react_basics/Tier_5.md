## Bài 5.1:
```jsx
import { useState } from "react";

function ClickEventsChallenge() {
    const [bgColor, setBgColor] = useState("#3498db");

    const [clickA, setClickA] = useState(0);
    const [clickB, setClickB] = useState(0);

    const [isLiked, setIsLiked] = useState(false);

    function handleRandomColor() {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setBgColor(randomColor);
    }

    return (
        <div style={{ padding: "20px", maxWidth: "400px", fontFamily: "sans-serif" }}>
            <h2>Thử thách Click Events</h2>

            <div style={{ marginBottom: "25px" }}>
                <h3>1. Đổi màu ngẫu nhiên</h3>
                <div style={{ 
                    width: "100%", 
                    height: "60px", 
                    backgroundColor: bgColor, 
                    borderRadius: "6px",
                    marginBottom: "10px",
                    transition: "0.2s ALL"
                }} />
                <button onClick={handleRandomColor}>Đổi màu nền</button>
            </div>

            <div style={{ marginBottom: "25px" }}>
                <h3>2. Đếm số lần click riêng biệt</h3>
                <button onClick={() => setClickA(clickA + 1)} style={{ marginRight: "10px" }}>
                    Nút A ({clickA})
                </button>
                <button onClick={() => setClickB(clickB + 1)}>
                    Nút B ({clickB})
                </button>
            </div>

            <div style={{ marginBottom: "25px" }}>
                <h3>3. Nút Like Toggle</h3>
                <button 
                    onClick={() => setIsLiked(!isLiked)} 
                    style={{ fontSize: "16px", padding: "6px 12px", cursor: "pointer" }}
                >
                    {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
                </button>
            </div>
        </div>
    );
}

export default ClickEventsChallenge;
```

## Bài 5.2:
```jsx
import { useState } from "react";

function InputEventsChallenge() {
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).filter(Boolean).length;

    return (
        <div style={{ padding: "20px", maxWidth: "400px", fontFamily: "sans-serif" }}>
            <h2>Thử thách Input Events</h2>

            <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #eee" }}>
                <label style={{ display: "block", marginBottom: "5px" }}><b>1 & 2. Ô nhập Email:</b></label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email của bạn..."
                    style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
                />
                
                {email && (
                    <p style={{ fontSize: "14px", margin: "5px 0", color: email.includes("@") ? "green" : "red" }}>
                        {email.includes("@") ? "✅ Email hợp lệ" : "❌ Email phải có ký tự '@'"}
                    </p>
                )}

                <p style={{ background: "#f9f9f9", padding: "8px", borderRadius: "4px", fontSize: "14px" }}>
                    👀 Preview: <i>{email || "Chưa nhập gì..."}</i>
                </p>
            </div>

            <div>
                <label style={{ display: "block", marginBottom: "5px" }}><b>3. Nhập văn bản (Đếm từ):</b></label>
                <textarea 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Gõ một đoạn văn vào đây..."
                    style={{ padding: "8px", width: "100%", height: "80px", boxSizing: "border-box" }}
                />
                <p style={{ marginTop: "5px" }}>
                    Số từ: <strong style={{ color: "#3498db" }}>{wordCount}</strong> từ
                </p>
            </div>
        </div>
    );
}

export default InputEventsChallenge;
```

## Bài 5.3:
```jsx
import { useState, useEffect } from "react";

function KeyboardEventsChallenge() {
    const [targetKey, setTargetKey] = useState("g");
    const [gameMessage, setGameMessage] = useState("Bấm phím bất kỳ để bắt đầu đoán!");

    const [pos, setPos] = useState({ x: 140, y: 40 });

    const [bgColor, setBgColor] = useState("#ffffff");

    const poolKeys = ["a", "s", "d", "f", "w", "r", "x", "Enter", "Space"];

    function handleKeyDown(event) {
        if (event.ctrlKey && event.key.toLowerCase() === "d") {
            event.preventDefault();
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            setBgColor(randomColor);
            return; 
        }

        const pressedKey = event.key === " " ? "Space" : event.key;
        
        if (pressedKey.toLowerCase() === targetKey.toLowerCase()) {
            setGameMessage(`🎉 Quá chuẩn! Bạn đã bấm đúng phím '${targetKey}'.`);

            const nextKey = poolKeys[Math.floor(Math.random() * poolKeys.length)];
            setTargetKey(nextKey);
        } else {

            if (event.key.length === 1 || event.key === "Enter") {
                setGameMessage(`❌ Thử lại xem! Bạn vừa bấm phím '${pressedKey}'.`);
            }
        }

        const step = 15; // Tốc độ di chuyển mỗi lần bấm (pixel)
        if (event.key === "ArrowUp")    setPos(prev => ({ ...prev, y: Math.max(0, prev.y - step) }));
        if (event.key === "ArrowDown")  setPos(prev => ({ ...prev, y: Math.min(100, prev.y + step) }));
        if (event.key === "ArrowLeft")  setPos(prev => ({ ...prev, x: Math.max(0, prev.x - step) }));
        if (event.key === "ArrowRight") setPos(prev => ({ ...prev, x: Math.min(280, prev.x + step) }));
    }

    return (
        <div 
            onKeyDown={handleKeyDown}
            tabIndex={0}
            style={{ 
                padding: "20px", 
                backgroundColor: bgColor, 
                minHeight: "100vh", 
                fontFamily: "sans-serif",
                outline: "none",
                transition: "background 0.3s ease" 
            }}
        >
            <h2 style={{ textAlign: "center" }}>🎮 Thử thách Keyboard Events</h2>
            <p style={{ textAlign: "center", color: "gray", fontSize: "14px" }}>
                ⚠️ <b>Lưu ý quan trọng:</b> Hãy click chuột vào một khoảng trống trên màn hình trước để kích hoạt nhận diện bàn phím!
            </p>

            <hr style={{ border: "1px dashed #ccc", margin: "20px 0" }} />

            <div style={{ background: "rgba(255,255,255,0.8)", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                <h3>1. Trò chơi đoán phím</h3>
                <p>Hãy tìm và nhấn phím này trên bàn phím: <strong style={{ color: "#e74c3c", fontSize: "20px", background: "#f8d7da", padding: "2px 10px", borderRadius: "4px" }}>{targetKey}</strong></p>
                <p><b>Kết quả:</b> <span>{gameMessage}</span></p>
            </div>

            <br />
            <div style={{ background: "rgba(255,255,255,0.8)", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                <h3>2. Điều khiển ô vuông (Nhấn các phím mũi tên ↑ ↓ ← →)</h3>
                <div style={{ width: "320px", height: "140px", border: "2px solid #333", position: "relative", background: "#fafafa", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{ 
                        width: "40px", 
                        height: "40px", 
                        backgroundColor: "#3498db", 
                        position: "absolute", 
                        top: `${pos.y}px`, 
                        left: `${pos.x}px`,
                        borderRadius: "4px",
                        transition: "all 0.05s linear",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "12px"
                    }}>
                        🤖
                    </div>
                </div>
            </div>

            <br />

            <div style={{ background: "rgba(255,255,255,0.8)", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                <h3>3. Tính năng phím tắt ẩn</h3>
                <p>Ấn tổ hợp phím <kbd style={{ background: "#eee", padding: "3px 6px", borderRadius: "4px", border: "1px solid #ccc" }}>Ctrl</kbd> + <kbd style={{ background: "#eee", padding: "3px 6px", borderRadius: "4px", border: "1px solid #ccc" }}>D</kbd> để đổi màu nền ngẫu nhiên toàn trang.</p>
            </div>
        </div>
    );
}

export default KeyboardEventsChallenge;
```

## Bài 5.4:
```jsx
import { useState } from "react";

function FormEventsChallenge() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const errors = {};
    
    if (formData.email && !formData.email.includes("@")) {
        errors.email = "❌ Email không hợp lệ (phải chứa ký tự '@')";
    }
    
    if (formData.password && formData.password.length < 6) {
        errors.password = "⚠️ Mật khẩu phải có ít nhất 6 ký tự";
    }
    
    if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "❌ Mật khẩu xác nhận không trùng khớp";
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    
    function handleSubmit(event) {
        event.preventDefault();

        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            alert("Vui lòng nhập đầy đủ thông tin bắt buộc!");
            return;
        }

        if (Object.keys(errors).length > 0) {
            alert("Vui lòng sửa các lỗi hiển thị trên form trước khi gửi!");
            return;
        }
        
        setSubmitted(true);
    }
    
    function handleReset() {
        setFormData({ name: "", email: "", password: "", confirmPassword: "", message: "" });
        setSubmitted(false);
    }
    
    return (
        <div style={{ padding: "20px", maxWidth: "450px", fontFamily: "sans-serif" }}>
            <h2>Thử thách Form Events & Validation</h2>
            
            {!submitted ? (
                <form onSubmit={handleSubmit} noValidate> 
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block", marginBottom: "4px" }}>Tên *</label>
                        <input 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        />
                    </div>
                    
                    {/* 1. Trường Email + Lỗi Realtime */}
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block", marginBottom: "4px" }}>Email *</label>
                        <input 
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box", borderColor: errors.email ? "red" : "#ccc" }}
                        />
                        {errors.email && <small style={{ color: "red", display: "block", marginTop: "4px" }}>{errors.email}</small>}
                    </div>

                    {/* Trường Mật khẩu */}
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block", marginBottom: "4px" }}>Mật khẩu *</label>
                        <input 
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box", borderColor: errors.password ? "red" : "#ccc" }}
                        />
                        {errors.password && <small style={{ color: "red", display: "block", marginTop: "4px" }}>{errors.password}</small>}
                    </div>

                    {/* 2. Trường Xác nhận mật khẩu + Lỗi Realtime */}
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block", marginBottom: "4px" }}>Xác nhận mật khẩu *</label>
                        <input 
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box", borderColor: errors.confirmPassword ? "red" : "#ccc" }}
                        />
                        {errors.confirmPassword && <small style={{ color: "red", display: "block", marginTop: "4px" }}>{errors.confirmPassword}</small>}
                    </div>
                    
                    {/* Trường Tin nhắn */}
                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", marginBottom: "4px" }}>Tin nhắn</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        />
                    </div>
                    
                    <button type="submit" style={{ background: "#2ecc71", color: "white", border: "none", padding: "10px 20px", borderRadius: "4px", cursor: "pointer", marginRight: "10px" }}>
                        Đăng ký
                    </button>
                    <button type="button" onClick={handleReset} style={{ background: "#e74c3c", color: "white", border: "none", padding: "10px 20px", borderRadius: "4px", cursor: "pointer" }}>
                        Xóa form
                    </button>
                </form>
            ) : (
                <div style={{ background: "#d4edda", padding: "15px", borderRadius: "4px", color: "#155724" }}>
                    <h3>✅ Đăng ký tài khoản thành công!</h3>
                    <p><b>Hệ thống đã ghi nhận:</b></p>
                    <p>• Tên khách hàng: {formData.name}</p>
                    <p>• Địa chỉ Email: {formData.email}</p>
                    <p>• Tin nhắn đi kèm: {formData.message || "(Trống)"}</p>
                    <button onClick={handleReset} style={{ marginTop: "10px", padding: "6px 12px" }}>Quay lại</button>
                </div>
            )}
        </div>
    );
}

export default FormEventsChallenge;
```
