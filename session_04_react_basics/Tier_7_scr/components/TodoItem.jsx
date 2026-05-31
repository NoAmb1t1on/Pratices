function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <div style={{ 
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px",
            margin: "8px 0",
            background: "#f9f9f9",
            borderRadius: "4px",
            borderLeft: todo.completed ? "4px solid #2ecc71" : "4px solid #ccc"
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input 
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    style={{ width: "16px", height: "16px", cursor: "pointer" }}
                />
                <span style={{ 
                    textDecoration: todo.completed ? "line-through" : "none", 
                    color: todo.completed ? "#95a5a6" : "#2c3e50" 
                }}>
                    {todo.text}
                </span>
            </div>

            <button 
                onClick={() => onDelete(todo.id)} 
                style={{ background: "transparent", color: "#e74c3c", border: "none", cursor: "pointer", fontWeight: "bold" }}
            >
                ✕ Xóa
            </button>
        </div>
    );
}

export default TodoItem;