import styled from "styled-components";

import mediaQueries from "../../utils/mediaQueries";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 1.5rem;
  width: 80%;
  margin: 0 auto;
  color: #ffffff;

  ${mediaQueries.lessThan("tablet")`
    width: 100%;
    gap: 1.5rem;

    button {
      width: 100%;
      margin-bottom: 2rem;
    }
  `}

  ${mediaQueries.greaterThan("tablet")`
    button {
      display: none;
    }
  `}

  ${mediaQueries.greaterThan("largeDesktop")`
    width: 50%;
  `}
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #ffffff;
`;

export const BolderText = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 1.4;

  ${mediaQueries.lessThan("tablet")`
    text-align: center;
  `}
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  ${mediaQueries.lessThan("tablet")`
    width: 100%;
    align-items: center;
  `}
`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 60px);
  grid-column-gap: 5rem;
  grid-row-gap: 2rem;

  ${mediaQueries.lessThan("tablet")`
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 3rem;
    justify-content: center;
  `}
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.4;

  ${mediaQueries.lessThan("tablet")`
    margin-bottom: 1rem;
    text-align: center;
  `}
`;
