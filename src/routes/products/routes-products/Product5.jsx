import { useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import {register} from 'swiper/element/bundle';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles/Product.css'
import Colete from '../img/colete.png';
import ColeteFrente from '../img/colete-frente.png';
import ColeteCosta from '../img/colete-costa.png';
import MedidasColete from '../img/medidas-colete.jpeg';

register();

const Product5 = () => {
  // Incluir as imagens dos produtos no array
  const colete = [Colete, ColeteFrente, ColeteCosta]

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
          {colete.map(slide => (
            <SwiperSlide className='swiperslide'>
              <img src={slide} alt={colete} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="product-simple-description">
          <h2>Colete filho da PUC</h2>
          <p className='description'>O clássico colete da raposa para a caçada</p>
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

export default Product5