import { Toaster } from "react-hot-toast";
import { Header } from "./Header";
import { Cart } from "./Cart";
import { Footer } from "./Footer";

export default function BodyContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white relative" data-scroll-section>
      <Toaster
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />

      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
