import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divine Lawn Care Service | Lansing, East Lansing & Okemos Lawn Care",
  description:
    "Divine Lawn Care Service — locally owned, MSU-alumni-run lawn care in Lansing, East Lansing, and Okemos, MI. Mowing, edging, cleanups, tree & shrub care. Weekly mows from $25.",
  icons: {
    icon: "https://d2ol7oe51mr4n9.cloudfront.net/user_3FdzYgmo0qvTQJN8FfzUEpsu1zB/c77882b5-bc2d-46dc-9dc9-51d86ee095be.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Work+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
