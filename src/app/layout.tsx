import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Hamburger from "@/components/hamburger";
import Background from "@/components/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Trevor Black",
  description: "Meet the Computer Science major through his self-coded website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Background />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-full min-h-screen">

            {/* Header disables on mobile, Hamburger enables on mobile */}
            <Header />
            <Hamburger />
            <main className="flex flex-col flex-auto items-center">
                {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
