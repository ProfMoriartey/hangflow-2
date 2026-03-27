import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import { cn } from "~/lib/utils";
import ThemeToggle from "~/components/theme-toggle";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing, type Locale } from "~/i18n/routing";
import { notFound } from "next/navigation";

import MouseGlow from "~/components/mouse-glow";
// import BackgroundGlows from "~/components/background-glows";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "HangFlow ry | Join the Flow!",
    template: "%s | Hangflow",
  },
  description:
    "Created by youth, for youth. A safer, empowering and fun community to connect, grow, and unlock your potential",
  keywords: [
    "Youth",
    "Finland",
    "Creativity",
    "Workshops",
    "Community",
    "Safe Space",
    "Helsinki",
  ],
  authors: [{ name: "Hangflow ry" }],
  creator: "Hangflow ry",
  metadataBase: new URL("https://www.hangflow.org"), // Replace with your actual domain
  openGraph: {
    type: "website",
    locale: "en_FI",
    url: "https://www.hangflow.org",
    siteName: "Hangflow",
    title: "HangFlow ry | Join the Flow!",
    description:
      "Created by youth, for youth. A safer, empowering and fun community to connect, grow, and unlock your potential",
    images: [
      {
        url: "/og-image.svg", // Place a 1200x630px image in your public folder
        width: 1200,
        height: 630,
        alt: "Hangflow Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HangFlow ry | Join the Flow!",
    description:
      "Created by youth, for youth. A safer, empowering and fun community to connect, grow, and unlock your potential",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang="en" className={cn(geist.variable, "font-sans", inter.variable)}>
      <body className="bg-background relative min-h-screen overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          {" "}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <BackgroundGlows /> */}
            <MouseGlow />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />

            <ThemeToggle />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
