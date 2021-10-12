import styled from 'styled-components'

export const Wrapper = styled.header`
  background: #090909;
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1.5rem;
  letter-spacing: 0.1rem;
`

export const NavItem = styled.li`
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
`

export const Button = styled.button`
  padding: 0.8rem 1rem;
  border: 1px solid #7b78ff;
  border-radius: 7px;
  background: none;
  color: #ffffff;
  transition: background-color 0.5s ease-in-out;
  font-weight: bold;
  margin-left: 3rem;
  
  &&:hover {
    cursor: pointer;
    background: #7b78ff;
  }
`