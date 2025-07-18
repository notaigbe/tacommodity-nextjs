import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "@/src/app/tacommodity/globals.css";
import "@/src/app/styles/style.css";
import styles from "@/src/app/page.module.css";
import Script from "next/script";
import Head from "next/head";
import { PHAGROPortfolio } from "@/src/app/components/portfolio";
import { PHAGROContact } from "@/src/app/components/contact";
import { PHAGROTeam } from "@/src/app/components/team";
import Topbar from "@/src/app/components/topbar";
import { PHAGROHeader } from "@/src/app/components/header";
import Breadcrumbs from "@/src/app/components/breadcrumbs";
import { PHAGROAbout } from "@/src/app/components/about";
import Stats from "@/src/app/components/stats";
import { PHAGROFooter } from "@/src/app/components/footer";

export default function WomenSustainableGroup() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Head>
                <title>Women Sustainable Group</title>
                <meta
                    content="Discover how the Women Sustainable Group by TA Commodity Producers Co Nig Ltd empowers rural women and youth in Nigeria through agricultural cooperatives, providing essential training, market access, and financial support for sustainable farming enterprises."
                    name="description"
                />
                <meta
                    name="keywords"
                    content="Women Sustainable Group, women in agriculture Nigeria, youth in agriculture Nigeria, rural women empowerment, sustainable farming Nigeria, agricultural cooperatives, women farmers support, smallholder farmers Nigeria, market access for farmers, women agripreneurs, fish farming in Niger Delta, cooperative farming Nigeria, women-led agribusiness, rural development in Nigeria, financial support for farmers, agricultural training programs, sustainable agribusiness models, women empowerment initiatives, agribusiness cooperatives in Africa, farming for women and youth"
                />
                <meta name="author" content="TA Commodity Producers Co Nig Ltd" />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="Women Sustainable Group - Empowering Women & Youth in Agriculture"
                />
                <meta
                    property="og:description"
                    content="Supporting women and youth in agriculture through cooperatives, training, and market access in Nigeria."
                />
                <meta property="og:image" content="/assets/img/phagro_logo.png" />
                <meta
                    property="og:url"
                    content="https://tacommodity-nextjs.vercel.app/women-sustainable-group"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Women Sustainable Group - Empowering Women & Youth in Agriculture"
                />
                <meta
                    name="twitter:description"
                    content="Promoting sustainable farming and economic growth for women and youth in Nigeria."
                />
                <meta name="twitter:image" content="/assets/img/phagro_logo.png" />
                {/* Add a custom favicon for this page */}
                <link rel="icon" href="/assets/img/favicon.ico" />
            </Head>
            <Topbar page="Women Sustainable Group" />
            <PHAGROHeader />
            <Breadcrumbs page="Women Sustainable Group" />
            <main className={styles.main}>
                <PHAGROAbout />
                <Stats />
                <PHAGROTeam />
                <PHAGROPortfolio />
                <PHAGROContact />
            </main>

            <PHAGROFooter />

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