import Navbar from "components/Navbar";
import ProductCard from "components/ProductCard";
import SearchBar from "components/SearchBar";

import './styles.css'

const Catalog = () => {
  return(
    <>
    <Navbar/>
    <SearchBar/>
    <div className="container my-4 container-catalog">
    <ProductCard/>
    </div>
    </>
  );
}


export default Catalog;