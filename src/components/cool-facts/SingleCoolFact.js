import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

export default function SingleCoolFact(props) {
    const {countUpValue, suffix, title} = props;

    return(
        <div className="col-6 col-sm-4">
            {/* Cool Facts */}
            <div className="single-cool-fact">
                <h2>
                    <TrackVisibility once>
                        {({ isVisible }) => (
                            <div>
                                {isVisible ? <CountUp duration={2} end={countUpValue} /> : 0}
                                <span>{suffix}</span>
                            </div>
                        )}
                    </TrackVisibility>
                </h2>
                <h6 className="mb-0">{title}</h6>
            </div>
        </div>
    )
}