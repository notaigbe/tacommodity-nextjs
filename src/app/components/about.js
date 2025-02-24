import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import Image from "next/image";

export function TACommodityAbout() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="col-lg-6 video-box">
            <Image
              src="/assets/img/palm-vid.jpg"
              className="img-fluid"
              alt=""
              height={500}
              width={500}
              style={{ width: "100%", height: "auto" }}
            />
            <a
              href="https://youtu.be/EyWhzWh6Sa8"
              className="venobox play-btn mb-4"
              data-vbtype="video"
              data-maxwidth="800px"
              data-autoplay="true"
            ></a>
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
            <div className="section-title">
              <h2>About Us</h2>
              <p>
                TA Commodity producers Company Nigeria Limited is a Social
                Impact agricultural company registered in Nigeria on the 10th of
                August 2018, for the business of farm development. The company
                was born out of a relationship with Terra Agric International BV
                of the Netherlands with the purpose of transferring the
                knowledge behind the success of the Dutch farming industry to
                Nigeria.
              </p>
            </div>

            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon">
                <i className="bx bx-fingerprint"></i>
              </div>
              <h4 className="title">
                <a href="">Vision</a>
              </h4>
              <p className="description">
                To produce and deliver reliable farm fresh produce from farmers,
                which are traceable, to various processors and consumers...
              </p>
            </div>

            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon">
                <i className="bx bx-gift"></i>
              </div>
              <h4 className="title">
                <a href="">Mission</a>
              </h4>
              <p className="description">
                To produce reliable consumer fresh farm produce through the use
                and application of technology and trained farmers as a means to
                achieving sustainable livelihood income and food security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PHAGROAbout() {
  return (
    <>
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="col-lg-12 d-flex flex-column justify-content-center about-content">
            <section id="about" className="about">
              <div className="section-title">
                <h2 style={{ color: "#1C5CA1" }}>About Us</h2>
              </div>
              <div className="row">
                <div className="col">
                  <Image
                    src="/assets/img/phagro-prep-2.jpeg"
                    style={{ width: "100%", height: "auto" }}
                    className="shadow-sm rounded"
                    alt=""
                    height={500}
                    width={500}
                  />
                </div>
                <div className="col">
                  <Image
                    src="/assets/img/phagro-prep-3.jpeg"
                    style={{ width: "100%", height: "auto" }}
                    className="shadow-sm rounded"
                    alt=""
                    height={500}
                    width={500}
                  />
                </div>
                <div className="col">
                  <Image
                    src="/assets/img/phagro-processed-1.jpeg"
                    style={{ width: "100%", height: "auto" }}
                    className="shadow-sm rounded"
                    alt=""
                    height={500}
                    width={500}
                  />
                </div>
                <div className="col">
                  <Image
                    src="/assets/img/phagro-processed-2.jpg"
                    style={{ width: "100%", height: "auto" }}
                    className="shadow-sm rounded"
                    alt=""
                    height={500}
                    width={500}
                  />
                </div>
              </div>
              <p>
                Women Sustainable Group is promoted by TA Commodity Producers Co
                Nig Limited for women farmers. This group brings together women
                and youths in agriculture especially smallholder farmers into
                various cooperatives, and associations, for the purpose of
                creating access to training, market and finance so as to achieve
                sustainable business enterprises amongst women and youths
                farmers predominantly in the rural areas.
              </p>
              <br />

              <p>
                Port Harcourt Agro Commodity Multipurpose Cooperative Limited
                was born out of such women sustainable group. The focus of the
                group is to target the sustainability of fish farmers in the
                rural areas of Niger Delta areas especially Rivers State where
                women and youths are neglected because of Oil exploration
                activities by Multi-National Companies. Another major focus of
                this group, is to improve livelihood income of rural fish
                farmers through access to training, market and finance.
              </p>
              <br />

              <p>
                This cooperative helps smallholder fish farmers increase their
                access and improve their negotiating power with respect to
                acquiring a wide range of services including knowledge and
                extension services; productive assets such as seeds and tools;
                and marketing information and skills to capture greater value
                from the sales of their products.
              </p>
              <br />

              <p>
                As sustainability-focused group, the cooperative increases
                community awareness of protected land areas, clean water,
                education in nutrition and making sure there is a clean
                environment and a productive farm to pass down to future
                generations.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export function FOSPGIAbout() {
  return (
    <>
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="col-lg-12 d-flex flex-column justify-content-center about-content">
            <div className="section-title">
              <h2>About Us</h2>
            </div>
            <div className="row">
              <div className="col">
                <Image
                  src="/assets/img/phagro-prep-2.jpeg"
                  style={{ width: "100%", height: "auto" }}
                  className="shadow-sm rounded"
                  alt=""
                  height={500}
                  width={500}
                />
              </div>
              <div className="col">
                <Image
                  src="/assets/img/phagro-prep-3.jpeg"
                  style={{ width: "100%", height: "auto" }}
                  className="shadow-sm rounded"
                  alt=""
                  height={500}
                  width={500}
                />
              </div>
              <div className="col">
                <Image
                  src="/assets/img/phagro-processed-1.jpeg"
                  style={{ width: "100%", height: "auto" }}
                  className="shadow-sm rounded"
                  alt=""
                  height={500}
                  width={500}
                />
              </div>
              <div className="col">
                <Image
                  src="/assets/img/phagro-processed-2.jpg"
                  style={{ width: "100%", height: "auto" }}
                  className="shadow-sm rounded"
                  alt=""
                  height={500}
                  width={500}
                />
              </div>
            </div>
            <p>
              Women Sustainable Group is promoted by TA Commodity Producers Co
              Nig Limited for women farmers. This group brings together women
              and youths in agriculture especially smallholder farmers into
              various cooperatives, and associations, for the purpose of
              creating access to training, market and finance so as to achieve
              sustainable business enterprises amongst women and youths farmers
              predominantly in the rural areas.
            </p>
            <br />

            <p>
              Port Harcourt Agro Commodity Multipurpose Cooperative Limited was
              born out of such women sustainable group. The focus of the group
              is to target the sustainability of fish farmers in the rural areas
              of Niger Delta areas especially Rivers State where women and
              youths are neglected because of Oil exploration activities by
              Multi-National Companies. Another major focus of this group, is to
              improve livelihood income of rural fish farmers through access to
              training, market and finance.
            </p>
            <br />

            <p>
              This cooperative helps smallholder fish farmers increase their
              access and improve their negotiating power with respect to
              acquiring a wide range of services including knowledge and
              extension services; productive assets such as seeds and tools; and
              marketing information and skills to capture greater value from the
              sales of their products.
            </p>
            <br />

            <p>
              As sustainability-focused group, the cooperative increases
              community awareness of protected land areas, clean water,
              education in nutrition and making sure there is a clean
              environment and a productive farm to pass down to future
              generations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
