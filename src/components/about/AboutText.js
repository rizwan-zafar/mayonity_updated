import { Link } from "react-router-dom";

export default function AboutText(props) {
    const {subtitle, title, para, btnOneText, btnOneUrl, btnTwoUrl, btnTwoText} = props;

    return(
        <div className="col-12 col-sm-10 col-md-9 col-lg-5">
            <div className="section-heading mb-0 ms-xl-5">
                <h6>{subtitle}</h6>
                <h2>{title}</h2>
                <p>{para}</p>

                <div className="about-btn-group">
                    <Link className="btn btn-primary mt-5" to={btnOneUrl} >
                        {btnOneText}
                    </Link>
                    <Link className="btn btn-link mt-5" to={btnTwoUrl} >
                        {btnTwoText}
                    </Link>
                </div>
            </div>
        </div>
    )
}