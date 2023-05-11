import styled from "styled-components";

export const ContainerTransactions = styled.section`
  width: 100%;
  margin-left: 25px;
  margin-right: 25px;

  h1 {
    font-size: 22px;
    padding: 20px 0 0px 5px;
    color: ${(props) => props.theme["gray-900"]};
  }
`;

export const TrasactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 .5rem;
  margin-top: 1.5rem;
  max-width: 1070px;

  td {
    padding: 1.25rem 2rem;
    border: 1px solid ${(props) => props.theme["gray-300"]};
    color: ${(props) => props.theme["gray-900"]};
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const TrasictionsHead = styled.thead`
  background: ${(porps) => porps.theme["green-700"]};

  td {
    color: ${(props) => props.theme.white}!important;
  }
`;
