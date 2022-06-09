import SectionHeading from "../heading/HeadingOne";
import SinglePage from "./SinglePage";

export default function InnerDemos() {
    return(
        <div className="inner-page-wrapper">
            
            <SectionHeading 
                badgeColor="bg-primary"
                badge="Inner Page"
                heading="Awesome 30 inner pages <br /> for your all needs."
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template."
            />

            <div className="container">
                <div className="row g-5">
                    <SinglePage 
                        url="/portfolio-standard"
                        image="assets/img/demo-img/ps.png"
                        title="Portfolio Standard"
                    />

                    <SinglePage 
                        url="/portfolio-creative"
                        image="assets/img/demo-img/pc.png"
                        title="Portfolio Creative"
                    />
                    
                    <SinglePage 
                        url="/portfolio-full-width"
                        image="assets/img/demo-img/pfw.png"
                        title="Portfolio Full Width"
                    />

                    <SinglePage 
                        url="/portfolio-details/1"
                        image="assets/img/demo-img/pd1.png"
                        title="Portfolio Details 1"
                    />

                    <SinglePage 
                        url="/portfolio-details2/1"
                        image="assets/img/demo-img/pd2.png"
                        title="Portfolio Details 2"
                    />

                    <SinglePage 
                        url="/shop-fullwidth"
                        image="assets/img/demo-img/sfw.png"
                        title="Shop Full Width"
                    />

                    <SinglePage 
                        url="/shop-sidebar"
                        image="assets/img/demo-img/sws.png"
                        title="Shop with Sidebar"
                    />

                    <SinglePage 
                        url="/product-details/1"
                        image="assets/img/demo-img/sp.png"
                        title="Single Product"
                    />

                    <SinglePage 
                        url="/cart"
                        image="assets/img/demo-img/cart.png"
                        title="Cart"
                    />

                    <SinglePage 
                        url="/checkout"
                        image="assets/img/demo-img/check.png"
                        title="Checkout"
                    />

                    <SinglePage 
                        url="/blog-1"
                        image="assets/img/demo-img/b1.png"
                        title="Blog 1"
                    />

                    <SinglePage 
                        url="/blog-2"
                        image="assets/img/demo-img/b2.png"
                        title="Blog 2"
                    />

                    <SinglePage 
                        url="/blog-3"
                        image="assets/img/demo-img/b3.png"
                        title="Blog 3"
                    />

                    <SinglePage 
                        url="/blog-details-1"
                        image="assets/img/demo-img/bd1.png"
                        title="Blog Details 1"
                    />

                    <SinglePage 
                        url="/blog-details-2"
                        image="assets/img/demo-img/bd2.png"
                        title="Blog Details 2"
                    />

                    <SinglePage 
                        url="/about-standard"
                        image="assets/img/demo-img/as.png"
                        title="About Standard"
                    />

                    <SinglePage 
                        url="/about-creative"
                        image="assets/img/demo-img/ac.png"
                        title="About Creative"
                    />

                    <SinglePage 
                        url="/service-standard"
                        image="assets/img/demo-img/ss.png"
                        title="Service Standard"
                    />

                    <SinglePage 
                        url="/service-creative"
                        image="assets/img/demo-img/sc.png"
                        title="Service Creative"
                    />

                    <SinglePage 
                        url="/register"
                        image="assets/img/demo-img/reg.png"
                        title="Register"
                    />
                    
                    <SinglePage 
                        url="/login"
                        image="assets/img/demo-img/login.png"
                        title="Login"
                    />
                    
                    <SinglePage 
                        url="/forget-password"
                        image="assets/img/demo-img/fp.png"
                        title="Forget Password"
                    />

                    <SinglePage 
                        url="/pricing-plan"
                        image="assets/img/demo-img/pt.png"
                        title="Price Table"
                    />

                    <SinglePage 
                        url="/faq"
                        image="assets/img/demo-img/faq.png"
                        title="FAQ"
                    />

                    <SinglePage 
                        url="/team"
                        image="assets/img/demo-img/team.png"
                        title="Team"
                    />

                    <SinglePage 
                        url="/contact"
                        image="assets/img/demo-img/contact.png"
                        title="Contact"
                    />

                    <SinglePage 
                        url="/reviews"
                        image="assets/img/demo-img/reviews.png"
                        title="Reviews"
                    />

                    <SinglePage 
                        url="/coming-soon"
                        image="assets/img/demo-img/cs.png"
                        title="Coming Soon"
                    />

                    <SinglePage 
                        url="/newsletter"
                        image="assets/img/demo-img/newsletter.png"
                        title="Newsletter"
                    />

                    <SinglePage 
                        url="/not-found"
                        image="assets/img/demo-img/404.png"
                        title="404"
                    />
                </div>
            </div>
        </div>
    )
}