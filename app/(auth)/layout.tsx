import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const YOUR_CLERK_FRONTEND_API_KEY = 'pk_test_cmVsaWV2ZWQtc2FpbGZpc2gtMTMuY2xlcmsuYWNjb3VudHMuZGV2JA'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Groove",
  description: "A Next.js 13 Meta Groove App.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider frontendApi={YOUR_CLERK_FRONTEND_API_KEY}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
