import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import Image from "next/image";

export default function AboutList() {
  return (
    <section className="about-lists">
      <div className="container">
        <div className="row no-gutters justify-content-center">
          <div
            className="col-lg-4 col-md-6 content-item"
            data-aos="fade-up"
            style={{ backgroundImage: "url(/assets/img/cereals.jpg)" }}
          >
            <span>01</span>
            <hr />
            <h4 className="bg-light bg-opacity-50 text-center">Cereals</h4>
            <hr />
            {/* <!--p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p--> */}
          </div>

          <div
            className="col-lg-4 col-md-6 content-item"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ backgroundImage: "url(/assets/img/roots-and-tubers.jpg)" }}
          >
            <span>02</span>
            <hr />
            <h4 className="bg-light bg-opacity-50 text-center">
              Roots and Tubers
            </h4>
            <hr />
            {/* <!--p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p--> */}
          </div>

          <div
            className="col-lg-4 col-md-6 content-item"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ backgroundImage: "url(/assets/img/oil-palm-farming.webp)" }}
          >
            <span>03</span>
            <hr />
            <h4 className="bg-light bg-opacity-50 text-center">Tree Crops</h4>
            <hr />
            {/* <!--p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p--> */}
          </div>

          <div
            className="col-lg-4 col-md-6 content-item"
            data-aos="fade-up"
            data-aos-delay="300"
            style={{ backgroundImage: "url(/assets/img/legumes.jpg)" }}
          >
            <span>04</span>
            <hr />
            <h4 className="bg-light bg-opacity-50 text-center">Legumes</h4>
            <hr />
            {/* <!--p>Inventore quo sint a sint rerum. Distinctio blanditiis deserunt quod soluta quod nam mider lando casa</p--> */}
          </div>

          <div
            className="col-lg-4 col-md-6 content-item"
            data-aos="fade-up"
            data-aos-delay="400"
            style={{ backgroundImage: "url(/assets/img/vegetables.jpg)" }}
          >
            <span>05</span>
            <hr />
            <h4 className="bg-light bg-opacity-50 text-center">Vegetables</h4>
            <hr />
            {/* <!--p>Vitae dolorem in deleniti ipsum omnis tempore voluptatem. Qui possimus est repellendus est quibusdam</p--> */}
          </div>

          <div
            className="col-lg-4 col-md-6 content-item"
            data-aos="fade-up"
            data-aos-delay="500"
            style={{ backgroundImage: "url(/assets/img/livestock.jpg)" }}
          >
            <span>06</span>
            <hr />
            <h4 className="bg-light bg-opacity-50 text-center">Livestock</h4>
            <hr />
            {/* <!--p>Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus corporis sequi</p--> */}
          </div>

          <div
            className="col-lg-4 col-md-6 content-item"
            data-aos="fade-up"
            data-aos-delay="500"
            style={{ backgroundImage: "url(/assets/img/apiary1.jpg)" }}
          >
            <span>07</span>
            <hr />
            <h4 className="bg-light bg-opacity-50 text-center">Apiary</h4>
            <hr />
            {/* <!--p>Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus corporis sequi</p--> */}
          </div>
        </div>
      </div>
    </section>
  );
}
