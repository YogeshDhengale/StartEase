import ProgressShower from "@/components/DashboardComponents/ProgressShower";
import { Badge } from "@/components/Ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Ui/card";
import { DollarSign } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="w-full grid md:grid-cols-4 md:grid-rows-9 lg:grid-rows-6 gap-4">
      <Card className="md:col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardDescription>This Month</CardDescription>
          <Badge
            variant="outline"
            className="rounded-3xl border-blue-2 text-blue-2 bg-blue-1 p-2 text-sm"
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
            variant="outline"
            className="rounded-3xl border-purple-1 text-purple-1 bg-purple-3 p-2 text-sm"
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
            variant="outline"
            className="rounded-3xl border-teal-600 text-teal-900 bg-teal-100 p-2 text-sm"
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
            variant="outline"
            className="rounded-3xl border-rose-600 text-rose-900 bg-rose-100 p-2 text-sm"
          >
            <DollarSign className="h-4 w-4 text-rose-900" /> 00.00
          </Badge>
        </CardHeader>
      </Card>
      <Card className="md:col-span-4 lg:col-span-3 md:row-span-3">
        <CardContent className="size-full pt-6">
          <div className="grid size-full gap-4 grid-cols-3">
            <ProgressShower />
            <ProgressShower />
            <ProgressShower />
          </div>
        </CardContent>
      </Card>
      <Card className="md:row-span-4 md:col-span-2 lg:row-span-3 lg:col-span-1">
        <CardHeader>
          <CardTitle>Customers</CardTitle>
          <CardDescription>This Month</CardDescription>
        </CardHeader>
      </Card>
      <Card className="md:col-span-2 md:row-span-2">
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
          <CardDescription>This Month</CardDescription>
        </CardHeader>
      </Card>
      <Card className="md:col-span-2 md:row-span-2">
        <CardHeader>
          <CardTitle>Recent Quotes</CardTitle>
          <CardDescription>This Month</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default page;
