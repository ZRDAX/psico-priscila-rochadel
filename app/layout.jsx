import { Montserrat } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//componetes importados
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
//import { Toaster } from "@/components/ui/sonner"
import CursorProvider from "@/components/CursorContext";

const MontserratFont = Montserrat({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Psico Priscila Rochadel",
  description: "Site destinado a Psicóloga Priscila Rochadel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${MontserratFont.variable} font-second antialiased`}
      >
        <CursorProvider>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </CursorProvider>
      </body>
    </html>
  );
}
