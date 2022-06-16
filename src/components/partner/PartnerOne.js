import SectionHeading from "../heading/HeadingOne";
import PartnerOneLogo from "./PartnerOneLogo";
import { useContext, useEffect, useState } from "react";
import { BackEndUrlContext } from '../../BackEndUrlContext'
export default function PartnerOne() {
    const BackEndUrl = useContext(BackEndUrlContext);
    
    const [clintLogo, setClientLogo] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                let response = await (await fetch(BackEndUrl + "/api/client-logo?_format=json")).json();
                console.log("client Logo",response)
                setClientLogo(response);

                
                
            } catch (e) {
                console.log("Internet Problem", e)
            }
        }
        fetchMyAPI()
    }, [])



    const clientLogo = clintLogo.map((ele, index) => (
        <PartnerOneLogo  key={index}
        partnerLogo={BackEndUrl+ele.field_cl_image} 
    />

    ))
    return(
        <div className="partner-area">

            <SectionHeading 
                heading="Trusted and used by multiple creative companies."
            />

            <div className="container">
                
                <div className="partner-wrapper">
                   

                     {clientLogo}

                 
 
                </div>
            </div>
        </div>
    )
}