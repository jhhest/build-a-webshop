import React, { Fragment } from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Categorie from "./components/Categorie";
import CategorieItem from "./components/CategorieItem";

function App() {
  return (
    <Fragment>
      Start of App component
      <Navigation />
      <Categorie />
      <CategorieItem />
      <Footer />
    </Fragment>
  );
}

export default App;
