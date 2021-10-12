import { Wrapper } from "./styles"

const Footer = () => {
  function getYearDate() {
    let date = new Date()
    return date.getFullYear()
  }

  return <Wrapper>{getYearDate()} &copy; All rights reserved</Wrapper>
}

export default Footer
