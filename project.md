# Mi Tienda Gamer — Nova Gamer

## 1. Descripción detallada del proyecto

Mi Tienda Gamer es una aplicación web de comercio electrónico especializada en productos gamer. Está diseñada con una experiencia **mobile-first**, es decir, prioriza el uso desde teléfonos móviles, manteniendo también compatibilidad con computadoras y tabletas.

La aplicación permite descubrir, buscar y consultar productos de las categorías de sillas gamer, monitores, PCs armadas, componentes, teclados y mouse. Cada producto dispone de nombre, marca, precio, imagen, descripción y, en el caso de las PCs armadas, especificaciones técnicas.

La identidad visual utiliza modo oscuro, tarjetas oscuras, acentos neón cian (`#00f3ff`) y naranja (`#ff6600`), bordes luminosos y una navegación inferior similar a una aplicación móvil.

La solución se compone de un frontend construido con React y Vite, un backend con Node.js y Express, una base de datos MongoDB y despliegue en Railway.

## 2. Problema que resuelve

Los marketplaces generales contienen muchos productos que no están relacionados con gaming, lo que hace más difícil encontrar componentes, periféricos y equipos completos. Además, la información técnica suele estar dispersa o no está presentada para usuarios que quieren armar o mejorar un setup gamer.

Mi Tienda Gamer centraliza productos de este nicho en una interfaz visual, rápida y pensada para dispositivos móviles.

## 3. Público objetivo

- Gamers que desean mejorar o armar su setup.
- Usuarios que buscan PCs gaming completas.
- Personas interesadas en monitores, sillas, teclados y mouse gamer.
- Usuarios que desean consultar componentes como procesadores, tarjetas gráficas, memorias RAM, SSD, gabinetes y refrigeración.
- Personas entre adolescentes y adultos con interés en videojuegos y tecnología.

## 4. Propuesta de valor

- Catálogo centrado exclusivamente en productos gamer.
- Interfaz moderna, oscura y optimizada para celular.
- Categorías claras para navegar rápidamente.
- Buscador por nombre, marca o categoría.
- Detalle de productos con precio, descripción e imagen.
- Especificaciones técnicas de PCs armadas.
- Carrito persistente en el navegador.
- Registro e inicio de sesión mediante API.
- Base de datos remota MongoDB.

## 5. Tecnologías utilizadas

### Frontend

- React
- Vite
- React Router DOM
- CSS personalizado
- LocalStorage para carrito y datos locales

### Backend

- Node.js
- Express
- Mongoose
- MongoDB
- bcryptjs
- JSON Web Token (JWT)
- CORS
- dotenv

### Despliegue y control de versiones

- Git
- GitHub
- Railway
- Docker

## 6. Categorías del catálogo

| Categoría    | Identificador interno |
| ------------ | --------------------- |
| Sillas gamer | `sillas`              |
| Monitores    | `monitores`           |
| PCs armadas  | `pcs-armadas`         |
| Componentes  | `componentes`         |
| Teclados     | `teclados`            |
| Mouse        | `mouse`               |

El catálogo inicial cargado en MongoDB contiene 40 productos. El frontend está preparado para ampliar el catálogo con teclados y mouse.

## 7. Requisitos funcionales actuales

| ID   | Requisito                                                                |
| ---- | ------------------------------------------------------------------------ |
| RF01 | El sistema debe mostrar promociones en un carrusel de inicio.            |
| RF02 | El sistema debe mostrar productos destacados.                            |
| RF03 | El sistema debe permitir navegar por categorías.                         |
| RF04 | El sistema debe permitir ver el catálogo completo.                       |
| RF05 | El sistema debe permitir buscar productos por nombre, marca o categoría. |
| RF06 | El sistema debe permitir filtrar el catálogo por categoría.              |
| RF07 | El sistema debe mostrar el detalle de cada producto.                     |
| RF08 | El sistema debe mostrar especificaciones técnicas para PCs armadas.      |
| RF09 | El sistema debe permitir agregar productos al carrito.                   |
| RF10 | El sistema debe permitir eliminar productos del carrito.                 |
| RF11 | El carrito debe mantenerse guardado en el navegador.                     |
| RF12 | El sistema debe permitir registrar usuarios.                             |
| RF13 | El sistema debe permitir iniciar sesión.                                 |
| RF14 | El backend debe entregar productos mediante una API.                     |
| RF15 | El backend debe permitir filtrar productos por categoría o búsqueda.     |
| RF16 | El sistema debe incluir un menú lateral y un buscador superior.          |

## 8. Requisitos no funcionales

| ID    | Requisito                                                     |
| ----- | ------------------------------------------------------------- |
| RNF01 | La interfaz debe adaptarse correctamente a pantallas móviles. |
| RNF02 | La aplicación debe usar un diseño oscuro con detalles neón.   |
| RNF03 | Las imágenes deben utilizar URLs externas y directas.         |
| RNF04 | El carrito debe persistir entre sesiones del navegador.       |
| RNF05 | Las contraseñas no deben guardarse en texto plano.            |
| RNF06 | Las variables privadas no deben subirse a GitHub.             |
| RNF07 | El proyecto debe poder desplegarse en Railway.                |

