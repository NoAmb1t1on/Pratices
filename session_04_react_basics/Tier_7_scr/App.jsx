import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Học React cơ bản", completed: true },
        { id: 2, text: "Làm bài tập Todo App", completed: false }
    ]);
    const [inputText, setInputText] = useState("");
    const [filter, setFilter] = useState("all");

    function handleAdd() {
        if (inputText.trim() === "") return;
        const newTodo = { id: Date.now(), text: inputText.trim(), completed: false };
        setTodos([newTodo, ...todos]);
        setInputText("");
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") handleAdd();
    }

    function handleToggle(id) {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }

    function handleDelete(id) {
        if (window.confirm("Bạn có muốn xóa công việc này?")) {
            setTodos(todos.filter(todo => todo.id !== id));
        }
    }

    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    return (
        <div style={{ padding: "20px", maxWidth: "450px", fontFamily: "sans-serif" }}>
            <h2>📝 Danh sách việc cần làm</h2>
            
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <input 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Thêm việc mới..."
                    style={{ flex: 1, padding: "8px 12px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
                <button onClick={handleAdd} style={{ background: "#3498db", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>
                    Thêm
                </button>
            </div>

            <TodoFilter currentFilter={filter} setFilter={setFilter} />

            <div>
                {filteredTodos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        onToggle={handleToggle} 
                        onDelete={handleDelete} 
                    />
                ))}
            </div>
        </div>
    );
}

export default App;