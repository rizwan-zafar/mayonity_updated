import { Link } from "react-router-dom";
import Divider from "../divider/Divider";

export default function AboutTwo() {
    const aboutImage = "assets/img/bg-img/5.jpg";

    // const aboutItem = [
    //     {
    //         "icon": "assets/img/svg-icon/web.svg",
    //         "title": "Web Design",
    //         "para": "It's crafted with the latest trend of design & coded with all modern approaches."
    //     },
    //     {
    //         "icon": "assets/img/svg-icon/branding.svg",
    //         "title": "Branding",
    //         "para": "It's crafted with the latest trend of design & coded with all modern approaches."
    //     },
    //     {
    //         "icon": "assets/img/svg-icon/play.svg",
    //         "title": "Apps Design",
    //         "para": "It's crafted with the latest trend of design & coded with all modern approaches."
    //     },
    //     {
    //         "icon": "assets/img/svg-icon/shopping.svg",
    //         "title": "Ecommerce Solution",
    //         "para": "It's crafted with the latest trend of design & coded with all modern approaches."
    //     }
    // ]

    const rightSideText = [
        {
            "subtitle": "About Mayonity", 
            "title": "Accelerating enterprises to adopt new technologies.",
            "para": "We are a software development and consultancy company that delivers cutting edge solutions for global organisations and technology startups."
        },
        {
            "btnColor": "btn-info",
            "btnUrl": "/",
            "btnText": "Get Started Today"
        }
    ]

    const workSteps = [
        {
            "id": "1",
            "title": "Collect your data",
            "para": "Our first step is to analyze and document your high-level software requirements. We will have many discussions, develop user stories, and document them in our project management tools."
        },
        {
            "id": "2",
            "title": "Design prototype & development",
            "para": "The next step is to design and develop your software application using industry standard development tools. We ensure product quality by running tests, detect coding issues, and enforce certain development rules prior to deployment."
        }
    ]

        // const topItems = aboutItem.map((ele, ind) => 
        //     <div key={ind} className="col-12 col-sm-6 col-lg-3">
        //         <div className="single-about-item text-center">
        //             <div className="icon mx-auto mb-4">
        //                 <img src={`${process.env.PUBLIC_URL}/${ele.icon}`} alt={ele.title} />
        //             </div>
        //             <h5 className="mb-3">{ele.title}</h5>
        //             <p className="mb-0">{ele.para}</p>
        //         </div>
        //     </div>
        // )

    const workStepsItem = workSteps.map((item, index) => 
        <div key={index} className="single-work-step d-flex mb-4">
            <span>{item.id}</span>
            <div className="work-step-text">
                <h6>{item.title}</h6>
                <p>{item.para}</p>
            </div>
        </div>
    )

    return(
        <div className="about-area">
            <div className="text-center">
           <h2>MAYONITY</h2>
           <p>The World's Best Software Development Company.</p>
                </div>
            {/* <div className="container">
                <div className="about-content">
                    <div className="row justify-content-center g-5 g-lg-4">
                        {topItems}
                    </div>
                </div>
            </div> */}

            <Divider />

            <div className="container">
                <div className="row g-5 align-items-center justify-content-md-center justify-content-lg-between">
                    {/* About Us Thumbnail */}
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="aboutUs-thumbnail">
                            <img className="w-100" src="/assets/img/backimages/aboutpage.png" alt="" />
                        </div>
                    </div>

                    {/* About Us Content */}
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="aboutUs-content">
                            <div className="section-heading mb-5">
                                <h6>{rightSideText[0].subtitle}</h6>
                                <h2>{rightSideText[0].title}</h2>
                                <p>{rightSideText[0].para}</p>
                            </div>

                            <div className="work-step-wrapper">
                                {workStepsItem}
                            </div>

                            <Link className={`btn ${rightSideText[1].btnColor}`} to={rightSideText[1].btnUrl} >
                                {rightSideText[1].btnText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}