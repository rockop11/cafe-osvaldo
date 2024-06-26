import type { Metadata } from "next";
import { Schibsted_Grotesk,  } from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={schibstedGrotesk.className}>{children}</body>
    </html>
  );
}
