"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/DataTable/DataTable";
import ActionDropdown from "@/components/ActionDropdown/ActionDropdown";
import { DollarSign, IndianRupee } from "lucide-react";

interface Expense {
  name: string;
  category: string;
  currency: string;
  total: string;
  description: string;
  reference: string;
}

const data: Expense[] = [
  {
    name: "Office Supplies",
    category: "Stationery",
    currency: "USD",
    total: "120.50",
    description: "Purchased pens, notebooks, and markers.",
    reference: "EXP-101",
  },
  {
    name: "Client Dinner",
    category: "Meals & Entertainment",
    currency: "USD",
    total: "250.00",
    description: "Dinner with potential clients at a high-end restaurant.",
    reference: "EXP-102",
  },
  {
    name: "Travel Expense",
    category: "Transportation",
    currency: "USD",
    total: "350.75",
    description: "Flight ticket for the New York conference.",
    reference: "EXP-103",
  },
  {
    name: "Software License",
    category: "Subscriptions",
    currency: "USD",
    total: "99.99",
    description: "Monthly subscription for design software.",
    reference: "EXP-104",
  },
  {
    name: "Electricity Bill",
    category: "Utilities",
    currency: "USD",
    total: "180.00",
    description: "Office electricity charges for October.",
    reference: "EXP-105",
  },
];


function TableContainer() {
  const columns: ColumnDef<Expense>[] = [
    {
      id: "srNo",
      header: "Sr. No.",
      cell: ({ row }) => <span>{row.index + 1}</span>,
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "category",
      header: "Expense Category",
    },
    {
      accessorKey: "currency",
      header: "Currency",
    },
    {
      accessorKey: "total",
      header: "Total",
      cell: ({ row }) => (
        <strong className="text-green-500 text-sm flex items-center">
          {row.getValue("currency") === "USD" ? <DollarSign className="w-4 h-4" /> : <IndianRupee className="w-4 h-4" /> } {row.getValue("total")}
        </strong>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "reference",
      header: "Ref",
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
