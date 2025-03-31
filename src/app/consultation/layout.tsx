import { APP_TITLE } from "@/lib/constants";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import { Footer } from "../(landing)/_components/footer";
import { Header } from "../(landing)/_components/header";

export const metadata: Metadata = {
  title: `Consultation | ${APP_TITLE}`,
  description: "Schedule a consultation with Braun Goodson, Agentic Engineer",
};

function ConsultationLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <div className="h-20"></div>
      <Footer />
    </>
  );
}

export default ConsultationLayout; 