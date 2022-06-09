import SectionHeading from "../heading/HeadingOne";
import SingleFeature from "./SingleFeature";

export default function Features() {
    return(
        <div className="feature-area bg-primary pt-120 pb-120">            
            <div className="background-shape" />
            <div className="curve-shape-top" />
            <div className="curve-shape-bottom" />

            {/* Heading: src > components > heading > HeadingOne */}
            <SectionHeading 
                subtitle="2016 - 2022"
                subtitleColor="text-white"
                heading="From 2016, we providing our services, check our best solutions."
                headingColor="text-white"
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template."
                paraColor="text-white"
            />

            <div className="container">
                <div className="row g-4 justify-content-center">
                    {/* Single Feature */}
                    <SingleFeature
                        iconBgColor="bg-primary"
                        iconName="bi-tools"
                        heading="WordPress Solution"
                        subHeading="Ultimate solution for WP"
                    />
                    
                    {/* Single Feature */}
                    <SingleFeature
                        iconBgColor="bg-success"
                        iconName="bi-brush"
                        heading="Frontend Solution"
                        subHeading="Solution for webs"
                    />

                    {/* Single Feature */}
                    <SingleFeature
                        iconBgColor="bg-info"
                        iconName="bi-bar-chart"
                        heading="Digital Branding"
                        subHeading="Boot your sales"
                    />

                    {/* Single Feature */}
                    <SingleFeature
                        iconBgColor="bg-danger"
                        iconName="bi-twitter"
                        heading="Live Chat Help"
                        subHeading="Support 24h a day"
                    />

                    {/* Single Feature */}
                    <SingleFeature
                        iconBgColor="bg-warning"
                        iconName="bi-gear"
                        heading="Easy Setup"
                        subHeading="Solution for setup"
                    />

                    {/* Single Feature */}
                    <SingleFeature
                        iconBgColor="bg-success"
                        iconName="bi-bug"
                        heading="Fixed Bugs"
                        subHeading="Unlimited bug fix"
                    />

                    {/* Single Feature */}
                    <SingleFeature
                        iconBgColor="bg-info"
                        iconName="bi-bar-chart"
                        heading="Digital Branding"
                        subHeading="Boot your sales"
                    />

                    {/* Single Feature */}
                    <SingleFeature
                        iconBgColor="bg-primary"
                        iconName="bi-twitter"
                        heading="Live Chat Help"
                        subHeading="Support 24h a day"
                    />

                    {/* Single Feature */}
                    <SingleFeature
                        iconBgColor="bg-danger"
                        iconName="bi-gear"
                        heading="Easy Setup"
                        subHeading="Solution for setup"
                    />
                </div>
            </div>
        </div>
    )
}