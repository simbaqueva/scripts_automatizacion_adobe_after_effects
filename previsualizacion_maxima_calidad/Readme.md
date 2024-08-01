# Script para Configurar After Effects para una Previsualización a Máxima Calidad

Este script para Adobe After Effects configura la previsualización de la composición activa a la máxima calidad posible. Ajusta la resolución, la calidad de renderizado de las capas y añade una capa de texto indicativa.

## Instrucciones de Uso

1. **Abrir After Effects**

   Abre Adobe After Effects y carga el proyecto en el que deseas trabajar.

2. **Seleccionar una Composición**

   Asegúrate de que tienes una composición seleccionada en el panel de proyecto.

3. **Ejecutar el Script**

   Ejecuta el script en After Effects. Puedes hacerlo copiando y pegando el código en el panel de script de After Effects y ejecutándolo.

## Funcionalidad

1. **Verificar Proyecto Abierto**

   El script verifica si hay un proyecto abierto en After Effects. Si no hay un proyecto abierto, muestra un mensaje de error.

2. **Configurar Resolución y Calidad**

   Si hay una composición activa seleccionada, el script realiza las siguientes acciones:
   - Configura la resolución de previsualización a completa (Full).
   - Añade una capa de texto en la parte inferior de la composición indicando que la previsualización está configurada a máxima calidad.
   - Establece la calidad de renderizado de todas las capas a "Best".
   - Activa el desenfoque de movimiento en todas las capas, si está disponible.
   - Ajusta la calidad de visualización del viewer a alta, si es aplicable.

3. **Mostrar Notificación**

   El script muestra una notificación al usuario indicando que la configuración de previsualización a máxima calidad se ha completado.

## Advertencias

- Asegúrate de tener una composición seleccionada antes de ejecutar el script.
- El script crea un grupo de deshacer, permitiendo deshacer la operación como una sola acción.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
