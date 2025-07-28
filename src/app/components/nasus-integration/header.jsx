'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import TopBar from "./topbar";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`fixed-top ${isScrolled ? "header-scrolled" : "header-transparent"}`}
    >
      <TopBar />
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <a href="/">
          {(isScrolled) ?
            (<Image
              src="/assets/nasus-integration/img/logo.png"
              alt=""
              className="img-fluid"
              height={500}
              width={500}
              style={{ width: "100%", height: "100%" }}
            />):(<Image
              src="/assets/nasus-integration/img/logo-white.png"
              alt=""
              className="img-fluid"
              height={500}
              width={500}
              style={{ width: "100%", height: "100%" }}
            />)}

          </a>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                Projects
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li>
            
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="nav-link btn btn-ouline-warning" href="/">
                TA Commodity
              </a>
            </li>
            <li>
              <a className="btn btn-warning p-2" href="#cta" style={{background:'#f38428'}}>
                Get Started
              </a>
            </li>
          </ul>

          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
