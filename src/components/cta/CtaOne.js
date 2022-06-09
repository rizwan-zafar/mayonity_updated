import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

export default function Cta1(props) {
    const {CtaThumb, title, btnUrl, btnText} = props;

    return(
        <div className="cta-area pt-120 pb-120 bg-img bg-fixed bg-overlay" style={{backgroundImage: `url(${CtaThumb})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-8">
                        {/* Cta Text */}
                        <div className="cta-text">
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={100} animateOnce={true}>
                                <h2 className="mb-4 mb-lg-5">{title}</h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={300} animateOnce={true}>
                                <Link className="btn btn-warning" to={btnUrl} >
                                    {btnText}
                                </Link>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}