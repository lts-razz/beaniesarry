import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Beaniesarry",
  description: "A website dedicated for Beanie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <main className="m-0 p-0 overflow-x-hidden" >{children}
        </main>
      </body>
    </html>
  );
}
