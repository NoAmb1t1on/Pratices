function TodoFilter({ currentFilter, setFilter }) {
    return (
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <button 
                onClick={() => setFilter("all")}
                style={{ 
                    fontWeight: currentFilter === "all" ? "bold" : "normal",
                    color: currentFilter === "all" ? "#3498db" : "black"
                }}
            >
                Tất cả
            </button>
            <button 
                onClick={() => setFilter("active")}
                style={{ 
                    fontWeight: currentFilter === "active" ? "bold" : "normal",
                    color: currentFilter === "active" ? "#3498db" : "black"
                }}
            >
                Chưa làm
            </button>
            <button 
                onClick={() => setFilter("completed")}
                style={{ 
                    fontWeight: currentFilter === "completed" ? "bold" : "normal",
                    color: currentFilter === "completed" ? "#3498db" : "black"
                }}
            >
                Đã xong
            </button>
        </div>
    );
}

export default TodoFilter;