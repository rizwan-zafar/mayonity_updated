import { Link } from "react-router-dom";

export default function BreadcrumbOne(props) {
    const {breadcrumbImage, breadcrumbTitle, homePageUrl, homePageText, currentPageText} = props;

    return(
        <div className="breadcrumb-wrapper bg-img bg-overlay" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${breadcrumbImage})`}}>
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="breadcrumb-content">
                            {/* Breadcrumb Title */}
                            <h2 className="breadcrumb-title">{breadcrumbTitle}</h2>
                            
                            {/* Breadcrumb Nav */}
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <Link to={homePageUrl} >
                                            {homePageText}
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">{currentPageText}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}