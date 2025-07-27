"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";
const chartData = [
  { browser: "Commodities", visitors: 275, fill: "#000000" },
  { browser: "Stocks", visitors: 200, fill: "#404040" },
  { browser: "Crypto", visitors: 287, fill: "#808080" },
  { browser: "ETFs", visitors: 173, fill: "#BFBFBF" },
  { browser: "Forex", visitors: 190, fill: "#BFbcBF" },
];

const chartConfig = {
  visitors: {
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

export function Piechart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <PieChart width={700} height={360}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Traders
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
