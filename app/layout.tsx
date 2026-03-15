import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reza Ghaleh | Software Developer",
  description:
    "Portfolio of a skilled software developer specializing in full-stack web and mobile applications.",
  icons: {
    icon: "/assets/rg-logo.png"
  },
  openGraph: {
    title: "Reza Ghaleh - Software Developer Portfolio",
    description: "Explore my projects and skills in full-stack development.",
    images: ["/assets/profile.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
