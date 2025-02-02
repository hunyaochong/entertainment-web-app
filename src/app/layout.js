import { Outfit } from "next/font/google";
import "./globals.css";
import "./reset.css";

const outfit = Outfit({
  weight: ["300", "500"], // Light and Medium weights
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Entertainment Web App",
  description: "Entertainment web app designed by Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`}>{children}</body>
    </html>
  );
}
