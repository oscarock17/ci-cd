# 07-app-nodejs-docker

Este proyecto es una aplicación sencilla construida con Node.js, utilizando PostgreSQL como base de datos, Redis para el manejo de caché y Nginx como proxy reverso.

## Estructura del Proyecto

```
07-app-nodejs-docker
├── src
│   ├── app.js          # Punto de entrada de la aplicación
│   ├── db              # Módulo para manejar la base de datos
│   │   └── index.js    # Conexión y operaciones CRUD en PostgreSQL
│   ├── cache           # Módulo para manejar el caché
│   │   └── index.js    # Conexión y operaciones en Redis
│   └── routes          # Definición de rutas de la aplicación
│       └── index.js    # Manejo de solicitudes y controladores
├── docker
│   ├── nginx           # Configuración de Nginx
│   │   └── nginx.conf  # Configuración del servidor Nginx
│   └── postgres        # Inicialización de la base de datos
│       └── init.sql    # Instrucciones SQL para inicializar PostgreSQL
├── .dockerignore       # Archivos y directorios a ignorar por Docker
├── Dockerfile          # Definición de la imagen de Docker
├── docker-compose.yml  # Servicios de Docker para el proyecto
├── package.json        # Configuración de npm y dependencias
└── README.md           # Documentación del proyecto
```

## Requisitos

- Node.js
- Docker
- Docker Compose

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   cd 07-app-nodejs-docker
   ```

2. Construye y ejecuta los contenedores:
   ```
   docker-compose up --build
   ```

## Uso

Una vez que los contenedores estén en funcionamiento, puedes acceder a la aplicación en `http://localhost:3000`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.