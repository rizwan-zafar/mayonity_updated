export default function AboutFour() {

    const aboutData = [
        {
            iconName: "bi-cup",
            title: "WP Solution",
            subTitle: "Ultimate Solution for WP"
        },
        {
            iconName: "bi-star-half",
            title: "Frontend Solution",
            subTitle: "Solution for Webs"
        },
        {
            iconName: "bi-gear",
            title: "Digital Branding",
            subTitle: "Boot your sales"
        },
        {
            iconName: "bi-geo-alt",
            title: "Live Chat Help",
            subTitle: "Support 24h a day"
        },
        {
            iconName: "bi-cursor",
            title: "WP Solution",
            subTitle: "Ultimate Solution for WP"
        },
        {
            iconName: "bi-graph-up",
            title: "Frontend Solution",
            subTitle: "Solution for Webs"
        },
        {
            iconName: "bi-cursor",
            title: "WP Solution",
            subTitle: "Ultimate Solution for WP"
        },
        {
            iconName: "bi-graph-up",
            title: "Frontend Solution",
            subTitle: "Solution for Webs"
        }
    ]
    
    const aboutCards = aboutData.map((ele, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
            <div className="card hero-card h-100 border-0 p-3">
                <div className="card-body">
                    <i className={`bi ${ele.iconName}`} />
                    <h5>{ele.title}</h5>
                    <p className="mb-0">{ele.subTitle}</p>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="about-area about3">
            <div className="container">
                <div className="row justify-content-center g-3 g-lg-4">
                    {aboutCards}
                </div>
            </div>
        </div>
    )
}