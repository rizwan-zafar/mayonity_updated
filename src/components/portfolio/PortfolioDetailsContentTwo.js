import SEO from "../common/SEO";

export default function PortfolioDetailsContent({data}) {

    const portfolioMetaData = data.projectInfo.map((ele, index) => (
        <div key={index} className="mb-5">
            <h3>{ele.title}</h3>
            <p className="mb-0">{ele.desc}</p>
        </div>
    ))

    const inDetailsData = data.inDetails.map((elem, index) => (
        <div key={index} className="project-details-content mb-5">
            <h5>{elem.title}</h5>
            <p className="mb-0">{elem.desc}</p>
        </div>
    ))

    const socialItems = data.socialShare.map((ele, index) => (
        <a key={index} href={ele.link}>
            <i className={`bi ${ele.iconName}`} />
        </a>
    ))

    const portItems = data.imageGroup.map((ele, index) => (
        <div key={index} className="col-12 col-sm-6">
            <div className="project-img">
                <img className="w-100" src={`${process.env.PUBLIC_URL}/${ele.img1}`} alt="Portfolio Details" />
            </div>
            <div className="project-img mt-4">
                <img className="w-100" src={`${process.env.PUBLIC_URL}/${ele.img2}`} alt="Portfolio Details" />
            </div>
        </div>
    ))

    return(
        <div className="portfolio-details-area">
            <SEO title={data.title} />

            <div className="container">
                <div className="row align-items-end">
                    <div className="col-12 col-sm-8 col-lg-6">
                        <div className="section-heading">
                            <h2>{data.title}</h2>
                            <p>{data.shortDesc}</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-6">
                        <div className="text-sm-end mb-80">
                            <a className="btn btn-info rounded-pill" target="_blank" rel="noreferrer" href="https://themeforest.net/user/designing-world/portfolio">Live Demo</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-4">
                        {portfolioMetaData}
                        {inDetailsData}
                        <div className="project-share-info">
                            {socialItems}
                        </div>
                    </div>

                    <div className="col-12 col-md-8">
                        <div className="project-details-shots mt-5 mt-md-0">
                            <div className="row g-4">
                                {portItems}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}