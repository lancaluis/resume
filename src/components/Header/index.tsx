import Button from "../Button";

import LINKS from "../../utils/navbarLinks";

import { Wrapper, Navbar, NavList, NavItem, Brand, Link } from "./styles";

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
  );
};

export default Header;
