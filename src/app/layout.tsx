import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "CapStream | Bond the bid. Fund the build.",
  description:
    "CapStream coordinates surety bonding and project mobilization funding so construction contractors can qualify, compete, and start awarded work with greater financial capacity.",
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
