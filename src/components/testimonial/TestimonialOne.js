import TinySlider from "tiny-slider-react";
import SectionHeading from "../heading/HeadingOne";
import TestimonialData from '../../data/testimonial/testimonial-one.json';

export default function TestimonialOne() {

    const testimonialSlideSettings = {
        items: 3,
        gutter: 48,
        slideBy: 1,
        autoplay: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 750,
        loop: false,
        mouseDrag: true,
        controls: false,
        navPosition: 'bottom',
        autoHeight: true,
        responsive: {
            320: {
                items: 1
            },
            480: {
                items: 2,
                gutter: 24
            },
            768: {
                gutter: 30
            },
            992: {
                items: 3,
                gutter: 30
            },
            1200: {
                items: 3,
                gutter: 48
            }
        }
    };

    const slideItems = TestimonialData;
    const testimonialSlide = slideItems.map((ele, index) => (
        <div key={index}>
            <div className="card feedback-card border-0 p-2 shadow-sm">
                <div className="card-body p-5 p-sm-4 p-md-5">
                    <div className="client-info d-flex align-items-center">
                        <div className="client-thumb rounded-circle me-2 position-relative">
                            <img className="rounded-circle" src={`${process.env.PUBLIC_URL}/${ele.image}`} alt="" />
                            <span className="rounded-circle">
                                <i className="bi bi-check" />
                            </span>
                        </div>
                        <div className="client-name">
                            <h6 className="fz-14 mb-0">{ele.name}</h6>
                            <p className="mb-0 fz-12">{ele.designation}</p>
                        </div>
                    </div>
                    <div className="ratings text-warning mt-4 mb-3 fz-14">
                        <i className={`bi ${ele.ratingOne}`}></i>
                        <i className={`bi ${ele.ratingTwo}`}></i>
                        <i className={`bi ${ele.ratingThree}`}></i>
                        <i className={`bi ${ele.ratingFour}`}></i>
                        <i className={`bi ${ele.ratingFive}`}></i>
                    </div>
                    <p className="text-dark mb-0 fw-bold">{ele.testimonial}</p>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="client-feedback-area bg-gray pt-120 pb-120">
            {/* Section Heading */}
            <SectionHeading 
                subtitle="Testimonials" 
                heading="Read some reviews from our beloved clients about our work."
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template."
            />

            <div className="container">
                {/* Feedback Slides */}
                <div className="client-feedback-content">
                    <div className="client-feedback-slides">
                        <TinySlider settings={testimonialSlideSettings}>
                            {testimonialSlide}
                        </TinySlider>
                    </div>
                </div>
            </div>
        </div>
    )
}