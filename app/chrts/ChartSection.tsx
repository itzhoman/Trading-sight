import { BarCharts } from "@/components/charts/BarChart";
import { Piechart } from "@/components/charts/PieChart";
import { RadiCalChart } from "@/components/charts/RadicalChart";
import { ToolChart } from "@/components/charts/ToolChart";

const Charts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-40 px-4 md:px-14 py-6 md:py-10 place-items-center">
      <div className="w-full max-w-[700px] h-[300px] md:h-[360px]">
        <Piechart />
      </div>
      <div className="w-full max-w-[700px] h-[300px] md:h-[360px]">
        <BarCharts />
      </div>
      <div className="w-full max-w-[700px] h-[300px] md:h-[360px]">
        <RadiCalChart />
      </div>
      <div className="w-full max-w-[700px] h-[300px] md:h-[360px]">
        <ToolChart />
      </div>
    </div>
  );
};

export default Charts;
