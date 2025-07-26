import Charts from "./chrts/ChartSection";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Charts />
    </div>
  );
}
