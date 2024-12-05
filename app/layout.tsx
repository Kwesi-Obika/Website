import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
// const bebasNeue = localFont({
//   src: "./fonts/BebasNeue-Regular.ttf",
//   variable: "--font-bebas-neue",
//   weight: "100 900",
// })


export const metadata: Metadata = {
  title: "Object Oriented Development",
  description: "Empowering You with Innovative Tech Solutions.",
  generator: "Object Oriented Development LLC ;)",
  icons: {
    icon: "/objectLogo.png",
    apple: "/objectLogo.png",
  }
};

export default function RootLayout(
	{
		children,
	}: Readonly<{
  		children: React.ReactNode;
	}>
){
  return (  	
    <html lang="en"> 
      <body className= {'antialiased'}>
        {children}
      </body>
    </html> 
 );
}
