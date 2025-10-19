import { Raleway, Nunito } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { icons } from "lucide-react";

const raleway = Raleway({ subsets: ["latin"], weight: ["600", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "TORTOCRAFT",
  description: "A modern e-commerce website built with Next.js",
    icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${raleway.className} ${nunito.className} antialiased bg-white text-gray-900`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
