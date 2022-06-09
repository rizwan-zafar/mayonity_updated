import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BreadcrumbOne from "../components/breadcrumb/BreadcrumbOne";
import AboutOne from "../components/about/AboutOne";
import Divider from "../components/divider/Divider";
import CoolFacts from "../components/cool-facts/CoolFacts";
import Features from "../components/features/Features";
import Services from "../components/services/Services";
import TestimonialOne from "../components/testimonial/TestimonialOne";
import SEO from "../components/common/SEO";

export default function AboutCreative() {
    return(
        <div>
            <SEO title="About Creative" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbOne 
                breadcrumbImage="assets/img/bg-img/7.jpg" 
                breadcrumbTitle="About Creative" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="about"
            />

            <Divider />

            <AboutOne />

            <div className="pb-5 d-block" />

            <Divider />

            <CoolFacts />

            <Divider />

            <Features />

            <Divider />

            <Services />

            <Divider />

            <TestimonialOne />

            <Footer 
                footerLogo="assets/img/core-img/logo-white.png"
                footerStyle="footer-2"
            />
        </div>
    )
}