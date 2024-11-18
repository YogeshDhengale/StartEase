"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/DataTable/DataTable";
import ActionDropdown from "@/components/ActionDropdown/ActionDropdown";

// Define the type for the company data
type Company = {
  name: string;
  contact: string;
  country: string;
  phone: string;
  email: string;
  website: string;
};


const data: Company[] = [
  {
    name: "Tech Innovators",
    contact: "John Doe",
    country: "USA",
    phone: "+1 (555) 123-4567",
    email: "contact@techinnovators.com",
    website: "https://www.techinnovators.com",
  },
  {
    name: "Creative Solutions",
    contact: "Jane Smith",
    country: "Canada",
    phone: "+1 (555) 234-5678",
    email: "info@creativesolutions.ca",
    website: "https://www.creativesolutions.ca",
  },
  {
    name: "Global Enterprises",
    contact: "David Lee",
    country: "UK",
    phone: "+44 20 7946 0958",
    email: "support@globalenterprises.co.uk",
    website: "https://www.globalenterprises.co.uk",
  },
  {
    name: "Design Experts",
    contact: "Sarah White",
    country: "Australia",
    phone: "+61 2 9876 5432",
    email: "hello@designexperts.au",
    website: "https://www.designexperts.au",
  },
  {
    name: "Future Tech",
    contact: "Michael Brown",
    country: "Germany",
    phone: "+49 30 1234 5678",
    email: "contact@futuretech.de",
    website: "https://www.futuretech.de",
  },
  {
    name: "Innovation Hub",
    contact: "Alice Green",
    country: "India",
    phone: "+91 11 2345 6789",
    email: "support@innovationhub.in",
    website: "https://www.innovationhub.in",
  },
  {
    name: "Eco Solutions",
    contact: "James Black",
    country: "New Zealand",
    phone: "+64 3 789 1234",
    email: "info@ecosolutions.nz",
    website: "https://www.ecosolutions.nz",
  },
  {
    name: "Media Experts",
    contact: "Emma Grey",
    country: "South Africa",
    phone: "+27 21 123 4567",
    email: "contact@mediaexperts.co.za",
    website: "https://www.mediaexperts.co.za",
  },
  {
    name: "Tech Mavericks",
    contact: "George Harris",
    country: "USA",
    phone: "+1 (555) 567-8901",
    email: "support@techmavericks.com",
    website: "https://www.techmavericks.com",
  },
  {
    name: "Bright Future",
    contact: "Lily Roberts",
    country: "Canada",
    phone: "+1 (555) 678-9012",
    email: "hello@brightfuture.ca",
    website: "https://www.brightfuture.ca",
  },
  {
    name: "Global Solutions",
    contact: "Oliver Johnson",
    country: "UK",
    phone: "+44 20 9876 5432",
    email: "support@globalsolutions.co.uk",
    website: "https://www.globalsolutions.co.uk",
  },
  {
    name: "NextGen Systems",
    contact: "Sophia Williams",
    country: "Australia",
    phone: "+61 3 4567 8901",
    email: "contact@nextgensystems.au",
    website: "https://www.nextgensystems.au",
  },
  {
    name: "Creative Minds",
    contact: "Ethan Moore",
    country: "Germany",
    phone: "+49 40 1234 5678",
    email: "info@creativeminds.de",
    website: "https://www.creativeminds.de",
  },
  {
    name: "Digital Pros",
    contact: "Oliver Wilson",
    country: "India",
    phone: "+91 44 2345 6789",
    email: "contact@digitalpros.in",
    website: "https://www.digitalpros.in",
  },
  {
    name: "Tech Vision",
    contact: "Charlotte Adams",
    country: "New Zealand",
    phone: "+64 9 2345 6789",
    email: "hello@techvision.nz",
    website: "https://www.techvision.nz",
  },
  {
    name: "EcoTech",
    contact: "William King",
    country: "South Africa",
    phone: "+27 10 567 8901",
    email: "info@ecotech.co.za",
    website: "https://www.ecotech.co.za",
  },
];

function TableContainer() {
  const columns: ColumnDef<Company>[] = [
    {
      accessorKey: "name",
      header: "Company Name",
    },
    {
      accessorKey: "contact",
      header: "Contact Person",
    },
    {
      accessorKey: "country",
      header: "Country",
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
      accessorKey: "website",
      header: "Website",
      cell: ({ row }) => (
        <a href={row.getValue("website")} target="_blank" rel="noopener noreferrer">
          {row.getValue("website")}
        </a>
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
    <DataTable columns={columns} data={data} addBtnTitle="Add New Company" />
  );
}

export default TableContainer;
