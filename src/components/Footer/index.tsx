import SocialMedias from "../SocialMedias";

import { Wrapper } from "./styles";

const Footer = () => {
  function getYearDate() {
    let date = new Date();
    return date.getFullYear();
  }

  return (
    <Wrapper>
      {getYearDate()} &copy; All rights reserved
      <SocialMedias />
    </Wrapper>
  );
};

export default Footer;

// Insert GA to track some information
