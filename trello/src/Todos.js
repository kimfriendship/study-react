import React from "react";

const TodoLists = React.memo(({ lists }) => {
  return <li>{lists}</li>;
});

const Todos = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoLists lists={todo.content} key={todo.key} />
      ))}
    </>
  );
};

export default React.memo(Todos);
