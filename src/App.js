import "./App.css";
import Login from "./components/Login";
import { Switch, Route } from "react-router";
import Services from "./components/Services";
import MainPage from "./components/MainPage";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/services">
          <Services />
        </Route>

        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
