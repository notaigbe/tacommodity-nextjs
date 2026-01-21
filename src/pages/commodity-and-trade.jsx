import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "@/app/globals.css";
import "@/app/styles/style.css";
import styles from "@/app/page.module.css";
import Script from "next/script";
import Breadcrumbs from "@/app/components/breadcrumbs";
import Topbar from "@/app/components/topbar";
import { Header } from "@/app/components/header";
import { TACommodityFooter } from "@/app/components/footer";
import VideoBox from "@/app/components/videobox";
export default function Projects() {
  useEffect(() => {
    Aos.init({
      offset: 100,
    });
  }, []);
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumbs page="Commodity and Trade" />
      <main className={styles.main}>
        <section className="inner-page container">
        <div
            className="row"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
          <h2>
              RSPO Certified Oil Palm – Grown with Care, Delivered with
              Integrity
            </h2>
            <br />
            <hr/>
            <div className="col-lg-8 container" data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="false">
            
            <p className="lead" style={{ fontSize: 25}}>
              At T A Commodity Producers Co Nig Limited, our commitment to
              excellence is rooted in the land. Every
              bunch of oil palm harvested reflects our dedication to sustainable
              agriculture, community development, and international standards.
            </p>
            <p className="lead" style={{ fontSize: 25}}>
              From the lush plantations to harvesting, our process embodies the values of hard work, tradition,
              and environmental consciousness. That’s why our oil palm products
              are RSPO certified — a mark of sustainability recognized around
              the globe.
            </p>
            
            
            </div>
              <div className="col-lg-4" data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="false">
              <VideoBox />
          </div>
          <hr />
          </div>
          
            {/* {% if page == 'Projects' %} */}
            
            
            
          <div
            className="container"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="false"
          >
            <h3>What Sets Us Apart?</h3>

            <ul>
              <li style={{ fontSize: 25}}>
                <strong>Locally Empowered, Globally Connected</strong> <br />
                Our farmers, workers, and processors work together as a chain of
                value — creating products that meet international demand while
                boosting local economic growth.
              </li>
              <li style={{ fontSize: 25}}>
                <strong>Trusted Quality, Certified Assurance</strong> <br />
                With RSPO certification, our oil palm is accepted worldwide for
                food production, personal care, and industrial use — all backed
                by traceability and ethical compliance. etc); Sugarcane.
              </li>
              <li style={{ fontSize: 25}}>
                <strong>Seamless Local and International Delivery</strong>{" "}
                <br />
                Whether you're a domestic manufacturer or a global importer, we
                provide efficient logistics, export documentation, and on-time
                delivery, powered by experience and integrity.
              </li>
            </ul>
            <hr />
          </div>
          <div
            className="container"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="false"
          >
            <h3>Let’s Build a Sustainable Future</h3>
            <p style={{ fontSize: 25}}>
              As the video captures — from the plantation to processing — our
              story is one of passion, purpose, and progress. Choose T A
              Commodity Producers Co Nig Limited for RSPO certified oil palm
              that speaks volumes about quality, care, and sustainability.
              <strong>
                Partner with us — feed industries, empower communities, and
                sustain the planet.
              </strong>
            </p>
            <hr />
          </div>
        </section>
      </main>
      <footer>
        <TACommodityFooter />
      </footer>
      {/* <Script src="assets/vendor/aos/aos.js" /> */}
      <Script src="assets/js/main.js" />
      {/* <Script src="assets/vendor/purecounter/purecounter.js" /> */}
      {/* <Script src="assets/vendor/glightbox/js/glightbox.min.js" /> */}
      <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" />
      {/* <Script src="assets/vendor/swiper/swiper-bundle.min.js" /> */}
      <Script src="https://code.jquery.com/jquery-3.6.4.slim.min.js" />
    </>
  );
}
