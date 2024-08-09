import { nextui } from "@nextui-org/theme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "current-opening": "url('/images/current-opening-bg.png')",
        "expert-community": "url('/images/join-community.png')",
        testimonial: "url('/images/testimonial-bg.jpg')",
        "carrer-job": "url('/images/carrer-bg.jpg')",
        "about-us-hero": "url('/images/about-us-hero.jpg')",
        "contact-us-hero": "url('/images/contact-us-hero.jpg')",
        "send-us-message": "url('/images/send-us-message.jpg')",
        "blog-hero": "url('/images/blog-hero.jpg')",
        "current-opening-hero": "url('/images/current-opening-hero.jpg')",
        "job-seeker-hero": "url('/images/job-seeker-hero.jpg')",
        "slider-left-arrow": "url('/images/slider-left-arrow.svg')",
        "slider-right-arrow": "url('/images/slider-right-arrow.svg')",
        "privacy-policy": "url('/images/privacy-policy.jpg')",
        "cookie-policy": "url('/images/cookie-policy.jpg')",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      xs: "475px",

      sm: "768px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 768px) { ... }

      lg: "1280px",
      // => @media (min-width: 1024px) { ... }

      xl: "1367px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      layout: {
        fontSize: {
          tiny: "0.75rem", // 12px text-tiny
          small: "0.875rem", // 14px text-small
          medium: "1rem", //  16px text-medium
          large: "1.125rem", //18px text-large
          "heading-3": "var(--font-heading-3)", // 32px text-m-large
          "heading-4": "var(--font-heading-4)", // 48px text-x-large
        },
        lineHeight: {
          tiny: "1rem", // text-tiny
          small: "1.25rem", // text-small
          medium: "1.5rem", // text-medium
          large: "55px", // text-large
          "heading-3": "var(--lh-heading-3)",
          "heading-4": "var(--lh-heading-4)",
        },
        radius: {
          small: "4px", // rounded-small
          medium: "8px", // rounded-medium
          large: "12px", // rounded-large
        },
        boxShadow: {
          // shadow-small
          small: "-1px 3px 40px -18px rgba(168,168,168,1)",
          // shadow-medium
          medium: "0px -9px 53px -22px rgb(99 99 99 / 55%)",
        },
        disabledOpacity: {
          DEFAULT: "1",
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#89C446",
              foreground: "#000000",
            },
            focus: "#BEF264",

            secondary: {
              DEFAULT: "#2B85C5",
              foreground: "#fff",
            },
            focus: "#BEF264",
            content1: {
              opacity1: "rgba(7,7,7,25%)",
              cultured: "#F5F4F5",
              oldsilver: "#474743",
              charlestonGreen: "#292929",
              quartz: "#4B4B4B",
              eerieBlack: "#1E1E1E",
              raisinBlack: "#222224",
              antiFlashWhite: "#F0F3F9",
              darkSilver: "#696E76",
            },
          },
        },
      },
    }),
  ],
};
