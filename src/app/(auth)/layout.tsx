import { globalConfig } from "@/global-config";
import type { Metadata } from "next";
import "@/app/globals.css";

const subtitle = "Auth";

export const metadata: Metadata = {
  title: `${globalConfig.titlePrefix} ${globalConfig.titleSeprator} ${subtitle}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        {children}
      </body>
    </html>
  );
}