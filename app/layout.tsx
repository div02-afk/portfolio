import { PostHogProvider } from "@/components/PostHogProvider";
import { siteConfig } from "@/config/site";
import { ibmPlexMono } from "@/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/pfp.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: "/openGraph.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/openGraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Umami Analytics - Only load if configured */}
        {siteConfig.analytics?.umami?.websiteId && (
          <Script
            src={siteConfig.analytics.umami.url}
            data-website-id={siteConfig.analytics.umami.websiteId}
            strategy="lazyOnload"
          />
        )}

        {/* Microsoft Clarity - Only load if configured */}
        {siteConfig.analytics?.clarity?.projectId && (
          <Script id="clarity-script" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${siteConfig.analytics.clarity.projectId}");
            `}
          </Script>
        )}
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
