import type { Metadata } from "next";
import "./globals.css";
import { DefaultFooter, DefaultHeader } from "@/components/globals";

export const metadata: Metadata = {
  title: "TreGurus - Arcade",
  icons: [
    {
        rel: "icon",
        type: "image/ico",
        sizes: "64x64",
        url: "./favicon.ico"
    },
  ],
  description: "Solid Draft Presented by TreGurus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <DefaultHeader />
        {children}
        <DefaultFooter />
      </body>
    </html>
  );
}
