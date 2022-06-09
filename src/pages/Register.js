import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import BreadcrumbOne from "../components/breadcrumb/BreadcrumbOne";
import Footer from "../components/footer/Footer";
import Divider from "../components/divider/Divider";
import SignInviaOthers from "../components/register/SignInVia";
import RegisterForm from "../components/register/RegisterForm";
import SEO from "../components/common/SEO";

export default function Register() {
    return(
        <div>
            <SEO title="Register" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbOne 
                breadcrumbImage="assets/img/bg-img/7.jpg" 
                breadcrumbTitle="Register Now" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Register" 
            />

            <Divider />

            <div className="register-area">
                <div className="container">
                    <div className="row g-4 g-lg-5 align-items-center justify-content-between">
                        <div className="col-12 col-lg-6">
                            <div className="register-thumbnail">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/illustrator/1.png`} alt="" />
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="card register-card bg-gray p-2 p-sm-4">
                                <div className="card-body">
                                    <h4>Create your free account</h4>
                                    <p>Already have an account?
                                        <Link className="ms-2 fw-bold" to="/login">Log In</Link>
                                    </p>
                                     
                                    {/* Register Form */}
                                    <RegisterForm />

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