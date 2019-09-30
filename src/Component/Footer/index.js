import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* FOOTER */}
        <footer id="footer" className="section section-grey">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* footer widget */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="footer">
                  {/* footer logo */}
                  <div className="footer-logo">
                    <a
                      className="logo"
                      href="#"
                      style={{
                        fontSize: "26pt !important",
                        fontWeight: "bold"
                      }}
                    >
                      <span style={{ color: "#F0684A" }}>E</span>
                      <span>-CONTRERAS</span>
                    </a>
                  </div>
                  {/* /footer logo */}
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                  {/* footer social */}
                  <ul className="footer-social">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                    </li>
                  </ul>
                  {/* /footer social */}
                </div>
              </div>
              {/* /footer widget */}
              {/* footer widget */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="footer">
                  <h3 className="footer-header">Mi Perfil</h3>
                  <ul className="list-links">
                    <li>
                      <a href="#">Mi cuenta</a>
                    </li>
                    <li>
                      <a href="#">Mi lista de deseos</a>
                    </li>
                    <li>
                      <a href="#">Checkout</a>
                    </li>
                    <li>
                      <a href="#">Login</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /footer widget */}
              <div className="clearfix visible-sm visible-xs" />
              {/* footer widget */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="footer">
                  <h3 className="footer-header">Atención al cliente</h3>
                  <ul className="list-links">
                    <li>
                      <a href="#">Nosotros</a>
                    </li>
                    <li>
                      <a href="#">Guia de compras</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /footer widget */}
              {/* footer subscribe */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="footer">
                  <h3 className="footer-header">Estemos en contacto</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                  <form>
                    <div className="form-group">
                      <input
                        className="input"
                        placeholder="Ingresá una dirección de correo electronico"
                      />
                    </div>
                    <button className="primary-btn">
                      Unete a nuestro Newslatter
                    </button>
                  </form>
                </div>
              </div>
              {/* /footer subscribe */}
            </div>
            {/* /row */}
            <hr />
            {/* row */}
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                {/* footer copyright */}
                <div className="footer-copyright">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | E-CONTRERAS
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </div>
                {/* /footer copyright */}
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </footer>
        {/* /FOOTER */}
      </div>
    );
  }
}
