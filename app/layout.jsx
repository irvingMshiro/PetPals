import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PetPals",
  description: "For all things about your pets",
  icons : {
    icon : [
      {
        url: "/favicon.ico"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Header />
          <main className='container mx-auto bg-[#DDD2B3]'>
            <div className='flex items-start justify-center min-h-screen'>
              <div className='mt-20'>{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
