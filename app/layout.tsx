import type { Metadata } from "next";
import { Roboto_Slab, Montserrat } from "next/font/google";
import "@/styles/globals.css";

// Brand fonts from Haki & Ink guidelines
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-roboto-slab",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Haki & Ink — Book Reviews",
    template: "%s | Haki & Ink",
  },
  description:
    "A personal book review blog — thoughtful reviews, honest takes, and a curated digital bookshelf.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoSlab.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
