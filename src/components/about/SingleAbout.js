export default function SingleAbout(props) {
    const {bgColor, iconBgColor, icon, title, titleColor, subtitle, subtitleColor} = props;

    return(
        <div className="col-12 col-sm-6">
            <div className={`card about-card ${bgColor}`}>
                <div className="card-body">
                    <div className={`icon ${iconBgColor}`}>
                        <i className={`bi ${icon}`} style={{"fontSize": "32px"}} />
                    </div>
                    <h5 className={`mb-3 ${titleColor}`}>
                        {title}
                    </h5>
                    <p className={`mb-3 ${subtitleColor}`}>
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}