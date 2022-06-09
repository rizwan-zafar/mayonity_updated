import SectionHeading from "../heading/HeadingOne";
import SingleService from "./SingleService";

export default function Services() {
    return(
        <div className="service-area">
            {/* Section Heading */}
            <SectionHeading
                subtitle="5 years experienced"
                heading="We are an award-winning company &amp; provide the best services."
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template."
            />

            <div className="container">
                <div className="row justify-content-center g-4 g-xl-5">

                    {/* Single Service */}
                    <SingleService 
                        iconBgColor="" 
                        iconName="bi-app-indicator" 
                        heading="Apps Developement" 
                        para="It's crafted with the latest trend of design." 
                        url="/" 
                        btnText="Learn more" 
                    />

                    {/* Single Service */}
                    <SingleService 
                        iconBgColor="bg-warning" 
                        iconName="bi-columns" 
                        heading="Website Developement" 
                        para="It's crafted with the latest trend of design." 
                        url="/" 
                        btnText="Learn more" 
                    />

                    {/* Single Service */}
                    <SingleService 
                        iconBgColor="bg-info" 
                        iconName="bi-pie-chart" 
                        heading="Content &amp; SEO Marketing" 
                        para="It's crafted with the latest trend of design." 
                        url="/" 
                        btnText="Learn more" 
                    />

                    {/* Single Service */}
                    <SingleService 
                        iconBgColor="bg-danger" 
                        iconName="bi-sun" 
                        heading="Business Creative Leads" 
                        para="It's crafted with the latest trend of design." 
                        url="/" 
                        btnText="Learn more" 
                    />

                    {/* Single Service */}
                    <SingleService 
                        iconBgColor="bg-success" 
                        iconName="bi-tools" 
                        heading="Ultimate Solution" 
                        para="It's crafted with the latest trend of design." 
                        url="/" 
                        btnText="Learn more" 
                    />

                    {/* Single Service */}
                    <SingleService 
                        iconBgColor="" 
                        iconName="bi-play" 
                        heading="Learning for future" 
                        para="It's crafted with the latest trend of design." 
                        url="/" 
                        btnText="Learn more" 
                    />

                </div>
            </div>
        </div>
    )
}