import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guilherme Bonato - Desenvolvedor Front-End",
  description: "Portfólio de Guilherme Dos Santos Bonato - Desenvolvedor Front-End especializado em React.js, Next.js e TypeScript",
  keywords: "desenvolvedor, front-end, react, nextjs, typescript, portfólio",
  authors: [{ name: "Guilherme Bonato" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://guilherme-bonato.vercel.app",
    title: "Guilherme Bonato - Desenvolvedor Front-End",
    description: "Portfólio de desenvolvimento web com React, Next.js e TypeScript",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
