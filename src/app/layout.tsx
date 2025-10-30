import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Background3D from "@/components/Background3D";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Zaeem Hussain - Software Developer",
  description:
    "Hozefa Hassan Rizvi - Full Stack Developer specializing in MERN stack, React.js, Node.js, and modern web technologies. Expert in database development and web applications.",
  keywords:
    "Hozefa Hassan Rizvi, Hozefa1, Hozefa1, Software Developer, Full Stack Developer, MERN Stack, Web Developer, React Developer, Next.js Expert, Database Developer, Frontend Specialist, Backend Developer, JavaScript Expert, TypeScript Developer, Node.js Developer, MongoDB Expert, SQL Developer",
  authors: [{ name: "Hozefa Hassan Rizvi" }],
  creator: "Hozefa Hassan Rizvi",
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Hozefa1.vercel.app/",
    title: "Hozefa Hassan Rizvi - Full Stack Developer",
    description:
      "Full-stack developer specializing in MERN stack, React.js, Node.js, and modern web technologies.",
    siteName: "Hozefa Hassan Rizvi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hozefa Hassan Rizvi - Full Stack Developer",
    description:
      "Full-stack developer specializing in MERN stack, React.js, Node.js, and modern web technologies.",
    creator: "@Hozefa_dev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  metadataBase: new URL("https://Hozefa1.vercel.app"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "/googlea4a36904e14398c1.html",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="shortcut icon" href="/nextjs.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/nextjs.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https: http:; font-src 'self' data: https:; connect-src 'self' data: blob: https:; worker-src 'self' blob: data:;"
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Background3D />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <SpeedInsights />
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
