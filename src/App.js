import { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import Login from "./components/Pages/Login";
import Services from "./components/Pages/Services";
import MainPage from "./components/Pages/MainPage";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import AboutUs from "./components/Pages/AboutUs";
import NavigationBar from "./components/NavigationBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <NavigationBar isLoggedIn={isLoggedIn} />
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

        {!isLoggedIn && (
          <Route path="/login">
            <Login onLogin={loginHandler} />
          </Route>
        )}
        {isLoggedIn && <AdminPanel onLogout={logoutHandler} />}
      </Switch>
    </div>
  );
}

export default App;
