import { BarCharts } from "@/components/charts/BarChart";
import { Piechart } from "@/components/charts/PieChart";
import { RadiCalChart } from "@/components/charts/RadicalChart";
import { ToolChart } from "@/components/charts/ToolChart";

const Charts = () => {
  return (
    <div className="grid grid-cols-2 gap-8 px-14 py-10 place-items-center">
      <div className="w-full max-w-[700px] h-[360px]">
        <Piechart />
      </div>
      <div className="w-full max-w-[700px] h-[360px]">
        <BarCharts />
      </div>
      <div className="w-full max-w-[700px] h-[360px]">
        <RadiCalChart />
      </div>
      <div className="w-full max-w-[700px] h-[360px]">
        <ToolChart />
      </div>
    </div>
  );
};

export default Charts;
