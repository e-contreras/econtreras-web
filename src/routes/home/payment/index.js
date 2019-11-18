import React, { Component } from "react";

export default class Payment extends Component {

    render() {
        return (
            <div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <form id="checkout-form" className="clearfix">
                                <div className="col-md-6">
                                    <div className="billing-details">
                                        <p>Already a customer ? <a href="#">Login</a></p>
                                        <div className="section-title">
                                            <h3 className="title">Billing Details</h3>
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="first-name" placeholder="First Name" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="last-name" placeholder="Last Name" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="email" name="email" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="address" placeholder="Address" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="city" placeholder="City" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="country" placeholder="Country" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="zip-code" placeholder="ZIP Code" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="tel" name="tel" placeholder="Telephone" />
                                        </div>
                                        <div className="form-group">
                                            <div className="input-checkbox">
                                                <input type="checkbox" id="register" />
                                                <label className="font-weak" htmlFor="register">Create Account?</label>
                                                <div className="caption">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                                        </p><p>
                                                        <input className="input" type="password" name="password" placeholder="Enter Your Password" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="shiping-methods">
                                        <div className="section-title">
                                            <h4 className="title">Shiping Methods</h4>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="radio" name="shipping" id="shipping-1" defaultChecked />
                                            <label htmlFor="shipping-1">Free Shiping -  $0.00</label>
                                            <div className="caption">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p><p>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="radio" name="shipping" id="shipping-2" />
                                            <label htmlFor="shipping-2">Standard - $4.00</label>
                                            <div className="caption">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p><p>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payments-methods">
                                        <div className="section-title">
                                            <h4 className="title">Payments Methods</h4>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="radio" name="payments" id="payments-1" defaultChecked />
                                            <label htmlFor="payments-1">Direct Bank Transfer</label>
                                            <div className="caption">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p><p>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="radio" name="payments" id="payments-2" />
                                            <label htmlFor="payments-2">Cheque Payment</label>
                                            <div className="caption">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    </p><p>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="radio" name="payments" id="payments-3" />
                                            <label htmlFor="payments-3">Paypal System</label>
                                            <div className="caption">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    </p><p>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="order-summary clearfix">
                                        <div className="section-title">
                                            <h3 className="title">Order Review</h3>
                                        </div>
                                        <table className="shopping-cart-table table">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th />
                                                    <th className="text-center">Price</th>
                                                    <th className="text-center">Quantity</th>
                                                    <th className="text-center">Total</th>
                                                    <th className="text-right" />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="thumb"><img src="./img/thumb-product01.jpg" alt /></td>
                                                    <td className="details">
                                                        <a href="#">Product Name Goes Here</a>
                                                        <ul>
                                                            <li><span>Size: XL</span></li>
                                                            <li><span>Color: Camelot</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="price text-center"><strong>$32.50</strong><br /><del className="font-weak"><small>$40.00</small></del></td>
                                                    <td className="qty text-center"><input className="input" type="number" defaultValue={1} /></td>
                                                    <td className="total text-center"><strong className="primary-color">$32.50</strong></td>
                                                    <td className="text-right"><button className="main-btn icon-btn"><i className="fa fa-close" /></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="thumb"><img src="./img/thumb-product01.jpg" alt /></td>
                                                    <td className="details">
                                                        <a href="#">Product Name Goes Here</a>
                                                        <ul>
                                                            <li><span>Size: XL</span></li>
                                                            <li><span>Color: Camelot</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="price text-center"><strong>$32.50</strong></td>
                                                    <td className="qty text-center"><input className="input" type="number" defaultValue={1} /></td>
                                                    <td className="total text-center"><strong className="primary-color">$32.50</strong></td>
                                                    <td className="text-right"><button className="main-btn icon-btn"><i className="fa fa-close" /></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="thumb"><img src="./img/thumb-product01.jpg" alt /></td>
                                                    <td className="details">
                                                        <a href="#">Product Name Goes Here</a>
                                                        <ul>
                                                            <li><span>Size: XL</span></li>
                                                            <li><span>Color: Camelot</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="price text-center"><strong>$32.50</strong></td>
                                                    <td className="qty text-center"><input className="input" type="number" defaultValue={1} /></td>
                                                    <td className="total text-center"><strong className="primary-color">$32.50</strong></td>
                                                    <td className="text-right"><button className="main-btn icon-btn"><i className="fa fa-close" /></button></td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th className="empty" colSpan={3} />
                                                    <th>SUBTOTAL</th>
                                                    <th colSpan={2} className="sub-total">$97.50</th>
                                                </tr>
                                                <tr>
                                                    <th className="empty" colSpan={3} />
                                                    <th>SHIPING</th>
                                                    <td colSpan={2}>Free Shipping</td>
                                                </tr>
                                                <tr>
                                                    <th className="empty" colSpan={3} />
                                                    <th>TOTAL</th>
                                                    <th colSpan={2} className="total">$97.50</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <div className="pull-right">
                                            <button className="primary-btn">Place Order</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}