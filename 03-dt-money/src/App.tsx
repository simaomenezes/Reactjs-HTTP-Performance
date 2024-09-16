import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Transactions } from './pages/Transactions'
import { SummaryContainer } from './components/Summary/styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <SummaryContainer />
      <Transactions />
    </ThemeProvider>
  )
}
