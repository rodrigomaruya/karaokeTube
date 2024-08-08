import Footer from '../../components/Footer'
import './home.css'
import { Link } from 'react-router-dom'
export default function Home(){

  return (
    <div className="container">
      <main className="main somente">
        <div className="titulo">
          <h1>Bem-vindo ao  Karaokê Tube!</h1>
        </div>
        <section className="sobre">
          <h2>Descubra a Alegria de Cantar</h2>
          <p>Você adora cantar e se divertir com amigos e familiares? Então você está no lugar certo! No Karaokê Tube, oferecemos uma vasta coleção de músicas para karaokê diretamente do YouTube, desde os clássicos inesquecíveis até os hits mais recentes. Quer você seja um cantor de chuveiro, uma estrela de festa ou esteja apenas procurando uma maneira divertida de passar o tempo, temos tudo o que você precisa para soltar a voz e brilhar no palco.</p>
        </section>

        <div className="servicos">
          <h3>Explore a Diversão do Karaoke</h3>
          <p>Explore nossa biblioteca de músicas. Com letras sincronizadas, suporte para vários dispositivos e atualizações constantes, garantimos que você sempre terá a melhor experiência de karaokê.
          Prepare-se para transformar qualquer lugar em um show espetacular. Vamos cantar juntos com o YouTube como sua trilha sonora!</p>
          <p>Aproveite ao máximo o seu tempo aqui, divirta-se e cante como nunca!</p>
        
        </div>
        <div className='link'>
          <Link to="/maisPedidas">Mais pedidas</Link>

        </div>
      </main>
      <Footer/>
    </div>
  )
}