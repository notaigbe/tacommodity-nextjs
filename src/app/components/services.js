import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Core Values</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon">
              <i className="bi bi-chat-left-dots"></i>
            </div>
            <h4 className="title">
              <a href="">Development</a>
            </h4>
            <p className="description">
              We believe that our smallholder farmers who deliver our farm
              produce be trained and developed into commercial farmers over a
              period of time.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon">
              <i className="bi bi-bounding-box"></i>
            </div>
            <h4 className="title">
              <a href="">Innovation</a>
            </h4>
            <p className="description">
              We grow with our farmers through innovation, training and
              application of technology in smallholder farm development.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon">
              <i className="bi bi-globe"></i>
            </div>
            <h4 className="title">
              <a href="">Integrity</a>
            </h4>
            <p className="description">
              We integrate honesty, integrity and business ethics into all
              aspects of our smallholder farm development business to attract
              more prospective farmers into our various farm projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
