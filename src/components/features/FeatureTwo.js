import SectionHeading from '../heading/HeadingOne';
import ScrollAnimation from 'react-animate-on-scroll';

export default function FeatureTwo() {

    const featuresData = [
        {
            "iconColor": "text-primary", 
            "icon": "bi-bootstrap-fill",
            "title": "Bootstrap 5.1",
            "para": "Build fast, responsive sites with Bootstrap.",
            "btnColor": "btn-primary",
            "btnUrl": "/",
            "btnText": "Learn more...",
            "animationDelay": 0
        },
        {
            "iconColor": "text-warning", 
            "icon": "bi-code-slash",
            "title": "Vanilla JS",
            "para": "The write less, do more with JavaScript Library.",
            "btnColor": "btn-warning",
            "btnUrl": "/",
            "btnText": "Learn more...",
            "animationDelay": 100
        },
        {
            "iconColor": "text-danger", 
            "icon": "bi-bullseye",
            "title": "Pug Supported",
            "para": "It compiles to HTML and has a simplified syntax.",
            "btnColor": "btn-danger",
            "btnUrl": "/",
            "btnText": "Learn more...",
            "animationDelay": 200
        },
        {
            "iconColor": "text-info", 
            "icon": "bi-braces",
            "title": "SCSS Featured",
            "para": "Sass is the stable &amp; powerful grade CSS.",
            "btnColor": "btn-dark",
            "btnUrl": "/",
            "btnText": "Learn more...",
            "animationDelay": 300
        }
    ]

    const featuresItems = featuresData.map((ele, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-3">
            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" delay={ele.animationDelay} animateOnce={true}>
                <div className="card feature2-card shadow-lg">
                    <div className="card-body">
                        <div className={`feature-icon mb-4 ${ele.iconColor}`}>
                            <i className={`bi ${ele.icon}`} />
                        </div>
                        <h5>
                            {ele.title}
                        </h5>
                        <p>
                            {ele.para}
                        </p>
                        <a className={`btn ${ele.btnColor} btn-minimal`} href={ele.btnUrl} >
                            {ele.btnText}
                        </a>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    ))

    return(
        <div className="feature-area feature2 pt-120 pb-120">            
            <SectionHeading 
                subtitle="Why choose us" 
                subtitleColor="text-dark" 
                heading="We have been running many successful business studios." 
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template." 
                paraColor="text-dark" 
            />
        
            <div className="container">
                <div className="row g-4 g-xxl-5">
                    {featuresItems}
                </div>
            </div>
        </div>
    )
}