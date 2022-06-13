import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BreadcrumbOne from "../components/breadcrumb/BreadcrumbOne";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SEO from "../components/common/SEO";
import { BackEndUrlContext } from '../BackEndUrlContext'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default function Reviews() {

    // const ratingOne = "bi-star-fill";
    const BackEndUrl = useContext(BackEndUrlContext);
    const [all_testimonial, setAll_testimonial] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                let response = await (await fetch(BackEndUrl + "/api/all-testimonails?_format=json")).json();
                console.log("review=", response);
                setAll_testimonial(response);

            } catch (e) {
                console.log("Internet Problem", e)
            }
        }
        fetchMyAPI()
    }, [])

    // function number_test(n) {
    //     var result = (n - Math.floor(n)) !== 0;

    //     if (result) {
    //         return result;
    //     }
    //     else {
    //         return false;
    //     }

    // }

    const ReviewsData = all_testimonial;
    const allReviews = ReviewsData.map((ele, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-4 portfolio-item">





            {/* {number_test(ele.field_t_rating) ? console.log("decimal") : console.log("whole") } */}
            {/*                    
                    <div className="ratings text-warning mt-4 mb-3 fz-14">
                         
                        <i className={`bi ${ratingOne}`} />
                        <i className={`bi ${ratingOne}`} />
                        <i className={`bi ${ratingOne}`} />
                        <i className={`bi ${ratingOne}`} />
                        <i className={`bi ${ratingOne}`} />
                    </div> */}
            <OverlayTrigger placement="bottom" overlay={
                <Popover key={`testimonialPopover${ele.key}`} className=" poptest testimonial-popover">
                    <Popover.Header as="h3">
                        {ele.field_t_name}
                    </Popover.Header>
                    <Popover.Body>
                        {/* {ele.field_t_para} */}
                        <img src={`${BackEndUrl}/${ele.field_t_image_content}`} alt="content Image" className="just-test" />
                    </Popover.Body>
                </Popover>
            }>

                <div className="card feedback-card border-0 p-2 shadow-sm">
                    <div className="card-body p-4 p-md-3">
                        <div className="client-info d-flex align-items-center">
                            <div className="client-thumb rounded-circle me-2 position-relative">
                                <img className="rounded-circle" src={`${BackEndUrl}/${ele.field_t_client_image}`} alt={ele.field_t_name} />
                                <span className="rounded-circle">
                                    <i className="bi bi-check" />
                                </span>
                            </div>
                            <div className="client-name">
                                <h6 className="fz-14 mb-0">{ele.field_t_name}</h6>
                                <p className="mb-0 fz-12">{ele.field_t_designation}</p>
                            </div>
                        </div>
                    </div>
                </div>


            </OverlayTrigger>
            {/* <p className="text-dark mb-0 fw-bold">{ele.field_t_para}</p> */}
            {/* </div>
            </div> */}


        </div>
    ))

    return (
        <div>
            <SEO title="Reviews" />

            <Header
                brandLogo="assets/img/core-img/logo-white.png"
                headerStyle=""
                buttonText="Log In"
                buttonColor="btn-warning"
            />

            <BreadcrumbOne
                breadcrumbImage="assets/img/backimages/reviewback.jpg"
                breadcrumbTitle="Client Reviews"
                homePageUrl="/"
                homePageText="Home"
                currentPageText="Reviews"
            />

            <div className="bg-gray pt-120 pb-120">
                <div className="container">
                    <div className="row g-4 saasbox-portfolio-filter">
                        {allReviews}
                    </div>

                    <div className="text-center">
                        {/* <Link className="btn btn-primary mt-5" to="#">
                            Load More Reviews
                        </Link> */}
                    </div>
                </div>
            </div>

            <Footer
                footerLogo="assets/img/core-img/logo-white.png"
                footerStyle="footer-2"
            />
        </div>
    )
}