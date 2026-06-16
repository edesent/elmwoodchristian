import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3, Source_Serif_4, Outfit } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// v3 (Brown-style editorial): Minion-like serif + Circular-like geometric sans
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://www.elmwoodchristianacademy.org";
const SITE_NAME = "Elmwood Christian Academy";
const SITE_TAGLINE = "Christ-Centered Education in Brighton, Colorado";
const SITE_DESCRIPTION =
  "Elmwood Christian Academy is a Christ-centered, college-preparatory school in Brighton, Colorado, serving preschool through 12th grade with a mastery-based curriculum, godly character, and academic excellence since 1973.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Christian school Brighton Colorado",
    "private school Brighton CO",
    "Christ-centered education",
    "K-12 Christian academy",
    "preschool Brighton Colorado",
    "college preparatory Christian school",
    "mastery-based learning",
    "Bible-based curriculum",
    "Elmwood Christian Academy",
    "Christian education Denver",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Christ-centered education since 1973`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: true, email: true, address: true },
  category: "education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfbf8" },
    { media: "(prefers-color-scheme: dark)", color: "#4f121d" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${source.variable} ${sourceSerif.variable} ${outfit.variable} antialiased`}
    >
      <body className="bg-paper">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
