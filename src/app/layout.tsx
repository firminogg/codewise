import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { ThemeProvider } from "next-themes";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeWise",
  description: "Sistema de Cursos Gratuitos de Program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
