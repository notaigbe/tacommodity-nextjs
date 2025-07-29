import Image from 'next/image';

function Team() {
    return (
        <section id="team" className="team">
            <div className="container">

                <div className="section-title" data-aos="fade-in" data-aos-delay="100">
                    <h2>Our Team</h2>
                    <p>
          Our structure is designed to <strong>ensure agility, quality, and accountability</strong> across all projects and service areas. Each department is led by experienced professionals with clear roles and responsibilities.
        </p>
                </div>

                <div className="row">

                    {/* <div className="col-lg-4 col-md-6">
                        <div className="member" data-aos="fade-up">
                            <div className="pic">
                                <Image 
                                    src="/assets/nasus-integration/img/team/busdev-3.jpg" 
                                    className="img-fluid" 
                                    alt="" 
                                    width={500} 
                                    height={500} 
                                />
                            </div>
                            <div className="member-info">
                                <h4><a href="tel:+2348051433509">+234 805 143 3509</a></h4>
                                <span><a href="mailto:busdev@troikainvestmentng.com">busdev@troikainvestmentng.com</a></span>
                                <div className="social">
                                    <a href="https://www.twitter.com/"><i className="bi bi-twitter"></i></a>
                                    <a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
                                    <a href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-lg-4 col-md-6">
                        <div className="member" data-aos="fade-up" data-aos-delay="150">
                            <div className="pic">
                                <Image 
                                    src="/assets/nasus-integration/img/team/enquiries-1.jpg" 
                                    className="img-fluid" 
                                    alt="" 
                                    width={500} 
                                    height={500} 
                                />
                            </div>
                            <div className="member-info">
                                <h4><a href="tel:+2348055068582">+234 805 506 8582</a></h4>
                                <span><a href="mailto:nasus582002@yahoo.com">nasus582002@yahoo.com</a></span>
                                <div className="social">
                                    <a href="https://www.twitter.com/"><i className="bi bi-twitter"></i></a>
                                    <a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
                                    <a href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                        
            </div>
        </section>
    );
}

export default Team;