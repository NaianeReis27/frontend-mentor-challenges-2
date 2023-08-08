import styled from 'styled-components';

export const Index = styled.div`
  display: flex;
  gap: 15px;
  .circle {
    background-color: var(
      ${({ selected }) =>
        selected ? '--blue-ligth-color' : 'transparent-color'}
    );
    border: 1px solid
      var(
        ${({ selected }) => (selected ? '--blue-ligth-color' : '--white-color')}
      );
    color: var(
      ${({ selected }) => (selected ? '--marine-blue-color' : '--white-color')}
    );
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    font-size: 14px;
    font-weight: 500;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
      text-transform: uppercase;
      color: var(--white-color);
      font-size: 13px;
    }
    h5 {
      text-transform: uppercase;
      color: var(--white-color);
      font-size: 14px;
      font-weight: 700px;
    }
  }

  @media (max-width: 800px) {
    .text-container {
      display: none;
    }
  }
`;
