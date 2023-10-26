import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useState,
} from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export const ToDoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodoItem: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    const updatedTodos: Todo[] = todos.map((todo: Todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos((_prev) => updatedTodos);
  };

  const removeTodo = (id: number) => {
    const filteredTodos = todos.filter(
      (todo: { id: number }) => todo.id !== id
    );
    setTodos(filteredTodos);
  };

  return (
    <div className="ToDoList">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Введите задачу"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Добавить</button>
      </div>
      <ul>
        {todos.map(
          (todo: {
            id: Key | null | undefined;
            completed: boolean | undefined;
            text: string | undefined;
          }) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(Number(todo.id))}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => removeTodo(Number(todo.id))}>
                Удалить
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
