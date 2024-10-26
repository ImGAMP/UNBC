import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';
import React from 'react';


function UserList({ token }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await getUsers(token);
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id, token);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error(error);
      alert('Error al eliminar usuario');
    }
  };

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.nombre} {user.apellido} - {user.correo}
          <button onClick={() => handleDelete(user.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;

