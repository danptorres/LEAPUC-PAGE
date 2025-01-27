import React from 'react'
import './Footer.css'

// Importar as imagens
import favicon from '../img/favicon.png'
import tiktok from '../img/tiktok-logo.png'
import twitter from '../img/twitter-logo.jpg'
import cheers from '../img/cheers-logo.png'
import letreiro from '../img/LEAPUC-letreiro.png'



const Footer = () => {
  return (
    <footer className="footer-container">
        <img src={letreiro} alt="Letreiro LEAPUC" id='sign'/>
        <h1>Siga nossas redes</h1>
            <div className="social-medias">
                <ul id='footer-links'>
                    <li>
                        <img src={favicon} alt="instagram logo"/>
                        <a href="https://www.instagram.com/leapucgo/?hl=pt-br" target='_blank'>@leapucgo</a>
                    </li>
                    <li>
                        <img src={tiktok} alt="tiktok logo" />
                        <a href="https://www.tiktok.com/@ligadasengenhariaspuc?_t=8eb8ArsMbzR&_r=1" target='_blank'>ligadasengenhariaspuc</a>
                    </li>
                    <li>
                        <img src={twitter} alt="twitter logo" />
                        <a href="https://twitter.com/leapucgo?s=11&t=KNHJGqTNyPFUUObe2uD4ow" target='_blank'>@leapucgo</a>
                    </li>
                    <li>
                        <img src={cheers} alt="cheers logo" />
                        <a href="https://cheers.com.br/leapuc-go" target='_blank'>Cheers</a>
                    </li>
                </ul>
            </div>
            <p id='copyright'>@2024 Daniel Pires</p>
    </footer>
  )
}

export default Footer