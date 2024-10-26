import { Link } from 'react-router-dom';
import React from 'react';


function Navbar() {
  return (
    <nav>
      <Link to="/register">Registro</Link>
      <Link to="/login">Iniciar Sesión</Link>
      <Link to="/users">Usuarios</Link>
    </nav>
  );
}

export default Navbar;

