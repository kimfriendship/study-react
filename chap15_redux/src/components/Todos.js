import React, { useState } from "react";

const TodoItem = React.memo(({ todo, onToggle }) => {
  return (
    <li
      onClick={() => onToggle(todo.id)}
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
    >
      {todo.item}
    </li>
  );
});

const TodoList = React.memo(({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

const Todos = ({ onCreate, todos, onToggle }) => {
  const [input, setInput] = useState("");
  const onChange = ({ target }) => setInput(target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(input);
    setInput("");
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          onChange={onChange}
          placeholder="Enter todos!"
        />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
};

export default React.memo(Todos);
