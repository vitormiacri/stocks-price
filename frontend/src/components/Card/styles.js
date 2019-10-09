import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Container = styled.div`
  max-width: 1080px;
  width: 100%;

  background: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.3);

  margin-top: 30px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    align-self: center;
  }

  &:last-of-type {
    margin-bottom: 30px;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        align-self: center;
        justify-self: center;
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
