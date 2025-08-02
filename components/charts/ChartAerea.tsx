"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", btc: 222, etc: 150 },
  { date: "2024-04-02", btc: 97, etc: 180 },
  { date: "2024-04-03", btc: 167, etc: 120 },
  { date: "2024-04-04", btc: 242, etc: 260 },
  { date: "2024-04-05", btc: 373, etc: 290 },
  { date: "2024-04-06", btc: 301, etc: 340 },
  { date: "2024-04-07", btc: 245, etc: 180 },
  { date: "2024-04-08", btc: 409, etc: 320 },
  { date: "2024-04-09", btc: 59, etc: 110 },
  { date: "2024-04-10", btc: 261, etc: 190 },
  { date: "2024-04-11", btc: 327, etc: 350 },
  { date: "2024-04-12", btc: 292, etc: 210 },
  { date: "2024-04-13", btc: 342, etc: 380 },
  { date: "2024-04-14", btc: 137, etc: 220 },
  { date: "2024-04-15", btc: 120, etc: 170 },
  { date: "2024-04-16", btc: 138, etc: 190 },
  { date: "2024-04-17", btc: 446, etc: 360 },
  { date: "2024-04-18", btc: 364, etc: 410 },
  { date: "2024-04-19", btc: 243, etc: 180 },
  { date: "2024-04-20", btc: 89, etc: 150 },
  { date: "2024-04-21", btc: 137, etc: 200 },
  { date: "2024-04-22", btc: 224, etc: 170 },
  { date: "2024-04-23", btc: 138, etc: 230 },
  { date: "2024-04-24", btc: 387, etc: 290 },
  { date: "2024-04-25", btc: 215, etc: 250 },
  { date: "2024-04-26", btc: 75, etc: 130 },
  { date: "2024-04-27", btc: 383, etc: 420 },
  { date: "2024-04-28", btc: 122, etc: 180 },
  { date: "2024-04-29", btc: 315, etc: 240 },
  { date: "2024-04-30", btc: 454, etc: 380 },
  { date: "2024-05-01", btc: 165, etc: 220 },
  { date: "2024-05-02", btc: 293, etc: 310 },
  { date: "2024-05-03", btc: 247, etc: 190 },
  { date: "2024-05-04", btc: 385, etc: 420 },
  { date: "2024-05-05", btc: 481, etc: 390 },
  { date: "2024-05-06", btc: 498, etc: 520 },
  { date: "2024-05-07", btc: 388, etc: 300 },
  { date: "2024-05-08", btc: 149, etc: 210 },
  { date: "2024-05-09", btc: 227, etc: 180 },
  { date: "2024-05-10", btc: 293, etc: 330 },
  { date: "2024-05-11", btc: 335, etc: 270 },
  { date: "2024-05-12", btc: 197, etc: 240 },
  { date: "2024-05-13", btc: 197, etc: 160 },
  { date: "2024-05-14", btc: 448, etc: 490 },
  { date: "2024-05-15", btc: 473, etc: 380 },
  { date: "2024-05-16", btc: 338, etc: 400 },
  { date: "2024-05-17", btc: 499, etc: 420 },
  { date: "2024-05-18", btc: 315, etc: 350 },
  { date: "2024-05-19", btc: 235, etc: 180 },
  { date: "2024-05-20", btc: 177, etc: 230 },
  { date: "2024-05-21", btc: 82, etc: 140 },
  { date: "2024-05-22", btc: 81, etc: 120 },
  { date: "2024-05-23", btc: 252, etc: 290 },
  { date: "2024-05-24", btc: 294, etc: 220 },
  { date: "2024-05-25", btc: 201, etc: 250 },
  { date: "2024-05-26", btc: 213, etc: 170 },
  { date: "2024-05-27", btc: 420, etc: 460 },
  { date: "2024-05-28", btc: 233, etc: 190 },
  { date: "2024-05-29", btc: 78, etc: 130 },
  { date: "2024-05-30", btc: 340, etc: 280 },
  { date: "2024-05-31", btc: 178, etc: 230 },
  { date: "2024-06-01", btc: 178, etc: 200 },
  { date: "2024-06-02", btc: 470, etc: 410 },
  { date: "2024-06-03", btc: 103, etc: 160 },
  { date: "2024-06-04", btc: 439, etc: 380 },
  { date: "2024-06-05", btc: 88, etc: 140 },
  { date: "2024-06-06", btc: 294, etc: 250 },
  { date: "2024-06-07", btc: 323, etc: 370 },
  { date: "2024-06-08", btc: 385, etc: 320 },
  { date: "2024-06-09", btc: 438, etc: 480 },
  { date: "2024-06-10", btc: 155, etc: 200 },
  { date: "2024-06-11", btc: 92, etc: 150 },
  { date: "2024-06-12", btc: 492, etc: 420 },
  { date: "2024-06-13", btc: 81, etc: 130 },
  { date: "2024-06-14", btc: 426, etc: 380 },
  { date: "2024-06-15", btc: 307, etc: 350 },
  { date: "2024-06-16", btc: 371, etc: 310 },
  { date: "2024-06-17", btc: 475, etc: 520 },
  { date: "2024-06-18", btc: 107, etc: 170 },
  { date: "2024-06-19", btc: 341, etc: 290 },
  { date: "2024-06-20", btc: 408, etc: 450 },
  { date: "2024-06-21", btc: 169, etc: 210 },
  { date: "2024-06-22", btc: 317, etc: 270 },
  { date: "2024-06-23", btc: 480, etc: 530 },
  { date: "2024-06-24", btc: 132, etc: 180 },
  { date: "2024-06-25", btc: 141, etc: 190 },
  { date: "2024-06-26", btc: 434, etc: 380 },
  { date: "2024-06-27", btc: 448, etc: 490 },
  { date: "2024-06-28", btc: 149, etc: 200 },
  { date: "2024-06-29", btc: 103, etc: 160 },
  { date: "2024-06-30", btc: 446, etc: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  btc: {
    label: "btc",
    color: "fifth",
  },
  etc: {
    label: "etc",
    color: "fourth",
  },
} satisfies ChartConfig

export function ChartArea() {
  const [timeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="mt-24 p-6 mx-10 mb-2">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>BTC VS ETC</CardTitle>
          <CardDescription>
            Showing total traders for the last 3 months
          </CardDescription>
        </div>
       
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillbtc" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-btc)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-btc)"
                  stopOpacity={0.1}
                />
              </linearGradient>a
              <linearGradient id="filletc" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-etc)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-etc)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="etc"
              type="natural"
              fill="url(#filletc)"
              stroke="fourth"
              stackId="a"
            />
            <Area
              dataKey="btc"
              type="natural"
              fill="url(#fillbtc)"
              stroke="fifith"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
