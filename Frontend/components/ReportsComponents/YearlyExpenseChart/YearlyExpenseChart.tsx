"use client"

import React, { useState } from "react"
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardHeader } from "@/components/Ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Ui/select"

const data = [
  { month: "Jan", payment: 0, expense: 0 },
  { month: "Feb", payment: 0, expense: 0 },
  { month: "Mar", payment: 0, expense: 0 },
  { month: "Apr", payment: 0, expense: 0 },
  { month: "May", payment: 0, expense: 0 },
  { month: "Jun", payment: 0, expense: 0 },
  { month: "Jul", payment: 3500, expense: 0 },
  { month: "Aug", payment: 0, expense: 0 },
  { month: "Sep", payment: 0, expense: 0 },
  { month: "Oct", payment: 0, expense: 0 },
  { month: "Nov", payment: 0, expense: 1000 },
  { month: "Dec", payment: 0, expense: 0 },
]

export default function YearlyExpenseChart() {
  const [year, setYear] = useState("2024")

  return (
    <Card className="md:col-span-4 md:row-span-4">
      <CardHeader className="">
        <Select value={year} onValueChange={setYear}>
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="h-full flex-center max-h-[560px]">
        <ResponsiveContainer width="100%" height="100%" className="min-h-96">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" className="text-xs md:text-base"/>
            <YAxis className="text-xs md:text-lg" />
            <Tooltip />
            <Legend />
            <Bar dataKey="payment" key="Payment" fill="#8884d8" />
            <Bar dataKey="expense" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

