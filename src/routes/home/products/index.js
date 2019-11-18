import React, { Component } from "react";

export default class Products extends Component {

    render() {
        return (
            <div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div id="aside" className="col-md-3">
                                <div className="aside">
                                    <h3 className="aside-title">Comprar por:</h3>
                                    <ul className="filter-list">
                                        <li><span className="text-uppercase">color:</span></li>
                                        <li><a href="#" style={{ color: '#FFF', backgroundColor: '#8A2454' }}>Camelot</a></li>
                                        <li><a href="#" style={{ color: '#FFF', backgroundColor: '#475984' }}>East Bay</a></li>
                                        <li><a href="#" style={{ color: '#FFF', backgroundColor: '#BF6989' }}>Tapestry</a></li>
                                        <li><a href="#" style={{ color: '#FFF', backgroundColor: '#9A54D8' }}>Medium Purple</a></li>
                                    </ul>
                                    <ul className="filter-list">
                                        <li><span className="text-uppercase">Tamaño:</span></li>
                                        <li><a href="#">X</a></li>
                                        <li><a href="#">XL</a></li>
                                    </ul>
                                    <ul className="filter-list">
                                        <li><span className="text-uppercase">Precio:</span></li>
                                        <li><a href="#">MIN: $20.00</a></li>
                                        <li><a href="#">MAX: $120.00</a></li>
                                    </ul>
                                    <ul className="filter-list">
                                        <li><span className="text-uppercase">Género:</span></li>
                                        <li><a href="#">Men</a></li>
                                    </ul>
                                    <button className="primary-btn">Limpiar todo</button>
                                </div>
                                <div className="aside">
                                    <h3 className="aside-title">Filtrar por precio</h3>
                                    <div id="Precio-slider" />
                                </div>
                                <div className="aside">
                                    <h3 className="aside-title">Filtrar por color:</h3>
                                    <ul className="color-option">
                                        <li><a href="#" style={{ backgroundColor: '#475984' }} /></li>
                                        <li><a href="#" style={{ backgroundColor: '#8A2454' }} /></li>
                                        <li className="active"><a href="#" style={{ backgroundColor: '#BF6989' }} /></li>
                                        <li><a href="#" style={{ backgroundColor: '#9A54D8' }} /></li>
                                        <li><a href="#" style={{ backgroundColor: '#675F52' }} /></li>
                                        <li><a href="#" style={{ backgroundColor: '#050505' }} /></li>
                                        <li><a href="#" style={{ backgroundColor: '#D5B47B' }} /></li>
                                    </ul>
                                </div>
                                <div className="aside">
                                    <h3 className="aside-title">Filtrar por tamaño:</h3>
                                    <ul className="size-option">
                                        <li className="active"><a href="#">S</a></li>
                                        <li className="active"><a href="#">XL</a></li>
                                        <li><a href="#">SL</a></li>
                                    </ul>
                                </div>
                                <div className="aside">
                                    <h3 className="aside-title">Filtrar por marca</h3>
                                    <ul className="list-links">
                                        <li><a href="#">Nike</a></li>
                                        <li><a href="#">Adidas</a></li>
                                        <li><a href="#">Polo</a></li>
                                        <li><a href="#">Lacost</a></li>
                                    </ul>
                                </div>
                                <div className="aside">
                                    <h3 className="aside-title">Filtrar por género</h3>
                                    <ul className="list-links">
                                        <li className="active"><a href="#">Men</a></li>
                                        <li><a href="#">Women</a></li>
                                    </ul>
                                </div>
                                <div className="aside">
                                    <h3 className="aside-title">Los mejores productos</h3>
                                    <div className="product product-widget">
                                        <div className="product-thumb">
                                            <img src="./img/thumb-product01.jpg" alt />
                                        </div>
                                        <div className="product-body">
                                            <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                            <h3 className="product-Precio">$32.50 <del className="product-old-Precio">$45.00</del></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-o empty" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product product-widget">
                                        <div className="product-thumb">
                                            <img src="./img/thumb-product01.jpg" alt />
                                        </div>
                                        <div className="product-body">
                                            <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                            <h3 className="product-Precio">$32.50</h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-o empty" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="main" className="col-md-9">
                                <div className="store-filter clearfix">
                                    <div className="pull-left">
                                        <div className="row-filter">
                                            <a href="#"><i className="fa fa-th-large" /></a>
                                            <a href="#" className="active"><i className="fa fa-bars" /></a>
                                        </div>
                                        <div className="sort-filter">
                                            <span className="text-uppercase">ORDENAR POR:</span>
                                            <select className="input">
                                                <option value={0}>Posición</option>
                                                <option value={0}>Precio</option>
                                                <option value={0}>Clasificación</option>
                                            </select>
                                            <a href="#" className="main-btn icon-btn"><i className="fa fa-arrow-down" /></a>
                                        </div>
                                    </div>
                                    <div className="pull-right">
                                        <div className="page-filter">
                                            <span className="text-uppercase">Mostrar:</span>
                                            <select className="input">
                                                <option value={0}>10</option>
                                                <option value={1}>20</option>
                                                <option value={2}>30</option>
                                            </select>
                                        </div>
                                        <ul className="store-pages">
                                            <li><span className="text-uppercase">Página:</span></li>
                                            <li className="active">1</li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#"><i className="fa fa-caret-right" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="store">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-6 col-xs-6">
                                            <div className="product product-single">
                                                <div className="product-thumb">
                                                    <div className="product-label">
                                                        <span>Nuevo</span>
                                                        <span className="sale">-20%</span>
                                                    </div>
                                                    <button className="main-btn quick-view"><i className="fa fa-search-plus" />VER</button>
                                                    <img src="./img/product01.jpg" alt />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-Precio">$32.50 <del className="product-old-Precio">$45.00</del></h3>
                                                    <div className="product-rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o empty" />
                                                    </div>
                                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                    <div className="product-btns">
                                                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Añadir</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-6">
                                            <div className="product product-single">
                                                <div className="product-thumb">
                                                    <button className="main-btn quick-view"><i className="fa fa-search-plus" /> VER</button>
                                                    <img src="./img/product02.jpg" alt />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-Precio">$32.50</h3>
                                                    <div className="product-rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o empty" />
                                                    </div>
                                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                    <div className="product-btns">
                                                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Añadir</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix visible-sm visible-xs" />
                                        <div className="col-md-4 col-sm-6 col-xs-6">
                                            <div className="product product-single">
                                                <div className="product-thumb">
                                                    <div className="product-label">
                                                        <span>Nuevo</span>
                                                        <span className="sale">-20%</span>
                                                    </div>
                                                    <button className="main-btn quick-view"><i className="fa fa-search-plus" /> VER</button>
                                                    <img src="./img/product03.jpg" alt />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-Precio">$32.50 <del className="product-old-Precio">$45.00</del></h3>
                                                    <div className="product-rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o empty" />
                                                    </div>
                                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                    <div className="product-btns">
                                                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Añadir</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix visible-md visible-lg" />
                                        <div className="col-md-4 col-sm-6 col-xs-6">
                                            <div className="product product-single">
                                                <div className="product-thumb">
                                                    <div className="product-label">
                                                        <span>Nuevo</span>
                                                    </div>
                                                    <button className="main-btn quick-view"><i className="fa fa-search-plus" /> VER</button>
                                                    <img src="./img/product04.jpg" alt />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-Precio">$32.50</h3>
                                                    <div className="product-rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o empty" />
                                                    </div>
                                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                    <div className="product-btns">
                                                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Añadir</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix visible-sm visible-xs" />
                                        <div className="col-md-4 col-sm-6 col-xs-6">
                                            <div className="product product-single">
                                                <div className="product-thumb">
                                                    <div className="product-label">
                                                        <span>Nuevo</span>
                                                    </div>
                                                    <button className="main-btn quick-view"><i className="fa fa-search-plus" /> VER</button>
                                                    <img src="./img/product05.jpg" alt />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-Precio">$32.50</h3>
                                                    <div className="product-rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o empty" />
                                                    </div>
                                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                    <div className="product-btns">
                                                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Añadir</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-6">
                                            <div className="product product-single">
                                                <div className="product-thumb">
                                                    <div className="product-label">
                                                        <span>Nuevo</span>
                                                        <span className="sale">-20%</span>
                                                    </div>
                                                    <button className="main-btn quick-view"><i className="fa fa-search-plus" /> VER</button>
                                                    <img src="./img/product06.jpg" alt />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-Precio">$32.50 <del className="product-old-Precio">$45.00</del></h3>
                                                    <div className="product-rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o empty" />
                                                    </div>
                                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                    <div className="product-btns">
                                                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Añadir</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix visible-md visible-lg visible-sm visible-xs" />
                                        <div className="col-md-4 col-sm-6 col-xs-6">
                                            <div className="product product-single">
                                                <div className="product-thumb">
                                                    <div className="product-label">
                                                        <span>Nuevo</span>
                                                        <span className="sale">-20%</span>
                                                    </div>
                                                    <button className="main-btn quick-view"><i className="fa fa-search-plus" /> VER</button>
                                                    <img src="./img/product07.jpg" alt />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-Precio">$32.50 <del className="product-old-Precio">$45.00</del></h3>
                                                    <div className="product-rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o empty" />
                                                    </div>
                                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                    <div className="product-btns">
                                                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Añadir</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-6">
                                            <div className="product product-single">
                                                <div className="product-thumb">
                                                    <button className="main-btn quick-view"><i className="fa fa-search-plus" /> VER</button>
                                                    <img src="./img/product08.jpg" alt />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-Precio">$32.50</h3>
                                                    <div className="product-rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o empty" />
                                                    </div>
                                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                    <div className="product-btns">
                                                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Añadir</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix visible-sm visible-xs" />
                                        <div className="col-md-4 col-sm-6 col-xs-6">
                                            <div className="product product-single">
                                                <div className="product-thumb">
                                                    <div className="product-label">
                                                        <span className="sale">-20%</span>
                                                    </div>
                                                    <button className="main-btn quick-view"><i className="fa fa-search-plus" /> VER</button>
                                                    <img src="./img/product01.jpg" alt />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-Precio">$32.50 <del className="product-old-Precio">$45.00</del></h3>
                                                    <div className="product-rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o empty" />
                                                    </div>
                                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                    <div className="product-btns">
                                                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Añadir</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="store-filter clearfix">
                                    <div className="pull-left">
                                        <div className="row-filter">
                                            <a href="#"><i className="fa fa-th-large" /></a>
                                            <a href="#" className="active"><i className="fa fa-bars" /></a>
                                        </div>
                                        <div className="sort-filter">
                                            <span className="text-uppercase">ORDENAR POR:</span>
                                            <select className="input">
                                                <option value={0}>Posición</option>
                                                <option value={0}>Precio</option>
                                                <option value={0}>Rating</option>
                                            </select>
                                            <a href="#" className="main-btn icon-btn"><i className="fa fa-arrow-down" /></a>
                                        </div>
                                    </div>
                                    <div className="pull-right">
                                        <div className="page-filter">
                                            <span className="text-uppercase">MOSTRAR:</span>
                                            <select className="input">
                                                <option value={0}>10</option>
                                                <option value={1}>20</option>
                                                <option value={2}>30</option>
                                            </select>
                                        </div>
                                        <ul className="store-pages">
                                            <li><span className="text-uppercase">PÁGINA:</span></li>
                                            <li className="active">1</li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#"><i className="fa fa-caret-right" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}