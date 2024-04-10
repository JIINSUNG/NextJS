import { Metadata } from "next";
import Navigation from "../entities/navigation";
import "../styles/global.css";
import Footer from "../entities/footer/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
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
          <Footer />
        </>
      </body>
    </html>
  );
}
