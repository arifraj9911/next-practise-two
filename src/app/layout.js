import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import AuthProvider from "@/provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${inter.className} max-w-screen-xl mx-auto`}>
          <Header></Header>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
