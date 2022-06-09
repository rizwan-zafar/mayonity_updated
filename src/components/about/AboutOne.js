import { useEffect, useState } from 'react';
import React from 'react';
import AboutText from "./AboutText";
import SingleAbout from "./SingleAbout";
import { BackEndUrlContext } from '../../BackEndUrlContext'


// import AboutData from '../../data/about/about.json';

export default function AboutOne() { 
    const BackEndUrl = React.useContext(BackEndUrlContext);
    const [aboutData, setAboutData] = useState([]);
    const [aboutText, setAboutText] = useState();

    // const aboutItems = AboutData.slice(0, 4);
    const abouts = aboutData?.map((about, index) => 
        <SingleAbout
            key={index}
            // bgColor={about.bgColor}
            icon={about.field_s_logo}
            // iconBgColor={about.iconBgColor}
            title={about.title}
            // titleColor={about.titleColor}
            subtitle={about.field_s_para}
            // subtitleColor={about.subtitleColor}
        />
    )

    useEffect(() => {
        const fetchAboutData = async () => {
            try{
            const aboutDataResponse = await (await fetch(BackEndUrl+"/api/all-services?_format=json")).json();

            const [aboutTextResponse] = await (await fetch(BackEndUrl+"/api/key-services?_format=json")).json();

            setAboutData(aboutDataResponse);
            setAboutText(aboutTextResponse)
            }
            catch(e)
            {
                console.log("Internet Connection Problem",e);
            }
            
        }
        fetchAboutData();

    }, [])


    return (
        <div className="about-area">
            <div className="container">
                <div className="row align-items-center justify-content-between g-5">
                    <div className="col-12 col-lg-7">
                        <div className="about-content">
                            <div className="row g-4 g-xl-5">
                                {abouts}
                            </div>
                        </div>
                    </div>

                    {/* About Text */}
                    <AboutText
                        subtitle={aboutText?.field_ks_subheading}
                        title={aboutText?.field_ks_mainheading}
                        para={aboutText?.field_ks_para}
                        btnOneText={aboutText?.field_ks_btn1_text ? aboutText?.field_ks_btn1_text : "More Services"}
                        btnOneUrl={aboutText?.field_ks_btn1_link ? aboutText?.field_ks_btn1_link : "/services"}
                        btnTwoText={aboutText?.field_ks_btn2_text ? aboutText?.field_ks_btn2_text : "Talk With Us"}
                        btnTwoUrl={aboutText?.field_ks_btn2_link ? aboutText?.field_ks_btn2_link : "/contact"}
                    />
                </div>
            </div>
        </div>
    )
}