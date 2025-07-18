import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "@/src/app/tacommodity/globals.css";
import "@/src/app/styles/style.css";
import styles from "@/src/app/page.module.css";
import Script from "next/script";
import Breadcrumbs from "@/src/app/components/breadcrumbs";
import Topbar from "@/src/app/components/topbar";
import { Header } from "@/src/app/components/header";
import { TACommodityFooter } from "@/src/app/components/footer";
import Image from "next/image";

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
      <Breadcrumbs page="Friends of Smart Plantation Growers Inistiative" />
      <section className="inner-page">
        <main id="main" className={styles.main}>
          <div className="container" data-aos="fade-up">
            <div className="row no-gutters lead">
              <div className="col-lg-12 d-flex flex-column justify-content-center about-content">
                <p>
                  An agricultural NGO managed by TA Commodity Producers Company
                  Nigeria Limited with business focus of addressing problems of
                  Smallholder tree crop growers.
                </p>

                <p>
                  Business Focus of the organization is based on the following
                  areas:
                </p>

                <hr />
                <div class="row">
                  <div class="col-lg-10">
                    <ul>
                      <li>
                        Creating access to training on best management practices
                        and market for smallholder farmers of Oil Palm, Rubber
                        and Cocoa.
                      </li>
                      <li>
                        Assisting independent growers of Oil Palm Trees in the
                        certification by Round Table on Sustainable Oil Palm
                        (RSPO) and other certification bodies.
                      </li>
                      <li>
                        Creating access to finance for smallholder farmers in
                        the maintenance of existing and expansion of Plantations.
                      </li>
                      <li>
                        Improving sustainable livelihood income of smallholder
                        farmers through diversification of income from other
                        farming enterprises like Apiary, Livestock and annual
                        crops.
                      </li>
                      <li>
                        Promoting the inclusion of women and youths in
                        sustainable agriculture especially in rural communities.
                      </li>
                      <li>
                        Acquisition and maintenance of Oil Palm, Rubber and
                        Cocoa Plantations for turnaround.
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-2">
                    <Image
                      src="/assets/img/FOSPGI.jpg"
                      height={500}
                      width={500}
                      style={{ width: "200px", height: "auto" }}
                      class="shadow thumbnail"
                    />
                  </div>
                </div>
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
