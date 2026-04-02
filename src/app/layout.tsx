import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CommonSectionFooter from "./(common)/section-footer";
import CommonSectionHeader from "./(common)/section-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cheng Music",
  description: "Music Portfolio of Cheng",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className + " bg-repeat text-slate-100 bg-slate-900"}
      >
        <CommonSectionHeader />
        {children}
        <CommonSectionFooter />
      </body>
    </html>
  );
}
