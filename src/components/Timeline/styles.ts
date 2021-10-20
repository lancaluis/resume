import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'

export const VerticalTimelineCustomElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    box-shadow: none;
  }

  .vertical-timeline-element-content p {
    line-height: normal;
  }
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.1rem;
`

export const Info = styled.p`
  display: flex;
  align-items: center;
  color: #adadad;
  font-size: 0.9rem !important;
  margin: 0.5rem 0 1rem 0 !important;
`

export const Icon = styled.div`
  ${StyledIconBase} {
    color: #adadad;
    width: 20px;
  }
`