import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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

  icons: "/tingeworks.svg",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
