import React from "react";
import { Link } from "react-router-dom"

function NavAlumnos(){

return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Credenciales</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav navbar-dark">
                        <li className="nav-item active">
                        <Link to="VistaPrevia" > Vista Previa </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="ActualizacionDatos" > Actualizacion de datos </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="SolicitudReposicion" > Solicitar reposicion </Link>
                        </li>
                    </ul>
                </div>
            </nav>
)

}

export default NavAlumnos;