import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BreadcrumbOne from "../components/breadcrumb/BreadcrumbOne";
import PortfolioData from "../data/portfolio/portfolio-one.json";
import CtaThree from "../components/cta/CtaThree";
import SEO from "../components/common/SEO";

export default function PortfolioCreative() {

    const [items, setItems] = useState(PortfolioData);

    const filterItems = (catag) => {
        const updatedItems = PortfolioData.filter((elem) => {
            return elem.filterKey === catag;
        })
        setItems(updatedItems);
    }

    const portfolioItems = items.map((ele, index) => (        
        <div key={index} className={`col-12 col-sm-6 col-lg-4 portfolio-item ${ele.filterKey}`}>
            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={50} animateOnce={true}>
                <div className="single-portfolio-area">
                    <img src={`${process.env.PUBLIC_URL}/${ele.image}`} alt={ele.title} />
                    <div className="overlay-content">
                        <div className="portfolio-title">
                            <h6 className="mb-0">{ele.title}</h6>
                        </div>
                        <div className="portfolio-links">
                            <button className="bg-transparent border-0" >
                                <i className={`bi ${ele.firstIcon}`}></i>
                            </button>
                            <Link to={`${process.env.PUBLIC_URL}/portfolio-details2/${ele.id}`} >
                                <i className={`bi ${ele.secondIcon}`}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    ))

    return(
        <div>
            <SEO title="Portfolio Creative" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbOne 
                breadcrumbImage="assets/img/bg-img/7.jpg"
                breadcrumbTitle="Portfolio Creative" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Portfolio" 
            />

            <div className="saasbox-portfolio-area creative-porfolio-line pt-120 pb-120">
                <span className="line1" />
                <span className="line2" />
                <span className="line3" />
                <span className="line4" />
                <span className="line5" />
                <span className="line6" />

                <div className="container">
                    <div className="filters-button-group text-center mb-70">
                        <button 
                            className="position-relative btn btn-primary btn-sm mx-1 mb-2" 
                            type="button" 
                            onClick={() => setItems(PortfolioData)}
                        >
                            All
                        </button>

                        <button 
                            className="position-relative btn btn-primary btn-sm mx-1 mb-2" 
                            type="button" 
                            onClick={() => filterItems("apps")}
                        >
                            Apps
                        </button>

                        <button 
                            className="position-relative btn btn-primary btn-sm mx-1 mb-2" 
                            type="button" 
                            onClick={() => filterItems("design")}
                        >
                            Design
                        </button>

                        <button 
                            className="position-relative btn btn-primary btn-sm mx-1 mb-2" 
                            type="button" 
                            onClick={() => filterItems("marketing")}
                        >
                            Marketing
                        </button>
                    </div>
                </div>

                <div className="container-fluid creative-porfolio-area">
                    <div className="row saasbox-portfolio-filter g-4 g-lg-5">
                        {portfolioItems}
                    </div>
                </div>
            </div>

            <CtaThree
                title="Let's start with the simple way to create a website." 
                btnUrl="/" 
                btnText="Get started now" 
            />

            <Footer 
                footerLogo="assets/img/core-img/logo-white.png" 
                footerStyle="footer-2" 
            />
        </div>
    )
}