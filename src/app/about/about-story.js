"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import BrandWrapper from "@/app/components/BrandWrapper";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.css";
import "aos/dist/aos.css";
import "@/app/globals.css";
import "@/app/styles/style.css";
import styles from "./about.module.css";

const FFB_SUPPLY = [
  { year: "2021", note: "First year of operation", tons: 182.05 },
  { year: "2022", tons: 1839.53 },
  { year: "2023", tons: 7177.09 },
  { year: "2024", tons: 20408.35 },
  { year: "2025", tons: 31164.03 },
  { year: "2026", note: "January – September", tons: 39688.22, partial: true },
];

const PEAK = FFB_SUPPLY[FFB_SUPPLY.length - 1].tons;
const FIRST = FFB_SUPPLY[0].tons;

const formatTons = (n) =>
  n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const HIGHLIGHTS = [
  { value: "182.05", unit: "tons", label: "Supplied in our first year of operation (2021)" },
  { value: "39,688.22", unit: "tons", label: "Supplied January – September 2026" },
  { value: `${Math.round(PEAK / FIRST)}×`, unit: "", label: "Growth in FFB volumes since we began" },
];

const VALUES = [
  { icon: "bx bx-check-shield", label: "Excellent Delivery" },
  { icon: "bx bx-link", label: "Dependable Partnerships" },
  { icon: "bx bx-refresh", label: "Continuous Improvement" },
];

