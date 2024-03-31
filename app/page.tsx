import { AboutDetail } from "@/components/about";
import { Clients } from "@/components/clients";
import { Companybenfits } from "@/components/company-benifts";
import { Expertcommunity } from "@/components/expert-community";
import { Faq } from "@/components/faq";
import { HeroSection } from "@/components/hero-section";
import { JobOpening } from "@/components/job-opening";
import { Newsarticle } from "@/components/news-article";
import { Testimonial } from "@/components/testimonial";
import { HeadingDetail } from "@/components/heading-detail";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <JobOpening /> */}
      <AboutDetail>
        <HeadingDetail
          titleWidth="w-[100%]"
          headingTitle="About"
          title="Bridge for industrial and
                corporate development."
          description="Established with the aim of helping organizations improve their performance by providing right resource at the right time. We Sahaj Pharma believe in becoming one of the trusted business partners by delivering quality services. Sahaj Pharma is a premier talent search & business outsourcing firm. We aim at fulfilling the demands of the future. With expertise in the area of talent search, recruitment & training, we provide qualityacross Pharmaceutical and Chemical industries."
        />
      </AboutDetail>
      <Clients />
      <Expertcommunity />
      <Testimonial />
      <Companybenfits />
      {/* <Faq />
      <Newsarticle /> */}
    </>
  );
}
