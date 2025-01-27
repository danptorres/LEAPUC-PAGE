import React from 'react'
import { Link, NavLink } from "react-router-dom"
import './styles/Products.css'

// Importar imagens dos produtos
import Esportiva1 from './products/img/esportiva1.png'
import Esportiva2 from './products/img/esportiva2.png'
import Basquete from './products/img/basquete.png'
import Street from './products/img/street.png'
import Colete from './products/img/colete.png'
import KitCaneca from './products/img/kit-caneca.png'
import Samba from './products/img/samba.png'
import Doll from './products/img/doll.png'
import Top from './products/img/top-nula-manca.png'

const Products = () => {
  return (
    <div className='products'>
      <h1>Confira nossos produtos</h1>
      {/* Primeira linha dos produtos */}
      <div className="products-container1">
        <Link to={'/product1'}>
          <div className="product1">
            <img src={Esportiva1} alt="Camiseta Esportiva Azul"/>
            <h2>Uniforme principal</h2>
            <p className="price">R$ 70,00</p>
          </div>
        </Link>
        <Link to={'/product2'}>
          <div className="product2">
            <img src={Esportiva2} alt="Camiseta Esportiva Branca"/>
            <h2>Camiseta de Goleiro</h2>
            <p className="price">R$ 70,00</p>
          </div>
        </Link>
        <Link to={'/product3'}>
          <div className="product3">
            <img src={Basquete} alt="Regata de Basquete"/>
            <h2>Regata de Basquete</h2>
            <p className="price">R$ 70,00</p>
          </div>
        </Link>
      </div>

      {/* Segunda linha dos produtos */}
      <div className="products-container2">
        <Link to={'/product4'}>
          <div className="product4">
            <img src={Street} alt="Camiseta Street"/>
            <h2>Camiseta Street Wear</h2>
            <p className="price">R$ 70,00</p>
          </div>
        </Link>
        <Link to={'/product5'}>
          <div className="product5">
            <img src={Colete} alt="Colete"/>
            <h2>Colete Filho da PUC</h2>
            <p className="price">R$ 60,00</p>
          </div>
        </Link>
        <Link to={'/product6'}>
          <div className="product6">
            <img src={KitCaneca} alt="Kit caneca"/>
            <h2>Kit Caneca e Tirante</h2>
            <p className="price">R$ 35,00</p>
          </div>
        </Link>
      </div>

      {/* Terceira linha de produtos */}
      <div className="products-container3">
        <Link to={'/product7'}>
          <div className="product7">
            <img src={Samba} alt="Samba canção"/>
            <h2>Samba Canção</h2>
            <p className="price">R$ 60,00</p>
          </div>
        </Link>
        <Link to={'/product8'}>
          <div className="product8">
            <img src={Doll} alt="Doll feminino"/>
            <h2>Doll Feminino</h2>
            <p className="price">R$ 60,00</p>
          </div>
        </Link>
        <Link to={'/product9'}>
          <div className="product9">
            <img src={Top} alt="Top nula manca"/>
            <h2>Top Nula Manca</h2>
            <p className="price">R$ 60,00</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Products