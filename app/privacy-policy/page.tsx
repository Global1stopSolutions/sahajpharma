// import Scrollspy from "@/components/scrollspy/ScrollSpy";
"use client";
import React, { useEffect, useState } from "react";
import { policySections } from "@/constants";
import { Subpagehero } from "@/components/sub-page-hero/sub-page-hero";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      policySections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition <= sectionTop + sectionElement.offsetHeight
          ) {
            setActiveSection(section.id);
            history.replaceState(null, "", `#${section.id}`);
          }
        }
      });
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scrolling function
  const scrollToSection = (id: string) => {
    const items = document.getElementById(id);
    if (items) {
      window.scrollTo({
        top: items.offsetTop - 100, // Adjust for fixed header height
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Subpagehero herobg="about-us-bg" title="Privacy Policy" description="" />

      <div className="privacy-policy-container grid grid-cols-12 ">
        <div className="policy-content col-span-9 px-10">
          {policySections.map((items) => (
            <div
              key={items.id}
              id={items.id}
              className="scrollspy-section mb-10"
            >
              <h2 className="font-bold text-lg">{items.title}</h2>
              <ul>
                {items.description.map((item, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item.paragraph }}
                    className="mb-4 text-sm"
                  ></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="col-span-3">
          <nav className="policy-nav sticky top-[100px] p-3">
            <h3 className="font-bold text-lg mb-5">On this Page</h3>
            <ul>
              {policySections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={activeSection === section.id ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section.id);
                    }}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
