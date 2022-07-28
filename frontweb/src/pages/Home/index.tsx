import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonHome from 'components/ButtonHome';
import Navbar from "components/Navbar";

import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>

        </div>
      </div>
      <div className='home-footer-container'>
        <div className='home-footer-content'>
          <p>Comece agora a navegar</p>
        </div>
        <div className='home-button'>
          <ButtonHome/>
        </div>
      </div>
    </>
  );
}

export default Home;