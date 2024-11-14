import Navbar from "@/components/Navbar/Navbar";
import AppSidebar from "@/components/Sidebar/AppSidebar";
import { SidebarProvider } from "@/components/Ui/sidebar";
import React, { ReactNode } from "react";

export async function generateStaticParams() {
  return [{ slug: [] }];
}

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative">
      <SidebarProvider className="size-full">
      <Navbar />
      <div className="flex size-full">
        <AppSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pd-6 pt-[5.5rem] md:py-20 pb-10 max-md:pd-14 sm:px-10">
          <div className="w-full">{children}</div>
        </section>
      </div>
      </SidebarProvider>
    </main>
  );
}

export default RootLayout;
