"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { List, X, ChevronDown } from "react-bootstrap-icons";
import { useScrollSpy, scrollToSection } from "./use-scroll-spy";

// Home page sections the nav links to, in document order.
const SECTION_IDS = ["hero", "services", "what-we-do", "portfolio", "team", "contact"];
const SUBSIDIARY_PATHS = [
  "/friends-of-smart-plantation-growers-initiative",
  "/women-sustainable-group",
  "/bfg-capital-management",
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  // The home page sections only exist on "/", so the spy is idle elsewhere.
  const activeSection = useScrollSpy(SECTION_IDS, pathname === "/");

  const isHashActive = (hash) => pathname === "/" && activeSection === hash.slice(1);
  const isRouteActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  // On the home page, scroll here; from another route let the router navigate
  // and HashScroll handle the landing.
  const handleHashClick = (event, hash) => {
    closeMenu();
    if (pathname !== "/") return;
    if (scrollToSection(hash)) event.preventDefault();
  };

  useEffect(() => {
    const id = setTimeout(() => {
      const scrolled = window.scrollY > 100;
      const header = document.querySelector('#header');
      if (header) {
        header.classList.toggle('fixed-top', scrolled);
        header.nextElementSibling?.classList.toggle('scrolled-offset', scrolled);
      }
      document.querySelector('.back-to-top')?.classList.toggle('active', scrolled);
    }, 0);
    return () => clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      const header = document.querySelector('#header');
      const backToTop = document.querySelector('.back-to-top');

      if (header) {
        header.classList.toggle('fixed-top', scrolled);
        header.nextElementSibling?.classList.toggle('scrolled-offset', scrolled);
      }
      if (backToTop) backToTop.classList.toggle('active', scrolled);
    };

    // Preloader
    const preloader = document.querySelector('#preloader');
    if (preloader) preloader.remove();

    const id = setTimeout(handleScroll, 0);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(id);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when navigating
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <div className="logo me-auto">
          <h1>
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/assets/img/ta_logo.png"
                alt="TA Commodity company logo"
                width={50}
                height={50}
                style={{ height: "auto", width: "auto" }}
              />
              TA <br/>Commodity
            </Link>
          </h1>
        </div>

        <nav id="navbar" className={menuOpen ? "navbar navbar-mobile" : "navbar"}>
          <ul>
            <li>
              <Link
                className={`nav-link${isHashActive("#hero") ? " active" : ""}`}
                href="/#hero"
                aria-current={isHashActive("#hero") ? "true" : undefined}
                onClick={(e) => handleHashClick(e, "#hero")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link${isRouteActive("/about") ? " active" : ""}`}
                href="/about"
                aria-current={isRouteActive("/about") ? "page" : undefined}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link${isHashActive("#services") ? " active" : ""}`}
                href="/#services"
                aria-current={isHashActive("#services") ? "true" : undefined}
                onClick={(e) => handleHashClick(e, "#services")}
              >
                Core Values
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link${isHashActive("#what-we-do") ? " active" : ""}`}
                href="/#what-we-do"
                aria-current={isHashActive("#what-we-do") ? "true" : undefined}
                onClick={(e) => handleHashClick(e, "#what-we-do")}
              >
                What We Do
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link${isHashActive("#portfolio") ? " active" : ""}`}
                href="/#portfolio"
                aria-current={isHashActive("#portfolio") ? "true" : undefined}
                onClick={(e) => handleHashClick(e, "#portfolio")}
              >
                Training
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link${isHashActive("#team") ? " active" : ""}`}
                href="/#team"
                aria-current={isHashActive("#team") ? "true" : undefined}
                onClick={(e) => handleHashClick(e, "#team")}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link${isRouteActive("/projects") ? " active" : ""}`}
                href="/projects"
                aria-current={isRouteActive("/projects") ? "page" : undefined}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>

            {/* DROPDOWN - TAP TO EXPAND ON MOBILE */}
            <li className={`dropdown ${dropdownOpen ? 'active' : ''}`}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }}
                aria-expanded={dropdownOpen}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '10px 0 10px 30px',
                  cursor: 'pointer',
                  color: SUBSIDIARY_PATHS.some(isRouteActive) ? '#288f5f' : '#214f3c',
                  fontSize: '15px',
                  fontFamily: '"Open Sans", sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span>Subsidiaries</span>
                <ChevronDown size={16} style={{ transition: 'transform 0.3s' }} />
              </button>

              <ul>
                <li>
                  <Link 
                    href="/friends-of-smart-plantation-growers-initiative"
                    onClick={closeMenu}
                    style={{ padding: '10px 20px', display: 'block', color: '#1f3548', textDecoration: 'none' }}
                  >
                    Friends of Smart Plantation Growers Initiative
                  </Link>
                </li>
                <li>
                  <Link
                    href="/women-sustainable-group"
                    onClick={closeMenu}
                    style={{ padding: '10px 20px', display: 'block', color: '#1f3548', textDecoration: 'none' }}
                  >
                    Women Sustainable Group
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bfg-capital-management"
                    onClick={closeMenu}
                    style={{ padding: '10px 20px', display: 'block', color: '#1f3548', textDecoration: 'none' }}
                  >
                    BFG Capital Management
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                className={`nav-link${isHashActive("#contact") ? " active" : ""}`}
                href="/#contact"
                aria-current={isHashActive("#contact") ? "true" : undefined}
                onClick={(e) => handleHashClick(e, "#contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* MOBILE MENU BUTTON — outside nav so it is never inside the overlay */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            lineHeight: 0,
            flexShrink: 0,
          }}
        >
          {menuOpen ? (
            <X size={34} color="#214f3c" />
          ) : (
            <List size={34} color="#214f3c" />
          )}
        </button>
      </div>
    </header>
  );
}


