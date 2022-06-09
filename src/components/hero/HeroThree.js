import TinySlider from "tiny-slider-react";
import HeroData from '../../data/hero/hero-slide-three.json';
import ScrollAnimation from "react-animate-on-scroll";

export default function HeroThree() {

    const settings = {
        items: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 4000,
        speed: 750,
        loop: true,
        mouseDrag: true,
        controls: false,
        nav: false,
        mode: 'gallery',
        animateIn: 'tns-fadeIn',
        animateOut: 'tns-fadeOut'
    }

    const heroSlideThree = HeroData.map((ele, index) => (
        <div key={index} className="welcome3-slide-item bg-primary bg-gradient">
            <div className="container h-100">
                <div className="row g-lg-5 h-100 align-items-center">
                    {/* Welcome Content */}
                    <div className="col-12 col-sm-10 col-md-6">
                        <div className="welcome-content">
                            <ul className="ps-0 mb-2 mb-lg-3 d-flex align-items-center">
                                <li>{ele.catagory[0]}</li>
                                <li>{ele.catagory[1]}</li>
                                <li>{ele.catagory[2]}</li>
                            </ul>
                            <h2 className="text-white">{ele.title}</h2>
                            <p className="mb-5 text-white-50">{ele.subtitle}</p>
                            <div className="btn-group-two">
                                <a className={`btn ${ele.btnGroup[0].btnColor} rounded-pill me-3`} href={ele.btnGroup[0].btnUrl} >
                                    {ele.btnGroup[0].btnText}
                                </a>
                                <a className={`btn ${ele.btnGroup[1].btnColor} rounded-pill me-3`} href={ele.btnGroup[1].btnUrl} >
                                    {ele.btnGroup[1].btnText}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Welcome Thumb */}
                    <div className="col-12 col-sm-8 col-md-6">
                        <div className="welcome-thumb ms-xl-5">
                            <img src={`${process.env.PUBLIC_URL}/${ele.image}`} alt={ele.title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="welcome-area hero3">
            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={100} animateOnce={true}>
                {/* Slide Wrap */}
                <div className="welcome3-slide-wrap">
                    <TinySlider settings={settings}>
                        {heroSlideThree}
                    </TinySlider>
                </div>
            </ScrollAnimation>
        </div>
    )
}