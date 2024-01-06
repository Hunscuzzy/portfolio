import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "../components/layout/navbar";
import { Providers } from "./providers";
import Body from "../components/layout/body";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hugo-fontvieille.com"),
  title: {
    default: "Hugo Fontvieille",
    template: "%s | Hugo Fontvieille",
  },
  description: "Developer, entrepreneur.",
  openGraph: {
    title: "Hugo Fontvieille",
    description: "Developer, entrepreneur.",
    url: "https://hugo-fontvieille.com",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Hugo Fontvieille",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} lang='en'>
      <Providers>
        <Body>
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </Body>
      </Providers>
    </html>
  );
}
