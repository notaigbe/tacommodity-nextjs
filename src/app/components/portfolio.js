import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import Image from "next/image";

function TACommodityPortfolio() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="section-title">
          <h2>Training</h2>
          <p>
            We create strategic partnerships to provide training for our
            farmers. We equip our smallholder farmers to succeed as commercial
            farmers.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-agric">Agric Training</li>
              <li data-filter=".filter-agrobiz">Agro-Business Training</li>
              <li data-filter=".filter-ffb">Oil Palm</li>
              <li data-filter=".filter-honey">Bee Keeping</li>
              <li data-filter=".filter-fish">Catfish</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {/* {% for article in articles %}
            {% if article.status == 1 %}
            <div className="col-lg-4 col-md-6 portfolio-item filter-{{ article.category }}">
                  <div className="portfolio-wrap">
                    <Image src="{{ article.image.url }}" className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>{{ article.title }}</h4>
                      <p>{{ article.post|truncatechars:50 }}</p>
                      <div className="portfolio-links">
                        <a href="{{ article.image.url }}" data-gallery="portfolioGallery" className="portfolio-lightbox" title="{{ article }}"><i className="bi bi-plus"></i></a>
                        <a href="{% url 'article_detail' article.slug %}" title="More Details"><i className="bi bi-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
            {% endif %}
            {% endfor %} */}
        </div>
      </div>
    </section>
  );
}

function PHAGROPortfolio() {
  return (
    // {/* <!-- ======= Our Portfolio Section ======= --> */}
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="section-title">
          <h2>Training</h2>
          <p>
            We create strategic partnerships to provide training for our
            farmers. We equip our smallholder farmers to succeed as commercial
            farmers.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>

              <li data-filter=".filter-processing">Processing</li>
              <li data-filter=".filter-preparation">Preparation</li>
              <li data-filter=".filter-team">Team</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-team">
            <div className="portfolio-wrap">
              <Image
                src="/assets/img/phagro/phagro-prep-1.jpeg"
                className="img-fluid"
                alt=""
                height={500}
                width={500}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="portfolio-info">
                {/* <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p> */}
                <div className="portfolio-links">
                  <a
                    href="/assets/img/phagro/phagro-prep-1.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="{{ item }}"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  {/* <!--a href="" title="More Details"><i className="bi bi-link"></i></a--> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-preparation">
            <div className="portfolio-wrap">
              <Image
                src="/assets/img/phagro/phagro-prep-4.jpeg"
                className="img-fluid"
                alt=""
                height={500}
                width={500}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="portfolio-info">
                {/* <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p> */}
                <div className="portfolio-links">
                  <a
                    href="/assets/img/phagro/phagro-prep-4.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="{{ item }}"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  {/* <!--a href="" title="More Details"><i className="bi bi-link"></i></a--> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-processing">
            <div className="portfolio-wrap">
              <Image
                src="/assets/img/phagro/phagro-rear-1.jpeg"
                className="img-fluid"
                alt=""
                height={500}
                width={500}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="portfolio-info">
                {/* <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p> */}
                <div className="portfolio-links">
                  <a
                    href="/assets/img/phagro/phagro-rear-1.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="{{ item }}"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  {/* <!--a href="" title="More Details"><i className="bi bi-link"></i></a--> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-team">
            <div className="portfolio-wrap">
              <Image
                src="/assets/img/phagro/phagro-team-2.jpeg"
                className="img-fluid"
                alt=""
                height={500}
                width={500}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="portfolio-info">
                {/* <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p> */}
                <div className="portfolio-links">
                  <a
                    href="/assets/img/phagro/phagro-team-2.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="{{ item }}"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  {/* <!--a href="" title="More Details"><i className="bi bi-link"></i></a--> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-processing">
            <div className="portfolio-wrap">
              <Image
                src="/assets/img/phagro/phagro-rear-3.jpeg"
                className="img-fluid"
                alt=""
                height={500}
                width={500}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="portfolio-info">
                {/* <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p> */}
                <div className="portfolio-links">
                  <a
                    href="/assets/img/phagro/phagro-rear-3.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="{{ item }}"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  {/* <!--a href="" title="More Details"><i className="bi bi-link"></i></a--> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-processing">
            <div className="portfolio-wrap">
              <Image
                src="/assets/img/phagro/phagro-rear-6.jpeg"
                className="img-fluid"
                alt=""
                height={500}
                width={500}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="portfolio-info">
                {/* <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p> */}
                <div className="portfolio-links">
                  <a
                    href="/assets/img/phagro/phagro-team-1.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="{{ item }}"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  {/* <!--a href="" title="More Details"><i className="bi bi-link"></i></a--> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-processing">
            <div className="portfolio-wrap">
              <Image
                src="/assets/img/phagro/phagro-rear-2.jpeg"
                className="img-fluid"
                alt=""
                height={500}
                width={500}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="portfolio-info">
                {/* <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p> */}
                <div className="portfolio-links">
                  <a
                    href='/assets/img/phagro/phagro-rear-2.jpeg'
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="{{ item }}"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  {/* <!--a href="" title="More Details"><i className="bi bi-link"></i></a--> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-processing">
            <div className="portfolio-wrap">
              <Image
                src="/assets/img/phagro/phagro-rear-6.jpeg"
                className="img-fluid"
                alt=""
                height={500}
                width={500}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="portfolio-info">
                {/* <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p> */}
                <div className="portfolio-links">
                  <a
                    href="/assets/img/phagro/phagro-rear-6.jpeg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="{{ item }}"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  {/* <!--a href="" title="More Details"><i className="bi bi-link"></i></a--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { TACommodityPortfolio, PHAGROPortfolio };
