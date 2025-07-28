import Image from 'next/image';

export default function Footer(){
    return(

        <>
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              {/* <!--h3>Troika</h3--> */}
              <a href="/nasus-integration"><img src="assets/nasus-integration/img/logo.png" alt="" className="img-fluid"/></a>
              <hr/>
              <p className="pb-3"><em>Contact details.</em></p>
              <p>
                No. 14, Farm Road, Off Ada George Road  <br/>
                Port Harcourt, Rivers State<br/><br/>
                <strong>Phone:</strong> <a href="tel:+2348055068582">+234 805 506 8582</a><br/>
                <strong>Email:</strong> <a href="mailto:nasus582002@yahoo.com">nasus582002@yahoo.com</a><br/>
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#home">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#projects">Projects</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#team">Team</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Construction Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Logistics Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Engineering & Technical Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Procurement Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Vehicle Leasing</a></li>
            </ul>
          </div>

          {/* <div className="col-lg-3 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>

          </div> */}

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Nasus</span></strong> {new Date().getFullYear()}. All Rights Reserved
      </div>
      <div className="credits">
        {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/squadfree-free-bootstrap-template-creative/ --> */}
        Powered by <a href="https://resume.gnotable.org.ng/">Gnotable Technologies</a> <br/>
        Template by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>

  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  </>
  );
  }
