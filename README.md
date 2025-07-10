# Ejercicios de CI/CD con GitHub Actions

Este repositorio contiene una serie de ejercicios prácticos para aprender e implementar integraciones y despliegues continuos (CI/CD) utilizando **GitHub Actions**. Cada workflow se encuentra en la carpeta `.github/workflows/` y demuestra un concepto clave del ciclo DevOps.

---

## 📂 Ejercicios disponibles

| Nº | Archivo | Descripción |
|----|---------|-------------|
| 01 | `01-hola-mundo.yml` | Primer workflow para imprimir un mensaje y realizar un test matemático. |
| 02 | `02-shell-script.yml` | Ejecución de comandos personalizados mediante un shell script en el workflow. |
| 03 | `03-variables.yml` | Uso de variables de entorno globales y por job. |
| 04 | `04-condicional.yml` | Condicionales en bash dentro de un workflow. |
| 05 | `05-app-python.yml` | Ejecución de pruebas con `pytest` y generación de reportes de cobertura. |
| 06 | `06-docker-build.yml` | Construcción y publicación de imágenes Docker en GitHub Container Registry (GHCR). |
| 07 | `07-self-hosted-test.yml` | Ejecución de un job en un runner self-hosted para pruebas locales. |
| 08 | `08-docker-en-runner.yml` | Construcción y despliegue de contenedores Docker en un runner self-hosted usando `docker-compose`. |
| 09 | `09-app-nodejs-docker.yml` | Pipeline completo de build y despliegue para una aplicación Node.js con Docker y pruebas de salud. |
| 10 | `10-ansible-playbook.yml` | Pipeline para ejecutar un playbook en ansible. |

---

## 📌 Requisitos

- Tener habilitado GitHub Actions en el repositorio.
- (Opcional) Tener configurado un runner self-hosted para algunos ejercicios.
- Acceso a `GitHub Container Registry (GHCR)` para ejercicios con Docker (`06`, `08`, `09`).

---

## 🙌 Autor

- Este proyecto fue creado por **Oscar Diaz**.

## Contacto

Para cualquier pregunta o comentario, no dudes en ponerte en contacto conmigo en [GitHub](https://github.com/oscarock17)
