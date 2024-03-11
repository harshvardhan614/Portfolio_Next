import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] , variable:"--font-inter" });

export const metadata = {
  title: "Harshvardhan's Portfolio",
  description: "Developerd using next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
