import NotFoundContent from "../components/404/NotFoundContent";
import Divider from "../components/divider/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SEO from "../components/common/SEO";

export default function NotFound() {
    return(
        <div>
            <SEO title="Not Found" />

            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <NotFoundContent 
                errorImage="assets/img/illustrator/hero-7.png" 
                errorText="Oops! Page not found" 
                errorPara="We couldn't find any results for your search. Try again." 
                btnText="Go to Home" 
            />

            <Divider />

            <Footer 
                footerStyle="footer-2" 
                footerLogo="assets/img/core-img/logo-white.png" 
            />
        </div>
    )
}