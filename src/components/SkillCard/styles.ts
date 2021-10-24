import styled from "styled-components";
import media from "styled-media-query";

import { StyledIconBase } from "@styled-icons/styled-icon";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  background: #0e0e0e;
  border-radius: 5px;

  ${media.lessThan("medium")`
    width: 60px;
  `}
`;

export const Icon = styled.div`
  ${StyledIconBase} {
    color: ${(props) => (props.color ? props.color : "#7b78ff")};
    width: 30px;
  }
`;
