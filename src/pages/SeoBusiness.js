import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroFour from "../components/hero/HeroFour";
import ServiceTwo from "../components/services/ServiceTwo";
import SaasboxTab from "../components/tab/Tab";
import Divider from "../components/divider/Divider";
import PortfolioTwo from "../components/portfolio/PortfolioTwo";
import PricingTableTwo from "../components/pricing/PricingTwo";
import TestimonialOne from "../components/testimonial/TestimonialOne";
import PartnerOne from "../components/partner/PartnerOne";
import BlogOne from "../components/blog/BlogOne";
import CtaThree from "../components/cta/CtaThree";
import SEO from "../components/common/SEO";

export default function SeoBusiness() {
    return(
        <div>
            <SEO title="Seo Business" />

            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <HeroFour />

            <ServiceTwo />

            <Divider />

            <SaasboxTab />

            <Divider />

            <PortfolioTwo />

            <Divider />

            <PricingTableTwo />

            <Divider />

            <TestimonialOne />

            <Divider />

            <PartnerOne />
            
            <Divider />

            <BlogOne />

            <Divider />

            <CtaThree 
                title="Let's start with the simple way to create a website." 
                btnUrl="/" 
                btnText="Buy Now"
            />

            <Footer 
                footerLogo="assets/img/core-img/logo.png"
                footerStyle="" 
            />
        </div>
    )
}