import { useState } from 'react';
import { login } from '../services/api';
import React from 'react';


function Login({ setToken }) {
  const [formData, setFormData] = useState({ correo: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(formData);
      setToken(data.token);
      alert('Inicio de sesión exitoso');
    } catch (error) {
      console.error(error);
      alert('Error en el inicio de sesión');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="correo" placeholder="Correo" onChange={handleChange} />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default Login;

