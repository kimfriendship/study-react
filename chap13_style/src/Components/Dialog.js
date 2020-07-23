import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import StyledButton from "./StyledButton";

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const fadeOut = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`;

const slideUp = keyframes`
from {
  transform: translateY(200px);
}
to {
  transform: translateY(0px);
}
`;

const slideDown = keyframes`
from {
  transform: translateY(0px);
}
to {
  transform: translateY(200px);
}
`;

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

  animation-name: ${fadeIn};
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
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

  animation-name: ${slideUp};
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
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
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisble] = useState(visible);

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisble(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;

  return (
    <DarkBg disappear={!visible}>
      <DialogBox disappear={!visible}>
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
