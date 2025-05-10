import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twenty One Pilots | Clancy",
  description: "Discover the Clancy Era of Twenty One Pilots!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-x-hidden`}>{children}</body>
    </html>
  );
}
