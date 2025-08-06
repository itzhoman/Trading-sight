"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarCharts } from "@/components/charts/BarChart";
import { Piechart } from "@/components/charts/PieChart";
import { RadiCalChart } from "@/components/charts/RadicalChart";
import { ToolChart } from "@/components/charts/ToolChart";

gsap.registerPlugin(ScrollTrigger);

const Charts = () => {
  const chartRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    chartRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { x: i % 2 === 0 ? -150 : 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-40 px-4 md:px-14 py-6 md:py-10 place-items-center">
      <div ref={el => { chartRefs.current[0] = el; }} className="w-full max-w-[700px] h-[300px] md:h-[360px]">
        <Piechart />
      </div>
      <div ref={el => { chartRefs.current[1] = el; }} className="w-full max-w-[700px] h-[300px] md:h-[360px]">
        <BarCharts />
      </div>
      <div ref={el => { chartRefs.current[2] = el; }} className="w-full max-w-[700px] h-[300px] md:h-[360px]">
        <RadiCalChart />
      </div>
      <div ref={el => { chartRefs.current[3] = el; }} className="w-full max-w-[700px] h-[300px] md:h-[360px]">
        <ToolChart />
      </div>
    </div>
  );
};

export default Charts;
