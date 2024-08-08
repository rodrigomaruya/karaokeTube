import { Link } from "react-router-dom"
import './index.css'
export default function Header(){

  return (
    <div className="div-container">
    <header className="header-wrapper">
      <div className="header">
        <div className="logo">
          <h1>Karaoke Tube</h1>
        </div>
      </div>
    </header>
    <nav className="menu-wrapper">

      <ul className="menu">
        <li ><Link to="/" className="active">Home</Link></li>
        <li ><Link to="/rock" className="active">Rock</Link></li>
        <li><Link to="/sertanejo" className="active">Sertanejo</Link></li>
        <li><Link to="/mpb" className="active">MPB</Link></li>
        <li><Link to="/maisPedidas" className="active">Mais pedidas</Link></li>
      </ul>

    </nav>
      
    </div>
  )
}