
import Header from "../components/header/Header";
import BreadcrumbOne from "../components/breadcrumb/BreadcrumbOne";
import Divider from "../components/divider/Divider";
import CtaThree from "../components/cta/CtaThree";
import Footer from "../components/footer/Footer";
 import SEO from "../components/common/SEO";
import React from "react";
import { BackEndUrlContext } from '../BackEndUrlContext'


export default function AllTeamMembers() {  
    const BackEndUrl = React.useContext(BackEndUrlContext);
    const[AllTeamMembers,setAllTeamData]=React.useState([]);

    React.useEffect(() => {
        const fetchAllTeamMemberData = async () => {
            try{
            const allTeamDataResponse = await (await fetch(BackEndUrl+"/api/all-team-members?_format=json")).json();
          console.log("all team member",allTeamDataResponse);
            setAllTeamData(allTeamDataResponse);
            }catch(e)
            {
                console.log("Internet Connection Problem",e);
            }
            
        }
        fetchAllTeamMemberData();

    }, [])
   

    const TeamMembersData = AllTeamMembers.map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-4">
            <div className="card team-card shadow">
                <div className="card-body p-4 py-md-5 text-center">
                    <div className="member-img mb-4 rounded-circle">
                        <img src={BackEndUrl+item.field_tm_memberimage} alt="Team Member" />
                    </div>
                    <h6>{item.field_tm_membername}</h6>
                    <p className="fz-14">{item.field_tm_designation}</p>
                    <div className="border" />
                    {/* <Link className="mt-3 btn btn-dark btn-minimal fz-14" to={item.contactUrl} >
                        {item.contactText} {item.memberName} <i className="bi bi-caret-right-fill" />
                    </Link> */}
                </div>
            </div>
        </div>
    ))

    return(
        <div>
            <SEO title="Team Member" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbOne 
                breadcrumbImage="assets/img/backimages/allTeamMember.jpg" 
                breadcrumbTitle="Team Members" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Team"
            />

            <Divider />

            <div className="container">
                <div className="row g-4 g-md-5 justify-content-center">
                    {TeamMembersData}
                </div>
            </div>

            <Divider />

            <CtaThree 
                title="Let's start with the simple way to create a website." 
                btnUrl="#" 
                btnText="Get Now" 
            />

            <Footer 
                footerStyle="" 
                footerLogo="assets/img/core-img/logo.png" 
            />
        </div>
    )
}