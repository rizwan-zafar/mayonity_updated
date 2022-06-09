import SectionHeading from "../heading/HeadingOne";
import SingleDemo from "./SingleDemo";

export default function Demos() {
    return(
        <div className="demo-show">
            {/* Heading: src > components > heading > HeadingOne */}
            <SectionHeading 
                badgeColor="bg-primary" 
                badge="Home Pages" 
                heading="Beautifully designed, hand-crafted coded, 4 pre-built home page perfect for your website." 
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template."
            />

            <div className="container">
                <div className="row g-5 demo-preview-area justify-content-center">
                    {/* Single Demo */}
                    <SingleDemo 
                        url="/creative-agency"
                        image="assets/img/demo-img/home/ca.png"
                        title="Creative Agency"
                    />
                    
                    {/* Single Demo */}
                    <SingleDemo 
                        url="/business-studio"
                        image="assets/img/demo-img/home/bs.png"
                        title="Business Studio"
                    />

                    {/* Single Demo */}
                    <SingleDemo 
                        url="/saas-landing"
                        image="assets/img/demo-img/home/sl.png"
                        title="Sass Landing"
                    />
                    
                    {/* Single Demo */}
                    <SingleDemo 
                        url="/seo-business"
                        image="assets/img/demo-img/home/sb.png"
                        title="SEO Business"
                    />
                </div>
            </div>
        </div>
    )
}