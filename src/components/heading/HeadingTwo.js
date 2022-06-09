import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

export default function SectionHeadingTwo(props) {
    const {subtitle, subtitleColor, heading, headingColor, para, paraColor, btnColor, btnUrl, btnText} = props;
    
    return(
        <div className="container">
            <div className="row align-items-end justify-content-between">
                <div className="col-12 col-sm-8 col-md-8 col-lg-7 col-xxl-6">
                    <div className="section-heading mb-80">
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={0} animateOnce={true}>
                            <h6 className={subtitleColor} dangerouslySetInnerHTML={{__html: subtitle}}></h6>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={100} animateOnce={true}>
                            <h2 className={headingColor} dangerouslySetInnerHTML={{__html: heading}}></h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={200} animateOnce={true}>
                            <p className={paraColor} dangerouslySetInnerHTML={{__html: para}}></p>
                        </ScrollAnimation>
                    </div>
                </div>
                
                <div className="col-12 col-sm-4 col-md-4 col-lg-5">
                    <div className="text-sm-end mt-5 mt-sm-0">
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={100} animateOnce={true}>
                            <Link className={`btn ${btnColor} mb-80`} to={btnUrl} >
                                {btnText}
                            </Link>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}