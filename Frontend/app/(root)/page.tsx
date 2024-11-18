import React from "react";
import { Badge } from "@/components/Ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Ui/card";
import { DollarSign } from "lucide-react";
import ProgressShower from "@/components/DashboardComponents/ProgressShower";
import { CustomersReportCard } from "@/components/DashboardComponents/CustomersReportCard";
import RecentInvoicesCard from "@/components/DashboardComponents/RecentCards/RecentInvoicesCard";
import RecentQuotesCard from "@/components/DashboardComponents/RecentCards/RecentQuotesCard";

function page() {
  return (
    <div className="w-full grid md:grid-cols-4 md:grid-rows-9 lg:grid-rows-6 gap-4">
      <Card className="md:col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardDescription>This Month</CardDescription>
          <Badge
            variant="new"
            className="rounded-3xl p-2 text-sm"
          >
            <DollarSign className="h-4 w-4 text-blue-2" /> 20.00
          </Badge>
        </CardHeader>
      </Card>
      <Card className="md:col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle>Proforma Invoices</CardTitle>
          <CardDescription>This Month</CardDescription>
          <Badge
            variant="negotiation"
            className="rounded-3xl p-2 text-sm"
          >
            <DollarSign className="h-4 w-4 text-purple-1" /> 00.00
          </Badge>
        </CardHeader>
      </Card>
      <Card className="md:col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle>Offers</CardTitle>
          <CardDescription>This Month</CardDescription>
          <Badge
            variant="success"
            className="rounded-3xl p-2 text-sm"
          >
            <DollarSign className="h-4 w-4 text-teal-900" /> 00.00
          </Badge>
        </CardHeader>
      </Card>
      <Card className="md:col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle>Unpaid</CardTitle>
          <CardDescription>This Month</CardDescription>
          <Badge
            variant="danger"
            className="rounded-3xl p-2 text-sm"
          >
            <DollarSign className="h-4 w-4 text-rose-900" /> 00.00
          </Badge>
        </CardHeader>
      </Card>
      <Card className="md:col-span-4 lg:col-span-3 md:row-span-3">
        <CardContent className="size-full pt-6">
          <div className="grid size-full gap-6 sm:grid-cols-3">
            <ProgressShower />
            <ProgressShower />
            <ProgressShower />
          </div>
        </CardContent>
      </Card>
      <CustomersReportCard />
      <RecentInvoicesCard />
      <RecentQuotesCard />
    </div>
  );
}

export default page;
