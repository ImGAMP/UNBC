# 👥 UNBC - User Management System (ABM/CRUD)

Este proyecto es una solución completa para la gestión de usuarios, que permite realizar operaciones de **Alta, Baja, Modificación y Consulta (CRUD)**. Los usuarios tienen los siguientes atributos:

- Nombre
- Apellido
- Correo electrónico
- Número de teléfono
- Contraseña

El sistema incluye un flujo de **autenticación** para el login de usuarios, que permite acceder al panel de administración y gestionar los datos.

---

## ⚙️ Tecnologías Utilizadas

- **Frontend**: React
- **Backend**: Node.js + Express
- **Base de Datos**: PostgreSQL
- **Orquestación**: Docker y Docker Compose

---

## 📂 Estructura del Repositorio

```
UNBC/
├── user-management/              # Backend - API REST con Express
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── user-management-frontend/    # Frontend - Aplicación React
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
└── docker-compose.yml           # Orquestación de servicios
```

---

## 🚀 ¿Cómo levantar el proyecto?

### 1. Clonar el repositorio
```bash
git clone https://github.com/ImGAMP/UNBC.git
cd UNBC
```

### 2. Levantar los servicios con Docker
```bash
docker-compose up --build
```

Esto levantará el backend en Express, el frontend en React y una base de datos PostgreSQL lista para usarse.

---

## 🧪 Endpoints y funcionalidades

- **Registro y login de usuarios**
- **Operaciones CRUD**: crear, editar, listar y eliminar usuarios
- **Validaciones básicas y hash de contraseñas**
- **Separación clara entre frontend y backend**

---

## 📜 Autor

**Gustavo A. Mojica Perdigón**  
Fullstack Engineer | Clean Architecture | React & Express Developer  
[LinkedIn](https://www.linkedin.com/in/imgamp-it/) | [GitHub](https://github.com/ImGAMP)

---

## 📝 Licencia

MIT License – Puedes usar este proyecto como base para pruebas técnicas o desarrollo personal.
