"use client";
import React, { useEffect, useState } from "react";
import { policySections } from "@/constants";
import { Subpagehero } from "@/components/sub-page-hero/sub-page-hero";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
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
      <Subpagehero
        herobg="privacy-policy-bg"
        title="Privacy Policy"
        description="A privacy policy typically outlines how an organization collects, uses, and protects personal information."
      />

      <div className="privacy-policy-container grid grid-cols-12 mb-14">
        <div className="policy-content col-span-12 sm:col-span-9 px-10">
          {policySections.map((items) => (
            <div
              key={items.id}
              id={items.id}
              className="relative mb-4 md:mb-10 bg-pirmary shadow-md p-4 rounded-xl md:bg-transparent md:shadow-none md:p-0 md:rounded-none"
            >
              <h2
                className="font-bold text-sm md:text-lg"
                onClick={() => handleToggle(items.id)}
              >
                {items.title} {items.title}
                <svg
                  fill="none"
                  height="1em"
                  role="presentation"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="1em"
                  className="w-unit-4 block md:hidden top-5 absolute right-5 h-unit-4 transition-transform duration-150 ease motion-reduce:transition-none"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </h2>
              {openSection === items.id ? (
                <ul>
                  {items.description.map((item, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item.paragraph }}
                      className="mb-4 text-sm"
                    ></li>
                  ))}
                </ul>
              ) : (
                <div className="md:block hidden">
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
              )}
            </div>
          ))}
        </div>
        <div className="md:col-span-3 hidden md:block">
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
