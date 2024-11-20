"use client";

import React from "react";
import { Badge, badgeVariants } from "@/components/Ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { DollarSign } from "lucide-react";
import DataTable from "@/components/DataTable/DataTable";
import ActionDropdown from "@/components/ActionDropdown/ActionDropdown";

interface Invoice {
  client: string;
  date: string;
  expiredDate: string;
  subTotal: string;
  total: string;
  status: "draft" | "pending" | "approved" | "declined" | string;
}

const data: Invoice[] = [
  {
    client: "Tech Ventures",
    date: "2024-11-01",
    expiredDate: "2024-12-01",
    subTotal: "1500.00",
    total: "1650.00",
    status: "pending",
  },
  {
    client: "Green Solutions",
    date: "2024-10-15",
    expiredDate: "2024-11-15",
    subTotal: "2200.00",
    total: "2400.00",
    status: "approved",
  },
  {
    client: "Design Co.",
    date: "2024-11-05",
    expiredDate: "2024-12-05",
    subTotal: "1800.00",
    total: "2000.00",
    status: "draft",
  },
  {
    client: "Global Traders",
    date: "2024-10-25",
    expiredDate: "2024-11-25",
    subTotal: "1700.00",
    total: "1850.00",
    status: "declined",
  },
  {
    client: "Bright Future Inc.",
    date: "2024-11-10",
    expiredDate: "2024-12-10",
    subTotal: "2500.00",
    total: "2750.00",
    status: "pending",
  },
];

function TableContainer() {
  const columns: ColumnDef<Invoice>[] = [
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
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "expiredDate",
      header: "Expired Date",
    },
    {
      accessorKey: "subTotal",
      header: "Sub Total",
      cell: ({ row }) => (
        <span className="text-sm flex items-center gap-1">
          <DollarSign className="w-4 h-4" />
          {row.getValue("subTotal")}
        </span>
      ),
    },
    {
      accessorKey: "total",
      header: "Total",
      cell: ({ row }) => (
        <strong className="text-green-500 flex items-center">
          <DollarSign className="w-4 h-4" />
          {row.getValue("total")}
        </strong>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge
            variant={{
              draft: "outline",
              pending: "people",
              sent: "waiting",
              accepted: "success",
              declined: "danger"
            }[status] as keyof typeof badgeVariants}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        );
      },
    },
    {
      id: "actions",
      cell: () => (
        <ActionDropdown />
      ),
    },
  ];
  return (
    <DataTable columns={columns} data={data} addBtnTitle="Add New Proforma Invoice" />
  );
}

export default TableContainer;