## 9. Pantallas principales

| Pantalla            | Propósito                                               |
| ------------------- | ------------------------------------------------------- |
| Inicio              | Muestra carrusel, categorías y productos destacados.    |
| Catálogo            | Muestra los productos y filtros por categoría.          |
| Detalle de producto | Muestra información, imagen, precio y especificaciones. |
| Carrito             | Muestra productos agregados por el usuario.             |
| Login               | Permite iniciar sesión.                                 |
| Registro            | Permite crear una cuenta.                               |
| Menú lateral        | Acceso a inicio, categorías, carrito y perfil.          |
| Buscador            | Permite encontrar productos mediante texto.             |

## 10. Flujo de navegación

```text
Inicio
 ├── Carrusel de promociones
 ├── Categorías
 │   └── Catálogo filtrado por categoría
 ├── Productos destacados
 │   └── Detalle de producto
 │       └── Agregar al carrito
 └── Ver todos
     └── Catálogo

Catálogo
 ├── Buscar producto
 ├── Filtrar por categoría
 └── Detalle de producto
     └── Agregar al carrito

Carrito
 └── Ver o eliminar productos agregados

Perfil
 ├── Login
 └── Registro
```

La navegación inferior contiene:

```text
[ Inicio ] [ Productos ] [ Carrito ] [ Perfil ]
```

## 11. Arquitectura del sistema

```text
Usuario
   │
   ▼
Frontend React + Vite
   │
   ▼
Backend Node.js + Express
   │
   ▼
MongoDB
```

El frontend muestra la interfaz y consume la API. El backend maneja usuarios y productos. MongoDB guarda los productos y usuarios.

## 12. Estructura del proyecto

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
│   │   ├── User.js
│   │   └── Product.js
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

## 13. Modelo de datos

### Producto

```js
{
  id: 1,
  name: "Secretlab TITAN Evo 2022",
  brand: "Secretlab",
  category: "sillas",
  price: 549.00,
  image: "https://url-directa-de-la-imagen.jpg",
  description: "Silla gamer de alto rendimiento.",
  specifications: {}
}
```

### Especificaciones de PC armada

```js
{
  Procesador: "Intel Core i9-14900K",
  "Tarjeta gráfica": "NVIDIA GeForce RTX 4080",
  RAM: "32 GB DDR5",
  Almacenamiento: "2 TB NVMe SSD"
}
```

### Usuario

```js
{
  name: "Nombre del usuario",
  email: "usuario@email.com",
  password: "Contraseña encriptada"
}
```

## 14. Endpoints de la API

| Método | Endpoint                        | Descripción                            |
| ------ | ------------------------------- | -------------------------------------- |
| GET    | `/api/products`                 | Obtiene todos los productos.           |
| GET    | `/api/products?category=sillas` | Obtiene productos por categoría.       |
| GET    | `/api/products?search=razer`    | Busca productos.                       |
| POST   | `/api/auth/register`            | Registra un usuario.                   |
| POST   | `/api/auth/login`               | Inicia sesión y devuelve un token JWT. |

## 15. Variables de entorno

El archivo `backend/.env` no debe subirse a GitHub.

```env
PORT=5000
MONGO_URI=URL_DE_CONEXION_A_MONGODB
JWT_SECRET=CLAVE_PRIVADA_SEGURA
```

En Railway, estas variables se agregan desde la pestaña **Variables** del servicio backend.

## 16. Ejecución local

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend se ejecuta normalmente en:

```text
http://localhost:5173
```

El backend se ejecuta normalmente en:

```text
http://localhost:5000
```

## 17. Base de datos

MongoDB almacena los usuarios y productos de la aplicación.

Para cargar los productos iniciales se utiliza:

```bash
npm run seed
```

Este comando ejecuta el archivo `backend/data/seedDatabase.js` y carga los productos definidos en `backend/data/seedProducts.js`.

## 18. Despliegue en Railway

El proyecto utiliza tres servicios en Railway:

1. Frontend React/Vite.
2. Backend Node.js/Express.
3. Base de datos MongoDB.

El backend recibe la URL de MongoDB mediante la variable `MONGO_URI`. Railway genera dominios públicos independientes para frontend y backend.

## 19. Estado actual

El proyecto cuenta actualmente con:

- Interfaz responsive para celular.
- Diseño gamer oscuro con luces neón.
- Carrusel de promociones en español.
- Categorías de productos.
- Productos destacados.
- Catálogo y detalle de productos.
- Especificaciones de PCs armadas.
- Buscador y menú lateral funcionales.
- Carrito local.
- Registro e inicio de sesión.
- Backend con API.
- MongoDB conectado.
- Productos cargados en la base de datos.
- Configuración preparada para Railway y GitHub.

## 20. Mejoras futuras

- Conectar el frontend de forma definitiva a la API pública de Railway.
- Agregar teclados y mouse a MongoDB.
- Agregar imágenes oficiales o autorizadas para cada producto.
- Añadir favoritos.
- Editar cantidades en el carrito.
- Añadir control real de stock.
- Crear checkout y pedidos simulados.
- Crear historial de pedidos.
- Añadir panel de administración.
- Integrar pagos reales.
- Convertir la aplicación en una PWA instalable.
