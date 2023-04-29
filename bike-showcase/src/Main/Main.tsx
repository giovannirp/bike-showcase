import { Banner } from "../Components/Banner";
import { Summary } from "../Components/Summary";
import { ContainerMain } from "./styled";

export function Main() {
  return (
    <ContainerMain>
      <Banner />

      <Summary />
    </ContainerMain>
  )
}