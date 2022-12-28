import ProductCard from 'components/ProductCard'
import './styles.css'

const ProductList = () => {
  return (
    <>
      <div className='container product-list'>
        <li>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </li>
      </div>
    </>
  )
}

export default ProductList