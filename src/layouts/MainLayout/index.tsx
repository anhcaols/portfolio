import { ReactNode } from "react";
import Header from "@/layouts/MainLayout/Header";
import Footer from "@/layouts/MainLayout/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  const { children } = props;
  return (
    <div className="h-full w-full bg-dark overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
