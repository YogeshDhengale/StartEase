"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/DataTable/DataTable";
import ActionDropdown from "@/components/ActionDropdown/ActionDropdown";

interface ProductCategory {
  name: string;
  description: string;
  color: string;
  enabled: boolean;
}

const data: ProductCategory[] = [
  {
    name: "Electronics",
    description: "Devices and gadgets like phones, laptops, etc.",
    color: "#4CAF50", // Green
    enabled: true,
  },
  {
    name: "Fashion",
    description: "Clothing, accessories, and footwear.",
    color: "#FF9800", // Orange
    enabled: true,
  },
  {
    name: "Home Appliances",
    description: "Household electrical appliances.",
    color: "#2196F3", // Blue
    enabled: false,
  },
  {
    name: "Books",
    description: "Fiction, non-fiction, and academic books.",
    color: "#9C27B0", // Purple
    enabled: true,
  },
  {
    name: "Beauty Products",
    description: "Cosmetics, skincare, and personal care items.",
    color: "#E91E63", // Pink
    enabled: false,
  },
];

function TableContainer() {
  const columns: ColumnDef<ProductCategory>[] = [
    {
      id: "Sr. No.",
      header: "Sr. No.",
      cell: ({ row }) => <span>{row.index + 1}</span>,
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "color",
      header: "Color",
      cell: ({ row }) => (
        <span
          style={{
            display: "inline-block",
            backgroundColor: row.getValue("color") as string,
            width: "16px",
            height: "16px",
            borderRadius: "50%",
          }}
          title={row.getValue("color") as string}
        ></span>
      ),
    },
    {
      accessorKey: "enabled",
      header: "Enabled",
      cell: ({ row }) => (
        <span
          className={
            row.getValue("enabled")
              ? "text-green-600 font-bold"
              : "text-red-600 font-bold"
          }
        >
          {row.getValue("enabled") ? "Yes" : "No"}
        </span>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: () => <ActionDropdown />,
    },
  ];

  return (
    <DataTable columns={columns} data={data} addBtnTitle="Add New Client" />
  );
}

export default TableContainer;
