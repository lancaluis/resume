import styled from "styled-components";

import { StyledIconBase } from "@styled-icons/styled-icon";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.4rem;
  background: #1d2c28;
  border-radius: 5px;
  width: 60px;
`;

export const Icon = styled.div`
  ${StyledIconBase} {
    color: ${(props) => (props.color ? props.color : "#dd9250")};
    width: 30px;
  }
`;
