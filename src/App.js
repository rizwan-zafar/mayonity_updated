import {Routes, Route, Navigate} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

// Home Page
// import DemoPage from './pages/Index';
import CreativeAgency from './pages/CreativeAgency';
import BusinessStudio from './pages/BusinessStudio';
import SaasLanding from './pages/SaasLanding';
import SeoBusiness from './pages/SeoBusiness';

// Portfolio Page
import PortfolioStandard from "./pages/PortfolioStandard";
import PortfolioCreative from "./pages/PortfolioCreative";
import PortfolioFullWidth from "./pages/PortfolioFullWidth";
import PortfolioDetails from "./pages/PortfolioDetails";
import PortfolioDetailsTwo from "./pages/PortfolioDetailsTwo";

// Shop Page
import ShopFullWidth from "./pages/ShopFullWidth";
import ShopSidebar from "./pages/ShopSidebar";
import ProductDetails from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

// Blog Page
import BlogOne from "./pages/BlogOne";
import BlogTwo from "./pages/BlogTwo";
import BlogThree from "./pages/BlogThree";
import BlogDetailsOne from "./pages/BlogDetailsOne";
import BlogDetailsTwo from "./pages/BlogDetailsTwo";
import BlogDetails from "./components/blog/BlogDetails";

// Others Page
import AllTeamMembers from "./pages/Team";
import NotFound from "./pages/NotFound";
import AboutStandard from "./pages/AboutStandard";
import AboutCreative from "./pages/AboutCreative";
import ServiceStandard from "./pages/ServiceStandard";
import ServiceCreative from "./pages/ServiceCreative";
import PricingPlan from "./pages/PricingPlan";
import FAQ from "./pages/Faq";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import ComingSoon from "./pages/ComingSoon";
import NewsletterPage from "./pages/Newsletter";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";

// All CSS Import
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/all-css-libraries.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import './assets/scss/style.scss';

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<CreativeAgency />} />
        <Route path="/creative-agency" element={<CreativeAgency />} />
        <Route path="/business-studio" element={<BusinessStudio />} />
        <Route path="/saas-landing" element={<SaasLanding />} />
        <Route path="/seo-business" element={<SeoBusiness />} />
 
        <Route path="/portfolio" element={<PortfolioStandard />} />
        <Route path="/portfolio-creative" element={<PortfolioCreative />} />
        <Route path="/portfolio-full-width" element={<PortfolioFullWidth />} />
        <Route path="/portfolio-details/:portfolioId" element={<PortfolioDetails />} />
        <Route path="/portfolio-details2/:portfolioId" element={<PortfolioDetailsTwo />} />

        <Route path="/shop-fullwidth" element={<ShopFullWidth />} />
        <Route path="/shop-sidebar" element={<ShopSidebar />} />
        <Route path="/product-details/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/blogs" element={<BlogOne />} />
        <Route path="/blog-2" element={<BlogTwo />} />
        <Route path="/blog-3" element={<BlogThree />} />
        <Route path="/blog-details-1" element={<BlogDetailsOne />} />
        <Route path="/blog-details-2" element={<BlogDetailsTwo />} />
        <Route path="/blog-details/:postId" element={<BlogDetails />} />

        <Route path="/about" element={<AboutStandard />} />
        <Route path="/about-creative" element={<AboutCreative />} />
        <Route path="/services" element={<ServiceStandard />} />
        <Route path="/service-creative" element={<ServiceCreative />} />
        
        <Route path="/team" element={<AllTeamMembers />} />
        <Route path="/pricing-plan" element={<PricingPlan />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>

      <ScrollToTop id="scrollTopButton" color="white" smooth top={200} />
    </div>
  );
}

// "proxy": "http://mayonity-admin.local.com:8080",