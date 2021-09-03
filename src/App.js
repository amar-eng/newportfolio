import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Resumepage from "./pages/Resumepage";
import Projectpage from "./pages/Projectpage";
import Contactpage from "./pages/Contactpage";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={Aboutpage} />
          <Route path="/resume" component={Resumepage} />
          <Route path="/portfolio" component={Projectpage} />
          <Route path="/contact" component={Contactpage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
