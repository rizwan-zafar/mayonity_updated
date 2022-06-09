import { Link } from "react-router-dom";

export default function SingleDemo(props) {
    const {url, image, title} = props;

    return(
        <div className="col-12 col-md-6">
            <div className="single-preview-area text-center">
                <Link to={url}>
                    <img className="shadow-sm" src={`${process.env.PUBLIC_URL}/${image}`} alt={title} />
                </Link>
                <h5 className="mb-0 mt-4">{title}</h5>
            </div>
        </div>
    )
}