import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/Ui/sheet";
import Image from "next/image";
import Link from "next/link";
import NavItems from "@/components/NavItems/NavItems";

function MobileNav() {
  return (
    <section className="w-full flex-center max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="menu"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={32}
              height={32}
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold">StartEase</p>
          </Link>
          <div className="flex h-full flex-col justify-between">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 py-8">
                <NavItems isFullScreen={false} />
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
