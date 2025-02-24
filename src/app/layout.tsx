import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Andrew Gionfriddo - Software Engineer",
  description:
    "Former teacher turned software engineer, specializing in full-stack web development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light min-h-screen flex flex-col`}
      >
        <Providers>
          <Navigation />
          <main className="flex-grow container mx-auto px-4 py-8 animate-fade-in">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
