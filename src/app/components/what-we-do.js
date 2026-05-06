import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";

const offerings = [
  {
    number: "01",
    icon: "bi-truck",
    title: "Logistics",
    description:
      "We provide warehousing, logistics handling and haulage services for agro commodities, delivering to processing companies and consumers across the country.",
  },
  {
    number: "02",
    icon: "bi-mortarboard",
    title: "Training",
    description:
      "We train farmers on modern practices, smart agriculture and the use of technology, with the aim of developing smallholder farmers into commercial farmers.",
  },
  {
    number: "03",
    icon: "bi-bank",
    title: "Financing",
    description:
      "We promote financial inclusion amongst smallholder farmers through collaboration with selected insurance and financial institutions.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="wwd-section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>What We Do</h2>
        </div>

        <div className="wwd-list">
          {offerings.map((item, i) => (
            <div
              key={item.number}
              className="wwd-row"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="wwd-left">
                <span className="wwd-num">{item.number}</span>
                <div className="wwd-icon-wrap">
                  <i className={`bi ${item.icon}`}></i>
                </div>
              </div>
              <div className="wwd-body">
                <h4 className="wwd-title">{item.title}</h4>
                <p className="wwd-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
