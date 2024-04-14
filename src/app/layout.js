import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import ResumeBtn from "@/components/ResumeBtn";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import AiModal from "@/components/AiModal";
import HomeBtn from "@/components/HomeBtn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Portfolio | Harshvardhan Rathore - Full Stack Developer & UX/UI Designer",
    default: "Harshvardhan Rathore - Full Stack Developer & UX/UI Designer",
  },
  description:
    "Hello! I'm Harshvardhan Rathore, a Final Year B.Tech student at NIT Surat passionate about building user-friendly interfaces and top-notch web applications. With experience in freelance projects, internships, and startup collaborations, I excel in both front-end and back-end development.  I'm a Tech Stack Master proficient in JavaScript, TypeScript, ReactJS, NextJS, Node.js, mongodb and various NoSQL databases and various UI frameworks. Let's craft something amazing together!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <Analytics />
        <SpeedInsights />
        <FireFliesBackground />
        <HomeBtn />
        <Sound />
        <ResumeBtn />
        <AiModal/>
        {/* <div id="my-modal" /> */}
      </body>
    </html>
  );
}