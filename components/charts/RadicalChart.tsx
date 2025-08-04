"use client"

import { PolarGrid, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radial chart with a grid"

const chartData = [
  { browser: "Commodities", traders: 275, fill: "#000000" }, 
  { browser: "Stocks", traders: 200, fill: "#202020" },      
  { browser: "ETFs", traders: 173, fill: "#8F8F8F" },       
  { browser: "Forex", traders: 190, fill: "#8F8C8F" },     
];

const chartConfig = {
  traders: {
    label: "Traders",
  },
  chrome: {
    label: "Stocks",
    color: "#202020", 
  },
  safari: {
    label: "Crypto",
    color: "#505050",  
  },
  firefox: {
    label: "ETFs",
    color: "#8F8F8F", 
  },
  edge: {
    label: "Forex",
    color: "#8F8C8F",  
  },
  other: {
    label: "Commodities",
    color: "#000000",  
  },
}; 

export function RadiCalChart() {
  return (
    <Card className="w-full max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex flex-col mx-auto mt-24">
      <CardHeader className="items-center pb-6">
        <CardDescription className="text-sm lg:text-base xl:text-lg">January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ChartContainer
          config={chartConfig}
          className="w-full h-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              data={chartData}
              innerRadius="35%"
              outerRadius="75%"
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel nameKey="browser" />}
              />
              <PolarGrid gridType="circle" />
              <RadialBar dataKey="traders" />
            </RadialBarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
