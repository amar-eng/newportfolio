import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Homepage"));
const Aboutpage = lazy(() => import("./pages/Aboutpage"));
// const Resumepage = lazy(() => import("./pages/Resumepage"));
const Projectpage = lazy(() => import("./pages/Projectpage"));
const Contactpage = lazy(() => import("./pages/Contactpage"));
const App = () => (
  <Router>
    <Switch>
      <Suspense fallback={<div> Loading...</div>}>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={Aboutpage} />
        {/* <Route path="/resume" component={Resumepage} /> */}
        <Route path="/portfolio" component={Projectpage} />
        <Route path="/contact" component={Contactpage} />
      </Suspense>
    </Switch>
  </Router>
);

export default App;
