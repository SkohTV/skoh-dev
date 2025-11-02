'use client';

import Header from "./_header";
import Footer from "./_footer";
import "@/styles/globals.css";



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <script src="/theme.js" blocking="render" />
      </head>
      <body className="dark:bg-zinc-900 bg-zinc-300 dark:text-white text-black flex flex-col h-screen text-sm">
        <Header />
        <div className="p-5 flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
