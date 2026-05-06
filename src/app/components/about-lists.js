"use client";

import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";

const commodities = [
  {
    number: "01",
    title: "Cereals",
    image: "/assets/img/cereals.jpg",
    description:
      "Maize, rice, sorghum, millet and wheat form the backbone of Nigeria's food supply. We source premium-grade cereals from verified farms across the North Central and North West regions, ensuring consistent quality for processors, traders, and institutional buyers.",
  },
  {
    number: "02",
    title: "Roots and Tubers",
    image: "/assets/img/roots-and-tubers.jpg",
    description:
      "Nigeria is the world's largest producer of cassava and one of the top producers of yam. We aggregate roots and tubers directly from farming communities, maintaining freshness through optimised logistics and careful handling from farm to market.",
  },
  {
    number: "03",
    title: "Tree Crops",
    image: "/assets/img/oil-palm-farming.webp",
    description:
      "From palm oil and palm kernel to cocoa and rubber, our tree crop portfolio connects smallholder farmers to export and processing markets. We support sustainable harvesting practices and provide fair pricing to drive quality at the source.",
  },
  {
    number: "04",
    title: "Legumes",
    image: "/assets/img/legumes.jpg",
    description:
      "Cowpeas, soybeans, groundnuts, and sesame seeds are vital for both domestic consumption and export markets. We handle procurement, grading, bagging, and logistics for legume commodities across Nigeria's major producing regions.",
  },
  {
    number: "05",
    title: "Vegetables",
    image: "/assets/img/vegetables.jpg",
    description:
      "Fresh tomatoes, peppers, onions, and leafy greens sourced from Nigeria's irrigation zones and vegetable belts. We work with aggregators and cooperative societies to bring market-ready produce to urban distributors and food processors.",
  },
  {
    number: "06",
    title: "Livestock",
    image: "/assets/img/livestock.jpg",
    description:
      "Cattle, goats, sheep, and poultry products from across Nigeria's pastoral regions. We coordinate livestock procurement and movement, ensuring animals reach abattoirs and live markets in optimal condition with full traceability.",
  },
  {
    number: "07",
    title: "Apiary",
    image: "/assets/img/apiary1.jpg",
    description:
      "Nigeria's rich biodiversity supports thriving bee colonies yielding high-quality raw honey and beeswax. We partner with apiarists across forest zones to bring natural, unprocessed honey products to health-conscious consumers and export markets.",
  },
];

export default function AboutList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const textPanelRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const panel = textPanelRef.current;
    if (!panel) return;

    const handleScroll = () => {
      let closest = 0;
      let closestDist = Infinity;
      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        const dist = Math.abs(el.offsetTop - panel.scrollTop);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    panel.addEventListener("scroll", handleScroll);
    return () => panel.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-lists" id="about-lists">
      <div className="al-inner">
        <div className="al-image-panel">
          {commodities.map((item, i) => (
            <div
              key={item.number}
              className={`al-image${i === activeIndex ? " active" : ""}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <span className="al-image-number">{item.number}</span>
            </div>
          ))}
        </div>

        <div className="al-text-panel" ref={textPanelRef}>
          {commodities.map((item, i) => (
            <div
              key={item.number}
              className="al-text-entry"
              ref={(el) => (sectionRefs.current[i] = el)}
            >
              <span className="al-number">{item.number}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
