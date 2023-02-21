export default function SearchBar({ onSearch }) {
  return (
    <div>
      <input type="search"  placeholder="Search…" />
      <button className="buttonBusqueda" onClick={onSearch}>
        Agregar
      </button>
    </div>
  );
}
