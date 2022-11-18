# EjercicioPractico

Este proyecto es una aplicación para conocer los diferentes personajes y locaciones de la conocida serie animada Rick and Morty. Desarrollado por el ingeniero multimedia Cristhian Felipe Reyes Cortes.

## Página de Inicio 

Podrás ver la lista de personajes de la serie Rick and Morty. De cada personaje podrás ver su imagen, nombre, especie, estado (Vivo, muerto o desconocido), última locación, último capítulo donde este salió. Además, pinchando en su imagen o botón de "Ver detalles" podrás conocer más información del personaje.

Si quieres conocer el tipo de locación, las dimensiones y el número de residentes, bastará con dar clic en el nombre de la locación.

Finalmente, puedes escoger uno o varios personajes favoritos, dando clic en el botón "Agregar a Favoritos".

## Personajes favoritos

En esta sesión podrás ver cuál o cuáles son los personajes favoritos que has elegido, además de contar con las mismas funciones que en la página principal.

## Características técnicas

- Bootstrap: Se importó la librería para la construcción de la UI, respetando estándares de diseño web. 
- FontAwesome: Se importó la librería para el uso de iconos.
- Angular: Proyecto con la versión 9.1.8 de Angular CLI.
- HttpClient: Se importó la librería HttpClient para consumir el servicio API REST.
- Arquitectura: (MVC) Modelo Vista Controlador.

## Configuración

1. Descargar o clonar proyecto.
2. Abrir proyecto en un editor de código.
3. Abrir la línea de comandos y ejecutar el comando `npm i` para instalar las dependencias que necesita el proyecto.
4. En la línea de comandos, ejecutar `ng serve` para correr el proyecto. Posteriormente, podrás navegarlo en `http://localhost:4200/`. Cualquier cambio que realices en el código recargará la página.

## Configuración GitHub

1. Abrir git bash en la carpeta del proyecto
2. `git init` es el primer comando que usamos y solo se utiliza en la configuración inicial. 
3. `git remote add origin https://github.com/cristianreyes214/pruebaTecnica.git` Apuntador local hacia el repositorio.
4. `git remote add fork https://github.com/<Tu usuario de Git>/pruebaTecnica.git` Apuntador del repositorio hacia el proyecto local.
5. `git fetch --all` para descargar los archivos (si aún no lo habías hecho).
6. `git checkot <nombre de rama>` para cambiar de rama.
7. `git status` cuando realices un cambio en el código.
8. `git add <archivo cambiado>` para agregar el cambio
9. `git commit -m "<nombre del cambio>"` para crear un nuevo commit.
10. `git push origin <nombre de rama>` para subir el cambio.

## Evidencias

En la carpeta de /src/assets deje registrado un video de 1 minuto sobre la aplicación.
