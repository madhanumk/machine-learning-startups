import React from "react";
import Link from "next/link";

const AboutContent = () => {
  return (
    <>
      <div className="about-area" style={{padding:"50px 0px"}}>
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="about-content">
                <h2>About Us</h2>
                <p style={{ fontSize: "16px" }}>
                  Since its inception in 1983, BKS Textiles has come a long way from producing fabrics on
                  handlooms to a vertically integrated facility from yarn dyeing and weaving to finishing, we
                  pride ourselves on offering a wide range of premium quality products to our customers.
                  Our range of workwear apparel is perfect for corporate uniforms and industrial wears,
                  while our home textiles (Hospitality/ Institutional Linen) provide a touch of elegance to the
                  hospitality sector.
                </p>

                <Link href="/about" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              {/* <div className="about-image"> */}
              {/* <img src="/images/about/1.jpg" alt="image" /> */}
              <img src="/images/about/1.jpg" alt="image" style={{ width: "100%" }} />
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* <div className="shape-img1">
          <img src="/images/shape/1.png" alt="image" />
        </div> */}
        {/* <div className="shape-img2">
          <img src="/images/shape/2.svg" alt="image" />
        </div> */}
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
        {/* <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div> */}
        <div className="dot-shape2">
          <img src="/images/shape/4.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AboutContent;
