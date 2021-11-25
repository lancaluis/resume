import ReactGA from "react-ga";

const env: string = process.env
  .REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID as string;

const TRACKING_ID = env;

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const trackingPageGA = (page: string) => {
  ReactGA.pageview(page);
};

export const eventGA = (categoryName: string, eventName: string) => {
  ReactGA.event({
    category: categoryName, // Required
    action: eventName, // Required
    label: "labelName",
    value: 10,
    nonInteraction: false,
  });
};
