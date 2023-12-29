import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import MainContent from "../components/about/MainContent";
import Services from "../components/home/Services";
import Webinar from "../components/home/Webinar";
import Partner from "../components/home/Partner";
import Feedback from "../components/home/Feedback";
import PricingTable from "../components/home/PricingTable";
import SubscribeForm from "../components/home/SubscribeForm";
import Footer from "../components/_App/Footer";
import Awards from "../components/about/Awards";
import Management from "../components/about/Management";
import Milestones from "../components/about/Milestones";

const AboutPage = () => {
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
      <MainContent />

      {/* <Services /> */}

      {/* <Webinar /> */}
      <Awards />

   <Management />
   <Milestones />
      <Footer />
    </>
  );
};

export default AboutPage;
