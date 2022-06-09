import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Divider from "../components/divider/Divider";
import BreadcrumbOne from "../components/breadcrumb/BreadcrumbOne";
import BlogDetailsContentTwo from '../components/blog/BlogDetailsContentTwo';
import CtaThree from "../components/cta/CtaThree";
import BlogOneData from '../data/blog/bloglist-one.json';

export default function BlogDetailsTwo() {
    const data = BlogOneData;

    return (
        <div>
            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbOne  
                breadcrumbImage="assets/img/bg-img/7.jpg" 
                breadcrumbTitle="Blog Details Two" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Blog Details"
            />

            <Divider />

            <div className="saasbox-blog-area">
                <div className="container">
                    <BlogDetailsContentTwo data={data[0]} />
                </div>
            </div>

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