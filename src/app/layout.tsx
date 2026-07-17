import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MeterEngine — 사용량 기반 빌링 플랫폼",
  description:
    "MeterEngine은 사용량 이벤트를 수집해 미터링·집계하고, 가격 정책을 적용해 인보이스를 만듭니다. 결제와 전자증빙까지 하나의 파이프라인으로 이어집니다.",
  openGraph: {
    title: "MeterEngine — 사용량 기반 빌링 플랫폼",
    description:
      "사용량 이벤트만 보내면, 미터링부터 인보이스까지. 결제와 전자증빙까지 하나의 파이프라인으로.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body className="min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
