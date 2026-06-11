import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const MonthlyBarChart = ({
  data,
}) => {

  return (

    <div className="bg-white p-6 rounded-2xl shadow-md">

      <h2 className="text-2xl font-bold mb-4">
        Monthly Analytics
      </h2>

      <BarChart
        width={500}
        height={300}
        data={data}
      >

        <XAxis dataKey="month" />
        <YAxis />

        <Tooltip />
        <Legend />

        <Bar
          dataKey="total"
        />

      </BarChart>

    </div>
  );
};

export default MonthlyBarChart;