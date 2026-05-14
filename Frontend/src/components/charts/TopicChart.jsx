import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const TopicsChart = ({ data }) => {
  const chartData = data
    .filter((d) => d.country)
    .reduce((acc, curr) => {
      const existing = acc.find((a) => a.country === curr.country);
      if (existing) {
        existing.relevance += curr.relevance || 0;
        existing.count++;
      } else {
        acc.push({
          country: curr.country,
          relevance: curr.relevance || 0,
          count: 1,
        });
      }
      return acc;
    }, [])
    .map((d) => ({ ...d, relevance: Math.round(d.relevance / d.count) }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 8);

  return (
    <div className="bg-gray-900 p-4 rounded-xl">
      <h2 className="text-white font-semibold mb-4">Relevance by Country</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="country" tick={{ fill: "#9ca3af", fontSize: 10 }} />
          <YAxis tick={{ fill: "#9ca3af" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
          />
          <Bar dataKey="relevance" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopicsChart;
