"use client";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/Ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/Ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navMenu } from "@/constants/Urls";

export function NavMain() {
    const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {navMenu.map((item) => {
            const isActive =
            pathname === item.url || pathname.startsWith(`${item.url}/`);
            return (
                !item.items?.length ? <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link href={item.url} className={cn({"bg-blue-1": isActive})}>
                {item.icon && <item.icon color={isActive ? "#1640d6" : undefined}/>}
                <span className={cn("text-sm font-bold", {
                    "text-blue-2": isActive
                })}>{item.title}</span>
              </Link>
            </SidebarMenuButton>
            </SidebarMenuItem> :
          <Collapsible
            key={item.title}
            asChild
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon color={isActive ? "#1640d6" : undefined} />}
                  <span className={cn("text-sm font-bold", {
                    "text-blue-2": isActive
                })}>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
            )
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
