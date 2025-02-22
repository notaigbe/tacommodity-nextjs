import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "boxicons/css/boxicons.css"
import Aos from "aos";
import "aos/dist/aos.css"
import "@/app/globals.css";
import "@/app/styles/style.css"
import styles from "@/app/page.module.css";
import Script from "next/script";
import Breadcrumbs from "@/app/components/breadcrumbs";
import Topbar from "@/app/components/topbar";
import Header from "@/app/components/header";
import {TACommodityFooter} from "@/app/components/footer";
export default function Projects() {
    useEffect(()=>{
      Aos.init({
        offset: 100,
      });
    },[]);
  return (
    <>
    <Topbar />
    <Header />
    <Breadcrumbs />
    <main className={styles.main}>
    <section className="inner-page">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      >
        {/* {% if page == 'Projects' %} */}
        <p>
          We develop agricultural farms for smallholder farmers especially women
          and youths;
        </p>
        <br />
        <ul>
          <li>
            We develop farms for smallholder farmers; provide finance,
            training's and seedlings with other farm inputs.
          </li>
          <li>
            We develop farmers that lack access to financing through the
            combination of capacity building and provision of finance with other
            farm inputs by bringing them into various associations and
            cooperatives.
          </li>
          <li>
            Create access to market through the aggregation of their farm
            produce and make them traceable to consumers.
          </li>
          <li>
            We provide warehousing, logistics handling and haulage service for
            agro commodities to deliver to processing companies and consumers.
          </li>
          <li>
            Training of farmers on modern practices and the use of Technology,
            Smart Agriculture in farming business with the aim of developing
            smallholder farmers into commercial farmers.
          </li>
          <li>
            We promote financial inclusion amongst smallholder farmers through
            collaboration with selected insurance and financial institutions.
          </li>
          <li>
            Promote women entrepreneurship in agricultural farming business with
            the aim of developing and improving their livelihood income.
          </li>
          <li>
            Impact Monitoring and Evaluation through the development of income
            from the cultivation of various crops for the farmers.
          </li>
          <li>
            Promote Food security in the domestic economy through the
            cultivation of some selected commodities aimed at improving food
            security and nutritional health.
          </li>
          <li>
            Promote Sustainable Development Goal [SDG] of the United Nations
            [UN], of zero hunger and all forms of malnutrition. This would be
            accomplished by doubling agricultural productivity and incomes of
            small-scale food producers (especially women and indigenous
            peoples), by ensuring sustainable food production systems, and by
            progressively improving land and soil quality.
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
        <h3>CROPS WE PROMOTE FOR CULTIVATION:</h3>
        <p>
          Our smallholder farmers’ targeted commodities include but not limited
          to:
        </p>
        <br />
        <ul>
          <li>
            <strong>Cereals</strong> (Rice, Maize, wheat etc); Cotton.
          </li>
          <li>
            <strong>Roots and Tubers</strong> (Cassava, Potatoes, Yam, Ginger
            etc); Sugarcane.
          </li>
          <li>
            <strong>Tree crops</strong> (Oil palm, Cocoa, Rubber etc);
          </li>
          <li>
            <strong>Legumes:</strong> (Soybean, Sesame seed, Cowpea, etc);
          </li>
          <li>
            <strong>Vegetables:</strong> (Pepper, Tomato, etc);
          </li>
          <li>
            <strong>Livestock:</strong>(Fish, Poultry, Ruminants etc);
          </li>
          <li>
            <strong>Apiary:</strong>(Bee Keeping farming);
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
        <h3>CURRENT SMALLHOLDER FARMS DEVELOPMENT PROJECTS:</h3>
        <ul>
          <li>
            <strong>
              Okomu Oil Palm 5,000 hectares smallholder oil palm farm project in
              Edo State.
            </strong>{" "}
            This project has a lifespan of 6years spread across four Local
            Government Areas in Edo State for the cultivation of oil palm for
            Okomu Oil Palm Company PLC as off-taker.
          </li>
          <li>
            <strong>
              Purchase of wet rubber lumps from farmers for supply to Okomu Oil
              Palm Company PLC.
            </strong>{" "}
            Planting of rubber trees and Purchase of wet rubber lump.
          </li>
          <li>
            <strong>
              Cultivation of maize for Flour Mills of Nigeria PLC as a major
              off-taker in Edo State.
            </strong>{" "}
            This is part of the inter-crops in the 5,000 hectares Okomu Oil Palm
            smallholder farm project as additional revenues to the farmers.
          </li>
          <li>
            <strong>
              Cultivation of Cassava, Maize and Soybean for Flour Mills of
              Nigeria PLC, Edo State.
            </strong>{" "}
            Flour Mills of Nigeria is the supplier of inputs and off-taker of
            farm produce from the 10,000 hectares farms for smallholder farmers.
          </li>
          <li>
            <strong>
              Development of 250 hectares of Oil Palm Smallholder Farmers in
              Calabar.
            </strong>{" "}
            This smallholder farm project is for the off-take of Fresh Fruit
            Bunches (FFBs) by PZ/Wilmar in Akamkpa Local Government Area of
            Cross River State.
          </li>
          <li>
            <strong>RSPO Certification of Smallholder Oil Palm Farmers.</strong>{" "}
            This is a smallholder oil palm project supported by IDH for RSPO
            certification of smallholder oil palm farmers in Edo State.
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
        <p>
          <strong>
            TERRA AGRARISCH LIMITED [Farming Finance &amp; Funding for
            Agricultural Infrastructural Projects].
          </strong>{" "}
          A subsidiary of TA Commodity Producers Company Nigeria Limited with
          business focus of addressing problems of infrastructural projects
          especially in the Agricultural sector through joint ventures with
          local and international partners.
        </p>
        <br />
        <ul>
          <li>
            Business Focus of the subsidiary company is based on the following
            agricultural project areas;
          </li>
          <li>
            Joint ventures for medium and large agricultural farm development.
          </li>
          <li>
            Agricultural land acquisition and development for both smallholder
            and medium size farmers.
          </li>
          <li>
            Management of medium and large commercial farms for the purpose of
            reducing costs and maximising profits for promoters.
          </li>
          <li>
            Structured finance for various Agricultural Value-Chain Projects
          </li>
          <li>Agricultural Value-Chain Management for all participants</li>
          <li>Power projects from renewable energy from Biomass and Solar.</li>
          <li>Storage and Silo construction and management.</li>
          <li>Logistics and Agricultural Facilities Management</li>
          <li>Farm House Projects.</li>
          <li>Various Agricultural Processing Plants.</li>
        </ul>
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
