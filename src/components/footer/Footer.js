import FooterWidgetOne from "./FooterWidgetOne";
import FooterWidgetNav from "./FooterWidgetNav";
import FooterWidgetContact from "./FooterWidgetContact";
import FooterCopywrite from "./FooterCopywrite";

export default function Footer(props) {
    const {footerLogo, footerStyle} = props;

    return(
        <footer className={`footer-area ${footerStyle} pt-120 pb-120`}>
            <div className="container">
                <div className="row g-4 g-lg-5">
                    
                    {/* Footer Widget: src > components > footer > FooterWidgetOne */}
                    <FooterWidgetOne
                        footerLogo={footerLogo} 
                        footerText="Dedicated to international digital greatness
                        A beacon of innovation. A collective of intelligent and dedicated minds. The architects of your digital tomorrow." newsletterPlaceholderText="Enter email" 
                    />
                    
                    {/* Footer Widget: src > components > footer > FooterWidgetNav */}
                    <FooterWidgetNav
                        heading="Our Products" 
                        footerNav={[
                            {
                                title: "Covid-19 Studio", 
                                url: "https://covidstuio.surge.sh/"
                            },
                            {
                                title: "GenShare", 
                                url: "#"
                            },
                            {
                                title: "TV Dashboard", 
                                url: "#"
                            },
                            {
                                title: "Guestimate", 
                                url: "#"
                            },
                            {
                                title: " Mayonity", 
                                url: "#"
                            }
                        ]}
                    />
                    
                    {/* Footer Widget: src > components > footer > FooterWidgetNav */}
                    <FooterWidgetNav
                        heading="Important Links" 
                        footerNav={[
                            // {
                            //     title: "Community & Forum", 
                            //     url: "#"
                            // },
                            {
                                title: "About Us", 
                                url: "/about"
                            },
                            {
                                title: "Contact Us", 
                                url: "/contact"
                            },
                            {
                                title: "Terms & Conditions", 
                                url: "/coming-soon"
                            },
                            {
                                title: "Privacy Policy", 
                                url: "/coming-soon"
                            }
                        ]}
                    />
                    
                    {/* Footer Widget: src > components > footer > FooterWidgetContact */}
                    <FooterWidgetContact
                        heading="Our Location" 
                        address="DHA Phase 8 Lahore, Pakistan, PAK" 
                        phone="Whatspapp: +923454671224" 
                        email="Email: official@mayonity.com" 
                        social={[
                            {
                                url: "#", 
                                tootipPosition: "top", 
                                title: "Facebook", 
                                iconName: "bi-facebook"
                            },
                            {
                                url: "#", 
                                tootipPosition: "top", 
                                title: "Twitter", 
                                iconName: "bi-twitter"
                            },
                            {
                                url: "#", 
                                tootipPosition: "top", 
                                title: "Instagram", 
                                iconName: "bi-instagram"
                            },
                            {
                                url: "#", 
                                tootipPosition: "top", 
                                title: "Linkedin", 
                                iconName: "bi-linkedin"
                            },
                            {
                                url: "#", 
                                tootipPosition: "top", 
                                title: "YouTube", 
                                iconName: "bi-youtube"
                            }
                        ]}
                    />

                </div>
            </div>

            {/* Footer Copywrite: src > components > footer > FooterCopywrite */}
            <FooterCopywrite 
                footerNavTwo={[
                    {
                        title: "Privacy Policy", 
                        url: "/coming"
                    },
                    {
                        title: "Terms & Conditions", 
                        url: "/coming"
                    },
                    {
                        title: "Get Support", 
                        url: "/contact"
                    }
                ]}
            />

        </footer>
    );
}