export default function SignInviaOthers() {

    const SocialLoginData = [
        {
            btnColor: "btn-primary btn-sm",
            loginUrl: "/",
            iconName: "bi-facebook",
            btnText: "Facebook"
        },
        {
            btnColor: "btn-primary btn-sm",
            loginUrl: "/",
            iconName: "bi-twitter",
            btnText: "Twitter"
        }
    ]

    return(
        <div className="signin-via-others">
            <p className="mb-0">Or Sign in with</p>
            {
                SocialLoginData.map((ele, index) => (
                    <a key={index} className={`btn ${ele.btnColor} mt-3 me-3`} target="_blank" rel="noreferrer" href={ele.loginUrl}>
                        <i className={`bi ${ele.iconName} me-2`} />
                        {ele.btnText}
                    </a>
                ))
            }
        </div>
    )
}