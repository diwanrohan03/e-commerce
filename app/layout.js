import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { CartProvider } from "./context/CartContext";

export const metadata = {
  title: "ShopEasy - Next.js E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
