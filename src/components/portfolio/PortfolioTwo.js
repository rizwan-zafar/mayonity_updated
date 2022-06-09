import { Link } from "react-router-dom";
import TinySlider from "tiny-slider-react";
import SectionHeadingTwo from "../heading/HeadingTwo";
import PortfolioData from '../../data/portfolio/portfolio-two.json';

export default function PortfolioTwo() {

    const settings = {
        'items': 3,
        'gutter': 30,
        'slideBy': 1,
        'autoplay': false,
        'autoplayButtonOutput': false,
        'autoplayTimeout': 5000,
        'speed': 750,
        'loop': false,
        'nav': false,
        'mouseDrag': true,
        'controlsText': [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
        'responsive': {
            320: {
                'items': 1
            },
            768: {
                'items': 2
            },
            1380: {
                'items': 3
            }
        }
    };

    const portfolioSlides = PortfolioData.map((item, index) =>
        <div key={index}>
            <div className="single-portfolio-area" style={{ position: "relative" }}>
                <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt={item.title} />
                <div className="overlay-content">
                    <div className="portfolio-title">
                        <h6 className="mb-0">{item.title}</h6>
                    </div>
                    <div className="portfolio-links">
                        <Link className="portfolio-img-zoom" to="#" >
                            <i className={`bi ${item.firstIcon}`}></i>
                        </Link>
                        <Link to={`${process.env.PUBLIC_URL}/portfolio-details/${item.id}`} >
                            <i className={`bi ${item.secondIcon}`}></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

    return(
        <div className="saasbox-portfolio-area pt-120 pb-120 bg-gray">
            {/* Section Heading */}
            <SectionHeadingTwo 
                subtitle="Portfolio" 
                subtitleColor="" 
                heading="Check our latest awesome creative works" 
                headingColor="" 
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template." 
                paraColor="" 
                btnColor="btn-primary" 
                btnUrl="/portfolio-standard" 
                btnText="View All Works" 
            />

            <div className="container-fluid">
                <div className="portfolio2-wrapper px-3">
                    <div className="portfolio2-slides">
                        <TinySlider settings={settings}>
                            {portfolioSlides}
                        </TinySlider>
                    </div>
                </div>
            </div>
        </div>
    )
}