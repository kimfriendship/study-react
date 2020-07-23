import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
  /* background: #ccc; */
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem text="blabla" done={false} />
      <TodoItem text="lalal" done={false} />
      <TodoItem text="jkljkl" done={true} />
    </TodoListBlock>
  );
};

export default TodoList;
