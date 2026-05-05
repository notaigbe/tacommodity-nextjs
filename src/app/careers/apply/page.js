"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import BrandWrapper from "@/app/components/BrandWrapper";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.css";
import "@/app/globals.css";
import "@/app/styles/style.css";

const POSITIONS = [
  "Agric Extension Officer",
  "Project Team Member",
  "Human Resource Office Assistant",
  "Accountant",
  "Field Worker"
];

const QUALIFICATIONS = [
  "SSCE / O-Level",
  "OND",
  "HND",
  "BSc / BA",
  "MSc / MBA",
  "PhD",
  "Professional Certificate",
  "Other",
];

const EXPERIENCE_RANGES = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_SIZE = 5 * 1024 * 1024;

const schema = z.object({
  // Section 1
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  location: z.string().min(2, "Current location is required"),
  // Section 2
  position: z.string().min(1, "Please select a position"),
  immediateAvailability: z
    .string()
    .refine((v) => v === "yes" || v === "no", "Please indicate your availability"),
  preferredLocation: z.string().optional(),
  // Section 3
  highestQualification: z.string().min(1, "Please select your highest qualification"),
  otherQualification: z.string().optional(),
  yearsOfExperience: z.string().min(1, "Please select your years of experience"),
  previousEmployer: z.string().optional(),
  keySkills: z.string().min(5, "Please describe your key skills"),
  // Section 4
  coverLetter: z.string().optional(),
  cv: z
    .any()
    .refine((files) => files?.length > 0, "CV/Resume is required")
    .refine(
      (files) => ACCEPTED_TYPES.includes(files?.[0]?.type),
      "Only PDF, DOC, or DOCX files are accepted"
    )
    .refine((files) => files?.[0]?.size <= MAX_SIZE, "File must be smaller than 5MB"),
  // Section 5
  declaration: z
    .boolean()
    .refine((v) => v === true, "You must confirm the declaration to submit"),
  // Honeypot
  honeypot: z.string().max(0),
}).superRefine((data, ctx) => {
  if (data.highestQualification === "Other" && !data.otherQualification?.trim()) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Please specify your qualification",
      path: ["otherQualification"],
    });
  }
});

const SectionHeading = ({ children }) => (
  <h5
    className="fw-bold mb-3 mt-2"
    style={{ color: "#214f3c", borderBottom: "2px solid #214f3c", paddingBottom: "6px" }}
  >
    {children}
  </h5>
);

