import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Divider from "../components/divider/Divider";
import CtaThree from "../components/cta/CtaThree";
import Footer from "../components/footer/Footer";
import SEO from "../components/common/SEO";

export default function Checkout() {
    return(
        <div>
            <SEO title="Checkout" />

            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbTwo 
                breadcrumbTitle="Checkout" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Checkout" 
            />

            <Divider />

            <div className="checkout-area">
                <div className="container">
                    <div className="row g-5">
                        {/* Checkout Details Area*/}
                        <div className="col-12 col-lg-6">
                            <div className="checkout-details-area">
                                <h3 className="mb-4">Billing Details</h3>

                                <form >
                                    <div className="row">
                                        <div className="col-12">
                                            <label className="mb-2" htmlFor="first-name">First Name</label>
                                            <input className="form-control mb-30" id="first-name" type="text" placeholder="First Name"  required />
                                        </div>

                                        <div className="col-12">
                                            <label className="mb-2" htmlFor="last-name">Last Name</label>
                                            <input className="form-control mb-30" id="last-name" type="text" placeholder="Last Name" required />
                                        </div>

                                        <div className="col-12">
                                            <label className="mb-2" htmlFor="company">Company Name</label>
                                            <input className="form-control mb-30" id="company" type="text" placeholder="Company" />
                                        </div>

                                        <div className="col-12">
                                            <label className="mb-2" htmlFor="email-address">Email Address</label>
                                            <input className="form-control mb-30" id="email-address" type="email" placeholder="Email Address" required />
                                        </div>

                                        <div className="col-12">
                                            <label className="mb-2" htmlFor="phone">Phone</label>
                                            <input className="form-control mb-30" id="phone" type="text" placeholder="Phone" />
                                        </div>

                                        <div className="col-12">
                                            <label className="mb-2" htmlFor="country">Country</label>
                                            <select className="form-select form-control w-100 mb-30" id="country">
                                                <option value="usa">United States</option>
                                                <option value="usa">United Kingdom</option>
                                                <option value="usa">Germany</option>
                                                <option value="usa">India</option>
                                                <option value="usa">Australia</option>
                                                <option value="usa">Bangladesh</option>
                                            </select>
                                        </div>

                                        <div className="col-12">
                                            <label className="mb-2" htmlFor="street-address">Street address</label>
                                            <input className="form-control mb-30" id="street-address" type="text" placeholder="Street Address" />
                                        </div>

                                        <div className="col-12">
                                            <label className="mb-2" htmlFor="apartment-suite">Apartment/Suite/Unit</label>
                                            <input className="form-control mb-30" id="apartment-suite" type="text" placeholder="Apartment/Suite/Unit" />
                                        </div>

                                        <div className="col-12">
                                            <label className="mb-2" htmlFor="city">Town/City</label>
                                            <input className="form-control mb-30" id="city" type="text" placeholder="Town/City" />
                                        </div>

                                        <div className="col-12">
                                            <label className="mb-2" htmlFor="state">State</label>
                                            <input className="form-control mb-30" id="state" type="text" placeholder="State" />
                                        </div>

                                        <div className="col-12">
                                            <label className="mb-2" htmlFor="postcode">Postcode/Zip</label>
                                            <input className="form-control mb-30" id="postcode" type="text" placeholder="Postcode/Zip" />
                                        </div>

                                        <div className="col-12">
                                            <label className="mb-2" htmlFor="order-notes">Order Notes</label>
                                            <textarea className="form-control" id="order-notes" placeholder="Notes about your order, e.g. special notes for delivery." rows={3} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Order Form Area*/}
                        <div className="col-12 col-lg-6">
                            <div className="order-form bg-gray">
                                <h4 className="mb-4">Your Order(s)</h4>

                                {/* Order Table*/}
                                <div className="order-table table-responsive mb-4">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="px-3">Product</th>
                                                <th className="text-end px-3">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{borderTop: 0}} >
                                            <tr>
                                                <th className="px-3">Bonsai Tree 
                                                    <span> - 1 p</span>
                                                </th>
                                                <td className="text-end px-3">$9.63</td>
                                            </tr>
                                            <tr>
                                                <th className="px-3">Sony BS4 
                                                    <span> - 1 p</span>
                                                </th>
                                                <td className="text-end px-3">$7.31</td>
                                            </tr>
                                        </tbody>
                                        <tfoot style={{borderTop: 0}} >
                                            <tr>
                                                <th className="px-3">Subtotal </th>
                                                <td className="text-end px-3">$16.94</td>
                                            </tr>
                                            <tr>
                                                <th className="px-3">Shipping </th>
                                                <td className="text-end px-3">Flat Rate $5.00</td>
                                            </tr>
                                            <tr>
                                                <th className="px-3">Order Total </th>
                                                <td className="text-end px-3">$21.94</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                {/* Checkout Payment */}
                                <div className="checkout-payment-area">
                                    <form onSubmit={e => { e.preventDefault(); }} >
                                        <div className="form-group mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" id="bank" type="radio" defaultValue="bank" name="checkout-payment" defaultChecked />
                                                <label className="form-check-label font-weight-bold" htmlFor="bank">
                                                    Direct Bank Transfer 
                                                    <br /> 
                                                    Make your payment directly into our bank account.
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" id="cheque" type="radio" defaultValue="cheque" name="checkout-payment" />

                                                <label className="form-check-label font-weight-bold" htmlFor="cheque">
                                                    Cheque Payments 
                                                    <br/> 
                                                    Please send a check to Store Name, Store Street, Store Town, Store State/County, Store Postcode.
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" id="cash" type="radio" defaultValue="cash" name="checkout-payment" />
                                                <label className="form-check-label font-weight-bold" htmlFor="cash">
                                                    Cash On Delivery 
                                                    <br />
                                                    Pay with cash upon delivery.
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="form-check">
                                                <input className="form-check-input" id="paypal" type="radio" defaultValue="paypal" name="checkout-payment" />
                                                <label className="form-check-label font-weight-bold" htmlFor="paypal">
                                                    Payment via PayPal 
                                                    <br />
                                                    Pay with PayPal.
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group mt-4">
                                            <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                                        </div>

                                        {/* Place Order*/}
                                        <button className="btn btn-primary w-100 mt-4" type="submit">Place Order</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Divider />

            <CtaThree 
                title="Let's start with the simple way to create a website." 
                btnUrl="/" 
                btnText="Buy Today" 
            />

            <Footer 
                footerLogo="assets/img/core-img/logo-white.png" 
                footerStyle="footer-2"
            />
        </div>
    )
}