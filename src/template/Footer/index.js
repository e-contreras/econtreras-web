import React, { Component } from "react";

export default class Footer extends Component {

	render() {
		return (
			<div>
				<footer id="footer" className="section section-grey">
					<div className="container">
						<div className="row">
							<div className="col-md-4 col-sm-6 col-xs-6">
								<center>
									<div className="footer">
										<div className="footer-logo">
											<a className="logo" href="#"
												style={{
													fontSize: "26pt !important",
													fontWeight: "bold"
												}}>
												<span style={{ color: "#F0684A" }}>E</span>
												<span>-CONTRERAS</span>
											</a>
										</div>
										<p>
											Las fotos son para fines ilustrativos. Los precios de los productos en oferta son válidos exclusivamente para la compra vía internet. Las especificaciones técnicas y descripciones están sujetas a cambios sin previo aviso.
										</p>									
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
									</div>
								</center>
							</div>
							<div className="col-md-4 col-sm-6 col-xs-6">
								<center>
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
								</center>
							</div>
							<div className="clearfix visible-sm visible-xs" />
							<div className="col-md-4 col-sm-6 col-xs-6">
								<center>
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
								</center>
							</div>
						</div>
						<hr />
						<div className="row">
							<div className="col-md-8 col-md-offset-2 text-center">
								<div className="footer-copyright">
									Copyright © All rights reserved | E-CONTRERAS
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
