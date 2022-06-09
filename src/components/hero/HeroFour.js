import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import TinySlider from "tiny-slider-react";
import Hero4Data from '../../data/hero/hero-slide-four.json';

export default function HeroFour() {
    const [isOpen, setOpen] = useState(false);

    const hero4_1_setings = {
        'items': 1,
        'gutter': 0,
        'slideBy': 'page',
        'autoplay': true,
        'autoplayButtonOutput': false,
        'autoplayTimeout': 5000,
        'speed': 750,
        'loop': true,
        'mouseDrag': true,
        'controls': false,
        'navPosition': 'top'
    }

    const hero4_1_slide = Hero4Data.map((elem, index) => (
        <div key={index} className="single-hero-slide">
            <span className="key-quote fw-bold">{elem.quote}</span>
            <h2 dangerouslySetInnerHTML={{__html: elem.heading}}></h2>
            <p className="mb-4">{elem.subHeading}</p>
            <a className={`btn ${elem.btnColor}`} href={elem.btnUrl}>{elem.btnText}</a>
        </div>
    ))

    const hero4_2_setings = {
        'items': 1,
        'gutter': 0,
        'slideBy': 'page',
        'autoplay': true,
        'autoplayButtonOutput': false,
        'autoplayTimeout': 5000,
        'speed': 750,
        'loop': true,
        'mouseDrag': true,
        'controls': false,
        'nav': false,
        'mode': 'gallery',
        'animateIn': 'tns-fadeIn',
        'animateOut': 'tns-fadeOut'
    }

    const videoSlide = [
        {
            id: 1,
            image: "assets/img/bg-img/9.jpg"
        },
        {
            id: 2,
            image: "assets/img/bg-img/10.jpg"
        },
        {
            id: 3,
            image: "assets/img/bg-img/11.jpg"
        }

    ].map((ele, index) => (
        <div key={index} className="rounded">
            <img className="rounded" src={`${process.env.PUBLIC_URL}/${ele.image}`} alt={ele.id} />
        </div>
    ))

    return(
        <div className="welcome-area hero4">
            {/* Shape 1 */}
            <div className="hero4-bg-shape">
                <img src={`${process.env.PUBLIC_URL}/assets/img/core-img/hero-4.png`} alt="" />
            </div>
            {/* Shape 2 */}
            <div className="hero4-bg-shape2">
                <img src={`${process.env.PUBLIC_URL}/assets/img/core-img/hero-4-2.png`} alt="" />
            </div>

            {/* Video */}
            <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="3qyhgV0Zew0" onClose={() => setOpen(false)} />

            <div className="container h-100">
                <div className="row h-100 align-items-center">

                    {/* Welcome Content */}
                    <div className="col-12 col-md-6">
                        <div className="welcome-content">
                            <div className="hero4-slide-controls">
                                <div className="hero4-1-slide-wrap">
                                    <TinySlider settings={hero4_1_setings}>
                                        {hero4_1_slide}
                                    </TinySlider>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Welcome Thumb Slides */}
                    <div className="col-12 col-sm-8 col-md-6">
                        <div className="welcome-thumb ms-5">
                            <div className="hero-video-card">
                                <button className="video-play-btn border-0" onClick={()=> setOpen(true)}> 
                                    <i className="bi bi-play" />
                                    <span className="video-sonar" />
                                </button>

                                <div className="video-shape">
                                    <img src={`${process.env.PUBLIC_URL}/assets/img/core-img/hero-3-2.png`} alt="" />
                                </div>

                                <div className="video-card-slides hero4-2-slide-wrap">
                                    <TinySlider settings={hero4_2_setings}>
                                        {videoSlide}
                                    </TinySlider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}