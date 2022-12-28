import Navbar from "components/Navbar";
import ProductList from "components/ProductList";
import SearchBar from "components/SearchBar";

import './styles.css';

const Catalog = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <div className="container my-4 container-catalog">
        <ProductList />
      </div>
    </>
  );
}


export default Catalog;