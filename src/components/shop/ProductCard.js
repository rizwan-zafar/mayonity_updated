import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const {id, productColumn, productImage, favIcon, productName, salePrice, oldPrice, addToCartIcon} = props;
    
    return(
        <div className={productColumn}>
            <div className="card shop-card">
                {/* Product Image */}
                <div className="product-img-wrap">
                    <img className="card-img-top" src={productImage} alt={productName} />
                    <button className="love-product active border-0">
                        <i className={`bi ${favIcon}`} />
                    </button>
                </div>

                {/* Product Meta */}
                <div className="product-meta d-flex align-items-center justify-content-between p-4">
                    <div className="product-name">
                        <Link to={`${process.env.PUBLIC_URL}/product-details/${id}`} >{productName}</Link>
                        <h6 className="price mb-0">{salePrice} <span>{oldPrice}</span></h6>
                    </div>
                    
                    {/* Add To Cart Button */}
                    <div className="product-add-to-cart">
                        <button className="border-0" >
                            <i className={`bi ${addToCartIcon}`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}