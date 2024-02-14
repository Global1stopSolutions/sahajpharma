import IndexHero from "@/component/Home/IndexHero";
import ServiceCard from "@/component/Home/ServiceCard";
import Head from "next/head";

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
      </main>
    </>
  );
}
