import Charts from "./chrts/ChartSection";
import { Futures } from "./furures/Futures";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Charts />
      <Futures/>
    </>
  );
}
