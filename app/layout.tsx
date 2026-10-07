import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "ScaleChefs — Technology × Marketing × AI",
  description: "ScaleChefs helps ambitious businesses scale through technology, marketing and practical AI.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48 32x32 16x16", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    title: "ScaleChefs — Technology × Marketing × AI",
    description: "We mix tech, marketing and AI to turn momentum into scale.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ScaleChefs growth engine" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleChefs — Technology × Marketing × AI",
    description: "We mix tech, marketing and AI to turn momentum into scale.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
