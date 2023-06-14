import React from 'react';

class ActualizacionDatos extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Credenciales</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbar-dark">
                            <li className="nav-item active">
                                <a className="nav-link" href="vistaprev.html">Vista previa de credencial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Actualización de datos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="solicitudrep.html">Módulo de solicitud de reposición de credencial</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container my-5">
                    <h2>Actualización de datos del estudiante</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre completo:</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre completo" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cuatrimestre">Cuatrimestre:</label>
                            <input type="text" className="form-control" id="cuatrimestre" placeholder="Ingresa tu cuatrimestre actual" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nss">Número de seguridad social:</label>
                            <input type="text" className="form-control" id="nss" placeholder="Ingresa tu número de seguridad social" />
                        </div>
                        <hr />
                        <h3>Datos de contacto de emergencia</h3>
                        <div className="form-group">
                            <label htmlFor="nombre_contacto">Nombre del contacto:</label>
                            <input type="text" className="form-control" id="nombre_contacto" placeholder="Ingresa el nombre del contacto de emergencia" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono_contacto">Número telefónico:</label>
                            <input type="text" className="form-control" id="telefono_contacto" placeholder="Ingresa el número telefónico del contacto de emergencia" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="correo_contacto">Correo electrónico:</label>
                            <input type="email" className="form-control" id="correo_contacto" placeholder="Ingresa el correo electrónico del contacto de emergencia" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="parentesco_contacto">Parentesco:</label>
                            <input type="text" className="form-control" id="parentesco_contacto" placeholder="Ingresa el parentesco del contacto de emergencia" />
                        </div>
                        <button type="submit" className="btn btn-primary">Actualizar datos</button>
                    </form>
                </div>

                <footer className="bg-dark text-light py-3" style={{ marginTop: "100px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h5>Contacto</h5>
                                <p>Contacto@uptapachula.edu.mx</p>
                                <p>(962) 689 0090 Ext. 1001-1010</p>
                                <p>Carretera Tapachula - Puerto Madero KM. 24 + 300. Tapachula, Chiapas</p>
                            </div>
                            <div className="col-md-8 text-md-right">
                                <p>&copy; 2023, UP Tapachula. Todos los derechos reservados.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default ActualizacionDatos;
