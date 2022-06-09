import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Footer from "../components/footer/Footer";
import Divider from "../components/divider/Divider";
import ContactSideInfo from "../components/contact/ContactSideInfo";
import ContactForm from "../components/contact/ContactForm";
import GoogleMaps from "../components/contact/GoogleMaps";
import SEO from "../components/common/SEO";

export default function Contact() {
    return(
        <div>
            <SEO title="Contact" />

            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbTwo 
                breadcrumbTitle="Contact Us" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Contact" 
            />

            <Divider />

            <div className="saasbox-contact-us-area">
                <div className="container">
                    <div className="row g-4 justify-content-between">
                        <div className="col-12 col-lg-5 col-xl-4">
                            <ContactSideInfo />
                        </div>

                        {/* Contact Form*/}
                        <div className="col-12 col-lg-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

            <Divider />

            <GoogleMaps 
                mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14047.882048906753!2d-0.14268817855593444!3d51.50701170390822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1570696571917!5m2!1sen!2sbd"
            />

            <Footer 
                footerLogo="assets/img/core-img/logo.png" 
                footerStyle=""
            />
        </div>
    )
}