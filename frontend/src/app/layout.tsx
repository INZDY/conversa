import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conversa",
  // description: "Conversa Chat Application",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* <header className="flex h-16 border border-black text-black">
          Header
        </header> */}
        {children}
        {/* <footer className="flex h-16 border border-black text-black">
          Footer
        </footer> */}
      </body>
    </html>
  );
}
