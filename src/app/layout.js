import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import PageContextProvider from "@/context/PageContext";
import Header from "@/_component/shared/Header";
import Footer from "@/_component/shared/Footer";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Full SEO metadata
export const metadata = {
  metadataBase: new URL("https://yourdomain.com"), // Replace with your actual domain
  title: {
    default: "My Awesome Site",
    template: "%s | My Awesome Site",
  },
  description:
    "My Awesome Site is a modern platform for web developers and designers.",
  keywords: ["Next.js", "React", "Web Development", "Frontend", "SEO"],
  authors: [{ name: "Your Name", url: "https://yourdomain.com" }],
  creator: "Your Name",
  openGraph: {
    title: "My Awesome Site",
    description:
      "Explore cutting-edge web development articles, tutorials, and projects.",
    url: "https://yourdomain.com",
    siteName: "My Awesome Site",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "My Awesome Site Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Awesome Site",
    description:
      "Explore cutting-edge web development articles, tutorials, and projects.",
    creator: "@yourtwitter", // Replace with your Twitter handle
    images: ["https://yourdomain.com/og-image.jpg"], // Replace with your actual image
  },
  icons: {
    icon: "/favicon.ico", // Ensure favicon exists in public folder
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest", // Optional: for PWA
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
      >
        <PageContextProvider>
          <Header />
          <div className="min-h-[calc(100vh-550px)]">
             {children}
          </div>
          <Footer />
        </PageContextProvider>
      </body>
    </html>
  );
}
