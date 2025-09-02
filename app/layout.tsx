import type { Metadata, Viewport } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-epilogue",
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
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
        <meta name="theme-color" content="#5B2CFA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${epilogue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
