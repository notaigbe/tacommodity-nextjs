
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export function TACommodityFooter() {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-info">
              <h3>TA Commodity</h3>
              <Link href="/">
                <Image
                  src="/assets/img/ta_logo.jpg"
                  alt="ta_logo"
                  className="img-fluid shadow rounded"
                  height={500}
                  width={500}
                  style={{ width: "50%", height: "auto" }}
                />
              </Link>
              <p>
                TERRA AGRARISCH LIMITED OFFICE
                <br />
                39 Alfred Rewane Road, <br />
                Ikoyi - Lagos, Nigeria
                <br />
                <br />
                <strong>Phone:</strong>{" "}
                <a href="tel:+2348026031639" className="text-white">
                  +234 802 603 1639
                </a>
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:info@tacommodity.com " className="text-white">
                  info@tacommodity.com
                </a>
                <br />
              </p>
              <div className="social-links mt-3">
                <a href="https://twitter.com/farm_own" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="https://facebook.com/tacommodity" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href="https://instagram.com/tacommodity"
                  className="instagram"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://youtube.com/@tacommodity" className="youtube">
                  <i className="bx bxl-youtube"></i>
                </a>
                <a
                  href="https://linkedin.com/company/assist-smallholder-farmers/"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/#hero">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/#about">About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/#services">Core Value</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/#what-we-do">What we Do</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/#portfolio">NGO Support</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/#team">Our Professional Team</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/#contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* <!--div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div--> */}

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter</p>
              <form action="" method="post">
                <input type="email" name="email" />

                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>TA Commodity</span>
          </strong>{" "}
          <span id="current-year">{year}</span>. All Rights Reserved
        </div>
        <div className="credits">
          {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/ --> */}
          Powered by{" "}
          <a href="https://www.gnotable.ng/">
            Gnotable Technologies. www.gnotable.ng
          </a>
          {/* <!--        Template by <a href="https://bootstrapmade.com/">BootstrapMade</a>--> */}
        </div>
      </div>
    </footer>
  );
}

export function PHAGROFooter() {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <footer id="footer" style={{ background: "#587187" }}>
      <div className="footer-top" style={{ background: "#5c768d" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-info">
              <h3>PHAGRO</h3>
              <a href="#">
                <Image
                  src="/assets/img/phagro_logo.jpg"
                  alt="ta_logo"
                  className="img-fluid shadow rounded"
                  width={500}
                  height={500}
                  style={{ width: "50%", height: "auto" }}
                />
              </a>
              <p>
                Port Harcourt Agro Commodity Multipurpose Co-Operative Society
                Limited
                </p>
                <hr />
                A Subsidiary of TA Commodity
                <br />
                <hr/>
                14 Tony Avenue, off NTA Road, Mgbuoba, <br />
                Port Harcourt - Rivers State, Nigeria
                <br />
                <br />
                <strong>Phone:</strong>{" "}
                <a href="tel:+2349031628802 " className="text-white">
                  +234 903 162 8802{" "}
                </a>
                <br />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:phagrocooperativeltd@gmail.com "
                  className="text-white"
                >
                  phagrompc@tacommodity.com
                </a>
                
              
              <div className="social-links mt-3">
                <a
                  href="https://twitter.com/farm_own"
                  className="twitter"
                  style={{background:"#768fa6"}}
                >
                  <i className="bx bxl-twitter"></i>
                </a>
                <a
                  href="https://facebook.com/tacommodity"
                  className="facebook"
                  style={{background:"#768fa6"}}
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href="https://instagram.com/tacommodity"
                  className="instagram"
                  style={{background:"#768fa6"}}
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://youtube.com/@tacommodity"
                  className="youtube"
                  style={{background:"#768fa6"}}
                >
                  <i className="bx bxl-youtube"></i>
                </a>
                <a
                  href="https://linkedin.com/company/assist-smallholder-farmers/"
                  className="linkedin"
                  style={{background:"#768fa6"}}
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/#hero">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/#about">About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/#services">Core Value</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/#what-we-do">What we Do</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/#portfolio">NGO Support</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/#team">Our Professional Team</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/#contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* <!--div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div--> */}

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input
                  type="submit"
                  defaultValue="Subscribe"
                  style={{background:"#428bca"}}
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>TA Commodity</span>
          </strong>{" "}
          <span id="current-year">{year}</span>. All Rights Reserved
        </div>
        <div className="credits">
          {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/ --> */}
          Powered by{" "}
          <a href="https://www.gnotable.ng/">
            Gnotable Technologies. www.gnotable.ng
          </a>
          {/* <!--        Template by <a href="https://bootstrapmade.com/">BootstrapMade</a>--> */}
        </div>
      </div>
    </footer>
  );
}
