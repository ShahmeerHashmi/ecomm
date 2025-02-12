import "./globals.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CartProvider } from "./contexts/CartContext";
import ClientWrapper  from "../components/ClientWrapper";

export const metadata = {
  title: 'Hekto - Modern Furniture Store',
  description: 'Discover modern and trending furniture for your home',
  keywords: ['furniture', 'modern furniture', 'home decor', 'interior design'],
  authors: [{ name: 'Hekto' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClientWrapper>
      <html lang="en" className="scroll-smooth">
        <body className="min-h-screen flex flex-col">
          <Header />
          <Navbar />
          <main className="flex-grow">
            <CartProvider>
              {children}
            </CartProvider>
          </main>
          <Footer />
        </body>
      </html>
    </ClientWrapper>
  );
}