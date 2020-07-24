import React from "react";
import styled from "styled-components";
import { useTodoState } from "../Context";

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #ddd;

  h1 {
    margin: 0;
    font-size: 1.8rem;
    color: #aaa;
  }

  .day {
    margin-top: 4px;
    color: #bbb;
    font-size: 1.3rem;
  }

  .tasks-left {
    color: #1098ad;
    font-size: 0.9rem;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoHead = () => {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done).length;

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">{undoneTasks} tasks left</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
