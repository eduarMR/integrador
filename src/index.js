import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ActualizacionDatos from './paginas/vistaUser/ActualizacionDatosPage';
import VistaPrevia from './paginas/vistaUser/vistaprevia';
import { BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Reposicion from './paginas/vistaUser/solicitudRepocision';
import LoginAlumno from './paginas/logins/alumno';
import LoginAdmin from './paginas/logins/administradores';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
    
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/LoginAlumnos" element={<LoginAlumno />} />
      <Route exact path="/LoginAdmins" element={<LoginAdmin />} />
      <Route exact path="/VistaPrevia" element={<VistaPrevia />} />
      <Route exact path="/ActualizacionDatos" element={<ActualizacionDatos />} />
      <Route exact path="/SolicitudReposicion" element={<Reposicion />} />
    </Routes>

  </Router>

  </React.StrictMode>
);
