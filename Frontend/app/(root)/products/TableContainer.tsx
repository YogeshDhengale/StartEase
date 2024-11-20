"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/DataTable/DataTable";
import ActionDropdown from "@/components/ActionDropdown/ActionDropdown";
import { DollarSign } from "lucide-react";

interface Product {
  name: string;
  category: string;
  currency: string;
  price: string;
  description: string;
  ref: string;
}

const data: Product[] = [
  {
    name: "Wireless Keyboard",
    category: "Electronics",
    currency: "USD",
    price: "49.99",
    description: "A sleek and modern wireless keyboard.",
    ref: "WK-10234",
  },
  {
    name: "Office Chair",
    category: "Furniture",
    currency: "USD",
    price: "199.99",
    description: "Ergonomic chair for comfortable office work.",
    ref: "OC-56321",
  },
  {
    name: "Notebook",
    category: "Stationery",
    currency: "INR",
    price: "120.00",
    description: "A ruled notebook for note-taking and journaling.",
    ref: "NB-78945",
  },
  {
    name: "Coffee Mug",
    category: "Kitchenware",
    currency: "GBP",
    price: "12.50",
    description: "Ceramic mug with a matte finish.",
    ref: "CM-32456",
  },
  {
    name: "Bluetooth Speaker",
    category: "Electronics",
    currency: "EUR",
    price: "79.99",
    description: "Compact and portable speaker with great sound.",
    ref: "BS-65789",
  },
];


function TableContainer() {
  const columns: ColumnDef<Product>[] = [
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
      accessorKey: "category",
      header: "Product Category",
    },
    {
      accessorKey: "currency",
      header: "Currency",
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => (
        <span className="text-sm flex items-center gap-1">
          <DollarSign />
          {row.getValue("price")}
        </span>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "ref",
      header: "Ref",
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
