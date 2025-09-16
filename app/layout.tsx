import type { Metadata, Viewport } from "next";
import { Epilogue, Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Navigation/Header";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-epilogue",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover'
};

export const metadata: Metadata = {
  title: "Kaleidoscope Recovery - A Radical Recovery Solution",
  description: "Break free from drinking and heal the pain beneath it. Our 3-phase trauma-informed approach achieves 85% success rates with lifetime ForeverCare™ support.",
  keywords: "alcohol recovery, addiction treatment, trauma therapy, rehab alternative, sobriety support",
  authors: [{ name: "Kaleidoscope Recovery Team" }],
  creator: "Kaleidoscope Recovery",
  publisher: "Kaleidoscope Recovery",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Kaleidoscope Recovery - A Radical Recovery Solution",
    description: "Break free from drinking and heal the pain beneath it. 85% success rate with our trauma-informed 3-phase method.",
    url: "https://kaleidoscope-recovery.com",
    siteName: "Kaleidoscope Recovery",
    images: [
      {
        url: "/og-image.svg", // Using SVG for placeholder
        width: 1200,
        height: 630,
        alt: "Kaleidoscope Recovery - Transforming lives through radical recovery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaleidoscope Recovery - A Radical Recovery Solution",
    description: "Break free from drinking and heal the pain beneath it. 85% success rate with our trauma-informed approach.",
    images: ["/og-image.svg"], // Using SVG for placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${epilogue.variable} ${inter.variable} ${playfair.variable} antialiased font-sans`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:rounded-lg">
          Skip to content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
