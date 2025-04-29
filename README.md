# 👥 UNBC - User Management System (ABM/CRUD)

Este proyecto consiste en el desarrollo de un sistema de administración de usuarios que permite realizar operaciones de **Alta, Baja, Modificación y Consulta (CRUD)**. Cada usuario tiene los siguientes atributos:

- Nombre
- Apellido
- Correo electrónico
- Número de teléfono
- Contraseña

Los usuarios deben poder **loguearse** para acceder al sistema de administración y gestionar los datos.

---

## ⚙️ Tecnologías utilizadas

- **Laravel** con Livewire
- **TailwindCSS**
- **VueJS** (opcional según versión)
- **PHP 8+**
- **MySQL / PostgreSQL** (según configuración local)
- **Autenticación Laravel Breeze / Jetstream**

---

## 📂 Estructura general del proyecto

```
UNBC/
├── app/
├── database/
│   └── migrations/     # Migraciones para crear la tabla de usuarios
├── resources/
│   └── views/          # Vistas Livewire
├── routes/
│   └── web.php         # Rutas del sistema CRUD
└── README.md
```

---

## 🚀 ¿Cómo levantar el proyecto?

### 1. Clonar el repositorio
```bash
git clone https://github.com/ImGAMP/UNBC.git
cd UNBC
```

### 2. Instalar dependencias
```bash
composer install
npm install && npm run dev
```

### 3. Configurar el entorno
```bash
cp .env.example .env
php artisan key:generate
```

Configura tu archivo `.env` con los datos de la base de datos que vayas a usar (MySQL o PostgreSQL).

### 4. Ejecutar migraciones
```bash
php artisan migrate
```

### 5. Levantar el servidor local
```bash
php artisan serve
```

---

## 🔐 Autenticación

El sistema implementa login de usuarios. Se puede extender para recuperación de contraseña y control de roles según se necesite.

---

## 👨‍💻 Autor

**Gustavo A. Mojica Perdigón**  
Fullstack Engineer | Clean Architecture | Laravel & Vue Enthusiast  
[LinkedIn](https://www.linkedin.com/in/imgamp-it/) | [GitHub](https://github.com/ImGAMP)

---

## 📝 Licencia

MIT License – Libre uso con fines de aprendizaje o pruebas técnicas.
