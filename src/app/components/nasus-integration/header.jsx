"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import TopBar from "./topbar";

export default function Header({landing}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  console.log(landing);
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (landing) {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }}
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  useEffect(() => {
    const handleScroll = () => {

        setIsScrolled(window.scrollY > 100);
      
    };

    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setShowMobileNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
  id="header"
  className={`fixed-top ${
    landing
      ? `h-120 ${isScrolled ? "header-scrolled" : "header-transparent"}`
      : ""
  }`}
  style={landing ? { height: '120px' } : {background: 'rgba(13, 24, 22, 1)' }}
>

      {landing && <TopBar />}
      <div className="container d-flex align-items-center justify-content-between" style={!landing ? { marginTop: '-30px' }:{marginTop: '-20px'}}>
        <div className="logo">
          <a href="/">
            <Image
              src={
                isScrolled
                  ? "/assets/nasus-integration/img/logo.png"
                  : "/assets/nasus-integration/img/logo-white.png"
              }
              alt="Logo"
              className="img-fluid"
              height={500}
              width={500}
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        </div>

        <nav
          id="navbar"
          className={`navbar ${showMobileNav ? "navbar-mobile" : ""}`}
        >
          <ul>
            <li className="px-2">
              <a
                className={`nav-link scrollto ${
                  activeSection === "hero" ? "active" : ""
                }`}
                href="/nasus-integration#hero"
                onClick={() => {setActiveSection("hero"), setShowMobileNav(false)}}
              >
                Home
              </a>
            </li>
            <li className="px-2">
              <a
                className={`nav-link scrollto ${
                  activeSection === "about" ? "active" : ""
                }`}
                href="/nasus-integration#about"
                onClick={() => {setActiveSection("about"), setShowMobileNav(false)}}
              >
                About Us
              </a>
            </li>
            
            <li className="px-2">
              <a
                className={`nav-link scrollto ${
                  activeSection === "services" ? "active" : ""
                }`}
                href="/nasus-integration#services"
                onClick={() => {setActiveSection("services"), setShowMobileNav(false)}}
              >
                Services
              </a>
            </li>
            <li className="px-2">
              <a
                className={`nav-link scrollto ${
                  activeSection === "portfolio" ? "active" : ""
                }`}
                href="/nasus-integration#portfolio"
                onClick={() => {setActiveSection("portfolio"), setShowMobileNav(false)}}
              >
                Projects
              </a>
            </li>
            <li className="px-2">
              <a
                className={`nav-link scrollto ${
                  activeSection === "team" ? "active" : ""
                }`}
                href="/nasus-integration#team"
                onClick={() => {setActiveSection("team"), setShowMobileNav(false)}}
              >
                Team
              </a>
            </li>
            <li className="px-2">
              <a
                className={`nav-link scrollto ${
                  activeSection === "contact" ? "active" : ""
                }`}
                href="/nasus-integration#contact"
                onClick={() => {setActiveSection("contact"), setShowMobileNav(false)}}
              >
                Contact
              </a>
            </li>
            <li className="px-2">
              <a className="nav-link btn btn-outline-warning" href="/">
                TA Commodity
              </a>
            </li>
            <li className="p-4">
              <a
                className="btn btn-warning p-2"
                href="/nasus-integration#cta"
                style={{ background: "#f38428" }}
                onClick={() => {setActiveSection("cta"), setShowMobileNav(false)}}
              >
                Get Started
              </a>
            </li>
          </ul>

          <i
            className={`bi ${
              showMobileNav ? "bi-x" : "bi-list"
            } mobile-nav-toggle`}
            onClick={toggleMobileNav}
            style={{ cursor: "pointer" }}
          ></i>
        </nav>
      </div>
    </header>
  );
}
