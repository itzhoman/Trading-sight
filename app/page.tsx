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
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 md:py-12 lg:py-16 xl:py-20">
        <ChartArea/>
      </div>
      <Footer/>
    </>
  );
}
