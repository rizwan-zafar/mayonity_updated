import React from 'react';
import { useEffect, useState } from 'react';
import SectionHeading from '../heading/HeadingOne';
import SingleCoolFact from './SingleCoolFact';
import { BackEndUrlContext } from '../../BackEndUrlContext'

export default function CoolFacts() {

    const BackEndUrl = React.useContext(BackEndUrlContext);
    const [milestoneData,setMilestonedata] = useState();

    useEffect(() => {
        const fetchMilestonesData = async () => {
            try{
            const [milestoneResponse] = await (await fetch(BackEndUrl+"/api/count-section?_format=json")).json();

            setMilestonedata(milestoneResponse);            
            }catch(e)
            {
                console.log("Internet Connection Problem",e);
            }
        }
        fetchMilestonesData();

    }, [])

    return(
        <div className="cool-facts-wrapper">
            {/* Circle Animation */}
            <div className="circle-animation">
                <div className="circle1" />
                <div className="circle2" />
                <div className="circle3" />
                <div className="circle4" />
            </div>

            {/* Background Image */}
            <div className="cta-background-image">
                <img src={`${process.env.PUBLIC_URL}/assets/img/core-img/wm.png`} alt="" />
            </div>

            {/* Heading: src > components > heading > Heading */}
            <SectionHeading
                subtitle={milestoneData?.field_cs_subheading ? milestoneData?.field_cs_subheading : "Some Milestones" }
                heading={milestoneData?.field_cs_mainheading ? milestoneData?.field_cs_mainheading : "We already completed multiple projects successfully and more counting."}
            />

            <div className="container">
                <div className="row g-4 justify-content-center">
                    {/* Single Cool Fact */}
                    <SingleCoolFact 
                        countUpValue={milestoneData?.field_cs_count1 ? milestoneData?.field_cs_count1 : "11+"}
                        suffix="+" 
                        title={milestoneData?.field_cs_count1_text ? milestoneData?.field_cs_count1_text : "Total Projects"}
                    />
                    
                    {/* Single Cool Fact */}
                    <SingleCoolFact 
                        countUpValue={milestoneData?.field_cs_count2 ? milestoneData?.field_cs_count2 : "4+"}
                        suffix="+" 
                        title={milestoneData?.field_cs_count2_text ? milestoneData?.field_cs_count2_text : "Team Members"}
                    />
                    
                    {/* Single Cool Fact */}
                    <SingleCoolFact 
                        countUpValue={milestoneData?.field_cs_count3 ? milestoneData?.field_cs_count3 : "15+"} 
                        suffix="+" 
                        title={milestoneData?.field_cs_count3_text ? milestoneData?.field_cs_count3_text : "Coffee Served"}
                    />
                </div>
            </div>
        </div>
    )
}