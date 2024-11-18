import Navbar from "@/components/Navbar/Navbar";
import AppSidebar from "@/components/Sidebar/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/Ui/sidebar";
import React, { ReactNode } from "react";

export async function generateStaticParams() {
  return [{ slug: [] }];
}

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Navbar />
      <AppSidebar />
      <SidebarInset className="w-[calc(100%-16rem)] px-6 pd-6 pt-[5.5rem] md:pt-20 md:pb-12 pb-10 max-md:pd-14 sm:px-10">
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

export default RootLayout;
