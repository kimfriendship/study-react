import React from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";

const DarkBg = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogBox = styled.div`
  background: white;
  border-radius: 10px;
  width: 512px;
  padding: 1rem;

  h3 {
    font-weight: bold;
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
  }
`;

const ButtonGroup = styled.div`
  margin: 3rem 0 0;
  display: flex;
  justify-content: flex-end;
`;

const LittleButton = styled(StyledButton)`
  width: 3rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const Dialog = ({
  title,
  children,
  confirmText,
  cancelText,
  onCancel,
  onConfirm,
  visible,
}) => {
  if (!visible) return null;

  return (
    <DarkBg>
      <DialogBox>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <LittleButton color="green" onClick={onCancel}>
            {cancelText}
          </LittleButton>
          <LittleButton color="pink" onClick={onConfirm}>
            {confirmText}
          </LittleButton>
        </ButtonGroup>
      </DialogBox>
    </DarkBg>
  );
};

Dialog.defaultProps = {
  confirmText: "yes",
  cancelText: "no",
};

export default Dialog;
