import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Divider from "../components/divider/Divider";
import ShopMeta from "../components/shop/ShopMeta";
import CtaThree from "../components/cta/CtaThree";
import Footer from "../components/footer/Footer";
import ProductCard from "../components/shop/ProductCard";
import ShopData from "../data/shop/shop-data.json";
import SEO from "../components/common/SEO";

export default function ShopSidebar() {
    const shopLists = ShopData.map((elem, index) => (
        <ProductCard 
            productColumn="col-12 col-md-6" 
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
            <SEO title="Shop Sidebar" />

            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbTwo 
                breadcrumbTitle="Shop with Sidebar" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Shop" 
            />

            <Divider />

            <ShopMeta />

            <div className="shop-with-sidebar">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-5 col-md-4">
                            <div className="shop-sidebar-area mb-5">

                                {/* Single Widget*/}
                                <div className="shop-widget mb-4 mb-lg-5">
                                    <h5 className="widget-title mb-4">Product Categories</h5>
                                    {/* Description*/}
                                    <div className="widget-desc">
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck1" type="checkbox" defaultValue defaultChecked />
                                            <label className="form-check-label" htmlFor="customCheck1">Men 
                                                <span className="ms-2">(32)</span>
                                            </label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck2" type="checkbox" defaultValue />
                                            <label className="form-check-label" htmlFor="customCheck2">Women 
                                                <span className="ms-2">(46)</span>
                                            </label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck3" type="checkbox" defaultValue />
                                            <label className="form-check-label" htmlFor="customCheck3">Kids 
                                                <span className="ms-2">(13)</span>
                                            </label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck4" type="checkbox" defaultValue defaultChecked />
                                            <label className="form-check-label" htmlFor="customCheck4">Fashion 
                                                <span className="ms-2">(68)</span>
                                            </label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check">
                                            <input className="form-check-input" id="customCheck5" type="checkbox" defaultValue defaultChecked />
                                            <label className="form-check-label" htmlFor="customCheck5">Special 
                                                <span className="ms-2">(32)</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Single Widget*/}
                                <div className="shop-widget mb-4 mb-lg-5">
                                    <h5 className="widget-title mb-4">Filter by Color</h5>
                                    {/* Description*/}
                                    <div className="widget-desc">
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck6" type="checkbox" defaultValue defaultChecked />
                                            <label className="form-check-label" htmlFor="customCheck6">Black 
                                                <span className="ms-2">(32)</span>
                                            </label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck7" type="checkbox" defaultValue defaultChecked />
                                            <label className="form-check-label" htmlFor="customCheck7">Pink 
                                                <span className="ms-2">(46)</span>
                                            </label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck8" type="checkbox" defaultValue />
                                            <label className="form-check-label" htmlFor="customCheck8">Red 
                                                <span className="ms-2">(13)</span>
                                            </label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck9" type="checkbox" defaultValue />
                                            <label className="form-check-label" htmlFor="customCheck9">Purple 
                                                <span className="ms-2">(68)</span>
                                            </label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check">
                                            <input className="form-check-input" id="customCheck10" type="checkbox" defaultValue />
                                            <label className="form-check-label" htmlFor="customCheck10">Orange 
                                                <span className="ms-2">(32)</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Single Widget*/}
                                <div className="shop-widget mb-4 mb-lg-5">
                                    <h5 className="widget-title mb-4">Filter by Brands</h5>
                                    {/* Description*/}
                                    <div className="widget-desc">
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck11" type="checkbox" defaultValue defaultChecked />
                                            <label className="form-check-label" htmlFor="customCheck11">Demin 
                                                <span className="ms-2">(32)</span>
                                            </label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck12" type="checkbox" defaultValue />
                                            <label className="form-check-label" htmlFor="customCheck12">Zara 
                                                <span className="ms-2">(46)</span>
                                            </label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck13" type="checkbox" defaultValue />
                                            <label className="form-check-label" htmlFor="customCheck13">Boss 
                                                <span className="ms-2">(13)</span>
                                            </label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck14" type="checkbox" defaultValue />
                                            <label className="form-check-label" htmlFor="customCheck14">Coco 
                                                <span className="ms-2">(68)</span>
                                            </label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check">
                                            <input className="form-check-input" id="customCheck15" type="checkbox" defaultValue />
                                            <label className="form-check-label" htmlFor="customCheck15">Orfen 
                                                <span className="ms-2">(32)</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Single Widget*/}
                                <div className="shop-widget mb-4 mb-lg-5">
                                    <h5 className="widget-title mb-4">Filter by Tags</h5>
                                    {/* Description*/}
                                    <div className="widget-desc">
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck16" type="checkbox" defaultValue />
                                            <label className="form-check-label" htmlFor="customCheck16">Shop</label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck17" type="checkbox" defaultValue />
                                            <label className="form-check-label" htmlFor="customCheck17">Electronics</label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck18" type="checkbox" defaultValue />
                                            <label className="form-check-label" htmlFor="customCheck18">Speaker</label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="customCheck19" type="checkbox" defaultValue defaultChecked />
                                            <label className="form-check-label" htmlFor="customCheck19">Bonshai</label>
                                        </div>
                                        {/* Single Checkbox*/}
                                        <div className="form-check">
                                            <input className="form-check-input" id="customCheck20" type="checkbox" defaultValue />
                                            <label className="form-check-label" htmlFor="customCheck20">Cosmetric</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Single Widget*/}
                                <div className="shop-widget">
                                    <h5 className="widget-title mb-4">Filter by Ratings</h5>
                                    {/* Description*/}
                                    <div className="widget-desc">
                                    {/* Single Checkbox*/}
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" id="customCheck21" type="checkbox" defaultValue defaultChecked />
                                        <label className="form-check-label" htmlFor="customCheck21">5 Star</label>
                                    </div>
                                    {/* Single Checkbox*/}
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" id="customCheck22" type="checkbox" defaultValue defaultChecked />
                                        <label className="form-check-label" htmlFor="customCheck22">4 Star</label>
                                    </div>
                                    {/* Single Checkbox*/}
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" id="customCheck23" type="checkbox" defaultValue />
                                        <label className="form-check-label" htmlFor="customCheck23">3 Star</label>
                                    </div>
                                    {/* Single Checkbox*/}
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" id="customCheck24" type="checkbox" defaultValue />
                                        <label className="form-check-label" htmlFor="customCheck24">2 Star</label>
                                    </div>
                                    {/* Single Checkbox*/}
                                    <div className="form-check">
                                        <input className="form-check-input" id="customCheck25" type="checkbox" defaultValue />
                                        <label className="form-check-label" htmlFor="customCheck25">1 Star</label>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-7 col-md-8">                       
                            <div className="row g-4 g-lg-5">
                                {shopLists}
                            </div>

                            {/* Pagination Area*/}
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

                        </div>
                    </div>
                </div>
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