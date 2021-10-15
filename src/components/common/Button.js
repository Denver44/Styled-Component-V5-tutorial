import styled, { css } from "styled-components";

export const Button = styled.button`
  color: white;
  background: ${(p) => (p.primary ? `blue` : `#f8049c`)};
  ${(p) =>
    p.large
      ? css`
          padding: 16px;
          border-radius: 8px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 0.75em;
        `}
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;
