import React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import SingleTeamMember from "./SingleTeamMember";
import TeamData from "../../data/team/team-member.json";
import { BackEndUrlContext } from '../../BackEndUrlContext'

export default function Team(props) {
    const BackEndUrl = React.useContext(BackEndUrlContext);
    const [teamText, setTeamText] = useState([]);
    const [teamMates, setTeamMates] = useState([]);

    // const { subTitle, title, para, btnLink, btnText } = props

    useLayoutEffect(() => {
        const fetchTeam = async () => {
            try{
            const [teamTextResponse] = await (await fetch(BackEndUrl+"/api/home-team-info?_format=json")).json();
            const teamMatesResponse = await (await fetch(BackEndUrl+"/api/all-team-members?_format=json")).json();
            setTeamText(teamTextResponse);
            setTeamMates(teamMatesResponse);
            }catch(e)
            {
                console.log("Internet Connection Problem",e);
            }
        }
        fetchTeam();

    }, [])


    const teamMembers = teamMates.slice(0, 2);
    const allTeamMember = teamMembers.map((item, index) => (
        <SingleTeamMember
            key={index}
            memberImage={"https://www.admin.mayonity.com"+item.field_tm_memberimage}
            memberName={item.field_tm_membername}
            designation={item.field_tm_designation}
            // contactUrl={item.contactUrl}
            // contactText={item.contactText}
        />
    ))

    return (
        <div className="saasbox-team-area pt-120 pb-120 bg-gradient">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-sm-9 col-md-7 col-lg-5">
                        <div className="section-heading mb-lg-0">
                            {teamText.field_ht_subheading ? <h6 className="text-dark"> {teamText?.field_ht_subheading} </h6> : <h6 className="text-dark">Creative Sailors</h6>}

                            {teamText.field_ht_mainheading ? <h2> {teamText.field_ht_mainheading} </h2> : <h2> Our world class experienced team members</h2>}

                            {teamText.info ? <p className="text-dark"> {teamText.info} </p> : <p className="text-dark">Its crafted with the latest trend of design & coded with all modern approaches.</p>}

                            {/* //field_ht_btn_text */}
                            {teamText.field_ht_btn_link ?
                                <Link className="btn btn-light mt-5" to={teamText.field_ht_btn_link} >
                                    {teamText.field_ht_btn_text} <i className="ms-3 bi bi-arrow-right" />
                                </Link> :

                                <Link className="btn btn-light mt-5" to="/team" >
                                    View All Members <i className="ms-3 bi bi-arrow-right" />
                                </Link>}


                            <div className="dot-pattern" style={{ backgroundImage: `url(/assets/img/core-img/dot.png)` }} />
                        </div>
                    </div>

                    <div className="col-12 col-lg-7">
                        <div className="team-members-area">
                            <div className="row justify-content-center g-4 g-xl-5">
                                {allTeamMember}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}