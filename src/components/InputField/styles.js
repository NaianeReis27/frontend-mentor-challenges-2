import styled from 'styled-components';

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  div {
    display: flex;
    justify-content: space-between;
    label {
      font-size: 14px;
      font-weight: 400;
      color: var(--gray-color);
    }
    span {
      text-align: right;
      color: var(--strawberry-red-color);
      font-size: 14px;
      font-weight: 500;
    }
  }

  input {
    width: 100%;
    border: 1px solid var(--gray-color);
    border-radius: 10px;
    height: 50px;
    padding: 0 15px;
    font-weight: 700;
  }
`;
