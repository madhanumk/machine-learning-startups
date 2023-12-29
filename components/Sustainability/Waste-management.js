import React from 'react'

const WasteManagement = () => {
    return (
        <>
            <div className="about-area  widget-area" style={{ padding: "50px 0px" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12" style={{ paddingRight: "50px" }}>
                            <div className="about-content p-0">
                                <h2>Waste management</h2>
                                <p style={{ fontSize: "16px" }}>
                                    We have installed an efficient Sewage Treatment Plant (STP) which can process 15,000 litres of sewage water and the treated water is reused for irrigation within our premises. In addition to the ETP and STP, we also have a biogas plant that converts vegetable and organic waste into cooking gas.
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
    )
}

export default WasteManagement