import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Hamburger from "@/components/hamburger";
import Background from "@/components/background";
import { TbAlertTriangle } from "react-icons/tb";

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
          <div className="flex flex-col h-full min-h-screen overflow-hidden font-raleway">

            {/* Header disables on mobile, Hamburger enables on mobile */}
            <Header />
            <Hamburger />
            <div className="flex flex-row w-full p-4 items-center justify-center gap-1">
              <TbAlertTriangle className="h-full aspect-square" />
              Site is still under construction
              <TbAlertTriangle className="h-full aspect-square" />
            </div>
            <main className="flex flex-col flex-auto items-center">
                {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
