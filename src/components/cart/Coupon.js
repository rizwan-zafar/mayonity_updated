export default function Coupon() {
    return(
        <div className="apply-coupon mb-5">
            <h4>Have a Coupon?</h4>
            <p>Enter your coupon code here &amp; get awesome discounts!</p>

            {/* Coupon Form */}
            <div className="coupon-form">
                <form className="d-flex" onSubmit={e => { e.preventDefault(); }}>
                    <input className="form-control rounded-0 rounded-start" type="text" placeholder="Enter Your Coupon Code" />
                    <button className="btn btn-primary rounded-0 rounded-end" type="submit">Apply</button>
                </form>
            </div>
        </div>
    )
}