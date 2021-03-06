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
                                url: "https://creative-phoenix-ffb806.netlify.app/"
                            },
                            {
                                title: "TV Dashboard", 
                                url: "https://stately-cassata-dbe595.netlify.app/"
                            },
                            {
                                title: "Guestimate", 
                                url: "https://vermillion-alfajores-e18f9e.netlify.app/"
                            },
                            {
                                title: " PixLip", 
                                url: "http://enchanted-leg.surge.sh/"
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
                                url: "/terms-conditions"
                            },
                            {
                                title: "Privacy Policy", 
                                url: "/privacy-policy"
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
                                url: "/coming-soon", 
                                tootipPosition: "top", 
                                title: "Facebook", 
                                iconName: "bi-facebook"
                            },
                            {
                                url: "/coming-soon", 
                                tootipPosition: "top", 
                                title: "Twitter", 
                                iconName: "bi-twitter"
                            },
                            {
                                url: "/coming-soon", 
                                tootipPosition: "top", 
                                title: "Instagram", 
                                iconName: "bi-instagram"
                            },
                            {
                                url: "/coming-soon", 
                                tootipPosition: "top", 
                                title: "Linkedin", 
                                iconName: "bi-linkedin"
                            },
                            {
                                url: "/coming-soon", 
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
                        url: "/privacy-policy"
                    },
                    {
                        title: "Terms & Conditions", 
                        url: "/terms-conditions"
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