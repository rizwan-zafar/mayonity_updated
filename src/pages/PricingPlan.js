import Header from "../components/header/Header";
import BreadcrumbOne from "../components/breadcrumb/BreadcrumbOne";
import Footer from "../components/footer/Footer";
import PricingTableOne from "../components/pricing/PricingOne";
import PriceTableThree from "../components/pricing/PricingThree";
import CtaThree from "../components/cta/CtaThree";
import SEO from "../components/common/SEO";

export default function PricingPlan() {
    return(
        <div>
            <SEO title="Pricing Plan" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbOne 
                breadcrumbImage="assets/img/bg-img/7.jpg" 
                breadcrumbTitle="Pricing Plan" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Price" 
            />

            <PricingTableOne />

            <CtaThree 
                title="Build a beautiful website very easily within few hours." 
                btnUrl="/" 
                btnText="Get started now" 
            />

            <PriceTableThree />

            <Footer 
                footerLogo="assets/img/core-img/logo.png" 
                footerStyle="" 
            />
        </div>
    )
}