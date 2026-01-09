import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuickEscape from "@/components/ui/QuickEscape";
import ReportAbuse from "@/components/ui/ReportAbuse";

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
  title: "Froggy's Voice Box | Safeguarding Hub & Survivor-led Support",
  description: "A central, calm hub for safeguarding information, resources, and community connection. Rooted in emotional safety, clarity, and accessibility.",
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
        <ReportAbuse />
        <Footer />
      </body>
    </html>
  );
}
