import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import Image from "next/image";

export function TACommodityContact() {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact Us</h2>
        </div>

        <div className="row">
          <div className="col-lg-6 d-flex" data-aos="fade-up">
            <div className="info-box">
              <i className="bx bx-map"></i>
              <h3>Our Address</h3>
              <div className="row">
                <div className="col">
                  <h6>Lagos Office</h6>
                  <p>
                    Terra Agrarisch Limited Alfred Rewane Road, Ikoyi - Lagos,
                    Nigeria
                  </p>
                </div>
                <div className="col">
                  <h6>Port Harcourt Office</h6>
                  <p>
                    14 Tony Avenue, off NTA Road, behind Logos Ministries, Port
                    Harcourt, Rivers State.
                  </p>
                </div>
                <div className="col">
                  <h6>Benin Office</h6>
                  <p>
                    2nd Floor, 71 Mission Road, Benin City, Benin City, Edo
                    State.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="info-box">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>
                <a href="mailto:info@tacommodity.com ">info@tacommodity.com</a>
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 d-flex"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="info-box ">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>
                <a href="tel:+2348026031639">+234 802 603 1639</a>
              </p>
            </div>
          </div>

          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
            <div className="section-title">
              <h2>Get a Quick Quote</h2>
            </div>
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              {/* {% csrf_token %} */}
              <div className="row">
                <div className="col-lg-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-lg-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <input
                type="email"
                className="form-control"
                name="contact_email"
                id="contact_email"
                placeholder="Your Email"
                hidden="hidden"
                defaultValue="info@tacommodity.com"
              />
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


export function PHAGROContact() {
    return (
        <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Contact Us</h2>
          </div>
  
          <div className="row">
  
            <div className="col-lg-6 d-flex" data-aos="fade-up">
              <div className="info-box">
                <i className="bx bx-map"></i>
                <h3>Our Address</h3>
                <div className="row">
                   <div className="col">
                    <p>14 Tony Avenue, off NTA Road, behind Logos Ministries, Port Harcourt, Rivers State.</p>
                  </div>
                  </div>
              </div>
            </div>
  
            <div className="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="info-box">
                <i className="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p><a href="mailto:phagrompc@tacommodity.com ">phagrompc@tacommodity.com</a></p>
              </div>
            </div>
  
            <div className="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="info-box ">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p><a href="tel:+2348026031639">+234 902 162 8802</a></p>
              </div>
            </div>
  
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="section-title">
                <h2>Get a Quick Quote</h2>
              </div>
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                {/* {% csrf_token %} */}
                <div className="row">
                  <div className="col-lg-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                  </div>
                  <div className="col-lg-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                </div>
                <input type="email" className="form-control" name="contact_email" id="contact_email" placeholder="Your Email" hidden="hidden" value="info@tacommodity.com"/>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit" style={{background:"#5295CE"}}>Send Message</button></div>
              </form>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  