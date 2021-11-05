import "./App.css";
import Login from "./components/Pages/Login";
import { Switch, Route } from "react-router";
import Services from "./components/Pages/Services";
import MainPage from "./components/Pages/MainPage";

import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/services">
          <Services introduction={"services"} />
        </Route>

        <Route path="/about-us">
          <AdminPanel />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
