import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FeatureTwo from "../components/features/FeatureTwo";
import HeroThree from "../components/hero/HeroThree";
import PartnerTwo from "../components/partner/PartnerTwo";
import Divider from "../components/divider/Divider";
import AboutThree from "../components/about/AboutThree";
import FAQOne from "../components/faq/FaqOne";
import PriceTableThree from "../components/pricing/PricingThree";
import BlogTwo from "../components/blog/BlogTwo";
import CtaTwo from "../components/cta/CtaTwo";
import SEO from "../components/common/SEO";

export default function SaasLanding() {
    return(
        <div className="saas-landing-wrap">
            <SEO title="Saas Landing" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <HeroThree />

            <PartnerTwo />

            <Divider />

            <AboutThree 
                iconColor= "bg-warning"
                iconName= "bi-lightning-fill"
                title = "The perfect solution for your saas software."
                para = "It\'s crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template."
                image = "assets/img/illustrator/hero-8.png"
                videoID = "150991118"
            />

            <Divider />

            <FeatureTwo />

            <Divider />

            <FAQOne 
                heading="Questions & Answers" 
                image="assets/img/illustrator/3.png" 
            />

            <Divider />

            <PriceTableThree />

            <Divider />

            <BlogTwo />

            <Divider />

            <CtaTwo 
                title="Ready to start your first project with the Saasbox?" 
                subtitle="Each purchase of Saasbox comes with six months free support — and a lifetime of free updates." 
                btnText="Start Now" 
                btnUrl="" 
                imageGroup={[
                    "assets/img/bg-img/5.jpg",
                    "assets/img/bg-img/13.jpg",
                    "assets/img/bg-img/14.jpg"
                ]}
            />

            <Footer 
                footerLogo="assets/img/core-img/logo-white.png"
                footerStyle="footer-2" 
            />
        </div>
    )
}