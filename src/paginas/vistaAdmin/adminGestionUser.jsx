import React from 'react';

class AdminGestionUsuarios extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Administrador</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="credadmin.html">Vista previa credencial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="adminges.html">Gestión de usuarios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="gescreds.html">Gestión de credenciales</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="adminmess.html">Mensajería</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <h1>Gestión de usuarios</h1>
                    <p>En esta sección, puedes realizar las siguientes acciones:</p>
                    <ul>
                        <li>Agregar nuevos usuarios</li>
                        <li>Editar información de usuarios existentes</li>
                        <li>Eliminar usuarios</li>
                    </ul>

                    <hr />

                    <h2>Agregar nuevo usuario</h2>
                    <form onSubmit={this.agregar}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre completo:</label>
                            <input type="text" className="form-control" id="nombre" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico:</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tipo-usuario">Tipo de usuario:</label>
                            <input type="text" className="form-control" id="tipo-usuario" />
                        </div>
                        <button type="submit" className="btn btn-primary">Agregar usuario</button>
                    </form>

                    <hr />

                    <h2>Usuarios existentes</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Nombre completo</th>
                                <th>Correo electrónico</th>
                                <th>Tipo de usuario</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>johndoe@example.com</td>
                                <td>Estudiante</td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-primary" onClick={() => this.editar(1)}>Editar</button>
                                    <button type="button" className="btn btn-sm btn-danger eliminar-usuario">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <footer className="bg-dark text-light py-3" style={{ marginTop: "200px" }}>
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

export default AdminGestionUsuarios;
