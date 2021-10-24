import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background: #090909;
`

export const Main = styled.main`
  display: flex;
  flex-grow: 1;
  ${media.lessThan("medium")`
    padding: 0 2rem;
  `}
`