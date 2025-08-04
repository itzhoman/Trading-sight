"use client"

import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"

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
    <Card className="w-full max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex flex-col mx-auto">
      <CardHeader className="pb-6">
        <CardDescription className="text-sm lg:text-base xl:text-lg">January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              accessibilityLayer
              data={chartData}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={15}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="desktop" radius={15} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
