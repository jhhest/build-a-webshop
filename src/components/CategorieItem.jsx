import React, { Component } from "react";

export class CategorieItem extends Component {
  render() {
      console.log(this.props)
    return (
      <section className="categorieItem">
        <img
          src={this.props.imgUrl}
          alt={"picture of categorie " + this.props.name}
          style={{height: "12rem"}}
        />
        <h1>{this.props.name}</h1>
      </section>
    );
  }
}

export default CategorieItem;
