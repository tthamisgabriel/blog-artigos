import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog Artigos",
  description: "Blog criado com Next.js, App Router e SEO dinâmico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}