import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const IntensityBarChart = ({ data }) => {
  const chartData = data
    .filter((d) => d.sector)
    .reduce((acc, curr) => {
      const existing = acc.find((a) => a.sector === curr.sector);
      if (existing) {
        existing.intensity += curr.intensity || 0;
        existing.count++;
      } else {
        acc.push({
          sector: curr.sector,
          intensity: curr.intensity || 0,
          count: 1,
        });
      }
      return acc;
    }, [])
    .map((d) => ({ ...d, intensity: Math.round(d.intensity / d.count) }))
    .slice(0, 10);

  return (
    <div className="bg-gray-900 p-4 rounded-xl">
      <h2 className="text-white font-semibold mb-4">Intensity by Sector</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="sector" tick={{ fill: "#9ca3af", fontSize: 11 }} />
          <YAxis tick={{ fill: "#9ca3af" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
          />
          <Bar dataKey="intensity" fill="#6366f1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IntensityBarChart;
