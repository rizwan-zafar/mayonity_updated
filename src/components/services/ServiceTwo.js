import SingleServiceTwo from "./SingleServiceTwo";

export default function ServiceTwo() {
    return(
        <div className="service-area service3 bg-gray pt-120 pb-120">
            <div className="container">
                <div className="row">
                    {/* Section Heading */}
                    <div className="col-12 col-sm-9 col-lg-8">
                        <div className="section-heading">
                            <h6>5 years experienced</h6>
                            <h2>We are an award-winning company &amp; provide the best services.</h2>
                            <p>It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="row g-5 g-lg-4">
                    {/* Single Service */}
                    <SingleServiceTwo 
                        icon="bi-app-indicator" 
                        title="Mobile Apps" 
                        subtitle="It's crafted with the latest trend of design." 
                        btnUrl="/" 
                        btnText="Read more"
                    />

                    {/* Single Service */}
                    <SingleServiceTwo 
                        icon="bi-pie-chart" 
                        title="Digital Content" 
                        subtitle="It's crafted with the latest trend of design." 
                        btnUrl="/" 
                        btnText="Read more"
                    />

                    {/* Single Service */}
                    <SingleServiceTwo 
                        icon="bi-tools" 
                        title="WordPress 5.0" 
                        subtitle="It's crafted with the latest trend of design." 
                        btnUrl="/" 
                        btnText="Read more"
                    />

                    {/* Single Service */}
                    <SingleServiceTwo 
                        icon="bi-sun" 
                        title="Business Idea" 
                        subtitle="It's crafted with the latest trend of design." 
                        btnUrl="/" 
                        btnText="Read more"
                    />
                </div>
            </div>
        </div>
    )
}