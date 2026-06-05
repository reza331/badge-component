import type { Metadata } from "next";
import "../styles/globals.css";


export const metadata: Metadata = {
  title: "Badge",
  description: "Badge components inspired by shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
