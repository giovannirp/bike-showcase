import { CurrencyDollar, ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { SummaryCard, SummaryContainer, TitleSummary } from "./styles";
import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  console.log("aqui é transition",transactions);

  const summaryCalc = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  );

  return (
    <section>
      <TitleSummary>Entradas e saidas</TitleSummary>

      <SummaryContainer>
        <SummaryCard>
          <header>
            <h1>Entradas</h1>
            <ArrowCircleUp size={32} color="#00b37e" />
          </header>
          <strong>{summaryCalc.income}</strong>
        </SummaryCard>

        <SummaryCard>
          <header>
            <h1>Saídas</h1>
            <ArrowCircleDown size={32} color="#f75a68" />
          </header>
          <strong>{summaryCalc.outcome}</strong>
        </SummaryCard>

        <SummaryCard variant="green">
          <header>
            <h1>Total</h1>
            <CurrencyDollar size={32} />
          </header>
          <strong>{summaryCalc.total}</strong>
        </SummaryCard>
        
      </SummaryContainer>
    </section>
  );
}
