## Bài 4.1:
```jsx
import { useState } from "react";

function NumberState() {
    const [count, setCount] = useState(0);

    const statusText = count === 0 ? "Số không" : count > 0 ? "Số dương" : "Số âm";

    const textColor = count > 0 ? "green" : count < 0 ? "red" : "black";
    
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2 style={{ color: textColor }}>Bộ đếm: {count}</h2>

            <p>Trạng thái: <b>{statusText}</b></p>
            
            <button onClick={() => setCount(count + 1)}>Tăng (+1)</button>
            <button onClick={() => setCount(count - 1)}>Giảm (-1)</button>

            <button onClick={() => setCount(count + 5)}>Tăng (+5)</button>
            
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count * 2)}>Nhân đôi</button>
        </div>
    );
}

export default NumberState;
```
## Bài 4.2:
```jsx
import { useState } from "react";

function StringStateChallenge() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div style={{ padding: "20px", maxWidth: "400px" }}>
            <h2>Thử thách Ô nhập liệu</h2>

            <div style={{ marginBottom: "15px" }}>
                <label>Tên: </label>
                <input 
                    value={name}
                    maxLength={100} // Giới hạn tối đa 100 ký tự
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên..."
                />
                <small style={{ marginLeft: "10px", color: "gray" }}>
                    {name.length}/100
                </small>
            </div>

            <div style={{ marginBottom: "15px" }}>
                <label>Email: </label>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email..."
                />
                {email && (
                    <span style={{ marginLeft: "10px", fontSize: "14px", color: email.includes("@") ? "green" : "red" }}>
                        {email.includes("@") ? "✅ Email hợp lệ" : "❌ Email thiếu @"}
                    </span>
                )}
            </div>

            <div style={{ marginBottom: "15px" }}>
                <label>Mật khẩu: </label>
                <input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu..."
                />
                <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)} 
                    style={{ marginLeft: "5px", padding: "2px 8px" }}
                >
                    {showPassword ? "Ẩn" : "Hiện"}
                </button>
            </div>
        </div>
    );
}

export default StringStateChallenge;
```

## Bài 4.3:
```jsx
import { useState } from "react";

function BooleanStateChallenge() {
    const [showPassword, setShowPassword] = useState(false);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [isLightOn, setIsLightOn] = useState(false);

    return (
        <div style={{ padding: "20px", maxWidth: "400px", fontFamily: "sans-serif" }}>
            <h2>Thử thách Boolean State</h2>

            <div style={{ marginBottom: "20px", borderBottom: "1px solid #eee", paddingBottom: "15px" }}>
                <h3>1. Ô nhập mật khẩu</h3>
                <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Nhập mật khẩu..." 
                />
                <button onClick={() => setShowPassword(!showPassword)} style={{ marginLeft: "5px" }}>
                    {showPassword ? "🙈 Ẩn" : "👁️ Hiện"}
                </button>
            </div>

            <div style={{ marginBottom: "20px", border: "1px solid #ddd", borderRadius: "4px" }}>
                <div 
                    onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                    style={{ background: "#f5f5f5", padding: "10px", cursor: "pointer", display: "flex", justifyContent: "space-between" }}
                >
                    <b>Chuyện gì xảy ra nếu bấm vào đây?</b>
                    <span>{isAccordionOpen ? "▲" : "▼"}</span>
                </div>
                {isAccordionOpen && (
                    <div style={{ padding: "10px", borderTop: "1px solid #ddd" }}>
                        Đây là nội dung ẩn chi tiết của Accordion. Bạn đã mở nó thành công!
                    </div>
                )}
            </div>

            <div style={{ paddingBottom: "15px", textAlign: "center" }}>
                <h3>3. Công tắc bóng đèn</h3>
                <div style={{ fontSize: "50px", filter: isLightOn ? "drop-shadow(0 0 20px yellow)" : "grayscale(100%)" }}>
                    💡
                </div>
                <button onClick={() => setIsLightOn(!isLightOn)} style={{ marginTop: "10px" }}>
                    {isLightOn ? "TẮT ĐÈN" : "BẬT ĐÈN"}
                </button>
            </div>
        </div>
    );
}

export default BooleanStateChallenge;
```

## Bài 4.4:
```jsx
import { useState } from "react";

function MultipleStatesChallenge() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState(""); 
    const [isStudent, setIsStudent] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    
    function handleSubmit() {
        if (name.trim() === "" || age === "" || email.trim() === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        const ageNum = Number(age);
        if (ageNum <= 0 || ageNum >= 100) {
            alert("⚠️ Tuổi nhập vào không hợp lệ (phải từ 1 đến 99)!");
            return;
        }
        
        setSubmitted(true);
    }
    
    function handleReset() {
        setName("");
        setAge("");
        setEmail("");
        setIsStudent(false);
        setSubmitted(false);
    }
    
    return (
        <div style={{ padding: "20px", maxWidth: "400px" }}>
            <h2>Form đăng ký</h2>
            
            {!submitted ? (
                <div>
                    <div style={{ marginBottom: "10px" }}>
                        <label>Tên: </label>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Email: </label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập email..."
                        />
                    </div>
                    
                    <div style={{ marginBottom: "10px" }}>
                        <label>Tuổi: </label>
                        <input 
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    
                    <div style={{ marginBottom: "10px" }}>
                        <label>
                            <input 
                                type="checkbox"
                                checked={isStudent}
                                onChange={(e) => setIsStudent(e.target.checked)}
                            />
                            Là sinh viên
                        </label>
                    </div>
                    
                    <button onClick={handleSubmit}>Đăng ký</button>
                </div>
            ) : (
                <div style={{ background: "#d4edda", padding: "15px", borderRadius: "4px" }}>

                    <h3>✅ Xin chào {name}!</h3>
                    <p><b>Đăng ký thành công với thông tin:</b></p>
                    <p>Email: {email}</p>
                    <p>Tuổi: {age}</p>
                    <p>Sinh viên: {isStudent ? "Có" : "Không"}</p>
                    <button onClick={handleReset}>Đăng ký lại</button>
                </div>
            )}
        </div>
    );
}

export default MultipleStatesChallenge;
```
