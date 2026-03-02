import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const assistant = Assistant({ subsets: ["hebrew", "latin"] });

export const metadata: Metadata = {
  title: "ניהול פרויקטים בבנייה",
  description: "דאשבורד לניהול פרויקטים בבנייה",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={assistant.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
