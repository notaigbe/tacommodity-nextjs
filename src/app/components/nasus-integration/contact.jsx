export default function Contact() {
    return (
        <section id="contact" className="contact section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Give us a call, email us, walk into our office. We are available for your business needs.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="info-box mb-4">
                            <i className="bx bx-map"></i>
                            <h3>Our Address</h3>
                            <p>No. 14, Farm Road, Off Ada George Road,
                                Port Harcourt, Rivers State</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="info-box mb-4">
                            <i className="bx bx-envelope"></i>
                            <h3>Email Us</h3>
                            <p><a href="mailto:nasus582002@yahoo.com">nasus582002@yahoo.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="info-box mb-4">
                            <i className="bx bx-phone-call"></i>
                            <h3>Call Us</h3>
                            <p><a href="tel:+2348055068582">+234 805 506 8582</a></p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* <div className="col-lg-6">
                        <iframe
                            className="mb-4 mb-lg-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.4372675008913!2d6.963283114450517!3d4.866166296466636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d1d2ebfaa1b3%3A0xcba82aceaacd43d!2sMgbouba%2FNta+Road%2C+Port+Harcourt!5e0!3m2!1sen!2sng!4v1478196797801"
                            frameBorder="0"
                            style={{ border: 0, width: "100%", height: "384px" }}
                            allowFullScreen
                        ></iframe>
                    </div> */}

                    <div className="col-lg-12">
                        <form action="/#contact" method="post" role="form" className="php-email-form" id="contactform">
                            {/* {% csrf_token %} */}
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <input type="email" className="form-control" name="contact_email" id="contact_email" placeholder="Your Email" hidden="hidden" value="info@troikainvestmentng.com" />
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}