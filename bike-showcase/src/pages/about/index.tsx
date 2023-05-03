import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function About() {
  const { transactions } = useContext(TransactionsContext)
  console.log("aqui é about",transactions);

  return(
    <div>
      about
    </div>
  )
}