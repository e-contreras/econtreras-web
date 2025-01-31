import React, { Component } from "react";

export default class Start extends Component {

    render() {

        return (
            <div>
                <div id="home">
                    <div className="container">
                        <div className="home-wrap" style={{marginLeft: "0px"}}>
                            <div id="home-slick">
                                <div className="banner banner-1">
                                    <img src="./img/banner01.jpg" alt />
                                    <div className="banner-caption text-center">
                                        <h1>Bags sale</h1>
                                        <h3 className="white-color font-weak">Up to 50% Discount</h3>
                                        <button className="primary-btn">Shop Now</button>
                                    </div>
                                </div>
                                <div className="banner banner-1">
                                    <img src="./img/banner02.jpg" alt />
                                    <div className="banner-caption">
                                        <h1 className="primary-color">HOT DEAL<br /><span className="white-color font-weak">Up to 50% OFF</span></h1>
                                        <button className="primary-btn">Shop Now</button>
                                    </div>
                                </div>
                                <div className="banner banner-1">
                                    <img src="./img/banner03.jpg" alt />
                                    <div className="banner-caption">
                                        <h1 className="white-color">New Product <span>Collection</span></h1>
                                        <button className="primary-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <a className="banner banner-1" href="#">
                                    <img src="./img/banner10.jpg" alt />
                                    <div className="banner-caption text-center">
                                        <h2 className="white-color">NEW COLLECTION</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <a className="banner banner-1" href="#">
                                    <img src="./img/banner11.jpg" alt />
                                    <div className="banner-caption text-center">
                                        <h2 className="white-color">NEW COLLECTION</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
                                <a className="banner banner-1" href="#">
                                    <img src="./img/banner12.jpg" alt />
                                    <div className="banner-caption text-center">
                                        <h2 className="white-color">NEW COLLECTION</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="banner banner-1">
                                    <img src="./img/banner13.jpg" alt />
                                    <div className="banner-caption text-center">
                                        <h1 className="primary-color">HOT DEAL<br /><span className="white-color font-weak">Up to 50% OFF</span></h1>
                                        <button className="primary-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <a className="banner banner-1" href="#">
                                    <img src="./img/banner11.jpg" alt />
                                    <div className="banner-caption text-center">
                                        <h2 className="white-color">NEW COLLECTION</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <a className="banner banner-1" href="#">
                                    <img src="./img/banner12.jpg" alt />
                                    <div className="banner-caption text-center">
                                        <h2 className="white-color">NEW COLLECTION</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h2 className="title">Latest Products</h2>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="product product-single">
                                    <div className="product-thumb">
                                        <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                        <img src="./img/product01.jpg" alt />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-price">$32.50</h3>
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
                                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="product product-single">
                                    <div className="product-thumb">
                                        <div className="product-label">
                                            <span>New</span>
                                            <span className="sale">-20%</span>
                                        </div>
                                        <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                        <img src="./img/product02.jpg" alt />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
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
                                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="product product-single">
                                    <div className="product-thumb">
                                        <div className="product-label">
                                            <span>New</span>
                                            <span className="sale">-20%</span>
                                        </div>
                                        <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                        <img src="./img/product03.jpg" alt />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
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
                                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="product product-single">
                                    <div className="product-thumb">
                                        <div className="product-label">
                                            <span>New</span>
                                        </div>
                                        <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                        <img src="./img/product04.jpg" alt />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-price">$32.50</h3>
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
                                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="banner banner-2">
                                    <img src="./img/banner15.jpg" alt />
                                    <div className="banner-caption">
                                        <h2 className="white-color">NEW<br />COLLECTION</h2>
                                        <button className="primary-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="product product-single">
                                    <div className="product-thumb">
                                        <div className="product-label">
                                            <span>New</span>
                                            <span className="sale">-20%</span>
                                        </div>
                                        <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                        <img src="./img/product07.jpg" alt />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
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
                                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="product product-single">
                                    <div className="product-thumb">
                                        <div className="product-label">
                                            <span>New</span>
                                            <span className="sale">-20%</span>
                                        </div>
                                        <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                        <img src="./img/product06.jpg" alt />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
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
                                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="product product-single">
                                    <div className="product-thumb">
                                        <div className="product-label">
                                            <span>New</span>
                                            <span className="sale">-20%</span>
                                        </div>
                                        <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                        <img src="./img/product05.jpg" alt />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
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
                                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h2 className="title">Picked For You</h2>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="product product-single">
                                    <div className="product-thumb">
                                        <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                        <img src="./img/product04.jpg" alt />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-price">$32.50</h3>
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
                                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="product product-single">
                                    <div className="product-thumb">
                                        <div className="product-label">
                                            <span>New</span>
                                        </div>
                                        <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                        <img src="./img/product03.jpg" alt />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-price">$32.50</h3>
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
                                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="product product-single">
                                    <div className="product-thumb">
                                        <div className="product-label">
                                            <span className="sale">-20%</span>
                                        </div>
                                        <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                        <img src="./img/product02.jpg" alt />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
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
                                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="product product-single">
                                    <div className="product-thumb">
                                        <div className="product-label">
                                            <span>New</span>
                                            <span className="sale">-20%</span>
                                        </div>
                                        <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                        <img src="./img/product01.jpg" alt />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
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
                                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                        </div>
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