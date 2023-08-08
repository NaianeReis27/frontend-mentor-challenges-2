import styled from 'styled-components';

export const Step = styled.div`
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 40px 0 0 0;
  background-color: var(--white-color);
  box-shadow: none;

  .container-texts {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .container-inputs {
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h3 {
    font-size: 32px;
    font-weight: bold;
    color: var(--marine-blue-color);
  }
  
  @media (max-width: 850px) {
    display: flex;
    align-items: center;
    margin: -70px auto 0 auto;
    padding: 32px 22px;
    box-shadow: 0px 9px 43px 0px rgba(46, 46, 46, 0.09);
  }
`;
