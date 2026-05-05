"use client";

import { useEffect } from "react";
import Link from "next/link";
import BrandWrapper from "@/app/components/BrandWrapper";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.css";
import "@/app/globals.css";
import "@/app/styles/style.css";

const OPEN_POSITIONS = [
  {
    title: "Agronomist",
    type: "Full-time",
    location: "Port Harcourt, Rivers State",
    department: "Agriculture",
    summary:
      "Support smallholder farmers with crop management advice, soil analysis, and yield optimisation across our partner farm clusters.",
  },
  {
    title: "Field Officer",
    type: "Full-time",
    location: "Edo State / Delta State",
    department: "Operations",
    summary:
      "Act as the on-ground link between TA Commodity and farming cooperatives — coordinating input distribution, data collection, and farmer training sessions.",
  },
  {
    title: "Supply Chain Manager",
    type: "Full-time",
    location: "Lagos",
    department: "Logistics",
    summary:
      "Oversee end-to-end commodity movement from farm gate to export port, managing transport partners, warehousing, and quality control.",
  },
  {
    title: "Business Development Executive",
    type: "Full-time",
    location: "Lagos",
    department: "Commercial",
    summary:
      "Identify and develop new buyer relationships in global commodity markets, structuring offtake agreements and representing TA Commodity at trade events.",
  },
  {
    title: "Finance Officer",
    type: "Full-time",
    location: "Lagos",
    department: "Finance",
    summary:
      "Manage financial reporting, budget tracking, and grant compliance for our smallholder-support programmes and commercial trading operations.",
  },
  {
    title: "IT / Data Analyst",
    type: "Contract",
    location: "Remote",
    department: "Technology",
    summary:
      "Build dashboards, analyse farm and trading data, and support digital transformation initiatives across our operations.",
  },
];

const BENEFITS = [
  { icon: "bx bx-heart", label: "Health & Wellness", desc: "Comprehensive HMO cover for you and dependants." },
  { icon: "bx bx-book-open", label: "Learning & Development", desc: "Annual training budget and access to agricultural conferences." },
  { icon: "bx bx-trending-up", label: "Career Progression", desc: "Clear growth tracks reviewed every six months." },
  { icon: "bx bx-globe", label: "Global Exposure", desc: "Collaborate with international buyers, NGOs, and development partners." },
  { icon: "bx bx-group", label: "Inclusive Culture", desc: "A diverse team drawn from across Nigeria's agricultural belt." },
  { icon: "bx bx-leaf", label: "Purposeful Work", desc: "Every role directly supports smallholder farmer livelihoods." },
];

const DEPT_COLORS = {
  Agriculture: "#2d6b52",
  Operations: "#3a7d5e",
  Logistics: "#1a3d2e",
  Commercial: "#3d8f6b",
  Finance: "#285c47",
  Technology: "#224e3c",
};

