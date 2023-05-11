import { useContext } from "react";
import { ContainerTransactions, PriceHighlight, TrasactionsTable, TrasictionsHead } from "./style";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dataFormater, priceFormatter } from "../../ultis/formatters";

export function Transations() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <ContainerTransactions>
      <h1>Bem vindo nas transições</h1>
      <TrasactionsTable>
        <TrasictionsHead>
          <tr>
            <td>Produto</td>
            <td>Preço</td>
            <td>Categoria</td>
            <td>Data</td>
          </tr>
        </TrasictionsHead>
        <tbody>
          {transactions.map((listProduct) => {
            return (
              <tr key={listProduct.id}>
                <td>{listProduct.description}</td>
                <td>
                  {/* {listProduct.price} */}
                  <PriceHighlight variant={listProduct.type}>
                    {priceFormatter.format(listProduct.price)}
                  </PriceHighlight>
                </td>
                <td>{listProduct.category}</td>
                <td>{dataFormater.format(new Date(listProduct.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
      </TrasactionsTable>
    </ContainerTransactions>
  )
}