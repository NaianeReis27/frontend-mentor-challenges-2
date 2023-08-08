import styled from "styled-components";

export const Input = styled.div`
display: flex;
flex-direction: column;
gap:4px;
  label{
    font-size: 14px;
    font-weight: 400;
    color: var(--gray-color);
  }
  input{
    width: 100%;
    max-width: 450px;
    border: 1px solid var(--gray-color);
    border-radius: 10px;
    height: 50px;
    padding: 0 15px;
    font-weight: 700;
  }
  
`;