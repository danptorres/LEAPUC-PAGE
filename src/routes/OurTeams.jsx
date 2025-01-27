import React from 'react'
import './styles/OurTeams.css'

// Importar as imagens do futsal
import Futsal1 from '../img/Our-Teams/futsal-teco19.jpeg';
import Futsal2 from '../img/Our-Teams/futsal-cia22.jpeg';
import Futsal3 from '../img/Our-Teams/futsal-teco22.jpeg';

// Importar as imagens do volei
import Volei1 from '../img/Our-Teams/volei-teco19.jpeg';
import Volei2 from '../img/Our-Teams/volei2-teco19.jpeg';
import Volei3 from '../img/Our-Teams/volei3-teco18.jpeg';

// Importar as imagens do basquete
import Basquete1 from '../img/Our-Teams/basquete-teco19.jpeg';
import Basquete2 from '../img/Our-Teams/basquete2-teco22.jpeg';
import Basquete3 from '../img/Our-Teams/basquete3-teco18.jpeg';

// Importar as imagens de handebol
import Handbal1 from '../img/Our-Teams/handbal-teco23.jpg';
import Handbal2 from '../img/Our-Teams/handbal2-camaleao23.jpeg';
import Handbal3 from '../img/Our-Teams/handbal3-cia22.jpeg';

// Importar as imagens de E-sports
import eSports from '../img/Our-Teams/e-sport-teco22.jpeg';

// Impoerar as imagens do Invidivudal
import Individual1 from '../img/Our-Teams/atletismo-teco23.jpg';
import Individual2 from '../img/Our-Teams/tenis-teco22.jpeg';

const OurTeams = () => {
  return (
    <div className='OurTeams-container'>
      <h1>Conheça nossas equipes</h1>
      <div className="footbal">
        <h2>Futsal</h2>
        <img src={Futsal1} alt="futsal teco19" />
        <p>O time de futsal nasceu junto com a fundação da atlética, carregando no peito o espírito competitivo e a paixão pelo esporte. Ao longo dos anos, a equipe participou de diversos campeonatos universitários, sempre mostrando garra e união dentro e fora das quadras. Hoje, o futsal é um dos pilares da nossa atlética, representando com orgulho nossas cores.</p>
      </div>
      <div className="volley">
        <h2>Vôlei</h2>
        <img src={Volei3} alt="volei teco18" />
        <p>Formado por amantes do esporte, o time de vôlei começou de forma modesta, mas logo conquistou espaço e respeito nas competições. Com treinos intensos e muita dedicação, a equipe se destacou em torneios regionais, mostrando que a combinação de talento e esforço é a chave para o sucesso. O vôlei é sinônimo de determinação e espírito de equipe.</p>
      </div>
      <div className="basketball">
        <h2>Basquete</h2>
        <img src={Basquete1} alt="basquete teco19" />
        <p>O time de basquete foi criado por estudantes apaixonados pelo jogo e rapidamente se tornou um símbolo de excelência esportiva. Reconhecido por sua estratégia e agilidade, a equipe trouxe troféus importantes para a atlética, consolidando-se como um dos nossos maiores orgulhos. No basquete, cada partida é uma oportunidade de brilhar.</p>
      </div>
      <div className="handball">
        <h2>Handebol</h2>
        <img src={Handbal1} alt="handbol teco23" />
        <p>Desde a sua formação, o time de handebol se destacou pela intensidade e pela camaradagem entre os jogadores. Com um histórico de vitórias e atuações memoráveis, a equipe representa perfeitamente o lema de nunca desistir, enfrentando cada adversário com força e técnica. O handebol é um exemplo de superação e espírito esportivo.</p>
      </div>
      <div className="e-sports">
        <h2>E-sports</h2>
        <img src={eSports} alt="Fifa teco22" />
        <p>A equipe de e-sports surgiu da paixão por jogos eletrônicos e rapidamente ganhou destaque no cenário universitário. Com uma combinação de estratégia, reflexos rápidos e trabalho em equipe, nossos jogadores competem em diversas modalidades, colocando a atlética na vanguarda do esporte digital. O time de e-sports é a prova de que o talento vai além das quadras.</p>
      </div>
      <div className="individual">
        <h2>Modalidades individuais</h2>
        <img src={Individual1} alt="tenis teco22" />
        <p>A atlética sempre valorizou as modalidades individuais, que têm sido palco de grandes conquistas e talentos excepcionais. No tênis, nossos atletas mostraram precisão e elegância, trazendo títulos importantes. Na natação, a superação de limites e o espírito competitivo renderam medalhas e momentos inesquecíveis. O ping pong destacou nossa habilidade e reflexos rápidos, enquanto o vôlei de areia combinou técnica e resistência sob o sol escaldante, levando nossa bandeira ao topo. Cada atleta individual carrega o nome da atlética com orgulho, provando que a dedicação é a chave para o sucesso.</p>
      </div>
      <div className="directors">
        <h2>Venha fazer parte dos nossos times</h2>
        <p>Entre em contato com nossos diretores esportivos para mais informações sobre treinos e competições</p>
        <ul className="directors-contact">
          <li>Diretor de futebol: (62) 91234-5678 - Nome</li>
          <li>Diretor de futsal: (62) 91234-5678 - Nome</li>
          <li>Diretor de vôlei: (62) 91234-5678 - Nome</li>
          <li>Diretor de basquete: (62) 91234-5678 - Nome</li>
          <li>Diretor de handebol: (62) 91234-5678 - Nome</li>
          <li>Diretor de e-sports: (62) 91234-5678 - Nome</li>
        </ul>
      </div>
    </div>
  )
}

export default OurTeams