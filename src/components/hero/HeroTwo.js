import { Link } from 'react-router-dom';
import ScrollAnimation from "react-animate-on-scroll";

export default function HeroTwo(props) {
    const {BgShapeImage, title, subtitle, buttons, heroThumb} = props;

    return(
        <div className="welcome-area hero2 bg-white">
            {/* Shape */}
            <div className="hero-background-shape">
                <img src={`${process.env.PUBLIC_URL}/${BgShapeImage}`} alt={title} />
            </div>

            {/* Animation */}
            <div className="background-animation">
                <div className="item1" />
                <div className="item4" />
                <div className="item5" />
            </div>

            <div className="hero2-big-circle" />            

            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-between">
                    {/* Welcome Content */}
                    <div className="col-12 col-sm-10 col-md-6">
                        <div className="welcome-content">
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={100} animateOnce={true}>
                                <h2 dangerouslySetInnerHTML={{__html: title}}></h2>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={200} animateOnce={true}>
                                <p className="mb-4" dangerouslySetInnerHTML={{__html: subtitle}} ></p>
                            </ScrollAnimation>

                            <div className="d-flex align-items-center mt-5" >
                                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={250} animateOnce={true}>
                                    <Link className={`btn ${buttons[0].btnColor}`} to={buttons[0].btnUrl} >
                                        {buttons[0].btnText}
                                    </Link>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={300} animateOnce={true}>
                                    <button className={`btn ${buttons[1].btnColor} btn-minimal ms-3 bg-transparent border-0`} > 
                                        {buttons[1].btnText}
                                    </button>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                    {/* Welcome Thumb */}
                    <div className="col-12 col-sm-10 col-md-6">
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={200} animateOnce={true}>
                            <div className="welcome-thumb ms-xl-5">
                                <img src={`${process.env.PUBLIC_URL}/${heroThumb}`} alt={title} />
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}