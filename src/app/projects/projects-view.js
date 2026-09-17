"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import BrandWrapper from "@/app/components/BrandWrapper";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.css";
import "@/app/globals.css";
import "@/app/styles/style.css";
import styles from "./projects.module.css";

// Largest single project; every area bar is drawn relative to it.
const LARGEST_AREA = 10000;

const PROJECTS = [
  {
    title: "Okomu smallholder oil palm farms",
    area: 5000,
    summary:
      "A six-year programme developing oil palm farms for smallholders across four Local Government Areas, with Okomu Oil Palm Company PLC buying the harvest.",
    crop: "Oil palm",
    location: "Edo State, 4 LGAs",
    offtaker: "Okomu Oil Palm Company PLC",
    logo: { src: "/assets/img/partners/okomu.jpg", alt: "Okomu Oil Palm Company logo" },
  },
  {
    title: "Cassava, maize and soybean farms",
    area: 10000,
    summary:
      "Flour Mills of Nigeria supplies the inputs and buys the produce from 10,000 hectares of smallholder farms.",
    crop: "Cassava, maize, soybean",
    location: "Edo State",
    offtaker: "Flour Mills of Nigeria PLC",
    logo: { src: "/assets/img/partners/FMN.jpg", alt: "Flour Mills of Nigeria logo" },
  },
  {
    title: "Maize intercropping",
    tag: "Intercrop",
    summary:
      "Maize grown between the young palms of the 5,000 hectare Okomu project, giving farmers income before their oil palm matures.",
    crop: "Maize",
    location: "Edo State",
    offtaker: "Flour Mills of Nigeria PLC",
    logo: { src: "/assets/img/partners/FMN.jpg", alt: "Flour Mills of Nigeria logo" },
  },
  {
    title: "Rubber planting and wet lump supply",
    tag: "Supply",
    summary:
      "We plant rubber trees with farmers and buy their wet rubber lumps for supply to Okomu.",
    crop: "Rubber",
    location: "Edo State",
    offtaker: "Okomu Oil Palm Company PLC",
    logo: { src: "/assets/img/partners/okomu.jpg", alt: "Okomu Oil Palm Company logo" },
  },
  {
    title: "Calabar smallholder oil palm farms",
    area: 250,
    summary:
      "Oil palm farms developed so that PZ Wilmar can buy the Fresh Fruit Bunches (FFB) they produce.",
    crop: "Oil palm",
    location: "Akamkpa LGA, Cross River State",
    offtaker: "PZ Wilmar",
  },
  {
    title: "RSPO certification for smallholders",
    tag: "Certification",
    summary:
      "Taking smallholder oil palm farmers through Roundtable on Sustainable Palm Oil certification, with support from IDH.",
    crop: "Oil palm",
    location: "Edo State",
    partner: "IDH",
    logo: { src: "/assets/img/partners/idh.jpg", alt: "IDH, the Sustainable Trade Initiative, logo" },
  },
];

const STEPS = [
  {
    title: "Organise",
    body: "Farmers who cannot get finance on their own join associations and cooperatives. We give priority to women and young people, and support women who want to run farming businesses.",
  },
  {
    title: "Finance and supply inputs",
    body: "We supply seedlings, other farm inputs and credit, and work with selected insurers and financial institutions so farmers have lasting access to financial services.",
  },
  {
    title: "Train",
    body: "Farmers learn modern practices, technology and smart agriculture, with the goal of turning smallholdings into commercial farms.",
  },
  {
    title: "Aggregate and deliver",
    body: "We collect the harvest, keep it traceable to the farm, and handle warehousing, logistics and haulage to processors and consumers.",
  },
];

const CROPS = [
  { group: "Tree crops", items: "Oil palm, cocoa, rubber" },
  { group: "Cereals", items: "Rice, maize, wheat" },
  { group: "Roots and tubers", items: "Cassava, potatoes, yam, ginger" },
  { group: "Legumes", items: "Soybean, sesame seed, cowpea" },
  { group: "Vegetables", items: "Pepper, tomato" },
  { group: "Industrial crops", items: "Cotton, sugarcane" },
  { group: "Livestock", items: "Fish, poultry, ruminants" },
  { group: "Apiary", items: "Beekeeping" },
];

const TERRA_SERVICES = [
  {
    group: "Farm development",
    items: [
      "Joint ventures for medium and large farms",
      "Land acquisition and development for smallholder and medium-size farmers",
      "Management of medium and large commercial farms to cut costs for promoters",
      "Farm house projects",
    ],
  },
  {
    group: "Finance and value chains",
    items: [
      "Structured finance for agricultural value-chain projects",
      "Value-chain management for every participant",
    ],
  },
  {
    group: "Infrastructure",
    items: [
      "Renewable power from biomass and solar",
      "Storage and silo construction and management",
      "Logistics and agricultural facilities management",
      "Agricultural processing plants",
    ],
  },
];

const formatArea = (n) => n.toLocaleString("en-US");

