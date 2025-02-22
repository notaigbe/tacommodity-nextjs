
"use client"
import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "boxicons/css/boxicons.css"
import Aos from "aos";
import "aos/dist/aos.css"

import styles from "./page.module.css";
import "./styles/style.css";
import Topbar from "./components/topbar";
import Header from "./components/header";
import Hero from "./components/hero";
import Head from "next/head";
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
  useEffect(()=>{
    Aos.init({
      offset: 100,
    });
  },[]);

  
  return (
    <>

      <Topbar />
      <Header />
      <Hero />
      {/* <div className={styles.page}> */}

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
      
      {/* </div> */}
      {/* <Script src="assets/vendor/aos/aos.js" /> */}
      <Script src="assets/js/main.js" />
      {/* <Script src="assets/vendor/purecounter/purecounter.js" /> */}
      <Script src="assets/vendor/glightbox/js/glightbox.min.js" />
      <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" />
      {/* <Script src="assets/vendor/swiper/swiper-bundle.min.js" /> */}
      <Script src="https://code.jquery.com/jquery-3.6.4.slim.min.js" />
    </>
  );
}
