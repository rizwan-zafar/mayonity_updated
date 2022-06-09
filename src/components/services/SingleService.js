export default function SingleService(props) {
    const {iconBgColor, iconName, heading, para, url, btnText} = props;

    return(
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card service-card">
                <div className="card-body p-0 px-lg-0">
                    <div className={`icon ${iconBgColor}`}>
                        <i className={`bi ${iconName}`} />
                    </div>
                    <h5>{heading}</h5>
                    <p>{para}</p>
                    
                </div>
            </div>
        </div>
    )
}