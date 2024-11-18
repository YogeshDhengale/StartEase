"use client";

import React from "react";
import { Badge, badgeVariants } from "@/components/Ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/DataTable/DataTable";
import ActionDropdown from "@/components/ActionDropdown/ActionDropdown";

interface Invoice {
  client: string;
  date: string;
  expiredDate: string;
  total: string;
  paid: string;
  status: "Draft" | "Pending" | "Sent";
  payment: "Partially" | "Unpaid" | "Paid";
  createdBy: string;
}

const data: Invoice[] = [
  {
    client: "Yo D",
    date: "2024-11-01",
    expiredDate: "2024-11-15",
    total: "$1,200",
    paid: "$800",
    status: "Pending",
    payment: "Partially",
    createdBy: "Admin",
  },
  {
    client: "Abhi Dhengale",
    date: "2024-10-25",
    expiredDate: "2024-11-10",
    total: "$3,500",
    paid: "$3,500",
    status: "Sent",
    payment: "Paid",
    createdBy: "Admin",
  },
  {
    client: "Tech Solutions",
    date: "2024-11-05",
    expiredDate: "2024-11-20",
    total: "$5,000",
    paid: "$0",
    status: "Draft",
    payment: "Unpaid",
    createdBy: "Manager",
  },
  {
    client: "Emma Watson",
    date: "2024-10-20",
    expiredDate: "2024-11-05",
    total: "$750",
    paid: "$300",
    status: "Pending",
    payment: "Partially",
    createdBy: "User",
  },
  {
    client: "Global Innovations",
    date: "2024-11-10",
    expiredDate: "2024-11-25",
    total: "$2,100",
    paid: "$2,100",
    status: "Sent",
    payment: "Paid",
    createdBy: "Admin",
  },
];

function TableContainer() {
  const columns: ColumnDef<Invoice>[] = [
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
      accessorKey: "total",
      header: "Total",
    },
    {
      accessorKey: "paid",
      header: "Paid",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge
            variant={
              {
                Draft: "outline",
                Pending: "people",
                Sent: "waiting",
              }[status] as keyof typeof badgeVariants
            }
          >
            {status}
          </Badge>
        );
      },
    },
    {
      accessorKey: "payment",
      header: "Payment",
      cell: ({ row }) => {
        const payment = row.getValue("payment") as string;
        return (
          <Badge
            variant={
              {
                Partially: "negotiation",
                Unpaid: "danger",
                Paid: "success",
              }[payment] as keyof typeof badgeVariants
            }
          >
            {payment}
          </Badge>
        );
      },
    },
    {
      accessorKey: "createdBy",
      header: "Created By",
    },
    {
      id: "actions",
      cell: () => <ActionDropdown />,
    },
  ];
  return (
    <DataTable columns={columns} data={data} addBtnTitle="Add New Client" />
  );
}

export default TableContainer;
