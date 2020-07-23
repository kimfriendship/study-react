import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const sizes = {
  large: {
    fontSize: "1.2rem",
    height: "2.4rem",
  },
  medium: {
    fontSize: "1rem",
    height: "2.1rem",
  },
  small: {
    fontSize: "0.8rem",
    height: "1.9rem",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    font-size: ${sizes[size].fontSize};
    height: ${sizes[size].height};
  `}
`;

const colorStyles = css`
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

      ${(props) =>
        props.outline &&
        css`
          border: 1px solid ${selected};
          color: ${selected};
          background: none;
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const fullWidthStyles = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;

      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
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

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  /* 크기 */
  ${sizeStyles}
  ${fullWidthStyles}

  /* 색상 */
  ${colorStyles}
`;

const StyledButton = ({ children, color, outline, fullWidth, ...rest }) => {
  return (
    <StyledBtn color={color} outline={outline} fullWidth={fullWidth} {...rest}>
      {children}
    </StyledBtn>
  );
};

StyledButton.defaultProps = {
  color: "green",
  size: "medium",
};

export default StyledButton;
