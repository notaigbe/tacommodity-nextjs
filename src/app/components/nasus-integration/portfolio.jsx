import React from 'react';

function Portfolio () {
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
          project_image_1: {jpg: "/assets/nasus-integration/img/portfolio/tarsurfacing-road-construction.jpg"},
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
        //   {
        //     pk: 8,
        //     project_name: "Laying of paving stones at Port Harcourt International Airport Omagwa",
        //     category: "construction",
        //     project_image_1: { jpg: "/assets/nasus-integration/img/portfolio/iron_rods.jpg" },
        //   },
        //   {
        //     pk: 9,
        //     project_name: "Laying of paving stones at Port Harcourt International Airport Omagwa",
        //     category: "leasing",
        //     project_image_1: { jpg: "/assets/nasus-integration/img/portfolio/leasing.jpg" },
        //   },
      ];
      
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">

                <div className="section-title" data-aos="fade-in" data-aos-delay="100">
                    <h2>Our Projects</h2>
                    <p>Our experience and expertise comes to bare in our numerous projects.</p>
                </div>

                <div className="row" data-aos="fade-in">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-construction">Construction</li>
                            <li data-filter=".filter-engineering">Engineering & Technical</li>
                            <li data-filter=".filter-logistics">Logistics</li>
                            <li data-filter=".filter-procurement">Procurement</li>
                            <li data-filter=".filter-leasing">Vehicle Leasing</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up">
                    {portfolio.map((project, index) => (
                        <div key={index} className={`col-lg-4 col-md-6 portfolio-item filter-${project.category}`}>
                            <div className="portfolio-wrap">
                                {project.project_image_1 ? (
                                    <img src={project.project_image_1.jpg} className="img-fluid w-100" alt={project.project_name} />
                                ) : (
                                    <img src="/assets/nasus-integration/img/portfolio/drainage.jpg" className="img-fluid" alt={project.project_name} />
                                )}
                                <div className="portfolio-links">
                                    {project.project_image_1 ? (
                                        <a href={project.project_image_1.jpg} data-gallery="portfolioGallery" className="portfolio-lightbox" title={project.project_name}>
                                            <i className="bx bx-plus"></i>
                                        </a>
                                    ) : (
                                        <a href="/assets/nasus-integration/img/portfolio/drainage.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title={project.project_name}>
                                            <i className="bx bx-plus"></i>
                                        </a>
                                    )}
                                    <a href={`/portfolio/${project.pk}`} title="More Details">
                                        <i className="bx bx-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;