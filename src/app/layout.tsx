import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen"; // Import komponen baru

export const metadata: Metadata = {
  title: "Portfolio H. MP",
  description: "Digital Architect & Pro Gamer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* History scroll dikelola secara native oleh browser. 
          Selama kita tidak memaksa window.scrollTo(0,0) di dalam useEffect, 
          browser akan mencoba kembali ke posisi terakhir secara otomatis.
      */}
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}