// Sections on the Women Sustainable Group page, in document order.
const PHAGRO_SECTION_IDS = ["about", "team", "portfolio", "contact"];

export function PHAGROHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const activeSection = useScrollSpy(PHAGRO_SECTION_IDS);

  const isHashActive = (hash) => activeSection === hash.slice(1);

  // These links point at this page's own sections, so scroll here when the
  // section exists; otherwise let the router navigate to the page.
  const handleHashClick = (event, hash) => {
    closeMenu();
    if (scrollToSection(hash)) event.preventDefault();
  };

  useEffect(() => {
    const id = setTimeout(() => {
      const scrolled = window.scrollY > 100;
      const header = document.querySelector('#header');
      if (header) {
        header.classList.toggle('fixed-top', scrolled);
        header.nextElementSibling?.classList.toggle('scrolled-offset', scrolled);
      }
    }, 0);
    return () => clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      const header = document.querySelector('#header');

      if (header) {
        header.classList.toggle('fixed-top', scrolled);
        header.nextElementSibling?.classList.toggle('scrolled-offset', scrolled);
      }
    };

    const preloader = document.querySelector('#preloader');
    if (preloader) preloader.remove();

    const id = setTimeout(handleScroll, 0);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(id);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <div className="logo me-auto">
          <h1>
            <Link href="/" onClick={closeMenu} style={{ color: "#1C5CA1" }}>
              <Image
                src="/assets/img/phagro_logo.png"
                alt="PHAGRO company logo"
                width={50}
                height={50}
                style={{ height: "auto" }}
              />
              PHAGRO
            </Link>
          </h1>
        </div>

        <nav id="navbar" className={menuOpen ? "navbar navbar-mobile" : "navbar"}>
          <ul>
            <li>
              <Link className="nav-link" href="/" onClick={closeMenu}>
                Return to TA Commodity
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link${isHashActive("#about") ? " active" : ""}`}
                href="/women-sustainable-group#about"
                aria-current={isHashActive("#about") ? "true" : undefined}
                onClick={(e) => handleHashClick(e, "#about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link${isHashActive("#team") ? " active" : ""}`}
                href="/women-sustainable-group#team"
                aria-current={isHashActive("#team") ? "true" : undefined}
                onClick={(e) => handleHashClick(e, "#team")}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link${isHashActive("#portfolio") ? " active" : ""}`}
                href="/women-sustainable-group#portfolio"
                aria-current={isHashActive("#portfolio") ? "true" : undefined}
                onClick={(e) => handleHashClick(e, "#portfolio")}
              >
                Training
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link${isHashActive("#contact") ? " active" : ""}`}
                href="/women-sustainable-group#contact"
                aria-current={isHashActive("#contact") ? "true" : undefined}
                onClick={(e) => handleHashClick(e, "#contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="mobile-nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            lineHeight: 0,
            flexShrink: 0,
          }}
        >
          {menuOpen ? (
            <X size={34} color="#1C5CA1" />
          ) : (
            <List size={34} color="#1C5CA1" />
          )}
        </button>
      </div>
    </header>
  );
}

