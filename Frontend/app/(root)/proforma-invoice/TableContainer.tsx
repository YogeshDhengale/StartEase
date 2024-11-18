"use client";

import React from "react";
import { Badge } from "@/components/Ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/DataTable/DataTable";
import ActionDropdown from "@/components/ActionDropdown/ActionDropdown";

interface Client {
  type: string;
  name: string;
  country: string;
  phone: string;
  email: string;
}

const data: Client[] = [
  {
    type: "People",
    name: "Yo D",
    country: "India",
    phone: "8626038497",
    email: "acd@eamil.com",
  },
  {
    type: "People",
    name: "Abhi Dhengale",
    country: "India",
    phone: "8626038497",
    email: "abc@email.com",
  },
  {
    type: "Company",
    name: "Tech Solutions",
    country: "USA",
    phone: "1234567890",
    email: "info@techsolutions.com",
  },
  {
    type: "People",
    name: "Emma Watson",
    country: "UK",
    phone: "4478901234",
    email: "emma@example.com",
  },
  {
    type: "Company",
    name: "Global Innovations",
    country: "Germany",
    phone: "4987654321",
    email: "contact@globalinno.de",
  },
  {
    type: "People",
    name: "Raj Patel",
    country: "India",
    phone: "9876543210",
    email: "raj.patel@gmail.com",
  },
  {
    type: "Company",
    name: "Green Energy Co",
    country: "Canada",
    phone: "6135557890",
    email: "info@greenenergy.ca",
  },
  {
    type: "People",
    name: "Sophie Chen",
    country: "China",
    phone: "13800138000",
    email: "sophie.chen@qq.com",
  },
  {
    type: "Company",
    name: "Aussie Exports",
    country: "Australia",
    phone: "0261234567",
    email: "sales@aussieexports.com.au",
  },
  {
    type: "People",
    name: "Carlos Rodriguez",
    country: "Spain",
    phone: "34612345678",
    email: "carlos@example.es",
  },
  {
    type: "Company",
    name: "Nordic Design",
    country: "Sweden",
    phone: "468765432",
    email: "info@nordicdesign.se",
  },
  {
    type: "People",
    name: "Aisha Mohammed",
    country: "UAE",
    phone: "971501234567",
    email: "aisha.m@email.ae",
  },
  {
    type: "Company",
    name: "Brazilian Motors",
    country: "Brazil",
    phone: "5511987654321",
    email: "contato@brazilianmotors.br",
  },
  {
    type: "People",
    name: "Yuki Tanaka",
    country: "Japan",
    phone: "8109012345678",
    email: "yuki.tanaka@email.jp",
  },
  {
    type: "Company",
    name: "African Safaris",
    country: "Kenya",
    phone: "254712345678",
    email: "bookings@africansafaris.ke",
  },
];

function TableContainer() {
  const columns: ColumnDef<Client>[] = [
    {
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => (
        <Badge
          variant="secondary"
          className="bg-pink-100 text-pink-500 hover:bg-pink-100"
        >
          {row.getValue("type")}
        </Badge>
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
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
