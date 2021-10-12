import { Wrapper, Navbar, NavList, NavItem, Brand, Button } from "./styles"

function Header() {
  return (
    <Wrapper>
      <Navbar>
        <Brand>
          Luís <span>{"{"}</span> Lança <span>{"}"}</span>
        </Brand>
        <NavList>
          <NavItem>about me</NavItem>
          <NavItem>work xp</NavItem>
          <NavItem>projects</NavItem>
          <NavItem>
            <Button>download cv</Button>
          </NavItem>
        </NavList>
      </Navbar>
    </Wrapper>
  )
}

export default Header