export default function CareersApplyPage() {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const searchParams = useSearchParams();

  const todayStr = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { declaration: false },
  });

  const selectedQualification = watch("highestQualification");

  useEffect(() => {
    const position = searchParams.get("position");
    if (position) setValue("position", position);
  }, [searchParams, setValue]);

  const { ref: cvRegisterRef, onChange: cvRegisterOnChange, ...cvRest } = register("cv");

  const onSubmit = async (data) => {
    setSubmitStatus(null);
    setErrorMessage("");

    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("location", data.location);
    formData.append("position", data.position);
    formData.append("immediateAvailability", data.immediateAvailability);
    formData.append("preferredLocation", data.preferredLocation ?? "");
    formData.append(
      "highestQualification",
      data.highestQualification === "Other" ? data.otherQualification : data.highestQualification
    );
    formData.append("yearsOfExperience", data.yearsOfExperience);
    formData.append("previousEmployer", data.previousEmployer ?? "");
    formData.append("keySkills", data.keySkills);
    formData.append("coverLetter", data.coverLetter ?? "");
    formData.append("declaration", String(data.declaration));
    formData.append("honeypot", data.honeypot ?? "");
    formData.append("cv", data.cv[0]);

    try {
      const res = await fetch("/api/apply", { method: "POST", body: formData });
      const json = await res.json();

      if (!res.ok) {
        setErrorMessage(json.error ?? "Something went wrong. Please try again.");
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      reset();
      setFileName("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setSubmitStatus("error");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  return (
    <BrandWrapper brand="TA">
      {/* Breadcrumbs */}
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Job Application</h2>
            <ol>
              <li><Link href="/">Home</Link></li>
              <li>Careers</li>
              <li>Apply</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="contact" style={{ paddingTop: "60px", paddingBottom: "80px" }}>
        <div className="container">

          <div className="section-title" data-aos="fade-up">
            <h2>Apply for a Position</h2>
            <p>
              Thank you for your interest in joining our team. Please complete this form
              accurately. Only shortlisted candidates will be contacted.
            </p>
          </div>

          {submitStatus === "success" && (
            <div
              className="alert alert-success d-flex align-items-center gap-2 mb-4"
              role="alert"
              data-aos="fade-in"
            >
              <i className="bi bi-check-circle-fill fs-5"></i>
              <div>
                <strong>Application sent!</strong> Thank you for applying. We&apos;ll review your
                application and get back to you as soon as possible.
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div
              className="alert alert-danger d-flex align-items-center gap-2 mb-4"
              role="alert"
            >
              <i className="bi bi-exclamation-triangle-fill fs-5"></i>
              <div>{errorMessage}</div>
            </div>
          )}

          <div className="row justify-content-center">
            <div className="col-lg-9" data-aos="fade-up" data-aos-delay="100">
              <div className="border rounded p-4 p-lg-5">
                <form onSubmit={handleSubmit(onSubmit)} noValidate encType="multipart/form-data">

                  {/* Honeypot */}
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ position: "absolute", left: "-9999px", opacity: 0 }}
                    {...register("honeypot")}
                  />

                  {/* ── Section 1: Personal Information ── */}
                  <SectionHeading>Section 1: Personal Information</SectionHeading>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label htmlFor="fullName" className="form-label fw-semibold">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        className={`form-control${errors.fullName ? " is-invalid" : ""}`}
                        placeholder="e.g. Chidi Okonkwo"
                        {...register("fullName")}
                      />
                      {errors.fullName && (
                        <div className="invalid-feedback">{errors.fullName.message}</div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`form-control${errors.email ? " is-invalid" : ""}`}
                        placeholder="you@example.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label fw-semibold">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={`form-control${errors.phone ? " is-invalid" : ""}`}
                        placeholder="+234 800 000 0000"
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <div className="invalid-feedback">{errors.phone.message}</div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="location" className="form-label fw-semibold">
                        Current Location <span className="text-danger">*</span>
                      </label>
                      <input
                        id="location"
                        type="text"
                        className={`form-control${errors.location ? " is-invalid" : ""}`}
                        placeholder="e.g. Lagos, Nigeria"
                        {...register("location")}
                      />
                      {errors.location && (
                        <div className="invalid-feedback">{errors.location.message}</div>
                      )}
                    </div>
                  </div>

                  {/* ── Section 2: Job Details ── */}
                  <SectionHeading>Section 2: Job Details</SectionHeading>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label htmlFor="position" className="form-label fw-semibold">
                        Position Applying For <span className="text-danger">*</span>
                      </label>
                      <select
                        id="position"
                        className={`form-select${errors.position ? " is-invalid" : ""}`}
                        defaultValue=""
                        {...register("position")}
                      >
                        <option value="" disabled>Select a position&hellip;</option>
                        {POSITIONS.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      {errors.position && (
                        <div className="invalid-feedback">{errors.position.message}</div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="immediateAvailability" className="form-label fw-semibold">
                        Available to Resume Immediately? <span className="text-danger">*</span>
                      </label>
                      <select
                        id="immediateAvailability"
                        className={`form-select${errors.immediateAvailability ? " is-invalid" : ""}`}
                        defaultValue=""
                        {...register("immediateAvailability")}
                      >
                        <option value="" disabled>Select&hellip;</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      {errors.immediateAvailability && (
                        <div className="invalid-feedback">{errors.immediateAvailability.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="preferredLocation" className="form-label fw-semibold">
                      Preferred Work Location{" "}
                      <span className="text-muted fw-normal" style={{ fontSize: "0.85em" }}>
                        (optional)
                      </span>
                    </label>
                    <select
                      id="preferredLocation"
                      className="form-select"
                      defaultValue=""
                      {...register("preferredLocation")}
                    >
                      <option value="">No preference</option>
                      <option value="Benin">Benin</option>
                      <option value="Port Harcourt">Port Harcourt</option>
                    </select>
                  </div>

                  {/* ── Section 3: Experience & Education ── */}
                  <SectionHeading>Section 3: Experience &amp; Education</SectionHeading>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label htmlFor="highestQualification" className="form-label fw-semibold">
                        Highest Qualification <span className="text-danger">*</span>
                      </label>
                      <select
                        id="highestQualification"
                        className={`form-select${errors.highestQualification ? " is-invalid" : ""}`}
                        defaultValue=""
                        {...register("highestQualification")}
                      >
                        <option value="" disabled>Select qualification&hellip;</option>
                        {QUALIFICATIONS.map((q) => (
                          <option key={q} value={q}>{q}</option>
                        ))}
                      </select>
                      {errors.highestQualification && (
                        <div className="invalid-feedback">{errors.highestQualification.message}</div>
                      )}
                      {selectedQualification === "Other" && (
                        <div className="mt-2">
                          <input
                            id="otherQualification"
                            type="text"
                            className={`form-control${errors.otherQualification ? " is-invalid" : ""}`}
                            placeholder="Please specify your qualification"
                            {...register("otherQualification")}
                          />
                          {errors.otherQualification && (
                            <div className="invalid-feedback">{errors.otherQualification.message}</div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="yearsOfExperience" className="form-label fw-semibold">
                        Years of Work Experience <span className="text-danger">*</span>
                      </label>
                      <select
                        id="yearsOfExperience"
                        className={`form-select${errors.yearsOfExperience ? " is-invalid" : ""}`}
                        defaultValue=""
                        {...register("yearsOfExperience")}
                      >
                        <option value="" disabled>Select range&hellip;</option>
                        {EXPERIENCE_RANGES.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                      {errors.yearsOfExperience && (
                        <div className="invalid-feedback">{errors.yearsOfExperience.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="previousEmployer" className="form-label fw-semibold">
                      Previous Employer / Current Workplace{" "}
                      <span className="text-muted fw-normal" style={{ fontSize: "0.85em" }}>
                        (optional)
                      </span>
                    </label>
                    <input
                      id="previousEmployer"
                      type="text"
                      className="form-control"
                      placeholder="e.g. ABC Agro Ltd"
                      {...register("previousEmployer")}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="keySkills" className="form-label fw-semibold">
                      Key Skills Relevant to this Role <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="keySkills"
                      rows={4}
                      className={`form-control${errors.keySkills ? " is-invalid" : ""}`}
                      placeholder="e.g. Supply chain management, data analysis, stakeholder engagement..."
                      {...register("keySkills")}
                    />
                    {errors.keySkills && (
                      <div className="invalid-feedback">{errors.keySkills.message}</div>
                    )}
                  </div>

                  {/* ── Section 4: Uploads ── */}
                  <SectionHeading>Section 4: Uploads</SectionHeading>

                  <div className="mb-3">
                    <label htmlFor="cv" className="form-label fw-semibold">
                      CV / Resume <span className="text-danger">*</span>
                    </label>

                    <div
                      className={`border rounded p-3 text-center${errors.cv ? " border-danger" : ""}`}
                      style={{ cursor: "pointer", background: "#fafafa" }}
                      onClick={() => fileInputRef.current?.click()}
                      onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
                      tabIndex={0}
                      role="button"
                      aria-label="Upload CV"
                    >
                      <i className="bi bi-cloud-upload" style={{ fontSize: "2rem", color: "#214f3c" }}></i>
                      <p className="mb-1 mt-2 fw-semibold" style={{ color: "#214f3c" }}>
                        {fileName || "Click to upload your CV"}
                      </p>
                      <small className="text-muted">PDF, DOC or DOCX &mdash; max 5MB</small>

                      <input
                        id="cv"
                        type="file"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="d-none"
                        ref={(el) => {
                          cvRegisterRef(el);
                          fileInputRef.current = el;
                        }}
                        onChange={(e) => {
                          cvRegisterOnChange(e);
                          handleFileChange(e);
                        }}
                        {...cvRest}
                      />
                    </div>

                    {errors.cv && (
                      <div className="text-danger mt-1" style={{ fontSize: "0.875em" }}>
                        {errors.cv.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="coverLetter" className="form-label fw-semibold">
                      Cover Letter{" "}
                      <span className="text-muted fw-normal" style={{ fontSize: "0.85em" }}>
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="coverLetter"
                      rows={5}
                      className="form-control"
                      placeholder="Tell us why you'd be a great fit for this role..."
                      {...register("coverLetter")}
                    />
                  </div>

                  {/* ── Section 5: Declaration ── */}
                  <SectionHeading>Section 5: Declaration</SectionHeading>

                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        id="declaration"
                        type="checkbox"
                        className={`form-check-input${errors.declaration ? " is-invalid" : ""}`}
                        {...register("declaration")}
                      />
                      <label htmlFor="declaration" className="form-check-label">
                        I confirm that the information provided in this application is accurate and
                        complete to the best of my knowledge.{" "}
                        <span className="text-muted" style={{ fontSize: "0.85em" }}>
                          Date: {todayStr}
                        </span>{" "}
                        <span className="text-danger">*</span>
                      </label>
                    </div>
                    {errors.declaration && (
                      <div className="text-danger mt-1" style={{ fontSize: "0.875em" }}>
                        {errors.declaration.message}
                      </div>
                    )}
                  </div>

                  {/* Privacy notice */}
                  <p className="text-muted mb-4" style={{ fontSize: "0.82em" }}>
                    By submitting this form you consent to TA Commodity storing your personal
                    information for recruitment purposes. Your data will not be shared with third
                    parties.
                  </p>

                  {/* Submit */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn px-5 py-2"
                      style={{
                        background: "#214f3c",
                        color: "#fff",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        minWidth: "200px",
                        opacity: isSubmitting ? 0.75 : 1,
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Sending Application&hellip;
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send me-2"></i>
                          Submit Application
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Info strip */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-9">
              <div className="row g-3 text-center">
                <div className="col-md-4">
                  <div className="info-box border h-100">
                    <i className="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      <a href="mailto:info@tacommodity.com">info@tacommodity.com</a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-box border h-100">
                    <i className="bx bx-time-five"></i>
                    <h3>Response Time</h3>
                    <p>We aim to respond within 5–7 business days</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-box border h-100">
                    <i className="bx bx-map"></i>
                    <h3>Location</h3>
                    <p>Lagos · Port Harcourt · Benin City, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </BrandWrapper>
  );
}
