import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";

const PILLARS = [
  {
    icon: "bx bx-trending-up",
    title: "Career Growth",
    desc: "Structured paths for professional development across agriculture, finance, and operations.",
  },
  {
    icon: "bx bx-group",
    title: "Collaborative Culture",
    desc: "Work alongside passionate people united by a mission to transform African agriculture.",
  },
  {
    icon: "bx bx-world",
    title: "Real Impact",
    desc: "Your work directly connects smallholder farmers across Nigeria to global commodity markets.",
  },
];

export default function CareersCTA() {
  return (
    <section
      id="careers-cta"
      style={{
        background: "linear-gradient(135deg, #1a3d2e 0%, #214f3c 60%, #2d6b52 100%)",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* decorative background ring */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-120px",
          top: "-120px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          border: "60px solid rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-80px",
          bottom: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "50px solid rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />

      <div className="container position-relative">
        {/* Headline */}
        <div className="text-center mb-5" data-aos="fade-up">
          <p
            style={{
              color: "#55aa82",
              fontWeight: 700,
              letterSpacing: "2px",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Join Our Team
          </p>
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontFamily: "var(--font-raleway), sans-serif",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "16px",
            }}
          >
            Build a Career That Feeds <br className="d-none d-md-block" />
            the World
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            We are always looking for driven, purpose-led individuals ready to make a
            lasting difference in Nigeria&apos;s agricultural value chain.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="row g-4 mb-5 justify-content-center">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "12px",
                  padding: "28px 24px",
                  height: "100%",
                  transition: "background 0.25s",
                }}
              >
                <i
                  className={p.icon}
                  style={{ fontSize: "2rem", color: "#55aa82", display: "block", marginBottom: "14px" }}
                />
                <h5 style={{ color: "#fff", fontWeight: 700, marginBottom: "8px" }}>{p.title}</h5>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", margin: 0, lineHeight: 1.65 }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <Link
            href="/careers"
            className="btn btn-lg me-3 mb-3"
            style={{
              background: "#55aa82",
              color: "#fff",
              fontWeight: 700,
              padding: "14px 36px",
              borderRadius: "6px",
              letterSpacing: "0.4px",
              border: "2px solid #55aa82",
              transition: "all 0.2s",
            }}
          >
            View Open Positions
          </Link>
          <Link
            href="/careers/apply"
            className="btn btn-lg mb-3"
            style={{
              background: "transparent",
              color: "#fff",
              fontWeight: 600,
              padding: "14px 36px",
              borderRadius: "6px",
              letterSpacing: "0.4px",
              border: "2px solid rgba(255,255,255,0.4)",
              transition: "all 0.2s",
            }}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
