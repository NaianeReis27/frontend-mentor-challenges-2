import styled from 'styled-components';

export const Card = styled.div`
  cursor: pointer;
  width: 140px;
  height: 160px;
  border-radius: 10px;
  border: 1px solid var(--marine-blue-color);
  display: flex;
  flex-direction: column;
  background-color: var(--alabaster-color);
  justify-content: space-between;
  padding: 20px 16px;
  img{
    border-radius: 50%;
    width: 40px;
    height: 40px;

  }

  h4{
    font-size: 16px;
    font-weight: 500;
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
