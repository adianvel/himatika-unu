import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterWrapper from "@/components/FooterWrapper";
import BackToTop from "@/components/BackToTop";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const generalSans = localFont({
  src: [
    { path: "./fonts/GeneralSans-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/GeneralSans-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/GeneralSans-Semibold.woff", weight: "600", style: "normal" },
    { path: "./fonts/GeneralSans-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HIMATIKA UNU Yogyakarta",
    template: "%s | HIMATIKA UNU Yogyakarta"
  },
  description: "Himpunan Mahasiswa Informatika Universitas Nahdlatul Ulama Yogyakarta - Wadah pengembangan akademik, kreativitas, dan kepemimpinan mahasiswa informatika dengan nilai-nilai Aswaja.",
  keywords: ["HIMATIKA", "UNU Yogyakarta", "Informatika", "Himpunan Mahasiswa", "Universitas Nahdlatul Ulama", "Coding", "Programming"],
  authors: [{ name: "HIMATIKA UNU Yogyakarta" }],
  openGraph: {
    title: "HIMATIKA UNU Yogyakarta",
    description: "Himpunan Mahasiswa Informatika Universitas Nahdlatul Ulama Yogyakarta",
    type: "website",
    locale: "id_ID",
    siteName: "HIMATIKA UNU Jogja",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIMATIKA UNU Yogyakarta",
    description: "Himpunan Mahasiswa Informatika UNU Yogyakarta",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${bebasNeue.variable} ${generalSans.variable} font-sans antialiased bg-white`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <FooterWrapper />
        <BackToTop />
      </body>
    </html>
  );
}
