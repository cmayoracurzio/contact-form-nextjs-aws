import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact Form with Next.js 13 and AWS",
  description:
    "Contact form web application using Next.js 13 and AWS Lambda, Simple Email Service (SES), API Gateway and Identity and Access Management (IAM).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen w-full items-center justify-center">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
