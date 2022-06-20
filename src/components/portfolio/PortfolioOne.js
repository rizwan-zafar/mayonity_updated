import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TinySlider from "tiny-slider-react";
import SectionHeadingTwo from "../heading/HeadingTwo";
import PortfolioData from '../../data/portfolio/portfolio-one.json';
import { BackEndUrlContext } from '../../BackEndUrlContext'

export default function PortfolioOne() {

    const BackEndUrl = React.useContext(BackEndUrlContext);
    const [portfolioText, setPortfolioText] = useState();
    const [portfolioProjects, setportfolioProjects] = useState([]);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const [portfolioTextResponse] = await (await fetch(BackEndUrl + "/api/home-portfolio-info?_format=json")).json();
                const portfolioProjectsResponse = await (await fetch(BackEndUrl + "/api/portfolio-projects?_format=json")).json();
                setPortfolioText(portfolioTextResponse);
                setportfolioProjects(portfolioProjectsResponse);
            } catch (e) {
                console.log("Internet Connection Problem", e);
            }
        }
        fetchPortfolio();

    }, [])

    const settings = {
        items: 4,               //6
        gutter: 30,
        slideBy: 1,
        autoplay: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 750,
        loop: false,
        nav: false,
        mouseDrag: true,
        controlsText: [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
        responsive: {
            320: {
                items: 1,
                gutter: 0
            },
            480: {
                items: 2,
                gutter: 30
            },
            992: {
                items: 3,
                gutter: 30
            },
            1380: {
                items: 4,
                gutter: 30
            },
            // 1700: {
            //     items: 5,
            //     gutter: 30
            // },
            // 1900: {
            //     items: 6,
            //     gutter: 30
            // }
        }
    };

    //Now Change begins

    const portfolioSlides = portfolioProjects[0]?.title ? portfolioProjects.map((item, index) =>
        <div key={index}>
            <div className="single-portfolio-area" style={{ position: "relative" }}>
                <img src={`https://www.admin.mayonity.com${item.field_pp_image}`} alt={item.field_pp_catagory} />
                <div className="overlay-content">
                    <div className="portfolio-title">
                        <h6 className="mb-0">{item.field_pp_clint}</h6>
                    </div>
                    <div className="portfolio-links">

                        <a href={`${item.field_pp_project_link}`} target="_blank">
                            <i className={`bi bi-link-45deg`}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ) : [];


    return (
        <div className="saasbox-portfolio-area">
            {/* Starting API Integration */}
            <SectionHeadingTwo
                subtitle={portfolioText?.field_ps_subheading ? portfolioText?.field_ps_subheading : "Our Creations"}

                heading={portfolioText?.field_ps_mainheading ? portfolioText?.field_ps_mainheading : "Inspect our Fantastic  Creations"}

                para={portfolioText?.field_ps_para ? portfolioText?.field_ps_para : "Fantastic masterpieces developed by our team members.<br />"}


                btnColor="btn-primary"

                btnUrl={portfolioText?.field_ps_btn_link ? portfolioText?.field_ps_btn_link : "/portfolio"}

                btnText={portfolioText?.field_ps_btn_text ? portfolioText?.field_ps_btn_text : "View All Works"}

            />

            {/* <div className="container-fluid" >
                <div className="portfolio-wrapper px-3" >
                    <TinySlider settings={settings} style={{ display: "flex" }}>
                        {portfolioSlides}
                    </TinySlider>
                </div>
            </div> */}

            {portfolioProjects[0] ?
                <div className="container-fluid" >
                    <div className="portfolio-wrapper px-3" >
                        <TinySlider settings={settings} style={{ display: "flex" }}>
                            {portfolioSlides}
                        </TinySlider>
                    </div>
                </div>
                : <div className="text-center">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

        </div>
    )
}