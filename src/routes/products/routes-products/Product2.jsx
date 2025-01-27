import { useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import {register} from 'swiper/element/bundle';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles/Product.css'
import Esportiva2 from '../img/esportiva2.png';
import Medidas from '../img/medidas.jpeg';
import EsportivaFrente from '../img/goleiro-frente.png';
import EsportivaCostas from '../img/goleiro-costas.png';

register();


const Product2 = () => {

  // Incluir as imagens dos produtos no array
   const product2_images = [Esportiva2, EsportivaFrente, EsportivaCostas, Medidas]

  // Mudar a cor do botão de tamanho selecionado
  const [activeSize, setActiveSize] = useState(null);

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

   return (
    <div className='Product-page'>
      <h1>Produtos</h1>
      <div className="product-container">
        <Swiper className='slider-swiper' slidesPerView={1} pagination={{clickable: true}} navigation>
          {product2_images.map(slide => (
            <SwiperSlide className='swiperslide'>
              <img src={slide} alt={product2_images} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="product-description">
          <h2>Uniforme goleiro</h2>
          <p className='description'>O manto sagrado de nossos goleiros e líberos</p>
          <p className='price'>R$ 70,00</p>
          <div className="product-details">
            <label htmlFor="name" className='label-name'>Nome na camisa</label>
            <input type="text" id='name' name='name' className='input-name' placeholder='Digite o nome na camiseta'/>
            <label htmlFor="number" id='label-number'>Número na camisa</label>
            <input type="number" min={0} id='number' name='number' className='input-number'/>
            {/* Verificação de atleta */}
            <label className="athlete-checkbox">
              <input type="checkbox" id='athlete' name='athlete' className='input-athlete'/>
              <span className="checkmark"></span>
                Comprar como atleta
            </label>
          </div>
          <div className="product-size">
            <h2>Selecione o tamanho</h2>
            <ul className='size-list'>
              {['PP', 'P', 'M', 'G', 'GG', 'EXG', 'EXGG', 'EXGGG'].map((size) => (
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

export default Product2