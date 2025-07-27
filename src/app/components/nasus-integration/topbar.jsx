

export default function TopBar() {
    return (
        <div id="topbar" className="d-flex align-items-center mb-2 shadow bg-light">
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-clock-fill"></i>Mon - Fri 8am - 5pm
                    <i className="bi bi-phone-fill phone-icon"></i> 
                    <a href="tel:+2348032679974">+234 805 506 8582</a>
                </div>
                <div className="social-links d-none d-md-block">
                    <a href="https://www.twitter.com/" className="twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="https://www.facebook.com/" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="https://youtube.com/" className="youtube"><i className="bx bxl-youtube"></i></a>
                    <a href="https://www.linkedin.com/" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </div>
    );
}