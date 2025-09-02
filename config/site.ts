export const siteConfig = {
  name: "Divyam Sharma",
  description: "A software engineer who codes and designs with purpose.",
  url: "hmm",

  // Personal Information
  author: {
    name: "Divyam Sharma",
    email: "divyam.7379@gmail.com",
    twitter: "@DivyamsSharma",
    github: "div02-afk",
    linkedin: "sharma-divyam",
  },

  // Leave empty objects or comment out sections you don't want to use
  // analytics: {
  //   // Umami Analytics
  //   umami: {
  //     websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
  //     url: process.env.NEXT_PUBLIC_UMAMI_URL,
  //   },
  //   // Microsoft Clarity
  //   clarity: {
  //     projectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
  //   },
  // },
} as const;

export type SiteConfig = typeof siteConfig;
