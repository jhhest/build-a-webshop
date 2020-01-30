import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Navigation from "./Navigation";
import Footer from "./Footer";

import { categoriesFetched } from "../store/reducers/categories/actions";

import Categorie from "./Categorie";
import CategorieItem from "./CategorieItem";

class Homepage extends Component {
  componentDidMount() {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(fetchedDataProducts => {
        this.props.dispatch(categoriesFetched(fetchedDataProducts));
      });

    fetch("http://localhost:4000/categories")
      .then(res => res.json())
      .then(data => {
        this.props.dispatch({
          type: "categories/FETCHED",
          payload: data
        });
      });
  }
  render() {
    return (
      <Fragment>
        <Navigation />
        <Categorie />
        <CategorieItem />
        <Footer />
      </Fragment>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    categories: reduxState.categories,
    products: reduxState.products
  };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(Homepage);