export default function AboutStory() {
  // Which half of the section the chart card currently occupies, or null at rest.
  const [dodgeSide, setDodgeSide] = useState(null);

  // Cursor on the left sends the card to the right half, and vice versa.
  const handleDodge = (event) => {
    const zone = event.currentTarget.getBoundingClientRect();
    setDodgeSide(event.clientX < zone.left + zone.width / 2 ? "right" : "left");
  };

  useEffect(() => {
    const AOS = require("aos");
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  return (
    <BrandWrapper brand="TA">
      {/* Breadcrumbs */}
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>About Us</h2>
            <ol>
              <li><Link href="/">Home</Link></li>
              <li>About Us</li>
            </ol>
          </div>
        </div>
      </section>

      <>
        {/* Hero */}
        <section className={styles.hero}>
          <Image
            src="/assets/img/oil-palm-plantations.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={`container ${styles.heroInner}`} data-aos="fade-up">
            <p className={styles.eyebrow}>Our Growth Story</p>
            <h1 className={styles.heroTitle}>
              From 182 to Nearly 40,000 Tons
            </h1>
            <p className={styles.heroSubtitle}>A Story of Steady Growth and Smallholder Success</p>
            <p className={styles.heroLead}>
              A journey of commitment, partnership and excellence in smallholder oil palm
              development.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.section}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <blockquote className={styles.pullQuote}>
                  Growth is more than an increase in numbers. It is a reflection of trust,
                  stronger partnerships, improved systems, and a shared commitment to achieving
                  results.
                </blockquote>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <p className={styles.body}>
                  Since the beginning of our partnership with{" "}
                  <strong>Okomu Oil Palm Company</strong>, our company has continued to record
                  remarkable growth in Fresh Fruit Bunch (FFB) supplies sourced from smallholder
                  farmers. What started with just{" "}
                  <strong>182.05 tons in our first year of operation</strong> has grown into a
                  supply network delivering{" "}
                  <strong>39,688.22 tons between January and September 2026.</strong>
                </p>
                <p className={styles.body}>
                  This growth represents more than an impressive increase in FFB volumes. It
                  reflects the dedication of our smallholder farmers and our commitment to
                  building a reliable, productive and sustainable smallholder oil palm supply
                  chain.
                </p>
              </div>
            </div>

            <div className="row g-4 mt-4">
              {HIGHLIGHTS.map((h, i) => (
                <div key={h.label} className="col-md-4" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>
                      {h.value}
                      {h.unit && <span className={styles.statUnit}> {h.unit}</span>}
                    </div>
                    <p className={styles.statLabel}>{h.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth journey, over a field photograph */}
        <section className={`${styles.section} ${styles.growth}`}>
          <Image
            src="/assets/img/about/ffb-load.jpg"
            alt=""
            fill
            sizes="100vw"
            className={styles.growthImage}
          />
          <div className={`container ${styles.growthInner}`}>
            <div className="section-title" data-aos="fade-up">
              <h2>A Journey of Consistent Growth</h2>
              <p>Our FFB supply journey demonstrates a clear and steady upward trajectory.</p>
            </div>

            {/* The reveal lives on this wrapper, not the card: AOS marks an element
                by adding a class to the DOM node, and React rewrites the card's
                class attribute on every hover, which would wipe the reveal and
                leave the card invisible. */}
            <div
              className={styles.dodgeZone}
              data-aos="fade-up"
              onMouseMove={handleDodge}
              onMouseLeave={() => setDodgeSide(null)}
            >
              <div
                className={`${styles.chartCard}${dodgeSide ? ` ${styles.chartCardHalf}` : ""}${
                  dodgeSide === "right" ? ` ${styles.chartCardRight}` : ""
                }`}
              >
              <div className={styles.chartHeader}>
                <span>Year</span>
                <span>FFB Supplied by Smallholder Farmers</span>
              </div>
              <ul className={styles.chart}>
                {FFB_SUPPLY.map((row, i) => (
                  <li
                    key={row.year}
                    className={styles.chartRow}
                    data-aos="fade-right"
                    data-aos-delay={i * 90}
                  >
                    <div className={styles.chartYear}>
                      <strong>{row.year}</strong>
                      {row.note && <small>{row.note}</small>}
                    </div>
                    <div className={styles.chartTrack}>
                      <div
                        className={`${styles.chartBar} ${row.partial ? styles.chartBarHighlight : ""}`}
                        style={{ width: `${Math.max((row.tons / PEAK) * 100, 1.5)}%` }}
                      />
                    </div>
                    <div className={styles.chartValue}>
                      {formatTons(row.tons)} <span>tons</span>
                    </div>
                  </li>
                ))}
              </ul>
              </div>
            </div>

            <p className={`${styles.bodyLight} ${styles.centered}`} data-aos="fade-up">
              From 182.05 tons at the beginning of our journey to almost 40,000 tons in the
              first nine months of 2026, the figures tell a story of sustained progress.
            </p>
          </div>
        </section>

        {/* Partnership */}
        <section className={styles.section}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <div className={styles.imageFrame}>
                  <Image
                    src="/assets/img/about/smallholder-farmer.jpg"
                    alt="A smallholder farmer standing beside her harvested fresh fruit bunches, with a loaded trailer behind her"
                    width={1040}
                    height={780}
                    sizes="(max-width: 992px) 100vw, 40vw"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-7" data-aos="fade-left">
                <p className={styles.eyebrowDark}>Partnership</p>
                <h2 className={styles.heading}>Growth Built on Partnership</h2>
                <p className={styles.body}>
                  At the heart of this achievement are the smallholder farmers who continue to
                  supply the FFB that drives our operations. Our partnership with Okomu has
                  provided an important platform for strengthening this relationship and
                  creating opportunities for smallholder farmers to participate more effectively
                  in the oil palm value chain.
                </p>
                <p className={styles.body}>
                  As volumes have increased, so has our commitment to supporting farmers,
                  strengthening supply systems and improving the efficiency and reliability of
                  our operations.
                </p>
                <p className={styles.body}>
                  The growth recorded over the years demonstrates what can be achieved when
                  farmers, industry partners and other stakeholders work together toward a
                  common goal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Excellence */}
        <section className={`${styles.section} ${styles.dark}`}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6" data-aos="fade-up">
                <p className={styles.eyebrow}>Excellence</p>
                <h2 className={`${styles.heading} text-white`}>From Growth to Excellence</h2>
                <p className={styles.bodyLight}>
                  Our increasing FFB volumes are not simply a measure of business expansion. They
                  represent our commitment to{" "}
                  <strong>excellent delivery, dependable partnerships and continuous
                  improvement.</strong>
                </p>
                <p className={styles.bodyLight}>
                  Each year has brought new opportunities to strengthen our systems, deepen our
                  engagement with smallholder farmers and respond to the growing demands of the
                  oil palm industry.
                </p>
                <p className={styles.bodyLight}>
                  The progression from 1,839.53 tons in 2022 to 39,688.22 tons in January –
                  September 2026 demonstrates the strength of this approach. It is a journey
                  built step by step, farmer by farmer, and partnership by partnership.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  {VALUES.map((v, i) => (
                    <div key={v.label} className="col-12" data-aos="fade-left" data-aos-delay={i * 100}>
                      <div className={styles.valueCard}>
                        <i className={v.icon} />
                        <span>{v.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Looking ahead */}
        <section className={styles.section}>
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Looking Ahead</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-9" data-aos="fade-up">
                <p className={`${styles.body} ${styles.centered}`}>
                  While 2026 is still underway, the current figure of{" "}
                  <strong>39,688.22 tons</strong> already represents our highest annual FFB
                  supply to date. It is an achievement we are proud of, but also a reminder that
                  growth comes with greater responsibility.
                </p>
                <p className={`${styles.body} ${styles.centered}`}>
                  As we look to the future, we remain committed to strengthening our partnership
                  with Okomu, supporting our smallholder farmers and delivering greater value
                  across the oil palm supply chain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className={styles.closing}>
          <div className="container text-center" data-aos="zoom-in">
            <i className={`bx bxs-quote-alt-left ${styles.closingIcon}`} />
            <p className={styles.closingQuote}>
              Our journey from 182.05 tons to nearly 40,000 tons is a story of steady growth.
              More importantly, it is a story of commitment, partnership, resilience and
              excellence.
            </p>
            <p className={styles.closingNote}>
              We are proud of how far we have come and even more excited about what lies ahead.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <Link href="/#contact" className={styles.btnPrimary}>
                <i className="bi bi-chat-dots me-2" />Partner With Us
              </Link>
              <Link href="/projects" className={styles.btnOutline}>
                View Our Projects
              </Link>
            </div>
          </div>
        </section>
      </>

      <Script src="/assets/js/main.js" strategy="lazyOnload" />
    </BrandWrapper>
  );
}
