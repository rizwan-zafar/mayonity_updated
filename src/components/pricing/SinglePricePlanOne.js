import { Link } from "react-router-dom";

export default function SinglePriceTable(props) {
    const {planSwitch, activePlan, planTitle, monthlyPrice, monthlyPriceText, yearlyPrice, yearlyPriceText, priceIcon, pricingDesc, btnStyle, btnLink, btnText} = props;
    
    const pricingDescArr = pricingDesc;
    const pricingItems = pricingDescArr.map((pricingItem, index) => 
        <li key={index} className={`availability-${pricingItem.availability}`}>
            {pricingItem.text}
        </li>
    )

    return (
        <div className="col-12 col-sm-9 col-md-7 col-lg-4">
            <div className={`card pricing-card ${planSwitch} mb-30 ${activePlan}`}>
                <div className="pricing-heading d-flex justify-content-between">
                    <div className="price mb-5">
                        <span className="badge bg-primary rounded fz-12">{planTitle}</span>
                        <div className="price-quantity">
                            <h2 className="mb-0 monthly-price">{monthlyPrice}
                                <span className="fz-12">{monthlyPriceText}</span>
                            </h2>
                            <h2 className="mb-0 yearly-price">{yearlyPrice}
                                <span className="fz-12">{yearlyPriceText}</span>
                            </h2>
                        </div>
                    </div>
                    <div className="price-icon mb-5">
                        <img src={`${process.env.PUBLIC_URL}/${priceIcon}`} alt={planTitle} />
                    </div>
                </div>

                <div className="pricing-desc mb-5">
                    <ul className="list-unstyled mb-0">
                        {pricingItems}
                    </ul>
                </div>

                <div className="pricing-btn">
                    <Link className={`btn ${btnStyle}`} to={btnLink}>{btnText}</Link>
                </div>
            </div>
        </div>
    )
}