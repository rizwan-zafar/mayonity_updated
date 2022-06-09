import { useParams } from "react-router";
import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Divider from "../components/divider/Divider";
import PortfolioDetailsContentTwo from "../components/portfolio/PortfolioDetailsContentTwo";
import Footer from "../components/footer/Footer";
import RelatedProjects from "../components/portfolio/RelatedProjects";
import PortfolioData from "../data/portfolio/portfolio-two.json";

export default function PortfolioDetailsTwo() {
    const paramsPortfolio = useParams();
    const portId = paramsPortfolio.portfolioId;
    const portfolios = parseInt(portId, 10);
    const portData = PortfolioData.filter(items => items.id === portfolios);

    return(
        <div>
            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbTwo 
                breadcrumbTitle="Portfolio Details" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Blog Details"
            />

            <Divider />

            <PortfolioDetailsContentTwo data={portData[0]} />

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