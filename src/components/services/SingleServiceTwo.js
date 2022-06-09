export default function SingleServiceTwo(props) {
    const {icon, title, subtitle, btnUrl, btnText} = props;

    return(
        <div className="col-12 col-sm-6 col-lg-3">
            <div className="card service2-card">
                <div className="card-body">
                    <div className="icon">
                        <i className={`bi ${icon}`} />
                    </div>
                    <h5>{title}</h5>
                    <p className="mb-4">{subtitle}</p>
                    <a className="btn btn-dark btn-minimal" href={btnUrl} >{btnText}</a>
                </div>
            </div>
        </div>
    )
}