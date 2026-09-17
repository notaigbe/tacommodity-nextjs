"use client";

import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";

// `height` is tuned per logo so the marks read at the same optical size;
// the source JPGs carry very different amounts of built-in whitespace.
const partners = [
  { src: "/assets/img/partners/okomu.jpg", alt: "Okomu Oil Palm Company", height: 76 },
  { src: "/assets/img/partners/pind.jpg", alt: "PIND Foundation", height: 116 },
  { src: "/assets/img/partners/idh.jpg", alt: "IDH, the Sustainable Trade Initiative", height: 76 },
  { src: "/assets/img/partners/sombreiro-kapital.jpg", alt: "Sombreiro Kapital", height: 76 },
];

export default function Clients() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Only arm the reveal when the row is still below the fold, so content is
    // never hidden if the observer fails to fire.
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.dataset.reveal = "armed";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = "in";
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="clients" ref={sectionRef} className="clients section-bg" aria-labelledby="clients-label">
      <div className="container">
        <p id="clients-label" className="clients-label">
          In partnership with
        </p>
        <ul className="clients-row">
          {partners.map((p, i) => (
            <li key={p.src} className="clients-logo" style={{ "--i": i, "--logo-h": `${p.height}px` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
