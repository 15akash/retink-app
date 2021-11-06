import ChartCard from "../UI/ChartCard";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import StackedChart from "./StackedChart";

const Charts = () => {
  return (
    <div className="grid grid-cols-2  lg:grid-cols-3">
      <ChartCard>
        <StackedChart />
      </ChartCard>
      <ChartCard>
        <LineChart />
      </ChartCard>
      <ChartCard>
        <PieChart />
      </ChartCard>
    </div>
  );
};

export default Charts;
