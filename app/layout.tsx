import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Role Reaction Bot — Auto-assign roles with emoji reactions",
  description: "Automatically assign and remove Discord roles when users react with designated emojis. Easy setup, web dashboard, instant role management."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9a2b1e45-2c84-4806-8328-d364fa2d4754"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
