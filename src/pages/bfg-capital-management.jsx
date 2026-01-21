"use client";
import React, { useState, useEffect } from 'react';
import BrandWrapper from '@/app/components/BrandWrapper';
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.css";
import "@/app/globals.css";
import "@/app/styles/style.css";
import styles from "@/app/page.module.css";
import Script from "next/script";
import Head from "next/head";

export default function LandingPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Initialize AOS if needed
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }

    // Back to top button visibility handler
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BrandWrapper brand="BFG">
      <Head>
        <title>BFG Capital Management Limited - Sustainable Agricultural Value Chains in Nigeria</title>
        <meta
          content="BFG Capital Management empowers smallholder farmers through sustainable agricultural solutions, renewable energy, affordable housing, and cooperative development across Nigeria's agricultural value chain."
          name="description"
        />
        <meta
          name="keywords"
          content="BFG Capital Management, agricultural value chain Nigeria, smallholder farmers Nigeria, sustainable agriculture Nigeria, farm estate development, agricultural financing Nigeria, renewable energy for farmers, affordable housing for farmers, agricultural cooperatives Nigeria, farm inputs Nigeria, land title acquisition, financial advisory agriculture, tree crops farming, livestock farming Nigeria, solar power agriculture, rural development Nigeria, agricultural infrastructure, agribusiness investment Nigeria, sustainable farming solutions, TA Commodity Producers subsidiary"
        />
        <meta name="author" content="BFG Capital Management Limited" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="BFG Capital Management - Building Sustainable Agricultural Value Chains"
        />
        <meta
          property="og:description"
          content="Empowering smallholder farmers and rural communities through comprehensive agricultural solutions, renewable energy, and sustainable development in Nigeria."
        />
        <meta property="og:image" content="/assets/img/bfg_logo.png" />
        <meta
          property="og:url"
          content="https://tacommodity.com/bfg-capital-management"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BFG Capital Management - Sustainable Agricultural Value Chains"
        />
        <meta
          name="twitter:description"
          content="Transforming agriculture into viable business through end-to-end solutions for smallholder farmers in Nigeria."
        />
        <meta name="twitter:image" content="/assets/img/bfg_logo.png" />
        {/* Favicon */}
        <link rel="icon" href="/assets/img/bfg/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/img/bfg_logo.png" />
      </Head>
      <div className="bfg-brand-context">
        <main className={styles.main}>
          {/* Hero Section with Enhanced Design */}
          <section 
            id="hero" 
            className="d-flex align-items-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(45, 80, 22, 0.95), rgba(107, 148, 64, 0.85)), url('/assets/img/bfg-hero-bg2.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: 'calc(100vh - 110px)',
              position: 'relative'
            }}
          >
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-8">
                  <h2 className="text-white mb-4" style={{ fontSize: '48px', fontWeight: 900 }}>
                    Building Sustainable Agricultural Value Chains
                  </h2>
                  <p className="text-white mb-4" style={{ fontSize: '20px', lineHeight: 1.6 }}>
                    Empowering smallholder farmers, strengthening rural communities, and unlocking long-term value across Nigeria's agricultural ecosystem.
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <a href="#contact" className="btn btn-lg" style={{ 
                      backgroundColor: '#C5A059',
                      color: '#fff',
                      borderRadius: '50px',
                      padding: '12px 40px',
                      fontWeight: 600,
                      border: 'none',
                      transition: 'all 0.3s'
                    }}>
                      Partner With Us
                    </a>
                    <a href="#about" className="btn btn-lg btn-outline-light" style={{ 
                      borderRadius: '50px',
                      padding: '12px 40px',
                      fontWeight: 600
                    }}>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section with Icon Boxes */}
          <section id="about" className="about">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>What Sets Us Apart</h2>
                <p>As a subsidiary of T A Commodity Producers Co Nigeria Limited, we deliver scalable solutions that transform agriculture into a viable business.</p>
              </div>

              <div className="row">
                {[
                  { 
                    icon: "bi bi-award", 
                    title: "End-to-End Solutions", 
                    desc: "Complete agricultural value-chain support from production to market access, ensuring seamless integration at every stage." 
                  },
                  { 
                    icon: "bi bi-people", 
                    title: "Smallholder Focus", 
                    desc: "Dedicated to making agriculture scalable and profitable for smallholder farmers through innovative financing and support systems." 
                  },
                  { 
                    icon: "bi bi-heart", 
                    title: "Community-Driven", 
                    desc: "Building sustainable cooperative models that strengthen rural communities and create lasting social impact." 
                  },
                  { 
                    icon: "bi bi-lightning", 
                    title: "Future-Ready", 
                    desc: "Sustainable, renewable, and commercially viable agricultural solutions designed for long-term growth and resilience." 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="col-lg-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="icon-box mb-4">
                      <div className="icon">
                        <i className={item.icon}></i>
                      </div>
                      <h4 className="title">
                        <a href="#services">{item.title}</a>
                      </h4>
                      <p className="description">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="services section-bg">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>Our Services</h2>
                <p>Comprehensive solutions bridging finance, infrastructure, energy, logistics, and community development.</p>
              </div>

              <div className="row">
                {[
                  { icon: "bi bi-globe", title: "Farm Estate Development", desc: "Annual crops, tree crops, vegetables, and livestock farming with modern agricultural techniques." },
                  { icon: "bi bi-briefcase", title: "Financial Advisory", desc: "Expert financial structuring, capital formation, and sustainability planning for agricultural ventures." },
                  { icon: "bi bi-house", title: "Affordable Housing", desc: "Access to decent, affordable housing for farmers, improving welfare and long-term community engagement." },
                  { icon: "bi bi-sun", title: "Renewable Energy", desc: "Solar power systems, community energy solutions, and off-grid power infrastructure." },
                  { icon: "bi bi-clipboard-check", title: "Farm Inputs & Land Title", desc: "Quality farm inputs supply, land documentation assistance, and title acquisition support." },
                  { icon: "bi bi-people-fill", title: "Cooperative Formation", desc: "Establishing farmer cooperatives, strengthening governance, and facilitating resource access." }
                ].map((service, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="icon-box">
                      <div className="icon">
                        <i className={service.icon}></i>
                      </div>
                      <h4 className="title"><a href="#contact">{service.title}</a></h4>
                      <p className="description">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Counts/Impact Section */}
          <section id="impact" className="counts">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>Creating Measurable Impact</h2>
                <p>Impact at BFG Capital Management is not theoretical—it is operational, tangible, and transformative.</p>
              </div>

              <div className="row">
                {[
                  { icon: "bi bi-graph-up-arrow", label: "Productivity Growth", text: "Improved agricultural productivity through modern farming techniques and technology." },
                  { icon: "bi bi-building", label: "Infrastructure Access", text: "Increased access to essential finance, energy, and physical infrastructure." },
                  { icon: "bi bi-currency-exchange", label: "Income Enhancement", text: "Higher farm incomes and improved business viability for rural farmers." },
                  { icon: "bi bi-briefcase", label: "Job Creation", text: "Employment opportunities across the entire agricultural value chain." },
                  { icon: "bi bi-house-heart", label: "Community Development", text: "Significantly improved living conditions and welfare in rural areas." },
                  { icon: "bi bi-basket", label: "Food Security", text: "Stronger national food security and consistent agricultural supply systems." }
                ].map((item, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="count-box">
                      <i className={item.icon} style={{ color: '#C5A059' }}></i>
                      <p style={{ marginTop: '15px', fontWeight: 600, fontSize: '18px', color: '#2d5016' }}>{item.label}</p>
                      <p style={{ fontSize: '14px', color: '#666' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="faq section-bg">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>Partnership Opportunities</h2>
                <p>We welcome collaborations that drive sustainable agricultural development and rural transformation.</p>
              </div>

              <div className="row">
                {[
                  { 
                    question: "Agricultural Investment Projects", 
                    answer: "Partner with us on large-scale agricultural ventures that combine modern farming techniques with sustainable practices. We provide end-to-end support from land acquisition to market access." 
                  },
                  { 
                    question: "Infrastructure Development", 
                    answer: "Collaborate on building critical agricultural infrastructure including processing facilities, storage systems, and distribution networks that strengthen the entire value chain." 
                  },
                  { 
                    question: "Renewable Energy Initiatives", 
                    answer: "Join our efforts to power rural communities and agricultural operations with clean, sustainable energy solutions including solar installations and off-grid power systems." 
                  },
                  { 
                    question: "Community Development Programs", 
                    answer: "Work alongside us to improve rural livelihoods through housing projects, cooperative formation, and comprehensive farmer support programs." 
                  },
                  { 
                    question: "Financial Services Innovation", 
                    answer: "Partner in developing innovative financial products and services tailored to the unique needs of smallholder farmers and agricultural enterprises." 
                  },
                  { 
                    question: "Research & Development", 
                    answer: "Collaborate on agricultural research, technology adoption, and knowledge transfer programs that enhance productivity and sustainability across Nigeria's farming sector." 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="col-lg-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="faq-item mb-4">
                      <h4><i className="bi bi-check-circle" style={{ color: '#C5A059', marginRight: '10px' }}></i>{item.question}</h4>
                      <p style={{ marginLeft: '35px', color: '#666' }}>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>Get in Touch</h2>
                <p>Open to partnerships, investment discussions, and project collaborations. Let's build sustainable agricultural value chains together.</p>
              </div>

              <div className="row">
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="info-box mb-4">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>Interlinked Technologies PLC Block, No. 56 Oladipo Bateye Street, Ikeja GRA, Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="info-box mb-4">
                    <i className="bi bi-envelope"></i>
                    <h3>Email</h3>
                    <p><a href="mailto:bfg@tacommodity.com">bfg@tacommodity.com</a></p>
                  </div>
                </div>

                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="info-box mb-4">
                    <i className="bi bi-telephone"></i>
                    <h3>Phone</h3>
                    <p><a href="tel:+2348037057513">0803 705 7513</a></p>
                    <p><a href="tel:+2349099127403">0909 912 7403</a></p>
                  </div>
                </div>
              </div>

              {/* <div className="row mt-4">
                <div className="col-lg-12" data-aos="fade-up" data-aos-delay="400">
                  <div className="info-box">
                    <i className="bi bi-globe"></i>
                    <h3>Website</h3>
                    <p><a href="http://www.bfgcapitalmanagement.net" target="_blank" rel="noopener noreferrer">www.bfgcapitalmanagement.net</a></p>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
        </main>
        {/* Back to Top Button */}
        <a 
          href="#" 
          className={`back-to-top d-flex align-items-center justify-content-center ${showBackToTop ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          style={{ backgroundColor: '#C5A059' }}
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>

      </div>
        <Script src="assets/js/main.js" />
        <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" />
        <Script src="https://code.jquery.com/jquery-3.6.4.slim.min.js" />
    </BrandWrapper>
  );
}