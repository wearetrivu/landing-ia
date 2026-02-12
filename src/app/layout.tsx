import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trivu — Automatización Inteligente para tu Negocio",
  description:
    "Simplificamos negocios complejos con automatización de procesos, agentes de IA, chatbots personalizados e integraciones inteligentes. Agenda tu consulta gratuita.",
  keywords: [
    "automatización",
    "inteligencia artificial",
    "chatbot",
    "agentes IA",
    "CRM",
    "integración",
    "WhatsApp",
    "productividad",
  ],
  openGraph: {
    title: "Trivu — Automatización Inteligente para tu Negocio",
    description:
      "Simplificamos negocios complejos con automatización de procesos, agentes de IA y chatbots personalizados.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
