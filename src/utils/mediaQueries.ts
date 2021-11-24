import { generateMedia } from "styled-media-query";

const mediaQueries = generateMedia({
  largeDesktop: "1920px",
  desktop: "1536px",
  tablet: "768px",
  mobile: "414px",
});

export default mediaQueries;
