import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ReactGA from "react-ga";

import Layout from "../components/Layout";

import About from "./about";
import Timeline from "./timeline";

const env: string = (process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID as string)

const App = () => {

  ReactGA.initialize(env);

  return (
    <Router>
      <Layout>
        <Switch>
          <Redirect from="/" to="/about" exact />
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/timeline">
            <Timeline />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
