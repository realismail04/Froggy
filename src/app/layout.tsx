import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuickEscape from "@/components/ui/QuickEscape";

const montserrat = Montserrat({
  variable: "--font-headings",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Froggy's Law CIC | Safeguarding Reform & Survivor-led Support",
  description: "A survivor-led safeguarding reform project dedicated to transforming how children show abuse and how professionals respond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable}`}>
        <QuickEscape />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
