export default function RegisterForm() { 
    return(
        <div className="register-form my-5">
            {/* Register Form */}
            <form onSubmit={e => { e.preventDefault(); }} >
                <div className="form-group mb-3">
                    <input className="form-control" type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group mb-3">
                    <input className="form-control" type="text" placeholder="Full Name" required />
                </div>
                <div className="form-group mb-3">
                    <input className="form-control" id="registerPassword" type="password" placeholder="Password" required />
                </div>
                <button className="btn btn-primary w-100" type="submit">Register Now</button>
            </form>
        </div>
    )
}