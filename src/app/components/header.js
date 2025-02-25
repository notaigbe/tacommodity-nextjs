import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";
import { List, X } from "react-bootstrap-icons";

export function Header() {
  
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      setIsActive(!isActive)
      document.querySelector("#navbar").classList.toggle("navbar-mobile");
 
    };

    const element = ref.current;

    element.addEventListener("click", handleClick);

    const header = document.querySelector('#header');
    
    if (header) {
      const headerScrolled = () => {
        header.classList.toggle('header-scrolled', window.scrollY > 100);
      };
    
      window.addEventListener('load', headerScrolled);
      document.addEventListener('scroll', headerScrolled);
    }

    const backtotop = document.querySelector('.back-to-top');
    
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      };
    
      window.addEventListener('load', toggleBacktotop);
      document.addEventListener('scroll', toggleBacktotop);
    }

    let preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove()
        });
    }

    return () => {
      element.removeEventListener("click", handleClick);
    };
    
  }, []);
  
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <div className="logo me-auto">

              <h1>
                <Link href="/">
                  <Image
                    src="/assets/img/ta_logo.png"
                    alt="TA Commodity company logo"
                    width={50}
                    height={50}
                    style={{ height: "auto" }}
                  />{" "}
                  TA Commodity
                </Link>
              </h1>
            
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <!--a href="/"><img src='/assets/img/ta_logo.jpg' alt="ta_logo" className="img-fluid"></a--> */}
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
                <Link className="nav-link" href="/projects">
                  Projects
                </Link>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>NGO Support</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <Link href="/friends-of-smart-plantation-growers-initiative">
                      Friends of Smart Plantation Growers Initiative
                    </Link>
                  </li>
                  <li>
                    <Link href="/women-sustainable-group">
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
          <li><a href="{% url '/farmers' %}" >Farmers List</a></li>
          <li><a href="{% url '/publish_news' %}" >Publish Post</a></li>
          <li><a href="{% url '/logout' %}" >Logout</a></li>
          {% else %}
          <li><a className="nav-link" href="{% url '/login' %}" >Login</a></li>
            {% endif %}
              </ul>
            </li> */}
            </ul>
            {isActive ? (
                      <X
                        className="mobile-nav-toggle"
                        size={40}
                        id="navbar-toggle"
                        ref={ref}
                        onClick={()=>{setIsActive(!isActive);
                          document.querySelector('#navbar').classList.replace('navbar-mobile', 'navbar')
                          console.log(isActive)}}
                      />
                    ) : (
                      <List
                        className="mobile-nav-toggle"
                        size={40}
                        id="navbar-toggle"
                        ref={ref}
                        onClick={()=>{setIsActive(!isActive);
                          document.querySelector('#navbar').classList.replace('navbar', 'navbar-mobile')
                        console.log(isActive)}}
                        />
                      )}
            {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
          </nav>
        </div>
      </header>
      {/* <Script src="assets/js/main.js" /> */}
      {/* <Script src="https://code.jquery.com/jquery-3.6.4.slim.min.js" integrity="sha256-a2yjHM4jnF9f54xUQakjZGaqYs/V1CYvWpoqZzC2/Bw=" crossorigin="anonymous"/> */}
    </>
  );
}


export function PHAGROHeader() {
  
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      setIsActive(!isActive)
      document.querySelector("#navbar").classList.toggle("navbar-mobile");
 
    };

    const element = ref.current;

    element.addEventListener("click", handleClick);

    const header = document.querySelector('#header');
    
    if (header) {
      const headerScrolled = () => {
        header.classList.toggle('header-scrolled', window.scrollY > 100);
      };
    
      window.addEventListener('load', headerScrolled);
      document.addEventListener('scroll', headerScrolled);
    }

    const backtotop = document.querySelector('.back-to-top');
    
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      };
    
      window.addEventListener('load', toggleBacktotop);
      document.addEventListener('scroll', toggleBacktotop);
    }

    let preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove()
        });
    }

    return () => {
      element.removeEventListener("click", handleClick);
    };
    
  }, []);
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <div className="logo me-auto">
            
              <h1>
                <a href="#" style={{ color: "#1C5CA1" }}>
                  <Image
                    src="/assets/img/phagro_logo.png"
                    alt="PHAGRO company logo"
                    width={50}
                    height={50}
                    style={{ height: "auto" }}
                  />{" "}
                  PHAGRO
                </a>
              </h1>
            
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <!--a href="/"><img src='/assets/img/ta_logo.jpg' alt="ta_logo" className="img-fluid"></a--> */}
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-link scrollto active" href="/">
                  Return to TA Commodity
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" href="/women-sustainable-group#about">
                  About
                </Link>
              </li>
              {/* <li>
                <Link className="nav-link scrollto" href="/#services">
                  Core Values
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" href="/#what-we-do">
                  What We Do
                </Link>
              </li> */}
              <li>
                <Link className="nav-link scrollto" href="/women-sustainable-group#team">
                  Team
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" href="/women-sustainable-group#portfolio">
                  Training
                </Link>
              </li>

              {/* <li>
                <Link className="nav-link" href="/projects">
                  Projects
                </Link>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>NGO Support</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <Link href="/friends-of-smart-plantation-growers-initiative">
                      Friends of Smart Plantation Growers Initiative
                    </Link>
                  </li>
                  <li>
                    <Link href="/women-sustainable-group">
                      Women Sustainable Group
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link className="nav-link scrollto" href="/women-sustainable-group#contact">
                  Contact
                </Link>
              </li>
              {/* <li className="dropdown">
              <Link href="#">
                <span>Staff</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                {% if request.user.is_authenticated %}
          <li><a href="{% url '/farmers' %}" >Farmers List</a></li>
          <li><a href="{% url '/publish_news' %}" >Publish Post</a></li>
          <li><a href="{% url '/logout' %}" >Logout</a></li>
          {% else %}
          <li><a className="nav-link" href="{% url '/login' %}" >Login</a></li>
            {% endif %}
              </ul>
            </li> */}
            </ul>
            {isActive ? (
                      <X
                        className="mobile-nav-toggle"
                        size={40}
                        id="navbar-toggle"
                        ref={ref}
                        onClick={()=>{setIsActive(!isActive);
                          document.querySelector('#navbar').classList.replace('navbar-mobile', 'navbar')
                          console.log(isActive)}}
                      />
                    ) : (
                      <List
                        className="mobile-nav-toggle"
                        size={40}
                        id="navbar-toggle"
                        ref={ref}
                        onClick={()=>{setIsActive(!isActive);
                          document.querySelector('#navbar').classList.replace('navbar', 'navbar-mobile')
                        console.log(isActive)}}
                        />
                      )}
            {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
          </nav>
        </div>
      </header>
      {/* <Script src="assets/js/main.js" /> */}
    </>
  );
}
