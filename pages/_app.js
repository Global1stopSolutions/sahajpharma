import Layout from "@/component/Layout/Layout";
import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color="#89c446" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </Layout>
  );
}
