# Configurar After Effects para Previsualización a Máxima Calidad

Este script para Adobe After Effects configura la previsualización de la composición activa a la máxima calidad posible. Ajusta la resolución, la calidad de renderizado de las capas y añade una capa de texto indicativa.

## Funcionalidad

- **Verificación de Proyecto Abierto**: Comprueba si hay un proyecto abierto en After Effects. Muestra un mensaje de error si no hay ningún proyecto.
- **Configurar Resolución y Calidad**: Si hay una composición activa seleccionada, el script realiza las siguientes acciones:
  - Configura la resolución de previsualización a completa (Full).
  - Añade una capa de texto en la parte inferior de la composición indicando que la previsualización está a máxima calidad.
  - Establece la calidad de renderizado de todas las capas a "Best".
  - Activa el desenfoque de movimiento en todas las capas, si está disponible.
  - Ajusta la calidad de visualización del viewer a alta, si es aplicable.
- **Mostrar Notificación**: Muestra una notificación al usuario indicando que la configuración de previsualización a máxima calidad se ha completado.

## Instrucciones de Uso

1. **Abrir After Effects**

   Abre Adobe After Effects y carga el proyecto en el que deseas trabajar.

2. **Seleccionar una Composición**

   Asegúrate de que tienes una composición seleccionada en el panel de proyecto.

3. **Ejecutar el Script**

   Ejecuta el script en After Effects. Puedes hacerlo copiando y pegando el código en el panel de script de After Effects y ejecutándolo.

## Requisitos

- Adobe After Effects
- Una composición activa seleccionada

## Advertencias

- Asegúrate de tener una composición seleccionada antes de ejecutar el script.
- El script crea un grupo de deshacer, permitiendo deshacer la operación como una sola acción.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request si tienes mejoras o correcciones.

## Autor

Alvaro Alexander Simbaqueva
