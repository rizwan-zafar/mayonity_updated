import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Divider from "../divider/Divider";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import BlogDetailsContent from './BlogDetailsContent';
import CtaThree from "../cta/CtaThree";
import BlogOneData from '../../data/blog/bloglist-one.json';

export default function BlogDetails() {
    const parameter = useParams();
    const postId = parameter.postId;
    const blogId = parseInt(postId, 10);
    const data = BlogOneData.filter(blog => blog.id === blogId);

    return (
        <div>
            {/* Header: src > components > header > Header */}
            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            {/* Breadcrumb One: src > components > breadcrumb > Breadcrumb One */}
            <BreadcrumbOne  
                breadcrumbImage="assets/img/bg-img/7.jpg" 
                breadcrumbTitle="Blog Details" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Blog Details"
            />

            <Divider />

            {/* Blog Wrapper */}
            <div className="saasbox-blog-area">
                <div className="container">
                    <BlogDetailsContent data={data[0]} />
                </div>
            </div>

            <Divider />
            
            {/* Cta Three: src > components > cta > CtaThree */}
            <CtaThree 
                title="Let's start with the simple way to create a website." 
                btnUrl="/" 
                btnText="Buy Now"
            />

            {/* Footer: src > components > footer > Footer */}
            <Footer 
                footerLogo="../assets/img/core-img/logo-white.png"
                footerStyle="footer-2" 
            />
        </div>
    )
}