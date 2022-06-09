import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import BreadcrumbOne from "../components/breadcrumb/BreadcrumbOne";
import Footer from "../components/footer/Footer";
import Divider from "../components/divider/Divider";
import SignInviaOthers from "../components/register/SignInVia";
import SEO from "../components/common/SEO";

export default function ForgetPassword() {
    return(
        <div>
            <SEO title="Forget Password" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbOne 
                breadcrumbImage="assets/img/bg-img/7.jpg" 
                breadcrumbTitle="Forget Password" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Forget" 
            />

            <Divider />

            <div className="register-area">
                <div className="container">
                    <div className="row g-5 align-items-center justify-content-between">
                        <div className="col-12 col-lg-5">
                            <div className="register-thumbnail">
                                <img src="assets/img/illustrator/hero-2.png" alt="" />
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="card register-card bg-gray p-1 p-sm-4">
                                <div className="card-body">
                                    <h4>Reset Password</h4>
                                    <p>Already have an account?
                                        <Link className="ms-2 fw-bold" to="/login">Log In</Link>
                                    </p>

                                    {/* Forget Password Form */}
                                    <div className="register-form my-5">
                                        <form onSubmit={e => { e.preventDefault(); }} >
                                            <div className="form-group mb-3">
                                                <input className="form-control" type="email" placeholder="Email Address" required />
                                            </div>
                                            <button className="btn btn-primary w-100" type="submit">
                                                <i className="bi bi-lock me-2" />Reset Password
                                            </button>
                                        </form>
                                    </div>

                                    {/* Sign in via others */}
                                    <SignInviaOthers />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Divider />

            <Footer 
                footerLogo="assets/img/core-img/logo-white.png" 
                footerStyle="footer-2" 
            />
        </div>
    )
}