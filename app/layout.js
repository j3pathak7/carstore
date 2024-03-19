import { Roboto_Mono } from "next/font/google";
import { Madimi } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "the Car Store",
  description: "Car Reseller in Guwahati",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.variable}`}>
        <div className="bg-gradient-to-r from-teal-950 to-black">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
