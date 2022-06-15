import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Footer from "../components/footer/Footer";
import CtaThree from "../components/cta/CtaThree";
import VideoCard from "../components/video/VideoCard";
import SEO from "../components/common/SEO";
import Services from "../components/services/Services";
import SingleService from "../components/services/SingleService";
import { useContext, useEffect, useState } from "react";
import { BackEndUrlContext } from '../BackEndUrlContext'

export default function ServiceStandard() {


    const BackEndUrl = useContext(BackEndUrlContext);

    const [homeBanner, setHomeBanner] = useState('');
    const [homeCTA, sethomeCTA] = useState('');
    useEffect(() => {
        async function fetchMyAPI() {


            try {
                let response = await (await fetch(BackEndUrl + "/api/home-banner?_format=json")).json();
                setHomeBanner(response);
                const homeCTAresp = await (await fetch(BackEndUrl + "/api/all-cta?_format=json")).json();
                sethomeCTA(homeCTAresp[0])
            } catch (e) {
                console.log("Internet Problem", e)
            }
        }
        fetchMyAPI()
    }, [])

    return (
        <>
            <SEO title="Service Standard" />

            <Header
                brandLogo="assets/img/core-img/logo.png"
                headerStyle="header-2"
                buttonColor="btn-warning"
            />

            <BreadcrumbTwo
                breadcrumbTitle="Service Standard"
                homePageUrl="/"
                homePageText="Home"
                currentPageText="Service"
            />
            <br /><br /><br />

            <div className="container">
                <div className="row justify-content-center g-4 g-xl-5">



                    {/* Single Service */}
                    <SingleService
                        iconBgColor="bg-success"
                        iconName="bi-columns"
                        heading="Website Designing"
                        para="Front-end web designing in latest designing technologies."
                        url="/"
                        btnText="Learn more"
                    />

                    {/* Single Service */}
                    <SingleService
                        iconBgColor="bg-warning"
                        iconName="bi-columns"
                        heading="Website Developement"
                        para="Web development in cutting edge technologies using modern standards."
                        url="/"
                        btnText="Learn more"
                    />

                    {/* Single Service */}
                    <SingleService
                        iconBgColor="bg-info"
                        iconName="bi-pie-chart"
                        heading="Wordpress Website"
                        para="High-quality WordPress Solutions to create engaging digital experiences"
                        url="/"
                        btnText="Learn more"
                    />



                    {/* Single Service */}

                    <SingleService
                        iconBgColor=""
                        iconName="bi-app-indicator"
                        heading="Apps Designing"
                        para="Engaging and interactive mobile view designs."
                        url="/"
                        btnText="Learn more"
                    />
                    {/* Single Service */}

                    <SingleService
                        iconBgColor="bg-primary"
                        iconName="bi bi-app"
                        heading="Apps Developement"
                        para="Native, hybrid, and cross-platform mobile applications."
                        url="/"
                        btnText="Learn more"
                    />


                    {/* Single Service */}
                    <SingleService
                        iconBgColor="bg-danger"
                        iconName="bi bi-cart-plus"
                        heading="E-Commerce Web & App"
                        para="Create engaging and flexible ecommerce platforms."
                        url="/"
                        btnText="Learn more"
                    />
                    {/* Single Service */}
                    <SingleService
                        iconBgColor="bg-danger"
                        iconName="bi-sun"
                        heading="UI / UX Desinging"
                        para="Latest UI/UX technologies and trends to design responsive realistic apps."
                        url="/"
                        btnText="Learn more"
                    />

                    {/* Single Service */}
                    <SingleService
                        iconBgColor="bg-success"
                        iconName="bi bi-textarea"
                        heading="Data Entiry"
                        para="Pros can fill your spreadsheets and databases with speed and accuracy."
                        url="/"
                        btnText="Learn more"
                    />

                    {/* Single Service */}
                    <SingleService
                        iconBgColor=""
                        iconName="bi-play"
                        heading="Suggestions & Solutions"
                        para="Top minds to perform a successful transformation of your enterprise."
                        url="/"
                        btnText="Learn more"
                    />

                </div>
            </div>
            <br /><br /><br />
            <VideoCard
                bgImage="assets/img/backimages/servicescta.jpg"
             />

            <CtaThree
                title="Let's start with the simple way to create a website."
                btnUrl="/contact"
                btnText="Buy Now"
            />

            <Footer
                footerLogo="assets/img/core-img/logo.png"

            />
        </>
    )
}