import { Link } from "react-router-dom";
import BreadcrumbOne from "../components/breadcrumb/BreadcrumbOne";
import Divider from "../components/divider/Divider";
import Header from "../components/header/Header";
import CtaThree from "../components/cta/CtaThree";
import Footer from "../components/footer/Footer";
import BlogOneCard from "../components/blog/BlogOneCard";
import BlogOneData from '../data/blog/bloglist-one.json';
import SEO from "../components/common/SEO";

export default function BlogOne() {

    const BlogCardsItems = BlogOneData.map((item, index) => (
        <BlogOneCard key={index} data={item} />
    ))

    return(
        <>
            <SEO title="Blog" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbOne 
                breadcrumbImage="assets/img/bg-img/7.jpg" 
                breadcrumbTitle="Blog One" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Blog"
            />

            <Divider />

            <div className="saasbox-blog-area blog-card-page">
                <div className="container">
                    <div className="row g-4 g-md-5 justify-content-center">
                        {BlogCardsItems}
                    </div>

                    <div className="saasbox-pagination-area mt-5">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center mb-0">
                                <li className="page-item active">
                                    <Link className="page-link" to="#">1</Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">2</Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">3</Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">4</Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">-</Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">9</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
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
        </>
    )
}