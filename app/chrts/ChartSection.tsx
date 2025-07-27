import { BarCharts } from "@/components/charts/BarChart";
import { Piechart } from "@/components/charts/PieChart";

const Charts = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-14 py-10 place-items-center">
      {/* Both charts have same width and height */}
      <div className="w-full max-w-[700px] h-[360px]">
        <Piechart />
      </div>
      <div className="w-full max-w-[700px] h-[360px]">
        <BarCharts />
      </div>
    </div>
  );
};

export default Charts;
