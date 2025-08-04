"use client";

import * as React from "react";
import { Label, Pie, PieChart, ResponsiveContainer } from "recharts";

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
    <Card className="w-full max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex flex-col mx-auto">
      <CardHeader className="items-center pb-6">
        <CardDescription className="text-sm lg:text-base xl:text-lg">January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius="40%"
                outerRadius="70%"
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
                            className="fill-foreground text-xl lg:text-2xl xl:text-3xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 20}
                            className="fill-muted-foreground text-xs lg:text-sm xl:text-base"
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
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
