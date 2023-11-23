import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/styledRegistry";
import RuterSetup from "../lib/RuterSetup";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RuterSetup>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </RuterSetup>
      </body>
    </html>
  );
}
