"use client";

import React, { useState } from "react";
import { Ellipsis, Eye, Pencil, Trash, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/Ui/alert-dialog";
import { Button } from "@/components/Ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/Ui/sheet";
import OptionDropdownMenu from "../OptionDropdownMenu/OptionDropdownMenu";
import { Separator } from "../Ui/separator";

type ActionDropdownProps = {
  onShow?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  title?: string;
  sheetDescription?: string;
  itemName?: string;
  sheetContent?: React.ReactNode
};

export default function ActionDropdown({
  onShow,
  onEdit,
  onDelete,
  title,
  sheetDescription,
  itemName,
  sheetContent
}: ActionDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  

  return (
    <>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <OptionDropdownMenu
          Icon={Ellipsis}
          options={[
            {
              title: "Show",
              icon: Eye,
              onClick: () => {
                setIsShow(true);
                if (onShow) onShow();
              },
            },
            {
              title: "Edit",
              icon: Pencil,
              onClick: onEdit,
            },
            {
              title: "Delete",
              icon: Trash,
              className:
                "text-destructive focus:bg-destructive focus:text-white",
              onClick: () => setIsOpen(true),
            },
          ]}
        />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                variant="destructive"
                onClick={() => {
                  if (onDelete) onDelete();
                  setIsOpen(false);
                }}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:bg-destructive/90"
              >
                Delete
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Sheet open={isShow} onOpenChange={ setIsShow }>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-purple-900">{title}</SheetTitle>
            {sheetDescription && <SheetDescription>
              {/* Make changes to your profile here. Click save when done. */}
              {sheetDescription}
            </SheetDescription>}
          </SheetHeader>
          <Separator className="my-4" orientation="horizontal" />
          <div className="space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{itemName}</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid gap-4">
                  {sheetContent}
              </div>
            </div>
          <SheetFooter>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
