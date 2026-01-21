import "../styles/style.css";

export default function Topbar({ brand }) {
  // Define brand-specific contact data
  const contactData = {
    PHAGRO: {
      email: "phagrompc@tacommodity.com",
      phone: "+234 903 162 8802",
      color: "#1C5CA1",
    },
    BFG: {
      email: "bfg@tacommodity.com",
      phone: "+234 803 705 7513", // Replace with actual BFG phone
      color: "#C5A059",
    },
    TA: {
      email: "info@tacommodity.com",
      phone: "+234 802 603 1639",
      color: "inherit", // Uses default CSS green
    }
  };

  const current = contactData[brand] || contactData.TA;

  return (
    <section id="topbar" className={`d-flex align-items-center ${brand}-topbar`}>
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope-fill" style={{ color: current.color }}></i>
          <a href={`mailto:${current.email}`} style={{ color: current.color }}>
            {current.email}
          </a>
          <i className="bi bi-phone-fill phone-icon" style={{ color: current.color }}></i>
          <a href={`tel:${current.phone.replace(/\s/g, '')}`} style={{ color: current.color }}>
            {current.phone}
          </a>
        </div>
        <div className="social-links d-none d-md-block">
          <a href="https://www.x.com/farm_own" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="https://www.facebook.com/tacommodity" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/tacommodity" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="https://youtube.com/@tacommodity" className="youtube"><i className="bx bxl-youtube"></i></a>
          <a href="https://www.linkedin.com/company/assist-smallholder-farmers/" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}