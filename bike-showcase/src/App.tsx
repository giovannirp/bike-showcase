import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/defaut"
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./Router";
import { TransactionsProvider } from "./contexts/TransactionsContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <TransactionsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TransactionsProvider>
      
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
