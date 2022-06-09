import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

export default function CtaTwo(props) {
    const {title, subtitle, btnUrl, btnText, imageGroup} = props;

    const ctaImages = imageGroup.map((elem, index) => (
        <div key={index} className="col-4">
            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={100} animateOnce={true}>
                <img src={`${process.env.PUBLIC_URL}/${elem}`} alt="" />
            </ScrollAnimation>
        </div>
    ))

    return(
        <div className="cta-area cta4 bg-gray pt-120 pb-120">
            <div className="container">
                <div className="row g-5 align-items-center justify-content-center">
                    {/* Cta Text */}
                    <div className="col-12 col-sm-9 col-md-6">
                        <div className="cta-text">
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={100} animateOnce={true}>
                                <h2 className="text-dark">{title}</h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={200} animateOnce={true}>
                                <p className="mb-4">{subtitle}</p>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={300} animateOnce={true}>
                                <Link className="btn btn-primary rounded-pill" to={btnUrl}>{btnText}</Link>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Cta Thumb Group */}
                    <div className="col-12 col-sm-9 col-md-6">
                        <div className="cta-thumb-group">
                            <div className="row">
                                {ctaImages}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}