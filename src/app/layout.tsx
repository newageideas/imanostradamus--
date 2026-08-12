import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMANOSTRADAMUS",
  description: "Full-stack systems. Voice. Apps. Commercials.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030014] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
