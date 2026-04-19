import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TripPick",
  description: "Japan-only travel curation MVP with mock flights, stays, and food."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
