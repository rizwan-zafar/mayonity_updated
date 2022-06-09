import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';
import ScrollAnimation from 'react-animate-on-scroll';

export default function AboutThree(props) {
    const {iconColor, iconName, title, para, image, videoID} = props;
    const [isOpen, setOpen] = useState(false);

    const CoolFactsData = [
        {
            id: 1,
            value: 1890,
            suffix: "",
            title: "Problems Fixed"
        },
        {
            id: 2,
            value: 3781,
            suffix: "k",
            title: "Revenue Earned"
        },
        {
            id: 3,
            value: 783,
            suffix: "+M",
            title: "Lines of Code"
        }
    ]

    const coolFactsItems = CoolFactsData.map((ele, index) => (
        <div key={index} className="text-center me-4">
            <h2>
                <TrackVisibility once>
                    {({ isVisible }) => (
                        <div>
                            {isVisible ? <CountUp duration={2} end={ele.value} /> : 0}
                            <span>{ele.suffix}</span>
                        </div>
                    )}
                </TrackVisibility>
            </h2>
            <span className="fz-14 d-block">{ele.title}</span>
        </div>
    ))

    return(
        <div className="about-area about4">
            <ModalVideo channel="vimeo" autoplay isOpen={isOpen} videoId={videoID} onClose={() => setOpen(false)} />

            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center">
                    <div className="col-12 col-md-7 col-lg-6">

                        {/* About Us Content */}
                        <div className="aboutUs-content">
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={0} animateOnce={true}>
                                <div className={`about-icon-wrapper ${iconColor}`} >
                                    <i className={`bi ${iconName}`} />
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={100} animateOnce={true}>
                                <h2 className="mb-4">{title}</h2>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={200} animateOnce={true}>
                                <p>{para}</p>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={300} animateOnce={true}>
                                <div className="d-flex align-items-center mt-5">
                                    {coolFactsItems}
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg-6">
                        {/* About Us Thumbnail */}
                        <div className="aboutUs-thumbnail mt-4 mt-md-0 ms-xl-5">
                            <img className="w-100" src={`${process.env.PUBLIC_URL}/${image}`} alt={title} />
                            <button className="video-play-btn border-0" onClick={()=> setOpen(true)}> 
                                <i className="bi bi-play" />
                                <span className="video-sonar" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}