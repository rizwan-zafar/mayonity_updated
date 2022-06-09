import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import Divider from "../components/divider/Divider";
import Footer from '../components/footer/Footer';
import SEO from '../components/common/SEO';

export default function ComingSoon() {
    const ComingSoonData = [
        {
            image: "assets/img/backimages/mintain.png",
            title: "Coming Soon",
            para: "This page is still under development.",
            countDownTime: "2022-07-04T17:00:00"
        }
    ]

    const clockTime = ({ days, hours, minutes, seconds }) => {
        return <span>{days} Days {hours} Hours {minutes} Min {seconds} Sec</span>;
    };

    return(
        <div>
            <SEO title="Coming Soon" />

            <div className="container">
                <div className="logo-area text-center py-4">
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/core-img/logo.png`} alt="logo" />
                    </Link>
                </div>
            </div>

            <div className="container">
                <div className="border" />
            </div>

            <Divider />

            <div className="saasbox-coming-soon-area text-center">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-7">
                            <img className="mb-80" src={`${process.env.PUBLIC_URL}/${ComingSoonData[0].image}`} alt="cs" />
                            <h2>{ComingSoonData[0].title}</h2>
                            <p>{ComingSoonData[0].para}</p>
                            <div id="comingSoonClock">
                                <Countdown date={ComingSoonData[0].countDownTime} intervalDelay={0} renderer={clockTime} />
                            </div>
                            {/* <Link className="btn btn-primary mt-4" to="/">View Status</Link> */}
                        </div>
                    </div>
                </div>
            </div>

            <Divider />

            <div className="container">
                <div className="border" />
            </div>

            <Footer 
                footerLogo="assets/img/core-img/logo.png" 
                footerStyle="" 
            />
        </div>
    )
}