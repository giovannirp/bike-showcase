import styled from "styled-components";

export const SearchContainer = styled.section`
  display: flex;
  gap: 1rem;
  margin-right: 50px;

  input {
    margin-top: 20px;
    flex: 1;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme.white};
    padding: 1rem;
    border: 2px solid ${(props) => props.theme["green-700"]};

    ::placeholder {
      color: ${(props) => props.theme.white};
    }
  }

  button {
    width: 147px;
    height: 54px;
    gap: 0.75rem;
    margin-top: 20px;
    background: ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme.white};
    cursor: pointer;
    border: 2px solid ${(props) => props.theme["green-700"]};
    border-radius: 6px;
    color: ${(props) => props.theme["green-700"]};
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;  
  }
`;