import { Link } from "react-router-dom";

export default function NotFoundContent(props) {
    const {errorImage, errorText, errorPara, btnText} = props;

    return(
        <div className="saasbox-error-area">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-sm-10 col-md-9 col-lg-7">
                        <img className="mb-5" src={`${process.env.PUBLIC_URL}/${errorImage}`} alt={errorText} />
                        <h5>{errorText}</h5>
                        <p>{errorPara}</p>
                        <Link className="btn btn-primary mt-4" to="/" >{btnText}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}