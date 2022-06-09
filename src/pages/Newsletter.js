import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import AboutTwo from "../components/about/AboutTwo";
import Divider from "../components/divider/Divider";
import VideoCard from "../components/video/VideoCard";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import SEO from "../components/common/SEO";

export default function NewsletterPage() {
    return(
        <div>
            <SEO title="Newsletter" />

            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbTwo  
                breadcrumbTitle="Newsletter" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Newsletter"
            />

            <Divider />

            <AboutTwo />

            <Divider />

            <Newsletter 
                backgroundImage="assets/img/core-img/4.png" 
                title="Subscribe to our newsletter" 
                subtitle="Subscribe to our newsletter, we will notify you when we are live." 
                formAction="/" 
                formMethod="POST" 
                placeholderText="Type your mail" 
                inputSubId="mailHelp" 
                inputSubText="We'll never share your email with anyone else." 
                btnColor="btn-primary" 
                btnText="Subscribe Now"
            />
            
            <Divider />

            <VideoCard 
                bgImage="assets/img/bg-img/15.jpg" 
                videoId="3qyhgV0Zew0" 
            />

            <Footer 
                footerLogo="assets/img/core-img/logo.png" 
                footerStyle="" 
            />
        </div>
    )
}