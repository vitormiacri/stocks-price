import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonSearch = styled.button.attrs(props => ({
  disabled: props.loading,
}))`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${props => props.backgroundColor};
  color: ${props => props.color};

  border: 0;
  padding: 0 15px;
  border-radius: 5px;
  padding: 10px 15px;
  height: 48px;

  &:hover {
    background: ${props => darken(0.02, props.backgroundColor)};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
