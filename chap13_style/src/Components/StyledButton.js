import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyle = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const StyledBtn = styled.button`
  /* 공통 */
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  font-weight: 700;

  /* 크기 */
  font-size: 1rem;
  height: 2rem;

  /* 색상 */
  ${colorStyle}

/* 
  background: ${(props) => props.theme.palette.pink};
  &:hover {
    background: ${(props) => lighten(0.1, props.theme.palette.pink)};
  }
  &:active {
    background: ${(props) => darken(0.1, props.theme.palette.pink)};
  } */

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

const StyledButton = ({ children, color, ...rest }) => {
  return (
    <StyledBtn color={color} {...rest}>
      {children}
    </StyledBtn>
  );
};

StyledButton.defaultProps = {
  color: "green",
};

export default StyledButton;
