import ScrollAnimation from "react-animate-on-scroll";

export default function SectionHeading(props) {
    const {badgeColor, badge, subtitle, subtitleColor, heading, headingColor, para, paraColor} = props;
    
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xxl-7">
                    <div className="section-heading text-center" >
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={0} animateOnce={true}>
                            <div className={`badge ${badgeColor} mb-3`}>
                                {badge}
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={100} animateOnce={true}>
                            <h6 className={subtitleColor} dangerouslySetInnerHTML={{__html: subtitle}}></h6>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={200} animateOnce={true}>
                            <h2 className={headingColor} dangerouslySetInnerHTML={{__html: heading}}></h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={300} animateOnce={true}>
                            <p className={paraColor} dangerouslySetInnerHTML={{__html: para}}></p>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}