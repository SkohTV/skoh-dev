import Header from "./_header";
import Footer from "./_footer";
import "@/styles/globals.css";

export default RootLayout;


function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white flex flex-col h-screen">
        <Header />
        <div className="p-5 flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
