import { useState } from "react";

export default function TodoItem({ todo, toggleComplete, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    if (newText.trim()) {
      updateTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-2 border-b dark:border-gray-700">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleUpdate}
            onKeyDown={(e) => e.key === "Enter" && handleUpdate()}
            className="border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
          />
        ) : (
          <span
            onDoubleClick={() => setIsEditing(true)}
            className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="text-red-500">✕</button>
    </div>
  );
}
