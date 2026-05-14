import { useState, useEffect } from "react";
import API from "../api/axios";
import Filters from "../components/Filter";
import IntensityBarChart from "../components/charts/IntensityBarChart";
import LikelihoodBarChart from "../components/charts/LikelihoodBarChart";
import RelevancePieChart from "../components/charts/RelevancePieChart";
import TopicsChart from "../components/charts/TopicChart";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchFilters = async () => {
    const res = await API.get("/data/filter");
    setFilters(res.data.filters);
  };

  const fetchData = async () => {
    setLoading(true);
    const params = Object.fromEntries(
      Object.entries(selected).filter(([_, v]) => v !== ""),
    );
    const res = await API.get("/data", { params });
    setData(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchFilters();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selected]);

  const handleFilterChange = (key, value) => {
    setSelected((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">
          📊 Data Visualization Dashboard
        </h1>
        <p className="text-gray-400 mt-1">
          Blackcoffer Assignment — Interactive Analytics
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 p-4 rounded-xl text-center">
          <p className="text-gray-400 text-sm">Total Records</p>
          <p className="text-white text-2xl font-bold">{data.length}</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-xl text-center">
          <p className="text-gray-400 text-sm">Avg Intensity</p>
          <p className="text-indigo-400 text-2xl font-bold">
            {data.length
              ? Math.round(
                  data.reduce((a, b) => a + (b.intensity || 0), 0) /
                    data.length,
                )
              : 0}
          </p>
        </div>
        <div className="bg-gray-900 p-4 rounded-xl text-center">
          <p className="text-gray-400 text-sm">Avg Likelihood</p>
          <p className="text-green-400 text-2xl font-bold">
            {data.length
              ? Math.round(
                  data.reduce((a, b) => a + (b.likelihood || 0), 0) /
                    data.length,
                )
              : 0}
          </p>
        </div>
        <div className="bg-gray-900 p-4 rounded-xl text-center">
          <p className="text-gray-400 text-sm">Avg Relevance</p>
          <p className="text-yellow-400 text-2xl font-bold">
            {data.length
              ? Math.round(
                  data.reduce((a, b) => a + (b.relevance || 0), 0) /
                    data.length,
                )
              : 0}
          </p>
        </div>
      </div>

      <Filters
        filters={filters}
        selected={selected}
        onChange={handleFilterChange}
      />

      {loading ? (
        <div className="text-center text-gray-400 py-20">Loading charts...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IntensityBarChart data={data} />
          <LikelihoodBarChart data={data} />
          <RelevancePieChart data={data} />
          <TopicsChart data={data} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
