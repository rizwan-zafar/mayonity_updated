import { Link } from "react-router-dom";

export default function FooterWidgetOne(props) {
    const {footerLogo, footerText, newsletterPlaceholderText} = props;

    return(
        <div className="col-12 col-sm-6 col-lg-3">
            {/* Footer Widget */}
            <div className="footer-widget-area">
                <Link className="d-block mb-4" to="/">
                    <img src={`${process.env.PUBLIC_URL}${footerLogo}`} alt="Footer-logo" />
                </Link>
                <p>{footerText}</p>

                {/* Newsletter Form */}
                <div className="newsletter-form mb-4">
                    <form className="d-flex align-items-stretch" onSubmit={e => { e.preventDefault(); }} >
                        <input className="form-control rounded-0 rounded-start" type="email" placeholder={newsletterPlaceholderText} />
                        <button className="btn btn-warning rounded-0 rounded-end px-3" type="submit">
                            <i className="bi bi-arrow-right" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}