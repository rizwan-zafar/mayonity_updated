import { useParams } from "react-router";
import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Divider from "../components/divider/Divider";
import CtaThree from "../components/cta/CtaThree";
import Footer from "../components/footer/Footer";
import ProductDetailsContent from "../components/shop/ProductDetailsContent";
import ProductData from "../data/shop/shop-data.json";

export default function ProductDetails() {
    const parameter = useParams();
    const shopID = parameter.productId;
    const prodID = parseInt(shopID, 10);
    const data = ProductData.filter(shop => shop.id === prodID);

    return(
        <div>
            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbTwo 
                breadcrumbTitle="Product Details" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Shop" 
            />

            <Divider />

            <ProductDetailsContent shopData={data[0]} />

            <Divider />

            <CtaThree 
                title="Let's start with the simple way to create a website." 
                btnUrl="/" 
                btnText="Buy Today" 
            />

            <Footer 
                footerLogo="../assets/img/core-img/logo-white.png" 
                footerStyle="footer-2"
            />
        </div>
    )
}