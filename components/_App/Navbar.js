import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="evolta-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img
                  src="/images/BKS-logo-white.png"
                  alt="logo"
                  className="main-logo" style={{ width: "200px" }}
                />
                <img
                  src="/images/BKS-logo.png"
                  alt="logo"
                  className="optional-logo" style={{ width: "200px" }}
                />
              </Link>

              {/* Toggle navigation */}
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      About Us <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/about/"
                          className={`nav-link ${currentPath == "/about/" && "active"
                            }`}
                        >
                          About Us
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/team"
                          className={`nav-link ${currentPath == "/team/" && "active"
                            }`}
                        >
                          Team
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="#" className="nav-link">
                          Services
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/services"
                              className={`nav-link ${currentPath == "/services/" && "active"
                                }`}
                            >
                              Services
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/single-services"
                              className={`nav-link ${currentPath == "/single-services/" && "active"
                                }`}
                            >
                              Services Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="#" className="nav-link">
                          Shop
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/shop"
                              className={`nav-link ${currentPath == "/shop/" && "active"
                                }`}
                            >
                              Shop
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/product-details"
                              className={`nav-link ${currentPath == "/product-details/" && "active"
                                }`}
                            >
                              Single Products
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/cart"
                              className={`nav-link ${currentPath == "/cart/" && "active"
                                }`}
                            >
                              Cart
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/checkout"
                              className={`nav-link ${currentPath == "/checkout/" && "active"
                                }`}
                            >
                              Checkout
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="#" className="nav-link">
                          Blog
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/blog"
                              className={`nav-link ${currentPath == "/blog/" && "active"
                                }`}
                            >
                              Blog
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/blog-details"
                              className={`nav-link ${currentPath == "/blog-details/" && "active"
                                }`}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/404"
                          className={`nav-link ${currentPath == "/404/" && "active"
                            }`}
                        >
                          404 Error
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/coming-soon"
                          className={`nav-link ${currentPath == "/coming-soon/" && "active"
                            }`}
                        >
                          Coming Soon
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/faq"
                          className={`nav-link ${currentPath == "/faq/" && "active"
                            }`}
                        >
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      Why BKS Services <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/why-bks"
                          className={`nav-link ${currentPath == "/why-bks/" && "active"
                            }`}
                        >
                          Why BKS Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/research-develeopment/"
                          className={`nav-link ${currentPath == "/research-develeopment/" && "active"
                            }`}
                        >
                          R & D
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/quality-practices"
                          className={`nav-link ${currentPath == "//quality-practices/" && "active"
                            }`}
                        >
                          Quality Practices
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/sustainability"
                          className={`nav-link ${currentPath == "/sustainability/" && "active"
                            }`}
                        >
                          Sustainability
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      Infrastructure <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/infrastructure"
                          className={`nav-link ${currentPath == "/infrastructure/" && "active"
                            }`}
                        >
                          Infrastructure
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/product-details"
                          className={`nav-link ${currentPath == "/product-details/" && "active"
                            }`}
                        >
                          Single Products
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/cart"
                          className={`nav-link ${currentPath == "/cart/" && "active"
                            }`}
                        >
                          Cart
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/checkout"
                          className={`nav-link ${currentPath == "/checkout/" && "active"
                            }`}
                        >
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      Products <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/services"
                          className={`nav-link ${currentPath == "/services/" && "active"
                            }`}
                        >
                          Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/single-services"
                          className={`nav-link ${currentPath == "/single-services/" && "active"
                            }`}
                        >
                          Services Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  

                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      Sustainability <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog"
                          className={`nav-link ${currentPath == "/blog/" && "active"
                            }`}
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/blog-details"
                          className={`nav-link ${currentPath == "/blog-details/" && "active"
                            }`}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/pricing"
                      className={`nav-link ${currentPath == "/pricing/" && "active"
                        }`}
                    >
                      CSR
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/career"
                      className={`nav-link ${currentPath == "/contact/" && "active"
                        }`}
                    >
                      Career
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/contact"
                      className={`nav-link ${currentPath == "/contact/" && "active"
                        }`}
                    >
                      Contact
                    </Link>
                  </li>

                </ul>
              </div>

              {/* <div className="others-options">
                <Link href="/cart" className="cart-btn">
                  <i className="flaticon-commerce-and-shopping"></i>
                </Link>

                <div className="option-item">
                  <i
                    className="search-btn fas fa-search"
                    onClick={handleToggleSearchModal}
                  ></i>
                </div>

                <Link href="#" className="btn btn-primary">
                  Schedule a Demo
                </Link>
              </div> */}
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"
          }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="bx bx-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}
    </>
  );
};

export default Navbar;
