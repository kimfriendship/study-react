import React from "react";

const TodoLists = ({ key, lists }) => {
  return <li>{lists.map((list) => list)}</li>;
};

const Todos = ({ todos }) => {
  console.log(todos);
  return (
    <>
      {todos.map((todo) => (
        <TodoLists key={todo.id} lists={todo.lists} />
      ))}
    </>
  );
};

export default Todos;
