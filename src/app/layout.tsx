import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twenty One Pilots | Clancy",
  description: "Discover the Clancy Era of Twenty One Pilots!",
};

const martianMono = localFont({
  src: "./fonts/MartianMono.ttf",
  variable: "--font-martianMono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden ${martianMono.variable} font-[family-name:var(--font-martianMono)]`}
      >
        {children}
      </body>
    </html>
  );
}
