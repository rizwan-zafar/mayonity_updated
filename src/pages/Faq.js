import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Footer from "../components/footer/Footer";
import Divider from "../components/divider/Divider";
import Accordion from 'react-bootstrap/Accordion';
import SEO from "../components/common/SEO";

export default function FAQ() {
    return(
        <div>
            <SEO title="FAQ" />

            <Header 
                brandLogo="assets/img/core-img/logo.png" 
                headerStyle="header-2" 
                buttonText="Get Support" 
                buttonColor="btn-info" 
            />

            <BreadcrumbTwo 
                breadcrumbTitle="FAQ's" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="FAQ" 
            />

            <Divider />

            <div className="faq--area">
                <div className="container">
                    <div className="row g-4 g-lg-5">
                        <div className="col-12 col-lg-6">
                            <Accordion className="faq--accordian" defaultActiveKey="0">
                                <Accordion.Item className="my-1" eventKey="0">
                                    <Accordion.Header className="card border-0">
                                        1. How can I purchased Saasbox?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt eiusmod.
                                    </Accordion.Body>
                                </Accordion.Item>
                                
                                <Accordion.Item className="my-1" eventKey="1">
                                    <Accordion.Header className="card border-0">
                                        2. What are the minimum requirements?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt eiusmod.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item className="my-1" eventKey="2">
                                    <Accordion.Header className="card border-0">
                                        3. What is the regular license?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt eiusmod.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <div className="col-12 col-lg-6">
                            <Accordion className="faq--accordian" defaultActiveKey="11">
                                <Accordion.Item className="my-1" eventKey="11">
                                    <Accordion.Header className="card border-0">
                                        4. How can I purchased Saasbox?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt eiusmod.
                                    </Accordion.Body>
                                </Accordion.Item>
                                
                                <Accordion.Item className="my-1" eventKey="12">
                                    <Accordion.Header className="card border-0">
                                        5. What are the minimum requirements?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt eiusmod.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item className="my-1" eventKey="13">
                                    <Accordion.Header className="card border-0">
                                        6. What is the regular license?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt eiusmod.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            <Divider />

            <Footer 
                footerLogo="assets/img/core-img/logo-white.png" 
                footerStyle="footer-2" 
            />
        </div>
    )
}