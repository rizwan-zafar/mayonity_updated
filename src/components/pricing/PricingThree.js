import SectionHeading from "../heading/HeadingOne";
import SinglePricePlanThree from "./SinglePricePlanThree";

export default function PriceTableThree() {
    return(
        <div className="saasbox-pricing-plan-area bg-gray pt-120 pb-120">
            {/* Section Heading */}
            <SectionHeading 
                subtitle="Pricing Table" 
                heading="Easy &amp; Simple Plan" 
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template." 
            />

            <div className="container">
                <div className="row justify-content-center g-4 g-lg-5">
                    
                    {/* Single Price Table */}
                    <SinglePricePlanThree 
                        activePlan="" 
                        planTitle="Basic" 
                        price="$23" 
                        priceText="per month" 
                        pricingDesc={[
                            {text: "1 Month Usage", availability: "yes"},
                            {text: "Lifetime Updates", availability: "yes"},
                            {text: "1 Website License", availability: "no"},
                            {text: "Free Support", availability: "no"},
                            {text: "Download New Release", availability: "no"},
                        ]}
                        btnStyle="btn-info" 
                        btnLink="/" 
                        btnText="Choose Plan" 
                        backgroundImage="" 
                    />
                    
                    {/* Single Price Table */}
                    <SinglePricePlanThree 
                        activePlan="active" 
                        planTitle="Standard" 
                        price="$99" 
                        priceText="per month" 
                        pricingDesc={[
                            {text: "1 Month Usage", availability: "yes"},
                            {text: "Lifetime Updates", availability: "yes"},
                            {text: "1 Website License", availability: "yes"},
                            {text: "Free Support", availability: "yes"},
                            {text: "Download New Release", availability: "yes"},
                        ]}
                        btnStyle="btn-warning" 
                        btnLink="/" 
                        btnText="Choose Plan" 
                        backgroundImage="assets/img/core-img/3.png" 
                    />

                </div>
            </div>
        </div>
    )
}