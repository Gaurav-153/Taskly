export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-4 my-4">
      {['All', 'Completed', 'Pending'].map((f) => (
        <button
          key={f}
          className={`px-3 py-1 rounded ${
            filter === f ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
          }`}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}