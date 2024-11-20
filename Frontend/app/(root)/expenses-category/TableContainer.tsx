"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/DataTable/DataTable";
import ActionDropdown from "@/components/ActionDropdown/ActionDropdown";

interface ExpenseCategory {
  name: string;
  description: string;
  color: string;
  enabled: boolean;
}

const data: ExpenseCategory[] = [
  {
    name: "Office Supplies",
    description: "Expenses for office stationery and supplies.",
    color: "#FF5733",
    enabled: true,
  },
  {
    name: "Travel",
    description: "Transportation and travel-related expenses.",
    color: "#33FF57",
    enabled: true,
  },
  {
    name: "Utilities",
    description: "Bills for electricity, water, and internet services.",
    color: "#3357FF",
    enabled: false,
  },
  {
    name: "Marketing",
    description: "Expenses related to advertising and promotions.",
    color: "#FF33A1",
    enabled: true,
  },
  {
    name: "Miscellaneous",
    description: "Uncategorized or one-time expenses.",
    color: "#A133FF",
    enabled: false,
  },
];

function TableContainer() {
  const columns: ColumnDef<ExpenseCategory>[] = [
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
      cell: () => (
        <ActionDropdown />
      ),
    },
  ];
  return (
    <DataTable columns={columns} data={data} addBtnTitle="Add New Client" />
  );
}

export default TableContainer;
