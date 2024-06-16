import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tingeworks.com"),

  title: "Tingeworks - The Web and Native App Factory",
  description:
    "Fingers, tentacles or telekinesis no matter what users use to surf the net, we develop software that works for your users.",

  twitter: {
    title: "@tingeworks",
    card: "summary_large_image",
    description:
      "Fingers, tentacles or telekinesis no matter what users use to surf the net, we develop software that works for your users.",
    creator: "@tingeworks",
    images: "/website-meta-preview-image.jpg",
  },

  openGraph: {
    title: "Tingeworks - The Web and Native App Factory",
    description:
      "Fingers, tentacles or telekinesis no matter what users use to surf the net, we develop software that works for your users.",
    type: "website",
    url: "https://tingeworks.com",
    images: "/website-meta-preview-image.jpg",
  },

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container min-h-screen mx-auto px-5 lg:px-20">
          {children}
        </div>
      </body>
      <GoogleAnalytics gaId="G-0Z4ZMMGBWT" />
    </html>
  );
}
