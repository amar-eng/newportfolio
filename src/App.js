import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";
import PortfolioScreen from "./screens/PortfolioScreen";
import ProjectScreen from "./screens/ProjectScreen";
import ContactScreen from "./screens/ContactScreen";
import ResumeScreen from "./screens/ResumeScreen";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
class App extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2600);
  }
  render() {
    // if (this.state.loading) return <Loader />;

    return (
      <Router>
        {/* <Navbar /> */}
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Homepage} />
          {/* <Route path="/" exact component={HomeScreen} /> */}
          {/* <Route path="/about" component={About} />
          <Route path="/resume" component={ResumeScreen} />
          <Route path="/portfolio" component={PortfolioScreen} />
          <Route path="/contact" component={ContactScreen} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
