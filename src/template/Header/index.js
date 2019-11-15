import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        {/* HEADER */}
        <header>
          {/* top Header */}
          <div id="top-header">
            <div className="container">
              <div className="pull-left">
                <span>Bienvenido a E-Contreras!</span>
              </div>
              <div className="pull-right">
                <ul className="header-top-links">
                  <li>
                    <a href="#">Admin</a>
                  </li>
                  <li>
                    <a href="#">Nosotros</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /top Header */}
          {/* header */}
          <div id="header">
            <div className="container">
              <div className="pull-left">
                {/* Logo */}
                <div className="header-logo">
                  <a
                    className="logo"
                    href="#"
                    style={{ fontSize: "36pt !important", fontWeight: "bold" }}
                  >
                    <span style={{ color: "#F0684A" }}>E</span>
                    <span>-CONTRERAS</span>
                  </a>
                </div>
                {/* /Logo */}
                {/* Search */}
                <div className="header-search">
                  <form>
                    <input
                      className="input search-input"
                      type="text"
                      placeholder="Estoy buscando..."
                    />
                    <select className="input search-categories">
                      <option value={0}>Todas las categorías</option>
                      <option value={1}>Category 01</option>
                      <option value={1}>Category 02</option>
                    </select>
                    <button className="search-btn">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
                {/* /Search */}
              </div>
              <div className="pull-right">
                <ul className="header-btns">
                  {/* Account */}
                  <li className="header-account dropdown default-dropdown">
                    <div
                      className="dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <div className="header-btns-icon">
                        <i className="fa fa-user-o" />
                      </div>
                      <strong className="text-uppercase">
                        Mi cuenta <i className="fa fa-caret-down" />
                      </strong>
                    </div>
                    <a href="#" className="text-uppercase">
                      Login
                    </a>{" "}
                    /{" "}
                    <a href="#" className="text-uppercase">
                      Join
                    </a>
                    <ul className="custom-menu">
                      <li>
                        <a href="#">
                          <i className="fa fa-user-o" /> Mi cuenta
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" /> My Lista de deseos
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" /> Checkout
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-unlock-alt" /> Login
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user-plus" /> Crear una cuenta
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* /Account */}
                  {/* Cart */}
                  <li className="header-cart dropdown default-dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <div className="header-btns-icon">
                        <i className="fa fa-shopping-cart" />
                        <span className="qty">3</span>
                      </div>
                      <strong className="text-uppercase">MI Carrito:</strong>
                      <br />
                      <span>Gs. 10.000</span>
                    </a>
                    <div className="custom-menu">
                      <div id="shopping-cart">
                        <div className="shopping-cart-list">
                          <div className="product product-widget">
                            <div className="product-thumb">
                              <img src="./img/main-product01.jpg" alt />
                            </div>
                            <div className="product-body">
                              <h3 className="product-price">
                                gs32.50 <span className="qty">x3</span>
                              </h3>
                              <h2 className="product-name">
                                <a href="#">Celular iPhone X 256 Gb</a>
                              </h2>
                            </div>
                            <button className="cancel-btn">
                              <i className="fa fa-trash" />
                            </button>
                          </div>
                          <div className="product product-widget">
                            <div className="product-thumb">
                              <img src="./img/main-product01.jpg" alt />
                            </div>
                            <div className="product-body">
                              <h3 className="product-price">
                                gs32.50 <span className="qty">x3</span>
                              </h3>
                              <h2 className="product-name">
                                <a href="#">Celular iPhone X 256 Gb</a>
                              </h2>
                            </div>
                            <button className="cancel-btn">
                              <i className="fa fa-trash" />
                            </button>
                          </div>
                        </div>
                        <div className="shopping-cart-btns">
                          <button className="main-btn">View Cart</button>
                          <button className="primary-btn">
                            Checkout <i className="fa fa-arrow-circle-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* /Cart */}
                  {/* Mobile nav toggle*/}
                  <li className="nav-toggle">
                    <button className="nav-toggle-btn main-btn icon-btn">
                      <i className="fa fa-bars" />
                    </button>
                  </li>
                  {/* / Mobile nav toggle */}
                </ul>
              </div>
            </div>
            {/* header */}
          </div>
          {/* container */}
        </header>
        {/* /HEADER */}
      </div>
    );
  }
}
