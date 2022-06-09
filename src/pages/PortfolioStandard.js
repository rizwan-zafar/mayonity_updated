import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Footer from "../components/footer/Footer";
import PortfolioData from "../data/portfolio/portfolio-two.json";
import SEO from "../components/common/SEO";

export default function PortfolioStandard() {
    const allItems = PortfolioData;
    const [items, setItems] = useState(allItems);
console.log(items)
    const filterItems = (catag) => {
        const updatedItems = PortfolioData.filter((elem) => {
            return elem.filterKey === catag;
        })
        setItems(updatedItems);
    }

    const portfolioItems = items.map((ele, index) => (
        <div key={index}  className={`col-12 col-sm-6 col-lg-4 portfolio-item ${ele.filterKey}`}>
            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={50} animateOnce={true}>
                <div className="single-portfolio-area">
                    <img src={`${process.env.PUBLIC_URL}/${ele.image}`} alt={ele.title} />

                    <div className="overlay-content" style={{"height": "60px"}}>
                        <div className="portfolio-title">
                            <h6 className="mb-0">{ele.title}</h6>
                        </div>
                        <div className="portfolio-links">
                            <button className="bg-transparent border-0" >
                                <i className={`bi ${ele.firstIcon}`}></i>
                            </button>
                            <Link to={`${process.env.PUBLIC_URL}/portfolio-details/${ele.id}`} >
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
            <SEO title="Portfolio Standard" />

            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbTwo 
                breadcrumbTitle="Portfolio Standard" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Portfolio" 
            />

            <div className="saasbox-portfolio-area pt-120 pb-120">
                <div className="container">
                    <div className="filters-button-group text-center mb-70">
                        <button 
                            className="position-relative btn btn-primary btn-sm mx-1 mb-2" 
                            type="button" 
                            onClick={() => setItems(allItems)}
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
                            onClick={() => filterItems("marketing")}
                        >
                            Marketing
                        </button>

                        <button 
                            className="position-relative btn btn-primary btn-sm mx-1 mb-2" 
                            type="button" 
                            onClick={() => filterItems("branding")}
                        >
                            Branding
                        </button>
                    </div>
                </div>

                <div className="container">
                    <div className="row saasbox-portfolio-filter g-5">
                        {portfolioItems}
                    </div>
                </div>
            </div>

            <Footer 
                footerLogo="assets/img/core-img/logo-white.png" 
                footerStyle="footer-2"
            />
        </div>
    )
}