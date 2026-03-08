import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Haki & Ink — Book Reviews",
    template: "%s | Haki & Ink",
  },
  description:
    "A personal book review blog — thoughtful reviews, honest takes, and a curated digital bookshelf.",
  icons: {
    icon: "/brand_logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Haki & Ink",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
