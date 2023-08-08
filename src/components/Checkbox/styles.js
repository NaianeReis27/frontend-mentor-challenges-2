import styled from 'styled-components';

export const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;

  input[type='checkbox'] {
    display: flex;
    align-items: center;
    width: 38px;
    height: 20px;
    appearance: none;
    border-radius: 20px;
    -webkit-appearance: none;
    padding: 4px;
    background-color: var(--marine-blue-color);
  }

  input:checked[type='checkbox']:before {
    box-sizing: content-box;
    position: relative;
    margin-left: 18px;
    transition: 0.3s;
  }


  .monthly {
    color: var(
      ${({ currentChoose }) => (currentChoose ?  '--gray-color':  '--marine-blue-color')}
    );
  }

  .yearly {
    color: var(
      ${({ currentChoose }) => (currentChoose ? '--marine-blue-color' : '--gray-color')}
    );
  }
  input[type='checkbox']:before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--white-color);
    transition: 0.3s;
  }
`;
