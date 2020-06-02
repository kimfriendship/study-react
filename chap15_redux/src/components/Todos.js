import React, { useState } from "react";

const Todo = React.memo(({ onToggle, todo }) => {
  return (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

const TodoList = React.memo(({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

const Todos = ({ todos, onToggle, onCreate }) => {
  const [input, setInput] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(input);
    setInput("");
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="New Todo"
        onChange={onChange}
        value={input}
      />
      <button type="submit">Add</button>
      <TodoList todos={todos} onToggle={onToggle} />
    </form>
  );
};

export default React.memo(Todos);
