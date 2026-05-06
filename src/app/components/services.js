import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";

const values = [
  {
    number: "01",
    icon: "bi-people",
    title: "Development",
    description:
      "We believe that our smallholder farmers who deliver our farm produce be trained and developed into commercial farmers over a period of time.",
  },
  {
    number: "02",
    icon: "bi-lightbulb",
    title: "Innovation",
    description:
      "We grow with our farmers through innovation, training and application of technology in smallholder farm development.",
  },
  {
    number: "03",
    icon: "bi-shield-check",
    title: "Integrity",
    description:
      "We integrate honesty, integrity and business ethics into all aspects of our business to attract more prospective farmers into our various farm projects.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Core Values</h2>
        </div>

        <div className="row g-4">
          {values.map((item, i) => (
            <div
              key={item.number}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="cv-card">
                <span className="cv-number">{item.number}</span>
                <div className="cv-icon-wrap">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h4 className="cv-title">{item.title}</h4>
                <p className="cv-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
