import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SectionHeading from "../heading/HeadingOne";
import Container from 'react-bootstrap/Container';
import TabData from "../../data/tab/tab-data.json";

export default function SaasboxTab() {
    const tabItems = TabData.map((elem, index) => (
        <Tab key={index} eventKey={elem.tabKey} title={elem.tabTitle} >
            <div className="row align-items-center justify-content-center">
                {/* Tab Text */}
                <div className="col-12 col-sm-9 col-md-6">
                    <div className="tab--text mt-3 mt-lg-5">
                        {elem.tabText.map((items, index) => {
                            return(
                                <div key={index} dangerouslySetInnerHTML={{__html: items}} />
                            )
                        })}
                    </div>
                </div>

                {/* Tab Thumb */}
                <div className="col-12 col-sm-9 col-md-6">
                    <div className="tab-thumb mt-5 ms-lg-5">
                        <img src={`${process.env.PUBLIC_URL}/${elem.tabImage}`} alt={elem.tabTitle} />
                    </div>
                </div>
            </div>
        </Tab>
    ))

    return(
        <div className="saasbox-tab-area">
            {/* Section Heading */}
            <SectionHeading
                subtitle="Awarded Company"
                heading="Awesome stunning smart &amp; dynamic feature for your website."
            />

            <Container >
                {/* Tab */}
                <div className="tab--area">
                    <Tabs defaultActiveKey="tab1" id="saasboxTab">
                        {tabItems}
                    </Tabs>
                </div>
            </Container>
        </div>
    )
}