import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <div className="logo me-auto">
          {/* {% if page == 'Women_Sustainable_Group' %}
        <h1><a href="#" style="color:#1C5CA1;"><img src="{% static 'assets/img/phagro_logo.png' %}" > PHAGRO</a></h1>
        {% else %} */}
          <h1>
            <Link href="/">
              <Image
                src="/assets/img/ta_logo.png"
                alt="company logo"
                width={50}
                height={80}
              />{" "}
              TA Commodity
            </Link>
          </h1>
          {/* {% endif %} */}
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!--a href="index.html"><img src="{% static 'assets/img/ta_logo.jpg' %}" alt="ta_logo" className="img-fluid"></a--> */}
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link className="nav-link scrollto active" href="/#hero">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/#about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/#services">
                Core Values
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/#what-we-do">
                What We Do
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/#portfolio">
                Training
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/#team">
                Team
              </Link>
            </li>
            <li>
              <Link className="nav-link" href='/projects'>
                Projects
              </Link>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>NGO Support</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <Link href='/friends-of-smart-plantation-growers-initiative'>
                    Friends of Smart Plantation Growers Initiative
                  </Link>
                </li>
                <li>
                  <Link href='/women-sustainable-group'>
                    Women Sustainable Group
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/#contact">
                Contact
              </Link>
            </li>
            {/* <li className="dropdown">
              <Link href="#">
                <span>Staff</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                {% if request.user.is_authenticated %}
          <li><a href="{% url 'farmers' %}" >Farmers List</a></li>
          <li><a href="{% url 'publish_news' %}" >Publish Post</a></li>
          <li><a href="{% url 'logout' %}" >Logout</a></li>
          {% else %}
          <li><a className="nav-link" href="{% url 'login' %}" >Login</a></li>
            {% endif %}
              </ul>
            </li> */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
