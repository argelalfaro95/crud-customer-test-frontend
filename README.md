# Red Efectiva - Prueba Técnica - CRUD Customer - Frontend

Este proyecto es únicamente el Frontend de la prueba #2 del test de Red Efectiva. Pretende ser el gestionador visual para el API que contiene un CRUD de Clientes, se debe de coorrer el proyecto Backend ([crud-customer-test-backend](https://github.com/argelalfaro95/crud-customer-test-backend/tree/main)) antes para poder utilizar este. 


## Requerimientos

`NodeJS 20+`: [Descargar versión v20.14.0](https://nodejs.org/dist/v20.14.0/node-v20.14.0-x64.msi)

## Pasos a seguir

### Clonar el repositorio

    git clone https://github.com/argelalfaro95/crud-customer-test-frontend.git

### Instalar Dependencias

    npm install

### Ejecutar el proyecto

    npm start

## Troubleshooting    

### Ruta (URL) al Backend

En caso de necesitar cambiar el url del endpoint del backend, se deberá de modificar en el archivo `.env` en la raíz del proyecto.

## Estructura del Proyecto

    src/
    ├── components/
    |── |── CustomerForm.js
    |── |── CustomerList.js
    ├── App.css
    ├── App.js
    ├── index.css
    ├── index.js
    ├── setupTests.js

## Preview APP

### Formulario principal

![Listado de clientes](/resource/crud-frontend-customer-01.png)

### Formulario creación

![Creación de cliente](/resource/crud-frontend-customer-02.png)

### Formulario edición

![Creación de cliente](/resource/crud-frontend-customer-03.png)