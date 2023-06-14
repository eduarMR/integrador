import React from 'react';
import uptapLogo from '../img/uptap.jpg';
import '../css/opcion.css';
import '../fontawesome-free-6.3.0-web/css/all.min.css';
import Nabvar from '../componentes/nabvar';

function Accesos() {
    return (
        <>
            <Nabvar />
            <div className="logo">
                <img src={uptapLogo} alt="Logo" />
            </div>
            <div className="separador" />
            <div className="container">
                <div className="info">
                    <h1>Universidad Politécnica De Tapachula</h1>
                    <span>
                        <a href="/">Bienvenido a Credencialización Digital</a>
                    </span>
                </div>
                <div className="menu">
                    <div className="menu-item alumno">
                        <i className="fa-solid fa-user" />
                        <h2>Alumno</h2>
                        <a href="/alumno">
                            <button>IR</button>
                        </a>
                    </div>
                    <div className="menu-item profesor">
                        <i className="fas fa-chalkboard-teacher" />
                        <h2>Profesor</h2>
                        <a href="/profesor">
                            <button>IR</button>
                        </a>
                    </div>
                    <div className="menu-item administrativos">
                        <i className="fa-solid fa-shield-halved" />
                        <h2>Administrativos</h2>
                        <a href="/administrativos">
                            <button>IR</button>
                        </a>
                    </div>
                </div>
            </div>
            <footer>
                <div>
                    © 2023 Universidad Politécnica de Tapachula
                    
                </div>
            </footer>
        </>
    );
}

export default Accesos;
