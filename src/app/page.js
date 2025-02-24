"use client";

import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.css";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./page.module.css";
import "./styles/style.css";
import Topbar from "./components/topbar";
import { Header } from "./components/header";
import Hero from "./components/hero";
import { TACommodityAbout } from "./components/about";
import AboutList from "./components/about-lists";
import { TACommodityPortfolio } from "./components/portfolio";
import WhatWeDo from "./components/what-we-do";
import { TACommodityTeam } from "./components/team";
import { TACommodityContact } from "./components/contact";
import Services from "./components/services";
import { TACommodityFooter } from "./components/footer";
import Clients from "./components/clients";
import Script from "next/script";

export default function Home() {
  useEffect(() => {
    Aos.init({ offset: 100 });
  }, []);

  return (
    <>
      <Topbar />
      <Header />
      <Hero />

      <main className={styles.main}>
        <TACommodityAbout />
        <AboutList />
        <Services />
        <WhatWeDo />
        <Clients />
        <TACommodityPortfolio />
        <TACommodityTeam />
        <TACommodityContact />
      </main>

      <TACommodityFooter />

      {/* ✅ Optimized Script Loading */}
      <Script src="/assets/js/main.js" strategy="lazyOnload" defer />
      <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="lazyOnload" defer />

      {/* ❌ Removed jQuery (Next.js doesn't require it) */}
      {/* If you still need jQuery, load it safely */}
      {/* <Script 
        src="https://code.jquery.com/jquery-3.6.4.slim.min.js"
        integrity="sha256-a2yjHM4jnF9f54xUQakjZGaqYs/V1CYvWpoqZzC2/Bw="
        crossOrigin="anonymous"
        strategy="lazyOnload"
      /> */}
    </>
  );
}
