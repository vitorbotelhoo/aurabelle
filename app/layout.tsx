import type { Metadata } from "next";
import { Corben } from "next/font/google";
import "./globals.css";

const corben = Corben({
  weight: '400',
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurabelle Saúde",
  description: "Bem-estar  é tudo, saúde é para você!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={corben.className}>{children}</body>
    </html>
  );
}
