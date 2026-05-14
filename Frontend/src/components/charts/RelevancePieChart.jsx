import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = [
  "#6366f1",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
];

const RelevancePieChart = ({ data }) => {
  const chartData = data
    .filter((d) => d.topic)
    .reduce((acc, curr) => {
      const existing = acc.find((a) => a.name === curr.topic);
      if (existing) {
        existing.value++;
      } else {
        acc.push({ name: curr.topic, value: 1 });
      }
      return acc;
    }, [])
    .sort((a, b) => b.value - a.value)
    .slice(0, 7);

  return (
    <div className="bg-gray-900 p-4 rounded-xl">
      <h2 className="text-white font-semibold mb-4">Topics Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label={({ name }) => name}
          >
            {chartData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RelevancePieChart;
