import Accordion from 'react-bootstrap/Accordion';

export default function FAQOne(props) {
    const {heading, image} = props;

    return(
        <div className="faq--area">
            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center">
                    <div className="col-12 col-md-7 col-lg-6">
                        <div className="faq-content">
                            <h2 className="mb-5">{heading}</h2>

                            <Accordion className="faq--accordian" defaultActiveKey="0">
                                {/* Accordion Item */}
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="card border-0 mb-1">
                                        How can I purchased Saasbox?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro nulla architecto.
                                    </Accordion.Body>
                                </Accordion.Item>
                                
                                {/* Accordion Item */}
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className="card border-0 mb-1">
                                        What are the minimum requirements?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, excepturi maiores cumque aut sunt suscipit saepe debitis officiis obcaecati!
                                    </Accordion.Body>
                                </Accordion.Item>
                                
                                {/* Accordion Item */}
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header className="card border-0">
                                        What is the regular license?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus quae repellendus laudantium quasi? Perspiciatis, voluptate?
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-5 col-lg-6">
                        {/* FAQ Thumbnail */}
                        <div className="faq--thumbnail ms-xl-5">
                            <img src={`${process.env.PUBLIC_URL}/${image}`} alt={heading} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}