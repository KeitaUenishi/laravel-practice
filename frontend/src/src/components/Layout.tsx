import { Header } from "@/components/Header";
import { ReactNode } from "react";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <main className="min-h-screen max-w-[700px]">{children}</main>
      <Footer />
    </div>
  );
};
