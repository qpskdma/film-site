import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "./Header/Header";

const normsPro = localFont({
  src: "./fonts/TTNormsPro-Medium.woff",
  variable: "--font-normsPro",
  weight: "500",
});

const drukWide = localFont({
  src: "./fonts/Druk-Wide-Cy-Regular.woff",
  variable: "--font-druk-wide-cy",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TVOE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      {/* <body> */}
      <body className={`${normsPro.variable} ${drukWide.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
