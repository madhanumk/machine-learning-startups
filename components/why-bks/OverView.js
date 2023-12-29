import React from "react";

const OverView = () => {
    return (
        <>
            <div className="about-area" style={{ padding: "50px 0px" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12" style={{ paddingRight: "50px" }}>
                            <div className="about-content p-0">
                                <h2>Why BKS Services</h2>
                                <p style={{ fontSize: "16px" }}>
                                    BKS Textiles is a top-notch vertically integrated textile mill situated in Tirupur.  We produce an exclusive range of fabrics, hospitality linens and workwear for top brands worldwide. from the finest quality cotton and cotton blends, Polyester and blends, also Linen and blends bringing a touch of class and elegance to everything we create
                                </p>
                                <p style={{ fontSize: "16px" }}>
                                    Our ability to develop innovative textile solutions and consistently deliver best-in-class products to top-notch retailers and labels has enabled us to retain a space in our market segment. We supply textile fabrics, workwear apparel, and home textiles to markets across the US, Europe, UAE, and the Middle East. BKS Textiles is a reliable name in the textile industry and strives to become the preferred partner for superior-quality textile solutions.
                                </p>
                                <p style={{ fontSize: "16px" }}>
                                    Our exclusive range of fabrics and special finishes for leading brands worldwide has enabled us to retain a loyal clientele. Our fabrics speak of our quality consciousness and trust and continue to imbibe goodwill and redefine elegance.
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
        </>
    );
};

export default OverView;
