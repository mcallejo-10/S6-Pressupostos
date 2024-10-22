# Aplicación de Presupuestos de Páginas Web

## Descripción

Esta aplicación tiene como objetivo calcular el presupuesto de una página web en función de las opciones seleccionadas por el usuario. Se trata de una herramienta interactiva que permite a los usuarios ajustar parámetros y ver cómo estos afectan al costo final. La aplicación incluye funcionalidades como la selección de servicios, la personalización de detalles de una página web (número de páginas y de idiomas), y la generación de múltiples presupuestos con opción de ordenarlos y filtrarlos.

El proyecto está desarrollado con **Angular 18**, utilizando **TypeScript** como lenguaje principal, junto con formularios reactivos, validación personalizada, y comunicación entre componentes. Para la interfaz, se ha integrado **Bootstrap 5**, y el preprocesador **SASS** para los estilos.

## Funcionalidades Principales

1. **Selección de Servicios**:
   - Los usuarios pueden seleccionar entre tres servicios que afectan al costo del presupuesto.
   - A medida que el usuario selecciona o deselecciona servicios, el presupuesto se actualiza automáticamente.
   - Si el usuario elige la opción de crear una página web, puede personalizar el presupuesto seleccionando el número de páginas y el número de idiomas.

2. **Interfaz Interactiva**:
   - La aplicación cuenta con un formulario reactivo que valida los inputs introducidos por el usuario.
   - Se ha implementado un sistema de botones para incrementar o reducir el número de páginas e idiomas.
   - También se ha añadido un botón de ayuda que abre un popup (modal de Bootstrap) para explicar los inputs de manera más clara.

3. **Gestión de Presupuestos**:
   - Los usuarios pueden generar múltiples presupuestos, y cada uno se almacena con los detalles del cliente (nombre, teléfono y email).
   - Los presupuestos generados se muestran en una lista y se pueden gestionar a través de un servicio que centraliza la información.

4. **Ordenación y Búsqueda**:
   - La aplicación permite ordenar los presupuestos generados por fecha, precio o alfabéticamente por el nombre del cliente.
   - También cuenta con un buscador para filtrar los presupuestos en función del nombre del cliente.

5. **Compartir URL**:
   - Cada presupuesto puede compartirse mediante una URL que refleja las selecciones hechas por el usuario. Esto permite que otra persona vea exactamente el mismo presupuesto al acceder a la URL.

## Tecnologías Utilizadas

- **Angular 18**: Framework principal utilizado para la construcción de la aplicación.
- **TypeScript**: Lenguaje de programación usado en Angular para tipado estático y desarrollo robusto.
- **Bootstrap 5**: Utilizado para el diseño responsivo y los estilos visuales.
- **SASS**: Preprocesador CSS para una mayor flexibilidad en los estilos.
- **HTML5**: Lenguaje base para la estructura de la interfaz de usuario.
- **Karma & Jasmine**: Herramientas de testeo usadas para escribir y ejecutar pruebas unitarias.

## Instalación

1. Clona este repositorio en tu máquina local.
   ```bash
   git clone <url-del-repositorio>
   ```
2. Instala las dependencias necesarias ejecutando:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```
4. Accede a la aplicación en el navegador mediante la dirección `http://localhost:4200`.

## Ejecución de Test Unitarios

Para garantizar la estabilidad del proyecto, se incluyen tests unitarios creados con **Karma** y **Jasmine**. Para ejecutarlos, usa el siguiente comando:
```bash
ng test
```

Esto abrirá un entorno de test que ejecutará todas las pruebas definidas en los archivos de testeo.

