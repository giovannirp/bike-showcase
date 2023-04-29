import styled from "styled-components";

export const ContainerMain = styled.main`
  background: ${(props) => props.theme["gray-100"]};
  max-width: 1120px;
  margin: 0px auto;
  //padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
`;