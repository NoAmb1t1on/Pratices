## Bài 6.1:
```jsx
import { useState } from "react";

function ListBasicsChallenge() {
    const [fruits] = useState(["Táo", "Chuối", "Cam", "Nho"]);
    
    const [students] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);

    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = students.length > 0 ? (totalAge / students.length).toFixed(1) : 0;

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "500px" }}>
            <h2>Danh sách trái cây</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            
            <h2>Danh sách sinh viên</h2>
            {students.map((student, index) => {
                const isSenior = student.age >= 20;
                
                return (
                    <div 
                        key={student.id} 
                        style={{ 
                            padding: "10px", 
                            margin: "6px 0",
                            background: "#f9f9f9",
                            borderRadius: "4px",
                            color: isSenior ? "green" : "#333",
                            fontWeight: isSenior ? "bold" : "normal",
                            borderLeft: isSenior ? "4px solid green" : "4px solid #ccc"
                        }}
                    >
                        <b>[{index + 1}]</b> {student.name} - {student.age} tuổi
                    </div>
                );
            })}

            <hr style={{ border: "1px dashed #ccc", margin: "20px 0" }} />

            <div style={{ background: "#e8f4fd", padding: "12px", borderRadius: "6px" }}>
                <h4>📊 Thống kê lớp học:</h4>
                <p style={{ margin: 0 }}>
                    Tuổi trung bình: <strong style={{ color: "#2980b9", fontSize: "18px" }}>{averageAge}</strong> tuổi
                </p>
            </div>
        </div>
    );
}

export default ListBasicsChallenge;
```

## Bài 6.2:
```jsx
import { useState, useRef } from "react";

function CreateItemChallenge() {
    const [items, setItems] = useState([
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" }
    ]);
    const [newName, setNewName] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    const inputRef = useRef(null);
    
    function handleAdd() {
        if (newName.trim() === "") {
            alert("⚠️ Vui lòng nhập tên môn học, không được để trống!");
            if (inputRef.current) inputRef.current.focus();
            return;
        }
        
        const newItem = {
            id: Date.now(),
            name: newName.trim()
        };

        setItems([...items, newItem]); 
        setNewName("");

        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 2000);

        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleAdd();
        }
    }
    
    return (
        <div style={{ padding: "20px", maxWidth: "400px", fontFamily: "sans-serif" }}>
            <h2>Thêm môn học</h2>

            {showSuccess && (
                <div style={{ 
                    background: "#d4edda", 
                    color: "#155724", 
                    padding: "8px 12px", 
                    borderRadius: "4px", 
                    marginBottom: "12px",
                    fontSize: "14px",
                    fontWeight: "bold"
                }}>
                    ✅ Đã thêm thành công!
                </div>
            )}
            
            <div style={{ marginBottom: "15px", display: "flex" }}>
                <input 
                    ref={inputRef}
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyDown={handleKeyDown} 
                    placeholder="Nhập tên môn học..."
                    style={{ padding: "8px", marginRight: "10px", flex: 1 }}
                />
                <button onClick={handleAdd} style={{ padding: "8px 16px", cursor: "pointer" }}>
                    ➕ Thêm
                </button>
            </div>
            
            <h3>Danh sách ({items.length} môn):</h3>
            <div style={{ border: "1px solid #eee", borderRadius: "4px" }}>
                {items.map(item => (
                    <div key={item.id} style={{ 
                        padding: "10px", 
                        borderBottom: "1px solid #eee" 
                    }}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreateItemChallenge;
```

## Bài 6.3:
```jsx
import { useState, useRef } from "react";

function DeleteItemChallenge() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh" },
        { id: 2, name: "An" },
        { id: 3, name: "Linh" }
    ]);

    const [lastDeletedItem, setLastDeletedItem] = useState(null);

    const undoTimerRef = useRef(null);
    
    function handleDelete(id, name) {
        if (!window.confirm(`Bạn có chắc chắn muốn xóa sinh viên "${name}" không?`)) {
            return;
        }

        const itemToBackup = items.find(item => item.id === id);

        setItems(items.filter(item => item.id !== id));

        setLastDeletedItem(itemToBackup);

        if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
        
        undoTimerRef.current = setTimeout(() => {
            setLastDeletedItem(null);
        }, 5000);
    }

    function handleUndo() {
        if (!lastDeletedItem) return;

        setItems(prevItems => [...prevItems, lastDeletedItem].sort((a, b) => a.id - b.id));

        setLastDeletedItem(null);

        if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    }
    
    function handleDeleteAll() {
        if (window.confirm("Xóa tất cả sinh viên? Thao tác này không thể hoàn tác!")) {
            setItems([]);
            setLastDeletedItem(null);
        }
    }
    
    return (
        <div style={{ padding: "20px", maxWidth: "450px", fontFamily: "sans-serif" }}>
            <h2>Xóa sinh viên nâng cao</h2>

            {lastDeletedItem && (
                <div style={{ 
                    background: "#fff3cd", 
                    color: "#856404", 
                    padding: "10px 15px", 
                    borderRadius: "4px", 
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #ffeeba"
                }}>
                    <span>🗑️ Đã xóa sinh viên <b>{lastDeletedItem.name}</b></span>
                    <button 
                        onClick={handleUndo}
                        style={{ 
                            background: "#007bff", 
                            color: "white", 
                            border: "none", 
                            padding: "4px 10px", 
                            borderRadius: "3px",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        ↩️ Hoàn tác (5s)
                    </button>
                </div>
            )}
            
            {items.length > 0 && (
                <button 
                    onClick={handleDeleteAll}
                    style={{ 
                        marginBottom: "15px", 
                        background: "#e74c3c", 
                        color: "white",
                        padding: "8px 16px",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer"
                    }}
                >
                    🗑 Xóa tất cả
                </button>
            )}
            
            {items.length === 0 ? (
                <p style={{ color: "#999", italic: "true" }}>Danh sách trống</p>
            ) : (
                <div style={{ border: "1px solid #eee", borderRadius: "4px" }}>
                    {items.map(item => (
                        <div key={item.id} style={{ 
                            display: "flex",
                            justifyContent: "space-between",
```

## Bài 6.4:
```jsx
import { useState } from "react";

function UpdateItemChallenge() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);
    
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editAge, setEditAge] = useState("");

    const [showSuccess, setShowSuccess] = useState(false);

    function startEdit(item) {
        setEditingId(item.id);
        setEditName(item.name);
        setEditAge(item.age.toString());
    }

    function saveEdit() {
        if (editName.trim() === "") {
            alert("⚠️ Tên sinh viên không được để trống!");
            return; 
        }
        if (editAge === "" || parseInt(editAge) <= 0) {
            alert("⚠️ Tuổi phải là số lớn hơn 0!");
            return;
        }

        setItems(items.map(item => 
            item.id === editingId 
                ? { ...item, name: editName.trim(), age: parseInt(editAge) }
                : item
        ));
        
        setEditingId(null);

        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 2000);
    }

    function cancelEdit() {
        setEditingId(null);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") saveEdit();
        if (event.key === "Escape") cancelEdit();
    }
    
    return (
```
