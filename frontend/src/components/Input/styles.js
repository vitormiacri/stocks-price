import styled from 'styled-components';

export const InputSearch = styled.input.attrs(props => ({
  disabled: props.loading,
}))`
  color: #000;
  font-size: 1.1rem;
  line-height: 16px;
  border: none;
  border-bottom: 1px solid #999;
  padding: 10px;
  margin-right: 30px;
  width: 300px;
  text-transform: uppercase;
  height: 48px;
  background: #f5f5f5;

  &:disabled {
    background: #eee;
    cursor: not-allowed;
  }
`;
