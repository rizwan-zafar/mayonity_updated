import TinySlider from "tiny-slider-react";

export default function PartnerTwo() {
    const settings = {
        'items': 6,
        'gutter': 50,
        'slideBy': 1,
        'autoplay': true,
        'autoplayButtonOutput': false,
        'autoplayTimeout': 5000,
        'speed': 750,
        'loop': true,
        'mouseDrag': true,
        'controls': false,
        'nav': false,
        'responsive': {
            320: {
                'items': 3,
                'gutter': 20
            },
            576: {
                'items': 4,
                'gutter': 24
            },
            768: {
                'items': 5,
                'gutter': 28
            },
            992: {
                'items': 6,
                'gutter': 32
            },
            1200: {
                'items': 6,
                'gutter': 50
            }
        }
    }

    const slidesImages = [
        {
            id: 1,
            image: "assets/img/partner-img/1.png"
        },
        {
            id: 2,
            image: "assets/img/partner-img/2.png"
        },
        {
            id: 3,
            image: "assets/img/partner-img/3.png"
        },
        {
            id: 4,
            image: "assets/img/partner-img/4.png"
        },
        {
            id: 5,
            image: "assets/img/partner-img/5.png"
        },
        {
            id: 6,
            image: "assets/img/partner-img/6.png"
        },
        {
            id: 7,
            image: "assets/img/partner-img/1.png"
        },
        {
            id: 8,
            image: "assets/img/partner-img/2.png"
        }
    ]
    
    const partnerSlides = slidesImages.map((ele, index) => (
        <div key={index}>
            <div className="partner-logo">
                <img src={`${process.env.PUBLIC_URL}/${ele.image}`} alt={ele.id} />
            </div>
        </div>
    ))

    return(
        <div className="partner-area py-5 bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="partner-slides">
                            <TinySlider settings={settings}>
                                {partnerSlides}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}