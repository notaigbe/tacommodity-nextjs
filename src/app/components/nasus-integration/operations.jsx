// components/pages/OperationsContent.tsx
export default function Operations() {
  return (
    <main className="py-16 px-6 max-w-6xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Our Operational Approach</h1>
        <p className="mb-4">
          At NASUS Integration Limited, we believe that <strong>project success is rooted in structured planning, transparent communication, and rigorous quality assurance</strong>.
        </p>
        <p className="mb-4">
          We adopt a tailor-made project execution system based on <strong>work breakdown structures (WBS)</strong>, detailed scheduling, and cost control. Each project is supported by a robust reporting system and real-time data tracking to ensure transparency and accountability at every stage.
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Logical activity sequencing and resource allocation</li>
          <li>Budget tracking and cost analysis</li>
          <li>Critical path analysis for milestone management</li>
          <li>Full documentation of technical, quality, and managerial processes</li>
          <li>Compliance with national and international quality standards</li>
        </ul>
        <p>
          This comprehensive system ensures that our projects are <strong>delivered on time, within scope, and in accordance with our clients’ expectations and industry best practices</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Organizational Structure</h2>
        <p className="mb-4">
          Our structure is designed to <strong>ensure agility, quality, and accountability</strong> across all projects and service areas. Each department is led by experienced professionals with clear roles and responsibilities.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Corporate Management Team:</strong> Provides strategic leadership and ensures alignment with client and regulatory expectations.</li>
          <li><strong>Engineering Department:</strong> Oversees project design, feasibility studies, and technical execution.</li>
          <li><strong>Project Management Team:</strong> Coordinates on-site operations, resource scheduling, and milestone delivery.</li>
          <li><strong>Quality Assurance & Quality Control (QA/QC):</strong> Monitors compliance with standards, manages audits, and oversees continuous improvement.</li>
          <li><strong>Health, Safety, Environment & Security (HSES) Unit:</strong> Ensures strict adherence to safety, environmental, and community policies across all projects.</li>
        </ul>
      </section>
    </main>
  );
}
