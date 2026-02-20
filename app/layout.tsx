import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viking Restaurant Consultants | Strategic Success",
  description: "Premium restaurant consulting and software solutions by Viking Restaurant Consultants. 25 years of excellence in management and patented operational systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="nordic-noise">
        {children}
      </body>
    </html>
  );
}
