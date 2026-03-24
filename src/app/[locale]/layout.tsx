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
import BackgroundEffect from "~/components/background-effect";
import MouseGlow from "~/components/mouse-glow";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Hangflow | Fun group full of lovely people",
    template: "%s | Hangflow",
  },
  description:
    "A safe space for Finnish youth to connect, create, and flow through workshops and community events.",
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
  metadataBase: new URL("https://hangflow.org"), // Replace with your actual domain
  openGraph: {
    type: "website",
    locale: "en_FI",
    url: "https://hangflow.org",
    siteName: "Hangflow",
    title: "Hangflow | Fun group full of lovely people",
    description:
      "Join the flow. We build safe spaces for young creators in Finland.",
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
    title: "Hangflow | Empowering Youth Creativity",
    description: "Safe spaces and creative workshops for youth in Finland.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
      <body>
        <NextIntlClientProvider messages={messages}>
          {" "}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MouseGlow />
            <Navbar />
            <main className="relative z-10 min-h-screen">{children}</main>
            <Footer />

            <ThemeToggle />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
