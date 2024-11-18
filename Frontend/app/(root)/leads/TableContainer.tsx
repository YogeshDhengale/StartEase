"use client";

import React from "react";
import { Badge, type badgeVariants } from "@/components/Ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/DataTable/DataTable";
import ActionDropdown from "@/components/ActionDropdown/ActionDropdown";

interface Lead {
  branch: string;
  type: string;
  name: string;
  status: string;
  source: string;
  country: string;
  phone: string;
  email: string;
}

const data: Lead[] = [
  {
    branch: "New York",
    type: "People",
    name: "John Doe",
    status: "New",
    source: "Linkedin",
    country: "USA",
    phone: "1234567890",
    email: "john.doe@email.com",
  },
  {
    branch: "London",
    type: "People",
    name: "Alice Johnson",
    status: "In Negotiation",
    source: "Social Media",
    country: "UK",
    phone: "4478901234",
    email: "alice.johnson@email.com",
  },
  {
    branch: "Paris",
    type: "Company",
    name: "Pierre Dupont",
    status: "Won",
    source: "Website",
    country: "France",
    phone: "3312345678",
    email: "pierre.dupont@email.com",
  },
  {
    branch: "Berlin",
    type: "Company",
    name: "Hans Muller",
    status: "Lost",
    source: "Advertising",
    country: "Germany",
    phone: "4930123456",
    email: "hans.muller@email.com",
  },
  {
    branch: "Toronto",
    type: "People",
    name: "Sophia Li",
    status: "Assigned",
    source: "Friend",
    country: "Canada",
    phone: "14165551234",
    email: "sophia.li@email.com",
  },
  {
    branch: "Sydney",
    type: "Company",
    name: "Michael Brown",
    status: "On Hold",
    source: "Professionals Network",
    country: "Australia",
    phone: "0261234567",
    email: "michael.brown@email.com",
  },
  {
    branch: "Tokyo",
    type: "People",
    name: "Yuki Tanaka",
    status: "Waiting",
    source: "Customer Referral",
    country: "Japan",
    phone: "8109012345678",
    email: "yuki.tanaka@email.jp",
  },
  {
    branch: "Dubai",
    type: "Company",
    name: "Aisha Mohammed",
    status: "Won",
    source: "Sales",
    country: "UAE",
    phone: "971501234567",
    email: "aisha.mohammed@email.ae",
  },
  {
    branch: "San Francisco",
    type: "People",
    name: "Carlos Rodriguez",
    status: "New",
    source: "Social Media",
    country: "USA",
    phone: "34612345678",
    email: "carlos.rodriguez@email.com",
  },
  {
    branch: "Mexico City",
    type: "Company",
    name: "Gabriela Ramirez",
    status: "In Negotiation",
    source: "Other",
    country: "Mexico",
    phone: "5255551234",
    email: "gabriela.ramirez@email.com",
  },
];


function TableContainer() {
  const columns: ColumnDef<Lead>[] = [
    {
      accessorKey: "branch",
      header: "Branch",
    },
    {
      accessorKey: "type",
      header: "Type",
    },
    {
      accessorKey: "name",
      header: "Name",
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
                "In Negotiation": "negotiation",
                Won: "success",
                Lost: "danger",
                New: "new",
                Assigned: "assigned",
                Waiting: "waiting",
                "On Hold": "hold"
              }[status] as keyof typeof badgeVariants
            }
          >
            {row.getValue("status")}
          </Badge>
        );
      },
    },
    {
      accessorKey: "source",
      header: "Source",
      cell: ({row}) => {
        const source = row.getValue("source") as string;
        return (
        <Badge
            variant={
              {
                Linkedin: "linkedin",
                "Social Media": "socialmedia",
                Website: "website",
                Advertising: "advertising",
                Assigned: "assigned",
                Friend: "friend",
                "Professionals Network": "networks",
                "Customer Referral": "referral",
                Sales: "sales",
                Other: "other"
              }[source] as keyof typeof badgeVariants
            }
          >
            {row.getValue("source")}
          </Badge>
      )}
    },
    {
      accessorKey: "country",
      header: "Country",
      cell: ({ row }) => (
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">IN</span>
          {row.getValue("country")}
        </div>
      ),
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "email",
      header: "Email",
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
