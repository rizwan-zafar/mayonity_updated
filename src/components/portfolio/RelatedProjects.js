import { Link } from "react-router-dom";
import TinySlider from "tiny-slider-react";
import PortData from "../../data/portfolio/portfolio-two.json";

export default function RelatedProjects() {
    const settings = {
        'items': 3,
        'gutter': 32,
        'slideBy': 'page',
        'autoplay': true,
        'autoplayButtonOutput': false,
        'autoplayTimeout': 5000,
        'speed': 750,
        'loop': true,
        'mouseDrag': true,
        'controls': true,
        'nav': false,
        'controlsText': [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
        'responsive': {
            320: {
                'items': 1,
                'gutter': 0
            },
            576: {
                'items': 2,
                'gutter': 24
            },
            992: {
                'items': 3,
                'gutter': 32
            },
            1200: {
                'items': 3,
                'gutter': 48
            }
        }
    };
    
    const relatedPortfolioSlide = PortData.map((item, index) => (
        <div key={index} >
            <div className="single-portfolio-area border">
                <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt={item.title} />
                <div className="overlay-content">
                    <div className="portfolio-title">
                        <h6 className="mb-0">{item.title}</h6>
                    </div>
                    <div className="portfolio-links">
                        <button className="bg-transparent border-0" >
                            <i className={`bi ${item.firstIcon}`}></i>
                        </button>
                        <Link to={`${process.env.PUBLIC_URL}/portfolio-details/${item.id}`} >
                            <i className={`bi ${item.secondIcon}`}></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="related-project-area">
            <div className="container">
                <h2 className="mb-4 mb-lg-5">Related Projects</h2>
                
                {/* Related Project Slides */}
                <div className="related-project-slide">
                    <TinySlider settings={settings}>
                        {relatedPortfolioSlide}
                    </TinySlider>
                </div>
            </div>
        </div>
    )
}