import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import FaqContent from "../components/Faq/FaqContent";
import Footer from "../components/_App/Footer";

const Faq = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="FAQ"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ"
        imgClass="/images/page-title-bg3.jpg"
      />
 
      <FaqContent />

      <Footer />
    </>
  );
};

export default Faq;
