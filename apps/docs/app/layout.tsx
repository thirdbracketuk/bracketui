import "bracketui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ThemeScript } from "bracketui";
import Header from "../components/Header";
import AppFooter from "../components/Footer";

const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BracketUI Documentation",
  description: "Complete documentation for BracketUI component library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${geistMono.className} bg-background text-foreground`}>
        {/* <RootGradient variant="conic" intensity="medium" /> */}
        <Header />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
