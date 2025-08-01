import { ChartArea } from "@/components/charts/ChartAerea";
import Charts from "./chrts/ChartSection";
import { Futures } from "./furures/Futures";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import TopPerformingStocks from "./top-stocks/TopPerformingStocks";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Charts />
      <Futures/>
      <TopPerformingStocks/>
      <ChartArea/>
    </>
  );
}
