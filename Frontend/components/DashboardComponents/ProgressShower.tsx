import React from "react";
import { Progress } from "../Ui/progress";

function ProgressShower() {
  return (
    <div className="flex flex-col gap-4">
      <h6 className="font-bold leading-none tracking-tight">
        Invoices
      </h6>
      <div className="flex flex-col h-full gap-2">
        {[
          { title: "Draft", value: 0 },
          { title: "Pending", value: 60 },
          { title: "Unpaid", value: 0 },
          { title: "Overdue", value: 0 },
          { title: "Partially", value: 0 },
          { title: "Paid", value: 100 },
        ].map((e) => (
          <ProgressByEle key={e.title} {...e} />
        ))}
      </div>
    </div>
  );
}

function ProgressByEle({ title, value }: { title: string; value: number }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between gap-4">
        <p className="font-normal text-sm leading-none tracking-tight">{title}</p>
        <p className="leading-none tracking-tight">{value}%</p>
      </div>
      <Progress value={value} />
    </div>
  );
}

export default ProgressShower;
