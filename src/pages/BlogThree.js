import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import BreadcrumbOne from "../components/breadcrumb/BreadcrumbOne";
import CtaThree from "../components/cta/CtaThree";
import Footer from "../components/footer/Footer";
import Divider from "../components/divider/Divider";
import BlogSidebar from "../components/blog/BlogSidebar";
import BlogData from '../data/blog/bloglist-one.json';
import SEO from "../components/common/SEO";

export default function BlogThree() {

    const BlogItems = BlogData.map((ele, index) => (
        <div key={index} className="col-12 col-sm-10 col-md-12">
            <div className="card blog-card border-0">
                <Link className="image-wrap d-block" to={`${process.env.PUBLIC_URL}/blog-details/${ele.id}`} >
                    <img className="w-100" src={`${process.env.PUBLIC_URL}/${ele.image}`} alt={ele.heading} />
                </Link>
                <div className="card-body px-4 pb-0">
                    <Link className="badge bg-primary text-white mb-1" to={`${process.env.PUBLIC_URL}/catagory/${ele.catagory}`} >
                        {ele.catagory}
                    </Link>
                    <Link className="post-title d-block mb-3" to={`${process.env.PUBLIC_URL}/blog-details/${ele.id}`} >
                        {ele.title}
                    </Link>
                    <div className="post-meta">
                        <span className="text-muted fz-14">
                            <i className="bi bi-clock me-2" />
                            {ele.readTime}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    ))

    return(
        <div>
            <SEO title="Blog" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbOne 
                breadcrumbImage="assets/img/bg-img/7.jpg" 
                breadcrumbTitle="Blog Three" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Blog"
            />

            <Divider />

            <div className="saasbox-blog-area">
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-between g-md-5">
                        <div className="col-12 col-sm-8 col-md-5 col-lg-4">
                            <BlogSidebar />
                        </div>

                        <div className="col-12 col-md-7">
                            <div className="row g-4 g-lg-5 justify-content-center">
                                {BlogItems}
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