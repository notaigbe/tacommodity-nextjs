"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import TopBar from "./topbar";
import Link from 'next/link';

export default function Header({ landing = true }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;
    
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
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setShowMobileNav(false);
      }
    };

    // Only add scroll listener if landing is true
    if (landing) {
      window.addEventListener("scroll", handleScroll);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [landing]);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setShowMobileNav(false);
  };

  return (
    <header
      id="header"
      className={`fixed-top ${
        landing
          ? `${isScrolled ? "header-scrolled" : "header-transparent"}`
          : ""
      }`}
      style={
        landing 
          ? { height: '120px' } 
          : { background: 'rgba(13, 24, 22, 1)' }
      }
    >
      {landing && <TopBar />}
      <div 
        className="container d-flex align-items-center justify-content-between" 
        style={
          !landing 
            ? { marginTop: '-30px' } 
            : { marginTop: '-20px' }
        }
      >
        <div className="logo">
          <Link href="/">
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
          </Link>
        </div>

        <nav
          id="navbar"
          className={`navbar ${showMobileNav ? "navbar-mobile" : ""}`}
        >
          <ul>
            <li className="px-2">
              <Link
                className={`nav-link scrollto ${
                  activeSection === "hero" ? "active" : ""
                }`}
                href="/nasus-integration#hero"
                onClick={() => handleNavClick("hero")}
              >
                Home
              </Link>
            </li>
            <li className="px-2">
              <Link
                className={`nav-link scrollto ${
                  activeSection === "about" ? "active" : ""
                }`}
                href="/nasus-integration#about"
                onClick={() => handleNavClick("about")}
              >
                About Us
              </Link>
            </li>
            <li className="px-2">
              <Link
                className={`nav-link scrollto ${
                  activeSection === "services" ? "active" : ""
                }`}
                href="/nasus-integration#services"
                onClick={() => handleNavClick("services")}
              >
                Services
              </Link>
            </li>
            <li className="px-2">
              <Link
                className={`nav-link scrollto ${
                  activeSection === "portfolio" ? "active" : ""
                }`}
                href="/nasus-integration#portfolio"
                onClick={() => handleNavClick("portfolio")}
              >
                Projects
              </Link>
            </li>
            <li className="px-2">
              <Link
                className={`nav-link scrollto ${
                  activeSection === "team" ? "active" : ""
                }`}
                href="/nasus-integration#team"
                onClick={() => handleNavClick("team")}
              >
                Team
              </Link>
            </li>
            <li className="px-2">
              <Link
                className={`nav-link scrollto ${
                  activeSection === "contact" ? "active" : ""
                }`}
                href="/nasus-integration#contact"
                onClick={() => handleNavClick("contact")}
              >
                Contact
              </Link>
            </li>
            <li className="px-2">
              <a className="nav-link btn btn-outline-warning" href="/">
                TA Commodity
              </a>
            </li>
            <li className="p-4">
              <Link
                className="btn btn-warning p-2"
                href="/nasus-integration#cta"
                style={{ background: "#f38428" }}
                onClick={() => handleNavClick("cta")}
              >
                Get Started
              </Link>
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