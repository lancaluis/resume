import GlobalStyle from "../../styles/globalStyles"
import Footer from "../Footer"
import Header from "../Header"

import { Container, Main } from "./styles"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export default Layout
