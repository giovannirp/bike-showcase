import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 40px;
  max-width: 1120px;
  margin: 0px auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme["gray-500"]};

  ul {
    display: flex;

    li {
      list-style: none;
      font-size: 19px;
      padding: 10px;

      a {
        list-style: none;
        text-decoration: none;
        color: ${(props) => props.theme.white};

        &:hover {
          text-decoration: underline;
        }        
      }

    }
  }
`;