import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"
export default function Hero() {
    // const swiper = new Swiper(".swiper-container", {
    //     modules: [Navigation, Pagination],
    //   });
  return (
    <section id="hero">
      <div className={"hero-container"}>
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <ol
            className="carousel-indicators"
            id="hero-carousel-indicators"
          ></ol>

          <div className="carousel-inner" role="listbox">
            {/* <!-- Slide 1 --> */}
            <div
              className="carousel-item active"
              style={{ backgroundImage: "url(assets/img/slide/oilpalm1.jpg)" }}
            >
              <div className="carousel-container">
                <div className="carousel-content container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Welcome to <span>TA Commodity Producers (Nig) Ltd</span>
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    We develop farms for smallholder farmers; provide finance,
                    trainings and seedlings with other farm inputs.
                  </p>
                  <a
                    href="{% url 'farmfresh' %}"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Shop
                    <i className="bx bx-cart bx-fade-right bx-flip-horizontal"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Slide 2 --> */}
            <div
              className="carousel-item"
              style={{
                backgroundImage: "url(assets/img/slide/maize-farming.jpg')",
              }}
            >
              <div className="carousel-container">
                <div className="carousel-content container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Providing access to finance
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    We develop farmers that lack access to financing through the
                    combination of capacity building and provision of finance
                    with other farm inputs by bringing them into various
                    associations and cooperatives.
                  </p>
                  <a
                    href="{% url 'farmfresh' %}"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Shop
                    <i className="bx bx-cart bx-fade-right bx-flip-horizontal"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Slide 3 --> */}
            <div
              className="carousel-item"
              style={{
                backgroundImage: "url(assets/img/slide/palm_plantation.jpg)",
              }}
            >
              <div className="carousel-container">
                <div className="carousel-content container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Providing access to market
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    Create access to market through the aggregation of their
                    farm produce and make them traceable to consumers.
                  </p>
                  <a
                    href="{% url 'farmfresh' %}"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Shop
                    <i className="bx bx-cart bx-fade-right bx-flip-horizontal"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </a>
          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </div>
    </section>
  );
}
