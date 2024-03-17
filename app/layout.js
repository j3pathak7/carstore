import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${poppins.variable}`}>
        <div className="bg-gray-100">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
