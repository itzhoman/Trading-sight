"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 150 },
  { month: "February", desktop: 80 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 110 },
  { month: "May", desktop: 180 },
  { month: "June", desktop: 160 },
]

const chartConfig = {
  desktop: {
    label: "Value",
    color: "fifth",
  },
} satisfies ChartConfig

export function BarCharts() {
  return (
    <Card className="">
      <CardHeader>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="">
        <ChartContainer config={chartConfig} className="h-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            width={350}
            height={250}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" radius={15} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
