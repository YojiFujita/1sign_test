import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1Sign - 1人の大家と、住む人のための、マッチングアプリ",
  description: "大家と住む人をつなぐ革新的なマッチングプラットフォーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
