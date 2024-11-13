import React from "react";
import { SidebarTrigger } from "../Ui/sidebar";
import { BrandHeader } from "../BrandHeader/BrandHeader";

function Navbar() {
  return (
    <nav className="flex-between-center fixed z-50 w-full bg-dark-1 px-4 py-4 md:py-2 border-b border-b-border bg-sidebar">
      <div>
        <div className="sm:hidden">
          <BrandHeader />
        </div>
      </div>
      <div className="flex-between-center gap-5">
        <SidebarTrigger className="-ml-1" />
      </div>
    </nav>
  );
}

export default Navbar;
