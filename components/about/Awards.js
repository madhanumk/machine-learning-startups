import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const Awards = () => {
    // To open the lightbox change the value of the "toggler" prop.
    const [toggler, setToggler] = useState(false);

    return (
        <>
            {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      /> */}

            <div className="webinar-area" style={{ backgroundColor: "rgb(255 244 231)" }}>
                <div className="row m-0" style={{padding: "50px 0px 50px 50px"}}>
                    <div className="col-lg-6 p-0" >
                        <img src="/images/planet.jpg" alt="images" />
                    </div>

                    <div className="col-lg-6 p-0" style={{ display: "flex", alignContent: "center" }}>
                        <div className="webinar-content" >
                            <h2>Awards</h2>
                            <p style={{ fontSize: "16px" }}>
                                Our unparalleled commitment to quality, sustainability, and customer delight are,raising us
                                to the boundaries of what is possible, driven by our passion for creating top-of-the- textile
                                solutions.
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

export default Awards;
