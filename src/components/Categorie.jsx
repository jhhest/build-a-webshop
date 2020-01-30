import React, { Component } from "react";
import { connect } from "react-redux";

import CategorieItem from "./CategorieItem";
export class Categorie extends Component {
  render() {
    if (!this.props.categories) {
      return <p>Loading!</p>;
    } else {
      return (
        <section className="categorie">
          {this.props.categories.map(element => (
            <CategorieItem
              imgUrl={element.imageUrl}
              name={element.name}
              key={element.id}
            />
          ))}
        </section>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    categories: reduxState.categories
  };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(Categorie);
