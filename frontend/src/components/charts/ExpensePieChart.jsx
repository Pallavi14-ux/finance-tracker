import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
];


const ExpensePieChart = ({
  data,
}) => {

  return (

    <div className="bg-white p-6 rounded-2xl shadow-md">

      <h2 className="text-2xl font-bold mb-4">
        Expense Categories
      </h2>

      <PieChart width={400} height={300}>

        <Pie
          data={data}
          dataKey="total"
          nameKey="category"
          outerRadius={100}
          label
        >

          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={
                COLORS[
                  index % COLORS.length
                ]
              }
            />
          ))}

        </Pie>

        <Tooltip />
        <Legend />

      </PieChart>

    </div>
  );
};

export default ExpensePieChart;