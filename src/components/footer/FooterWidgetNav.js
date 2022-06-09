import { Link } from "react-router-dom";

export default function FooterWidgetNav(props) {
    const {heading, footerNav} = props;

    const listItems = footerNav.map((item, index) => 
        <li key={index}> 
            <Link to={item.url}>
                <i className="bi bi-caret-right" />
                {item.title}
            </Link>
        </li>
    )

    return(
        <div className="col-12 col-sm-6 col-lg-3">
            {/* Footer Widget */}
            <div className="footer-widget-area">
                <h5 className="mb-4">{heading}</h5>
                
                <ul className="list-unstyled">
                    {listItems}
                </ul>
            </div>
        </div>
    )
}