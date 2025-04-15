
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import { ibmPlexMono } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "ui-animation-challenges",
  description: "A collection of UI animation challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${ibmPlexMono.variable} font-sans uppercase antialiased bg-site-background min-h-svh`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
