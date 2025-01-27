import { useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import {register} from 'swiper/element/bundle';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles/Home.css'

register();

// importar fotos zootopia
import Zootopia1 from '../img/home-page/zootopia-1.jpg';
import Zootopia2 from '../img/home-page/zootopia-2.jpg';
import Zootopia3 from '../img/home-page/zootopia-3.jpg';
import Zootopia4 from '../img/home-page/zootopia-4.jpg';
import Zootopia5 from '../img/home-page/zootopia-5.jpg';

// importar fotos CIA 24
import Cia1 from '../img/home-page/cia24-1.jpeg';
import Cia2 from '../img/home-page/cia24-2.jpeg';
import Cia3 from '../img/home-page/cia24-3.jpg';
import Cia4 from '../img/home-page/cia24-4.jpeg';
import Cia5 from '../img/home-page/cia24-5.jpg';


// importar fotos TECO 23
import Teco1 from '../img/home-page/teco23-1.jpeg';
import Teco2 from '../img/home-page/teco23-2.jpg';
import Teco3 from '../img/home-page/teco23-3.jpeg';
import Teco4 from '../img/home-page/teco23-4.jpg';
import Teco5 from '../img/home-page/teco23-5.jpg';

const Home = () => {

  // Incluir as imagens em arrays
  const slides_zootopia = [Zootopia1, Zootopia2, Zootopia3, Zootopia4, Zootopia5];
  const slides_cia = [Cia1, Cia2, Cia3, Cia5, Cia4];
  const slides_teco = [Teco1, Teco2, Teco3, Teco4, Teco5];

  return (
    <div className='home'>
        <h1>Confira as ultimas caçadas da raposa</h1>
        {/* ZOOTOPIA */}
        <div className="zootopia-container" >
          <h2>Zootopia</h2>
          <div className="slider">
          {/* Swiper */}
          <Swiper className='slider-swiper' slidesPerView={1} pagination={{clickable: true}} navigation>
            {slides_zootopia.map(slide => (
              <SwiperSlide>
                <img src={slide} alt={slides_zootopia} />
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
          <div className="zootopia-text">
            <p>
            Em outubro, a LEAPUC coorganizou a sunset "Zootopia", que reuniu a galera em um ambiente ao ar livre, com muito funk e a estreia do nosso novo mé. O evento promoveu a integração e reforçou o papel da Liga em garantir o melhor da vida universitária.
            </p>
          </div>
        </div>
       
        {/* CIA 24 */}
        <div className="cia24-container" >
          <h2>CIA 24</h2>
          <div className="slider">
          {/* Swiper */}
          <Swiper className='slider-swiper' slidesPerView={1} pagination={{clickable: true}} navigation>
            {slides_cia.map(slide => (
              <SwiperSlide>
                <img src={slide} alt={slides_cia} className={slide === Cia4 ? 'highlight' : ''} />
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
          <div className="cia24-text">
            <p>
              Mais uma participação épica da LEA na CIA, fazendo história nas quadras e no rolê, como sempre.
              Com certeza os 4 dias mais f#das da vida do universitário não pode faltar no ano da Raposa. Ansiosos para a CIA 25?
            </p>
          </div>
        </div>

        {/* TECO 23 */}
        <div className="teco23-container">
          <h2>TECO 23</h2>
          <div className="slider">
          {/* Swiper */}
          <Swiper className='slider-swiper' slidesPerView={1} pagination={{clickable: true}} navigation>
            {slides_teco.map(slide => (
              <SwiperSlide>
                <img src={slide} alt={slides_teco} />
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
          <div className="teco23-text">
            <p>
              É claro que a Raposa não ficaria de fora do TECO 23, o tradicional Torneio das Engenharias do Centro-Oeste. Nossos atletas entregaram tudo em quadra e com a caneca na mão é claro. 
            </p>
          </div>
        </div>
    </div>
  )
}

export default Home