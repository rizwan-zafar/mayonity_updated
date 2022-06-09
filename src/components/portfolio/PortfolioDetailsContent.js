import SEO from "../common/SEO";

export default function PortfolioDetailsContent({data}) {
    const portfolioMetaData = data.projectInfo.map((ele, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-4">
            <div className="project-card text-center">
                <span>0{ele.id}</span>
                <h3>{ele.title}</h3>
                <p className="mb-0">{ele.desc}</p>
            </div>
        </div>
    ))

    const inDetailsData = data.inDetails.map((elem, index) => (
        <div key={index} className="col-12 col-md-6">
            <div className="project-details-content">
                <h5>{elem.title}</h5>
                <p className="mb-0">{elem.desc}</p>
            </div>
        </div>
    ))

    return(
        <div className="portfolio-details-area portfolio-content">
            <SEO title={data.title} />

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-9 col-lg-7">
                        <div className="section-heading text-center">
                            <h2>{data.title}</h2>
                            <p>{data.shortDesc}</p>
                        </div>
                    </div>
                </div>

                <div className="row g-4 g-lg-5 justify-content-center">
                    {portfolioMetaData}
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="project-details-shots mb-80 mt-5">
                            <img className="rounded w-100" src={`${process.env.PUBLIC_URL}/${data.largeImage}`} alt={data.title} />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center g-5">
                    {inDetailsData}
                </div>
            </div>
        </div>
    )
}