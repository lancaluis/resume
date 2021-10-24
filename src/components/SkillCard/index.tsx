import { StyledIconProps } from 'styled-icons/types';

import { Wrapper, Icon } from "./styles";

type SkillCardProps = {
  icon: StyledIconProps;
  label: string;
  color: string;
};

const SkillCard = ({ icon, color, label }: SkillCardProps): JSX.Element => {
  return (
    <Wrapper>
      <Icon color={color}>{icon}</Icon>
      <p>{label}</p>
    </Wrapper>
  );
};

export default SkillCard;
