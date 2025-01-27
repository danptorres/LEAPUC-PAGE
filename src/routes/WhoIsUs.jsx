import React, { useState, useEffect } from 'react';
import './styles/WhoIsUs.css'

// Importar as imagens
import PrimeiraLogo from '../img/primeira-logo.jpeg'
import Teco19 from '../img/teco-19.jpeg'
import CIA22 from '../img/CIA-22.jpg';
import CIA23 from '../img/CIA-23.jpg'
import CIA24 from '../img/CIA-24.jpg'


const WhoIsUs = () => {
  const [currentImage, setCurrentImage] = useState(1);

  return (
    <div className='who-is-us'>
      <h1>Conheça nossa história</h1>
      {/* Biografia */}
      <div id='biography-container'>
          <div className="first-year">
            <h2>2018</h2>
            <div className="first-year-container">
              <img src={PrimeiraLogo} alt="Primeira Logo"/>
              <div className="first-year-text">
                <p>Em 2018, a <span className='bold'>Liga das Engenharias e Arquitetura da PUC Goiás</span> (LEAPUC) foi criada com o objetivo de integrar alunos dos cursos de Engenharia e Arquitetura por meio de atividades esportivas, destacando-se principalmente na participação em Jogos Universitários. A Liga organizou competições internas e externas, como futebol, vôlei, basquete e atletismo, promovendo o espírito de equipe e a camaradagem entre os alunos. Essas atividades não apenas incentivaram a prática esportiva, mas também ajudaram a formar um ambiente de união e entusiasmo, onde alunos de diferentes cursos puderam se conhecer e estabelecer novas amizades.</p>
                <p>Além das competições, a LEAPUC implementou treinamentos regulares e workshops para aprimorar habilidades esportivas, preparando os alunos para os desafios das competições. A participação nos Jogos Universitários tornou-se um momento marcante para os membros, que se reuniam para apoiar uns aos outros, celebrando o esforço e a dedicação. Com o tempo, a LEAPUC se consolidou como um símbolo de orgulho e identidade para os alunos da PUC Goiás, promovendo um ambiente acadêmico mais saudável e integrado, e incentivando a atividade física como parte fundamental da vida universitária.</p>
              </div>
            </div>
          </div>
          <h2>2019</h2>
          <div className="second-year-container">
            <div className="second-year-text">
            <p>Em 2019, no seu segundo ano de atuação, a LEAPUC foi convidada a participar da CIA (Copa Inter Atléticas), realizada em Uberaba (MG). Esse convite representou uma grande oportunidade para os alunos, que se prepararam intensamente para competir com universidades de diversas regiões. A equipe se destacou não apenas pela habilidade esportiva, mas também pelo espírito de união e camaradagem que cultivaram ao longo dos treinos.</p>
            <p>No segundo semestre do ano, a LEAPUC participou do TECO (Torneio das Engenharias do Centro-Oeste), uma das competições mais aguardadas do calendário universitário. Após uma série de partidas emocionantes e desafiadoras, a Liga conquistou um inédito terceiro lugar, um feito que foi celebrado como uma verdadeira vitória para todos os membros. Esse resultado não apenas elevou a moral da equipe, mas também consolidou a LEAPUC como uma força crescente no cenário esportivo universitário. O sucesso em ambas as competições reafirmou o compromisso da Liga com a excelência esportiva, a integração dos alunos e a promoção de um ambiente saudável e colaborativo.</p>
            </div>
            <img src={Teco19} alt="Imagem 2019"/>
          </div>
          <h2>2022</h2>
          <div className="third-year-container">
            <img src={CIA22} alt="CIA 22"/>
            <div className="third-year-text">
              <p>No ano de 2022, após dois anos de pausa nas atividades devido à pandemia, a LEAPUC fez um retorno triunfante ao cenário esportivo, participando da. Enfrentando a 4ª divisão, a equipe estava determinada a recuperar o tempo perdido e demonstrar a força e o talento dos alunos. Com um preparo intenso e muito empenho, a Liga superou os desafios da competição e conseguiu um feito inédito: conquistou o acesso para a 3ª divisão.</p>
              <p>Essa conquista não apenas simbolizou a resiliência e a dedicação dos membros da LEAPUC, mas também renovou o espírito de equipe e a motivação entre os alunos. Ao longo da temporada, a Liga se destacou com desempenhos impressionantes, disputando partidas emocionantes e fazendo novas amizades. Atualmente, a LEAPUC compete na 3ª divisão, onde continua a se aprimorar e a representar a PUC Goiás com garra e paixão. O retorno à competição foi mais do que um simples marco esportivo; foi uma celebração da união, do esforço coletivo e da determinação em manter viva a chama do esporte na comunidade acadêmica.</p>
            </div>
          </div>
          <h2>2023</h2>
          <div className="fourth-year-container">
            <div className="fourth-year-text">
              <p>Em 2023, a LEAPUC viveu uma das suas participações mais memoráveis, especialmente por parte das equipes femininas, que brilharam no Campeonato Interatlético (CIA 23). Com uma preparação cuidadosa e um espírito competitivo renovado, as atletas demonstraram excelência em suas respectivas modalidades, destacando-se principalmente na peteca, onde conseguiram alcançar o pódio. Esse resultado não apenas evidenciou o talento e a dedicação das jogadoras, mas também consolidou a importância da presença feminina nas competições esportivas da Liga.</p>
              <p>O sucesso das equipes femininas no CIA 23 inspirou toda a comunidade acadêmica e reforçou o compromisso da LEAPUC com a inclusão e a valorização do esporte entre todas as suas alunas. Além da peteca, as atletas se destacaram em outras modalidades, mostrando que a união e o trabalho em equipe são fundamentais para alcançar resultados expressivos. O desempenho notável das jogadoras trouxe um novo fôlego para a Liga, fortalecendo laços entre os membros e incentivando ainda mais mulheres a se envolverem nas atividades esportivas. A LEAPUC, assim, não apenas conquistou medalhas, mas também promoveu uma mensagem poderosa sobre empoderamento e a importância do esporte na formação pessoal e acadêmica.</p>
            </div>
          <img src={CIA23} alt="CIA 23"/>
          </div>
          <h2>2024</h2>
          <div className="fifth-year-container">
            <img src={CIA24} alt="CIA 24" />
            <div className="fifth-year-text">
              <p>A participação da LEAPUC no CIA 24 marcou um momento histórico, sendo a primeira vez que a Liga competiu como uma representação unificada de todos os cursos da PUC Goiás. Essa nova abordagem proporcionou a inclusão de alunos de diversas áreas, promovendo um ambiente de integração e camaradagem entre os participantes. Com um espírito competitivo renovado, a LEAPUC teve um desempenho notável no torneio, alcançando diversos pódios, incluindo o segundo lugar no tênis masculino. Esse resultado destacou não apenas o talento dos atletas, mas também o comprometimento da Liga em representar a PUC Goiás com excelência.</p>
              <p>Além das conquistas esportivas, a participação como uma liga abrangente fortaleceu o espírito de equipe e gerou um sentimento de apoio mútuo entre os alunos. Essa experiência ressaltou a importância do esporte na formação acadêmica, promovendo valores como disciplina, respeito e solidariedade. Ao final do CIA 24, a LEAPUC não só retornou com medalhas e troféus, mas também com laços mais fortes entre os estudantes, reafirmando seu papel fundamental como um agente de integração e desenvolvimento pessoal e social dentro da PUC Goiás. A Liga se consolidou como um espaço onde os alunos podem se unir, superar desafios e celebrar conquistas, contribuindo para uma vida universitária mais rica e significativa.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default WhoIsUs