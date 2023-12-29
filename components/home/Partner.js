import React from "react";

const Partner = () => {
  return (
    <>
      <div className="partner-area" style={{ backgroundColor: "white", padding:"50px" }}>
        <div className="container">
          <div className="section-title">
            <h2>Certifications</h2>
            <p style={{ fontSize: "16px" }}>
              BKS Textiles is accredited with the following certifications by various certifying bodies for
              our adherence to domestic and international regulations
            </p>
          </div>

          <div className="customers-partner-list" >
            <div className="partner-item" >
              <a href="#" target="_blank">
                <img src="/images/partner/1.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/2.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/3.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/4.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/5.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/6.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/7.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/8.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/9.png" alt="image" />
              </a>
            </div>
          </div>
        </div>

        {/* shape images */}
        <div className="shape-img2">
          <img src="/images/shape/4.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/5.png" alt="image" />
        </div>
        <div className="shape-img7">
          <img src="/images/shape/5.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/4.png" alt="image" />
        </div>

        {/* <div className="dot-shape6">
          <img src="/images/shape/4.png" alt="image" />
        </div> */}
      </div>
    </>
  );
};

export default Partner;
