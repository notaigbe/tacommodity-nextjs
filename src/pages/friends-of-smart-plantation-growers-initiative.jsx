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
import {Header} from "@/app/components/header";
import {TACommodityFooter} from "@/app/components/footer";
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
      <Breadcrumbs />
      <section className="inner-page">
      <main id="main" className={styles.main}>
        
                <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="col-lg-12 d-flex flex-column justify-content-center about-content">
          <p>
            An agricultural NGO managed by TA Commodity Producers Company
            Nigeria Limited with business focus of addressing problems of
            Smallholder tree crop growers.
          </p>

          <p>
            Business Focus of the organization is based on the following areas:
          </p>

          <hr />
          </div>
          </div>
          </div>
        
      </main>
      </section>
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
