# 📒 Contact Manager

**Contact Manager** es una aplicación web desarrollada con **React, Bootstrap y Context API**, que permite gestionar contactos mediante un sistema CRUD completo. Los contactos pueden organizarse en diferentes agendas y sincronizarse con una API REST.

## 🚀 Características

- 📋 **Lista de Contactos**: Visualiza y filtra contactos según su agenda.
- ➕ **Añadir Contactos**: Crea nuevos contactos y asócialos a una agenda.
- 📝 **Actualizar Contactos**: Modifica la información de los contactos existentes.
- ❌ **Eliminar Contactos**: Borra contactos con confirmación mediante un modal.
- 📂 **Gestión de Agendas**: Crea y organiza contactos en diferentes agendas.
- 🎨 **Diseño Moderno**: Interfaz estilizada con Bootstrap para una experiencia fluida.
- ⚡ **Gestión Global con Context API**: Estado centralizado para un rendimiento óptimo.

## 🛠 Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/JulioRom/contact-manager-react

2. Navega hasta el directorio del proyecto:
```bash
cd todo-api-react
```

3. Instala las dependencias:
```bash
npm install
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:5173` para ver la aplicación en acción.

## 🌐 Configuración de la API

La aplicación consume los datos de la API REST en:

```bash
https://playground.4geeks.com/contact/docs
```

Asegúrate de que la API esté operativa para que la aplicación funcione correctamente.

## 📂 Estructura del Proyecto

```plaintext
src/
├── api/
│   ├── contactAPI.js         # Funciones para interactuar con la API REST
├── components/
│   ├── AgendaForm.jsx        # Formulario para crear y actualizar agendas
│   ├── ContactCard.jsx       # Tarjeta para mostrar un contacto individual
│   ├── ContactForm.jsx       # Formulario para añadir o actualizar contactos
│   ├── Modal.jsx             # Modal de confirmación para eliminar contactos
│   ├── Navbar.jsx            # Barra de navegación
├── context/
│   ├── ContactContext.jsx    # Context API para la gestión global del estado
├── pages/
│   ├── AddAgenda.jsx         # Página para crear una nueva agenda
│   ├── AddContact.jsx        # Página para añadir un nuevo contacto
│   ├── AgendaList.jsx        # Página que muestra la lista de agendas
│   ├── ContactList.jsx       # Página que muestra la lista de contactos
│   ├── Home.jsx              # Página de inicio
├── routes/
│   ├── AppRoutes.jsx         # Definición de rutas de la aplicación
├── App.jsx                   # Componente principal de la aplicación
├── main.jsx                  # Punto de entrada principal de React
```

## 📌 Uso de la Aplicación

### 🔍 **Ver Contactos**
1. Accede a la sección **"Contactos"** desde la barra de navegación.
2. Selecciona una agenda en el desplegable para filtrar los contactos.

### ➕ **Añadir Contacto**
1. Dirígete a **"Añadir Contacto"**.
2. Completa el formulario con nombre, email, teléfono y dirección.
3. Selecciona la agenda en la que se almacenará el contacto.
4. Haz clic en **"Crear Contacto"**.

### 📝 **Editar Contacto** (Próximamente)
1. Implementaremos una opción para modificar un contacto existente.

### ❌ **Eliminar Contacto**
1. En la lista de contactos, haz clic en **"Eliminar"**.
2. Se abrirá un **modal de confirmación** antes de proceder.

### 📂 **Crear una Nueva Agenda**
1. Accede a la pestaña **"Crear Agenda"**.
2. Ingresa el nombre de la agenda y confírmala.

## 🛠 Tecnologías Utilizadas

- **React**: Framework principal para la interfaz.
- **React Router**: Manejo de rutas y navegación.
- **Bootstrap**: Estilos y componentes responsivos.
- **Context API**: Gestión del estado global.
- **Fetch API (Axios)**: Comunicación con la API REST.

## 🔮 Mejoras Futuras

- ✏️ **Edición de Contactos**.
- 🔍 **Búsqueda y Filtros Avanzados**.
- 🔐 **Autenticación de Usuarios**.
- 📊 **Dashboard con Estadísticas de Contactos**.

## 🧑‍💻 Autor

- **Desarrollado por JulioRom**
- 📧 **Correo:** [julioandrescampos@gmail.com](mailto:julioandrescampos@gmail.com)
- 🔗 **GitHub:** [https://github.com/JulioRom](https://github.com/JulioRom)

## 📜 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo LICENSE para más detalles.