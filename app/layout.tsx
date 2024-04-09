import { Metadata } from "next";
import Navigation from "../entities/Navigation";

export const metadata: Metadata = {
  title: "Next.js 시작하기!",
  description: "처음 만나는 Next.js",
  icons: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <>
          <Navigation />
          {children}
        </>
      </body>
    </html>
  );
}
