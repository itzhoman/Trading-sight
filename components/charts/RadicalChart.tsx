"use client"

import { PolarGrid, RadialBar, RadialBarChart } from "recharts"

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

export const description = "A radial chart with a grid"

const chartData = [
  { browser: "Commodities", traders: 275, fill: "#000000" },
  { browser: "Stocks", traders: 200, fill: "#404040" },
  { browser: "Crypto", traders: 287, fill: "#808080" },
  { browser: "ETFs", traders: 173, fill: "#BFBFBF" },
  { browser: "Forex", traders: 190, fill: "#BFbcBF" },
];

const chartConfig = {
  traders: {
    label: "Traders",
  },
  chrome: {
    label: "Stocks",
    color: "#000000",
  },
  safari: {
    label: "Crypto",
    color: "#404040",
  },
  firefox: {
    label: "ETFs",
    color: "#808080",
  },
  edge: {
    label: "Forex",
    color: "#BFBFBF",
  },
  other: {
    label: "Commodities",
    color: "#BFbcBF",
  },
} satisfies ChartConfig;

export function RadiCalChart() {
  return (
    <Card className="w-full max-w-[700px] h-[360px] flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="w-full h-full"
        >
          <RadialBarChart
            data={chartData}
            innerRadius={30}
            outerRadius={100}
            width={700}
            height={250}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <PolarGrid gridType="circle" />
            <RadialBar dataKey="traders" />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
