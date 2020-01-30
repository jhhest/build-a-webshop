import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav>
        <p>Start of Navigation: </p>
        <ul>
          <li>
            <i class="fa fa-car"></i>Fast Cars
          </li>
          <li>searchbar</li>
          <li><i class="fa fa-shopping-cart"></i>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
