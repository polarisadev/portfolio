import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Polar - Developer Portfolio",
  description:
    "Portfolio of Polar, creator of Disband, Neo Blog, and other popular services. Experienced in React, JavaScript, C#, C++, Java, and more.",
  keywords: ["Polar", "Developer", "Portfolio", "Disband", "Neo Blog", "React", "JavaScript", "C#", "C++", "Java"],
  authors: [{ name: "Polar" }],
  creator: "Polar",
  generator: "Polar",
  openGraph: {
    title: "Polar - Developer Portfolio",
    description: "Portfolio of Polar, creator of Disband, Neo Blog, and other popular services.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polar - Developer Portfolio",
    description: "Portfolio of Polar, creator of Disband, Neo Blog, and other popular services.",
    creator: "@wsgpolar",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
