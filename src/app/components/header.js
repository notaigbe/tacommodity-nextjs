"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { List, X, ChevronDown } from "react-bootstrap-icons";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

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
              <Link className="nav-link scrollto active" href="/#hero" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/#about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/#services" onClick={closeMenu}>
                Core Values
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/#what-we-do" onClick={closeMenu}>
                What We Do
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/#portfolio" onClick={closeMenu}>
                Training
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/#team" onClick={closeMenu}>
                Team
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/projects" onClick={closeMenu}>
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
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '10px 0 10px 30px',
                  cursor: 'pointer',
                  color: '#214f3c',
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
              <Link className="nav-link scrollto" href="/#contact" onClick={closeMenu}>
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


export function PHAGROHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
              <Link className="nav-link scrollto active" href="/" onClick={closeMenu}>
                Return to TA Commodity
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/women-sustainable-group#about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/women-sustainable-group#team" onClick={closeMenu}>
                Team
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/women-sustainable-group#portfolio" onClick={closeMenu}>
                Training
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/women-sustainable-group#contact" onClick={closeMenu}>
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

export function BFGHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
            <li><Link className="nav-link active" href="/" onClick={closeMenu}>Return to TA Commodity</Link></li>
            <li><Link className="nav-link" href="/bfg-capital-management#about" onClick={closeMenu}>About BFG</Link></li>
            <li><Link className="nav-link" href="/bfg-capital-management#services" onClick={closeMenu}>Our Services</Link></li>
            <li><Link className="nav-link" href="/bfg-capital-management#impact" onClick={closeMenu}>Impact</Link></li>
            <li><Link className="nav-link" href="/bfg-capital-management#partnerships" onClick={closeMenu}>Partnerships</Link></li>
            <li><Link className="nav-link" href="/bfg-capital-management#contact" onClick={closeMenu}>Contact</Link></li>
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