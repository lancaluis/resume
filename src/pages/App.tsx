import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import ReactGA from 'react-ga'

import Layout from "../components/Layout"

import About from "./about"
import Timeline from "./timeline"
import Projects from "./projects"

const TRACKING_ID = "G-19BS6Y8P7R"
ReactGA.initialize(TRACKING_ID)

const App = () => {
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
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
