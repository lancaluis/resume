import Button from "../Button"

import { Wrapper, Navbar, NavList, NavItem, Brand, Link } from "./styles"

const LINKS = [
  {
    url: "about",
    label: "about me",
  },
  {
    url: "timeline",
    label: "work xp",
  },
  {
    url: "projects",
    label: "projects",
  },
]

const Header = () => {
  return (
    <Wrapper>
      <Navbar>
        <Brand>
          Luís <span>{"{"}</span> Lança <span>{"}"}</span>
        </Brand>
        <NavList>
          {LINKS.map(({ url, label }, key) => (
            <NavItem key={key}>
              <Link to={`${url}`} activeClassName="active">
                {label}
              </Link>
            </NavItem>
          ))}
          <Button />
        </NavList>
      </Navbar>
    </Wrapper>
  )
}

export default Header
