import React from "react";
import { SidebarTrigger } from "../Ui/sidebar";
import { BrandHeader } from "../BrandHeader/BrandHeader";
import { ModeToggle } from "../ThemeProvider/ModeToggle";
import { Separator } from "../Ui/separator";

function Navbar() {
  return (
    <nav className="flex-between-center fixed z-[1] w-full bg-dark-1 px-4 py-4 md:py-2 border-b border-b-border bg-sidebar">
      <div>
        <div className="sm:hidden">
          <BrandHeader />
        </div>
      </div>
      <div className="flex-between-center gap-1">
        <SidebarTrigger className="ml-1" />
        <Separator orientation="vertical" className="h-7" />
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
