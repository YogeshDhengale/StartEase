import Heading from "@/components/Heading/Heading";
import { ReportCardWithCustomDate } from "@/components/ReportCard/ReportCard";
import ReportChart from "@/components/ReportsComponents/YearlyExpenseChart/YearlyExpenseChart";
import React from "react";

function page() {
  return (
    <>
      <Heading>Reports</Heading>
      <p className="text-sm text-muted-foreground">
        Browse through customized report
      </p>
      <div className="w-full grid md:grid-cols-4 md:grid-rows-6 lg:grid-rows-5 gap-4 mt-8">
        <ReportCardWithCustomDate
          title="Invoices"
          description="This Month"
          value="00.00"
          variant="new"
        />
        <ReportCardWithCustomDate
          title="Proforma Invoices"
          description="This Month"
          value="00.00"
          variant="negotiation"
        />
        <ReportCardWithCustomDate
          title="Offers"
          description="This Month"
          value="00.00"
          variant="success"
        />
        <ReportCardWithCustomDate
          title="Unpaid"
          description="This Month"
          value="00.00"
          variant="danger"
        />
        <ReportChart />
      </div>
    </>
  );
}

export default page;
