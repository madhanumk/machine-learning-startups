import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const Banner = () => {
  return (
    <>
      <div style={{position:"relative"}}>
        <Swiper
          // slidesPerView={1}
          // pagination={{
          //   clickable: true,
          // }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div
              className="main-banner"
              style={{ backgroundImage: `url(/images/main-banner.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container-fluid">
                    <div className="main-banner-content">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                      >
                        World’s Leading Machine Learning Company
                      </h1>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1200"
                      >
                        ML today are able to supply needful of help, information, and
                        positive experience of maintaining intimacy with customers.
                        Eventually, chatbot ideas bring a pleasant experience of all
                        these qualities into the conversation.
                      </p>

                      <div
                        className="btn-box"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1200"
                      >
                        <Link href="/contact" className="btn btn-primary">
                          Schedule a Demo
                        </Link>
                        <Link href="/contact" className="optional-btn">
                          Get Started Free
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="main-banner"
              style={{ backgroundImage: `url(/images/main-banner.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container-fluid">
                    <div className="main-banner-content">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                      >
                        World’s Leading Machine Learning Company
                      </h1>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1200"
                      >
                        ML today are able to supply needful of help, information, and
                        positive experience of maintaining intimacy with customers.
                        Eventually, chatbot ideas bring a pleasant experience of all
                        these qualities into the conversation.
                      </p>

                      <div
                        className="btn-box"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1200"
                      >
                        <Link href="/contact" className="btn btn-primary">
                          Schedule a Demo
                        </Link>
                        <Link href="/contact" className="optional-btn">
                          Get Started Free
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="main-banner"
              style={{ backgroundImage: `url(/images/main-banner.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container-fluid">
                    <div className="main-banner-content">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                      >
                        World’s Leading Machine Learning Company
                      </h1>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1200"
                      >
                        ML today are able to supply needful of help, information, and
                        positive experience of maintaining intimacy with customers.
                        Eventually, chatbot ideas bring a pleasant experience of all
                        these qualities into the conversation.
                      </p>

                      <div
                        className="btn-box"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1200"
                      >
                        <Link href="/contact" className="btn btn-primary">
                          Schedule a Demo
                        </Link>
                        <Link href="/contact" className="optional-btn">
                          Get Started Free
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Navigation arrows */}
          <div className="swiper-button-next" style={{ backgroundColor: "white", padding: "27px 26px", color: "black", position:"absolute", bottom:"0px" }}></div>
          <div className="swiper-button-prev" style={{ backgroundColor: "white", padding: "27px 26px", color: "black" }}></div>
        </Swiper>
      </div>

    </>
  );
};

export default Banner;
