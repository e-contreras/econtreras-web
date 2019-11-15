import React, { Component } from "react";

export default class BreadCrumb extends Component {
  render() {
    return (
      <div>
        <div id="breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Productos</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
