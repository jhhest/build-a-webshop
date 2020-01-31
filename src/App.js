import React, { Fragment } from "react";
import "./App.css";

import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";

import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route path="/contact" component={Contact} />
      </Router>
    </Fragment>
  );
}

export default App;
