import {Link} from 'react-router-dom'
import SteamIcon from '../../img/icon/steamIcon.png'

import './header.css'

const links = [
    {local : '/jogos', texto : 'Jogos'},
    {local : '/nossas-lojas', texto : 'Nossas Lojas'},
    {local : '/contato', texto : 'Contato'}
]

const mapeamento = links.map((link) => <li key={link.local} className="nav-item"><Link className="nav-link text-light" to={link.local}>{link.texto}</Link></li>)

export default function Header() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to="/home"><img className="navbar-brand" src={SteamIcon} alt="Home page" /></Link>
                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>    
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">   
                        <div className="navbar-nav">
                            {mapeamento}
                        </div>   
                </div>
                </div>
            </nav>
    )
}