import React from 'react';

function Reposicion() {
    return (
        <>
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
                            <a className="nav-link" href="actdatos.html">Actualización de datos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Módulo de solicitud de reposición de credencial</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container my-4">
                <h2 className="text-center mb-4">Solicitar reposición de credencial</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre completo:</label>
                                <input type="text" className="form-control" id="nombre" name="nombre" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="matricula">Matrícula:</label>
                                <input type="text" className="form-control" id="matricula" name="matricula" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="carrera">Carrera:</label>
                                <input type="text" className="form-control" id="carrera" name="carrera" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cuatrimestre">Cuatrimestre:</label>
                                <input type="text" className="form-control" id="cuatrimestre" name="cuatrimestre" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="motivo">Motivo de la reposición:</label>
                                <textarea className="form-control" id="motivo" name="motivo" rows="3" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block my-4">Enviar solicitud</button>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="bg-dark text-light py-3" style={{ marginTop: '200px' }}>
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
        </>
    );
}

export default Reposicion;
