import { Link } from "react-router-dom";

export default function LoginForm() {
    return(
        <div className="register-form my-4 my-lg-5">
            {/* Login Form */}
            <form onSubmit={e => { e.preventDefault(); }} >
                <div className="form-group mb-3">
                    <input className="form-control" type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group mb-3">
                    <input className="form-control" id="registerPassword" type="password" placeholder="Password" required />
                </div>
                <button className="btn btn-primary w-100" type="submit"><i className="bi bi-unlock me-2" />Login</button>
            </form>
            
            {/* Login Meta */}
            <div className="login-meta-data d-flex align-items-center justify-content-between">
                <div className="form-check mt-3">
                    <input className="form-check-input" id="rememberMe" type="checkbox" defaultValue defaultChecked />
                    <label className="form-check-label" htmlFor="rememberMe">Keep me logged in</label>
                </div>
                <Link className="forgot-password mt-3" to="/forget-password">Forgot Password?</Link>
            </div>
        </div>
    )
}