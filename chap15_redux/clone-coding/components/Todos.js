import React, { useState } from "react";

const TodoItem = React.memo(({ todo, onToggle }) => {
  return (
    <li
      onClick={() => onToggle(todo.id)}
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
    >
      {todo.text}
    </li>
  );
});

const TodoList = React.memo(({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} onToggle={onToggle} todo={todo} />
      ))}
    </ul>
  );
});

const Todos = ({ todos, onCreate, onToggle }) => {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Create Todos"
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
};

export default React.memo(Todos);
