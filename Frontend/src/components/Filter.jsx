const Filters = ({ filters, selected, onChange }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-900 rounded-xl mb-6">
      {Object.entries(filters).map(([key, values]) => (
        <div key={key}>
          <label className="text-xs text-gray-400 uppercase mb-1 block">
            {key.replace("_", " ")}
          </label>
          <select
            className="w-full bg-gray-800 text-white text-sm rounded-lg p-2 border border-gray-700"
            value={selected[key] || ""}
            onChange={(e) => onChange(key, e.target.value)}
          >
            <option value="">All</option>
            {values.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Filters;
