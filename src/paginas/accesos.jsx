import React from 'react';
import '../css/opcion.css';
import '../fontawesome-free-6.3.0-web/css/all.min.css';
import Button from '@mui/material/Button';
import Footer from '../componentes/footer'
import BarraAcceso from '../componentes/bar';

function Accesos() {
    return (
        <>
            <BarraAcceso/>
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
                            <Button variant="outlined" color='secondary'>IR</Button>
                        </a>
                    </div>
                    <div className="menu-item profesor">
                        <i className="fas fa-chalkboard-teacher" />
                        <h2>Profesor</h2>
                        <a href="/profesor">
                            <Button variant="outlined" color='secondary'>IR</Button>
                        </a>
                    </div>
                    <div className="menu-item administrativos">
                        <i className="fa-solid fa-shield-halved" />
                        <h2>Administrativos</h2>
                        <a href="/administrativos">
                            <Button variant="outlined" color='secondary'>IR</Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='separator'></div>
            <Footer/>
        </>
    );
}

export default Accesos;
