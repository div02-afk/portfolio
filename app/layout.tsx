import { ibmPlexMono } from "@/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css";

export const metadata: Metadata = {
  title: "Lokendra Kushwah",
  description: "A software engineer who codes and designs with purpose.",
  icons: {
    icon: "/pfp.png",
  },
  openGraph: {
    title: "Lokendra Kushwah",
    description: "A software engineer who codes and designs with purpose.",
    url: "https://lokendra.tech",
    images: [
      {
        url: "/openGraph.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokendra Kushwah",
    description: "A software engineer who codes and designs with purpose.",
    images: ["/openGraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://us.umami.is/script.js"
          data-website-id="257c8167-a361-46a9-9bad-bfd4127e31aa"
          strategy="lazyOnload"
        />
      </head>
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
