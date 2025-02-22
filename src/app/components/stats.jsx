import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";

import "../styles/style.css";
import Image from "next/image";
import Link from "next/link";
export default function Stats() {
  
  return (
    // <!-- ======= Counts Section ======= -->
    <section className="counts section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up">
            <div className="count-box">
              <i
                className="bi bi-simple-smile"
                style={{ color: "#20b38e;" }}
              ></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              ><CountUp end={232} duration={1}></CountUp></span>
              <p>Women Entrepreneurs Trained</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="count-box">
              <i className="bi bi-document-folder" style={{color: "#c042ff;"}}></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                className="purecounter"
              ><CountUp end={521} duration={1}></CountUp></span>
              <p>Women-Led Businesses Funded</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="count-box">
              <i className="bi bi-live-support" style={{color: "#46d1ff;"}}></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="1463"
                data-purecounter-duration="1"
                className="purecounter"
              ><CountUp end={1463} duration={1}></CountUp></span>
              <p>Smallholder Farmers Supported</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="count-box">
              <i className="bi bi-users-alt-5" style={{color: "#ffb459;"}}></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="15"
                data-purecounter-duration="1"
                className="purecounter"
              ><CountUp end={15} duration={1}></CountUp></span>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- End Counts Section -->
  );
}
