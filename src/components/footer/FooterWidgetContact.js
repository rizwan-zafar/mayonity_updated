import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default function FooterWidgetContact(props) {
    const {heading, address, phone, email, social} = props;

    const socialListArr = social;
    const socialItem = socialListArr.map((social, index) => 
        <OverlayTrigger 
            key={index}
            placement={social.tootipPosition} 
            delay={{ show: 250, hide: 400 }} 
            overlay={
                <Tooltip id={`tooltip-${social.title}`}>
                    {social.title}
                </Tooltip>
            }
        >
            <a href={social.url} target="_blank" rel="noreferrer">
                <i className={`bi ${social.iconName}`} />
            </a>
        </OverlayTrigger>
    )

    return(
        <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer-widget-area">
                <h5 className="mb-4">{heading}</h5>
                <p className="lh-base mb-3">{address}</p>
                <p className="mb-0">{phone} <br /> {email}</p>

                <div className="footer-social-icon d-flex align-items-center mt-3">
                    {socialItem}
                </div>
            </div>
        </div>
    )
}