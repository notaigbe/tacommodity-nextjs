'use client';
import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import Image from 'next/image';
import Link from 'next/link';

function Portfolio() {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState('*');

  const portfolio = [
    {
      pk: 1,
      project_name: "Julius Berger Nigeria Plc – AGO Supply",
      category: "construction",
      project_image_1: { jpg: "/assets/nasus-integration/img/portfolio/drainage.jpg" },
    },
    {
      pk: 2,
      project_name: "Nigeria Port Authority – Road Reconstruction",
      category: "engineering",
      project_image_1: { jpg: "/assets/nasus-integration/img/portfolio/hyundai-heavy-industries.jpg" },
    },
    {
      pk: 3,
      project_name: "Texaco Petroleum – Tank Construction & Boreholes",
      category: "logistics",
      project_image_1: { jpg: "/assets/nasus-integration/img/portfolio/tarsurfacing-road-construction.jpg" },
    },
    {
      pk: 4,
      project_name: "FAAN – Paving at Port Harcourt Intl Airport",
      category: "procurement",
      project_image_1: { jpg: "/assets/nasus-integration/img/portfolio/borehole.jpg" },
    },
    {
      pk: 5,
      project_name: "Planet Projects – City Bus Service Scheme",
      category: "leasing",
      project_image_1: { jpg: "/assets/nasus-integration/img/portfolio/paving_stones.jpg" },
    },
    {
      pk: 6,
      project_name: "NDDC – Rural Road Construction",
      category: "leasing",
      project_image_1: { jpg: "/assets/nasus-integration/img/portfolio/copi_office.jpg" },
    },
    {
      pk: 7,
      project_name: "Agip Oil, Daewoo, Hyundai, Socotherm, and more",
      category: "leasing",
      project_image_1: { jpg: "/assets/nasus-integration/img/portfolio/hostel.jpg" },
    },
  ];

  useEffect(() => {
    isotope.current = new Isotope('.portfolio-container', {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
    });

    return () => isotope.current?.destroy();
  }, []);

  useEffect(() => {
    if (filterKey === '*') {
      isotope.current?.arrange({ filter: '*' });
    } else {
      isotope.current?.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Our Projects</h2>
          <p>
            At NASUS Integration Limited, we believe that project success is rooted in structured planning,
            transparent communication, and rigorous quality assurance.
          </p>
          <p>
            We adopt a tailor-made project execution system based on work breakdown structures (WBS), detailed
            scheduling, and cost control. Each project is supported by a robust reporting system and real-time data
            tracking to ensure transparency and accountability at every stage.
          </p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li className={filterKey === '*' ? 'filter-active' : ''} onClick={() => setFilterKey('*')}>
                All
              </li>
              <li className={filterKey === 'construction' ? 'filter-active' : ''} onClick={() => setFilterKey('construction')}>
                Construction
              </li>
              <li className={filterKey === 'engineering' ? 'filter-active' : ''} onClick={() => setFilterKey('engineering')}>
                Engineering & Technical
              </li>
              <li className={filterKey === 'logistics' ? 'filter-active' : ''} onClick={() => setFilterKey('logistics')}>
                Logistics
              </li>
              <li className={filterKey === 'procurement' ? 'filter-active' : ''} onClick={() => setFilterKey('procurement')}>
                Procurement
              </li>
              <li className={filterKey === 'leasing' ? 'filter-active' : ''} onClick={() => setFilterKey('leasing')}>
                Vehicle Leasing
              </li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up">
          {portfolio.map((project) => (
            <div key={project.pk} className={`col-lg-4 col-md-6 portfolio-item ${project.category}`}>
              <div className="portfolio-wrap">
                <Image
                  src={project.project_image_1?.jpg || '/assets/nasus-integration/img/portfolio/drainage.jpg'}
                  className="img-fluid w-100"
                  alt={project.project_name}
                  width={400}
                  height={200}
                  style={{ width: '100%', height: '100%'}}
                />
                <div className="portfolio-links">
                  <Link
                    href={project.project_image_1?.jpg}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title={project.project_name}
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link href={`/portfolio/${project.pk}`} title="More Details">
                    <i className="bx bx-link"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
