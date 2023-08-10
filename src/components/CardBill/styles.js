import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  gap: 10px;
  border-radius: 10px;

  th {
    border-top: 1px solid var(--gray-color);
  }

  thead,
  tbody {
    background-color: var(--alabaster-color);
  }
  thead,
  tbody,
  tfoot {
    tr {
      padding: 8px 20px;
    }
  }

  thead,
  tbody {
    background-color: var(--alabaster-color);
  }

  tr {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;

      h4 {
        text-transform: capitalize;
      }
    }
  }

  h4 {
    font-size: 17px;
    color: var(--marine-blue-color);
    font-weight: 700;
  }

  tfoot {
    tr {
      background: none;
    }
  }
  h5 {
    font-size: 16px;
    font-weight: 500;
    color: var(--marine-blue-color);
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  h3 {
    font-size: 20px;
    color: var(--publish-blue-color);
  }
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: row;
    height: min-content;
    justify-content: flex-start;
    gap: 20px;
    padding: 15px;
  }
`;
