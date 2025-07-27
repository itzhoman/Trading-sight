import { BarCharts } from "@/components/charts/BarChart";
import { Piechart } from "@/components/charts/PieChart";

const Charts = () => {
  return (
    <div className="grid grid-cols-2 gap-10 px-14 py-10">
      <div>
        <Piechart/>
      </div>
      <div>
        <BarCharts />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Charts;
