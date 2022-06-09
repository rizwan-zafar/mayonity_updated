import ScrollAnimation from "react-animate-on-scroll";

export default function HeroOne(props) {
    const {catagory, heading, para, buttons, heroThumb} = props;

    const heroCatagory = catagory;
    const heroCatagoryItems = heroCatagory.map((item, index) => 
        <li key={index}>{item}</li>
    )

    const buttonsArr = buttons;
    const buttonsItems = buttonsArr.map((button, index) => 
        <a key={index} className={`btn ${button.buttonColor} mt-3 me-3`} href={button.url} target="_blank" rel="noreferrer">{button.text}</a>
    )

    return(
        <div className="welcome-area bg-gradient">
            {/* Background Shape */}
            <div className="background-shape">
                <div className="circle1" />
                <div className="circle2" />
                <div className="circle3" />
                <div className="circle4" />
            </div>

            {/* Background Animation */}
            <div className="background-animation">
                <div className="item1" />
                <div className="item2" />
                <div className="item3" />
                <div className="item4" />
                <div className="item5" />
            </div>
            
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-between">
                    {/* Welcome Content */}
                    <div className="col-12 col-sm-10 col-md-6">
                        <div className="welcome-content">
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={0} animateOnce={true}>
                                <ul className="mb-0 ps-1 d-flex flex-wrap align-items-center">
                                    {heroCatagoryItems}
                                </ul>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={100} animateOnce={true}>
                                <h2 dangerouslySetInnerHTML={{__html: heading}}></h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={200} animateOnce={true}>
                                <p className="mb-4" dangerouslySetInnerHTML={{__html: para}}></p>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={300} animateOnce={true}>
                                <div className="hero-btn-group">
                                    {buttonsItems}
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Welcome Thumb */}
                    <div className="col-12 col-sm-8 col-md-6">
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={150} animateOnce={true}>
                            <div className="welcome-thumb ms-lg-5">
                                <img src={`${process.env.PUBLIC_URL}/${heroThumb}`} alt={heading} />
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}