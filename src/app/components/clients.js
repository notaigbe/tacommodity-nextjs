import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import Image from "next/image";

export default function Clients() {
  return (
    <section id="clients" className="clients section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image
              src="/assets/img/partners/2gareni.jpg"
              className="img-fluid"
              alt=""
              height={500}
              width={500}
              style={{ height: "auto", width: "100%" }}
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image
              src="/assets/img/partners/alvanblanch.jpg"
              className="img-fluid"
              alt=""
              height={500}
              width={500}
              style={{ height: "auto", width: "100%" }}
            />
          </div>

          {/* <!--div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="{% static 'assets/img/partners/ambrosealli.jpg' %}" className="img-fluid" alt="">
          </div--> */}

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image
              src="/assets/img/partners/FMN.jpg"
              className="img-fluid"
              alt=""
              height={500}
              width={500}
              style={{ height: "auto", width: "100%" }}
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image
              src="/assets/img/partners/okomu.jpg"
              className="img-fluid"
              alt=""
              height={500}
              width={500}
              style={{ height: "auto", width: "100%" }}
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image
              src="/assets/img/partners/PWC.jpg"
              className="img-fluid"
              alt=""
              height={500}
              width={500}
              style={{ height: "auto", width: "100%" }}
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image
              src="/assets/img/partners/terraagric.jpg"
              className="img-fluid"
              alt=""
              height={500}
              width={500}
              style={{ height: "auto", width: "100%" }}
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image
              src="/assets/img/partners/wacapol.jpg"
              className="img-fluid"
              alt=""
              height={500}
              width={500}
              style={{ height: "auto", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
