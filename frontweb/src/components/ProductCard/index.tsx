import { ReactComponent as Audicard } from 'assets/images/audicard.svg';
import CatalogButton from 'components/CatalogButton';
import './styles.css';

const ProductCard = () => {
  return (
    <>
      <div className='base-card product-card'>
        <div className='card-top-container'>
          <Audicard />
        </div>

        <div className='card-bottom-container'>
          <h2>Audi TT Supra</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>

        </div>

        <div className='button'>
          <CatalogButton />
        </div>
      </div>
    </>
  )
}


export default ProductCard;