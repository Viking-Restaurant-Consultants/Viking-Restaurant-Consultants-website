import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viking Restaurant Consultants | Expert Restaurant Operations Consulting",
  description: "Viking Restaurant Consultants provides expert restaurant operations consulting, P&L management, staff training, and process optimization. Discover Odin's Almanac, our powerful restaurant management software.",
  keywords: "restaurant consulting, restaurant operations, P&L management, staff training, menu engineering, cost control, restaurant software, Odin's Almanac",
  authors: [{ name: "Viking Restaurant Consultants" }],
  openGraph: {
    title: "Viking Restaurant Consultants | Expert Restaurant Operations Consulting",
    description: "Expert restaurant operations consulting and Odin's Almanac software for restaurant management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
