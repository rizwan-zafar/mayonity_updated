import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Footer from "../components/footer/Footer";
import CtaThree from "../components/cta/CtaThree";
import Divider from "../components/divider/Divider";
import ShopMeta from "../components/shop/ShopMeta";
import ProductCard from "../components/shop/ProductCard";
import ShopData from "../data/shop/shop-data.json";
import SEO from "../components/common/SEO";

export default function ShopFullWidth() {
    const shopLists = ShopData.map((elem, index) => (
        <ProductCard 
            productColumn="col-12 col-sm-6 col-lg-4" 
            key={index} 
            id={elem.id} 
            productImage={elem.productImage} 
            favIcon={elem.favIcon} 
            productName={elem.productName} 
            salePrice={elem.salePrice} 
            oldPrice={elem.oldPrice} 
            addToCartIcon={elem.addToCartIcon} 
        />
    ))

    return(
        <div>
            <SEO title="Shop Full Width" />

            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Shop Today" 
                buttonColor="btn-danger" 
            />

            <BreadcrumbTwo 
                breadcrumbTitle="Shop Fullwidth" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Shop" 
            />

            <Divider />

            <ShopMeta />

            <div className="shop-area shop-fullwidth">
                <div className="container">
                    <div className="row g-4 g-lg-5">
                        {shopLists}
                    </div>
                </div>
            </div>

            <div className="saasbox-pagination-area mt-5">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mb-0">
                        <li className="page-item active">
                            <Link className="page-link" to="#">1</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">2</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">3</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">4</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">...</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">9</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Divider />

            <CtaThree 
                title="Let's start with the simple way to create a website." 
                btnUrl="/" 
                btnText="Buy Today" 
            />

            <Footer 
                footerLogo="assets/img/core-img/logo-white.png" 
                footerStyle="footer-2"
            />
        </div>
    )
}