import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "CapStream | Bid bigger. Build better.",
  description:
    "A homepage redesign concept for CapStream, featuring surety bonding and project mobilization funding for construction contractors.",
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
