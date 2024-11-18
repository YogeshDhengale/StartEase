"use client";

import React, { useState } from "react";
import { Ellipsis, Eye, Pencil, Trash } from "lucide-react";
import OptionDropdownMenu from "../OptionDropdownMenu/OptionDropdownMenu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../Ui/alert-dialog";
import { Button } from "../Ui/button";

type ActionDropdownProps = {
  onShow?: () => void; // Optional callback for "Show" action
  onEdit?: () => void; // Optional callback for "Edit" action
  onDelete?: () => void; // Optional callback for "Delete" action
};

function ActionDropdown({ onShow, onEdit, onDelete }: ActionDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <OptionDropdownMenu
        Icon={Ellipsis}
        options={[
          {
            title: "Show",
            icon: Eye,
            onClick: onShow,
          },
          {
            title: "Edit",
            icon: Pencil,
            onClick: onEdit,
          },
          {
            title: "Delete",
            icon: Trash,
            className: "text-destructive focus:bg-destructive focus:text-white",
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
          <AlertDialogAction asChild onClick={onDelete}>
            <Button
              variant="destructive"
              onClick={onDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:bg-destructive/90"
            >
              Delete
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ActionDropdown;
