import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroOne from "../components/hero/HeroOne";
import Divider from "../components/divider/Divider";
import Demos from "../components/demos/Demos";
import Technology from "../components/technology/Technology";
import InnerDemos from "../components/innerpage/InnerDemos";
import Features from "../components/template-feature/features";
import SEO from "../components/common/SEO";

export default function DemoPage() {
    return(
        <div>
            <SEO title="Welcome" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Get Started" 
                buttonColor="btn-warning" 
            />

            <HeroOne
                heroThumb = "assets/img/illustrator/hero-3.png"
                catagory = {["React JS", "React Bootstrap", "React Router 6"]}
                heading = "Build an awesome website with ease."
                para = "It's crafted with the latest trend of design &amp; coded with all modern approaches."
                buttons = {[
                    {
                        buttonColor: "btn-warning", 
                        url: "/", 
                        text: "Buy Now"},
                    {
                        buttonColor: "btn-light btn-minimal", 
                        url: "/", 
                        text: "Reviews (4.91/5.0)"}
                ]}
            />

            <Divider />

            <Demos />

            <Divider />

            <Technology />

            <Divider />

            <InnerDemos />

            <Divider />

            <Features />

            <Footer 
                footerLogo="assets/img/core-img/logo-white.png"
                footerStyle="footer-2" 
            />
        </div>
    );
}