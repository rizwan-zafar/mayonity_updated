import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

export default function CtaThree(props) {
    const {title, btnUrl, btnText} = props;

    return(
        <div className="cta-area cta3 py-5 bg-info">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-sm-8">
                        {/* Cta Text */}
                        <div className="cta-text mb-4 mb-sm-0">
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={100} animateOnce={true}>
                                <h3 className="mb-0">{title}</h3>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 text-sm-end">
                        {/* Cta Button */}
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={300} animateOnce={true}>
                            <Link className="btn btn-warning btn-sm" to={btnUrl} >
                                {btnText}
                            </Link>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}