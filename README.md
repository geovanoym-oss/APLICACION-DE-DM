# Mi tienda Gamer - Nova Gamer

## Resumen del proyecto

**Mi Tienda Gamer** es una aplicación web de comercio electrónico especializada en productos gamer. Su diseño prioriza el uso desde celular, con una estética dark mode, detalles neón cian y naranja, tarjetas oscuras y navegación similar a una aplicación móvil.

La plataforma permite explorar productos por categorías, buscar productos, ver sus detalles, consultar especificaciones de PCs armadas, agregar artículos al carrito y usar formularios de registro e inicio de sesión.

El proyecto cuenta con un frontend desarrollado en React, un backend en Node.js/Express, una base de datos MongoDB y configuración para desplegarse en Railway.

## Objetivo

Ofrecer una experiencia de catálogo gamer clara, visual y especializada, donde los usuarios puedan encontrar productos para armar, mejorar o completar su setup: sillas, monitores, PCs armadas, componentes, teclados y mouse.

## Funcionalidades principales

- Carrusel de promociones en español en la pantalla de inicio.
- Productos destacados.
- Exploración por categorías.
- Catálogo completo de productos.
- Buscador por nombre, marca o categoría.
- Filtro de productos por categoría.
- Vista de detalle de cada producto.
- Especificaciones técnicas para PCs armadas.
- Carrito de compras persistente en el navegador.
- Menú lateral y buscador superior.
- Registro de usuarios.
- Inicio de sesión con contraseña encriptada.
- API para obtener productos desde MongoDB.
- Base de datos con 40 productos iniciales cargados.

## Categorías

- Sillas gamer
- Monitores
- PCs armadas
- Componentes
- Teclados
- Mouse

## Tecnologías utilizadas

### Frontend

- React
- Vite
- React Router DOM
- CSS personalizado
- LocalStorage

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- dotenv
- CORS

### Despliegue

- Git y GitHub
- Railway
- Docker

## Estructura del proyecto

```text
mi-tienda-gamer/
├── .gitignore
├── README.md
├── project.md
├── Dockerfile
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   └── data/
│       ├── seedProducts.js
│       └── seedDatabase.js
└── frontend/
    ├── package.json
    ├── index.html
    └── src/
        ├── App.jsx
        ├── index.jsx
        ├── components/
        ├── context/
        ├── data/
        ├── pages/
        └── styles/
```

## Requisitos previos

- Node.js 18 o superior.
- npm.
- Una cuenta de MongoDB o una base MongoDB creada en Railway.
- Una cuenta de Railway para el despliegue.

## Instalación y ejecución local

### 1. Clonar el repositorio

```bash
git clone URL_DE_TU_REPOSITORIO
cd mi-tienda-gamer
```

### 2. Configurar el backend

```bash
cd backend
npm install
```

Crea el archivo `backend/.env` con este contenido:

```env
PORT=5000
MONGO_URI=TU_URL_DE_MONGODB
JWT_SECRET=TU_CLAVE_PRIVADA_SEGURA
```

Inicia el backend:

```bash
npm run dev
```

El backend estará disponible en:

```text
http://localhost:5000
```

### 3. Cargar productos iniciales

Con el backend conectado a MongoDB, ejecuta:

```bash
npm run seed
```

Esto carga los productos definidos en `backend/data/seedProducts.js`.

### 4. Configurar el frontend

Abre otra terminal y ejecuta:

```bash
cd frontend
npm install
npm run dev
```

El frontend estará disponible normalmente en:

```text
http://localhost:5173
```

## Endpoints de la API

| Método | Endpoint                        | Descripción                            |
| ------ | ------------------------------- | -------------------------------------- |
| GET    | `/api/products`                 | Obtiene todos los productos.           |
| GET    | `/api/products?category=sillas` | Obtiene productos de una categoría.    |
| GET    | `/api/products?search=razer`    | Busca productos.                       |
| POST   | `/api/auth/register`            | Registra un nuevo usuario.             |
| POST   | `/api/auth/login`               | Inicia sesión y devuelve un token JWT. |

## Imágenes de productos

Las imágenes del catálogo local se encuentran en:

```text
frontend/src/data/products.js
```

Las imágenes de las tarjetas principales de categorías y del carrusel se encuentran en:

```text
frontend/src/pages/Home.jsx
```

Para usar fotos de productos específicas y evitar enlaces dañados, se recomienda subir imágenes autorizadas a un servicio como Cloudinary y pegar la URL directa generada en el producto correspondiente.

## Despliegue en Railway

El proyecto utiliza tres servicios en Railway:

1. **Frontend:** aplicación React/Vite.
2. **Backend:** API Node.js/Express.
3. **MongoDB:** base de datos de usuarios y productos.

En el servicio backend se deben configurar estas variables:

```text
MONGO_URI
JWT_SECRET
```

Nunca subas el archivo `.env` al repositorio de GitHub.

## Estado actual

- Interfaz mobile-first con diseño gamer dark/neón.
- Catálogo, categorías, carrusel y buscador funcionales.
- Detalle de producto y especificaciones de PCs.
- Carrito guardado localmente.
- Registro e inicio de sesión disponibles en el backend.
- MongoDB conectado y productos iniciales cargados.
- Proyecto preparado para GitHub y Railway.

## Próximas mejoras

- Conectar el frontend directamente con la API pública de Railway.
- Agregar teclados y mouse a la base de datos.
- Añadir imágenes oficiales o autorizadas por cada producto.
- Agregar favoritos.
- Permitir modificar cantidades en el carrito.
- Crear checkout e historial de pedidos.
- Agregar pagos reales y panel administrativo.
- Convertir la aplicación en una PWA instalable.

## Documentación adicional

Para conocer el análisis del proyecto, arquitectura, requisitos y funcionalidades futuras, consulta [project.md](./project.md).
