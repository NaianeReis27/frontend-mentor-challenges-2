import styled from 'styled-components';
import check from '../../assets/check.svg';

export const AddOns = styled.label`
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  border: 2px solid
    var(
      ${({ selected }) =>
      selected ? '--marine-blue-color' : '--gray-ligth-color'}
    );
 


  input[type='checkbox'] {
    display: flex;
    align-items: center;
    width: 21px;
    height: 21px;
    appearance: none;
    -webkit-appearance: none;
    border-radius: 5px;
    border: 1px solid var(--gray-ligth-color);
    margin-right: 16px;
  }

  input[type='checkbox']:checked {
    display: flex;
    align-items: center;
    width: 21px;
    height: 21px;
    appearance: none;
    -webkit-appearance: none;
    border-radius: 5px;
    background-color: var(--publish-blue-color);
  }

  input[type='checkbox']::before {
    content: '';
    background-image: url(${check});
    height: inherit;
    width: inherit;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
    }
  }

  h4 {
    font-size: 14px;
    font-weight: 500;
    color: var(--marine-blue-color);
  }

  p {
    font-size: 14px;
    font-weight: 500;
  }
`;
