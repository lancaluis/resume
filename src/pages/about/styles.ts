import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 1.5rem;
  width: 80%;
  margin: 0 auto;
  color: #ffffff;

  ${media.lessThan("medium")`
    width: 100%;
    gap: 1.5rem;

    button {
      width: 100%;
      margin-bottom: 2rem;
    }
  `}

  ${media.greaterThan("medium")`
    button {
      display: none;
    }
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
  line-height: 1.4;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  ${media.lessThan("medium")`
    width: 100%;
    align-items: center;
  `}
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  ${media.lessThan("medium")`
    justify-content: center;
  `}
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;

  ${media.greaterThan("medium")`
    &:before {
      content: "👉";
      margin-right: 0.6rem;
    }
  `}

  ${media.lessThan("medium")`
    margin-bottom: 1rem;
    text-align: center;
  `}
`;
