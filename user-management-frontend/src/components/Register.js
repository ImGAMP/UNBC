import { useState } from 'react';
import { register } from '../services/api';
import React from 'react';


function Register() {
  const [formData, setFormData] = useState({
    nombre: '', apellido: '', correo: '', telefono: '', password: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      alert('Registro exitoso');
    } catch (error) {
      console.error(error);
      alert('Error en el registro');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" onChange={handleChange} />
      <input name="apellido" placeholder="Apellido" onChange={handleChange} />
      <input name="correo" placeholder="Correo" onChange={handleChange} />
      <input name="telefono" placeholder="Teléfono" onChange={handleChange} />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Register;

