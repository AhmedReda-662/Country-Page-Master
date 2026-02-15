export default function SearchBar() {
  return (
    <label className="input flex items-center gap-2 bg-dark-secondary rounded-lg px-3 py-2 border-0 outline-none shadow-[none]">
      <svg
        className="h-[1.5em] text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        required
        placeholder="Search by Name,Region,Subregion"
        className="placeholder:text-gray-secondary"
      />
    </label>
  );
}
