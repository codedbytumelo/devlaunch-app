import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devlaunch - Build & Ship Products Faster",
  description:
    "Devlaunch helps developers and creators rapidly build, launch, and distribute web products using high-quality templates, UI components, and blocks. Powered by modern Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Devlaunch",
    "templates",
    "components",
    "blocks",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "UI design",
    "developer tools",
    "MVP",
  ],
  authors: [{ name: "Devlaunch Team" }],
  openGraph: {
    title: "Devlaunch - Build & Ship Products Faster",
    description:
      "A platform for developers to accelerate product development using templates, components, and blocks.",
    url: "https://devlaunch.app",
    siteName: "Devlaunch",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlaunch - Build & Ship Products Faster",
    description:
      "Rapidly build, launch, and distribute web products with Devlaunch's templates, components, and blocks.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
