import React from 'react';

function Services(){
    return (
        
    <section id="services" className="services">
      <div className="container">

        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Our Services</h2>
          <p>We offer services ranging from construction to procurement. We guarantee top quality service always.</p>
        </div>

        <div className="row">
          <div className="service-card col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up">
              <div className="icon"><i className='bx bxs-coffee-bean'></i></div>
              <h4 className="title"><a href="{% url 'services' service='Agriculture' %}">Engineering and Construction</a></h4>
              <ul>
                <li>Feasibility Studies & Front-End Engineering Design (FEED)</li>
                <li>Civil & Structural Works</li>
                <li>Borehole Drilling & Water Treatment</li>
                <li>Urban/Rural Electrification</li>
                <li>Shore Protection</li>
                <li>Project Management & Consultancy</li>
              </ul>
            </div>
          </div>

          <div className="service-card col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bx bxs-factory"></i></div>
              <h4 className="title"><a href="{% url 'services' service='Building Iron Supply' %}">Logistics and Haulage</a></h4>
              <ul>
                <li>Leasing of Light & Heavy-Duty Vehicles</li>
                <li>Haulage of Equipment & Materials</li>
                <li>Tug Boats & Barges</li>
                <li>Marine Support & Dredging</li>
                <li>Personnel Supply</li>
              </ul>
            </div>
          </div>

          <div className="service-card col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bx bxs-tachometer"></i></div>
              <h4 className="title"><a href="{% url 'services' service='Engineering Services' %}">Procurement</a></h4>
              <ul>
                <li>PPEs, Industrial Tools, and Mechanical Spares</li>
                <li>High/Low Pressure Valves</li>
                <li>Tyres, Tubes, and Vehicle Parts</li>
                <li>Office Equipment & Chemicals</li>
                <li>Iron Rods, Sand, and Chippings</li>
              </ul>
              
            </div>
          </div>

          <div className="service-card col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bx bxs-building-house"></i></div>
              <h4 className="title"><a href="{% url 'services' service='Construction Services' %}">Equipment and Plant</a></h4>
              <p>Our fleet and tools ensure timely project delivery:</p>

              <ul>
                <li>Excavators, Cranes, and Bulldozers</li>
                <li>Tipping Trucks & Dumpers (15–30 Tons)</li>
                <li>Concrete Mixers & Piling Machines</li>
                <li>Forklifts, Jackhammers, Compressors</li>
                <li>Mobile Power Generators, Asphalt Pavers</li>
              </ul>

            </div>
          </div>

          <div className="service-card col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bx bxs-truck"></i></div>
              <h4 className="title"><a href="{% url 'services' service='Logistics Services' %}">Quality and Safety</a></h4>
              At NASUS, Quality Assurance and Health, Safety, and Environmental Compliance are at the heart of our operations.

              <ul>
                <li>ISO-aligned QA/QC procedures</li>
                <li>Regular employee HSE training</li>
                <li>Safety-first culture at all work sites</li>
                <li>Retainership with approved medical facilities</li>
              </ul>

              <p>"All Accidents Are Preventable."</p>
            </div>
          </div>

          <div className="service-card col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bx bxs-cart-download"></i></div>
              <h4 className="title"><a href="{% url 'services' service='Procurement Services' %}">Procurement Services</a></h4>
              <p className="description">Troika Investments Limited maintains a strong relationship with reputable
                manufacturers whose products are used in the oil & gas and process industries.</p>
            </div>
          </div>


        </div>

      </div>
    </section>
    );
};

export default Services;