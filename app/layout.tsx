import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-poppins'
});
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: "Piyush Kumar - .NET Full-Stack Developer",
  description: ".NET Full-Stack Developer at Capgemini specializing in ASP.NET Core, Angular, and Azure cloud solutions",
  keywords: ["Piyush Kumar", ".NET Developer", "Full-Stack Developer", "ASP.NET Core", "Angular", "Azure"],
  authors: [{ name: "Piyush Kumar" }],
  openGraph: {
    title: "Piyush Kumar - .NET Full-Stack Developer",
    description: ".NET Full-Stack Developer at Capgemini",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} ${roboto.variable} font-body`}>{children}</body>
    </html>
  );
}
