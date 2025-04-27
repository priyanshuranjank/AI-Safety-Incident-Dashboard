function SortControls({ sortOrder, setSortOrder }) {
  return (
    <div className="flex items-center">
      <label htmlFor="dateSort" className="mr-2 text-gray-700 text-sm font-medium">
        Sort by:
      </label>
      <select
        id="dateSort"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
}

export default SortControls;