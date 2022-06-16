import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Divider from "../components/divider/Divider";
import FeatureTwo from "../components/features/FeatureTwo";
import TestimonialTwo from "../components/testimonial/TestimonialTwo";
import PartnerOne from "../components/partner/PartnerOne";
import Footer from "../components/footer/Footer";
// import AboutFour from "../components/about/AboutFour";
import SEO from "../components/common/SEO";
import Team from "../components/team/Team";
import AboutTwo from "../components/about/AboutTwo";


export default function AboutStandard() {
    return (
        <div>
            <SEO title="About Us" />

            <Header
                brandLogo="assets/img/core-img/logo.png"
                headerStyle="header-2"

                buttonColor="btn-warning"
            />

            <BreadcrumbTwo
                breadcrumbTitle="About Us"
                homePageUrl="/"
                homePageText="Home"
                currentPageText="About"
            />

            <Divider />


            {/* <AboutFour /> */}
            <AboutTwo />

            <Divider />

            <FeatureTwo />

            <TestimonialTwo />

            <Divider />
           
            <PartnerOne />

            <Divider />


            <Team />
            <Divider />

            <div className="container">
                <div className="border" />
            </div>

            <Footer
                footerLogo="assets/img/core-img/logo.png"
                footerStyle=""
            />
        </div>
    )
}