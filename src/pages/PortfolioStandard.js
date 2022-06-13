import React from "react";
import { useEffect, useState } from "react";
 import ScrollAnimation from "react-animate-on-scroll";
import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Footer from "../components/footer/Footer";
import SEO from "../components/common/SEO";
import { BackEndUrlContext } from '../BackEndUrlContext'
export default function PortfolioStandard() {
    const secondIcon ="bi-link-45deg";
 
    const BackEndUrl = React.useContext(BackEndUrlContext);
    const [portfolioProjects, setportfolioProjects] = useState([]);
    const [items, setItems] = useState([]);
 
    const filterItems = (catag) => {
        console.log(catag)
        var updatedItems=null;
        if(catag==='All')
        {
            updatedItems=portfolioProjects
        }
        else{
             updatedItems = items.filter((elem) => {
            
                return elem.field_pp_catagory === catag;
            })
        }
       
        setportfolioProjects(updatedItems); 
    }

 

     useEffect(() => {
        const fetchPortfolio = async () => {
            try{
            const portfolioProjectsResponse = await (await fetch(BackEndUrl+"/api/portfolio-projects?_format=json")).json();
            setportfolioProjects(portfolioProjectsResponse);
            setItems(portfolioProjectsResponse);
            console.log("all protfolio",portfolioProjectsResponse);
            }catch(e)
            {
                console.log("Internet Connection Problem",e);
            }
        }
        fetchPortfolio();

    }, [])

    const portfolioItems = portfolioProjects.map((ele, index) => (
        <div key={index}  className={`col-12 col-sm-6 col-lg-4 portfolio-item ${ele.filterKey}`}>
            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={50} animateOnce={true}>
                <div className="single-portfolio-area">
                    <img src={`${BackEndUrl}/${ele.field_pp_image}`} alt="not Found" />

                    <div className="overlay-content" style={{"height": "60px"}}>
                        <div className="portfolio-title">
                            <h6 className="mb-0">{ele.field_pp_catagory}</h6>
                        </div>
                        <div className="portfolio-links">
                             <a href={`${ele.field_pp_project_link}`} target="_blank" >
                                <i className={`bi ${secondIcon}`}></i>
                            </a> 
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
                            onClick={() => setportfolioProjects(items)}
                        >
                            All
                        </button>

                        <button 
                            className="position-relative btn btn-primary btn-sm mx-1 mb-2" 
                            type="button" 
                            onClick={() => filterItems("Website")}
                        >
                            Website
                        </button>

                        <button 
                            className="position-relative btn btn-primary btn-sm mx-1 mb-2" 
                            type="button" 
                            onClick={() => filterItems("Web App")}
                        >
                            Web App
                        </button>

                        <button 
                            className="position-relative btn btn-primary btn-sm mx-1 mb-2" 
                            type="button" 
                            onClick={() => filterItems("App")}
                        >
                            Apps
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