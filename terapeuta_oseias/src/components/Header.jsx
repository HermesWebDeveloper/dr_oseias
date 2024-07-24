import '../static/Header.css'
import logo from '../assets/logo.svg'

function Header() {

    return (
        <>
            <div className='div-header'>
                <div className='logo-view'>
                    <img src={logo}></img>
                    <span className='logo-name'>Nome da Empresa</span>
                </div>
                <div className='div-nav'>
                    <ul className="nav nav-underline">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Clientes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Consultas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Impressão</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header