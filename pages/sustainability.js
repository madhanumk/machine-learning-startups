import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import SustainabilityMain from "../components/Sustainability/SustainabilityMain";
import ZeroLiquid from "../components/Sustainability/Zero-Liquid";
import WasteManagement from "../components/Sustainability/Waste-management";
import GreenEnergy from "../components/Sustainability/Green-Energy";
import AfforestationDrive from "../components/Sustainability/Afforestation-drive";

const Sustainability = () => {
    return (
        <>
            <Navbar />

            <PageBannerTitle
                pageTitle="About"
                homePageUrl="/"
                homePageText="Home"
                activePageText="About"
                imgClass="/images/page-title-bg1.jpg"
            />

            <SustainabilityMain />

            <ZeroLiquid />

            <WasteManagement />

            <GreenEnergy />

            <AfforestationDrive />

            <Footer />
        </>
    );
};

export default Sustainability;
