import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "../styles/main.scss";
import "animate.css";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "AnhLs Dev",
  description:
    "I'm a engineer software. I'm passionate about coding and the endless exploration it offers. I'm always driven to innovate and find the best solutions for my software."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plexMono.className}>{children}</body>
    </html>
  );
}
