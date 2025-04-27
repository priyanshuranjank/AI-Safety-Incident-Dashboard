function FilterControls({ filter, setFilter }) {
  return (
    <div className="flex items-center">
      <label htmlFor="severityFilter" className="mr-2 text-gray-700 text-sm font-medium">
        Severity:
      </label>
      <select
        id="severityFilter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
}

export default FilterControls;