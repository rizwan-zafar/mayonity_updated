import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Divider from "../components/divider/Divider";
import CtaThree from "../components/cta/CtaThree";
import Footer from "../components/footer/Footer";
import Coupon from "../components/cart/Coupon";
import TableRow from "../components/cart/TableRow";
import SEO from "../components/common/SEO";

export default function CartPage() {
    return(
        <div>
            <SEO title="Cart" />

            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbTwo 
                breadcrumbTitle="Cart" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Cart" 
            />

            <Divider />

            <div className="cart-area clearfix">
                <div className="container">

                    {/* Apply Coupon */}
                    <Coupon />

                    <div className="row">
                        <div className="col-12">
                            {/* Cart Table */}
                            <div className="cart-table mb-5">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <i className="bi bi-trash" />
                                                </th>
                                                <th>Image</th>
                                                <th>Product</th>
                                                <th>Unit Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>

                                        <tbody style={{borderTop: 0}} >

                                            <TableRow 
                                                closeIcon="bi-x-lg" 
                                                productImage="assets/img/bg-img/shop1.jpg" 
                                                productName="Bonsai Tree" 
                                                unitPrice="$0.99"
                                                totalPrice="$0.99"
                                            />

                                            <TableRow 
                                                closeIcon="bi-x-lg" 
                                                productImage="assets/img/bg-img/shop2.jpg" 
                                                productName="Milk Biscuit" 
                                                unitPrice="$0.7"
                                                totalPrice="$0.7"
                                            />

                                            <TableRow 
                                                closeIcon="bi-x-lg" 
                                                productImage="assets/img/bg-img/shop3.jpg" 
                                                productName="Flower Tree" 
                                                unitPrice="$0.49"
                                                totalPrice="$0.49"
                                            />

                                            <TableRow 
                                                closeIcon="bi-x-lg" 
                                                productImage="assets/img/bg-img/shop4.jpg" 
                                                productName="Sony PS4" 
                                                unitPrice="$1.11"
                                                totalPrice="$1.11"
                                            />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-4 col-md-6 col-lg-7" />

                        <div className="col-12 col-sm-8 col-md-6 col-lg-5">
                            {/* Cart Total Area*/}
                            <div className="cart-total-area ms-auto">
                                <h4 className="mb-3">Cart Totals</h4>
                                <div className="table-responsive">
                                    <table className="table mb-4 table-bordered">
                                        <tbody >
                                            <tr>
                                                <td className="px-3">Sub Total</td>
                                                <td className="px-3">$24.05</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3">Shipping</td>
                                                <td className="px-3">$2.00</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3">Total</td>
                                                <td className="px-3">$26.05</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <Link className="btn btn-primary w-100" to="/checkout">Proceed To Checkout</Link>
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