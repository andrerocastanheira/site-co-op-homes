import type { Metadata } from "next";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "MGL – Mendes Gomes | Concessionário Oficial na Madeira",
  description:
    "Concessionário multimarca e oficina autorizada em Funchal, Madeira. Toyota, Volvo, Fiat, Jeep e Abarth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
