import styled from 'styled-components'
import { NavLink } from "react-router-dom"

import mediaQueries from "../../utils/mediaQueries";

export const Wrapper = styled.header`
  background: #182622;
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;

  .active{
    color:  #dd9250;
  }

  ${mediaQueries.lessThan("tablet")`
    flex-direction: column;
    gap: 2rem;
    
    button {
      display: none;
    }
  `}

  ${mediaQueries.greaterThan("largeDesktop")`
    width: 50%;
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

  ${mediaQueries.lessThan("tablet")`
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
    color: #dd9250;
    font-size: 1.3rem;
  }

  ${mediaQueries.lessThan("tablet")`
    font-size: 1rem;
    
    span {
      font-size: 1.1rem;
    }
  `}
`