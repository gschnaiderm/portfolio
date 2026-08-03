import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Germán Schnaider | Portfolio",
  description: "Portfolio profesional de Germán Schnaider, estudiante de Ingeniería en Computación y Desarrollador de Software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
