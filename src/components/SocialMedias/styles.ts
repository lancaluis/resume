import styled from "styled-components";

import { StyledIconBase } from "@styled-icons/styled-icon";

export const SocialMedia = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const Icon = styled.div`
  ${StyledIconBase} {
    color: #7b78ff;
    width: 20px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;
