import SectionHeading from "../heading/HeadingOne";
import PartnerOneLogo from "./PartnerOneLogo";

export default function PartnerOne() {
    return(
        <div className="partner-area">

            <SectionHeading 
                heading="Trusted and used by 2k+ creative company."
            />

            <div className="container">
                {/* Partner Wrapper */}
                <div className="partner-wrapper">
                    {/* Logo */}
                    <PartnerOneLogo 
                        partnerLogo="assets/img/partner-img/1.png" 
                    />

                    {/* Logo */}
                    <PartnerOneLogo 
                        partnerLogo="assets/img/partner-img/2.png" 
                    />

                    {/* Logo */}
                    <PartnerOneLogo 
                        partnerLogo="assets/img/partner-img/3.png" 
                    />

                    {/* Logo */}
                    <PartnerOneLogo 
                        partnerLogo="assets/img/partner-img/4.png" 
                    />

                    {/* Logo */}
                    <PartnerOneLogo 
                        partnerLogo="assets/img/partner-img/5.png" 
                    />

                    {/* Logo */}
                    <PartnerOneLogo 
                        partnerLogo="assets/img/partner-img/6.png" 
                    />

                    {/* Logo */}
                    <PartnerOneLogo 
                        partnerLogo="assets/img/partner-img/1.png" 
                    />

                    {/* Logo */}
                    <PartnerOneLogo 
                        partnerLogo="assets/img/partner-img/2.png" 
                    />
                    
                    {/* Logo */}
                    <PartnerOneLogo 
                        partnerLogo="assets/img/partner-img/3.png" 
                    />
                </div>
            </div>
        </div>
    )
}