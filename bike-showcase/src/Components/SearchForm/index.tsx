import { MagnifyingGlass } from "phosphor-react";
import { SearchContainer } from "./style";

export function SearchForm() {
  return (
    <SearchContainer>
      <input type="text" placeholder="Busque uma transação" />
      <button>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchContainer>
  )
}