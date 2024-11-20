"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/DataTable/DataTable";
import ActionDropdown from "@/components/ActionDropdown/ActionDropdown";
import { DollarSign } from "lucide-react";

interface Payment {
  client: string;
  amount: string;
  date: string;
  number: string;
  year: string;
  paymentMode: "Credit Card" | "Bank Transfer" | "PayPal" | "Cash" | "UPI";
}

const data: Payment[] = [
  {
    client: "Tech Ventures",
    amount: "1500.00",
    date: "2024-11-15",
    number: "INV-1001",
    year: "2024",
    paymentMode: "Credit Card",
  },
  {
    client: "Green Solutions",
    amount: "2200.00",
    date: "2024-10-20",
    number: "INV-1002",
    year: "2024",
    paymentMode: "Bank Transfer",
  },
  {
    client: "Design Co.",
    amount: "1800.00",
    date: "2024-11-01",
    number: "INV-1003",
    year: "2024",
    paymentMode: "PayPal",
  },
  {
    client: "Global Traders",
    amount: "1700.00",
    date: "2024-10-25",
    number: "INV-1004",
    year: "2024",
    paymentMode: "Cash",
  },
  {
    client: "Bright Future Inc.",
    amount: "2500.00",
    date: "2024-11-10",
    number: "INV-1005",
    year: "2024",
    paymentMode: "UPI",
  },
];



function TableContainer() {
  const columns: ColumnDef<Payment>[] = [
    {
      id: "srNo",
      header: "Sr. No.",
      cell: ({ row }) => <span>{row.index + 1}</span>,
    },
    {
      accessorKey: "client",
      header: "Client",
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => (
        <span className="text-sm text-green-500 flex items-center gap-1">
          <DollarSign className="w-4 h-4" />
          {row.getValue("amount")}
        </span>
      ),
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "number",
      header: "Number",
    },
    {
      accessorKey: "year",
      header: "Year",
    },
    {
      accessorKey: "paymentMode",
      header: "Payment Mode",
    },
    {
      id: "actions",
      cell: () => (
        <ActionDropdown />
      ),
    },
  ];
  return (
    <DataTable columns={columns} data={data}  />
  );
}

export default TableContainer;
