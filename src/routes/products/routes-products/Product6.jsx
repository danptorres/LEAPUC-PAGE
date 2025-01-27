import { useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import {register} from 'swiper/element/bundle';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles/Product.css'
import KitCaneca from '../img/kit-caneca.png';
import CanecaFrente from '../img/caneca-frente.png';
import CanecaCosta from '../img/caneca-costa.png';
import Tirante from '../img/tirante.png';

register();

const Product6 = () => {
  // Incluir as imagens dos produtos no array
  const caneca = [KitCaneca, CanecaFrente, CanecaCosta, Tirante]

  // Mudar a cor do botão de tamanho selecionado
  const [activeSize, setActiveSize] = useState(null);

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  return (
    <div className='Product-page'>
      <h1>Produtos</h1>
      <div className="product-simple-container">
        <Swiper className='slider-swiper' slidesPerView={1} pagination={{clickable: true}} navigation>
          {caneca.map(slide => (
            <SwiperSlide className='swiperslide'>
              <img src={slide} alt={caneca} className={slide === Tirante ? 'highlight' : ''} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="product-simple-description">
          <h2>Kit Caneca + Tirante</h2>
          <p className='description'>A sagrada caneca LEAPUC e seu fiel tirante que não podem faltar</p>
          <p className='price'>R$ 35,00</p>
        </div>
      </div>
      <div className="add-to-cart">
          <button id='confirmed-button'>Adicionar ao carrinho</button>
      </div>
    </div>
  )
}

export default Product6