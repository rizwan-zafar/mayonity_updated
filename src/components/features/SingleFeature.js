export default function SingleFeature(props) {
    const {iconBgColor, iconName, heading, subHeading } = props;

    return(
        <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            {/* Feature Card */}
            <div className="card feature-card">
                <div className="card-body d-flex align-items-center">
                    <i className={`${iconBgColor} bi ${iconName}`}/>
                    <div className="fea-text">
                        <h6>{heading}</h6>
                        <span>{subHeading}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}