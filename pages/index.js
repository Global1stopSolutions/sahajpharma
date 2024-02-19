import Head from "next/head";
import IndexHero from "@/component/Home/IndexHero";
import ServiceCard from "@/component/Home/ServiceCard";
import WhatOffering from "@/component/Home/WhatOffering";
import About from "@/component/Home/About";
import OurClients from "@/component/Home/OurClients";
import JoinCommunity from "@/component/Home/JoinCommunity";
import Testimonial from "@/component/Home/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sahaj Pharma For HR Solutions</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.sahajpharma.com/" />
      </Head>
      <main>
        <IndexHero />
        <ServiceCard />
        <WhatOffering />
        <About />
        <OurClients />
        <JoinCommunity />
        <Testimonial />
      </main>
    </>
  );
}
