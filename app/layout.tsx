import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WPT Efficiency | Power transfer across barriers",
  description:
    "A student physics study comparing inductive electromagnetic and ultrasonic acoustic power transfer across barriers.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "WPT Efficiency",
    description: "Electromagnetic and acoustic power transfer across barriers.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "WPT Efficiency",
    description: "Electromagnetic and acoustic power transfer across barriers.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
