import type { Metadata } from "next";
import { Gantari } from "next/font/google";

import "@/app/_styles/globals.css";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";

const gantari = Gantari({ subsets: ["latin"], display: "swap", weight: "400" });

export const metadata: Metadata = {
    title: "Falafel Restaurant",
    description: "Authentic falafel restaurant",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" style={{ filter: "none" }}>
            <body
                className={`${gantari.className} relative main_background min-h-screen flex flex-col text-white`}
            >
                <div className="inset-0 fixed -z-10 opacity-50 bg-[url('/images/Flying-green-leaves-in-air.png')] bg-cover" />
                <div className="container mx-auto my-10 px-6 flex flex-col gap-6">
                    <Header />
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
