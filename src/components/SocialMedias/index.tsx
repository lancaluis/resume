import { Link, Icon, SocialMedia } from "./styles";

import socialMedias from "../../utils/socialMedias";

const SocialMedias = () => {
  return (
    <SocialMedia>
      {socialMedias.map(({ link, icon }) => (
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <Icon>{icon}</Icon>
        </Link>
      ))}
    </SocialMedia>
  );
};

export default SocialMedias;
