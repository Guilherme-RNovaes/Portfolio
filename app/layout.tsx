import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashGrotesk = localFont({
  src: [
    { path: './fonts/ClashGrotesk/ClashGrotesk-Extralight.woff2', weight: '200', style: 'normal' },
    { path: './fonts/ClashGrotesk/ClashGrotesk-Light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/ClashGrotesk/ClashGrotesk-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ClashGrotesk/ClashGrotesk-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/ClashGrotesk/ClashGrotesk-Semibold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/ClashGrotesk/ClashGrotesk-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-grotesk',
});

export const metadata: Metadata = {
  title: "Guilherme Novaes | Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${clashGrotesk.variable} font-grotesk antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
