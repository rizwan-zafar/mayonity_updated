import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

export default function FooterCopywrite(props) {
    const {footerNavTwo} = props;

    const copywriteNavArr = footerNavTwo;
    const footerNavItems = copywriteNavArr.map((list, i) =>
        <li key={i}>
            <Link to={list.url}>{list.title}</Link>
        </li>
    )

    return(
        <div className="container">
            <div className="copywrite-wrapper mt-5 rounded d-lg-flex align-items-lg-center justify-content-lg-between">
                {/* Copywrite Text */}
                <div className="copywrite-text text-center text-lg-start mb-3 mb-lg-0 me-lg-4">
                    <p className="mb-0">
                        {new Date().getFullYear()} © All rights reserved by 
                        <a href="#" rel="noreferrer" target="_blank" style={{color:"white",fontSize:"17px"}}><b> Mayonity</b></a>
                    </p>
                </div>

                {/* Footer Nav */}
                <div className="footer-nav mb-3 mb-lg-0 me-lg-4">
                    <ul className="mb-0 d-flex flex-wrap justify-content-center list-unstyled">
                        {footerNavItems}
                    </ul>
                </div>

                {/* Language Dropdown */}
                {/* <div className="language-dropdown text-center text-lg-end">
                    <Dropdown drop="up">
                        <Dropdown.Toggle className="bg-transparent text-dark" id="dropdown-autoclose-true">
                            Language
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/"><span className="me-2 flag-icon flag-icon-sa" /> Arabic</Dropdown.Item>
                            <Dropdown.Item href="/"><span className="me-2 flag-icon flag-icon-bd" /> Bengali</Dropdown.Item>
                            <Dropdown.Item href="/"><span className="me-2 flag-icon flag-icon-us" /> English</Dropdown.Item>
                            <Dropdown.Item href="/"><span className="me-2 flag-icon flag-icon-my" /> Malay</Dropdown.Item>
                            <Dropdown.Item href="/"><span className="me-2 flag-icon flag-icon-es" /> Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div> */}
            </div>
        </div>
    )
}