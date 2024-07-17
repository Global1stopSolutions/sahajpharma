// import Scrollspy from "@/components/scrollspy/ScrollSpy";
"use client";
import React, { useEffect, useState } from "react";
import { policySections } from "@/constants";
import { Subpagehero } from "@/components/sub-page-hero/sub-page-hero";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll(".scrollspy-section");
      const scrollPosition = window.scrollY + 20;

      sectionElements.forEach((section: Element) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition >= sectionTop) {
          setActiveSection(section.id);
        }
      });
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Subpagehero
        herobg="about-us-bg"
        title="Privacy Policy"
        description="Apply now and take the first step in your career journey!"
      />

      <div className="privacy-policy-container grid grid-cols-12 ">
        <div className="policy-content col-span-9 px-10">
          {policySections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="scrollspy-section mb-10"
            >
              <h2 className="font-bold text-lg">{section.title}</h2>
              <ul>
                {section.description.map((item) => (
                  <li
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
