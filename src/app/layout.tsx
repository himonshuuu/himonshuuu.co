import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeueBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueHeavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueThin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueUltraLight.otf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

export const metadata: Metadata = {
  title: "Himanshu Saikia",
  description: "Himanshu's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable} antialiased`}>{children}</body>
    </html>
  );
}
