import styled from 'styled-components';

export const Card = styled.div`
  cursor: pointer;
  width: 140px;
  gap: 45px;
  border-radius: 10px;
  border: 2px solid var(${({ selected }) => (selected ? '--marine-blue-color' : '--gray-ligth-color')});
  background-color: var(${({ selected }) => (selected ? '--alabaster-color' : 'none')});
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding: 20px 16px;
  img{
    border-radius: 50%;
    width: 40px;
    height: 40px;

  }

  div{
    display: flex;
    flex-direction: column;
    gap: 8px
  }

  h4{
    font-size: 16px;
    font-weight: 500;
    color: var(--marine-blue-color);
  }

  h5{
    
    color: var(--marine-blue-color);
  }

  p{
    font-size: 14px;
    font-weight: 500;
  }

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: row;
    height: min-content;
    justify-content: flex-start;
    gap:20px;
    padding: 15px;
  }
`;
