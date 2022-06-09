import { useState } from "react";
import SectionHeading from "../heading/HeadingOne";
import SinglePriceTable from "./SinglePricePlanOne";

export default function PricingTableOne() {

    const [plan, setPlan] = useState("monthly-plan");

    const monthlyPlan = () => {
        setPlan("monthly-plan")
    }
    const yearlyPlan = () => {
        setPlan("yearly-plan")
    }

    return (
        <div className="saasbox-pricing-plan-area bg-gray pt-120 pb-120">
            {/* Section Heading */}
            <SectionHeading 
                subtitle="Pricing Plan"
                heading="Simple &amp; transparent pricing plan for your team."
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template."
            />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Pricing Table Switcher */}
                        <div className="pricing-table-switch mb-80 text-center" >
                            <button className="btn btn-warning btn-sm me-3" onClick={monthlyPlan} >Monthly</button>
                            <button className="btn btn-warning btn-sm position-relative" onClick={yearlyPlan} >Yearly
                                <span className="badge bg-danger rounded position-absolute start-100 translate-middle">-20%</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row g-0 justify-content-center">
                    {/* Single Price Table */}
                    <SinglePriceTable 
                        planSwitch={plan} 
                        activePlan="" 
                        planTitle="Basic" 
                        monthlyPrice="$3" 
                        monthlyPriceText="per month" 
                        yearlyPrice="$28" 
                        yearlyPriceText="per year (save 20%)" 
                        priceIcon="assets/img/svg-icon/plant2.svg" 
                        pricingDesc={[
                            {text: "1 Month Usage", availability: "yes"},
                            {text: "Lifetime Updates", availability: "yes"},
                            {text: "1 Website License", availability: "no"},
                            {text: "Free Support", availability: "no"},
                            {text: "Download New Release", availability: "no"},
                        ]}
                        btnStyle="btn-primary"
                        btnLink="/"
                        btnText="Choose Plan"
                    />

                    {/* Single Price Table */}
                    <SinglePriceTable 
                        planSwitch={plan} 
                        activePlan="active"
                        planTitle="Standard"
                        monthlyPrice="$9"
                        monthlyPriceText="per month"
                        yearlyPrice="$86"
                        yearlyPriceText="per year (save 20%)"
                        priceIcon="assets/img/svg-icon/plant.svg"
                        pricingDesc={[
                            {text: "1 Month Usage", availability: "yes"},
                            {text: "Lifetime Updates", availability: "yes"},
                            {text: "1 Website License", availability: "yes"},
                            {text: "Free Support", availability: "no"},
                            {text: "Download New Release", availability: "no"},
                        ]}
                        btnStyle="btn-warning"
                        btnLink="/"
                        btnText="Choose Plan"
                    />

                    {/* Single Price Table */}
                    <SinglePriceTable 
                        planSwitch={plan}
                        activePlan=""  
                        planTitle="Pro"
                        monthlyPrice="$21"
                        monthlyPriceText="per month"
                        yearlyPrice="$199"
                        yearlyPriceText="per year (save 20%)"
                        priceIcon="assets/img/svg-icon/saving-money.svg"
                        pricingDesc={[
                            {text: "1 Month Usage", availability: "yes"},
                            {text: "Lifetime Updates", availability: "yes"},
                            {text: "1 Website License", availability: "yes"},
                            {text: "Free Support", availability: "yes"},
                            {text: "Download New Release", availability: "yes"},
                        ]}
                        btnStyle="btn-primary"
                        btnLink="/"
                        btnText="Choose Plan"
                    />

                </div>
            </div>
        </div>
    )
}