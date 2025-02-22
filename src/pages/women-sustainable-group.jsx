import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "boxicons/css/boxicons.css"
import Aos from "aos";
import "aos/dist/aos.css"
import "@/app/globals.css";
import "@/app/styles/style.css"
import styles from "@/app/page.module.css"
import Script from "next/script";
import { PHAGROPortfolio } from "@/app/components/portfolio";
import { PHAGROContact } from "@/app/components/contact";
import { PHAGROTeam } from "@/app/components/team";
import Topbar from "@/app/components/topbar";
import Header from "@/app/components/header";
import Breadcrumbs from "@/app/components/breadcrumbs";
import { PHAGROAbout } from "@/app/components/about";
import Stats from "@/app/components/stats";
import { PHAGROFooter } from "@/app/components/footer";

export default function WomenSustainableGroup() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    
    return(
        <>
        <Topbar/>
        <Header />
        <Breadcrumbs />
        <main className={styles.main}>
            <PHAGROAbout />
            <Stats />
            <PHAGROTeam/>
            <PHAGROPortfolio/>
            <PHAGROContact/>
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