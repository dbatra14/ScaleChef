import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "ScaleChefs — Technology × Marketing × AI",
  description: "ScaleChefs helps ambitious businesses scale through technology, marketing and practical AI.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", sizes: "1050x890", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
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
