import { Link } from "react-router-dom";

export default function NotFoundContent(props) {
    const {errorImage, errorText, errorPara, btnText} = props;

    return(
        <div className="saasbox-error-area">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                     
                    <div className="col-12 col-sm-10 col-md-9 col-lg-7">
                        <br />
                        <br />
                         <img className="mb-5" src="https://static.vecteezy.com/system/resources/previews/002/416/499/non_2x/404-error-and-page-not-found-illustration-vector.jpg" alt={errorText} />
                        {/* <h5>{errorText}</h5> */}
                        <p>{errorPara}</p>
                        <Link className="btn btn-primary" style={{marginTop:"-14.5rem"}} to="/" >{btnText}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}