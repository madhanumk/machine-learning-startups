import React from "react";

const Management = () => {
    return (
        <>
            <div className="about-area" style={{padding:"50px 0px"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 " style={{ paddingRight: '35px' }}>
                            <div className="about-content p-0">
                                <h2>Management</h2>
                                <p style={{ fontSize: "16px" }}>
                                    BKS Textiles is managed by M Senthil Kumar (Managing Director) and Sangeetha Velkrishna
                                    (Director) who are highly qualified and experienced professionals with a wealth of
                                    knowledge and experience in the textile sector, providing the necessary thought leadership
                                    and drive to expand, flourish and achieve new milestones. They are amply supported by a
                                    team of young and dynamic workforce who manage the day-to-day operations and drive
                                    growth.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12"  style={{paddingLeft:"50px"}}>
                            <div className="about-image">
                                <img src="/images/about/1.jpg" alt="image" />
                                {/* <img src="/images/about/2.jpg" alt="image" /> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}

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

export default Management;
