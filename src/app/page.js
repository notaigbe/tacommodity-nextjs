"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";  // Lazy loading dynamic components
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.css";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./page.module.css";
import "./styles/style.css";
import Topbar from "./components/topbar";
import { Header } from "./components/header";
const Hero = dynamic(() => import("./components/hero"), { ssr: false }); // Lazy loading
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures client-side hydration
    Aos.init({ offset: 100 });
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

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
      {/* <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="lazyOnload" defer /> */}
    </>
  );
}
