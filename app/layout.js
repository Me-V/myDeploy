import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a Chai - A website for funding your projects",
  description: "This website is a crowd funding site for the creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" text-white">
         
         <SessionWrapper>
         <Navbar/>
              <div>
              {children}
              </div>
         <Footer/>
         </SessionWrapper>
     
        </body>
    </html>
  );
}
