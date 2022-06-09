import { Link } from "react-router-dom";

export default function SinglePricePlanTwo(props) {
    const {planSwitch, activePlan, backgroundImage, iconColor, iconName, monthlyPrice, monthlyText, yearlyPrice, yearlyText, priceDesc, btnColor, btnUrl, btnText} = props;

    const priceDescArr = priceDesc;
    const description = priceDescArr.map((item, index) => (
        <li key={index}>
            <i className={`text-info me-2 bi ${item.icon}`} />
            {item.desc}
        </li>
    ))

    return(
        <div className="col-12 col-sm-9 col-md-7 col-lg-4">
            <div className={`card pricing-card ${planSwitch} ${activePlan} bg-img shadow-lg`} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${backgroundImage})`}} >
                <div className="pricing-heading mb-5">
                    <div className="price">
                        <span className={`${iconColor} rounded-circle`} >
                            <i className={`bi ${iconName}`} />
                        </span>
                        <div className="price-quantity">
                            <h2 className="mb-0 monthly-price">
                                {monthlyPrice}
                                <span className="fz-12">{monthlyText}</span>
                            </h2>
                            <h2 className="mb-0 yearly-price">
                                {yearlyPrice}
                                <span className="fz-12">{yearlyText}</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="pricing-desc mb-5">
                    <ul className="list-unstyled mb-0">
                        {description}
                    </ul>
                </div>
                <div className="pricing-btn">
                    <Link className={`btn ${btnColor} btn-minimal`} to={btnUrl} >
                        {btnText}
                        <i className="bi bi-caret-right-fill" />
                    </Link>
                </div>
            </div>
        </div>
    )
}