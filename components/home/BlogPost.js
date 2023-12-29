import React from "react";
import Link from "next/link";

const BlogPost = () => {
  return (
    <>
      <div className="blog-area" style={{padding:"50px 0px"}}>
        <div className="container">
          <div className="section-title">
            <h2>Infrastructure</h2>
            <p  style={{fontSize:"16px"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail" style={{ display: "flex", justifyContent: "center" }}>
                  <Link href="/blog-details">
                    <img src="/images/blog/1.png" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content"  style={{textAlign:"center"}}>
                  {/* <div className="entry-meta">
                    <ul>
                      <li>
                        <a href="#">Admin</a>
                      </li>
                      <li>August 15, 2020</li>
                    </ul>
                  </div> */}

                  <h3>
                    <Link href="/blog-details">
                    Yarn Dyeing
                    </Link>
                  </h3>
                  <p  style={{fontSize:"16px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  {/* <Link href="/blog-details" className="learn-more-btn">
                    Read Story <i className="flaticon-add"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail" style={{ display: "flex", justifyContent: "center" }}>
                  <Link href="/blog-details">
                    <img src="/images/blog/2.png" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content"  style={{textAlign:"center"}}>
                  {/* <div className="entry-meta">
                    <ul>
                      <li>
                        <a href="#">Admin</a>
                      </li>
                      <li>August 18, 2020</li>
                    </ul>
                  </div> */}

                  <h3>
                    <Link href="/blog-details">
                      Weaving Preparatory
                    </Link>
                  </h3>
                  <p  style={{fontSize:"16px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  {/* <Link href="/blog-details" className="learn-more-btn">
                    Read Story <i className="flaticon-add"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-blog-post" >
                <div className="entry-thumbnail" style={{ display: "flex", justifyContent: "center" }}>
                  <Link href="/blog-details">
                    <img src="/images/blog/3.png" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content"  style={{textAlign:"center"}}>
                  {/* <div className="entry-meta">
                    <ul>
                      <li>
                        <a href="#">Admin</a>
                      </li>
                      <li>August 15, 2020</li>
                    </ul>
                  </div> */}

                  <h3>
                    <Link href="/blog-details">
                      Weaving
                    </Link>
                  </h3>
                  <p  style={{fontSize:"16px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  {/* <Link href="/blog-details" className="learn-more-btn">
                    Read Story <i className="flaticon-add"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-blog-post" >
                <div className="entry-thumbnail" style={{ display: "flex", justifyContent: "center" }}>
                  <Link href="/blog-details">
                    <img src="/images/blog/4.png" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content" style={{textAlign:"center"}}>
                  {/* <div className="entry-meta">
                    <ul>
                      <li>
                        <a href="#">Admin</a>
                      </li>
                      <li>August 15, 2020</li>
                    </ul>
                  </div> */}

                  <h3>
                    <Link href="/blog-details">
                      Bleaching and Dyeing
                    </Link>
                  </h3>
                  <p  style={{fontSize:"16px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  {/* <Link href="/blog-details" className="learn-more-btn">
                    Read Story <i className="flaticon-add"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>



          {/* row 2 */}

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail" style={{ display: "flex", justifyContent: "center" }}>
                  <Link href="/blog-details">
                    <img src="/images/blog/1.png" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content"  style={{textAlign:"center"}}>
                  {/* <div className="entry-meta">
                    <ul>
                      <li>
                        <a href="#">Admin</a>
                      </li>
                      <li>August 15, 2020</li>
                    </ul>
                  </div> */}

                  <h3>
                    <Link href="/blog-details">
                     Printing
                    </Link>
                  </h3>
                  <p  style={{fontSize:"16px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  {/* <Link href="/blog-details" className="learn-more-btn">
                    Read Story <i className="flaticon-add"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail" style={{ display: "flex", justifyContent: "center" }}>
                  <Link href="/blog-details">
                    <img src="/images/blog/2.png" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content"  style={{textAlign:"center"}}>
                  {/* <div className="entry-meta">
                    <ul>
                      <li>
                        <a href="#">Admin</a>
                      </li>
                      <li>August 18, 2020</li>
                    </ul>
                  </div> */}

                  <h3>
                    <Link href="/blog-details">
                      Coating
                    </Link>
                  </h3>
                  <p  style={{fontSize:"16px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>
{/* 
                  <Link href="/blog-details" className="learn-more-btn">
                    Read Story <i className="flaticon-add"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-blog-post" >
                <div className="entry-thumbnail" style={{ display: "flex", justifyContent: "center" }}>
                  <Link href="/blog-details">
                    <img src="/images/blog/3.png" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content"  style={{textAlign:"center"}}>
                  {/* <div className="entry-meta">
                    <ul>
                      <li>
                        <a href="#">Admin</a>
                      </li>
                      <li>August 15, 2020</li>
                    </ul>
                  </div> */}

                  <h3>
                    <Link href="/blog-details">
                     Sewing
                    </Link>
                  </h3>
                  <p  style={{fontSize:"16px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  {/* <Link href="/blog-details" className="learn-more-btn">
                    Read Story <i className="flaticon-add"></i>
                  </Link> */}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* shape images */}
        <div className="shape-img2">
          <img src="/images/shape/1.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/5.png" alt="image" />
        </div>
        {/* <div className="shape-img4">
          <img src="/images/shape/4.svg" alt="image" />
        </div> */}
        {/* <div className="shape-img5">
          <img src="/images/shape/5.svg" alt="image" />
        </div> */}
        <div className="shape-img7">
          <img src="/images/shape/3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/4.png" alt="image" />
        </div>
        {/* <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape4">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape5">
          <img src="/images/shape/dot5.png" alt="image" />
        </div> */}
        <div className="dot-shape6">
          <img src="/images/shape/4.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
