import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./providers.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UrbanIQ Explorer",
  description:
    "UrbanIQ Explorer: Your AI-driven guide to uncovering fascinating city destinations effortlessly!",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
