import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBannerTitle from "../components/common/PageBannerTitle";

const ResearchDevelopment = () => {
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

            <div className="about-area" style={{ padding: "50px 0px" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12" style={{ paddingRight: "50px" }}>
                            <div className="about-content p-0">
                                <h2>Research & Developments</h2>
                                <p style={{ fontSize: "16px" }}>
                                    Our passionate R&D team is steered and guided by our Director, who constantly inspires us to explore the latest trends in fashion and technology. Our talented and dedicated R&D team is always on the lookout of products from research & developments in fibre science, spinning, weaving, and processing technologies as well as chemical re-engineering techniques that can help us to meet the diverse requirements of our high-end customers. We are always striving to enhance the functional attributes of our woven fabrics to make sure that they can withstand even the most demanding workplace conditions.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about/1.jpg" alt="image" />
                                {/* <img src="/images/about/2.jpg" alt="image" /> */}
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center" style={{paddingTop:"70px"}}>
                        <div className="col-lg-6 col-md-12" style={{ paddingRight: "50px" }}>
                            <div className="about-image">
                                <img src="/images/about/1.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12" >
                            <div className="about-content p-0">
                                <p style={{ fontSize: "16px" }}>
                                    Our R&D team that seamlessly integrates customer requirements to produce superior-quality fabrics, workwear apparel and home textiles that are compelling, appealing, and stylish. Our core specialities in weaving, dyeing, printing and finishing enable us to produce high-quality textile products with quick quality approvals and turnaround time to ensure customer delight.
                                </p>
                                <p style={{ fontSize: "16px" }}>
                                    The R&D team at BKS Textiles strives to be at the forefront of fabric innovation and aspires to provide our customers with a wide range of original fabrics that have custom aesthetics and functions. Our dedicated team of textile engineers have extensive experience and smart working skills in advanced technology. They gain inspiration from trend analysis, international trade shows, and client needs to create new weaves and finishes that are unique and innovative.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape-img2">
                    <img src="/images/shape/1.png" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/3.png" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/4.png" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/5.png" alt="image" />
                </div>
                <div className="shape-img6">
                    <img src="/images/shape/6.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/4.png" alt="image" />
                </div>

            </div>

            <Footer />
        </>
    );
};

export default ResearchDevelopment;

