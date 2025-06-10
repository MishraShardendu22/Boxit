import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import axios from "axios";
import { ImageKitProvider } from "imagekitio-next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boxit",
  description: "Store it. Share it. Boxit.",
};

const authenticator = async () => {
    try{
      const res = await axios.get("/api/imagekit-auth");
      return res.data;
    }catch(error){
      console.error("Authentication error:", error);
      throw error;
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en">
      <ImageKitProvider
        publicKey={process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY as string}
        urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT as string}
        authenticator={ authenticator }
      >
        <ClerkProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
            {children}
          </body>
        </ClerkProvider>
      </ImageKitProvider>
    </html>
  );
}
