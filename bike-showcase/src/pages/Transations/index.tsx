import { useContext } from "react";
import { ContainerTransactions, TrasactionsTable, TrasictionsHead } from "./style";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dataFormater } from "../../ultis/formatters";

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
                <td>{listProduct.price}</td>
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