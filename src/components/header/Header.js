import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import SaasboxNav from "./Nav";
import useStickyHeader from "./StickyHeader";

export default function Header(props) {
    const {brandLogo, headerStyle, buttonColor} = props;
 
    let [check] = useState(true);    
    const sticky = useStickyHeader(10);
    const stickyClass = `${(sticky && check) ? 'sticky' : ''}`

    return(
        <header className={`header-area ${headerStyle} ${stickyClass}`}>
            <Navbar expand="lg">
                <div className="container">
                    {/* Navbar Brand */}
                    <Link className="navbar-brand" to="/">
                        <img src={`${process.env.PUBLIC_URL}/${brandLogo}`} alt="mayonity" />
                    </Link>

                    {/* Navbar Toggler */}
                    <Navbar.Toggle className="navbar-toggler" aria-controls="saasboxNav" />

                    <Navbar.Collapse id="saasboxNav">
                        {/* Nav */}

                      
                        <SaasboxNav />

                        {/* Button */}
                        <div className="ms-auto mb-3 mb-lg-0">
                            <Link className={`btn ${buttonColor} btn-sm`} to="/contact">
                                Contact
                            </Link>
                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>
    );
}