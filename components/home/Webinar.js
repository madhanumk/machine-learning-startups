import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const Webinar = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      /> */}

      <div className="webinar-area" style={{backgroundImage:`url('/images/csr-bg.jpg')`, backgroundSize:"cover"}}>
        <div className="row m-0">
          <div className="col-lg-6 p-0" style={{display:"flex"}}>
            {/* <div className="webinar-video-image">
              <img src="/images/planet.jpg" alt="image" />
              <div className="video-btn" onClick={() => setToggler(!toggler)}>
                <i className="flaticon-play-button"></i>
              </div>
            </div> */}
            <img src="/images/planet.jpg" alt="images" />
          </div>

          <div className="col-lg-6 p-0" style={{ display:"flex", alignContent:"center"}}>
            <div className="webinar-content" >
              <h2>Corporate Social <br/>Responsibility</h2>
              <p  style={{fontSize:"16px"}}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage.
              </p>

              <Link href="#" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinar;
