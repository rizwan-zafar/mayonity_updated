import { Link } from "react-router-dom";

export default function SinglePricePlanThree(props) {
    const {activePlan, planTitle, price, priceText, pricingDesc, btnStyle, btnLink, btnText, backgroundImage} = props;

    const ulList = pricingDesc.map((ele, index) => (
        <li key={index} className={`availability-${ele.availability}`}>{ele.text}</li>
    ))

    return(
        <div className="col-12 col-sm-9 col-md-6 col-lg-5 col-xl-4">
            <div className={`card pricing-card ${activePlan}`} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${backgroundImage})`}}>
                <div className="pricing-heading">
                    <div className="price">
                        <h6>{planTitle}</h6>
                        <h1 className="mb-0 display-3 fw-bold text-info">{price}</h1>
                        <span className="fz-12 d-block">{priceText}</span>
                    </div>
                </div>
                <div className="pricing-desc my-5">
                    <ul className="ps-0 mb-0 list-unstyled">
                        {ulList}
                    </ul>
                </div>
                <div className="pricing-btn">
                    <Link className={`btn btn-sm ${btnStyle} rounded-pill`} to={btnLink}>
                        {btnText}
                        <svg className="bi bi-arrow-right ms-1" xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}