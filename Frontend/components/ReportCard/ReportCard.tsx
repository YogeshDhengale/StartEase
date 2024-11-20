import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Ui/card";
import { DollarSign } from "lucide-react";
import { Badge, badgeVariants } from "../Ui/badge";
import { cn } from "@/lib/utils";

interface ReportCardProps {
  title: string;
  description: string;
  value?: string;
  variant?: keyof typeof badgeVariants;
  className?: string;
  children?: React.ReactNode;
}

const ReportCard = ({
  title,
  description,
  variant,
  className,
  value,
  children,
}: ReportCardProps) => {
  return (
    <Card className={cn("md:col-span-2 lg:col-span-1", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {value && (
          <Badge variant={variant} className="rounded-3xl p-2 text-sm">
            <DollarSign className="h-4 w-4" /> {value}
          </Badge>
        )}
      </CardHeader>
      {children && children}
    </Card>
  );
};

ReportCard.withContent = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) => {
  return (
    <ReportCard title={title} description={description}>
      <CardContent>{children}</CardContent>
    </ReportCard>
  );
};

export default ReportCard;
