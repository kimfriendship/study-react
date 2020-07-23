import React from "react";
import styled from "styled-components";

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
  return (
    <TodoHeadBlock>
      <h1>Date</h1>
      <div className="day">day</div>
      <div className="tasks-left">2 todos left</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
