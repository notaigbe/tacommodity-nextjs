import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";

const partners = [
  { src: "/assets/img/partners/2gareni.jpg", alt: "2Gareni" },
  { src: "/assets/img/partners/alvanblanch.jpg", alt: "Alvan Blanch" },
  { src: "/assets/img/partners/FMN.jpg", alt: "FMN" },
  { src: "/assets/img/partners/okomu.jpg", alt: "Okomu" },
  { src: "/assets/img/partners/PWC.jpg", alt: "PWC" },
  { src: "/assets/img/partners/terraagric.jpg", alt: "Terra Agric" },
  { src: "/assets/img/partners/wacapol.jpg", alt: "Wacapol" },
];

export default function Clients() {
  return (
    <section id="clients" className="clients section-bg">
      <div className="clients-track-wrap">
        <div className="clients-track">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="clients-logo"
              aria-hidden={i >= partners.length ? "true" : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={i < partners.length ? p.alt : ""} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
