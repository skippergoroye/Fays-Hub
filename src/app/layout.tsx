import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";

const opensans = Open_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600",  "700", "800"],
  variable: "--font-opensans"

 });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        <ReduxProvider>
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
