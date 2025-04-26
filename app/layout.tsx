import { ibmPlexMono } from "@/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css";
import { PostHogProvider } from "@/components/PostHogProvider";

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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://us.umami.is/script.js"
          data-website-id="257c8167-a361-46a9-9bad-bfd4127e31aa"
          strategy="lazyOnload"
        />
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "r965cx6yr7");
          `}
        </Script>

      </head>
      <body className={` ${ibmPlexMono.variable} font-sans uppercase antialiased bg-site-background min-h-svh`}>
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
