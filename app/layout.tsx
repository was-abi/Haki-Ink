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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
