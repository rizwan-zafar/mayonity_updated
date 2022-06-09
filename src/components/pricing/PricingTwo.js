import { useState } from "react";
import SectionHeading from "../heading/HeadingOne";
import SinglePricePlanTwo from "./SinglePricePlanTwo";

export default function PricingTableTwo() {

    const [plan, setPlan] = useState("monthly-plan");

    const monthlyPlan = () => {
        setPlan("monthly-plan")
    }
    const yearlyPlan = () => {
        setPlan("yearly-plan")
    }

    return(
        <div className="saasbox-pricing-plan-area price2">
            {/* Section Heading */}
            <SectionHeading 
                subtitle="Pricing Plan" 
                heading="Simple &amp; transparent pricing plan for your team." 
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. <br /> It's a robust &amp; multi-dimensional usable template."
            />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Price Table Switcher */}
                        <div className="pricing-table-switch mb-80 text-center" >
                            <button className="btn btn-primary btn-sm me-3" onClick={monthlyPlan} >Monthly</button>
                            <button className="btn btn-primary btn-sm position-relative" onClick={yearlyPlan} >Yearly
                                <span className="badge bg-danger rounded position-absolute start-100 translate-middle">-20%</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row g-4 justify-content-center">
                            
                            {/* Single Price Table */}
                            <SinglePricePlanTwo 
                                planSwitch={plan} 
                                activePlan="" 
                                backgroundImage="" 
                                iconColor="bg-primary" 
                                iconName="bi-lock" 
                                monthlyPrice="$3" 
                                monthlyText="per month" 
                                yearlyPrice="$28" 
                                yearlyText="per year (save 20%)" 
                                priceDesc={
                                    [
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "1 Month Usage"
                                        },
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "Lifetime Updates"
                                        },
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "1 Website License"
                                        },
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "Free Support"
                                        },
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "Download New Release"
                                        }
                                    ]
                                } 
                                btnColor="btn-primary" 
                                btnUrl="/" 
                                btnText="Start Now Today" 
                            />

                            {/* Single Price Table */}
                            <SinglePricePlanTwo 
                                planSwitch={plan} 
                                activePlan="active" 
                                backgroundImage="../assets/img/core-img/3.png" 
                                iconColor="bg-warning" 
                                iconName="bi-lock" 
                                monthlyPrice="$9" 
                                monthlyText="per month" 
                                yearlyPrice="$86" 
                                yearlyText="per year (save 20%)" 
                                priceDesc={
                                    [
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "1 Month Usage"
                                        },
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "Lifetime Updates"
                                        },
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "1 Website License"
                                        },
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "Free Support"
                                        },
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "Download New Release"
                                        }
                                    ]
                                } 
                                btnColor="btn-warning" 
                                btnUrl="/" 
                                btnText="Start Now Today"
                            />

                            {/* Single Price Table */}
                            <SinglePricePlanTwo 
                                planSwitch={plan} 
                                activePlan="" 
                                backgroundImage="" 
                                iconColor="bg-info" 
                                iconName="bi-lock" 
                                monthlyPrice="$21" 
                                monthlyText="per month" 
                                yearlyPrice="$199" 
                                yearlyText="per year (save 20%)" 
                                priceDesc={
                                    [
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "1 Month Usage"
                                        },
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "Lifetime Updates"
                                        },
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "1 Website License"
                                        },
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "Free Support"
                                        },
                                        {
                                            "icon": "bi-check-circle-fill",
                                            "desc": "Download New Release"
                                        }
                                    ]
                                } 
                                btnColor="btn-info" 
                                btnUrl="/" 
                                btnText="Start Now Today"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}