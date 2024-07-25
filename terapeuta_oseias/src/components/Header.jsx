import '../static/Header.css';
import logo from '../assets/logo.svg';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <>
            <div className='div-header'>
                <div className='logo-view'>
                    <img src={logo} alt="Logo" />
                    <span className='logo-name'>Nome da Empresa</span>
                </div>
                <div className='div-nav'>
                    <ul className="nav nav-underline">
                        <li className="nav-item">
                            <a 
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                aria-current="page" 
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className={`nav-link ${location.pathname === '/clientes' ? 'active' : ''}`}
                                href="/clientes"
                            >
                                Clientes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className={`nav-link ${location.pathname === '/consultas' ? 'active' : ''}`}
                                href="/consultas"
                            >
                                Consultas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className={`nav-link ${location.pathname === '/impressao' ? 'active' : ''}`}
                                href="/impressao"
                            >
                                Impressão
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;
