import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import Link from "next/link";
import { useEffect } from "react";
// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"
import Script from "next/script";
import { TypeH1 } from "react-bootstrap-icons";
export default function Hero() {
    // const swiper = new Swiper(".swiper-container", {
    //     modules: [Navigation, Pagination],
    //   });
    useEffect(() => {
      if (typeof window !== "undefined") {
        import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
          const carousel = document.querySelector("#heroCarousel");
          if (carousel) {
            new bootstrap.Carousel(carousel, {
              interval: 5000, // Auto-slide every 5 seconds
              ride: "carousel",
              pause: "hover",
              wrap: true,
            });
          }
        });
      }
    }, []);
  return (
    <section id="hero">
      <div className="hero-container">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

          <div className="carousel-inner" role="listbox">
            {/* Slide 1 */}
            <div className="carousel-item active" style={{ backgroundImage: "url('/assets/img/slide/oilpalm1.jpg')" }}>
              <div className="carousel-container">
                <div className="carousel-content container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Welcome to <span>TA Commodity Producers (Nig) Ltd</span>
                  </h2>
                  <h1 className="animate__animated animate__fadeInUp text-light">
                    We develop farms for smallholder farmers; provide finance, trainings, and seedlings with other farm inputs.
                  </h1>
                  <Link href="https://farmfresh.onrender.com" className="btn-get-started animate__animated animate__fadeInUp scrollto">
                    Shop <i className="bx bx-cart bx-fade-right bx-flip-horizontal"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item" style={{ backgroundImage: "url('/assets/img/slide/maize-farming.jpg')" }}>
              <div className="carousel-container">
                <div className="carousel-content container">
                  <h2 className="animate__animated animate__fadeInDown">Providing access to finance</h2>
                  <h1 className="animate__animated animate__fadeInUp text-light">
                    We develop farmers that lack access to financing through the combination of capacity building and provision of finance
                    with other farm inputs by bringing them into various associations and cooperatives.
                  </h1>
                  <Link href="https://farmfresh.onrender.com" className="btn-get-started animate__animated animate__fadeInUp scrollto">
                    Shop <i className="bx bx-cart bx-fade-right bx-flip-horizontal"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item" style={{ backgroundImage: "url('/assets/img/slide/palm_plantation.jpg')" }}>
              <div className="carousel-container">
                <div className="carousel-content container">
                  <h2 className="animate__animated animate__fadeInDown">Providing access to market</h2>
                  <h1 className="animate__animated animate__fadeInUp text-light">
                    Create access to market through the aggregation of their farm produce and make them traceable to consumers.
                  </h1>
                  <Link href="https://farmfresh.onrender.com" className="btn-get-started animate__animated animate__fadeInUp scrollto">
                    Shop <i className="bx bx-cart bx-fade-right bx-flip-horizontal"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

<Script src="assets/js/main.js" />