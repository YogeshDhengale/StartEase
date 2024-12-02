"use client"

import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Ui/card"
import { DollarSign } from 'lucide-react'
import { Badge, badgeVariants } from "@/components/Ui/badge"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Ui/select"
import { Separator } from "@/components/Ui/separator"

interface ReportCardProps {
  title: string
  description: string
  value?: string
  variant?: string
  className?: string
  children?: React.ReactNode
}

export function  ReportCard({
  title,
  description,
  variant,
  className,
  value,
  children,
}: ReportCardProps) {
  return (
    <Card className={cn("md:col-span-2 lg:col-span-1", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {value && (
          <Badge
            variant={variant as keyof typeof badgeVariants}
            className="rounded-3xl p-2 text-sm"
          >
            <DollarSign className="h-4 w-4" /> {value}
          </Badge>
        )}
      </CardHeader>
      {children && children}
    </Card>
  )
}

interface ReportCardWithContentProps extends ReportCardProps {
  contentClass?: string
}

export function ReportCardWithContent({
  title,
  description,
  children,
  contentClass,
  ...props
}: ReportCardWithContentProps) {
  return (
    <ReportCard title={title} description={description} {...props}>
      <CardContent className={contentClass}>{children}</CardContent>
    </ReportCard>
  )
}

interface ReportCardWithCustomDateProps {
  title: string
  description: string
  value: string
  variant: string
  onDateChange?: (value: string) => void
}

export function ReportCardWithCustomDate({
  title,
  description,
  onDateChange,
  value,
  variant,
}: ReportCardWithCustomDateProps) {
  const [selected, setSelected] = useState("thisMonth")

  const handleChange = (value: string) => {
    if (onDateChange) {
      onDateChange(value);
    }
    setSelected(value);
  }

  return (
    <ReportCardWithContent
      title={title}
      description={description}
      contentClass="flex items-center gap-2"
    >
       <Select value={selected} onValueChange={handleChange} >
        <SelectTrigger className="w-[200px] mr-4">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yesterday">Yesterday</SelectItem>
          <SelectItem value="lastWeek">Last Week</SelectItem>
          <SelectItem value="lastMonth">Last Month</SelectItem>
          <SelectItem value="thisMonth">This Month</SelectItem>
          <SelectItem value="lastYear">Last Year</SelectItem>
          <SelectItem value="fromBeginning">From Beginning</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="horizontal" className="h-8 w-[1px]" />
      <Badge
        className="rounded-3xl p-2 text-sm"
        variant={variant as keyof typeof badgeVariants}
      >
        <DollarSign className="h-4 w-4" /> {value}
      </Badge>
    </ReportCardWithContent>
  )
}

