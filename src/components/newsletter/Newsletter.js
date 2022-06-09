export default function Newsletter(props) {
    const {backgroundImage, title, subtitle, placeholderText, inputSubId, inputSubText, btnColor, btnText} = props;

    return(
        <div className="saasbox-newsletter-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card newsletter-card shadow-lg bg-text-gray border-0 bg-img" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${backgroundImage})`}}>
                            <div className="card-body">
                                {/* Text */}
                                <div className="text-center">
                                    <h2>{title}</h2>
                                    <p className="mb-5">{subtitle}</p>
                                </div>

                                {/* Newsletter Form */}
                                <form onSubmit={e => { e.preventDefault(); }} >
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-md-5">
                                            <input className="form-control" type="email" placeholder={placeholderText} aria-describedby={inputSubId} />
                                            <small className="text-muted text-start" id={inputSubId} >
                                                <i className="bi bi-lock me-1" />
                                                {inputSubText}
                                            </small>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <button className={`btn ${btnColor} w-100 mt-3 mt-md-0`} type="submit">
                                                {btnText}
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}