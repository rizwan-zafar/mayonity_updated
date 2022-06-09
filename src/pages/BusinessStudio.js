import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AboutTwo from "../components/about/AboutTwo";
import BlogTwo from "../components/blog/BlogTwo";
import Divider from "../components/divider/Divider";
import FeatureTwo from "../components/features/FeatureTwo";
import HeroTwo from "../components/hero/HeroTwo";
import Newsletter from "../components/newsletter/Newsletter";
import PortfolioTwo from "../components/portfolio/PortfolioTwo";
import PricingTableTwo from "../components/pricing/PricingTwo";
import TestimonialTwo from "../components/testimonial/TestimonialTwo";
import SEO from "../components/common/SEO";

export default function BusinessStudio() {
    return(
        <div className="business-studio-wrap">
            <SEO title="Business Studio" />

            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Get Started" 
                buttonColor="btn-primary" 
            />
            
            <HeroTwo 
                BgShapeImage="assets/img/core-img/hero-2.png" 
                title="We focus on the growth of your business." 
                subtitle="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template." 
                buttons= {[
                    {
                        btnColor: "btn-warning",
                        btnUrl: "/",
                        btnText: "Get Started"
                    },
                    {
                        btnColor: "btn-danger",
                        btnUrl: "lFGvqvPh5jI",
                        btnText: "Play Video"
                    }
                ]}
                heroThumb="assets/img/illustrator/hero-6.png" 
            />

            <div className="container">
                <div className="border-top"></div>
            </div>

            <Divider />

            <AboutTwo />

            <Divider />

            <FeatureTwo />

            <Divider />

            <PricingTableTwo />

            <Divider />

            <PortfolioTwo />

            <TestimonialTwo />

            <BlogTwo />

            <Divider />

            <Newsletter 
                backgroundImage="assets/img/core-img/4.png" 
                title="Subscribe to our newsletter" 
                subtitle="Subscribe to our newsletter, we will notify you when we are live." 
                placeholderText="Type your mail" 
                inputSubId="mailHelp" 
                inputSubText="We'll never share your email with anyone else." 
                btnColor="btn-primary" 
                btnText="Subscribe Now"
            />

            <Divider />

            <Footer 
                footerLogo="assets/img/core-img/logo-white.png" 
                footerStyle="footer-2" 
            />
        </div>
    )
}