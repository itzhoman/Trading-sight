import Charts from "./chrts/Charts";
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
