import { useState } from 'react';
import { updateUser } from '../services/api';
import React from 'react';


function UserForm({ user, token, refreshUsers }) {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user.id, formData, token);
      alert('Usuario actualizado');
      refreshUsers();
    } catch (error) {
      console.error(error);
      alert('Error al actualizar usuario');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" value={formData.nombre} onChange={handleChange} />
      <input name="apellido" value={formData.apellido} onChange={handleChange} />
      <input name="correo" value={formData.correo} onChange={handleChange} />
      <input name="telefono" value={formData.telefono} onChange={handleChange} />
      <button type="submit">Actualizar</button>
    </form>
  );
}

export default UserForm;

