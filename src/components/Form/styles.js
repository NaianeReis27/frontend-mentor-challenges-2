import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: 942px;
  min-height: 600px;
  border-radius: 20px;
  background-color: var(--white-color);
  padding: 16px;
  box-shadow: 0px 9px 43px 0px rgba(46, 46, 46, 0.09);

  aside {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 40px;
   
    background-repeat: no-repeat;
    width: 275px;
    background-image: url('bg-sidebar-desktop.svg');
  }

  .step-container {
    min-height: fit-content;
    padding: 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .container-buttons {
      justify-content: space-between;
      align-items: center;
      bottom: 0;
      display: flex;
      padding: 30px 0 ;

      .next {
        margin-left: auto;
        width: 124px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: var(--white-color);
        background-color: var(--marine-blue-color);
        border-radius: 6px;
        border: none;
      }

      .back {
        font-size: 16px;
        color: var( --gray-color);
        background: none;
        padding: ;
        border: none;
      }
    }
  }

  @media (max-width: 800px) {
    height: 100vh;
    border-radius: 0;
    flex-direction: column;
    background: none;
    padding: 0;
    box-shadow: none;
    aside {
      gap: 18px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 172px;
      width: 100%;
      background-size: cover;
      padding: 0 0 70px 0 ;
      
      background-image: url('bg-sidebar-mobile.svg');
    }

    .step-container {
      height: 100%;
      padding: 0 16px;
      position: relative;
      margin: 0;
      .container-buttons {
        position: absolute;
        background-color: var(--white-color);
        bottom: 0%;
        right: 0%;
        left: 0%;
        width: 100vw;
        padding: 20px;
      }
    }
  }
`;
