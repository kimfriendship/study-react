import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../Context";

const CircleButton = styled.div`
  background: #15aabf;

  &:hover,
  &:active {
    background: #1098ad;
  }

  z-index: 5;
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);

  font-size: 3rem;
  color: white;
  border-radius: 50%;

  border: none;
  outline: none;

  transition: 0.2s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #e03131;
      &:hover,
      &:active {
        background: #f03e3e;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: #eee;
  padding: 32px 32px 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #ccc;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  outline: none;
  font-size: 0.9rem;
  box-sizing: border-box;
`;

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setInput(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: { id: nextId.current, text: input, done: false },
    });
    setInput("");
    setOpen(false);
    nextId.current += 1;
  };

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="Enter Todos!"
              onChange={onChange}
              value={input}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton open={open} onClick={onToggle}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default React.memo(TodoCreate);
