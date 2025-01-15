import { global_config } from "@/global-config";
import type { Metadata } from "next";
import "@/app/globals.css";

const subtitle = "Auth";

export const metadata: Metadata = {
  title: `${global_config.title_prefix} ${global_config.title_seprator} ${subtitle}`,
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