import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bicicletas",
  description: "Catálogo de bicicletas con login y contacto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 🔹 Barra de navegación */}
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <nav className="container mx-auto flex gap-6">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            <Link href="/products" className="hover:underline">
              Productos
            </Link>
            <Link href="/contactos" className="hover:underline">
              Contacto
            </Link>
              <Link href="/about" className="hover:underline">
              About
            </Link>
          </nav>
        </header>

        {/* 🔹 Contenido dinámico */}
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
