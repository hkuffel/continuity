import "@/styles/globals.css";
import { Lora } from "next/font/google";

interface RootLayoutProps {
  children: React.ReactNode;
}

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" className={lora.className} suppressHydrationWarning>
        <head />
        <body className={"min-h-screen font-sans antialiased"}>
          <div className="px-2">{children}</div>
        </body>
      </html>
    </>
  );
}
