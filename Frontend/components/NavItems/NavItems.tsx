"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SheetClose } from "../Ui/sheet";
import { sidebarLinks } from "@/constants/Urls";

function NavItems({ isFullScreen = false }: { isFullScreen?: boolean }) {
  const pathname = usePathname();
  const size = isFullScreen ? 24 : 20;
  const Wrapper = !isFullScreen ? SheetClose : "div";
  return (
    <div className="flex flex-1 flex-col gap-6 h-full overflow-y-auto pr-2">
      {sidebarLinks.map((link) => {
        const isActive =
          pathname === link.route || pathname.startsWith(`${link.route}/`);

        return (
          <Wrapper key={link.label} asChild>
            <Link
              href={link.route}
              className={cn("flex gap-4 items-center p-3 rounded-lg", {
                "bg-blue-1": isActive,
                "justify-start": isFullScreen,
                "w-full md:max-w-60": !isFullScreen,
              })}
            >
              <>
                <Image
                  src={link.imgUrl}
                  alt={link.label}
                  width={size}
                  height={size}
                />
                <p
                  className={cn({
                    "text-base text-black font-semibold max-lg:hidden":
                      isFullScreen,
                    "font-semibold": !isFullScreen,
                    "text-blue-700": isActive
                  })}
                >
                  {link.label}
                </p>
              </>
            </Link>
          </Wrapper>
        );
      })}
    </div>
  );
}

export default NavItems;
