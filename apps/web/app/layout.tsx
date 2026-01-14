import "bracketui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeScript, RootGradient } from "bracketui";
import Header from "../components/Header";
import AppFooter from "../components/Footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BracketUI - Modern React Component Library",
  description: "A modern, lightweight React component library built with Tailwind CSS v4",
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
      <body className={`${geist.className} bg-white dark:bg-black`}>
        <RootGradient variant="radial" intensity="subtle" />
        <Header />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
