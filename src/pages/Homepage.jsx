import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import { categoriesFetched } from "../store/reducers/categories/actions";
import { productsFetched } from "../store/reducers/products/actions";

import Categorie from "../components/Categorie";
import CategorieItem from "../components/CategorieItem";

class Homepage extends Component {
  componentDidMount() {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(fetchedDataProducts => {
        this.props.dispatch(productsFetched(fetchedDataProducts));
      });

    fetch("http://localhost:4000/categories")
      .then(res => res.json())
      .then(fetchedDataCategories => {
        this.props.dispatch(categoriesFetched(fetchedDataCategories));
      });
  }
  render() {
    return (
      <Fragment>
        <Categorie />
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
