import React from "react";
import {
  Card,
  CardContent,
} from "@/components/Ui/card";
import ProgressShower from "@/components/DashboardComponents/ProgressShower";
import { CustomersReportCard } from "@/components/DashboardComponents/CustomersReportCard";
import RecentInvoicesCard from "@/components/DashboardComponents/RecentCards/RecentInvoicesCard";
import RecentQuotesCard from "@/components/DashboardComponents/RecentCards/RecentQuotesCard";
import {ReportCard} from "@/components/ReportCard/ReportCard";

function page() {
  return (
    <div className="w-full grid md:grid-cols-4 md:grid-rows-9 lg:grid-rows-6 gap-4">
      <ReportCard
        title="Invoices"
        description="This Month"
        value="20.00"
        variant="new"
      />
      <ReportCard
        title="Proforma Invoices"
        description="This Month"
        value="00.00"
        variant="negotiation"
      />
      <ReportCard
        title="Offers"
        description="This Month"
        value="00.00"
        variant="success"
      />
      <ReportCard
        title="Unpaid"
        description="This Month"
        value="00.00"
        variant="danger"
      />
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
