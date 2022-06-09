import { useContext, useEffect, useState } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from 'react-router-dom';
import SectionHeading from "../heading/HeadingOne";
import { BackEndUrlContext } from '../../BackEndUrlContext'

export default function TestimonialTwo() {

     const BackEndUrl = useContext(BackEndUrlContext);
     const [all_testimonial, setAll_testimonial] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                let response = await (await fetch(BackEndUrl + "/api/all-testimonails?_format=json")).json();
                setAll_testimonial(response);
                 
            } catch (e) {
                console.log("Internet Problem", e)
            }
        }
        fetchMyAPI()
    }, []) 
   
    const testArray = all_testimonial.slice(0, 8) 
    const finalTestimonialArray =testArray.map((el,index)=>{
         
             return({
                 id:++index,
                 ...el
             })
         
        
    })
     
    // const test=[
    //     {
    //         "id": 1,
    //         "field_t_name": "Iqbal Zohaib",
    //         "field_t_designation": "United States",
    //         "field_t_client_image": "/sites/default/files/2022-03/pp.jpg",
    //         "field_t_rating": "",
    //         "field_t_image_content": "/sites/default/files/2022-03/Capture.PNG",
    //         "field_t_para": ""
    //     },
    //     {
    //         "id": 8,
    //         "field_t_name": "Iqbal Zohaib",
    //         "field_t_designation": "sales manager",
    //         "field_t_client_image": "/sites/default/files/2022-03/pp_0.jpg",
    //         "field_t_rating": "5.00",
    //         "field_t_image_content": "",
    //         "field_t_para": "I strongly recommend to everyone interested in running a business!"
    //     }
    // ]


    const testimonialArr = finalTestimonialArray;
    const testimonialPopover = testimonialArr.map((ele, index) => (
        <div key={index} className={`cir-testimonial tes${ele.id}` } >
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
                <img src={`${BackEndUrl}/${ele.field_t_client_image}`} alt={ele.field_t_name} />
            </OverlayTrigger>
        </div>
    ))

    return(
        <div className="client-feedback-area feedback-2 pt-120 pb-120">
            {/* Section Heading */}
            <SectionHeading 
                subtitle="Testimonials" 
                heading="Read some reviews from our beloved clients about our work." 
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template." 
            />

            <div className="container">
                {/* Testimonial Wrapper */}
                <div className="circle-testimonial-wrapper rounded-circle" >
                    <div className="circle-tes-sub-wrap1 position-absolute rounded-circle" />
                    <div className="circle-tes-sub-wrap2 position-absolute rounded-circle" />
                    <div className="circle-tes-sub-wrap3 position-absolute rounded-circle" />
                    <div className="circle-tes-sub-wrap4 position-absolute rounded-circle" />

                    {testimonialPopover}
                </div>
            </div>

            <div className="container">
                <div className="text-center">
                    <Link className="btn btn-warning mt-70" to="/reviews">
                        View All Reviews
                    </Link>
                </div>
            </div>
        </div>
    )
}