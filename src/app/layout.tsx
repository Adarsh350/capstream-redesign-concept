import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "CapStream | The financial foundation for bigger work.",
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
