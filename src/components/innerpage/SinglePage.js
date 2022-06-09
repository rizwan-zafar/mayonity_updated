import { Link } from "react-router-dom";

export default function SinglePage(props) {
    const {url, image, title} = props;

    return(
        <div className="col-12 col-sm-6 col-lg-4 portfolio-item">
            <div className="single-preview-area text-center">
                <Link to={url}>
                    <img className="shadow-sm" src={`${process.env.PUBLIC_URL}/${image}`} alt={title} />
                </Link>
                <h5 className="mb-0 mt-4">{title}</h5>
            </div>
        </div>
    )
}