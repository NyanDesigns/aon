import { Abel } from "next/font/google";
import "./globals.css";

const abel = Abel({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Architect of Nothing",
  description: "Designing Extinction of a Diminished Dominion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={abel.className}>{children}</body>
    </html>
  );
}
