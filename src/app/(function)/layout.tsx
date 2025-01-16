import { globalConfig } from "@/global-config";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: `${globalConfig.titlePrefix}`,
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
