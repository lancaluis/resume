import styled from 'styled-components'
import mediaQueries from "../../utils/mediaQueries";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10%;
  background: #182622;
  color: #ffffff;
  font-weight: 300;
  font-size: 0.8rem;
  margin-top: 2rem;

  ${mediaQueries.greaterThan("largeDesktop")`
    padding: 2rem 25%;
  `}
`