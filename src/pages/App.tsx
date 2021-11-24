import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Layout from "../components/Layout"

import About from "./about"
import Timeline from "./timeline"

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
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
