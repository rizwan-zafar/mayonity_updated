import { useParams } from "react-router";
import Header from "../components/header/Header";
import BreadcrumbOne from "../components/breadcrumb/BreadcrumbOne";
import Divider from "../components/divider/Divider";
import PortfolioDetailsContent from "../components/portfolio/PortfolioDetailsContent";
import Footer from "../components/footer/Footer";
import RelatedProjects from "../components/portfolio/RelatedProjects";
import PortfolioData from "../data/portfolio/portfolio-one.json";

export default function PortfolioDetails() {
    const paramsPortfolio = useParams();
    const portId = paramsPortfolio.portfolioId;
    const portfolios = parseInt(portId, 10);
    const portData = PortfolioData.filter(items => items.id === portfolios);

    return(
        <div>
            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbOne 
                breadcrumbImage="assets/img/bg-img/7.jpg" 
                breadcrumbTitle="Portfolio Details" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Blog Details"
            />

            <Divider />

            <PortfolioDetailsContent data={portData[0]} />

            <Divider />

            <RelatedProjects />

            <Divider />

            <Footer 
                footerLogo="../assets/img/core-img/logo-white.png" 
                footerStyle="footer-2" 
            />
        </div>
    )
}