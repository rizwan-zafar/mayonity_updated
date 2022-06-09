import Header from "../components/header/Header";
import BreadcrumbOne from "../components/breadcrumb/BreadcrumbOne";
import Divider from "../components/divider/Divider";
import AboutFour from "../components/about/AboutFour";
import SaasboxTab from "../components/tab/Tab";
import CtaOne from "../components/cta/CtaOne";
import Footer from "../components/footer/Footer";
import SEO from "../components/common/SEO";

export default function ServiceCreative() {
    return(
        <div>
            <SEO title="Service Creative" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbOne 
                breadcrumbImage="assets/img/bg-img/7.jpg" 
                breadcrumbTitle="Service Creative" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Service" 
            />

            <Divider />

            <AboutFour />

            <Divider />

            <SaasboxTab />

            <Divider />

            <CtaOne 
                CtaThumb="assets/img/bg-img/1.jpg" 
                title="Build a beautiful website very easily within few hours, not a day." 
                btnUrl="/" 
                btnText="Get started now" 
            />

            <Footer 
                footerLogo="assets/img/core-img/logo-white.png" 
                footerStyle="footer-2" 
            />
        </div>
    )
}