// Sections on the BFG Capital Management page, in document order.
const BFG_SECTION_IDS = ["about", "services", "impact", "partnerships", "contact"];

export function BFGHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const activeSection = useScrollSpy(BFG_SECTION_IDS);

  const isHashActive = (hash) => activeSection === hash.slice(1);

  const handleHashClick = (event, hash) => {
    closeMenu();
    if (scrollToSection(hash)) event.preventDefault();
  };

  useEffect(() => {
    const id = setTimeout(() => {
      const scrolled = window.scrollY > 100;
      const header = document.querySelector('#header');
      if (header) {
        header.classList.toggle('fixed-top', scrolled);
        header.nextElementSibling?.classList.toggle('scrolled-offset', scrolled);
      }
    }, 0);
    return () => clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      const header = document.querySelector('#header');

      if (header) {
        header.classList.toggle('fixed-top', scrolled);
        header.nextElementSibling?.classList.toggle('scrolled-offset', scrolled);
      }
    };

    const preloader = document.querySelector('#preloader');
    if (preloader) preloader.remove();

    const id = setTimeout(handleScroll, 0);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(id);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="header" className="d-flex align-items-center bfg-navbar">
      <div className="container d-flex align-items-center">
        <div className="logo me-auto">
          <h1>
            <Link href="/bfg-capital-management" style={{ color: "#C5A059", display: 'flex', alignItems: 'center', gap: '10px' }} onClick={closeMenu}>
              <Image
                src="/assets/img/bfg_logo_full.png"
                alt="BFG Capital Logo"
                width={350}
                height={300}
                style={{ height: "auto", width: "100%" }}
              />
            </Link>
          </h1>
        </div>

        <nav id="navbar" className={menuOpen ? "navbar navbar-mobile" : "navbar"}>
          <ul>
            <li><Link className="nav-link" href="/" onClick={closeMenu}>Return to TA Commodity</Link></li>
            {[
              { hash: "#about", label: "About BFG" },
              { hash: "#services", label: "Our Services" },
              { hash: "#impact", label: "Impact" },
              { hash: "#partnerships", label: "Partnerships" },
              { hash: "#contact", label: "Contact" },
            ].map(({ hash, label }) => (
              <li key={hash}>
                <Link
                  className={`nav-link${isHashActive(hash) ? " active" : ""}`}
                  href={`/bfg-capital-management${hash}`}
                  aria-current={isHashActive(hash) ? "true" : undefined}
                  onClick={(e) => handleHashClick(e, hash)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="mobile-nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            lineHeight: 0,
            flexShrink: 0,
          }}
        >
          {menuOpen ? <X size={34} color="#C5A059" /> : <List size={34} color="#C5A059" />}
        </button>
      </div>
    </header>
  );
}