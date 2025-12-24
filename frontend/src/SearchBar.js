export default function SearchBar({ setQuery }) {
  return (
    <div className="search-box">
      <input
        placeholder="Search for any college procedure..."
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  );
}
