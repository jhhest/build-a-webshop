import React, { Fragment } from "react";
import "./App.css";

import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
