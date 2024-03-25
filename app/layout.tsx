import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/globals.css";

import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontInter } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar/navbar";
import clsx from "clsx";
import { Footer } from "@/components/footer/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <Script src="https://unpkg.com/swiper/swiper-bundle.min.js" />
      <body
        className={clsx(
          "min-h-screen bg-background font-Inter antialiased",
          fontInter.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
