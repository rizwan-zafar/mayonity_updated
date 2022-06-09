import SectionHeading from "../heading/HeadingOne";
import SingleFeature from "./SingleFeature";

export default function Technology() {
    return(
        <div className="used-technology-area bg-gray pt-120 pb-120">
            <div className="container">
                {/* Section Heading */}
                <SectionHeading
                    heading="Built with all modern approaches."
                    para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template."
                />

                <div className="row g-0 justify-content-center">
                    <SingleFeature
                        image="logo192.png"
                        title="React JS"
                    />

                    <SingleFeature
                        image="assets/img/demo-img/tpl/react-bootstrap.png"
                        title="React Bootstrap"
                    />

                    <SingleFeature
                        image="assets/img/demo-img/tpl/route.png"
                        title="React Router 6"
                    />
                </div>
            </div>
        </div>
    )
}