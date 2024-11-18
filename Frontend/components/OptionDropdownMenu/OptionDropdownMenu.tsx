import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../Ui/dropdown-menu";
import { Button } from "../Ui/button";
import { type LucideIcon } from "lucide-react";

function OptionDropdownMenu({
  Icon,
  options,
}: {
  Icon: LucideIcon;
  options: {
    title: string;
    onClick?: () => void;
    className?: string;
    icon: LucideIcon;
  }[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-7 w-7 dark:text-white">
          <Icon className="h-7 w-7 rotate-0 scale-100 transition-all" />
          <span className="sr-only">{}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {options.map((opt, idx) => (
          <DropdownMenuItem
            key={idx}
            onClick={opt.onClick}
            className={opt.className}
          >
            <opt.icon /> {opt.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default OptionDropdownMenu;
