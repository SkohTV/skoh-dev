import Header from "./_header";
import Footer from "./_footer";
import "@/styles/globals.css";

export default RootLayout;


function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
