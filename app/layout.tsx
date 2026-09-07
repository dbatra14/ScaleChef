import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScaleChef — Technology × Marketing × AI",
  description: "ScaleChef helps ambitious businesses scale through technology, marketing and practical AI.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "ScaleChef — Technology × Marketing × AI",
    description: "We mix tech, marketing and AI to turn momentum into scale.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ScaleChef growth engine" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleChef — Technology × Marketing × AI",
    description: "We mix tech, marketing and AI to turn momentum into scale.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
