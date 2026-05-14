import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const LikelihoodBarChart = ({ data }) => {
  const chartData = data
    .filter((d) => d.region)
    .reduce((acc, curr) => {
      const existing = acc.find((a) => a.region === curr.region);
      if (existing) {
        existing.likelihood += curr.likelihood || 0;
        existing.count++;
      } else {
        acc.push({
          region: curr.region,
          likelihood: curr.likelihood || 0,
          count: 1,
        });
      }
      return acc;
    }, [])
    .map((d) => ({ ...d, likelihood: Math.round(d.likelihood / d.count) }))
    .slice(0, 8);

  return (
    <div className="bg-gray-900 p-4 rounded-xl">
      <h2 className="text-white font-semibold mb-4">Likelihood by Region</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="region" tick={{ fill: "#9ca3af", fontSize: 10 }} />
          <YAxis tick={{ fill: "#9ca3af" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
          />
          <Bar dataKey="likelihood" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LikelihoodBarChart;
