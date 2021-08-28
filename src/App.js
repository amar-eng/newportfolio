import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";
import PortfolioScreen from "./screens/PortfolioScreen";
import ProjectScreen from "./screens/ProjectScreen";
import ContactScreen from "./screens/ContactScreen";
import ResumeScreen from "./screens/ResumeScreen";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={ResumeScreen} />
        <Route path="/portfolio" component={PortfolioScreen} />
        <Route path="/contact" component={ContactScreen} />
      </Switch>
    </Router>
  );
}

export default App;
