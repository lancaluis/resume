import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 1.5rem;
  width: 80%;
  margin: 0 auto;
  color: #ffffff;
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
`;

export const Skills = styled.div`
  display: flex;
  gap: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;

  &:before {
    content: "👉";
    margin-right: 0.6rem;
  }
`;
