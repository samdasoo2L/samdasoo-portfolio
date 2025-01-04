import "./globals.css";
import Bara from "./components/bar";

export const metadata = {
  title: "삼다수의 포트폴리오",
  description: "웹 개발자 삼다수의 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`overflow-scroll [&::-webkit-scrollbar]:hidden`}>
        <Bara />
        <div>{children}</div>
      </body>
    </html>
  );
}