export default function ProjectsView() {
  return (
    <BrandWrapper brand="TA">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Projects</h2>
            <ol>
              <li><Link href="/">Home</Link></li>
              <li>Projects</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src="/assets/img/portfolio/agric_training_1.jpeg"
          alt="Smallholder farmers gathered for a field briefing under mature oil palms"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.heroTitle}>Farms built for named off-takers</h1>
          <p className={styles.heroLead}>
            We develop farms for smallholder farmers, especially women and young people, and
            tie each project to a processor that buys the harvest.
          </p>
          <div className={styles.heroActions}>
            <a href="#current" className={styles.btnLight}>
              See current projects
            </a>
            <Link href="/#contact" className={styles.btnGhost}>
              Discuss a project
            </Link>
          </div>
        </div>
      </section>

      {/* Current projects */}
      <section id="current" className={styles.section}>
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <h2 className={styles.heading}>Current projects</h2>
              <p className={styles.body}>
                More than <strong>15,000 hectares</strong> under development in Edo and Cross
                River States, with Okomu Oil Palm, Flour Mills of Nigeria and PZ Wilmar buying
                what the farmers grow.
              </p>
            </div>
            <figure className={styles.introFigure}>
              <Image
                src="/assets/img/slide/oilpalm1.jpg"
                alt="Freshly harvested oil palm fruit bunches loaded on a truck"
                fill
                sizes="(max-width: 992px) 100vw, 45vw"
                className={styles.cover}
              />
            </figure>
          </div>

          <ol className={styles.ledger}>
            {PROJECTS.map((p) => (
              <li key={p.title} className={styles.ledgerRow}>
                <div className={styles.scale}>
                  {p.area ? (
                    <>
                      <p className={styles.areaValue}>
                        {formatArea(p.area)}
                        <span> ha</span>
                      </p>
                      <div className={styles.areaTrack} aria-hidden="true">
                        <div
                          className={styles.areaBar}
                          style={{ width: `${Math.max((p.area / LARGEST_AREA) * 100, 2)}%` }}
                        />
                      </div>
                    </>
                  ) : (
                    <p className={styles.tag}>{p.tag}</p>
                  )}
                </div>

                <div className={styles.projectText}>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  <p className={styles.projectSummary}>{p.summary}</p>
                </div>

                <dl className={styles.meta}>
                  <div>
                    <dt>Crop</dt>
                    <dd>{p.crop}</dd>
                  </div>
                  <div>
                    <dt>Location</dt>
                    <dd>{p.location}</dd>
                  </div>
                  <div className={styles.metaParty}>
                    <div>
                      <dt>{p.partner ? "Partner" : "Off-taker"}</dt>
                      <dd>{p.partner ?? p.offtaker}</dd>
                    </div>
                    {p.logo && (
                      <Image
                        src={p.logo.src}
                        alt={p.logo.alt}
                        width={120}
                        height={60}
                        className={styles.logo}
                      />
                    )}
                  </div>
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Method */}
      <section className={`${styles.section} ${styles.tinted}`}>
        <div className="container">
          <div className={styles.methodGrid}>
            <div className={styles.methodIntro}>
              <h2 className={styles.heading}>How we turn smallholders into suppliers</h2>
              <p className={styles.body}>
                Most of our farmers start without finance, inputs or a market. Every project
                takes them through the same four steps.
              </p>
            </div>
            <ol className={styles.steps}>
              {STEPS.map((s, i) => (
                <li key={s.title} className={styles.step}>
                  <span className={styles.stepNumber} aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepBody}>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.outcomes}>
            <h3 className={styles.outcomesTitle}>What we measure</h3>
            <p>
              We track the income each crop brings farmers and the food it adds to the
              domestic economy. The work supports UN Sustainable Development Goal 2, zero hunger:
              doubling the productivity and incomes of small-scale food producers, especially
              women, through sustainable production that improves the land and soil over time.
            </p>
          </div>
        </div>
      </section>

      {/* Crops */}
      <section className={`${styles.section} ${styles.dark}`}>
        <div className="container">
          <div className={styles.cropsGrid}>
            <div>
              <h2 className={`${styles.heading} ${styles.headingLight}`}>Crops we promote</h2>
              <p className={styles.bodyLight}>
                Our farmers grow for the markets our partners serve. The list is not closed; we
                add crops when a buyer needs them.
              </p>
              <figure className={styles.cropsFigure}>
                <Image
                  src="/assets/img/slide/maize-farming.jpg"
                  alt="Rows of maize with ripening cobs"
                  fill
                  sizes="(max-width: 992px) 100vw, 40vw"
                  className={styles.cover}
                />
              </figure>
            </div>
            <dl className={styles.crops}>
              {CROPS.map((c) => (
                <div key={c.group} className={styles.cropRow}>
                  <dt>{c.group}</dt>
                  <dd>{c.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Terra Agrarisch */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.terraHead}>
            <h2 className={styles.heading}>Terra Agrarisch Limited</h2>
            <p className={styles.body}>
              Our subsidiary for farm finance and agricultural infrastructure. It builds and funds
              larger projects through joint ventures with local and international partners.
            </p>
          </div>
          <div className={styles.terraGrid}>
            {TERRA_SERVICES.map((s) => (
              <div key={s.group} className={styles.terraGroup}>
                <h3 className={styles.terraTitle}>{s.group}</h3>
                <ul className={styles.terraList}>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className={styles.closing}>
        <div className={`container ${styles.closingInner}`}>
          <p className={styles.closingText}>
            Need a dependable smallholder supply for your mill or processing plant?
          </p>
          <div className={styles.closingActions}>
            <Link href="/#contact" className={styles.btnPrimary}>
              Discuss a project
            </Link>
            <Link href="/about" className={styles.btnOutline}>
              Read our growth story
            </Link>
          </div>
        </div>
      </section>

      <Script src="/assets/js/main.js" strategy="lazyOnload" />
    </BrandWrapper>
  );
}
