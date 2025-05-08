import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twenty One Pilots | Clancy Era",
  description: "Discover the Clancy Era of Twenty One Pilots!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
