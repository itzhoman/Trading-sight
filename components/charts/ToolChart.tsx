"use client"

import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A stacked bar chart with BTC and ETH volume"

const chartData = [
  { date: "2024-07-15", btc: 32000, eth: 18000 },
  { date: "2024-07-16", btc: 28000, eth: 20000 },
  { date: "2024-07-17", btc: 35000, eth: 15000 },
  { date: "2024-07-18", btc: 26000, eth: 22000 },
  { date: "2024-07-19", btc: 40000, eth: 21000 },
  { date: "2024-07-20", btc: 33000, eth: 19000 },
]

const chartConfig = {
  btc: {
    label: "Bitcoin (BTC)",
    color: "#2c3e50", 
  },
  eth: {
    label: "Ethereum (ETH)",
    color: "#95a5a6", 
  },
} satisfies ChartConfig

export function ToolChart() {
  return (
    <Card className="w-full max-w-[700px] h-[360px] flex flex-col">
      <CardHeader>
        <CardTitle>Trading Volume - BTC vs ETH</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <BarChart data={chartData} width={700} height={250}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <Bar
              dataKey="btc"
              stackId="a"
              fill="#2c3e50"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="eth"
              stackId="a"
              fill="#95a5a6"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  }
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
