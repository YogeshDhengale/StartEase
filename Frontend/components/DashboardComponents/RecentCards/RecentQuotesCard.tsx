import React from "react";
import RecentCard from "./RecentCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Ui/table";
import { Badge, badgeVariants } from "@/components/Ui/badge";
import { Ellipsis, Eye, FileText, Pencil } from "lucide-react";
import OptionDropdownMenu from "@/components/OptionDropdownMenu/OptionDropdownMenu";

const data = [
  { client: "Yo d", total: 12000, status: "Pending" },
  { client: "Yogesh d", total: 12000, status: "Sent" },
  { client: "Abhi d", total: 12000, status: "Pending" },
];

function RecentQuotesCard() {
  return (
    <RecentCard
      title="Recent Quotes"
      description="A list of your recent quotes."
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sr. No.</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((cl, idx) => (
            <TableRow key={idx}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{cl.client}</TableCell>
              <TableCell>$ {cl.total}</TableCell>
              <TableCell>
              <Badge
                  variant={
                    ({
                      Pending: "waiting",
                      Sent: "success",
                    }[cl.status] || "outline") as keyof typeof badgeVariants
                  }
                >
                  {cl.status}
                </Badge>
              </TableCell>
              <TableCell>
                <OptionDropdownMenu
                  Icon={Ellipsis}
                  options={[
                    {
                      title: "Show",
                      icon: Eye,
                    },
                    {
                      title: "Edit",
                      icon: Pencil,
                    },
                    {
                      title: "Download",
                      icon: FileText,
                    },
                  ]}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </RecentCard>
  );
}

export default RecentQuotesCard;
