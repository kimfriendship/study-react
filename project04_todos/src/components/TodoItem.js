import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch, useTodoState } from "../Context";

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-self: center;
  justify-content: center;
  color: #ccc;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    color: #e03131;
  }
`;

const CheckCircle = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid #ccc;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #3bc9db;
      color: #3bc9db;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 0.9rem;
  color: #181818;
  ${(props) =>
    props.done &&
    css`
      color: #aaa;
    `}
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;

  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

const TodoItem = ({ id, done, text }) => {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
