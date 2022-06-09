export default function SingleFeatures(props) {
    const {textColor, title} = props;

    return(
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="single-more-feature">
                <i className={`bi bi-check-lg ${textColor}`} />
                <h6 className={`mb-0 d-inline-block ${textColor}`}>
                    {title}
                </h6>
            </div>
        </div>
    )
}