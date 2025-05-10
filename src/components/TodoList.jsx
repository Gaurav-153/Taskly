import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleComplete, deleteTodo, updateTodo }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))
      )}
    </div>
  );
}