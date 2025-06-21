# 📝 Task Manager Backend

Backend para una aplicación de gestión de tareas usando Node.js, Express y MongoDB.

## 📋 Descripción

Este proyecto es un API REST para manejar tareas con los siguientes requisitos:

Modelo Task con campos:

- 🏷️ Title (String, obligatorio)

- ✅ Completed (Boolean, por defecto false)

- Uso de .env para guardar variables de entorno.

## Endpoints disponibles:

- ➕ Crear una tarea

- 📜 Obtener todas las tareas

- 🔍 Obtener una tarea por ID

- ✔️ Marcar una tarea como completada

- ✏️ Actualizar solo el título de una tarea (no se permite modificar el campo completed desde aquí)

- 🗑️ Eliminar una tarea

## 🛠️ Tecnologías usadas

- 🟢 Node.js

- ⚡ Express

- 🍃 MongoDB con Mongoose

- 🔐 dotenv para variables de entorno

## 🚀 Instalación

### 1. Clonar el repositorio

git clone <url-del-repo>
cd <nombre-del-proyecto>

### 2.Instalar dependencias

### 3. Crear archivo .env en la raíz con las variables.

### 4. Ejecutar el servidor en modo desarrollo

npm install

npm run dev

npm start

## 🔗 Endpoints

Base URL: http://localhost:5000/tasks

- POST / ➕ Crear nueva tarea { "title": "Nueva tarea" }
- GET / 📜 Obtener todas las tareas -
- GET /:id 🔍 Obtener tarea por ID -
- PATCH /:id/complete ✔️ Marcar tarea como completada
