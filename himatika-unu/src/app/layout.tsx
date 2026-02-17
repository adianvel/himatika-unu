import type { Metadata } from "next";
import { Bebas_Neue, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterWrapper from "@/components/FooterWrapper";
import BackToTop from "@/components/BackToTop";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
        className={`${bebasNeue.variable} ${nunito.variable} font-sans antialiased bg-white`}
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