export default function CareersPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init({ duration: 900, easing: "ease-in-out", once: true });
    }
  }, []);

  return (
    <BrandWrapper brand="TA">
      {/* Breadcrumbs */}
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Careers</h2>
            <ol>
              <li><Link href="/">Home</Link></li>
              <li>Careers</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Hero intro */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a3d2e 0%, #214f3c 100%)",
          padding: "80px 0 70px",
        }}
      >
        <div className="container text-center" data-aos="fade-up">
          <p
            style={{
              color: "#55aa82",
              fontWeight: 700,
              letterSpacing: "2.5px",
              fontSize: "0.78rem",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Work With Us
          </p>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontFamily: "var(--font-raleway), sans-serif",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Grow Your Career.<br className="d-none d-md-block" />
            Grow Nigerian Agriculture.
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              maxWidth: "620px",
              margin: "0 auto 36px",
              lineHeight: 1.75,
              fontSize: "1.05rem",
            }}
          >
            At TA Commodity we are on a mission to connect smallholder farmers to global
            markets. We are building a team of dedicated professionals who believe that
            agriculture is the engine of Nigeria&apos;s future — and yours.
          </p>
          <Link
            href="/careers/apply"
            className="btn btn-lg"
            style={{
              background: "#55aa82",
              color: "#fff",
              fontWeight: 700,
              padding: "14px 40px",
              borderRadius: "6px",
              fontSize: "1rem",
            }}
          >
            <i className="bi bi-send me-2"></i>Apply Now
          </Link>
        </div>
      </section>

      {/* Why join us */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Why Join TA Commodity?</h2>
            <p>
              We offer more than a job — we offer the chance to be part of a movement that is
              reshaping how Nigeria&apos;s agricultural produce reaches the world.
            </p>
          </div>

          <div className="row g-4">
            {BENEFITS.map((b, i) => (
              <div
                key={b.label}
                className="col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div
                  className="d-flex gap-3 align-items-start p-4 h-100"
                  style={{
                    border: "1px solid #e8f0eb",
                    borderRadius: "10px",
                    background: "#f9fcfa",
                  }}
                >
                  <i
                    className={b.icon}
                    style={{ fontSize: "1.8rem", color: "#214f3c", flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <h6 style={{ fontWeight: 700, marginBottom: "6px", color: "#1a3d2e" }}>{b.label}</h6>
                    <p style={{ fontSize: "0.88rem", color: "#555", margin: 0, lineHeight: 1.6 }}>{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section style={{ padding: "70px 0", background: "#f4f8f6" }}>
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Open Positions</h2>
            <p>
              Explore our current vacancies. Don&apos;t see the right fit? Send us an open
              application — we&apos;re always interested in exceptional talent.
            </p>
          </div>

          <div className="row g-4">
            {OPEN_POSITIONS.map((job, i) => (
              <div
                key={job.title}
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay={i * 70}
              >
                <div
                  className="h-100 p-4"
                  style={{
                    background: "#fff",
                    border: "1px solid #ddeae2",
                    borderRadius: "10px",
                    borderLeft: `4px solid ${DEPT_COLORS[job.department] ?? "#214f3c"}`,
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                    <h5 style={{ fontWeight: 700, color: "#1a3d2e", margin: 0 }}>{job.title}</h5>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        background: "#e8f3ed",
                        color: "#214f3c",
                        padding: "3px 10px",
                        borderRadius: "20px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {job.type}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.82rem", color: "#666", marginBottom: "10px" }}>
                    <i className="bx bx-map-pin me-1" style={{ color: "#55aa82" }} />
                    {job.location}
                    <span className="mx-2" style={{ color: "#ccc" }}>|</span>
                    <i className="bx bx-briefcase me-1" style={{ color: "#55aa82" }} />
                    {job.department}
                  </p>

                  <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.65, marginBottom: "18px" }}>
                    {job.summary}
                  </p>

                  <Link
                    href={`/careers/apply?position=${encodeURIComponent(job.title)}`}
                    className="btn btn-sm"
                    style={{
                      background: "#214f3c",
                      color: "#fff",
                      fontWeight: 600,
                      borderRadius: "5px",
                      padding: "7px 20px",
                    }}
                  >
                    Apply for this Role
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* open application nudge */}
          <div
            className="text-center mt-5 p-4"
            style={{
              background: "#fff",
              border: "1px dashed #b5d4c3",
              borderRadius: "10px",
            }}
            data-aos="fade-up"
          >
            <i className="bx bx-envelope-open" style={{ fontSize: "2rem", color: "#55aa82" }} />
            <h5 style={{ color: "#1a3d2e", fontWeight: 700, marginTop: "10px" }}>
              Don&apos;t see your role?
            </h5>
            <p style={{ color: "#555", marginBottom: "18px" }}>
              Send us an open application — we review all submissions and will reach out when a
              suitable opportunity arises.
            </p>
            <Link
              href="/careers/apply"
              className="btn"
              style={{
                background: "#214f3c",
                color: "#fff",
                fontWeight: 600,
                padding: "10px 28px",
                borderRadius: "6px",
              }}
            >
              Submit Open Application
            </Link>
          </div>
        </div>
      </section>

      {/* Culture strip */}
      <section style={{ padding: "64px 0", background: "#214f3c" }}>
        <div className="container text-center" data-aos="fade-up">
          <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "14px" }}>
            Our hiring process is simple and transparent.
          </h3>
          <div className="row justify-content-center g-3 mt-2">
            {[
              { step: "1", label: "Submit Application" },
              { step: "2", label: "Screening Call" },
              { step: "3", label: "Panel Interview" },
              { step: "4", label: "Offer & Onboarding" },
            ].map((s, i) => (
              <div key={s.step} className="col-6 col-md-3" data-aos="fade-up" data-aos-delay={i * 80}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "10px",
                    padding: "20px 12px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#55aa82",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 12px",
                    }}
                  >
                    {s.step}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.85)", margin: 0, fontWeight: 600, fontSize: "0.9rem" }}>
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BrandWrapper>
  );
}
