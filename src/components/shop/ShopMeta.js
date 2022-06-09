import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

export default function ShopMeta() {
    return(
        <div className="shop-meta mb-5">
            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center">
                    <div className="col-12 col-sm-6">
                        {/* Total Product View */}
                        <div className="total-product-view fw-bold d-flex">
                            Viewing 
                            <TrackVisibility className="mx-1" once>
                                {({ isVisible }) => (
                                    <div>
                                        {isVisible ? <CountUp duration={1} end={9} /> : 0}
                                    </div>
                                )}
                            </TrackVisibility>
                            products out of 
                            <span className="ms-1"> 77 </span>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6">
                        {/* Sorting Data */}
                        <select className="form-select ms-sm-auto fw-bold" aria-label="Default select example">
                            <option defaultValue={0}>Popularity</option>
                            <option value={1}>Newest</option>
                            <option value={2}>Sales</option>
                            <option value={3}>Ratings</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}