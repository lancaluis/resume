import styled from 'styled-components'
import media from "styled-media-query";
import { NavLink } from "react-router-dom"

export const Wrapper = styled.header`
  background: #090909;
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;

  .active{
    color:  #7b78ff;
  }

  ${media.lessThan("medium")`
    flex-direction: column;
    gap: 2rem;
    
    button {
      display: none;
    }
  `}
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1.5rem;
  letter-spacing: 0.1rem;

  button {
    margin-left: 3rem;
  }

  ${media.lessThan("small")`
    gap: 1.2rem;
  `}
`

export const NavItem = styled.li`
  color: #ffffff;
  transition: color 1s ease-in-out;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
`

export const Brand = styled.h1`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 500;

  span {
    color: #7b78ff;
    font-size: 1.3rem;
  }

  ${media.lessThan("medium")`
    font-size: 1rem;
    
    span {
      font-size: 1.1rem;
    }
  `}
`