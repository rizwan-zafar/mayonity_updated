import Carousel from 'react-bootstrap/Carousel';
import SEO from '../common/SEO';

export default function ProductDetailsContent({shopData}) {

    const shopCarousel = shopData.productSlideImages.map((items, index) => (
        <Carousel.Item key={index}>
            <img className="d-block w-100 rounded" src={`${process.env.PUBLIC_URL}/${items}`} alt="" />
        </Carousel.Item>
    ))

    return(
        <div className="product-details-area product-details-page">
            <SEO title={shopData.productName} />

            <div className="container">
                <div className="row g-4 g-lg-5 justify-content-center">

                    {/* Product Slides */}
                    <div className="col-12 col-md-9 col-lg-6">
                        <div className="mb-3 mb-sm-5 position-relative product-details-carousel-wrap">
                            <Carousel>
                                {shopCarousel}
                            </Carousel>
                        </div>
                    </div>

                    {/* Product Description */}
                    <div className="col-12 col-md-9 col-lg-6">
                        <div className="card product-description-card mb-4 mb-sm-5">
                            <h6 className="product-meta-title mb-0 ps-5 py-4">About Product</h6>

                            <div className="card-body p-3 p-sm-5">
                                <h4 className="mb-3">{shopData.productName}</h4>
                                <h3 className="product-price mb-4">{shopData.salePrice}<span>{shopData.oldPrice}</span></h3>
                                <h6 className="mb-4">{shopData.stock} Product Left</h6>
                                <p>{shopData.productDesc}</p>

                                {/* Form */}
                                <form className="d-flex align-items-end mt-4" onSubmit={e => { e.preventDefault(); }} >
                                    <div className="form-group mb-0">
                                        <label className="me-2 mb-2" htmlFor="totalQuantity">Quantity</label>
                                        <input className="form-control" id="totalQuantity" type="number" min={1} max={12} name="quantity" defaultValue={1} />
                                    </div>
                                    <button className="btn btn-dark ms-3" type="submit">Add To Cart</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>


                {/* Product Review */}
                <div className="card product-review-card">
                    <h6 className="product-meta-title mb-0 ps-5 py-4">Product Reviews</h6>

                    {/* Ratings */}
                    <div className="card-body p-3 p-sm-5 text-center">
                        <ul className="ratings-list d-flex align-items-center justify-content-center mb-0 list-unstyled">
                            <li className="active">
                                <i className="bi bi-star-fill" />
                            </li>
                            <li className="active">
                                <i className="bi bi-star-fill" />
                            </li>
                            <li className="active">
                                <i className="bi bi-star-fill" />
                            </li>
                            <li className="active">
                                <i className="bi bi-star-fill" />
                            </li>
                            <li className="active">
                                <i className="bi bi-star" />
                            </li>
                        </ul>
                        <span>4.21 out of 5.00 (203 reviews)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}