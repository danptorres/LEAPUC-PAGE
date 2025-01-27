import { useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import {register} from 'swiper/element/bundle';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles/Product.css'
import Street from '../img/street.png';
import StreetFrente from '../img/street-frente.png';
import StreetCosta from '../img/street-costa.png';
import MedidasStreet from '../img/medidas-street.png';

register();

const Product4 = () => {
  // Incluir as imagens dos produtos no array
  const street = [Street, StreetFrente, StreetCosta]

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
          {street.map(slide => (
            <SwiperSlide className='swiperslide'>
              <img src={slide} alt={street} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="product-simple-description">
          <h2>Camiseta Street Wear</h2>
          <p className='description'>O estilo que não pode faltar para a raposa</p>
          <p className='price'>R$ 70,00</p>
          <div className="product-simple-size">
            <h2>Selecione o tamanho</h2>
            <ul className='size-list'>
              {['P', 'M', 'G', 'GG'].map((size) => (
                <li key={size}>
                  <button
                    className={activeSize === size ? 'active' : ''}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                </li>
              ))}
            </ul>
        </div>
        </div>
      </div>
      <div className="add-to-cart">
          <button id='confirmed-button'>Adicionar ao carrinho</button>
      </div>
    </div>
  )
}

export default Product4