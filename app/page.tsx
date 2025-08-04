import { ChartArea } from "@/components/charts/ChartAerea";
import Charts from "./chrts/ChartSection";
import { Futures } from "./futures/Futures";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import TopPerformingStocks from "./top-stocks/TopPerformingStocks";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Charts />
      <Futures/>
      <TopPerformingStocks/>
      <ChartArea/>
      <Footer/>
    </>
  );
}
