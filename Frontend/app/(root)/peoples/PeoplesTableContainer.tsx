"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/DataTable/DataTable";
import ActionDropdown from "@/components/ActionDropdown/ActionDropdown";

type Contact = {
  Firstname: string;
  Lastname: string;
  Company: string;
  Country: string;
  Phone: string;
  Email: string;
};

const data: Contact[] = [
  {
    Firstname: "John",
    Lastname: "Doe",
    Company: "TechCorp",
    Country: "USA",
    Phone: "+1 555-123-4567",
    Email: "john.doe@techcorp.com",
  },
  {
    Firstname: "Jane",
    Lastname: "Smith",
    Company: "Innovate Ltd.",
    Country: "Canada",
    Phone: "+1 416-555-6789",
    Email: "jane.smith@innovateltd.com",
  },
  {
    Firstname: "Amit",
    Lastname: "Sharma",
    Company: "NextGen Solutions",
    Country: "India",
    Phone: "+91 9876543210",
    Email: "amit.sharma@nextgensolutions.in",
  },
  {
    Firstname: "Maria",
    Lastname: "Gonzalez",
    Company: "FutureTech",
    Country: "Spain",
    Phone: "+34 600-123-456",
    Email: "maria.gonzalez@futuretech.es",
  },
  {
    Firstname: "Liam",
    Lastname: "O'Connor",
    Company: "GlobalSoft",
    Country: "Ireland",
    Phone: "+353 86-123-4567",
    Email: "liam.oconnor@globalsoft.ie",
  },
  {
    Firstname: "Sophia",
    Lastname: "Wang",
    Company: "Skyline Ventures",
    Country: "China",
    Phone: "+86 138-1234-5678",
    Email: "sophia.wang@skylineventures.cn",
  },
  {
    Firstname: "Carlos",
    Lastname: "Silva",
    Company: "AlphaTech",
    Country: "Brazil",
    Phone: "+55 11-91234-5678",
    Email: "carlos.silva@alphatech.com.br",
  },
  {
    Firstname: "Emma",
    Lastname: "Brown",
    Company: "Pioneer Systems",
    Country: "Australia",
    Phone: "+61 412-345-678",
    Email: "emma.brown@pioneersystems.com.au",
  },
  {
    Firstname: "Yuki",
    Lastname: "Tanaka",
    Company: "ZenTech",
    Country: "Japan",
    Phone: "+81 80-1234-5678",
    Email: "yuki.tanaka@zentech.jp",
  },
  {
    Firstname: "Hans",
    Lastname: "Müller",
    Company: "Innovators GmbH",
    Country: "Germany",
    Phone: "+49 170-123-4567",
    Email: "hans.mueller@innovators.de",
  },
  {
    Firstname: "Chloe",
    Lastname: "Martin",
    Company: "BlueSky Enterprises",
    Country: "France",
    Phone: "+33 6-12-34-56-78",
    Email: "chloe.martin@bluesky.fr",
  },
  {
    Firstname: "Oluwaseun",
    Lastname: "Adebayo",
    Company: "BrightFuture Ltd.",
    Country: "Nigeria",
    Phone: "+234 803-123-4567",
    Email: "oluwaseun.adebayo@brightfuture.ng",
  },
  {
    Firstname: "Lara",
    Lastname: "Novak",
    Company: "CentralTech",
    Country: "Czech Republic",
    Phone: "+420 602-123-456",
    Email: "lara.novak@centraltech.cz",
  },
  {
    Firstname: "Ahmed",
    Lastname: "Ali",
    Company: "Visionary Solutions",
    Country: "UAE",
    Phone: "+971 50-123-4567",
    Email: "ahmed.ali@visionarysolutions.ae",
  },
  {
    Firstname: "Elena",
    Lastname: "Ivanova",
    Company: "TechBridge",
    Country: "Russia",
    Phone: "+7 916-123-4567",
    Email: "elena.ivanova@techbridge.ru",
  },
];

function PeoplesTableContainer() {
  const columns: ColumnDef<Contact>[] = [
    {
      accessorKey: "Firstname",
      header: "First Name",
    },
    {
      accessorKey: "Lastname",
      header: "Last Name",
    },
    {
      accessorKey: "Company",
      header: "Company",
    },
    {
      accessorKey: "Country",
      header: "Country",
      cell: ({ row }) => (
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">IN</span>
          {row.getValue("Country")}
        </div>
      )
    },
    {
      accessorKey: "Phone",
      header: "Phone",
    },
    {
      accessorKey: "Email",
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
    <DataTable addBtnTitle="Add New Person" data={data} columns={columns} />
  );
}

export default PeoplesTableContainer;
