"use client";

import React from "react";
import { Badge, badgeVariants } from "@/components/Ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/DataTable/DataTable";
import ActionDropdown from "@/components/ActionDropdown/ActionDropdown";
import { DollarSign } from "lucide-react";

interface Offer {
  company: string;
  date: string;
  subTotal: string;
  total: string;
  note: string;
  status: "draft" | "pending" | "sent" | "accepted" | "declined";
}

const data: Offer[] = [
  {
    company: "Tech Solutions",
    date: "2024-11-01",
    subTotal: "1500.00",
    total: "1650.00",
    note: "Payment within 30 days.",
    status: "pending",
  },
  {
    company: "Global Innovations",
    date: "2024-10-25",
    subTotal: "1200.00",
    total: "1300.00",
    note: "Includes additional fees.",
    status: "accepted",
  },
  {
    company: "Green Energy Co",
    date: "2024-10-20",
    subTotal: "2000.00",
    total: "2200.00",
    note: "Special discount applied.",
    status: "sent",
  },
  {
    company: "Nordic Design",
    date: "2024-11-05",
    subTotal: "1800.00",
    total: "1900.00",
    note: "Urgent delivery required.",
    status: "draft",
  },
  {
    company: "Brazilian Motors",
    date: "2024-11-10",
    subTotal: "2500.00",
    total: "2750.00",
    note: "Custom order fees included.",
    status: "declined",
  },
];

function TableContainer() {
  const columns: ColumnDef<Offer>[] = [
    {
      id: "Sr. No.",
      header: "Sr. No.",
      cell: ({row}) => <span>{row.index + 1}</span> 
    },
    {
      accessorKey: "company",
      header: "Company",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "subTotal",
      header: "Sub Total",
      cell: ({ row }) => (
        <span className="text-sm flex items-center gap-1 [&>svg]:size-4 [&>svg]:shrink-0"><DollarSign /> {row.getValue("subTotal")}</span>
      ),
    },
    {
      accessorKey: "total",
      header: "Total",
      cell: ({ row }) => (
        <strong  className="text-green-500 flex items-center [&>svg]:size-4 [&>svg]:shrink-0"><DollarSign /> {row.getValue("total")}</strong>
      ),
    },
    {
      accessorKey: "note",
      header: "Note",
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
      cell: () => <ActionDropdown />,
    },
  ];

  return (
    <DataTable columns={columns} data={data} addBtnTitle="Add New Offer" />
  );
}

export default TableContainer;
