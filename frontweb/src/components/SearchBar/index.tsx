import './styles.css';

const SearchBar = () => {
  return (
    <nav className="navbar bg-light search-nav">
      <div className="container-fluid justify-content-around search-nav-content">
        <form className="d-flex" role="search">
          <input className="form-control me-2 form-search" type="search" placeholder="Digite sua busca" aria-label="Search" />
          <button className="btn btn-outline-success btn-search" type="submit">BUSCAR</button>
        </form>
      </div>
    </nav>
  )
}

export default SearchBar;