import "../styles/style.css";

export default function Topbar({page}) {
  return (
    <section id="topbar" className="d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          {page == 'Women Sustainable Group' ? (
            <>
        <i className="bi bi-envelope-fill" style={{ color: "#1C5CA1" }}></i><a href="mailto:phagrocooperativeltd@gmail.com" style={{ color: "#1C5CA1" }}>phagrompc@tacommidty.com</a>
        <i className="bi bi-phone-fill phone-icon" style={{ color: "#1C5CA1" }}></i> <a href="tel:+2349031628802 " style={{ color: "#1C5CA1" }}>+234 903 162 8802 </a>
        </>
          ):(
            <>
          <i className="bi bi-envelope-fill"></i>
          <a href="mailto:info@tacommodity.com">info@tacommodity.com</a>
          <i className="bi bi-phone-fill phone-icon"></i>{" "}
          <a href="tel:+2348026031639">+234 802 603 1639</a>
          </>
           )}
        </div>
        <div className="social-links d-none d-md-block">
          <a href="https://www.x.com/farm_own" className="twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="https://www.facebook.com/tacommodity" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/tacommodity" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://youtube.com/@tacommodity" className="youtube">
            <i className="bx bxl-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/assist-smallholder-farmers/"
            className="linkedin"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
